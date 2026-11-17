import "server-only";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";
import { supabaseService } from "@/lib/supabase/server";

/**
 * Records are kept in two places:
 *   1. an append-only file store on the server (one JSON line per record) in DATA_DIR,
 *      which git and deploys leave alone — always on, so nothing is lost;
 *   2. Supabase tables call_requests and inquiries, when the service role key is set.
 * The admin page reads from Supabase when it is configured, otherwise from the files.
 */
const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), "data");

export type Collection = "bookings" | "inquiries";

export interface BookingRecord {
  id: string;
  createdAt: string;
  /** "request": the visitor proposed a time the founders still have to confirm */
  mode?: "slot" | "request";
  /** the booked slot, or for a request the time the visitor prefers */
  slotStart: string;
  durationMinutes: number;
  name: string;
  email: string;
  company?: string;
  service?: string;
  message?: string;
  timeZone?: string;
  status: "confirmed" | "cancelled" | "requested";
}

export interface InquiryRecord {
  id: string;
  createdAt: string;
  kind: "brief" | "contact";
  name: string;
  email: string;
  company?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message: string;
  page?: string;
}

const file = (c: Collection) => path.join(DATA_DIR, `${c}.jsonl`);

// writes to one file go through one queue so lines never interleave
const queues = new Map<Collection, Promise<unknown>>();

function enqueue<T>(c: Collection, job: () => Promise<T>): Promise<T> {
  const prev = queues.get(c) ?? Promise.resolve();
  const next = prev.then(job, job);
  queues.set(
    c,
    next.catch(() => undefined),
  );
  return next;
}

export async function readAll<T>(c: Collection): Promise<T[]> {
  try {
    const raw = await fs.readFile(file(c), "utf8");
    return raw
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        try {
          return JSON.parse(line) as T;
        } catch {
          return null;
        }
      })
      .filter((x): x is T => x !== null);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

async function append(c: Collection, record: object) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.appendFile(file(c), JSON.stringify(record) + "\n", "utf8");
}

export const newId = (prefix: string) => `${prefix}_${crypto.randomBytes(6).toString("hex")}`;

/* ---------------------------- Supabase mirror ---------------------------- */

const bookingRow = (b: BookingRecord) => ({
  id: b.id,
  created_at: b.createdAt,
  mode: b.mode ?? "slot",
  slot_start: b.slotStart,
  duration_minutes: b.durationMinutes,
  name: b.name,
  email: b.email,
  company: b.company ?? null,
  service: b.service ?? null,
  message: b.message ?? null,
  time_zone: b.timeZone ?? null,
  status: b.status,
});

const inquiryRow = (q: InquiryRecord) => ({
  id: q.id,
  created_at: q.createdAt,
  kind: q.kind,
  name: q.name,
  email: q.email,
  company: q.company ?? null,
  service: q.service ?? null,
  budget: q.budget ?? null,
  timeline: q.timeline ?? null,
  message: q.message,
  page: q.page ?? null,
});

/** Copies a record to Supabase. A failure is logged and never loses the record: the file already has it. */
async function mirror(table: "call_requests" | "inquiries", row: object) {
  const db = supabaseService();
  if (!db) return;
  try {
    const { error } = await db.from(table).insert(row);
    if (error) console.error(`[supabase] insert into ${table} failed:`, error.message);
  } catch (err) {
    console.error(`[supabase] insert into ${table} failed:`, err);
  }
}

/* --------------------------------- writes --------------------------------- */

export async function saveInquiry(record: InquiryRecord) {
  await enqueue("inquiries", () => append("inquiries", record));
  await mirror("inquiries", inquiryRow(record));
}

/**
 * Saves a booking unless its slot is already taken.
 * The check and the write run inside the same queue step, so two people
 * can't take one slot at the same moment.
 */
export function saveBookingIfFree(record: BookingRecord): Promise<boolean> {
  return enqueue("bookings", async () => {
    const existing = await readAll<BookingRecord>("bookings");
    const taken = existing.some((b) => b.status === "confirmed" && b.slotStart === record.slotStart);
    if (taken) return false;
    await append("bookings", record);
    return true;
  }).then(async (saved) => {
    if (saved) await mirror("call_requests", bookingRow(record));
    return saved;
  });
}

/** Saves a call request; requests never block each other. */
export async function saveCallRequest(record: BookingRecord) {
  await enqueue("bookings", () => append("bookings", record));
  await mirror("call_requests", bookingRow(record));
}

export async function takenSlots(): Promise<string[]> {
  const all = await readAll<BookingRecord>("bookings");
  return all.filter((b) => b.status === "confirmed").map((b) => b.slotStart);
}

/* ---------------------------------- reads --------------------------------- */

type Row = Record<string, unknown>;
const str = (v: unknown) => (v == null ? undefined : String(v));

/** Every call request and booking, newest first. Reads Supabase when configured, else the file. */
export async function listBookings(): Promise<{ items: BookingRecord[]; source: "supabase" | "file" }> {
  const db = supabaseService();
  if (db) {
    const { data, error } = await db.from("call_requests").select("*").order("slot_start", { ascending: true });
    if (!error && data) {
      const items = (data as Row[]).map((r) => ({
        id: String(r.id),
        createdAt: String(r.created_at),
        mode: r.mode === "request" ? "request" : "slot",
        slotStart: new Date(String(r.slot_start)).toISOString(),
        durationMinutes: Number(r.duration_minutes ?? 30),
        name: String(r.name),
        email: String(r.email),
        company: str(r.company),
        service: str(r.service),
        message: str(r.message),
        timeZone: str(r.time_zone),
        status: (r.status as BookingRecord["status"]) ?? "requested",
      })) as BookingRecord[];
      return { items, source: "supabase" };
    }
    console.error("[supabase] reading call_requests failed, using the file store:", error?.message);
  }
  return { items: await readAll<BookingRecord>("bookings"), source: "file" };
}

/** Every message and brief. Reads Supabase when configured, else the file. */
export async function listInquiries(): Promise<{ items: InquiryRecord[]; source: "supabase" | "file" }> {
  const db = supabaseService();
  if (db) {
    const { data, error } = await db.from("inquiries").select("*").order("created_at", { ascending: false });
    if (!error && data) {
      const items = (data as Row[]).map((r) => ({
        id: String(r.id),
        createdAt: new Date(String(r.created_at)).toISOString(),
        kind: r.kind === "brief" ? "brief" : "contact",
        name: String(r.name),
        email: String(r.email),
        company: str(r.company),
        service: str(r.service),
        budget: str(r.budget),
        timeline: str(r.timeline),
        message: String(r.message),
        page: str(r.page),
      })) as InquiryRecord[];
      return { items, source: "supabase" };
    }
    console.error("[supabase] reading inquiries failed, using the file store:", error?.message);
  }
  return { items: await readAll<InquiryRecord>("inquiries"), source: "file" };
}
