"use client";

import React from "react";
import Image from "next/image";
import { AGENCY_PROJECTS } from "@/lib/agencyData";
import { useAgencyShell } from "./ClientShell";
import { ArrowUpRight } from "lucide-react";

export default function ResultsSection() {
  const { openProjectModal } = useAgencyShell();

  const featured = AGENCY_PROJECTS.slice(0, 3);
  const secondary = AGENCY_PROJECTS.slice(3);

  return (
    <section id="results" className="py-24 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-white/10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-white/70 uppercase tracking-wider font-medium">
          Results
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#FCFCFA] tracking-tight">
          Results speak for{" "}
          <span className="font-serif italic font-normal text-white lowercase">themselves</span>.
        </h2>
        <p className="text-sm sm:text-base text-[#999999] leading-relaxed font-light">
          We&apos;ve engineered production systems across a number of industries and achieved measured outcomes with ambitious brands and organizations.
        </p>
      </div>

      {/* 3 Featured Results Cards matching Conversion Template */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featured.map((p) => (
          <div
            key={p.id}
            onClick={() => openProjectModal(p)}
            className="rounded-3xl p-7 sm:p-8 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between bg-[#0D0D0D] group cursor-pointer"
          >
            <div>
              {/* Category & Badge */}
              <div className="flex items-center justify-between mb-6 text-xs font-mono">
                <span className="text-[#FF4533] font-bold uppercase">{p.category}</span>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold border border-white/10 bg-white/[0.04] text-white/70">
                  {p.badge}
                </span>
              </div>

              {/* Mockup Visual */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 mb-6 bg-[#000000]">
                <Image
                  src={p.previewImage}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#FF4533] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold uppercase text-white mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-xs text-[#999999] leading-relaxed font-light mb-6 line-clamp-3">
                {p.description}
              </p>
            </div>

            {/* Metrics Breakdown */}
            <div className="pt-6 border-t border-white/10 space-y-3 font-mono">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-[#888888] uppercase">{p.metrics.primaryLabel}</span>
                <span className="text-2xl font-black text-white">{p.metrics.primaryValue}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-[#888888] uppercase">{p.metrics.secondaryLabel}</span>
                <span className="text-lg font-bold text-[#FF4533]">{p.metrics.secondaryValue}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Secondary Project Showcase (Smart Helmet, GourmetOS, Oncology AI) */}
      <div className="mt-12 pt-12 border-t border-white/10">
        <div className="flex items-center justify-between mb-8 text-xs font-mono text-[#888888]">
          <span className="uppercase tracking-wider">Additional Specialized Systems (IoT, Vision &amp; Healthcare)</span>
          <span className="text-[#FF4533]">Verified Production Benchmarks</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondary.map((p) => (
            <div
              key={p.id}
              onClick={() => openProjectModal(p)}
              className="rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between bg-[#0D0D0D] group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4 text-[11px] font-mono">
                  <span className="text-[#FF4533] font-semibold">{p.badge}</span>
                  <span className="text-[#888888]">{p.metrics.primaryValue}</span>
                </div>
                <h4 className="text-base font-bold uppercase text-white mb-2 leading-snug">
                  {p.title}
                </h4>
                <p className="text-xs text-[#999999] leading-relaxed line-clamp-2">
                  {p.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#888888] group-hover:text-white transition-colors">
                <span>Inspect Technical Architecture</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF4533]" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
