import React from "react";
import Link from "next/link";
import ServiceTabs from "@/components/ServiceTabs";

export const metadata = {
  title: "Systems & Services — Cortelo",
  description: "Enterprise AI automation, custom machine learning, generative AI, full-stack software, and MLOps pipelines.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-36 pb-24 px-6 relative z-10 bg-[#000000]">
      <div className="max-w-[1360px] mx-auto space-y-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-white/90 font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4533]" />
            <span>01 &bull; Core Disciplines</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#FCFCFA]">
            Production AI Architecture &amp;{" "}
            <span className="font-serif italic font-normal text-white lowercase">Systems</span>.
          </h1>
          <p className="text-base text-white/60 leading-relaxed font-light">
            Every engagement is led directly by senior architects Hunzila Nisar and Mahreen Hashir. We deliver fixed-scope sprints with measurable SLAs and 100% intellectual property transfer.
          </p>
        </div>

        <ServiceTabs />

        <div className="p-12 rounded-3xl border border-white/10 bg-[#0D0D0D] text-center space-y-6 shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-bold uppercase text-[#FCFCFA]">
            Need a Custom Architecture Audit?
          </h2>
          <p className="text-sm text-white/60 max-w-xl mx-auto font-light">
            We evaluate your existing infrastructure, model selection, latency bottlenecks, and training datasets before committing a single line of code.
          </p>
          <div>
            <Link
              href="/contact"
              className="btn-conversion-primary inline-block px-8 py-3.5 rounded-full bg-[#FF4533] hover:bg-[#FF220E] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,69,51,0.35)]"
            >
              Request Architecture Audit
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
