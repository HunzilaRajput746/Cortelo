"use client";

import React from "react";
import Image from "next/image";
import { ProjectItem } from "@/lib/agencyData";
import { X, ExternalLink, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInitiateProject: (projectTitle: string) => void;
}

export default function ProjectDetailModal({
  project,
  onClose,
  onInitiateProject,
}: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col bg-[#0D0D0D] text-[#FCFCFA] animate-in zoom-in-95 duration-200">

        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 bg-[#000000]/80">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border border-white/10 bg-white/[0.04] text-white/90">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-white/50 hidden sm:inline">
              Client: {project.client}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-white/10 bg-[#141414] flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">

          {/* Visual Preview / Mockup */}
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-black shadow-2xl">
            <Image
              src={project.previewImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            {(project.status === "Live in Production" || project.status === "Confidential Enterprise CRM" || project.status === "Live VPS Automation") && (
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#FF4533]/50 flex items-center gap-2 text-[11px] font-mono text-[#FF4533]">
                <span className="w-2 h-2 rounded-full bg-[#FF4533] animate-pulse" />
                Live on VPS Infrastructure
              </div>
            )}
          </div>

          {/* Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#FCFCFA] tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-mono text-[#FF4533] mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Metrics Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#141414] border border-white/10">
            <div>
              <div className="text-[10px] font-mono text-white/50 uppercase">
                {project.metrics.primaryLabel}
              </div>
              <div className="text-lg sm:text-xl font-bold font-mono text-[#FCFCFA]">
                {project.metrics.primaryValue}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-white/50 uppercase">
                {project.metrics.secondaryLabel}
              </div>
              <div className="text-lg sm:text-xl font-bold font-mono text-[#FF4533]">
                {project.metrics.secondaryValue}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-white/50 uppercase">Category</div>
              <div className="text-xs font-semibold text-white/90 mt-1 truncate">
                {project.category}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-white/50 uppercase">Intellectual Property</div>
              <div className="text-xs font-semibold text-[#FF4533] mt-1">
                100% Client Owned
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white/50">
              System Architecture &amp; Delivery Summary
            </h3>
            <p className="text-sm text-white/60 leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          {/* Architecture Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white/90 font-bold">
                Technical Stack &amp; Infrastructure
              </h4>
              <ul className="space-y-2">
                {project.architecture.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-white/60 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-[#FF4533] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white/90 font-bold">
                Verified Outcomes &amp; Impact
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-white/60 leading-relaxed">
                    <ShieldCheck className="w-4 h-4 text-[#FF4533] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-8 py-5 border-t border-white/10 bg-[#000000]/80">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#FF4533]/50 bg-[#FF4533]/15 text-[#FF4533] hover:bg-[#FF4533] hover:text-white font-mono text-xs font-semibold transition-all shadow-[0_0_15px_rgba(255,69,51,0.2)]"
              >
                <span>Launch Live System</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href="https://devhunzila.site"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-white/50 hover:text-[#FF4533] transition-colors"
            >
              <span>View Founder Portfolio (devhunzila.site)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <button
            onClick={() => {
              onClose();
              onInitiateProject(project.title);
            }}
            className="btn-conversion-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#FF4533] hover:bg-[#FF220E] text-white font-bold text-xs uppercase tracking-wider active:scale-95 transition-all shadow-[0_0_20px_rgba(255,69,51,0.35)] cursor-pointer"
          >
            <span>Commission Similar System</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
