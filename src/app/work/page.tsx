"use client";

import React from "react";
import Link from "next/link";
import WorkCarousel from "@/components/WorkCarousel";
import { AGENCY_PROJECTS, FOUNDER_DATA } from "@/lib/agencyData";
import { useAgencyShell } from "@/components/ClientShell";
import Image from "next/image";
import { ExternalLink, ShieldCheck, Zap, ArrowRight, User } from "lucide-react";

export default function WorkPage() {
  const { openProjectModal, openDrawer, openFounderModal } = useAgencyShell();

  return (
    <main className="min-h-screen pt-36 pb-24 px-6 relative z-10">
      <div className="max-w-[1440px] mx-auto space-y-20">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cortelo-mint/40 bg-cortelo-mint/10 text-xs font-mono text-cortelo-mint font-semibold uppercase">
            <span>Verified Systems &bull; 02 Selected Work</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-cortelo-text">
            Measured Outcomes in Production.
          </h1>
          <p className="text-base text-cortelo-muted leading-relaxed font-light">
            Live client CRM platforms, self-hosted VPS automation engines, and deep learning pipelines delivered by <strong>Hunzila Nisar</strong> and the Cortelo engineering team. Real latency metrics, verified throughput, zero vaporware.
          </p>
        </div>

        {/* Top Carousel Showcase */}
        <WorkCarousel />

        {/* Detailed Grid of All 6 Production Systems */}
        <div className="space-y-8 pt-8 border-t border-cortelo-border">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
            <div>
              <span className="text-xs font-mono text-cortelo-mint tracking-wider uppercase font-semibold">
                Complete Production Catalogue
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-cortelo-text mt-1">
                Explore Full Systems Architecture
              </h2>
            </div>
            <button
              onClick={openFounderModal}
              className="text-xs font-mono text-cortelo-mint hover:underline flex items-center gap-1.5"
            >
              <User className="w-3.5 h-3.5" />
              <span>Inspect Founder Profile (Hunzila Nisar)</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AGENCY_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="glass-panel rounded-2xl p-6 border border-cortelo-border hover:border-cortelo-mint/70 transition-all flex flex-col justify-between group bg-[#0F131D]/80"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 text-xs font-mono">
                    <span className="text-cortelo-mint font-semibold">{project.category}</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-cortelo-mint/40 bg-cortelo-mint/10 text-cortelo-mint">
                      {project.badge}
                    </span>
                  </div>

                  <div
                    onClick={() => openProjectModal(project)}
                    className="h-44 rounded-xl bg-[#07090E] mb-5 relative overflow-hidden border border-cortelo-border cursor-pointer group/thumb"
                  >
                    <Image
                      src={project.previewImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 rounded-full bg-cortelo-mint text-black font-mono text-xs font-bold uppercase">
                        Inspect System
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold uppercase text-cortelo-text mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-cortelo-muted leading-relaxed mb-4 font-light line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-cortelo-border">
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div>
                      <span className="text-cortelo-muted block text-[10px] uppercase">
                        {project.metrics.primaryLabel}
                      </span>
                      <span className="text-base font-bold text-cortelo-text">
                        {project.metrics.primaryValue}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-cortelo-muted block text-[10px] uppercase">
                        {project.metrics.secondaryLabel}
                      </span>
                      <span className="text-base font-bold text-cortelo-mint">
                        {project.metrics.secondaryValue}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openProjectModal(project)}
                      className="flex-1 py-2.5 rounded-lg border border-cortelo-border bg-cortelo-surface hover:border-cortelo-mint hover:text-cortelo-mint text-xs font-mono font-medium transition-all"
                    >
                      Inspect Blueprint
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2.5 rounded-lg border border-cortelo-mint/40 bg-cortelo-mint/10 text-cortelo-mint hover:bg-cortelo-mint hover:text-black text-xs font-mono transition-all flex items-center gap-1"
                        title="Open Live Platform"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="pt-16 border-t border-cortelo-border text-center space-y-4">
          <p className="text-xs font-mono text-cortelo-muted">
            Have a specialized commercial workflow, dataset, or CRM need?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openDrawer()}
              className="px-8 py-3.5 rounded-full bg-cortelo-mint text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_20px_rgba(45,212,167,0.3)]"
            >
              Schedule Briefing with Founders
            </button>
            <a
              href={FOUNDER_DATA.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full border border-cortelo-border bg-cortelo-surface hover:border-cortelo-mint text-cortelo-text text-xs font-mono transition-all flex items-center gap-2"
            >
              <span>Explore devhunzila.site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
