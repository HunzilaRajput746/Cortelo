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
    <section id="services" className="py-24 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-cortelo-border">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="px-3.5 py-1 rounded-full border border-cortelo-mint/40 bg-cortelo-mint/10 text-xs font-mono text-cortelo-mint font-semibold uppercase">
          Services
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-cortelo-text tracking-tight">
          How can we help{" "}
          <span className="text-cortelo-mint italic">you</span>?
        </h2>
        <p className="text-sm text-cortelo-muted leading-relaxed font-light">
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
              className="glass-panel rounded-3xl p-8 border border-cortelo-border hover:border-cortelo-mint transition-all flex flex-col justify-between bg-[#0F131D]/80 group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-cortelo-mint/10 border border-cortelo-mint/30 flex items-center justify-center text-cortelo-mint group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-cortelo-muted font-bold">
                    {s.num}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold uppercase text-cortelo-text mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-cortelo-muted leading-relaxed font-light">
                    {s.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-2 space-y-2 border-t border-cortelo-border/60">
                  {s.deliverables.slice(0, 3).map((d, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-mono text-cortelo-text">
                      <CheckCircle className="w-3.5 h-3.5 text-cortelo-mint shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-cortelo-border/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-cortelo-mint font-semibold">
                  {s.sla.split("•")[0]}
                </span>
                <button
                  onClick={() => openDrawer(`Inquiry regarding: ${s.title}`)}
                  className="w-8 h-8 rounded-full border border-cortelo-border bg-cortelo-surface flex items-center justify-center text-cortelo-muted hover:border-cortelo-mint hover:text-cortelo-mint group-hover:translate-x-1 transition-all"
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

