"use client";

import React from "react";
import { Search, Cpu, Rocket } from "lucide-react";
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
    <section id="process" className="py-24 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-white/10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-white/90 font-semibold uppercase tracking-wider inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4533]" />
          Process
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#FCFCFA] tracking-tight">
          Our simple 3-step process to{" "}
          <span className="font-serif italic font-normal text-white lowercase">skyrocket</span> your business.
        </h2>
        <p className="text-sm text-white/60 leading-relaxed font-light">
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
              className="rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-[#FF4533]/50 transition-all duration-300 flex flex-col justify-between bg-[#0D0D0D] group shadow-sm hover:shadow-[0_0_30px_rgba(255,69,51,0.12)]"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF4533]/10 border border-[#FF4533]/30 flex items-center justify-center text-[#FF4533] group-hover:scale-110 group-hover:bg-[#FF4533] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black font-mono text-white/20 group-hover:text-[#FF4533] transition-colors">
                    {step.num}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[#FF4533] uppercase tracking-wider font-semibold block mb-1">
                    {step.tag}
                  </span>
                  <h3 className="text-xl font-bold uppercase text-[#FCFCFA] mb-3 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                <span>Verified Acceptance</span>
                <span className="text-[#FF4533]">&rarr;</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center pt-12">
        <button
          onClick={() => openDrawer()}
          className="btn-conversion-primary px-8 py-3.5 rounded-full bg-[#FF4533] hover:bg-[#FF220E] text-white font-bold text-xs uppercase tracking-wider active:scale-95 transition-all shadow-[0_0_25px_rgba(255,69,51,0.35)] cursor-pointer"
        >
          Start Milestone 01 Discovery
        </button>
      </div>

    </section>
  );
}

