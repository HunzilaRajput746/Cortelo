"use client";

import React from "react";
import { ArrowRight, MessageSquare, ShieldCheck, Cpu, Code2, Zap } from "lucide-react";
import { FOUNDER_DATA } from "@/lib/agencyData";
import { useAgencyShell } from "./ClientShell";

export default function FinalCTA() {
  const { openDrawer } = useAgencyShell();

  return (
    <section className="py-24 px-6 sm:px-10 max-w-[1440px] mx-auto">
      <div className="relative rounded-3xl p-8 sm:p-14 lg:p-20 border border-cortelo-mint/40 bg-gradient-to-b from-[#0F1626] to-[#07090E] overflow-hidden text-center shadow-[0_0_80px_rgba(45,212,167,0.12)]">
        
        {/* Glow Effects */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-cortelo-mint/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-cortelo-mint/50 bg-cortelo-mint/10 text-xs font-mono font-bold tracking-widest text-cortelo-mint uppercase">
            <span className="w-2 h-2 rounded-full bg-cortelo-mint animate-pulse" />
            Get Started
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-cortelo-text leading-[1.1]">
            Ready to scale your business with{" "}
            <span className="text-cortelo-mint italic font-serif lowercase">intelligent AI</span>?
          </h2>

          <p className="text-sm sm:text-lg text-cortelo-muted max-w-2xl mx-auto font-light leading-relaxed">
            Schedule a 15-minute architecture discovery session directly with founder Hunzila Nisar. We’ll analyze your operational bottlenecks, design your system blueprint, and deliver a working prototype in 7 days.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openDrawer("15-Min Discovery Call")}
              className="btn-primary w-full sm:w-auto px-8 py-4 text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(45,212,167,0.4)] cursor-pointer"
            >
              <span>Book a 15-min Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={FOUNDER_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto px-8 py-4 text-sm font-bold flex items-center justify-center gap-2 border-cortelo-mint/30 hover:border-cortelo-mint text-cortelo-text hover:text-cortelo-mint"
            >
              <MessageSquare className="w-4 h-4 text-cortelo-mint" />
              <span>Initiate Project Briefing</span>
            </a>
          </div>

          {/* Guarantees Grid */}
          <div className="pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <ShieldCheck className="w-4 h-4 text-cortelo-mint shrink-0" />
              <span className="text-xs font-mono text-cortelo-text">100% IP Code Transfer</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <Cpu className="w-4 h-4 text-cortelo-mint shrink-0" />
              <span className="text-xs font-mono text-cortelo-text">Zero Per-Seat SaaS Taxes</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <Code2 className="w-4 h-4 text-cortelo-mint shrink-0" />
              <span className="text-xs font-mono text-cortelo-text">Private VPS Self-Hosted</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <Zap className="w-4 h-4 text-cortelo-mint shrink-0" />
              <span className="text-xs font-mono text-cortelo-text">7-Day Working MVP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
