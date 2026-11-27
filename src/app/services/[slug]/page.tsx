import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { AGENCY_SERVICES } from "@/lib/agencyData";
import { SERVICE_ICONS, SERVICE_SHORT, groupOf } from "@/lib/serviceMeta";
import BookButton from "@/components/BookButton";

const STEPS = [
  { title: "Discovery call", body: "A 30-minute call with a founder to understand the problem, your data and the tools it must work with." },
  { title: "Written scope", body: "Within two working days you get the plan, the stack, the timeline and a fixed price." },
  { title: "Build in the open", body: "Weekly demos on a staging link, with the code in your repository from the first day." },
  { title: "Launch and handover", body: "Deployed to infrastructure you control, with monitoring, documentation and every line of code." },
];

export function generateStaticParams() {
  return AGENCY_SERVICES.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = AGENCY_SERVICES.find((x) => x.id === slug);
  if (!s) return {};
  return {
    title: `${s.title} — Cortelo`,
    description: `${s.tagline}. ${s.description.slice(0, 140)}`,
    alternates: { canonical: `/services/${s.id}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = AGENCY_SERVICES.find((x) => x.id === slug);
  if (!s) notFound();

  const Icon = SERVICE_ICONS[s.id];
  const group = groupOf(s.id);
  const related = AGENCY_SERVICES.filter((x) => group?.ids.includes(x.id) && x.id !== s.id).slice(0, 3);
  const scope = `Inquiry regarding: ${s.title}`;

  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="pt-36 pb-20">
        <div className="wrap" data-enter>
          <Link href="/services" className="link-draw mb-10 text-[14px] !text-[var(--text-muted)]">
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
          <div className="flex items-center gap-4">
            {Icon && (
              <span className="flex h-14 w-14 items-center justify-center rounded-[var(--radius-m)] border border-[var(--line)] bg-[var(--surface2)] text-[var(--accent)]">
                <Icon className="h-6 w-6" />
              </span>
            )}
            <p className="eyebrow">{group?.title ?? "Service"}</p>
          </div>
          <h1 className="display mt-8 max-w-[960px] text-[34px] sm:text-[48px] lg:text-[62px]">{s.title}</h1>
          <p className="lede mt-6 max-w-[640px] !text-[19px]">{s.tagline}.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <BookButton scope={scope} label="Book a call about this" className="!min-h-[54px] !px-7" />
            <a href="#scope" className="btn btn-ghost !min-h-[54px] !px-7">
              What you get
            </a>
          </div>
        </div>
      </section>

      {/* Overview and facts */}
      <section className="pb-20">
        <div className="wrap grid gap-10 border-t border-[var(--line)] pt-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-[28px] font-medium tracking-[-0.03em]">What it does for you</h2>
            <p className="mt-5 max-w-[640px] text-[17px] leading-relaxed text-[var(--text-muted)]">{s.description}</p>
          </div>
          <dl className="card divide-y divide-[var(--line)] self-start">
            {s.specs.map((sp) => (
              <div key={sp.label} className="flex items-baseline justify-between gap-6 px-6 py-5">
                <dt className="text-[14px] text-[var(--text-faint)]">{sp.label}</dt>
                <dd className="text-right text-[15px] text-[var(--text)]">{sp.value}</dd>
              </div>
            ))}
            <div className="px-6 py-5">
              <dt className="text-[14px] text-[var(--text-faint)]">Our commitment</dt>
              <dd className="mt-1 text-[15px] text-[var(--accent)]">{s.sla}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Deliverables and stack */}
      <section id="scope" className="scroll-mt-24 pb-24">
        <div className="wrap grid gap-6 lg:grid-cols-2">
          <div className="card p-8 md:p-10">
            <h2 className="text-[24px] font-medium tracking-[-0.025em]">What you get</h2>
            <ul className="mt-6 space-y-4">
              {s.deliverables.map((d) => (
                <li key={d} className="flex gap-4 text-[16px] text-[var(--text-muted)]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {d}
                </li>
              ))}
              <li className="flex gap-4 text-[16px] text-[var(--text-muted)]">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Check className="h-3.5 w-3.5" />
                </span>
                Full source code, documentation and handover
              </li>
            </ul>
          </div>
          <div className="card p-8 md:p-10">
            <h2 className="text-[24px] font-medium tracking-[-0.025em]">Built with</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {s.techStack.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-[var(--line-strong)] px-4 py-2 font-mono text-[13px] text-[var(--text-muted)] transition-[border-color,color] duration-300 hover:border-[var(--accent)] hover:text-[var(--text)]"
                >
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[15px] leading-relaxed text-[var(--text-faint)]">
              The stack follows your project: we pick what fits your data, your team and your hosting, and explain why.
            </p>
          </div>
        </div>
      </section>

      {/* How it runs */}
      <section className="pb-24">
        <div className="wrap">
          <h2 className="h2 mb-12">
            How a project runs. <span className="soft">Four steps, no surprises.</span>
          </h2>
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((st, i) => (
              <li key={st.title} className="card p-7">
                <span className="font-mono text-[13px] text-[var(--accent)]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-[19px] font-medium">{st.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-muted)]">{st.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="pb-24">
          <div className="wrap">
            <div className="mb-8 flex items-end justify-between gap-6 border-t border-[var(--line)] pt-12">
              <h2 className="text-[26px] font-medium tracking-[-0.03em]">Often paired with</h2>
              <Link href="/services" className="link-draw shrink-0 text-[15px]">
                All services <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {related.map((r) => {
                const RIcon = SERVICE_ICONS[r.id];
                return (
                  <Link key={r.id} href={`/services/${r.id}`} className="card card-link group p-7">
                    {RIcon && <RIcon className="h-5 w-5 text-[var(--accent)]" />}
                    <h3 className="mt-6 text-[19px] font-medium transition-colors group-hover:text-[var(--accent)]">
                      {SERVICE_SHORT[r.id] ?? r.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-muted)]">{r.tagline}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="pb-28">
        <div className="wrap">
          <div className="flex flex-col gap-6 rounded-[var(--radius-l)] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(95,212,192,0.08),transparent_60%)] p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <h2 className="text-[30px] font-medium tracking-[-0.03em]">Ready to scope it?</h2>
              <p className="mt-2 max-w-[520px] text-[15px] text-[var(--text-muted)]">
                Tell us when suits you. You will leave the call with a plan and a price.
              </p>
            </div>
            <BookButton scope={scope} label="Request a call" className="shrink-0 !min-h-[54px] !px-7" />
          </div>
        </div>
      </section>
    </div>
  );
}
