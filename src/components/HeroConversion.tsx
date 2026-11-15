"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { CLIENT_LOGOS } from "@/lib/agencyData";
import { useAgencyShell } from "./ClientShell";

export default function HeroConversion() {
  const { openDrawer, openFounderModal } = useAgencyShell();

  return (
    <section className="relative min-h-[820px] pt-40 pb-24 px-6 sm:px-10 max-w-[1440px] mx-auto flex flex-col justify-end">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-75"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/hero_ambient.mp4.jpg"
          aria-hidden="true"
        >
          <source src="/assets/videos/hero_ambient.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,11,0.9)_0%,rgba(7,9,11,0.45)_52%,rgba(7,9,11,0.1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,9,11,0.92)_0%,transparent_45%)]" />
      </div>

      <div className="relative max-w-4xl py-10 sm:py-16 animate-hero-in">
        <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.22em] text-white/60 mb-7">
          <span className="h-px w-10 bg-[#d7a47a]" />
          Cortelo / Independent AI studio
        </div>
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-semibold tracking-[-0.065em] text-[#f7f5f0] leading-[0.91]">
          We build what <span className="font-serif italic font-normal text-[#d7a47a]">should</span> exist.
        </h1>
        <p className="mt-8 text-base sm:text-lg text-white/70 max-w-xl font-light leading-relaxed">
          Intelligent products, thoughtful automation, and software systems designed around the way your business actually works.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-5">
          <button
            onClick={() => openDrawer("15-Min Discovery Call")}
            className="btn-conversion-primary px-7 py-3.5 text-sm font-semibold flex items-center gap-2 cursor-pointer"
          >
            Start a conversation <ArrowRight className="w-4 h-4" />
          </button>
          <a href="#results" className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-white transition-colors">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30">
              <Play className="w-3 h-3 fill-current" />
            </span>
            See the work
          </a>
        </div>
      </div>

      <div className="relative pt-12 w-full space-y-5">
        <div className="text-[11px] uppercase tracking-[0.2em] text-white/45 font-mono">
          Trusted by teams with something important to build
        </div>
        <div className="flex flex-wrap gap-x-10 gap-y-4 items-center opacity-60">
          {CLIENT_LOGOS.map((client, idx) => (
            <div
              key={idx}
              className="h-8 w-24 relative flex items-center justify-start filter grayscale brightness-200 hover:brightness-100 transition-all"
            >
              <Image
                src={client.image}
                alt={client.name}
                width={100}
                height={36}
                className="object-contain max-h-6 object-left"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
