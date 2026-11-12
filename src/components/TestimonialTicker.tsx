"use client";

import React from "react";
import Image from "next/image";
import { TESTIMONIALS_DATA } from "@/lib/agencyData";

export default function TestimonialTicker() {
  return (
    <section className="py-20 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-cortelo-border">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="px-3.5 py-1 rounded-full border border-cortelo-mint/40 bg-cortelo-mint/10 text-xs font-mono text-cortelo-mint font-semibold uppercase">
          Our Clients
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-cortelo-text tracking-tight">
          Hear it directly from{" "}
          <span className="text-cortelo-mint italic">our clients</span>.
        </h2>
        <p className="text-sm text-cortelo-muted leading-relaxed font-light">
          Hear what our enterprise clients have to say. Our testimonials reflect the verified satisfaction and performance outcomes delivered across every build.
        </p>
      </div>

      {/* Testimonials 3x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS_DATA.map((t) => (
          <div
            key={t.id}
            className="glass-panel rounded-2xl p-8 border border-cortelo-border hover:border-cortelo-mint/60 transition-all flex flex-col justify-between bg-[#0F131D]/80 group"
          >
            <p className="text-sm text-cortelo-text leading-relaxed font-light mb-8 italic">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-cortelo-border/60">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-cortelo-border relative shrink-0">
                <Image src={t.avatar} alt={t.author} fill className="object-cover" />
              </div>
              <div>
                <div className="text-sm font-bold text-cortelo-text uppercase">
                  {t.author}
                </div>
                <div className="text-xs font-mono text-cortelo-muted">
                  {t.role} &bull; <span className="text-cortelo-mint">{t.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

