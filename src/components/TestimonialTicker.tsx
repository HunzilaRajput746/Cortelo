"use client";

import React from "react";
import Image from "next/image";
import { TESTIMONIALS_DATA } from "@/lib/agencyData";
import { pointerGlow } from "@/lib/usePointerGlow";

export default function TestimonialTicker() {
  const [lead, ...rest] = TESTIMONIALS_DATA;

  return (
    <section aria-labelledby="clients-h" className="py-24 md:py-32">
      <div className="wrap">
        <p className="eyebrow mb-6">Clients</p>
        <h2 id="clients-h" className="h2 mb-14 max-w-[760px]">
          What clients say <span className="soft">after the handover.</span>
        </h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* lead quote, set large */}
          <figure onPointerMove={pointerGlow} className="card card-glow flex flex-col justify-between p-8 md:p-10 lg:row-span-2">
            <blockquote className="text-[24px] md:text-[30px] font-medium leading-[1.25] tracking-[-0.025em] text-[var(--text)]">
              &ldquo;{lead.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4 border-t border-[var(--line)] pt-6">
              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[var(--line)] bg-[var(--surface2)]">
                <Image src={lead.avatar} alt="" fill sizes="48px" className="object-cover" />
              </span>
              <span>
                <span className="block text-[15px] text-[var(--text)]">{lead.author}</span>
                <span className="block text-[13px] text-[var(--text-faint)]">
                  {lead.role}, {lead.company}
                </span>
              </span>
            </figcaption>
          </figure>

          {rest.slice(0, 4).map((t) => (
            <figure key={t.id} onPointerMove={pointerGlow} className="card card-glow flex flex-col justify-between p-7">
              <blockquote className="text-[15px] leading-relaxed text-[var(--text-muted)]">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[var(--line)] bg-[var(--surface2)]">
                  <Image src={t.avatar} alt="" fill sizes="36px" className="object-cover" />
                </span>
                <span>
                  <span className="block text-[14px] text-[var(--text)]">{t.author}</span>
                  <span className="block text-[12px] text-[var(--text-faint)]">
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
