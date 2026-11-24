"use client";

import React from "react";
import { TESTIMONIALS_DATA } from "@/lib/agencyData";
import { pointerGlow } from "@/lib/usePointerGlow";

function ClientMonogram({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--surface2)] font-mono text-[11px] font-semibold tracking-wider text-[var(--accent)]">
      {initials}
    </span>
  );
}

export default function TestimonialTicker() {
  const [lead, ...rest] = TESTIMONIALS_DATA;

  return (
    <section aria-labelledby="clients-h" className="py-16 md:py-22">
      <div className="wrap">
        <p className="eyebrow mb-5">Verified Reviews</p>
        <h2 id="clients-h" className="h2 mb-10 max-w-[760px]">
          What clients say <span className="soft">after the handover.</span>
        </h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* lead quote, set large */}
          <figure onPointerMove={pointerGlow} className="card card-glow flex flex-col justify-between p-6 md:p-8 lg:row-span-2">
            <div>
              <div className="mb-4 flex items-center gap-1 text-[13px] text-[#f59e0b]">
                {"★".repeat(5)}
              </div>
              <blockquote className="text-[17px] md:text-[21px] font-medium leading-[1.3] tracking-[-0.025em] text-[var(--text)]">
                &ldquo;{lead.quote}&rdquo;
              </blockquote>
            </div>
            <figcaption className="mt-8 flex items-center gap-3.5 border-t border-[var(--line)] pt-5">
              <ClientMonogram name={lead.author} />
              <span>
                <span className="block text-[13.5px] font-medium text-[var(--text)]">{lead.author}</span>
                <span className="block text-[12px] text-[var(--text-faint)]">
                  {lead.role}, {lead.company}
                </span>
              </span>
            </figcaption>
          </figure>

          {rest.slice(0, 4).map((t) => (
            <figure key={t.id} onPointerMove={pointerGlow} className="card card-glow flex flex-col justify-between p-5 md:p-6">
              <div>
                <div className="mb-3 flex items-center gap-1 text-[12px] text-[#f59e0b]">
                  {"★".repeat(5)}
                </div>
                <blockquote className="text-[13px] leading-relaxed text-[var(--text-muted)]">&ldquo;{t.quote}&rdquo;</blockquote>
              </div>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-[var(--line)]/50 pt-4">
                <ClientMonogram name={t.author} />
                <span>
                  <span className="block text-[13px] font-medium text-[var(--text)]">{t.author}</span>
                  <span className="block text-[11.5px] text-[var(--text-faint)]">
                    {t.role}, {t.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
