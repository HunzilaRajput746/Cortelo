"use client";

import React from "react";
import { ArrowRight, CalendarClock } from "lucide-react";
import { useAgencyShell } from "./ClientShell";

/** Opens the booking drawer from server-rendered pages. */
export default function BookButton({
  scope,
  label = "Book a call",
  variant = "primary",
  className = "",
}: {
  scope?: string;
  label?: string;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const { openDrawer } = useAgencyShell();
  return (
    <button onClick={() => openDrawer(scope)} className={`btn btn-${variant} ${className}`}>
      {label} <ArrowRight className="h-4 w-4" />
    </button>
  );
}

/** Full card trigger for the Contact page so it can stay a Server Component. */
export function ContactCallCard() {
  const { openDrawer } = useAgencyShell();
  return (
    <button
      onClick={() => openDrawer()}
      className="card card-link group flex w-full items-start gap-5 p-7 text-left"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-m)] bg-[var(--accent)] text-[var(--accent-ink)]">
        <CalendarClock className="h-5 w-5" />
      </span>
      <span className="flex-1">
        <span className="block text-[19px] font-medium">Request a call</span>
        <span className="mt-1 block text-[15px] text-[var(--text-muted)]">Tell us a day and time. We confirm by email with a meeting link.</span>
      </span>
      <ArrowRight className="mt-1 h-5 w-5 text-[var(--text-faint)] transition-[transform,color] group-hover:translate-x-1 group-hover:text-[var(--accent)]" />
    </button>
  );
}
