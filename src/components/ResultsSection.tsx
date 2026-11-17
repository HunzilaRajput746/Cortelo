"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AGENCY_PROJECTS, type ProjectItem } from "@/lib/agencyData";
import { useAgencyShell } from "./ClientShell";
import { ArrowUpRight } from "lucide-react";

function ProjectCard({ p, wide = false }: { p: ProjectItem; wide?: boolean }) {
  const { openProjectModal } = useAgencyShell();
  const video = useRef<HTMLVideoElement>(null);

  const play = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.current?.play().catch(() => {});
  };
  const stop = () => {
    const v = video.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <button
      type="button"
      onClick={() => openProjectModal(p)}
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
      className={`card card-link group overflow-hidden text-left ${wide ? "md:col-span-2 md:grid md:grid-cols-[1.35fr_1fr]" : "flex flex-col"}`}
    >
      <div className={`media relative bg-[var(--surface2)] ${wide ? "aspect-[16/10] md:aspect-auto md:min-h-[440px]" : "aspect-[16/10]"}`}>
        <Image
          src={p.previewImage}
          alt={p.title}
          fill
          sizes={wide ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 45vw, 100vw"}
          className="object-cover"
        />
        {p.video && (
          <video
            ref={video}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
          >
            <source src={p.video} type="video/mp4" />
          </video>
        )}
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 font-mono text-[11px] text-white/80 backdrop-blur-md">
          {p.category}
        </span>
        <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-[background-color,color,transform] duration-300 group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-ink)]">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className={`flex flex-1 flex-col gap-8 p-7 ${wide ? "md:p-10" : ""}`}>
        <h3 className={`font-medium tracking-[-0.025em] text-[var(--text)] ${wide ? "text-[26px] md:text-[32px] leading-[1.1]" : "text-[21px] leading-snug"}`}>
          {p.title}
        </h3>
        <p className={`mt-3 text-[15px] leading-relaxed text-[var(--text-muted)] ${wide ? "line-clamp-4" : "line-clamp-2"}`}>
          {p.description}
        </p>
        <div className="mt-auto grid grid-cols-2 gap-4 border-t border-[var(--line)] pt-6">
          <div>
            <p className="text-[26px] font-medium tracking-[-0.03em] text-[var(--text)]">{p.metrics.primaryValue}</p>
            <p className="mt-1 text-[12px] text-[var(--text-faint)]">{p.metrics.primaryLabel}</p>
          </div>
          <div>
            <p className="text-[26px] font-medium tracking-[-0.03em] text-[var(--accent)]">{p.metrics.secondaryValue}</p>
            <p className="mt-1 text-[12px] text-[var(--text-faint)]">{p.metrics.secondaryLabel}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function ResultsSection() {
  const [first, ...rest] = AGENCY_PROJECTS;
  const shown = rest.slice(0, 4);

  return (
    <section id="results" aria-labelledby="results-h" className="py-24 md:py-32">
      <div className="wrap">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-6">Selected work</p>
            <h2 id="results-h" className="h2 max-w-[760px]">
              Systems in production. <span className="soft">Numbers from the running builds.</span>
            </h2>
          </div>
          <Link href="/work" className="link-draw shrink-0 text-[15px]">
            All case studies <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ProjectCard p={first} wide />
          {shown.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
