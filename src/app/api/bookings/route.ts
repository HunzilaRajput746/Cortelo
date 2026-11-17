import { NextResponse } from "next/server";
import { BOOKING, REQUEST_MAX_DAYS_AHEAD, SLOT_BOOKING_ENABLED, isOfferedSlot, upcomingDays } from "@/lib/booking";
import { newId, saveBookingIfFree, saveCallRequest, takenSlots, type BookingRecord } from "@/lib/server/store";
import { FOUNDER_DATA } from "@/lib/agencyData";
import { checkContact, clean, clientIp, isBot, rateLimited, type FieldErrors } from "@/lib/server/guard";
import { notifyBooking } from "@/lib/server/notify";

export const dynamic = "force-dynamic";

/** Shown when Supabase can't save the request; nothing is kept anywhere else. */
const unavailable = () =>
  NextResponse.json(
    { error: `We couldn't save this right now. Please try again in a minute, or email ${FOUNDER_DATA.agencyEmail}.` },
    { status: 503 },
  );

/** Open slots for the coming days (only while slot booking is on). */
export async function GET() {
  if (!SLOT_BOOKING_ENABLED) return NextResponse.json({ enabled: false });
  let taken: Set<string>;
  try {
    taken = new Set(await takenSlots());
  } catch (err) {
    console.error("[bookings]", err);
    return unavailable();
  }
  const days = upcomingDays()
    .map((d) => ({ ...d, slots: d.slots.filter((s) => !taken.has(s)) }))
    .filter((d) => d.slots.length);
  return NextResponse.json({ enabled: true, days, durationMinutes: BOOKING.durationMinutes, studioTimeZone: BOOKING.studioTimeZone });
}

/** A preferred time must be a real moment from now up to REQUEST_MAX_DAYS_AHEAD days out. */
function checkPreferredTime(iso: string, errors: FieldErrors) {
  const t = Date.parse(iso);
  const now = Date.now();
  if (!iso || Number.isNaN(t)) errors.slotStart = "Choose a day and a time.";
  else if (t < now) errors.slotStart = "Choose a time in the future.";
  else if (t > now + REQUEST_MAX_DAYS_AHEAD * 86_400_000) errors.slotStart = `Choose a time within the next ${REQUEST_MAX_DAYS_AHEAD} days.`;
}

/** Books a slot, or (while slot booking is off) sends a call request with a preferred time. */
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
  if (SLOT_BOOKING_ENABLED) {
    if (!slotStart || !isOfferedSlot(slotStart)) errors.slotStart = "Pick a time from the list.";
  } else {
    checkPreferredTime(slotStart, errors);
  }
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });

  const record: BookingRecord = {
    id: newId("call"),
    createdAt: new Date().toISOString(),
    mode: SLOT_BOOKING_ENABLED ? "slot" : "request",
    slotStart: new Date(slotStart).toISOString(),
    durationMinutes: BOOKING.durationMinutes,
    name,
    email,
    company: clean(body.company, 160) || undefined,
    service: clean(body.service, 160) || undefined,
    message: clean(body.message, 3000) || undefined,
    timeZone: clean(body.timeZone, 80) || undefined,
    status: SLOT_BOOKING_ENABLED ? "confirmed" : "requested",
  };

  try {
    if (SLOT_BOOKING_ENABLED) {
      const saved = await saveBookingIfFree(record);
      if (!saved) {
        return NextResponse.json({ errors: { slotStart: "Someone just took this time. Pick another one." } }, { status: 409 });
      }
    } else {
      await saveCallRequest(record);
    }
  } catch (err) {
    console.error("[bookings]", err);
    return unavailable();
  }

  await notifyBooking(record);
  return NextResponse.json({ ok: true, id: record.id, slotStart: record.slotStart });
}
