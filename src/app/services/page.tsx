import React from "react";
import Link from "next/link";
import ServiceTabs from "@/components/ServiceTabs";

export const metadata = {
  title: "Systems & Services — Cortelo",
  description: "Enterprise AI automation, custom machine learning, generative AI, full-stack software, and MLOps pipelines.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-36 pb-24 px-6 relative z-10">
      <div className="max-w-[1360px] mx-auto space-y-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono text-cortelo-mint tracking-widest uppercase">
            01 &bull; Core Disciplines
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-cortelo-text">
            Production AI Architecture & Systems.
          </h1>
          <p className="text-base text-cortelo-muted leading-relaxed font-light">
            Every engagement is led directly by senior architects Hunzila Nisar and Mahreen Hashir. We deliver fixed-scope sprints with measurable SLAs and 100% intellectual property transfer.
          </p>
        </div>

        <ServiceTabs />

        <div className="p-12 rounded-2xl glass-panel border border-cortelo-border text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold uppercase text-cortelo-text">
            Need a Custom Architecture Audit?
          </h2>
          <p className="text-sm text-cortelo-muted max-w-xl mx-auto font-light">
            We evaluate your existing infrastructure, model selection, latency bottlenecks, and training datasets before committing a single line of code.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-full bg-cortelo-mint text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_20px_rgba(45,212,167,0.3)]"
            >
              Request Architecture Audit
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

