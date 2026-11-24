import React from "react";
import type { Metadata } from "next";
import { Activity, FileCode, Shield, Terminal } from "lucide-react";
import BookButton from "@/components/BookButton";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "Process — Cortelo",
  description: "How a Cortelo project runs: discovery, build, integration and handover, with fixed scope and weekly demos.",
};

const stages = [
  {
    step: "01",
    title: "Discovery and blueprint",
    duration: "Week 1",
    deliverables: ["Architecture blueprint", "Fixed scope and price", "Model and stack choice"],
    description:
      "We look at your data, your tools and the people who will use the system, then choose between open-weight and hosted models and write down exactly what gets built.",
    icon: Terminal,
  },
  {
    step: "02",
    title: "Core engine and guardrails",
    duration: "Weeks 2 to 3",
    deliverables: ["Staging pipeline", "Evaluation benchmark", "Output validation"],
    description:
      "Models, vector search, agents and automations come together on a staging server, with schema validation and an evaluation suite that measures them on your real tasks.",
    icon: Activity,
  },
  {
    step: "03",
    title: "Interface and integration",
    duration: "Weeks 4 to 5",
    deliverables: ["Web or mobile app", "Integrations with your tools", "Security review"],
    description:
      "The interface your team uses, connected to your CRM, database and channels, hardened against the OWASP ASVS Level 2 checklist before anyone outside the team sees it.",
    icon: FileCode,
  },
  {
    step: "04",
    title: "Launch and handover",
    duration: "Week 6 onward",
    deliverables: ["Production deployment", "Monitoring and alerts", "Code, docs and IP transfer"],
    description:
      "We deploy to infrastructure you control, wire in monitoring, hand over the code and documentation, and stay on for 30 days of warranty support.",
    icon: Shield,
  },
];

const PRINCIPLES = [
  ["Fixed scope, fixed price", "You know the cost before we write code. Changes are priced before they are made."],
  ["Weekly demos", "Every week you see working software on a staging link, not slides."],
  ["Your repository from day one", "The code lives in your accounts the whole time, so nothing is held back."],
  ["30 days of warranty", "After launch we fix anything that doesn't work as agreed, at no charge."],
];

export default function ProcessPage() {
  return (
    <div className="relative z-10">
      <section className="pt-40 pb-10">
        <div className="wrap" data-enter>
          <p className="eyebrow mb-6">Process</p>
          <h1 className="display max-w-[960px] text-[36px] sm:text-[52px] lg:text-[68px]">
            Six weeks from first call to <span className="serif-accent text-[var(--accent)]">production.</span>
          </h1>
          <p className="lede mt-7 max-w-[580px]">Four stages, a written scope, weekly demos and a full handover at the end.</p>
        </div>
      </section>

      <ProcessSteps />

      <section aria-labelledby="stages-h" className="py-24">
        <div className="wrap">
          <h2 id="stages-h" className="h2 mb-12">
            Stage by stage. <span className="soft">What happens and what you receive.</span>
          </h2>
          <ol className="grid gap-4 md:grid-cols-2">
            {stages.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.step} className="card card-link group p-8">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-m)] border border-[var(--line)] bg-[var(--surface2)] text-[var(--accent)] transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[13px] text-[var(--text-faint)]">
                      {s.step} · {s.duration}
                    </span>
                  </div>
                  <h3 className="mt-8 text-[24px] font-medium tracking-[-0.025em]">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-muted)]">{s.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2 border-t border-[var(--line)] pt-6">
                    {s.deliverables.map((d) => (
                      <li key={d} className="rounded-full border border-[var(--line-strong)] px-3 py-1.5 text-[13px] text-[var(--text-muted)]">
                        {d}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section aria-labelledby="principles-h" className="pb-24">
        <div className="wrap">
          <h2 id="principles-h" className="h2 mb-12">
            How we work with you.
          </h2>
          <div className="grid gap-x-10 gap-y-8 border-t border-[var(--line)] pt-10 md:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map(([t, b]) => (
              <div key={t}>
                <h3 className="text-[18px] font-medium">{t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-muted)]">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="wrap">
          <div className="flex flex-col gap-6 rounded-[var(--radius-l)] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(95,212,192,0.08),transparent_60%)] p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <h2 className="text-[30px] font-medium tracking-[-0.03em]">Start with week one.</h2>
              <p className="mt-2 max-w-[520px] text-[15px] text-[var(--text-muted)]">Book the discovery call and we will send the blueprint within two working days.</p>
            </div>
            <BookButton scope="Process: discovery week" label="Book the discovery call" className="shrink-0 !min-h-[54px] !px-7" />
          </div>
        </div>
      </section>
    </div>
  );
}
