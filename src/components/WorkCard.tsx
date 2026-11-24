import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/lib/agencyData";

/** A case study card that opens its own page. `wide` lays it out side by side. */
export default function WorkCard({ p, wide = false }: { p: ProjectItem; wide?: boolean }) {
  return (
    <Link
      href={`/work/${p.id}`}
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
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 font-mono text-[11px] text-white/80 backdrop-blur-md">
          {p.category}
        </span>
        <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-[background-color,color] duration-300 group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-ink)]">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className={`flex flex-1 flex-col gap-6 p-5 sm:p-6 ${wide ? "md:p-8" : ""}`}>
        <div>
          <h3
            className={`font-medium tracking-[-0.025em] text-[var(--text)] transition-colors group-hover:text-[var(--accent)] ${
              wide ? "text-[20px] md:text-[24px] leading-[1.15]" : "text-[17px] leading-snug"
            }`}
          >
            {p.title}
          </h3>
          <p className={`mt-2.5 text-[13px] leading-relaxed text-[var(--text-muted)] ${wide ? "line-clamp-4" : "line-clamp-2"}`}>
            {p.description}
          </p>
        </div>
        <div className="mt-auto grid grid-cols-2 gap-4 border-t border-[var(--line)] pt-5">
          <div>
            <p className="text-[20px] font-medium tracking-[-0.03em] text-[var(--text)]">{p.metrics.primaryValue}</p>
            <p className="mt-0.5 text-[11px] text-[var(--text-faint)]">{p.metrics.primaryLabel}</p>
          </div>
          <div>
            <p className="text-[20px] font-medium tracking-[-0.03em] text-[var(--accent)]">{p.metrics.secondaryValue}</p>
            <p className="mt-0.5 text-[11px] text-[var(--text-faint)]">{p.metrics.secondaryLabel}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
