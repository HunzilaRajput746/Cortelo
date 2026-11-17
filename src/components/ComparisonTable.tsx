"use client";

import React from "react";
import { ArrowRight, Check, Minus } from "lucide-react";
import { useAgencyShell } from "./ClientShell";

export default function ComparisonTable() {
  const { openDrawer } = useAgencyShell();

  const comparisons = [
    {
      other: "Slow, ticketing-queue communication",
      cortelo: "Direct, proactive founder communication by email",
    },
    {
      other: "Single channel approach & brittle Zapier scripts",
      cortelo: "Omni-channel architecture & self-hosted n8n VPS automation",
    },
    {
      other: "Outdated growth strategies & generic AI prompts",
      cortelo: "Deterministic Zod guardrails, fine-tuned RAG & multi-agent swarms",
    },
    {
      other: "High recurring per-seat SaaS taxes that balloon monthly",
      cortelo: "Zero per-seat software fees — 100% client-owned VPS infrastructure",
    },
    {
      other: "Outsourced to junior or mediocre overseas talent",
      cortelo: "Direct engineering led by Hunzila Nisar & specialized senior divisions",
    },
    {
      other: "Proprietary lock-in with zero IP code transfer",
      cortelo: "100% intellectual property transfer upon final milestone acceptance",
    },
  ];

  return (
    <section aria-labelledby="compare-h" className="py-24 md:py-32">
      <div className="wrap">
        <div className="mb-12 grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-end">
          <div>
            <p className="eyebrow mb-6">Why Cortelo</p>
            <h2 id="compare-h" className="h2">
              What changes when <span className="soft">the builders own the outcome.</span>
            </h2>
          </div>
          <div className="md:justify-self-end">
            <button onClick={() => openDrawer("Comparison: talk to the founders")} className="btn btn-ghost">
              Talk to the founders <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[var(--radius-l)] border border-[var(--line)]">
          <div className="hidden md:grid grid-cols-2 border-b border-[var(--line)] bg-[var(--surface)] font-mono text-[11px] uppercase tracking-[0.16em]">
            <div className="px-8 py-4 text-[var(--text-faint)]">A typical agency</div>
            <div className="px-8 py-4 text-[var(--accent)]">Cortelo</div>
          </div>
          {comparisons.map((row) => (
            <div
              key={row.other}
              className="group grid grid-cols-1 border-b border-[var(--line)] last:border-b-0 transition-colors duration-300 hover:bg-[rgba(95,212,192,0.04)] md:grid-cols-2"
            >
              <div className="flex gap-3 px-6 pt-6 md:px-8 md:py-6 text-[15px] text-[var(--text-faint)]">
                <Minus className="mt-1 h-4 w-4 shrink-0" />
                <span className="line-through decoration-[rgba(238,242,240,0.25)]">{row.other}</span>
              </div>
              <div className="flex gap-3 px-6 pb-6 pt-3 md:px-8 md:py-6 text-[15px] text-[var(--text)]">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)] transition-transform duration-300 group-hover:scale-125" />
                <span>{row.cortelo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
