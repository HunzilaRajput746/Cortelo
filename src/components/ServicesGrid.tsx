"use client";

import React from "react";
import { AGENCY_SERVICES } from "@/lib/agencyData";
import { Server, Network, Terminal, Layout, Cpu, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { useAgencyShell } from "./ClientShell";

export default function ServicesGrid() {
  const { openDrawer } = useAgencyShell();

  const getIcon = (id: string) => {
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

  return (
    <section id="services" className="py-24 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-white/10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-white/90 font-semibold uppercase tracking-wider inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4533]" />
          Services
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#FCFCFA] tracking-tight">
          How can we help{" "}
          <span className="font-serif italic font-normal text-white lowercase">you</span>?
        </h2>
        <p className="text-sm text-white/60 leading-relaxed font-light">
          From custom CRM engineering to multi-agent AI swarms, cloud VPS automation, and full-stack software, we&apos;ve got you covered on every front.
        </p>
      </div>

      {/* 6 Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AGENCY_SERVICES.map((s) => {
          const Icon = getIcon(s.id);
          return (
            <div
              key={s.id}
              className="rounded-3xl p-8 border border-white/10 hover:border-[#FF4533]/50 transition-all duration-300 flex flex-col justify-between bg-[#0D0D0D] group shadow-sm hover:shadow-[0_0_30px_rgba(255,69,51,0.12)]"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF4533]/10 border border-[#FF4533]/30 flex items-center justify-center text-[#FF4533] group-hover:scale-110 group-hover:bg-[#FF4533] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-white/40 font-bold">
                    {s.num}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold uppercase text-[#FCFCFA] mb-2 group-hover:text-white transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed font-light">
                    {s.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-2 space-y-2 border-t border-white/10">
                  {s.deliverables.slice(0, 3).map((d, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-mono text-white/80">
                      <CheckCircle className="w-3.5 h-3.5 text-[#FF4533] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#FF4533] font-semibold">
                  {s.sla.split("•")[0]}
                </span>
                <button
                  onClick={() => openDrawer(`Inquiry regarding: ${s.title}`)}
                  className="w-8 h-8 rounded-full border border-white/10 bg-[#141414] flex items-center justify-center text-white/70 hover:bg-[#FF4533] hover:text-white hover:border-[#FF4533] group-hover:translate-x-1 transition-all cursor-pointer"
                  aria-label={`Inquire about ${s.title}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}

