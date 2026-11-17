/**
 * Booking rules shared by the browser and the server.
 * The studio works on Pakistan time (UTC+5, no daylight saving).
 */
export const BOOKING = {
  studioTimeZone: "Asia/Karachi",
  studioOffsetMinutes: 5 * 60,
  /** first and last start hour of a call, studio time */
  firstHour: 14,
  lastHour: 22,
  durationMinutes: 30,
  /** 0 = Sunday ... 6 = Saturday */
  workingDays: [1, 2, 3, 4, 5, 6],
  daysAhead: 14,
  /** a call can't be booked less than this many hours ahead */
  minNoticeHours: 12,
};

export interface BookingDay {
  /** YYYY-MM-DD in studio time */
  date: string;
  /** slot start times as UTC ISO strings */
  slots: string[];
}

const pad = (n: number) => String(n).padStart(2, "0");

/** Every bookable slot for the coming days, before removing taken ones. */
export function upcomingDays(now: Date = new Date()): BookingDay[] {
  const offsetMs = BOOKING.studioOffsetMinutes * 60_000;
  const earliest = now.getTime() + BOOKING.minNoticeHours * 3_600_000;
  const studioNow = new Date(now.getTime() + offsetMs);
  const days: BookingDay[] = [];

  for (let d = 0; d <= BOOKING.daysAhead; d++) {
    const day = new Date(Date.UTC(studioNow.getUTCFullYear(), studioNow.getUTCMonth(), studioNow.getUTCDate() + d));
    if (!BOOKING.workingDays.includes(day.getUTCDay())) continue;

    const date = `${day.getUTCFullYear()}-${pad(day.getUTCMonth() + 1)}-${pad(day.getUTCDate())}`;
    const slots: string[] = [];
    for (let h = BOOKING.firstHour; h <= BOOKING.lastHour; h++) {
      for (const m of [0, 30]) {
        if (h === BOOKING.lastHour && m > 0) continue;
        const utc = Date.UTC(day.getUTCFullYear(), day.getUTCMonth(), day.getUTCDate(), h, m) - offsetMs;
        if (utc >= earliest) slots.push(new Date(utc).toISOString());
      }
    }
    if (slots.length) days.push({ date, slots });
  }
  return days;
}

/** True when `iso` is one of the slots the studio offers right now. */
export function isOfferedSlot(iso: string, now: Date = new Date()): boolean {
  return upcomingDays(now).some((d) => d.slots.includes(iso));
}

/** An .ics calendar file for one call. */
export function icsFor(opts: { id: string; start: string; title: string; description: string; organizerEmail: string }) {
  const start = new Date(opts.start);
  const end = new Date(start.getTime() + BOOKING.durationMinutes * 60_000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/[,;]/g, (c) => `\\${c}`).replace(/\n/g, "\\n");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Cortelo//Booking//EN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${opts.id}@cortelo`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:${esc(opts.title)}`,
    `DESCRIPTION:${esc(opts.description)}`,
    `ORGANIZER:mailto:${opts.organizerEmail}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

/** A Google Calendar "add event" link for one call. */
export function googleCalendarLink(start: string, title: string, details: string) {
  const s = new Date(start);
  const e = new Date(s.getTime() + BOOKING.durationMinutes * 60_000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const q = new URLSearchParams({ action: "TEMPLATE", text: title, dates: `${fmt(s)}/${fmt(e)}`, details });
  return `https://calendar.google.com/calendar/render?${q.toString()}`;
}
