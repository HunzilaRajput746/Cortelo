"use client";

import React, { useState } from "react";
import { Cpu, Server, Network, Sparkles, Layers, ArrowRight, Check } from "lucide-react";

interface SystemEstimatorProps {
  onOpenDrawerWithConfig: (configSummary: string) => void;
}

export default function SystemEstimator({ onOpenDrawerWithConfig }: SystemEstimatorProps) {
  const [selectedPillars, setSelectedPillars] = useState<string[]>([
    "Custom Sales CRM (Revenue.inc Style)",
    "Self-Hosted n8n & Private VPS Mesh",
  ]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>("4 to 6 Weeks (Standard Sprints)");
  const [selectedHosting, setSelectedHosting] = useState<string>("Dedicated Tailscale Private VPS");

  const pillars = [
    { id: "crm", label: "Custom Sales CRM (Revenue.inc Style)", icon: Server },
    { id: "agents", label: "Autonomous AI Multi-Agent Swarms", icon: Network },
    { id: "automation", label: "Self-Hosted n8n & Private VPS Mesh", icon: Cpu },
    { id: "web", label: "Next.js 15 Full-Stack Platform", icon: Layers },
    { id: "ml", label: "Deep Learning & Computer Vision", icon: Sparkles },
  ];

  const timelines = [
    "2 to 3 Weeks (Rapid MVP)",
    "4 to 6 Weeks (Standard Sprints)",
    "8 to 12 Weeks (Enterprise Architecture)",
  ];

  const hostingOptions = [
    "Dedicated Tailscale Private VPS",
    "Self-Managed Oracle Cloud VPS",
    "Client VPC (AWS / GCP / Azure)",
  ];

  const togglePillar = (label: string) => {
    if (selectedPillars.includes(label)) {
      if (selectedPillars.length > 1) {
        setSelectedPillars(selectedPillars.filter((p) => p !== label));
      }
    } else {
      setSelectedPillars([...selectedPillars, label]);
    }
  };

  const handleLaunchBrief = () => {
    const summary = `System Architecture Request:
- Disciplines: ${selectedPillars.join(", ")}
- Target Timeline: ${selectedTimeline}
- Infrastructure: ${selectedHosting}`;
    onOpenDrawerWithConfig(summary);
  };

  return (
    <div className="glass-panel rounded-2xl p-8 sm:p-12 border border-cortelo-mint/30 bg-gradient-to-br from-[#0B0F19] to-[#07090E] relative overflow-hidden shadow-2xl">

      {/* Decorative gradient radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cortelo-mint/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="relative z-10 space-y-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 pb-6 border-b border-cortelo-border">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cortelo-mint font-semibold">
              Interactive Scope Architect &bull; 05
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase text-cortelo-text mt-1">
              Configure Your System Blueprint.
            </h3>
          </div>
          <p className="text-xs font-mono text-cortelo-muted">
            Select modules &bull; 100% IP Handover &bull; Verified SLAs
          </p>
        </div>

        {/* Step 1: Core System Modules */}
        <div className="space-y-3">
          <label className="text-xs font-mono uppercase tracking-wider text-cortelo-muted block">
            Step 1: Select Target Architectural Modules
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {pillars.map((item) => {
              const active = selectedPillars.includes(item.label);
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => togglePillar(item.label)}
                  className={`p-4 rounded-xl border text-left flex items-center justify-between gap-3 transition-all ${active
                      ? "border-cortelo-mint bg-cortelo-mint/10 text-cortelo-text shadow-[0_0_15px_rgba(45,212,167,0.2)]"
                      : "border-cortelo-border bg-cortelo-surface/80 text-cortelo-muted hover:border-cortelo-border/80 hover:text-cortelo-text"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${active ? "text-cortelo-mint" : "text-cortelo-muted"}`} />
                    <span className="text-xs font-mono font-medium">{item.label}</span>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${active
                        ? "border-cortelo-mint bg-cortelo-mint text-black"
                        : "border-cortelo-border"
                      }`}
                  >
                    {active && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2 & 3: Timeline & Infrastructure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">

          {/* Target Timeline */}
          <div className="space-y-3">
            <label className="text-xs font-mono uppercase tracking-wider text-cortelo-muted block">
              Step 2: Deployment Horizon
            </label>
            <div className="space-y-2">
              {timelines.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTimeline(time)}
                  className={`w-full p-3 rounded-xl border text-left text-xs font-mono transition-all flex items-center justify-between ${selectedTimeline === time
                      ? "border-cortelo-mint bg-cortelo-mint/10 text-cortelo-text"
                      : "border-cortelo-border bg-cortelo-surface/60 text-cortelo-muted hover:border-cortelo-border/80"
                    }`}
                >
                  <span>{time}</span>
                  {selectedTimeline === time && <Check className="w-3.5 h-3.5 text-cortelo-mint" />}
                </button>
              ))}
            </div>
          </div>

          {/* Infrastructure Preference */}
          <div className="space-y-3">
            <label className="text-xs font-mono uppercase tracking-wider text-cortelo-muted block">
              Step 3: Private Infrastructure Topology
            </label>
            <div className="space-y-2">
              {hostingOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSelectedHosting(opt)}
                  className={`w-full p-3 rounded-xl border text-left text-xs font-mono transition-all flex items-center justify-between ${selectedHosting === opt
                      ? "border-cortelo-mint bg-cortelo-mint/10 text-cortelo-text"
                      : "border-cortelo-border bg-cortelo-surface/60 text-cortelo-muted hover:border-cortelo-border/80"
                    }`}
                >
                  <span>{opt}</span>
                  {selectedHosting === opt && <Check className="w-3.5 h-3.5 text-cortelo-mint" />}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Output Banner & Action */}
        <div className="p-6 rounded-xl border border-cortelo-border bg-[#07090E]/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-mono text-cortelo-mint font-semibold uppercase">
              Blueprint Generated ({selectedPillars.length} Modules Selected)
            </div>
            <div className="text-sm font-semibold text-cortelo-text">
              Target Handover: {selectedTimeline.split(" ")[0]} {selectedTimeline.split(" ")[1]} {selectedTimeline.split(" ")[2]} &bull; {selectedHosting}
            </div>
            <div className="text-[11px] font-mono text-cortelo-muted">
              Mutual NDA Enforced &bull; Direct Founder Assessment by Hunzila Nisar within 24h
            </div>
          </div>

          <button
            onClick={handleLaunchBrief}
            className="w-full md:w-auto px-8 py-3.5 rounded-full bg-cortelo-mint text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-[0_0_25px_rgba(45,212,167,0.4)] flex items-center justify-center gap-2"
          >
            <span>Lock Configuration &amp; Initiate Brief</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}

