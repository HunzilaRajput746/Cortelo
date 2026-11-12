"use client";

import React from "react";
import { ArrowRight, Search, Cpu, Rocket } from "lucide-react";
import { useAgencyShell } from "./ClientShell";

export default function ProcessSteps() {
  const { openDrawer } = useAgencyShell();

  const steps = [
    {
      num: "01",
      title: "System & Funnel Audit",
      description: "We'll start by analyzing your operations, data architecture, and sales pipeline to identify what is holding your throughput back.",
      icon: Search,
      tag: "Week 1 Discovery",
    },
    {
      num: "02",
      title: "Custom Engine Deployment",
      description: "Then, with your exact business objectives in mind, we engineer the custom CRM, autonomous AI agent swarms, and webhook automation.",
      icon: Cpu,
      tag: "Weeks 2-4 Build",
    },
    {
      num: "03",
      title: "Scale & 100% IP Handover",
      description: "We deploy on your private VPS infrastructure, configure real-time observability, and transfer full unencumbered code ownership.",
      icon: Rocket,
      tag: "Week 5+ Launch",
    },
  ];

  return (
    <section id="process" className="py-24 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-cortelo-border">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="px-3.5 py-1 rounded-full border border-cortelo-mint/40 bg-cortelo-mint/10 text-xs font-mono text-cortelo-mint font-semibold uppercase">
          Process
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-cortelo-text tracking-tight">
          Our simple 3-step process to{" "}
          <span className="text-cortelo-mint italic">skyrocket</span> your business.
        </h2>
        <p className="text-sm text-cortelo-muted leading-relaxed font-light">
          Transparent, milestone-driven execution with zero ambiguous retainer fees.
        </p>
      </div>

      {/* 3 Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="glass-panel rounded-3xl p-8 sm:p-10 border border-cortelo-border hover:border-cortelo-mint transition-all flex flex-col justify-between bg-[#0F131D]/80 group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-cortelo-mint/10 border border-cortelo-mint/30 flex items-center justify-center text-cortelo-mint group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black font-mono text-cortelo-muted/40 group-hover:text-cortelo-mint transition-colors">
                    {step.num}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-cortelo-mint uppercase tracking-wider font-semibold block mb-1">
                    {step.tag}
                  </span>
                  <h3 className="text-xl font-bold uppercase text-cortelo-text mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cortelo-muted leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-cortelo-border/60 flex items-center justify-between text-xs font-mono text-cortelo-muted">
                <span>Verified Acceptance</span>
                <span className="text-cortelo-mint">&rarr;</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center pt-12">
        <button
          onClick={() => openDrawer()}
          className="px-8 py-3.5 rounded-full bg-cortelo-mint text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-[0_0_25px_rgba(45,212,167,0.35)]"
        >
          Start Milestone 01 Discovery
        </button>
      </div>

    </section>
  );
}

