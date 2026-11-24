import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AGENCY_PROJECTS, AGENCY_SERVICES, AGENCY_TEAM_ROSTER, FOUNDER_IDS } from "@/lib/agencyData";
import { FounderCard } from "@/components/TeamShowcase";
import BookButton from "@/components/BookButton";
import VideoGround from "@/components/VideoGround";

export const metadata: Metadata = {
  title: "About — Cortelo",
  description:
    "Cortelo is an AI systems and software studio founded by Hunzila Nisar and Mahreen Hashir. We build software clients own outright.",
};

const VALUES = [
  {
    title: "You own everything",
    body: "Code, models, prompts, configs and documentation move to your accounts. No per-seat fees, no lock-in.",
  },
  {
    title: "Founders on every project",
    body: "Hunzila or Mahreen is on your first call and stays on the project until the handover. Nothing is passed to a junior team.",
  },
  {
    title: "Measured, not promised",
    body: "Every AI system ships with an evaluation suite on your real tasks, so quality is a number you can check.",
  },
  {
    title: "Private by default",
    body: "We prefer infrastructure you control: your servers, your cloud, private networks. Your data stays yours.",
  },
];

export default function AboutPage() {
  const founders = AGENCY_TEAM_ROSTER.filter((m) => FOUNDER_IDS.includes(m.id));
  const facts = [
    [String(AGENCY_SERVICES.length), "Services under one roof"],
    [String(AGENCY_PROJECTS.length), "Production systems shipped"],
    [String(AGENCY_TEAM_ROSTER.length), "People on the team"],
    ["100%", "Code and IP handed over"],
  ];

  return (
    <div className="relative z-10">
      <section className="relative isolate overflow-hidden pt-28 pb-14">
        <VideoGround slot="statement" className="absolute inset-0 -z-20" opacity={0.3} lazy={false} />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,9,10,0.5)_0%,var(--bg)_100%)]" />
        <div className="wrap" data-enter>
          <p className="eyebrow mb-5">About</p>
          <h1 className="display max-w-[980px] text-[28px] sm:text-[38px] lg:text-[48px]">
            A studio that builds AI <span className="serif-accent text-[var(--accent)]">you own.</span>
          </h1>
          <p className="lede mt-4 max-w-[620px]">
            Cortelo started with a simple idea: businesses don&apos;t need more AI demos, they need reliable software that works
            on Monday morning and belongs to them. We design it, build it, host it where you choose and hand you every line.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="wrap grid grid-cols-2 gap-4 lg:grid-cols-4">
          {facts.map(([v, l]) => (
            <div key={l} className="card p-6">
              <p className="text-[40px] font-medium tracking-[-0.04em] text-[var(--text)]">{v}</p>
              <p className="mt-1 text-[14px] text-[var(--text-faint)]">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="founders-h" className="pb-24">
        <div className="wrap">
          <h2 id="founders-h" className="h2 mb-12">
            Founded by two engineers. <span className="soft">Still on every project.</span>
          </h2>
          <div className="grid gap-5 lg:grid-cols-2">
            {founders.map((f) => (
              <FounderCard key={f.id} member={f} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="values-h" className="pb-24">
        <div className="wrap">
          <h2 id="values-h" className="h2 mb-12">
            What we hold to.
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <div key={v.title} className="card p-8">
                <span className="font-mono text-[13px] text-[var(--accent)]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-[22px] font-medium tracking-[-0.02em]">{v.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-muted)]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="wrap">
          <div className="flex flex-col gap-6 rounded-[var(--radius-l)] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(95,212,192,0.08),transparent_60%)] p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <h2 className="text-[30px] font-medium tracking-[-0.03em]">Meet the people behind it.</h2>
              <p className="mt-2 max-w-[520px] text-[15px] text-[var(--text-muted)]">
                Or skip ahead and book a call with the founders.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link href="/team" className="btn btn-ghost !min-h-[54px] !px-7">
                The team <ArrowUpRight className="h-4 w-4" />
              </Link>
              <BookButton label="Book a call" className="!min-h-[54px] !px-7" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
