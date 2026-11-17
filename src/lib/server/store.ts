import "server-only";
import { supabaseService } from "@/lib/supabase/server";

/**
 * All call requests and messages live in Supabase (tables call_requests and inquiries).
 * Nothing is written to the server's disk. If Supabase is not configured or can't be
 * reached, every read and write throws StoreError and the caller reports it.
 */

export class StoreError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "StoreError";
  }
}

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

export const newId = (prefix: string) =>
  `${prefix}_${Array.from(globalThis.crypto.getRandomValues(new Uint8Array(6)), (b) => b.toString(16).padStart(2, "0")).join("")}`;

function db() {
  const client = supabaseService();
  if (!client) throw new StoreError("Supabase is not configured (NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY).");
  return client;
}

/** Throws a StoreError for a Supabase error so every caller handles one kind of failure. */
function check<T>(res: { data: T; error: { message: string } | null }, what: string): T {
  if (res.error) throw new StoreError(`Supabase ${what} failed: ${res.error.message}`);
  return res.data;
}

/* ------------------------------- row mapping ------------------------------ */

type Row = Record<string, unknown>;
const str = (v: unknown) => (v == null ? undefined : String(v));

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

const fromBookingRow = (r: Row): BookingRecord => ({
  id: String(r.id),
  createdAt: new Date(String(r.created_at)).toISOString(),
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

const fromInquiryRow = (r: Row): InquiryRecord => ({
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
});

/* --------------------------------- writes --------------------------------- */

export async function saveInquiry(record: InquiryRecord) {
  check(await db().from("inquiries").insert(inquiryRow(record)), "saving a message");
}

export async function saveCallRequest(record: BookingRecord) {
  check(await db().from("call_requests").insert(bookingRow(record)), "saving a call request");
}

/** Saves a booked slot unless it's already taken (used only while slot booking is on). */
export async function saveBookingIfFree(record: BookingRecord): Promise<boolean> {
  const taken = check(
    await db().from("call_requests").select("id").eq("status", "confirmed").eq("slot_start", record.slotStart).limit(1),
    "checking a slot",
  );
  if (taken && taken.length) return false;
  check(await db().from("call_requests").insert(bookingRow(record)), "saving a booking");
  return true;
}

/* ---------------------------------- reads --------------------------------- */

export async function takenSlots(): Promise<string[]> {
  const rows = check(
    await db().from("call_requests").select("slot_start").eq("status", "confirmed").gte("slot_start", new Date().toISOString()),
    "reading taken slots",
  );
  return (rows as Row[]).map((r) => new Date(String(r.slot_start)).toISOString());
}

/** Every call request and booking, by preferred time. */
export async function listBookings(): Promise<BookingRecord[]> {
  const rows = check(await db().from("call_requests").select("*").order("slot_start", { ascending: true }), "reading call requests");
  return (rows as Row[]).map(fromBookingRow);
}

/** Every message and brief, newest first. */
export async function listInquiries(): Promise<InquiryRecord[]> {
  const rows = check(await db().from("inquiries").select("*").order("created_at", { ascending: false }), "reading messages");
  return (rows as Row[]).map(fromInquiryRow);
}

/** A quick round trip used at start-up to prove Supabase answers. */
export async function pingStore() {
  check(await db().from("inquiries").select("id", { head: true, count: "exact" }), "connection check");
}
