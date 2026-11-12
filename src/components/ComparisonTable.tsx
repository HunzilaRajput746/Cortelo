"use client";

import React from "react";
import { Check, X } from "lucide-react";
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
    <section className="py-24 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-white/10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-white/90 font-semibold uppercase tracking-wider inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4533]" />
          Comparison
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#FCFCFA] tracking-tight">
          But, why would you want to work{" "}
          <span className="font-serif italic font-normal text-white lowercase">with us</span>?
        </h2>
        <p className="text-sm text-white/60 leading-relaxed font-light">
          Discover what separates our engineering studio from traditional agencies and generic AI wrappers.
        </p>
      </div>

      {/* 2-Column Side-by-Side Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* Left Column: Other Agencies */}
        <div className="rounded-3xl p-8 sm:p-10 border border-white/10 bg-[#0D0D0D] space-y-6">
          <div className="flex items-center gap-3 pb-6 border-b border-white/10">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
              <X className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase text-[#FCFCFA]">
                Other Agencies
              </h3>
              <p className="text-xs font-mono text-white/40">
                Generic, bloated, and recurring SaaS taxes
              </p>
            </div>
          </div>

          <ul className="space-y-4">
            {comparisons.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-white/50">
                <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 shrink-0 mt-0.5">
                  <X className="w-3 h-3" />
                </div>
                <span>{c.other}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Cortelo (Highlighted with Electric Flame Border) */}
        <div className="rounded-3xl p-8 sm:p-10 border-2 border-[#FF4533] bg-[#0D0D0D] space-y-6 shadow-[0_0_50px_rgba(255,69,51,0.15)] relative">
          
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FF4533] text-white flex items-center justify-center shadow-[0_0_15px_rgba(255,69,51,0.35)]">
                <Check className="w-5 h-5 stroke-[3]" />
              </div>
              <div>
                <h3 className="text-lg font-black uppercase text-[#FCFCFA]">
                  Cortelo Systems
                </h3>
                <p className="text-xs font-mono text-[#FF4533] font-semibold">
                  Zero Vibe-Coding Standard &bull; 100% IP Handover
                </p>
              </div>
            </div>

            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#FF4533] text-white font-mono font-bold text-[10px] uppercase shadow-sm">
              Recommended
            </span>
          </div>

          <ul className="space-y-4">
            {comparisons.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#FCFCFA] font-medium">
                <div className="w-5 h-5 rounded-full bg-[#FF4533] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(255,69,51,0.4)]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{c.cortelo}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <button
              onClick={() => openDrawer("Comparison Evaluation & Architecture Discussion")}
              className="w-full py-3.5 rounded-full bg-[#FF4533] hover:bg-[#FF220E] text-white font-bold text-xs uppercase tracking-wider active:scale-95 transition-all shadow-[0_0_20px_rgba(255,69,51,0.35)] cursor-pointer"
            >
              Choose Cortelo Standard &rarr;
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}

