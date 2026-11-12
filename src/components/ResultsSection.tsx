"use client";

import React from "react";
import Image from "next/image";
import { AGENCY_PROJECTS } from "@/lib/agencyData";
import { useAgencyShell } from "./ClientShell";
import { ArrowUpRight, Zap, ExternalLink } from "lucide-react";

export default function ResultsSection() {
  const { openProjectModal } = useAgencyShell();

  const featured = AGENCY_PROJECTS.slice(0, 3);
  const secondary = AGENCY_PROJECTS.slice(3);

  return (
    <section id="results" className="py-24 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-cortelo-border">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="px-3.5 py-1 rounded-full border border-cortelo-mint/40 bg-cortelo-mint/10 text-xs font-mono text-cortelo-mint font-semibold uppercase">
          Results
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-cortelo-text tracking-tight">
          Results speak for{" "}
          <span className="text-cortelo-mint italic">themselves</span>.
        </h2>
        <p className="text-sm text-cortelo-muted leading-relaxed font-light">
          We&apos;ve engineered production systems across a number of industries and achieved measured outcomes with ambitious brands and organizations.
        </p>
      </div>

      {/* 3 Featured Results Cards matching Conversion Template */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featured.map((p) => (
          <div
            key={p.id}
            onClick={() => openProjectModal(p)}
            className="glass-panel rounded-3xl p-8 border border-cortelo-border hover:border-cortelo-mint transition-all flex flex-col justify-between bg-[#0F131D]/90 group cursor-pointer"
          >
            <div>
              {/* Client Tag */}
              <div className="flex items-center justify-between mb-6 text-xs font-mono">
                <span className="text-cortelo-mint font-bold uppercase">{p.category}</span>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold border border-cortelo-border bg-cortelo-surface text-cortelo-muted">
                  {p.badge}
                </span>
              </div>

              {/* Big Mockup Visual */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-cortelo-border/70 mb-6 bg-[#07090E]">
                <Image
                  src={p.previewImage}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-cortelo-text group-hover:bg-cortelo-mint group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold uppercase text-cortelo-text mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-xs text-cortelo-muted leading-relaxed font-light mb-6 line-clamp-3">
                {p.description}
              </p>
            </div>

            {/* Metrics Breakdown */}
            <div className="pt-6 border-t border-cortelo-border/70 space-y-3 font-mono">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-cortelo-muted uppercase">{p.metrics.primaryLabel}</span>
                <span className="text-2xl font-black text-cortelo-text">{p.metrics.primaryValue}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-cortelo-muted uppercase">{p.metrics.secondaryLabel}</span>
                <span className="text-lg font-bold text-cortelo-mint">{p.metrics.secondaryValue}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Secondary Project Showcase (Smart Helmet, GourmetOS, Oncology AI) */}
      <div className="mt-12 pt-12 border-t border-cortelo-border/60">
        <div className="flex items-center justify-between mb-8 text-xs font-mono text-cortelo-muted">
          <span className="uppercase tracking-wider">Additional Specialized Systems (IoT, Vision &amp; Healthcare)</span>
          <span className="text-cortelo-mint">Verified Production Benchmarks</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondary.map((p) => (
            <div
              key={p.id}
              onClick={() => openProjectModal(p)}
              className="glass-panel rounded-2xl p-6 border border-cortelo-border hover:border-cortelo-mint/60 transition-all flex flex-col justify-between bg-[#0F131D]/80 group cursor-pointer"
            >
              <div>
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-cortelo-border mb-4 bg-[#07090E]">
                  <Image
                    src={p.previewImage}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-[10px] font-mono text-cortelo-mint uppercase font-semibold mb-1">
                  {p.badge}
                </div>
                <h4 className="text-sm font-bold uppercase text-cortelo-text mb-2 truncate">
                  {p.title}
                </h4>
                <p className="text-xs text-cortelo-muted leading-relaxed font-light line-clamp-2">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-cortelo-border flex justify-between items-center text-xs font-mono">
                <span className="text-cortelo-muted">{p.metrics.primaryLabel}</span>
                <span className="text-cortelo-mint font-bold">{p.metrics.primaryValue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

