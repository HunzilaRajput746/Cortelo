import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { AGENCY_PROJECTS } from "@/lib/agencyData";
import BookButton from "@/components/BookButton";
import WorkCard from "@/components/WorkCard";

export function generateStaticParams() {
  return AGENCY_PROJECTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const p = AGENCY_PROJECTS.find((x) => x.id === id);
  if (!p) return {};
  return {
    title: `${p.title} — Cortelo case study`,
    description: p.description.slice(0, 160),
    alternates: { canonical: `/work/${p.id}` },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const index = AGENCY_PROJECTS.findIndex((x) => x.id === id);
  if (index < 0) notFound();
  const p = AGENCY_PROJECTS[index];
  const next = AGENCY_PROJECTS[(index + 1) % AGENCY_PROJECTS.length];
  const more = AGENCY_PROJECTS.filter((x) => x.id !== p.id && x.id !== next.id).slice(0, 2);

  return (
    <div className="relative z-10">
      <section className="pt-36 pb-14">
        <div className="wrap" data-enter>
          <Link href="/work" className="link-draw mb-10 text-[14px] !text-[var(--text-muted)]">
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>
          <p className="eyebrow">{p.category}</p>
          <h1 className="display mt-6 max-w-[1000px] text-[34px] sm:text-[48px] lg:text-[60px]">{p.title}</h1>
          <p className="lede mt-6 max-w-[680px] !text-[19px]">{p.subtitle}</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="wrap">
          <div className="media relative aspect-[16/9] overflow-hidden rounded-[var(--radius-l)] border border-[var(--line)] bg-[var(--surface2)]">
            <Image src={p.previewImage} alt={p.title} fill priority sizes="(min-width: 1320px) 1240px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="wrap grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [p.metrics.primaryValue, p.metrics.primaryLabel, true],
            [p.metrics.secondaryValue, p.metrics.secondaryLabel, false],
            [p.client, "Client", false],
            [p.status, "Status", false],
          ].map(([v, l, big]) => (
            <div key={String(l)} className="card p-6">
              <p className={`font-medium tracking-[-0.03em] ${big ? "text-[34px] text-[var(--accent)]" : "text-[20px] text-[var(--text)]"}`}>{v}</p>
              <p className="mt-2 text-[13px] text-[var(--text-faint)]">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-[28px] font-medium tracking-[-0.03em]">The build</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-[var(--text-muted)]">{p.description}</p>

            <h2 className="mt-14 text-[28px] font-medium tracking-[-0.03em]">What changed</h2>
            <ul className="mt-6 space-y-4">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-4 text-[16px] text-[var(--text-muted)]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <aside className="card self-start p-8">
            <h2 className="text-[20px] font-medium">Architecture</h2>
            <ol className="mt-6 space-y-0">
              {p.architecture.map((a, i) => (
                <li key={a} className="relative flex gap-4 pb-6 last:pb-0">
                  {i < p.architecture.length - 1 && <span className="absolute left-[11px] top-7 bottom-0 w-px bg-[var(--line-strong)]" />}
                  <span className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--accent)] font-mono text-[11px] text-[var(--accent)]">
                    {i + 1}
                  </span>
                  <span className="text-[15px] text-[var(--text-muted)]">{a}</span>
                </li>
              ))}
            </ol>
            {p.liveUrl && (
              <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-8 w-full">
                See it live <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </aside>
        </div>
      </section>

      <section className="pb-20">
        <div className="wrap">
          <div className="flex flex-col gap-6 rounded-[var(--radius-l)] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(95,212,192,0.08),transparent_60%)] p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <h2 className="text-[30px] font-medium tracking-[-0.03em]">Want something like this?</h2>
              <p className="mt-2 max-w-[520px] text-[15px] text-[var(--text-muted)]">Tell us what your version needs to do. We will scope it on the call.</p>
            </div>
            <BookButton scope={`Inquiry regarding a system similar to: ${p.title}`} label="Book a call" className="shrink-0 !min-h-[54px] !px-7" />
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="wrap">
          <div className="mb-8 flex items-end justify-between gap-6 border-t border-[var(--line)] pt-12">
            <h2 className="text-[26px] font-medium tracking-[-0.03em]">Next case study</h2>
            <Link href="/work" className="link-draw shrink-0 text-[15px]">
              All work <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <WorkCard p={next} wide />
            {more.map((m) => (
              <WorkCard key={m.id} p={m} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
