"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useAgencyShell } from "./ClientShell";

export default function StatementCard() {
  const { openDrawer } = useAgencyShell();

  return (
    <section className="py-16 px-6 sm:px-10 max-w-[1440px] mx-auto">
      <div className="rounded-3xl p-10 sm:p-16 border border-white/10 bg-[#0D0D0D] relative overflow-hidden text-center shadow-2xl">
        
        {/* Top Conic Gradient Glow (Conversion Style) */}
        <div className="absolute -top-[160px] left-1/2 -translate-x-1/2 w-[450px] h-[450px] pointer-events-none opacity-40">
          <div className="w-full h-full conic-flame-orb animate-conic-slow" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-white/70 uppercase font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#FF4533]" />
            <span>High-Yield Technical Precision</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-[#FCFCFA] tracking-tight leading-tight">
            Here at Cortelo, we focus on{" "}
            <span className="font-serif italic font-normal text-white lowercase">returns</span>.
          </h2>

          <p className="text-sm sm:text-lg text-[#999999] leading-relaxed font-light">
            We&apos;re dedicated to engineering bespoke autonomous AI swarms, custom sales CRM platforms, and self-hosted cloud automation. Break free from recurring SaaS taxes and take your operations to the next level.
          </p>

          <div className="pt-4">
            <button
              onClick={() => openDrawer("15-Min Discovery Call")}
              className="btn-conversion-primary px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2 cursor-pointer shadow-[0px_0px_0px_1px_rgba(255,69,51,0.25),0_0_25px_rgba(255,69,51,0.35)]"
            >
              <span>Book a 15-min call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
