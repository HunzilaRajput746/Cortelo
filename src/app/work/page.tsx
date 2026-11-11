import React from "react";
import Link from "next/link";
import WorkCarousel from "@/components/WorkCarousel";

export const metadata = {
  title: "Selected Work — Cortelo",
  description: "Verified case studies and production outcomes delivered by Cortelo.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-36 pb-24 px-6 relative z-10">
      <div className="max-w-[1360px] mx-auto space-y-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono text-cortelo-mint tracking-widest uppercase">
            02 &bull; Case Studies
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-cortelo-text">
            Measured Outcomes in Production.
          </h1>
          <p className="text-base text-cortelo-muted leading-relaxed font-light">
            We clearly label our work: client-commissioned engagements versus internal founder projects. Real latency metrics, verified throughput, zero vaporware.
          </p>
        </div>

        <WorkCarousel />

        <div className="pt-12 border-t border-cortelo-border text-center">
          <p className="text-xs font-mono text-cortelo-muted mb-4">
            Have a specialized domain or proprietary dataset?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-full bg-cortelo-mint text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_20px_rgba(45,212,167,0.3)]"
          >
            Schedule Briefing with Founders
          </Link>
        </div>
      </div>
    </main>
  );
}
