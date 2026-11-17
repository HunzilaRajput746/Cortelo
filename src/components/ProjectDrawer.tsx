"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, CalendarPlus, Check, Download, Mail, X } from "lucide-react";
import { FOUNDER_DATA } from "@/lib/agencyData";
import { BOOKING, REQUEST_MAX_DAYS_AHEAD, SLOT_BOOKING_ENABLED, googleCalendarLink, icsFor, type BookingDay } from "@/lib/booking";
import { Field, Honeypot, Input, Select, SERVICE_OPTIONS, Textarea, formValues, usePost } from "./forms";

interface ProjectDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialScope?: string;
}

type Tab = "call" | "brief";

export const BUDGETS = ["Under $2,000", "$2,000 – $5,000", "$5,000 – $15,000", "$15,000 – $50,000", "$50,000+", "Not sure yet"];
export const TIMELINES = ["As soon as possible", "Within a month", "In 1 to 3 months", "Just exploring"];

/** Works out which service a scope string such as "Inquiry regarding: X" points at. */
function serviceFromScope(scope: string) {
  return SERVICE_OPTIONS.find((s) => scope.toLowerCase().includes(s.toLowerCase())) ?? "";
}

function useLocalZone() {
  const [zone, setZone] = useState("UTC");
  useEffect(() => setZone(Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"), []);
  return zone;
}

const fmtDay = (date: string, zone: string) =>
  new Intl.DateTimeFormat("en-GB", { timeZone: zone, weekday: "short", day: "numeric", month: "short" }).format(
    new Date(`${date}T12:00:00+05:00`),
  );
const fmtTime = (iso: string, zone: string) =>
  new Intl.DateTimeFormat("en-GB", { timeZone: zone, hour: "2-digit", minute: "2-digit" }).format(new Date(iso));
const fmtFull = (iso: string, zone: string) =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: zone,
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));

/* -------------------------------------------------------------------------- */

/** Slot booking with a live calendar. Kept for later: shown only when SLOT_BOOKING_ENABLED is true. */
function BookCall({ scope }: { scope: string }) {
  const zone = useLocalZone();
  const [days, setDays] = useState<BookingDay[] | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [day, setDay] = useState(0);
  const [slot, setSlot] = useState("");
  const [step, setStep] = useState<1 | 2>(1);
  const [done, setDone] = useState<{ id: string; slotStart: string } | null>(null);
  const { send, busy, errors, failure } = usePost<{ ok: boolean; id: string; slotStart: string }>("/api/bookings");

  const load = () => {
    setLoadError(false);
    fetch("/api/bookings", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => {
        setDays(d.days);
        setDay(0);
      })
      .catch(() => setLoadError(true));
  };
  useEffect(load, []);

  // a taken slot sends the visitor back to pick again with fresh times
  useEffect(() => {
    if (errors.slotStart) {
      setStep(1);
      setSlot("");
      load();
    }
  }, [errors.slotStart]);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = formValues(e.currentTarget);
    const res = await send({ ...v, slotStart: slot, timeZone: zone });
    if (res?.ok) setDone({ id: res.id, slotStart: res.slotStart ?? slot });
  }

  if (done) {
    const title = "Cortelo discovery call";
    const details = "30-minute call with Hunzila Nisar and Mahreen Hashir. A meeting link will follow by email.";
    const ics = icsFor({ id: done.id, start: done.slotStart, title, description: details, organizerEmail: FOUNDER_DATA.agencyEmail });
    return (
      <div className="animate-member-in space-y-6" role="status">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
          <Check className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-[26px] font-medium tracking-[-0.03em]">Your call is booked.</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-muted)]">
            {fmtFull(done.slotStart, zone)} your time ({fmtTime(done.slotStart, BOOKING.studioTimeZone)} in Pakistan). We will
            email a meeting link before the call.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={googleCalendarLink(done.slotStart, title, details)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <CalendarPlus className="h-4 w-4" /> Add to Google Calendar
          </a>
          <a href={`data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`} download="cortelo-call.ics" className="btn btn-ghost">
            <Download className="h-4 w-4" /> Download invite
          </a>
        </div>
        <p className="font-mono text-[12px] text-[var(--text-faint)]">Reference {done.id}</p>
      </div>
    );
  }

  if (step === 1) {
    const current = days?.[day];
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-[22px] font-medium tracking-[-0.02em]">Pick a day and time</h3>
          <p className="mt-1 text-[14px] text-[var(--text-muted)]">
            {BOOKING.durationMinutes}-minute video call with a founder. Times are shown in your time zone ({zone}).
          </p>
        </div>

        {loadError && (
          <p className="text-[14px] text-[#ff8a7a]">
            We couldn&apos;t load the calendar.{" "}
            <button onClick={load} className="link-draw">
              Try again
            </button>
          </p>
        )}
        {!days && !loadError && <div className="h-40 animate-pulse rounded-[var(--radius-m)] bg-[var(--surface2)]" />}
        {days && days.length === 0 && (
          <p className="text-[15px] text-[var(--text-muted)]">
            Every slot in the next two weeks is taken. Send a brief instead and we will find a time.
          </p>
        )}

        {days && days.length > 0 && (
          <>
            <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2" role="listbox" aria-label="Day">
              {days.map((d, i) => (
                <button
                  key={d.date}
                  role="option"
                  aria-selected={i === day}
                  onClick={() => {
                    setDay(i);
                    setSlot("");
                  }}
                  className={`shrink-0 rounded-[var(--radius-s)] border px-4 py-3 text-left text-[14px] transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 ${
                    i === day
                      ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--text)]"
                      : "border-[var(--line-strong)] text-[var(--text-muted)] hover:border-[var(--text-faint)]"
                  }`}
                >
                  {fmtDay(d.date, zone)}
                  <span className="block text-[12px] text-[var(--text-faint)]">{d.slots.length} open</span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4" role="listbox" aria-label="Time">
              {current?.slots.map((s) => (
                <button
                  key={s}
                  role="option"
                  aria-selected={s === slot}
                  onClick={() => setSlot(s)}
                  className={`h-11 rounded-[var(--radius-s)] border text-[14px] transition-[border-color,background-color,color] duration-200 ${
                    s === slot
                      ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-ink)]"
                      : "border-[var(--line-strong)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--text)]"
                  }`}
                >
                  {fmtTime(s, zone)}
                </button>
              ))}
            </div>

            {errors.slotStart && <p className="text-[14px] text-[#ff8a7a]">{errors.slotStart}</p>}

            <button disabled={!slot} onClick={() => setStep(2)} className="btn btn-primary w-full disabled:pointer-events-none disabled:opacity-40">
              {slot ? `Continue with ${fmtTime(slot, zone)}` : "Choose a time"} <ArrowRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="relative space-y-5">
      <button type="button" onClick={() => setStep(1)} className="link-draw text-[14px] !text-[var(--text-muted)]">
        <ArrowLeft className="h-4 w-4" /> {fmtFull(slot, zone)}
      </button>
      <Honeypot />
      <Field label="Your name" name="name" error={errors.name}>
        <Input name="name" autoComplete="name" required invalid={!!errors.name} />
      </Field>
      <Field label="Work email" name="email" error={errors.email}>
        <Input name="email" type="email" autoComplete="email" required invalid={!!errors.email} />
      </Field>
      <Field label="Company" name="company" optional>
        <Input name="company" autoComplete="organization" />
      </Field>
      <Field label="What do you want to talk about?" name="service" optional>
        <Select name="service" options={SERVICE_OPTIONS} placeholder="Choose a service" defaultValue={serviceFromScope(scope)} />
      </Field>
      <Field label="Anything we should read first?" name="message" optional>
        <Textarea name="message" rows={3} defaultValue={scope && !serviceFromScope(scope) ? scope : ""} />
      </Field>
      {failure && <p className="text-[14px] text-[#ff8a7a]">{failure}</p>}
      <button type="submit" disabled={busy} className="btn btn-primary w-full disabled:opacity-60">
        {busy ? "Booking…" : "Confirm the call"} {!busy && <ArrowRight className="h-4 w-4" />}
      </button>
    </form>
  );
}

/**
 * Call request (used while slot booking is off): the visitor proposes a day and time,
 * the request is emailed to the founders, and they reply with a meeting link or another time.
 */
function RequestCall({ scope }: { scope: string }) {
  const zone = useLocalZone();
  const [done, setDone] = useState<{ when: string } | null>(null);
  const { send, busy, errors, failure } = usePost<{ ok: boolean; id: string; slotStart: string }>("/api/bookings");

  const ymd = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const today = new Date();
  const minDate = ymd(today);
  const maxDate = ymd(new Date(today.getTime() + REQUEST_MAX_DAYS_AHEAD * 86_400_000));

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = formValues(e.currentTarget);
    // the visitor's local day and time, sent as an exact moment plus their zone
    const at = v.date && v.time ? new Date(`${v.date}T${v.time}`) : null;
    const slotStart = at && !Number.isNaN(at.getTime()) ? at.toISOString() : "";
    const res = await send({ ...v, slotStart, timeZone: zone });
    if (res?.ok) setDone({ when: fmtFull(res.slotStart ?? slotStart, zone) });
  }

  if (done) {
    return (
      <div className="animate-member-in space-y-5" role="status">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="text-[26px] font-medium tracking-[-0.03em]">Request sent.</h3>
        <p className="text-[15px] leading-relaxed text-[var(--text-muted)]">
          You asked for {done.when} your time. A founder will email you within one working day to confirm it with a meeting link,
          or to suggest another time if that one doesn&apos;t work.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="relative space-y-5">
      <div>
        <h3 className="text-[22px] font-medium tracking-[-0.02em]">When suits you?</h3>
        <p className="mt-1 text-[14px] text-[var(--text-muted)]">
          Pick a day and time in your time zone ({zone}). We confirm by email with a meeting link.
        </p>
      </div>
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Preferred day" name="date" error={errors.slotStart}>
          <Input name="date" type="date" min={minDate} max={maxDate} required invalid={!!errors.slotStart} className="[color-scheme:dark]" />
        </Field>
        <Field label="Preferred time" name="time">
          <Input name="time" type="time" step={900} required className="[color-scheme:dark]" />
        </Field>
      </div>
      <Field label="Your name" name="name" error={errors.name}>
        <Input name="name" autoComplete="name" required invalid={!!errors.name} />
      </Field>
      <Field label="Work email" name="email" error={errors.email}>
        <Input name="email" type="email" autoComplete="email" required invalid={!!errors.email} />
      </Field>
      <Field label="Company" name="company" optional>
        <Input name="company" autoComplete="organization" />
      </Field>
      <Field label="What do you want to talk about?" name="service" optional>
        <Select name="service" options={SERVICE_OPTIONS} placeholder="Choose a service" defaultValue={serviceFromScope(scope)} />
      </Field>
      <Field label="Anything we should read first?" name="message" optional>
        <Textarea name="message" rows={3} defaultValue={scope && !serviceFromScope(scope) ? scope : ""} />
      </Field>
      {failure && <p className="text-[14px] text-[#ff8a7a]">{failure}</p>}
      <button type="submit" disabled={busy} className="btn btn-primary w-full disabled:opacity-60">
        {busy ? "Sending…" : "Request the call"} {!busy && <ArrowRight className="h-4 w-4" />}
      </button>
    </form>
  );
}

/* -------------------------------------------------------------------------- */

export function SendBrief({ scope = "", kind = "brief" }: { scope?: string; kind?: "brief" | "contact" }) {
  const { send, busy, errors, failure } = usePost("/api/inquiries");
  const [doneName, setDoneName] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = formValues(e.currentTarget);
    const res = await send({ ...v, kind, page: window.location.pathname });
    if (res?.ok) setDoneName(v.name);
  }

  if (doneName) {
    return (
      <div className="animate-member-in space-y-5" role="status">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-ink)]">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="text-[26px] font-medium tracking-[-0.03em]">Thanks, {doneName.split(" ")[0]}.</h3>
        <p className="text-[15px] leading-relaxed text-[var(--text-muted)]">
          Your message reached the founders. Expect a reply within one working day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="relative space-y-5">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" error={errors.name}>
          <Input name="name" autoComplete="name" required invalid={!!errors.name} />
        </Field>
        <Field label="Work email" name="email" error={errors.email}>
          <Input name="email" type="email" autoComplete="email" required invalid={!!errors.email} />
        </Field>
      </div>
      <Field label="Company" name="company" optional>
        <Input name="company" autoComplete="organization" />
      </Field>
      <Field label="Service" name="service" optional>
        <Select name="service" options={SERVICE_OPTIONS} placeholder="Choose a service" defaultValue={serviceFromScope(scope)} />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Budget" name="budget" optional>
          <Select name="budget" options={BUDGETS} placeholder="Choose a range" />
        </Field>
        <Field label="Timeline" name="timeline" optional>
          <Select name="timeline" options={TIMELINES} placeholder="Choose one" />
        </Field>
      </div>
      <Field label="What should it do?" name="message" error={errors.message}>
        <Textarea
          name="message"
          rows={5}
          required
          invalid={!!errors.message}
          defaultValue={scope && !serviceFromScope(scope) ? scope : ""}
          placeholder="The problem, who uses it, and the tools it has to work with."
        />
      </Field>
      {failure && <p className="text-[14px] text-[#ff8a7a]">{failure}</p>}
      <button type="submit" disabled={busy} className="btn btn-primary w-full disabled:opacity-60">
        {busy ? "Sending…" : kind === "brief" ? "Send the brief" : "Send the message"} {!busy && <ArrowRight className="h-4 w-4" />}
      </button>
    </form>
  );
}

/* -------------------------------------------------------------------------- */

export default function ProjectDrawer({ isOpen, onClose, initialScope = "" }: ProjectDrawerProps) {
  const [tab, setTab] = useState<Tab>("call");
  const [openCount, setOpenCount] = useState(0);
  const panel = useRef<HTMLElement>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  // every opening starts fresh on the call tab
  useEffect(() => {
    if (!isOpen) return;
    setTab("call");
    setOpenCount((n) => n + 1);
    const prev = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => panel.current?.focus(), 30);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeRef.current();
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      prev?.focus?.();
    };
  }, [isOpen]);

  const scope = useMemo(() => initialScope.replace(/^Inquiry regarding:\s*/i, ""), [initialScope]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex justify-end">
      <div onClick={onClose} className="enter-fade absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
      <aside
        ref={panel}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        className="drawer-in relative z-10 flex h-full w-full max-w-[560px] flex-col overflow-y-auto border-l border-[var(--line)] bg-[var(--surface)] outline-none"
      >
        <div className="flex items-center justify-between border-b border-[var(--line)] px-6 py-5 sm:px-8">
          <h2 id="drawer-title" className="text-[18px] font-medium">
            Talk to Cortelo
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-muted)] transition-colors hover:bg-white/5 hover:text-[var(--text)]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 pt-6 sm:px-8">
          <div className="grid grid-cols-2 rounded-[var(--radius-s)] border border-[var(--line)] p-1" role="tablist">
            {(
              [
                ["call", SLOT_BOOKING_ENABLED ? "Book a call" : "Request a call"],
                ["brief", "Send a brief"],
              ] as [Tab, string][]
            ).map(([id, label]) => (
              <button
                key={id}
                role="tab"
                aria-selected={tab === id}
                onClick={() => setTab(id)}
                className={`h-10 rounded-[8px] text-[14px] transition-colors ${
                  tab === id ? "bg-[var(--surface3)] text-[var(--text)]" : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 px-6 py-8 sm:px-8" key={`${tab}-${openCount}`}>
          {tab === "call" ? (
            SLOT_BOOKING_ENABLED ? <BookCall scope={scope} /> : <RequestCall scope={scope} />
          ) : (
            <SendBrief scope={scope} />
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] px-6 py-5 text-[13px] text-[var(--text-faint)] sm:px-8">
          <span>Every call is with Hunzila Nisar or Mahreen Hashir.</span>
          <a href={`mailto:${FOUNDER_DATA.agencyEmail}`} className="link-draw !text-[var(--text-muted)]">
            <Mail className="h-3.5 w-3.5" /> {FOUNDER_DATA.agencyEmail}
          </a>
        </div>
      </aside>
    </div>
  );
}
