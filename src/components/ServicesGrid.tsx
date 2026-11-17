"use client";

import React from "react";
import { AGENCY_SERVICES } from "@/lib/agencyData";
import { Server, Network, Workflow, LayoutTemplate, ScanEye, TrendingUp, ArrowUpRight } from "lucide-react";
import { useAgencyShell } from "./ClientShell";
import { pointerGlow } from "@/lib/usePointerGlow";

const ICONS: Record<string, React.ElementType> = {
  "crm-architecture": Server,
  "ai-agents": Network,
  "workflow-automation": Workflow,
  "fullstack-platforms": LayoutTemplate,
  "classic-ai-ml": ScanEye,
  "growth-marketing": TrendingUp,
};

const SHORT: Record<string, string> = {
  "crm-architecture": "Custom CRMs",
  "ai-agents": "AI agents",
  "workflow-automation": "Automation and hosting",
  "fullstack-platforms": "Web and SaaS products",
  "classic-ai-ml": "Machine learning and vision",
  "growth-marketing": "Growth funnels",
};

export default function ServicesGrid() {
  const { openDrawer } = useAgencyShell();

  return (
    <section id="services" aria-labelledby="services-h" className="py-24 md:py-32">
      <div className="wrap">
        <div className="mb-14 grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-end">
          <div>
            <p className="eyebrow mb-6">Services</p>
            <h2 id="services-h" className="h2">
              Six things we build. <span className="soft">All of them end up in your repository.</span>
            </h2>
          </div>
          <p className="lede md:justify-self-end md:max-w-[440px]">
            One studio for the model, the backend, the interface and the server it runs on, so nothing gets lost
            between vendors.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {AGENCY_SERVICES.map((s) => {
            const Icon = ICONS[s.id] ?? Server;
            return (
              <button
                key={s.id}
                type="button"
                onPointerMove={pointerGlow}
                onClick={() => openDrawer(`Inquiry regarding: ${s.title}`)}
                className="card card-link card-glow group flex flex-col p-7 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-m)] border border-[var(--line)] bg-[var(--surface2)] text-[var(--accent)] transition-[transform,border-color] duration-500 group-hover:scale-110 group-hover:border-[rgba(95,212,192,0.45)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[12px] text-[var(--text-faint)]">{s.num}</span>
                </div>

                <h3 className="mt-8 text-[22px] font-medium tracking-[-0.025em] text-[var(--text)]">{SHORT[s.id] ?? s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-muted)]">{s.tagline}</p>

                <ul className="mt-6 space-y-2.5 border-t border-[var(--line)] pt-6">
                  {s.deliverables.slice(0, 3).map((d) => (
                    <li key={d} className="flex gap-3 text-[14px] text-[var(--text-muted)]">
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-7">
                  {s.techStack.slice(0, 4).map((t) => (
                    <span key={t} className="rounded-full border border-[var(--line)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-faint)]">
                      {t}
                    </span>
                  ))}
                </div>

                <span className="mt-6 flex items-center gap-2 text-[14px] text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                  Ask about {SHORT[s.id]?.toLowerCase() ?? "this"}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
