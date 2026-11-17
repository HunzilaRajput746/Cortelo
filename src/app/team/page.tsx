"use client";

import Image from "next/image";
import { ArrowRight, ExternalLink, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AGENCY_TEAM_ROSTER, FOUNDER_DATA, type TeamMember } from "@/lib/agencyData";
import { FounderCard, MemberCard, FOUNDER_IDS, realLink } from "@/components/TeamShowcase";
import { useAgencyShell } from "@/components/ClientShell";
import VideoGround from "@/components/VideoGround";

export default function TeamPage() {
  const { openFounderModal, openDrawer } = useAgencyShell();
  const [selected, setSelected] = useState<TeamMember | null>(null);

  const founders = AGENCY_TEAM_ROSTER.filter((m) => FOUNDER_IDS.includes(m.id));
  const team = AGENCY_TEAM_ROSTER.filter((m) => !FOUNDER_IDS.includes(m.id));

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-40 pb-20">
        {/* client slot: /assets/videos/cortelo/founders.mp4 */}
        <VideoGround slot="founders" className="absolute inset-0 -z-20" opacity={0.3} lazy={false} />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,9,10,0.5)_0%,var(--bg)_100%)]" />
        <div className="wrap" data-enter>
          <p className="eyebrow mb-6">The team</p>
          <h1 className="display max-w-[900px] text-[44px] sm:text-[64px] lg:text-[80px]">
            The people who build <span className="serif-accent text-[var(--accent)]">Cortelo</span> systems.
          </h1>
          <p className="lede mt-7 max-w-[560px]">
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
              <FounderCard
                key={f.id}
                member={f}
                onOpen={f.id === "hunzila-nisar" ? openFounderModal : () => setSelected(f)}
              />
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
            <p className="text-[15px] text-[var(--text-muted)] md:max-w-[380px]">Select a profile to read what each person owns on a project.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {team.map((m, i) => (
              <MemberCard key={m.id} member={m} index={i + 3} onOpen={() => setSelected(m)} />
            ))}
          </div>

          <div className="mt-24 flex flex-col gap-6 rounded-[var(--radius-l)] border border-[var(--line)] p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <h2 className="text-[26px] font-medium tracking-[-0.03em]">Work with the founders directly.</h2>
              <p className="mt-2 text-[15px] text-[var(--text-muted)]">Every first call is with Hunzila or Mahreen, never a sales rep.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button onClick={() => openDrawer("Call with the founders")} className="btn btn-primary">
                Book a call <ArrowRight className="h-4 w-4" />
              </button>
              <a href={`mailto:${FOUNDER_DATA.agencyEmail}`} className="btn btn-ghost">
                Email the studio
              </a>
            </div>
          </div>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center" role="dialog" aria-modal="true" aria-labelledby="member-h">
          <button className="absolute inset-0 cursor-default" onClick={() => setSelected(null)} aria-label="Close profile" />
          <article className="animate-member-in relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[var(--radius-l)] border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-10">
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-muted)] transition-colors hover:bg-white/5 hover:text-[var(--text)]"
              aria-label="Close profile"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex flex-col gap-7 sm:flex-row">
              <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-[var(--radius-m)] bg-[var(--surface2)] sm:w-44">
                <Image src={selected.avatar} alt={selected.name} fill sizes="176px" className="object-cover object-top" />
              </div>
              <div className="pt-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">{selected.badge}</p>
                <h2 id="member-h" className="mt-3 text-[30px] font-medium tracking-[-0.03em]">{selected.name}</h2>
                <p className="mt-1 text-[15px] text-[var(--text-muted)]">{selected.role}</p>
                <p className="mt-5 text-[15px] leading-relaxed text-[var(--text-muted)]">{selected.bio}</p>
              </div>
            </div>
            <div className="mt-8 border-t border-[var(--line)] pt-6">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--text-faint)]">Specialties</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {selected.specialties.map((s) => (
                  <li key={s} className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[13px] text-[var(--text-muted)]">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            {(selected.portfolioUrl || realLink(selected.linkedinUrl)) && (
              <div className="mt-6 flex flex-wrap gap-6 border-t border-[var(--line)] pt-6">
                {selected.portfolioUrl && (
                  <a href={selected.portfolioUrl} target="_blank" rel="noopener noreferrer" className="link-draw text-[14px]">
                    Portfolio <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                {realLink(selected.linkedinUrl) && (
                  <a href={realLink(selected.linkedinUrl)} target="_blank" rel="noopener noreferrer" className="link-draw text-[14px]">
                    LinkedIn <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            )}
          </article>
        </div>
      )}
    </div>
  );
}
