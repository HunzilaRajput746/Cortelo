"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useAgencyShell } from "./ClientShell";

export default function StatementCard() {
  const { openDrawer } = useAgencyShell();

  return (
    <section className="py-16 px-6 sm:px-10 max-w-[1440px] mx-auto">
      <div className="glass-panel rounded-3xl p-10 sm:p-16 border border-cortelo-mint/40 bg-gradient-to-br from-[#0F131D] via-[#0B0F19] to-[#07090E] relative overflow-hidden text-center shadow-2xl">
        
        {/* Specular Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cortelo-mint/8 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cortelo-mint/30 bg-cortelo-mint/10 text-xs font-mono text-cortelo-mint uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Yield Technical Precision</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-cortelo-text tracking-tight leading-tight">
            Here at Cortelo, we focus on{" "}
            <span className="text-cortelo-mint italic">returns</span>.
          </h2>

          <p className="text-sm sm:text-lg text-cortelo-muted leading-relaxed font-light">
            We&apos;re dedicated to engineering bespoke autonomous AI swarms, custom sales CRM platforms, and self-hosted cloud automation. Break free from recurring SaaS taxes and take your operations to the next level.
          </p>

          <div className="pt-4">
            <button
              onClick={() => openDrawer()}
              className="px-9 py-4 rounded-full bg-cortelo-mint text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-[0_0_30px_rgba(45,212,167,0.4)] inline-flex items-center gap-2"
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

