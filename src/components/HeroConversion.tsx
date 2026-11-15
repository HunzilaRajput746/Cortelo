"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, User, ExternalLink } from "lucide-react";
import { CLIENT_LOGOS } from "@/lib/agencyData";
import { useAgencyShell } from "./ClientShell";

export default function HeroConversion() {
  const { openDrawer, openFounderModal } = useAgencyShell();

  return (
    <section className="relative pt-36 pb-24 px-6 sm:px-10 max-w-[1440px] mx-auto flex flex-col items-center">
      
      {/* 1. 115+ Happy Clients Pill */}
      <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#8bf0d4]/20 bg-[#8bf0d4]/[0.05] backdrop-blur-md shadow-lg mb-8">
        <div className="flex -space-x-2 overflow-hidden">
          <div className="w-6 h-6 rounded-full border border-black overflow-hidden relative">
            <Image src="/assets/team/hunzila_nisar.jpg" alt="Client 1" fill className="object-cover" />
          </div>
          <div className="w-6 h-6 rounded-full border border-black overflow-hidden relative">
            <Image src="/assets/team/mahreen_hashir.jpg" alt="Client 2" fill className="object-cover" />
          </div>
          <div className="w-6 h-6 rounded-full border border-black overflow-hidden relative">
            <Image src="/assets/team/umar_attique.jpg" alt="Client 3" fill className="object-cover" />
          </div>
          <div className="w-6 h-6 rounded-full border border-black overflow-hidden relative">
            <Image src="/assets/team/hamdan.jpg" alt="Client 4" fill className="object-cover" />
          </div>
        </div>
        <span className="text-xs font-mono text-[#d9e8e8]/80 font-medium tracking-tight">
          115+ teams building with Cortelo
        </span>
      </div>

      {/* 2. Main Giant Kinetic Headline with Italic Serif Accent Words */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.18fr_0.82fr] gap-12 lg:gap-16 items-end">
        <div className="space-y-6">
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-[#8bf0d4]/75">
          <span className="h-px w-10 bg-[#8bf0d4]/60" />
          Systems of intelligence
        </div>
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-black tracking-[-0.06em] text-[#f5f7fb] leading-[0.94]">
          Build the <span className="font-serif italic font-normal text-[#8bf0d4]">unfair</span> advantage.
        </h1>
        <p className="text-base sm:text-lg text-[#b8c2d2] max-w-xl font-light leading-relaxed">
          Cortelo turns ambitious ideas into intelligent products, autonomous workflows, and resilient software systems built for what comes next.
        </p>
        </div>
        <div className="relative min-h-[300px] rounded-[28px] border border-white/10 bg-[#101724]/80 p-6 text-left overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(139,240,212,0.16),transparent_38%)]" />
          <div className="relative h-full flex flex-col justify-between">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-white/45">
              <span>Live architecture</span><span className="text-[#8bf0d4]">● online</span>
            </div>
            <div className="space-y-3">
              <div className="h-2 w-3/4 rounded-full bg-[#8bf0d4]/80" />
              <div className="h-2 w-1/2 rounded-full bg-[#ff765f]/70" />
              <div className="h-2 w-5/6 rounded-full bg-white/15" />
            </div>
            <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-white/50">
              <span className="rounded-lg border border-white/10 p-2">AGENTS<br /><b className="text-white">24</b></span>
              <span className="rounded-lg border border-white/10 p-2">UPTIME<br /><b className="text-white">99.9%</b></span>
              <span className="rounded-lg border border-white/10 p-2">LATENCY<br /><b className="text-white">42ms</b></span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Action Buttons (Conversion Flame & Glass) */}
      <div className="pt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full max-w-6xl">
        <button
          onClick={() => openDrawer("15-Min Discovery Call")}
          className="btn-conversion-primary px-8 py-3.5 text-sm font-semibold flex items-center gap-2 cursor-pointer shadow-[0px_0px_0px_1px_rgba(255,69,51,0.25),0_0_25px_rgba(255,69,51,0.35)]"
        >
          <span>Book a 15-min call</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <a
          href="#services"
          className="btn-conversion-secondary px-7 py-3.5 text-sm font-medium"
        >
          Learn More &darr;
        </a>

        <button
          onClick={openFounderModal}
          className="btn-conversion-secondary px-6 py-3.5 text-sm font-medium flex items-center gap-2 cursor-pointer text-white/80 hover:text-white"
        >
          <User className="w-4 h-4 text-[#FF4533]" />
          <span>Founder Dossier</span>
          <ExternalLink className="w-3.5 h-3.5 text-white/50" />
        </button>
      </div>

      {/* 4. Client Trust Logos Bar */}
      <div className="pt-20 w-full max-w-6xl mx-auto space-y-6">
        <div className="text-xs uppercase tracking-widest text-[#888888] font-medium font-mono">
          You&apos;re in good hands:
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity">
          {CLIENT_LOGOS.map((client, idx) => (
            <div
              key={idx}
              className="h-10 w-28 relative flex items-center justify-center filter grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition-all"
            >
              <Image
                src={client.image}
                alt={client.name}
                width={100}
                height={36}
                className="object-contain max-h-8"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
