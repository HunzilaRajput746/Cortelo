"use client";

import React from "react";
import { AGENCY_SERVICES, type AgencyService } from "@/lib/agencyData";
import { ArrowUpRight, Server } from "lucide-react";
import Link from "next/link";
import { pointerGlow } from "@/lib/usePointerGlow";
import { SERVICE_GROUPS as GROUPS, SERVICE_ICONS as ICONS, SERVICE_SHORT as SHORT } from "@/lib/serviceMeta";

const byId = Object.fromEntries(AGENCY_SERVICES.map((s) => [s.id, s])) as Record<string, AgencyService>;

function ServiceCard({ s, detailed }: { s: AgencyService; detailed: boolean }) {
  const name = SHORT[s.id] ?? s.title;

  return (
    <Link
      href={`/services/${s.id}`}
      onPointerMove={pointerGlow}
      className="card card-link card-glow group flex h-full flex-col p-5 text-left"
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-[15px] font-medium leading-snug tracking-[-0.02em] text-[var(--text)] transition-colors duration-200 group-hover:text-[var(--accent)]">
          {name}
        </h4>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--text-faint)] transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
      </div>

      <p className="mt-2 text-[12.5px] leading-relaxed text-[var(--text-muted)]">{s.tagline}</p>

      {detailed && (
        <ul className="mt-3.5 space-y-1.5 border-t border-[var(--line)] pt-3.5">
          {s.deliverables.slice(0, 4).map((d) => (
            <li key={d} className="flex gap-2 text-[12.5px] text-[var(--text-muted)]">
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
              {d}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
        {s.techStack.slice(0, detailed ? 6 : 3).map((t) => (
          <span key={t} className="rounded-full border border-[var(--line)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-faint)]">
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}

/** The service catalogue in four groups. `detailed` adds deliverables for the services page. */
export function ServiceGroups({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="space-y-12">
      {GROUPS.map((g, gi) => (
        <div key={g.title} className="grid gap-6 lg:grid-cols-[240px_1fr] lg:gap-8">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-mono text-[11px] text-[var(--accent)]">
              {String(gi + 1).padStart(2, "0")} · {g.ids.length} services
            </p>
            <h3 className="mt-2 text-[19px] font-medium tracking-[-0.025em] text-[var(--text)]">{g.title}</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--text-muted)]">{g.line}</p>
          </div>
          {/* 4 cards sit 2x2; 5 cards lead with one wide card so no row is left half empty */}
          <div className={`grid grid-cols-1 gap-3.5 sm:grid-cols-2 ${g.ids.length === 4 ? "" : "xl:grid-cols-3"}`}>
            {g.ids
              .map((id) => byId[id])
              .filter(Boolean)
              .map((s, i) => (
                <div key={s.id} className={g.ids.length === 5 && i === 0 ? "sm:col-span-2" : ""}>
                  <ServiceCard s={s} detailed={detailed} />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section id="services" aria-labelledby="services-h" className="py-16 md:py-22">
      <div className="wrap">
        <div className="mb-12 grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-end">
          <div>
            <p className="eyebrow mb-5">Services</p>
            <h2 id="services-h" className="h2">
              {AGENCY_SERVICES.length} things we build. <span className="soft">All of them end up in your repository.</span>
            </h2>
          </div>
          <p className="lede md:justify-self-end md:max-w-[440px]">
            Voice agents, custom models, face recognition, private LLMs and the software around them. One studio for the
            model, the backend, the interface and the server it runs on.
          </p>
        </div>

        <ServiceGroups />
      </div>
    </section>
  );
}
