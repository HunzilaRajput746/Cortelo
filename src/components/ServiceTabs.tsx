"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AGENCY_SERVICES } from "@/lib/agencyData";
import { Server, Network, Terminal, Layout, Cpu, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { useAgencyShell } from "./ClientShell";

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const current = AGENCY_SERVICES[activeTab];
  const { openDrawer } = useAgencyShell();

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "crm-architecture":
        return Server;
      case "ai-agents":
        return Network;
      case "workflow-automation":
        return Terminal;
      case "fullstack-platforms":
        return Layout;
      case "classic-ai-ml":
        return Cpu;
      case "growth-marketing":
        return TrendingUp;
      default:
        return Server;
    }
  };

  const Icon = getServiceIcon(current.id);

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono uppercase tracking-wider text-white/90 font-semibold inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4533]" />
            Engineering Disciplines &bull; 01
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#FCFCFA] mt-4 uppercase">
            Architectures Built to{" "}
            <span className="font-serif italic font-normal text-white lowercase">Deploy</span>.
          </h2>
        </div>
        <p className="text-sm text-white/60 max-w-md font-light leading-relaxed">
          From custom CRM architecture and multi-agent swarms to self-hosted n8n automation and high-ticket growth funnels — inspect verified scopes and deliverables for each discipline.
        </p>
      </div>

      {/* Tabs Pill Navigation */}
      <div className="flex overflow-x-auto gap-2 p-1.5 rounded-full border border-white/10 bg-[#0D0D0D] scrollbar-none">
        {AGENCY_SERVICES.map((d, index) => {
          const isActive = activeTab === index;
          const TabIcon = getServiceIcon(d.id);
          return (
            <button
              key={d.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? "bg-[#FF4533] text-white shadow-[0_0_20px_rgba(255,69,51,0.35)]"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <TabIcon className="w-3.5 h-3.5" />
              <span>{d.num}</span>
              <span>{d.title.split(" ")[0]} {d.title.split(" ")[1] || ""}</span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Pane Card */}
      <div className="p-8 md:p-12 rounded-3xl relative border border-white/10 space-y-8 bg-[#0D0D0D] shadow-xl">

        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 pb-6 border-b border-white/10">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#FF4533] font-semibold uppercase flex items-center gap-2">
              <Icon className="w-4 h-4" />
              <span>{current.tagline}</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#FCFCFA]">
              {current.title}
            </h3>
          </div>
          <div className="text-left md:text-right">
            <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
              VERIFIED TARGET &bull; SLA
            </div>
            <div className="text-sm font-mono font-bold text-[#FF4533] mt-0.5">
              {current.sla}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-white/60 max-w-4xl leading-relaxed font-light">
          {current.description}
        </p>

        {/* Grid: Deliverables and Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/10">
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/90 font-bold">
              Production Deliverables
            </h4>
            <ul className="space-y-2.5">
              {current.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-white/80 font-mono">
                  <CheckCircle className="w-4 h-4 text-[#FF4533] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/90 font-bold">
              Core Tech Stack &amp; Infrastructure
            </h4>
            <div className="flex flex-wrap gap-2">
              {current.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg border border-white/10 bg-[#141414] text-xs font-mono text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-white/50">
            Fixed Scope &bull; 100% IP Code Transfer &bull; Verified Production SLAs
          </div>
          <button
            onClick={() => openDrawer(`Scope Consultation: ${current.title}`)}
            className="btn-conversion-primary w-full sm:w-auto px-6 py-3 rounded-full bg-[#FF4533] hover:bg-[#FF220E] text-white font-bold text-xs uppercase tracking-wider active:scale-95 transition-all shadow-[0_0_20px_rgba(255,69,51,0.35)] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Commission This Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
