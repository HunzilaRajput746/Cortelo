import React from "react";
import type { Metadata } from "next";
import { AGENCY_TEAM_ROSTER, FOUNDER_DATA, FOUNDER_IDS } from "@/lib/agencyData";
import { FounderCard, MemberCard } from "@/components/TeamShowcase";
import BookButton from "@/components/BookButton";
import VideoGround from "@/components/VideoGround";

export const metadata: Metadata = {
  title: "Team — Cortelo (Hunzila Nisar / Hunzila Rajput & Mahreen Hashir)",
  description:
    "Meet the founders and engineering team behind Cortelo, led by Hunzila Nisar (Hunzila Rajput, devhunzila) and Mahreen Hashir.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {

  const founders = AGENCY_TEAM_ROSTER.filter((m) => FOUNDER_IDS.includes(m.id));
  const team = AGENCY_TEAM_ROSTER.filter((m) => !FOUNDER_IDS.includes(m.id));


  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-28 pb-12">
        {/* client slot: /assets/videos/cortelo/founders.mp4 */}
        <VideoGround slot="founders" className="absolute inset-0 -z-20" opacity={0.3} lazy={false} />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,9,10,0.5)_0%,var(--bg)_100%)]" />
        <div className="wrap" data-enter>
          <p className="eyebrow mb-5">The team</p>
          <h1 className="display max-w-[900px] text-[28px] sm:text-[38px] lg:text-[48px]">
            The people who build <span className="serif-accent text-[var(--accent)]">Cortelo</span> systems.
          </h1>
          <p className="lede mt-4 max-w-[560px]">
            Two founders lead every engagement. {team.length} engineers, designers and strategists build it with them.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section aria-labelledby="founders-h" className="pb-24">
        <div className="wrap">
          <h2 id="founders-h" className="eyebrow mb-8">
            Founders
          </h2>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {founders.map((f) => (
              <FounderCard key={f.id} member={f} />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section aria-labelledby="crew-h" className="pb-28">
        <div className="wrap">
          <div className="mb-10 flex flex-col gap-4 border-t border-[var(--line)] pt-10 md:flex-row md:items-end md:justify-between">
            <h2 id="crew-h" className="h2 !text-[34px] md:!text-[44px]">
              Engineers, designers <span className="soft">and strategists.</span>
            </h2>
            <p className="text-[15px] text-[var(--text-muted)] md:max-w-[380px]">Open a profile to see what each person owns on a project.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {team.map((m, i) => (
              <MemberCard key={m.id} member={m} index={i + 3} href={`/team/${m.id}`} />
            ))}
          </div>

          <div className="mt-24 flex flex-col gap-6 rounded-[var(--radius-l)] border border-[var(--line)] p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <h2 className="text-[26px] font-medium tracking-[-0.03em]">Work with the founders directly.</h2>
              <p className="mt-2 text-[15px] text-[var(--text-muted)]">Every first call is with Hunzila or Mahreen, never a sales rep.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <BookButton scope="Call with the founders" label="Book a call" />
              <a href={`mailto:${FOUNDER_DATA.agencyEmail}`} className="btn btn-ghost">
                Email the studio
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
