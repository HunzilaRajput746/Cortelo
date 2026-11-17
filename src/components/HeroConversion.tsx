"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AGENCY_TEAM_ROSTER } from "@/lib/agencyData";
import { useAgencyShell } from "./ClientShell";
import VideoGround from "./VideoGround";

const FACTS = [
  { value: "6", label: "Production systems shipped" },
  { value: "1.24M+", label: "Automation runs on our n8n engine" },
  { value: "100%", label: "Code and IP handed to you" },
];

export default function HeroConversion() {
  const { openDrawer } = useAgencyShell();
  const founders = AGENCY_TEAM_ROSTER.slice(0, 2);

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      {/* client slot: /assets/videos/cortelo/hero.mp4 */}
      <VideoGround slot="hero" className="absolute inset-0 -z-20" opacity={0.7} lazy={false} />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,9,10,0.94)_0%,rgba(7,9,10,0.6)_50%,rgba(7,9,10,0.2)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,var(--bg)_0%,transparent_40%)]" />

      <div className="wrap flex flex-1 flex-col justify-center pt-28 pb-10">
        <div data-enter className="max-w-[880px]">
          <p className="eyebrow mb-7">
            <span className="text-[var(--text-muted)]">AI systems and software studio</span>
          </p>
          <h1 className="display text-[44px] sm:text-[64px] lg:text-[88px]">
            AI agents, CRMs and automation{" "}
            <span className="serif-accent text-[var(--accent)]">built for</span> the teams that run on them.
          </h1>
          <p className="lede mt-7 max-w-[560px]">
            Cortelo designs, builds and hosts the software your business depends on, then hands you every line
            of it.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <button onClick={() => openDrawer("15-Min Discovery Call")} className="btn btn-primary !min-h-[54px] !px-7">
              Book a discovery call <ArrowRight className="h-4 w-4" />
            </button>
            <Link href="/#results" className="btn btn-ghost !min-h-[54px] !px-7">
              See the work
            </Link>
          </div>
        </div>
      </div>

      {/* Facts and founders sit on the bottom line of the first screen */}
      <div className="wrap pb-10">
        <div className="enter-fade grid grid-cols-1 gap-6 border-t border-[var(--line)] pt-7 md:grid-cols-[1fr_auto] md:items-end">
          <dl className="grid grid-cols-3 gap-4 sm:gap-10 max-w-[720px]">
            {FACTS.map((f) => (
              <div key={f.label}>
                <dt className="sr-only">{f.label}</dt>
                <dd className="text-[26px] sm:text-[34px] font-medium tracking-[-0.04em] text-[var(--text)]">{f.value}</dd>
                <dd className="mt-1 text-[12px] sm:text-[13px] leading-snug text-[var(--text-faint)]">{f.label}</dd>
              </div>
            ))}
          </dl>

          <Link href="/team" className="group hidden md:flex items-center gap-4 rounded-full border border-[var(--line)] bg-[rgba(13,17,18,0.6)] py-2 pl-2 pr-5 backdrop-blur-md transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[rgba(95,212,192,0.45)]">
            <span className="flex -space-x-3">
              {founders.map((f) => (
                <span key={f.id} className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-[var(--bg)]">
                  <Image src={f.avatar} alt={f.name} fill sizes="44px" className="object-cover object-top" />
                </span>
              ))}
            </span>
            <span className="text-left">
              <span className="block text-[13px] text-[var(--text)]">Led by Hunzila Nisar & Mahreen Hashir</span>
              <span className="block text-[12px] text-[var(--text-faint)] group-hover:text-[var(--accent)] transition-colors">
                Meet the founders →
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
