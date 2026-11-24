"use client";

import React from "react";
import { ArrowRight, ArrowUpRight, CalendarClock, Mail, MapPin } from "lucide-react";
import { FOUNDER_DATA } from "@/lib/agencyData";
import { useAgencyShell } from "@/components/ClientShell";
import { SendBrief } from "@/components/ProjectDrawer";

export default function ContactPage() {
  const { openDrawer } = useAgencyShell();

  return (
    <div className="relative z-10">
      <section className="pt-40 pb-16">
        <div className="wrap" data-enter>
          <p className="eyebrow mb-6">Contact</p>
          <h1 className="display max-w-[900px] text-[36px] sm:text-[52px] lg:text-[68px]">
            Tell us what you <span className="serif-accent text-[var(--accent)]">want built.</span>
          </h1>
          <p className="lede mt-7 max-w-[560px]">A founder reads every message and replies within one working day.</p>
        </div>
      </section>

      <section className="pb-28">
        <div className="wrap grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          <div className="card p-7 md:p-10">
            <h2 className="mb-8 text-[24px] font-medium tracking-[-0.025em]">Send a message</h2>
            <SendBrief kind="contact" />
          </div>

          <div className="space-y-4">
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

            <a href={`mailto:${FOUNDER_DATA.agencyEmail}`} className="card card-link group flex items-start gap-5 p-7">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-m)] border border-[var(--line)] bg-[var(--surface2)] text-[var(--accent)]">
                <Mail className="h-5 w-5" />
              </span>
              <span className="flex-1">
                <span className="block text-[19px] font-medium">Client Inquiries & Briefs</span>
                <span className="mt-1 block text-[15px] text-[var(--text-muted)]">{FOUNDER_DATA.agencyEmail}</span>
              </span>
              <ArrowUpRight className="mt-1 h-5 w-5 text-[var(--text-faint)] transition-colors group-hover:text-[var(--accent)]" />
            </a>

            <a href={`mailto:${FOUNDER_DATA.infoEmail}`} className="card card-link group flex items-start gap-5 p-7">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-m)] border border-[var(--line)] bg-[var(--surface2)] text-[var(--accent)]">
                <Mail className="h-5 w-5" />
              </span>
              <span className="flex-1">
                <span className="block text-[19px] font-medium">General & Business Info</span>
                <span className="mt-1 block text-[15px] text-[var(--text-muted)]">{FOUNDER_DATA.infoEmail}</span>
              </span>
              <ArrowUpRight className="mt-1 h-5 w-5 text-[var(--text-faint)] transition-colors group-hover:text-[var(--accent)]" />
            </a>

            <div className="card flex items-start gap-5 p-7">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-m)] border border-[var(--line)] bg-[var(--surface2)] text-[var(--accent)]">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[19px] font-medium">Punjab, Pakistan</span>
                <span className="mt-1 block text-[15px] text-[var(--text-muted)]">Working remotely with teams worldwide, on Pakistan time (UTC+5).</span>
              </span>
            </div>

            <div className="card p-7">
              <p className="text-[14px] text-[var(--text-faint)]">Elsewhere</p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  ["Portfolio", FOUNDER_DATA.portfolioUrl],
                  ["GitHub", FOUNDER_DATA.githubUrl],
                  ["LinkedIn", FOUNDER_DATA.linkedinUrl],
                  ["Fiverr", FOUNDER_DATA.fiverrUrl],
                ].map(([label, href]) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="link-draw text-[15px]">
                    {label} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
