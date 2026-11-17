import "server-only";
import nodemailer from "nodemailer";
import { FOUNDER_DATA } from "@/lib/agencyData";
import { icsFor } from "@/lib/booking";
import type { BookingRecord, InquiryRecord } from "./store";

/**
 * Notifications go out through whatever is configured in the environment:
 *   N8N_WEBHOOK_URL            a webhook (n8n, Make, Zapier) that receives every new record as JSON
 *   SMTP_HOST / SMTP_PORT /
 *   SMTP_USER / SMTP_PASS      an SMTP account; the studio gets an email and the client a confirmation
 *   NOTIFY_EMAIL               where studio emails go (default: the founder's address)
 *   MAIL_FROM                  sender shown on emails (default: SMTP_USER)
 * Nothing configured means the record is only saved; a failed notification never loses a record.
 */
const notifyTo = () => process.env.NOTIFY_EMAIL || FOUNDER_DATA.email;

function transport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
  const port = Number(SMTP_PORT || 465);
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

async function webhook(type: string, record: object) {
  const url = process.env.N8N_WEBHOOK_URL;
  if (!url) return;
  await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ type, record, site: "cortelo" }),
    signal: AbortSignal.timeout(8000),
  });
}

const studioTime = (iso: string) =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Karachi",
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso)) + " PKT";

const lines = (pairs: [string, string | undefined][]) =>
  pairs
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

async function settle(jobs: Promise<unknown>[]) {
  const results = await Promise.allSettled(jobs);
  results.forEach((r) => r.status === "rejected" && console.error("[notify]", r.reason));
}

/** The visitor's preferred time in their own zone, e.g. "Tuesday 18 November, 15:00 (Europe/London)". */
const localTime = (iso: string, zone?: string) => {
  try {
    return (
      new Intl.DateTimeFormat("en-GB", {
        timeZone: zone || "UTC",
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date(iso)) + ` (${zone || "UTC"})`
    );
  } catch {
    return iso;
  }
};

/**
 * A call request: the visitor proposed a time. The studio gets an email to reply to
 * with a meeting link or another time; the visitor gets a short receipt. No calendar invite.
 */
async function notifyCallRequest(b: BookingRecord) {
  const mail = transport();
  const from = process.env.MAIL_FROM || process.env.SMTP_USER;
  const pk = studioTime(b.slotStart);
  const theirs = localTime(b.slotStart, b.timeZone);

  const jobs: Promise<unknown>[] = [webhook("call-request", b)];
  if (mail) {
    jobs.push(
      mail.sendMail({
        from,
        to: notifyTo(),
        replyTo: b.email,
        subject: `Call request: ${b.name} — ${pk}`,
        text:
          lines([
            ["Preferred time (Pakistan)", pk],
            ["Preferred time (client)", theirs],
            ["Name", b.name],
            ["Email", b.email],
            ["Company", b.company],
            ["Service", b.service],
            ["Message", b.message],
            ["Request id", b.id],
          ]) + "\n\nReply to this email to send the meeting link or suggest another time.",
      }),
      mail.sendMail({
        from,
        to: b.email,
        replyTo: notifyTo(),
        subject: "We have your call request — Cortelo",
        text: `Hi ${b.name},

Thanks for asking for a call. You suggested ${theirs}.
A founder will email you within one working day to confirm this time with a meeting link, or to suggest another time if it doesn't work.

Hunzila Nisar and Mahreen Hashir
Cortelo`,
      }),
    );
  }
  await settle(jobs);
}

export async function notifyBooking(b: BookingRecord) {
  if (b.mode === "request") return notifyCallRequest(b);
  const mail = transport();
  const from = process.env.MAIL_FROM || process.env.SMTP_USER;
  const when = studioTime(b.slotStart);
  const ics = icsFor({
    id: b.id,
    start: b.slotStart,
    title: "Cortelo discovery call",
    description: `30-minute call with the Cortelo founders.${b.service ? ` Topic: ${b.service}.` : ""}`,
    organizerEmail: FOUNDER_DATA.agencyEmail,
  });

  const jobs: Promise<unknown>[] = [webhook("booking", b)];
  if (mail) {
    jobs.push(
      mail.sendMail({
        from,
        to: notifyTo(),
        replyTo: b.email,
        subject: `New call booked: ${b.name} — ${when}`,
        text: lines([
          ["When", when],
          ["Name", b.name],
          ["Email", b.email],
          ["Company", b.company],
          ["Service", b.service],
          ["Client time zone", b.timeZone],
          ["Message", b.message],
          ["Booking id", b.id],
        ]),
        icalEvent: { filename: "cortelo-call.ics", method: "PUBLISH", content: ics },
      }),
      mail.sendMail({
        from,
        to: b.email,
        replyTo: notifyTo(),
        subject: "Your call with Cortelo is booked",
        text: `Hi ${b.name},\n\nYour call with the Cortelo founders is booked for ${when}.\nWe will email you a meeting link before the call. The calendar invite is attached.\n\nTo change the time, reply to this email.\n\nHunzila Nisar and Mahreen Hashir\nCortelo`,
        icalEvent: { filename: "cortelo-call.ics", method: "PUBLISH", content: ics },
      }),
    );
  }
  await settle(jobs);
}

export async function notifyInquiry(q: InquiryRecord) {
  const mail = transport();
  const from = process.env.MAIL_FROM || process.env.SMTP_USER;
  const jobs: Promise<unknown>[] = [webhook("inquiry", q)];
  if (mail) {
    jobs.push(
      mail.sendMail({
        from,
        to: notifyTo(),
        replyTo: q.email,
        subject: `New ${q.kind === "brief" ? "project brief" : "message"}: ${q.name}${q.service ? ` — ${q.service}` : ""}`,
        text: lines([
          ["Name", q.name],
          ["Email", q.email],
          ["Company", q.company],
          ["Service", q.service],
          ["Budget", q.budget],
          ["Timeline", q.timeline],
          ["Page", q.page],
          ["Message", q.message],
          ["Id", q.id],
        ]),
      }),
      mail.sendMail({
        from,
        to: q.email,
        replyTo: notifyTo(),
        subject: "We have your message — Cortelo",
        text: `Hi ${q.name},\n\nThanks for writing to Cortelo. One of the founders will reply within one working day.\n\nHunzila Nisar and Mahreen Hashir\nCortelo`,
      }),
    );
  }
  await settle(jobs);
}
