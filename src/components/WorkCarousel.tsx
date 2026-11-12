"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AGENCY_PROJECTS } from "@/lib/agencyData";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useAgencyShell } from "./ClientShell";

export default function WorkCarousel() {
  const [current, setCurrent] = useState(0);
  const { openProjectModal } = useAgencyShell();

  const prev = () => {
    setCurrent((prevIndex) => (prevIndex === 0 ? AGENCY_PROJECTS.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrent((prevIndex) => (prevIndex === AGENCY_PROJECTS.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="space-y-8">
      {/* Header controls */}
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
        <div>
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono uppercase tracking-wider text-white/90 font-semibold inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4533]" />
            Production Deployments &bull; 02
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-[#FCFCFA] mt-4">
            Verified Production{" "}
            <span className="font-serif italic font-normal text-white lowercase">Outcomes</span>.
          </h2>
          <p className="text-sm text-white/60 mt-1 max-w-xl font-light">
            Live enterprise CRMs, self-hosted VPS automation engines, and deep learning platforms currently handling commercial workloads.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous Project"
            className="w-12 h-12 rounded-full border border-white/10 bg-[#0D0D0D] flex items-center justify-center text-white/60 hover:border-[#FF4533] hover:text-white hover:bg-[#FF4533] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next Project"
            className="w-12 h-12 rounded-full border border-white/10 bg-[#0D0D0D] flex items-center justify-center text-white/60 hover:border-[#FF4533] hover:text-white hover:bg-[#FF4533] transition-all cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Sliding Cards */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
        >
          {AGENCY_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] rounded-3xl p-6 flex flex-col justify-between group hover:border-[#FF4533]/50 transition-all duration-300 shrink-0 bg-[#0D0D0D] border border-white/10 shadow-sm hover:shadow-[0_0_30px_rgba(255,69,51,0.12)]"
            >
              <div>
                {/* Top status */}
                <div className="flex items-center justify-between mb-4 text-xs font-mono">
                  <span className="text-[#FF4533] font-semibold truncate max-w-[200px]">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-white/10 bg-white/[0.04] text-white/90">
                    {project.badge}
                  </span>
                </div>

                {/* Card Visual Preview */}
                <div
                  onClick={() => openProjectModal(project)}
                  className="h-48 rounded-xl bg-black mb-5 relative overflow-hidden border border-white/10 cursor-pointer group/preview"
                >
                  <Image
                    src={project.previewImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover/preview:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="btn-conversion-primary px-4 py-2 rounded-full bg-[#FF4533] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg">
                      Inspect Architecture &rarr;
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold uppercase text-[#FCFCFA] mb-2 leading-snug line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed mb-4 font-light line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Metrics Bar & Actions */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase">
                      {project.metrics.primaryLabel}
                    </span>
                    <span className="text-base font-bold text-[#FCFCFA]">
                      {project.metrics.primaryValue}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-white/40 block text-[10px] uppercase">
                      {project.metrics.secondaryLabel}
                    </span>
                    <span className="text-base font-bold text-[#FF4533]">
                      {project.metrics.secondaryValue}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => openProjectModal(project)}
                    className="flex-1 py-2 rounded-xl border border-white/10 bg-[#141414] hover:border-[#FF4533]/50 hover:text-white text-xs font-mono font-medium transition-all text-white/80 text-center cursor-pointer"
                  >
                    Inspect System
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl border border-white/10 bg-[#141414] text-[#FF4533] hover:bg-[#FF4533] hover:text-white hover:border-[#FF4533] text-xs font-mono transition-all flex items-center gap-1"
                      title="Open Live Production Platform"
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

      {/* Bottom Counter */}
      <div className="flex justify-between items-center text-xs font-mono text-white/50 pt-4 border-t border-white/10">
        <span>Slide {current + 1} of {AGENCY_PROJECTS.length} Verified Systems</span>
        <div className="flex items-center gap-4">
          <a
            href="https://devhunzila.site"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF4533] transition-colors flex items-center gap-1"
          >
            <span>Founder Portfolio (devhunzila.site)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
