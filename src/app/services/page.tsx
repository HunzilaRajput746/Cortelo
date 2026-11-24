import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceGroups } from "@/components/ServicesGrid";
import { AGENCY_SERVICES } from "@/lib/agencyData";

export const metadata = {
  title: "Services — Cortelo",
  description:
    "AI voice agents, RAG assistants, private LLMs, MCP integrations, custom ML and deep learning models, face recognition, document AI, CRMs, web and mobile apps, automation and data dashboards.",
};

export default function ServicesPage() {
  return (
    <div className="relative z-10">
      <section className="pt-40 pb-16">
        <div className="wrap" data-enter>
          <p className="eyebrow mb-6">Services</p>
          <h1 className="display max-w-[920px] text-[36px] sm:text-[52px] lg:text-[68px]">
            {AGENCY_SERVICES.length} services, <span className="serif-accent text-[var(--accent)]">one studio</span> that ships them.
          </h1>
          <p className="lede mt-7 max-w-[580px]">
            From AI voice agents and face recognition to custom models, private LLMs and the apps around them. Select any
            service to start a conversation about it.
          </p>
        </div>
      </section>

      <section aria-label="Service catalogue" className="pb-24">
        <div className="wrap">
          <ServiceGroups detailed />
        </div>
      </section>

      <section aria-labelledby="audit-h" className="pb-28">
        <div className="wrap">
          <div className="flex flex-col gap-6 rounded-[var(--radius-l)] border border-[var(--line)] p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <h2 id="audit-h" className="text-[28px] font-medium tracking-[-0.03em]">Not sure which one you need?</h2>
              <p className="mt-2 max-w-[520px] text-[15px] text-[var(--text-muted)]">
                Tell us the problem. We will tell you which of these fits, what it costs and how long it takes.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary shrink-0">
              Describe your problem <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
