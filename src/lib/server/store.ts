import "server-only";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

/**
 * A small append-only store: one JSON line per record, one file per collection.
 * Files live in DATA_DIR (default ./data), which git and deploys leave alone.
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

export function saveInquiry(record: InquiryRecord) {
  return enqueue("inquiries", () => append("inquiries", record));
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
  });
}

/** Saves a call request; requests never block each other. */
export function saveCallRequest(record: BookingRecord) {
  return enqueue("bookings", () => append("bookings", record));
}

export async function takenSlots(): Promise<string[]> {
  const all = await readAll<BookingRecord>("bookings");
  return all.filter((b) => b.status === "confirmed").map((b) => b.slotStart);
}
