import { NextResponse } from "next/server";
import { BOOKING, isOfferedSlot, upcomingDays } from "@/lib/booking";
import { newId, saveBookingIfFree, takenSlots, type BookingRecord } from "@/lib/server/store";
import { checkContact, clean, clientIp, isBot, rateLimited } from "@/lib/server/guard";
import { notifyBooking } from "@/lib/server/notify";

export const dynamic = "force-dynamic";

/** Open slots for the coming days. */
export async function GET() {
  const taken = new Set(await takenSlots());
  const days = upcomingDays()
    .map((d) => ({ ...d, slots: d.slots.filter((s) => !taken.has(s)) }))
    .filter((d) => d.slots.length);
  return NextResponse.json({ days, durationMinutes: BOOKING.durationMinutes, studioTimeZone: BOOKING.studioTimeZone });
}

/** Books one slot. */
export async function POST(req: Request) {
  if (rateLimited(clientIp(req))) {
    return NextResponse.json({ error: "Too many requests. Try again in a few minutes." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // a filled honeypot gets a quiet success and nothing is stored
  if (isBot(body)) return NextResponse.json({ ok: true, id: "ok" });

  const { name, email, errors } = checkContact(body);
  const slotStart = clean(body.slotStart, 40);
  if (!slotStart || !isOfferedSlot(slotStart)) errors.slotStart = "Pick a time from the list.";
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });

  const record: BookingRecord = {
    id: newId("call"),
    createdAt: new Date().toISOString(),
    slotStart,
    durationMinutes: BOOKING.durationMinutes,
    name,
    email,
    company: clean(body.company, 160) || undefined,
    service: clean(body.service, 160) || undefined,
    message: clean(body.message, 3000) || undefined,
    timeZone: clean(body.timeZone, 80) || undefined,
    status: "confirmed",
  };

  const saved = await saveBookingIfFree(record);
  if (!saved) {
    return NextResponse.json({ errors: { slotStart: "Someone just took this time. Pick another one." } }, { status: 409 });
  }

  await notifyBooking(record);
  return NextResponse.json({ ok: true, id: record.id, slotStart: record.slotStart });
}
