"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AGENCY_TEAMS } from "@/lib/agencyData";
import { Cpu, ShieldCheck, Layout, Terminal, TrendingUp, CheckCircle2 } from "lucide-react";

interface TeamsSectionProps {
  onInitiateProject: (divisionName: string) => void;
}

export default function TeamsSection({ onInitiateProject }: TeamsSectionProps) {
  const [selectedDiv, setSelectedDiv] = useState<number>(0);
  const active = AGENCY_TEAMS[selectedDiv];

  const getDivisionIcon = (id: string) => {
    switch (id) {
      case "ai-systems":
        return Cpu;
      case "mlops-security":
        return ShieldCheck;
      case "fullstack-uiux":
        return Layout;
      case "cloud-devops":
        return Terminal;
      case "growth-marketing":
        return TrendingUp;
      default:
        return Cpu;
    }
  };

  return (
    <div className="space-y-12">

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono uppercase tracking-wider text-white/90 font-semibold inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4533]" />
            Multidisciplinary Roster &bull; 04
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#FCFCFA] mt-4 uppercase">
            Specialized Engineering{" "}
            <span className="font-serif italic font-normal text-white lowercase">Divisions</span>.
          </h2>
        </div>
        <p className="text-sm text-white/60 max-w-md font-light leading-relaxed">
          From autonomous AI swarms to self-hosted cloud DevOps, custom CRM engineering, and performance marketing — our cross-functional teams execute end-to-end under one unified architectural standard.
        </p>
      </div>

      {/* Division Navigation Pills */}
      <div className="flex overflow-x-auto gap-2.5 p-1.5 rounded-full border border-white/10 bg-[#0D0D0D] scrollbar-none">
        {AGENCY_TEAMS.map((team, idx) => {
          const Icon = getDivisionIcon(team.id);
          const isSelected = selectedDiv === idx;
          return (
            <button
              key={team.id}
              onClick={() => setSelectedDiv(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-all whitespace-nowrap cursor-pointer ${
                isSelected
                  ? "bg-[#FF4533] text-white shadow-[0_0_20px_rgba(255,69,51,0.35)]"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{team.code}</span>
              <span className="hidden sm:inline">&bull; {team.name.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Division Detailed Showcase Card */}
      <div className="rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden bg-[#0D0D0D] shadow-xl">

        {/* Subtle Specular Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF4533]/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">

          {/* Left Column: Leader & Bio */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 relative shadow-xl shrink-0 bg-[#141414]">
                <Image
                  src={active.avatar}
                  alt={active.leader}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF4533] font-semibold">
                  {active.code} &bull; {active.role}
                </span>
                <h3 className="text-xl font-bold uppercase text-[#FCFCFA] mt-0.5">
                  {active.leader}
                </h3>
                <div className="text-xs font-mono text-white/50 mt-1">
                  Cortelo Studio Division
                </div>
              </div>
            </div>

            <p className="text-sm text-white/60 leading-relaxed font-light">
              {active.bio}
            </p>

            {/* Tech Stack Tags */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase text-white/50">
                Core Division Tech Stack:
              </div>
              <div className="flex flex-wrap gap-2">
                {active.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md text-[11px] font-mono border border-white/10 bg-[#141414] text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Capabilities & Execution Scope */}
          <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
            <div>
              <span className="text-xs font-mono text-[#FF4533] font-semibold uppercase">
                Execution Capabilities
              </span>
              <h4 className="text-2xl font-black uppercase text-[#FCFCFA] mt-1">
                {active.name}
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {active.capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#141414] border border-white/10 text-xs text-white/80 font-mono"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FF4533] shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <div className="text-xs font-mono text-white/50">
                Full IP Handover &bull; Verified SLAs
              </div>
              <button
                onClick={() => onInitiateProject(active.name)}
                className="btn-conversion-primary w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#FF4533] hover:bg-[#FF220E] text-white font-bold text-xs uppercase tracking-wider active:scale-95 transition-all shadow-[0_0_20px_rgba(255,69,51,0.35)] cursor-pointer"
              >
                Engage {active.code} Team
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
