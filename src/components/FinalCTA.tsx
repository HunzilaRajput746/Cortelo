"use client";

import React from "react";
import { ArrowRight, MessageSquare, ShieldCheck, Cpu, Code2, Zap } from "lucide-react";
import { FOUNDER_DATA } from "@/lib/agencyData";
import { useAgencyShell } from "./ClientShell";

export default function FinalCTA() {
  const { openDrawer } = useAgencyShell();

  return (
    <section className="py-24 px-6 sm:px-10 max-w-[1440px] mx-auto">
      <div className="relative rounded-3xl p-8 sm:p-14 lg:p-20 border border-white/10 bg-[#0D0D0D] overflow-hidden text-center shadow-[0_0_60px_rgba(0,0,0,0.8)]">

        {/* Ambient Conic Gradient Glows (Conversion Signature) */}
        <div className="conic-flame-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] opacity-40 pointer-events-none" />
        <div className="conic-warm-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0D0D0D]/60 to-[#0D0D0D] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono font-bold tracking-widest text-white/90 uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FF4533] animate-pulse" />
            Get Started
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#FCFCFA] leading-[1.1]">
            Ready to scale your business with{" "}
            <span className="font-serif italic font-normal text-white lowercase">intelligent AI</span>?
          </h2>

          <p className="text-sm sm:text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Schedule a 15-minute architecture discovery session directly with founder Hunzila Nisar. We’ll analyze your operational bottlenecks, design your system blueprint, and deliver a working prototype in 7 days.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openDrawer("15-Min Discovery Call")}
              className="btn-conversion-primary w-full sm:w-auto px-8 py-4 text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,69,51,0.4)] cursor-pointer rounded-full bg-[#FF4533] hover:bg-[#FF220E] text-white"
            >
              <span>Book a 15-min Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={FOUNDER_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold flex items-center justify-center gap-2 rounded-full border border-white/10 hover:border-white/20 bg-white/5 text-white hover:text-[#FF4533] transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#FF4533]" />
              <span>Initiate Project Briefing</span>
            </a>
          </div>

          {/* Guarantees Grid */}
          <div className="pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <ShieldCheck className="w-4 h-4 text-[#FF4533] shrink-0" />
              <span className="text-xs font-mono text-white/80">100% IP Code Transfer</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <Cpu className="w-4 h-4 text-[#FF4533] shrink-0" />
              <span className="text-xs font-mono text-white/80">Zero Per-Seat SaaS Taxes</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <Code2 className="w-4 h-4 text-[#FF4533] shrink-0" />
              <span className="text-xs font-mono text-white/80">Private VPS Self-Hosted</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <Zap className="w-4 h-4 text-[#FF4533] shrink-0" />
              <span className="text-xs font-mono text-white/80">7-Day Working MVP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
