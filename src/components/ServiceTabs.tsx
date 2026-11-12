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
          <span className="text-xs font-mono uppercase tracking-wider text-cortelo-mint font-semibold">
            Engineering Disciplines &bull; 01
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-cortelo-text mt-2 uppercase">
            Architectures Built to Deploy.
          </h2>
        </div>
        <p className="text-sm text-cortelo-muted max-w-md font-light leading-relaxed">
          From custom CRM architecture and multi-agent swarms to self-hosted n8n automation and high-ticket growth funnels — inspect verified scopes and deliverables for each discipline.
        </p>
      </div>

      {/* Tabs Pill Navigation */}
      <div className="flex overflow-x-auto gap-2 p-1.5 rounded-full border border-cortelo-border glass-panel scrollbar-none">
        {AGENCY_SERVICES.map((d, index) => {
          const isActive = activeTab === index;
          const TabIcon = getServiceIcon(d.id);
          return (
            <button
              key={d.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-all whitespace-nowrap ${isActive
                  ? "bg-cortelo-mint text-black shadow-[0_0_20px_rgba(45,212,167,0.3)]"
                  : "text-cortelo-muted hover:text-cortelo-text hover:bg-white/5"
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
      <div className="p-8 md:p-12 rounded-2xl glass-panel relative border border-cortelo-border space-y-8 bg-gradient-to-br from-[#0F131D] to-[#07090E]">

        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 pb-6 border-b border-cortelo-border">
          <div className="space-y-1">
            <span className="text-xs font-mono text-cortelo-mint font-semibold uppercase flex items-center gap-2">
              <Icon className="w-4 h-4" />
              <span>{current.tagline}</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-cortelo-text">
              {current.title}
            </h3>
          </div>
          <div className="text-left md:text-right">
            <div className="text-[10px] font-mono text-cortelo-muted uppercase tracking-wider">
              VERIFIED TARGET &bull; SLA
            </div>
            <div className="text-sm font-mono font-bold text-cortelo-mint mt-0.5">
              {current.sla}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-cortelo-muted max-w-4xl leading-relaxed font-light">
          {current.description}
        </p>

        {/* 2-Column: Deliverables + Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">

          {/* Deliverables Checklist */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cortelo-text font-bold">
              Core Deliverables Handover:
            </h4>
            <ul className="space-y-2">
              {current.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs font-mono text-cortelo-muted">
                  <CheckCircle className="w-4 h-4 text-cortelo-mint shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack & Specs */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cortelo-text font-bold mb-2">
                Standard Production Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                {current.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md text-[11px] font-mono border border-cortelo-border bg-cortelo-surface text-cortelo-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Spec Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {current.specs.map((spec, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-cortelo-surface/80 border border-cortelo-border">
                  <div className="text-[10px] font-mono text-cortelo-muted uppercase">
                    {spec.label}
                  </div>
                  <div className="text-xs font-semibold text-cortelo-text mt-1">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-cortelo-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-cortelo-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cortelo-mint" />
            <span>100% Intellectual Property Handover Upon Delivery</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => openDrawer(`Commission Architectural Inquiry for: ${current.title}`)}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-cortelo-mint text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-[0_0_20px_rgba(45,212,167,0.3)] flex items-center justify-center gap-2"
            >
              <span>Commission {current.title.split(" ")[0]} Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
