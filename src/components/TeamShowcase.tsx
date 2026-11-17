"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe } from "lucide-react";
import { AGENCY_TEAM_ROSTER, type TeamMember } from "@/lib/agencyData";
import VideoGround from "./VideoGround";
import { pointerGlow } from "@/lib/usePointerGlow";

export { FOUNDER_IDS } from "@/lib/agencyData";
import { FOUNDER_IDS } from "@/lib/agencyData";

/** A LinkedIn link only counts when it points at a real profile. */
export const realLink = (url?: string) => (url && !/^https?:\/\/(www\.)?linkedin\.com\/?$/.test(url) ? url : undefined);

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

/** One founder, shown large inside a frame whose light runs round the border. */
export function FounderCard({ member }: { member: TeamMember }) {
  const linkedin = realLink(member.linkedinUrl);
  return (
    <article className="founder-frame group h-full" onPointerMove={pointerGlow}>
      <div className="founder-inner card-glow relative grid h-full overflow-hidden sm:grid-cols-[0.95fr_1fr]">
        <div className="media relative aspect-[4/5] sm:aspect-auto sm:min-h-[460px] bg-[#05080a]">
          <Image
            src={member.avatar}
            alt={`${member.name}, ${member.title}`}
            fill
            sizes="(min-width: 1024px) 26vw, (min-width: 640px) 45vw, 100vw"
            className="object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,9,10,0.75)_0%,transparent_45%)] sm:bg-[linear-gradient(270deg,var(--surface)_0%,transparent_35%)]" />
          <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-[rgba(95,212,192,0.45)] bg-[rgba(7,9,10,0.6)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)] backdrop-blur-md">
            <span className="live-dot" /> {member.title}
          </span>
        </div>

        <div className="flex flex-col p-7 sm:p-8">
          <h3 className="text-[30px] sm:text-[34px] font-medium leading-[1.05] tracking-[-0.035em] text-[var(--text)]">{member.name}</h3>
          <p className="mt-2 text-[15px] text-[var(--accent)]">{member.role}</p>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--text-muted)]">{member.bio}</p>

          <ul className="mt-6 flex flex-wrap gap-1.5">
            {member.specialties.slice(0, 5).map((s) => (
              <li key={s} className="rounded-full border border-[var(--line)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-faint)]">
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex items-center gap-2 pt-8">
            <Link href={`/team/${member.id}`} className="btn btn-primary !min-h-[44px] !px-4">
              Read the profile <ArrowUpRight className="h-4 w-4" />
            </Link>
            {member.portfolioUrl && (
              <a
                href={member.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} portfolio`}
                className="btn btn-ghost !min-h-[44px] !w-11 !px-0"
              >
                <Globe className="h-4 w-4" />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on LinkedIn`}
                className="btn btn-ghost !min-h-[44px] !w-11 !px-0"
              >
                <LinkedInIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

/** A team member: portrait in grey that takes colour on hover. */
export function MemberCard({
  member,
  index,
  onOpen,
  href,
}: {
  member: TeamMember;
  index: number;
  onOpen?: () => void;
  href?: string;
}) {
  const body = (
    <>
      <div className="media relative aspect-[4/5] overflow-hidden rounded-[var(--radius-l)] border border-[var(--line)] bg-[var(--surface2)] transition-[border-color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:border-[rgba(95,212,192,0.42)]">
        <Image
          src={member.avatar}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover object-top grayscale-[0.85] transition-[transform,filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,9,10,0.7)_0%,transparent_40%)]" />
        <span className="absolute bottom-4 left-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/75">{member.badge}</span>
        <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <div className="flex items-start justify-between gap-4 pt-4">
        <div>
          <h4 className="text-[17px] font-medium text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">{member.name}</h4>
          <p className="mt-1 text-[13px] text-[var(--text-faint)]">{member.role}</p>
        </div>
        <span className="pt-1 font-mono text-[12px] text-[var(--text-faint)]">{String(index).padStart(2, "0")}</span>
      </div>
    </>
  );
  if (href) {
    return (
      <Link href={href} className="group block text-left">
        {body}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onOpen} className="group block w-full text-left">
      {body}
    </button>
  );
}

export default function TeamShowcase() {
  const founders = AGENCY_TEAM_ROSTER.filter((m) => FOUNDER_IDS.includes(m.id));
  const team = AGENCY_TEAM_ROSTER.filter((m) => !FOUNDER_IDS.includes(m.id)).slice(0, 4);

  return (
    <section id="team" aria-labelledby="team-h" className="relative isolate overflow-hidden py-24 md:py-32">
      {/* client slot: /assets/videos/cortelo/founders.mp4 */}
      <VideoGround slot="founders" className="absolute inset-x-0 top-0 h-[70%] -z-20" opacity={0.25} />
      <div className="absolute inset-x-0 top-0 h-[70%] -z-10 bg-[linear-gradient(180deg,var(--bg)_0%,rgba(7,9,10,0.6)_40%,var(--bg)_100%)]" />

      <div className="wrap">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-6">Founders</p>
            <h2 id="team-h" className="h2 max-w-[720px]">
              Two founders on every project. <span className="soft">From the first call to the handover.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {founders.map((f) => (
            <FounderCard key={f.id} member={f} />
          ))}
        </div>

        <div className="mt-20 flex items-end justify-between gap-6 border-t border-[var(--line)] pt-10">
          <h3 className="text-[24px] font-medium tracking-[-0.025em]">The team behind the builds</h3>
          <Link href="/team" className="link-draw shrink-0 text-[15px]">
            Meet all {AGENCY_TEAM_ROSTER.length} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {team.map((m, i) => (
            <MemberCard key={m.id} member={m} index={i + 3} href={`/team/${m.id}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
