import React from "react";
import type { Metadata } from "next";
import { AGENCY_PROJECTS } from "@/lib/agencyData";
import WorkCard from "@/components/WorkCard";
import BookButton from "@/components/BookButton";

export const metadata: Metadata = {
  title: "Work — Cortelo",
  description: "Case studies: CRMs, AI lead scoring, self-hosted automation, IoT safety systems, restaurant SaaS and medical AI built by Cortelo.",
};

export default function WorkPage() {
  const [first, ...rest] = AGENCY_PROJECTS;

  return (
    <div className="relative z-10">
      <section className="pt-40 pb-16">
        <div className="wrap" data-enter>
          <p className="eyebrow mb-6">Work</p>
          <h1 className="display max-w-[960px] text-[44px] sm:text-[64px] lg:text-[80px]">
            Systems we built, <span className="serif-accent text-[var(--accent)]">running</span> in production.
          </h1>
          <p className="lede mt-7 max-w-[600px]">
            CRMs, AI lead scoring, self-hosted automation, an IoT safety system, a restaurant platform and medical AI. Open any
            project to see how it was built.
          </p>
        </div>
      </section>

      <section aria-label="Case studies" className="pb-24">
        <div className="wrap grid grid-cols-1 gap-4 md:grid-cols-2">
          <WorkCard p={first} wide />
          {rest.map((p) => (
            <WorkCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      <section className="pb-28">
        <div className="wrap">
          <div className="flex flex-col gap-6 rounded-[var(--radius-l)] border border-[var(--line)] p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <h2 className="text-[30px] font-medium tracking-[-0.03em]">Your project could be next.</h2>
              <p className="mt-2 max-w-[520px] text-[15px] text-[var(--text-muted)]">A 30-minute call with a founder. You leave with a scope and a price.</p>
            </div>
            <BookButton label="Book a call" className="shrink-0 !min-h-[54px] !px-7" />
          </div>
        </div>
      </section>
    </div>
  );
}
