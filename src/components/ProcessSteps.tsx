"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useAgencyShell } from "./ClientShell";
import VideoGround from "./VideoGround";
import type { VideoSlotName } from "@/lib/media";

const STEPS: { num: string; when: string; title: string; body: string; slot: VideoSlotName }[] = [
  {
    num: "01",
    when: "Week 1",
    title: "We map how your work actually runs",
    body: "Calls with the people who do the work, a look at your data and tools, and a written blueprint with scope, stack and price before any code.",
    slot: "processDiscover",
  },
  {
    num: "02",
    when: "Weeks 2 to 4",
    title: "We build it in the open",
    body: "Weekly demos on a staging link. The CRM, the agents, the automations and the interface come together in your own repository from day one.",
    slot: "processBuild",
  },
  {
    num: "03",
    when: "Week 5 onward",
    title: "We ship it and hand you the keys",
    body: "Deployed to a server you control, with monitoring and alerts wired in. Code, models, configs and docs move to your accounts.",
    slot: "processHandover",
  },
];

/**
 * The dealt moment: pinned chapters. The section holds while its three
 * steps open one at a time and the frame on the right crossfades to each
 * step's film. On phones the steps simply stack.
 */
export default function ProcessSteps() {
  const { openDrawer } = useAgencyShell();
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      if (total <= 0) return;
      const p = Math.min(0.999, Math.max(0, -r.top / total));
      setActive(Math.floor(p * STEPS.length));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="process" aria-labelledby="process-h" className="relative">
      {/* Desktop: pinned chapters */}
      <div ref={track} className="hidden lg:block h-[260vh]">
        <div className="sticky top-0 flex h-screen items-center">
          <div className="wrap grid grid-cols-[1fr_1.15fr] gap-16 items-center">
            <div>
              <p className="eyebrow mb-6">Process</p>
              <h2 id="process-h" className="h2 mb-12">
                Five weeks from first call <span className="soft">to running in production.</span>
              </h2>
              <ol className="space-y-2">
                {STEPS.map((s, i) => {
                  const on = i === active;
                  return (
                    <li key={s.num} className={`border-l-2 pl-6 py-3 transition-colors duration-500 ${on ? "border-[var(--accent)]" : "border-[var(--line)]"}`}>
                      <div className="flex items-baseline gap-4">
                        <span className={`font-mono text-[12px] transition-colors duration-500 ${on ? "text-[var(--accent)]" : "text-[var(--text-faint)]"}`}>
                          {s.num} · {s.when}
                        </span>
                      </div>
                      <h3 className={`mt-2 text-[22px] font-medium tracking-[-0.02em] transition-colors duration-500 ${on ? "text-[var(--text)]" : "text-[var(--text-faint)]"}`}>
                        {s.title}
                      </h3>
                      <div className={`grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <p className="overflow-hidden text-[15px] leading-relaxed text-[var(--text-muted)] max-w-[460px]">
                          <span className="block pt-3">{s.body}</span>
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
              <button onClick={() => openDrawer("Process: discovery week")} className="btn btn-primary mt-10">
                Start with a discovery week <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="relative aspect-[4/5] max-h-[78vh] overflow-hidden rounded-[var(--radius-l)] border border-[var(--line)] bg-[var(--surface)]">
              {STEPS.map((s, i) => (
                <div key={s.num} className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}>
                  {/* client slot: process film per step, see src/lib/media.ts */}
                  <VideoGround slot={s.slot} className="absolute inset-0" />
                </div>
              ))}
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,9,10,0.85)_0%,transparent_45%)]" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7">
                <span className="text-[64px] font-medium leading-none tracking-[-0.05em] text-[var(--text)]">{STEPS[active].num}</span>
                <span className="font-mono text-[12px] text-[var(--text-muted)]">{STEPS[active].when}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phones and tablets: stacked steps */}
      <div className="lg:hidden py-24">
        <div className="wrap">
          <p className="eyebrow mb-6">Process</p>
          <h2 className="h2 mb-10">
            Five weeks from first call <span className="soft">to running in production.</span>
          </h2>
          <ol className="space-y-10">
            {STEPS.map((s) => (
              <li key={s.num}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-l)] border border-[var(--line)]">
                  <VideoGround slot={s.slot} className="absolute inset-0" />
                </div>
                <p className="mt-5 font-mono text-[12px] text-[var(--accent)]">
                  {s.num} · {s.when}
                </p>
                <h3 className="mt-2 text-[22px] font-medium tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-muted)]">{s.body}</p>
              </li>
            ))}
          </ol>
          <button onClick={() => openDrawer("Process: discovery week")} className="btn btn-primary mt-10 w-full">
            Start with a discovery week <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
