"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AGENCY_TEAMS, TeamDivision } from "@/lib/agencyData";
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
          <span className="text-xs font-mono uppercase tracking-wider text-cortelo-mint font-semibold">
            Multidisciplinary Roster &bull; 04
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-cortelo-text mt-2 uppercase">
            Specialized Engineering Divisions.
          </h2>
        </div>
        <p className="text-sm text-cortelo-muted max-w-md font-light leading-relaxed">
          From autonomous AI swarms to self-hosted cloud DevOps, custom CRM engineering, and performance marketing — our cross-functional teams execute end-to-end under one unified architectural standard.
        </p>
      </div>

      {/* Division Navigation Pills */}
      <div className="flex overflow-x-auto gap-2.5 p-1.5 rounded-full border border-cortelo-border glass-panel scrollbar-none">
        {AGENCY_TEAMS.map((team, idx) => {
          const Icon = getDivisionIcon(team.id);
          const isSelected = selectedDiv === idx;
          return (
            <button
              key={team.id}
              onClick={() => setSelectedDiv(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-all whitespace-nowrap ${isSelected
                  ? "bg-cortelo-mint text-black shadow-[0_0_20px_rgba(45,212,167,0.3)]"
                  : "text-cortelo-muted hover:text-cortelo-text hover:bg-white/5"
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
      <div className="glass-panel rounded-2xl p-8 sm:p-12 border border-cortelo-border relative overflow-hidden bg-gradient-to-br from-[#0F131D] to-[#07090E]">

        {/* Subtle Specular Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cortelo-mint/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">

          {/* Left Column: Leader & Bio */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-cortelo-border relative shadow-xl shrink-0">
                <Image
                  src={active.avatar}
                  alt={active.leader}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cortelo-mint font-semibold">
                  {active.code} &bull; {active.role}
                </span>
                <h3 className="text-xl font-bold uppercase text-cortelo-text mt-0.5">
                  {active.leader}
                </h3>
                <div className="text-xs font-mono text-cortelo-muted mt-1">
                  Cortelo Studio Division
                </div>
              </div>
            </div>

            <p className="text-sm text-cortelo-muted leading-relaxed font-light">
              {active.bio}
            </p>

            {/* Tech Stack Tags */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase text-cortelo-muted">
                Core Division Tech Stack:
              </div>
              <div className="flex flex-wrap gap-2">
                {active.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md text-[11px] font-mono border border-cortelo-border bg-cortelo-surface text-cortelo-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Capabilities & Execution Scope */}
          <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-cortelo-border/70 lg:pl-8">
            <div>
              <span className="text-xs font-mono text-cortelo-mint font-semibold uppercase">
                Execution Capabilities
              </span>
              <h4 className="text-2xl font-black uppercase text-cortelo-text mt-1">
                {active.name}
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {active.capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3.5 rounded-xl bg-cortelo-surface/80 border border-cortelo-border text-xs text-cortelo-text font-mono"
                >
                  <CheckCircle2 className="w-4 h-4 text-cortelo-mint shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-cortelo-border">
              <div className="text-xs font-mono text-cortelo-muted">
                Full IP Handover &bull; Verified SLAs
              </div>
              <button
                onClick={() => onInitiateProject(active.name)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-cortelo-mint text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-[0_0_20px_rgba(45,212,167,0.3)]"
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

