"use client";

import React from "react";
import Image from "next/image";
import { TESTIMONIALS_DATA } from "@/lib/agencyData";

export default function TestimonialTicker() {
  return (
    <section className="py-24 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-white/10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-white/70 uppercase tracking-wider font-medium">
          Our Clients
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#FCFCFA] tracking-tight">
          Hear it directly from{" "}
          <span className="font-serif italic font-normal text-white lowercase">our clients</span>.
        </h2>
        <p className="text-sm sm:text-base text-[#999999] leading-relaxed font-light">
          Hear what our enterprise clients have to say. Our testimonials reflect the verified satisfaction and performance outcomes delivered across every build.
        </p>
      </div>

      {/* Testimonials 3x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS_DATA.map((t) => (
          <div
            key={t.id}
            className="rounded-2xl p-7 sm:p-8 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between bg-[#0D0D0D] group"
          >
            <p className="text-sm text-white/90 leading-relaxed font-light mb-8 italic">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-white/10 relative shrink-0">
                <Image src={t.avatar} alt={t.author} fill className="object-cover" />
              </div>
              <div>
                <div className="text-sm font-bold text-white uppercase">
                  {t.author}
                </div>
                <div className="text-xs font-mono text-[#888888]">
                  {t.role} &bull; <span className="text-[#FF4533]">{t.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
