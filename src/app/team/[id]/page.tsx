import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { AGENCY_TEAM_ROSTER, FOUNDER_DATA, FOUNDER_IDS } from "@/lib/agencyData";
import BookButton from "@/components/BookButton";

const realLink = (url?: string) => (url && !/^https?:\/\/(www\.)?linkedin\.com\/?$/.test(url) ? url : undefined);

/** Longer stories for the two founders; everyone else uses their roster bio. */
const STORY: Record<string, { intro: string; points: string[]; education?: string }> = {
  "hunzila-nisar": {
    intro:
      "Hunzila leads engineering at Cortelo. He has shipped live commercial CRMs, a self-hosted n8n automation engine and AI systems running on private VPS infrastructure, and takes part in every client project from the first call to the handover.",
    points: FOUNDER_DATA.distinctions,
    education: FOUNDER_DATA.education,
  },
  "mahreen-hashir": {
    intro:
      "Mahreen runs systems, reliability and security at Cortelo. She owns verification guardrails, model evaluation and the security review every deployment passes before it reaches a client.",
    points: [
      "Schema validation with Zod and Pydantic on every AI output",
      "Continuous model evaluation and drift checks",
      "OWASP ASVS Level 2 security reviews before launch",
      "Handover governance so clients own all code and IP",
    ],
  },
};

export function generateStaticParams() {
  return AGENCY_TEAM_ROSTER.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const m = AGENCY_TEAM_ROSTER.find((x) => x.id === id);
  if (!m) return {};
  return { title: `${m.name}, ${m.role} — Cortelo`, description: m.bio };
}

export default async function MemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const m = AGENCY_TEAM_ROSTER.find((x) => x.id === id);
  if (!m) notFound();

  const isFounder = FOUNDER_IDS.includes(m.id);
  const story = STORY[m.id];
  const linkedin = realLink(m.linkedinUrl);
  const others = AGENCY_TEAM_ROSTER.filter((x) => x.id !== m.id).slice(0, 4);

  return (
    <div className="relative z-10">
      <section className="pt-36 pb-20">
        <div className="wrap">
          <Link href="/team" className="link-draw mb-10 text-[14px] !text-[var(--text-muted)]">
            <ArrowLeft className="h-4 w-4" /> The team
          </Link>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className={isFounder ? "founder-frame" : ""}>
              <div className={`media relative aspect-[4/5] overflow-hidden rounded-[var(--radius-l)] bg-[#05080a] ${isFounder ? "founder-inner" : "border border-[var(--line)]"}`}>
                <Image src={m.avatar} alt={`${m.name}, ${m.role}`} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-top" />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,9,10,0.6)_0%,transparent_40%)]" />
                <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-[rgba(95,212,192,0.45)] bg-[rgba(7,9,10,0.6)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)] backdrop-blur-md">
                  {isFounder && <span className="live-dot" />} {m.badge}
                </span>
              </div>
            </div>

            <div data-enter>
              <p className="eyebrow">{isFounder ? m.title : "Cortelo team"}</p>
              <h1 className="display mt-6 text-[34px] sm:text-[48px] lg:text-[60px]">{m.name}</h1>
              <p className="mt-3 text-[19px] text-[var(--accent)]">{m.role}</p>
              <p className="mt-8 max-w-[600px] text-[17px] leading-relaxed text-[var(--text-muted)]">{story?.intro ?? m.bio}</p>
              {story && <p className="mt-4 max-w-[600px] text-[17px] leading-relaxed text-[var(--text-muted)]">{m.bio}</p>}

              {story?.education && (
                <p className="mt-6 text-[15px] text-[var(--text-faint)]">
                  <span className="text-[var(--text-muted)]">Education:</span> {story.education}
                </p>
              )}

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <BookButton scope={`Call with ${m.name}`} label={isFounder ? `Book a call with ${m.name.split(" ")[0]}` : "Book a call with the team"} />
                {m.portfolioUrl && (
                  <a href={m.portfolioUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                    Portfolio <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {linkedin && (
                  <a href={linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                    LinkedIn <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="wrap grid gap-6 lg:grid-cols-2">
          <div className="card p-8 md:p-10">
            <h2 className="text-[24px] font-medium tracking-[-0.025em]">Works on</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {m.specialties.map((s) => (
                <li key={s} className="rounded-full border border-[var(--line-strong)] px-4 py-2 font-mono text-[13px] text-[var(--text-muted)]">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          {story && (
            <div className="card p-8 md:p-10">
              <h2 className="text-[24px] font-medium tracking-[-0.025em]">{m.id === "hunzila-nisar" ? "Track record" : "Owns at Cortelo"}</h2>
              <ul className="mt-6 space-y-4">
                {story.points.map((p) => (
                  <li key={p} className="flex gap-4 text-[16px] text-[var(--text-muted)]">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="pb-28">
        <div className="wrap">
          <div className="mb-8 flex items-end justify-between gap-6 border-t border-[var(--line)] pt-12">
            <h2 className="text-[26px] font-medium tracking-[-0.03em]">Works alongside</h2>
            <Link href="/team" className="link-draw shrink-0 text-[15px]">
              Whole team <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {others.map((o) => (
              <Link key={o.id} href={`/team/${o.id}`} className="group block">
                <div className="media relative aspect-[4/5] overflow-hidden rounded-[var(--radius-l)] border border-[var(--line)] bg-[var(--surface2)] transition-[border-color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:border-[rgba(95,212,192,0.42)]">
                  <Image
                    src={o.avatar}
                    alt={o.name}
                    fill
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="object-cover object-top grayscale-[0.85] transition-[transform,filter] duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                </div>
                <h3 className="mt-4 text-[16px] font-medium transition-colors group-hover:text-[var(--accent)]">{o.name}</h3>
                <p className="mt-1 text-[13px] text-[var(--text-faint)]">{o.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
