"use client";

import React from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { FOUNDER_DATA } from "@/lib/agencyData";
import { ArrowUpRight } from "lucide-react";

const COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "AI voice agents", href: "/services" },
      { label: "AI agents and automation", href: "/services/ai-automation" },
      { label: "Machine learning", href: "/services/machine-learning" },
      { label: "Generative AI", href: "/services/generative-ai" },
      { label: "Web development", href: "/services/web-development" },
      { label: "All services", href: "/services" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Process", href: "/process" },
      { label: "Team", href: "/team" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const SOCIAL = [
  { label: "Portfolio", href: FOUNDER_DATA.portfolioUrl },
  { label: "GitHub", href: FOUNDER_DATA.githubUrl },
  { label: "LinkedIn", href: FOUNDER_DATA.linkedinUrl },
  { label: "Fiverr", href: FOUNDER_DATA.fiverrUrl },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--line)] bg-[var(--bg)] pt-20 pb-10">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Cortelo home" className="inline-flex">
              <BrandLogo className="h-8 w-8" />
            </Link>
            <p className="mt-6 max-w-[340px] text-[15px] leading-relaxed text-[var(--text-muted)]">
              An AI systems and software studio led by Hunzila Nisar and Mahreen Hashir. Remote from Pakistan, working
              with teams worldwide.
            </p>
            <a href={`mailto:${FOUNDER_DATA.agencyEmail}`} className="link-draw mt-6 text-[18px]">
              {FOUNDER_DATA.agencyEmail} <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-faint)]">{col.title}</h2>
              <ul className="mt-5 space-y-1">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="link-draw py-2 text-[15px] !text-[var(--text-muted)] hover:!text-[var(--text)]">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Elsewhere">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-faint)]">Elsewhere</h2>
            <ul className="mt-5 space-y-1">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="link-draw py-2 text-[15px] !text-[var(--text-muted)] hover:!text-[var(--text)]">
                    {s.label} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p aria-hidden="true" className="mt-20 select-none text-[22vw] lg:text-[240px] font-medium leading-[0.8] tracking-[-0.06em] text-[rgba(238,242,240,0.05)]">
          Cortelo
        </p>

        <div className="mt-8 flex flex-col gap-4 border-t border-[var(--line)] pt-8 text-[13px] text-[var(--text-faint)] sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Cortelo. Founded by Hunzila Nisar and Mahreen Hashir.</span>
          <span className="flex gap-6">
            <Link href="/legal/privacy" className="link-draw !text-[var(--text-faint)] hover:!text-[var(--text)]">
              Privacy
            </Link>
            <Link href="/legal/terms" className="link-draw !text-[var(--text-faint)] hover:!text-[var(--text)]">
              Terms
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
