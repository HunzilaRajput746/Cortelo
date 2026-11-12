"use client";

import React from "react";
import { Check, X, Shield, Zap } from "lucide-react";
import { useAgencyShell } from "./ClientShell";

export default function ComparisonTable() {
  const { openDrawer } = useAgencyShell();

  const comparisons = [
    {
      other: "Slow, ticketing-queue communication",
      cortelo: "Constant, proactive founder communication (WhatsApp / Slack)",
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
    <section className="py-24 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-cortelo-border">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="px-3.5 py-1 rounded-full border border-cortelo-mint/40 bg-cortelo-mint/10 text-xs font-mono text-cortelo-mint font-semibold uppercase">
          Comparison
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-cortelo-text tracking-tight">
          But, why would you want to work{" "}
          <span className="text-cortelo-mint italic">with us</span>?
        </h2>
        <p className="text-sm text-cortelo-muted leading-relaxed font-light">
          Discover what separates our engineering studio from traditional agencies and generic AI wrappers.
        </p>
      </div>

      {/* 2-Column Side-by-Side Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* Left Column: Other Agencies */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-red-500/20 bg-[#0F131D]/60 space-y-6">
          <div className="flex items-center gap-3 pb-6 border-b border-cortelo-border/60">
            <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <X className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase text-cortelo-text">
                Other Agencies
              </h3>
              <p className="text-xs font-mono text-cortelo-muted">
                Generic, bloated, and recurring SaaS taxes
              </p>
            </div>
          </div>

          <ul className="space-y-4">
            {comparisons.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-cortelo-muted">
                <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                  <X className="w-3 h-3" />
                </div>
                <span>{c.other}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Cortelo (Highlighted with Mint Border) */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border-2 border-cortelo-mint bg-gradient-to-br from-[#0F131D] to-[#07090E] space-y-6 shadow-[0_0_50px_rgba(45,212,167,0.15)] relative">
          
          <div className="flex items-center justify-between pb-6 border-b border-cortelo-border/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cortelo-mint/20 border border-cortelo-mint/50 flex items-center justify-center text-cortelo-mint shadow-[0_0_15px_rgba(45,212,167,0.3)]">
                <Check className="w-5 h-5 stroke-[3]" />
              </div>
              <div>
                <h3 className="text-lg font-black uppercase text-cortelo-text">
                  Cortelo Systems
                </h3>
                <p className="text-xs font-mono text-cortelo-mint font-semibold">
                  Zero Vibe-Coding Standard &bull; 100% IP Handover
                </p>
              </div>
            </div>

            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-cortelo-mint text-black font-mono font-bold text-[10px] uppercase">
              Recommended
            </span>
          </div>

          <ul className="space-y-4">
            {comparisons.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-cortelo-text font-medium">
                <div className="w-5 h-5 rounded-full bg-cortelo-mint text-black flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(45,212,167,0.4)]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{c.cortelo}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <button
              onClick={() => openDrawer("Comparison Evaluation & Architecture Discussion")}
              className="w-full py-3.5 rounded-full bg-cortelo-mint text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-[0_0_20px_rgba(45,212,167,0.35)]"
            >
              Choose Cortelo Standard &rarr;
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}

