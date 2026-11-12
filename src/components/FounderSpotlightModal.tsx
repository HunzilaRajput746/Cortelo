"use client";

import React from "react";
import Image from "next/image";
import { FOUNDER_DATA } from "@/lib/agencyData";
import { X, ExternalLink, Award, Code2, Globe, MessageSquare, CheckCircle } from "lucide-react";

interface FounderSpotlightModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInitiateProject: () => void;
}

export default function FounderSpotlightModal({
  isOpen,
  onClose,
  onInitiateProject,
}: FounderSpotlightModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col bg-[#0D0D0D] text-[#FCFCFA] animate-in zoom-in-95 duration-200">

        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 bg-[#000000]/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF4533] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-white/90">
              Founder Profile &amp; Verified Engineering Credentials
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-white/10 bg-[#141414] flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all cursor-pointer"
            aria-label="Close Profile"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">

          {/* Top Profile Banner */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-white/10">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#FF4533]/50 relative shrink-0 shadow-[0_0_30px_rgba(255,69,51,0.25)]">
              <Image
                src="/assets/team/hunzila_nisar.jpg"
                alt="Hunzila Nisar - Founder of Cortelo"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="text-center sm:text-left space-y-1.5 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-mono text-white/90 font-semibold uppercase">
                <Award className="w-3 h-3 text-[#FF4533]" />
                BSc Artificial Intelligence &bull; A+ Honors
              </div>
              <h2 className="text-3xl font-black uppercase text-[#FCFCFA] tracking-tight">
                {FOUNDER_DATA.name}
              </h2>
              <p className="text-xs font-mono text-[#FF4533] font-medium">
                {FOUNDER_DATA.title}
              </p>
              <p className="text-xs font-mono text-white/50">
                Industry Experience: Blizon Software House &bull; EnlivenAI Solutions &bull; BuiltinSoft (NAVTTC A+)
              </p>
              <p className="text-xs text-white/60 leading-relaxed font-light pt-1">
                Full-stack AI and systems architect with proven enterprise deployments in production. Delivers live enterprise CRM platforms and self-hosted automation infrastructure (n8n on Oracle VPS) running on private Tailscale mesh networks.
              </p>
            </div>
          </div>

          {/* Key Verified Accomplishments */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white/50 font-bold">
              Production Systems &amp; Verified Distinctions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {FOUNDER_DATA.distinctions.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#141414] border border-white/10 text-xs text-white/80 font-mono"
                >
                  <CheckCircle className="w-4 h-4 text-[#FF4533] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Portals & Action Channels */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white/50 font-bold">
              Direct Contact &amp; Verified Channels
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

              <a
                href={FOUNDER_DATA.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-white/10 bg-[#141414] hover:border-[#FF4533] transition-all text-center group"
              >
                <Globe className="w-5 h-5 mx-auto mb-1.5 text-[#FF4533] group-hover:scale-110 transition-transform" />
                <div className="text-xs font-bold text-white">devhunzila.site</div>
                <div className="text-[10px] font-mono text-white/50 mt-0.5 flex items-center justify-center gap-1">
                  <span>Live Portfolio</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </div>
              </a>

              <a
                href={FOUNDER_DATA.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-white/10 bg-[#141414] hover:border-green-400 transition-all text-center group"
              >
                <Award className="w-5 h-5 mx-auto mb-1.5 text-green-400 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-bold text-white">Fiverr Services</div>
                <div className="text-[10px] font-mono text-white/50 mt-0.5 flex items-center justify-center gap-1">
                  <span>Top Rated Seller</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </div>
              </a>

              <a
                href={FOUNDER_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-white/10 bg-[#141414] hover:border-white transition-all text-center group"
              >
                <Code2 className="w-5 h-5 mx-auto mb-1.5 text-white group-hover:scale-110 transition-transform" />
                <div className="text-xs font-bold text-white">GitHub Profile</div>
                <div className="text-[10px] font-mono text-white/50 mt-0.5 flex items-center justify-center gap-1">
                  <span>@HunzilaRajput746</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </div>
              </a>

              <a
                href={FOUNDER_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-white/10 bg-[#141414] hover:border-[#FF4533] transition-all text-center group"
              >
                <MessageSquare className="w-5 h-5 mx-auto mb-1.5 text-[#FF4533] group-hover:scale-110 transition-transform" />
                <div className="text-xs font-bold text-white">Direct Inquiry</div>
                <div className="text-[10px] font-mono text-white/50 mt-0.5">
                  Available on Request
                </div>
              </a>

            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-8 py-5 border-t border-white/10 bg-[#000000]/80">
          <a
            href={FOUNDER_DATA.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-white/10 hover:border-white/30 text-white font-mono text-xs font-semibold transition-all"
          >
            <span>Visit Complete Portfolio (devhunzila.site)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => {
              onClose();
              onInitiateProject();
            }}
            className="btn-conversion-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#FF4533] hover:bg-[#FF220E] text-white font-bold text-xs uppercase tracking-wider active:scale-95 transition-all shadow-[0_0_20px_rgba(255,69,51,0.35)] cursor-pointer"
          >
            <span>Schedule Briefing with Hunzila</span>
          </button>
        </div>

      </div>
    </div>
  );
}
