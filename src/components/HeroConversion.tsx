"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, User, ExternalLink } from "lucide-react";
import { CLIENT_LOGOS } from "@/lib/agencyData";
import { useAgencyShell } from "./ClientShell";

export default function HeroConversion() {
  const { openDrawer, openFounderModal } = useAgencyShell();

  return (
    <section className="relative pt-36 pb-20 px-6 sm:px-10 max-w-[1440px] mx-auto text-center flex flex-col items-center">
      
      {/* 1. 115+ Happy Clients Pill */}
      <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-lg mb-8 animate-in fade-in duration-500">
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
        <span className="text-xs font-sans text-white/80 font-medium tracking-tight">
          115+ happy clients
        </span>
      </div>

      {/* 2. Main Giant Kinetic Headline with Italic Serif Accent Words */}
      <div className="max-w-5xl mx-auto space-y-5">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-black tracking-[-0.03em] uppercase text-[#FCFCFA] leading-[1.02]">
          Ready to{" "}
          <span className="font-serif italic font-normal text-white lowercase">
            scale
          </span>{" "}
          your brand with{" "}
          <span className="font-serif italic font-normal text-white lowercase">
            intelligent AI
          </span>?
        </h1>

        <p className="text-base sm:text-xl text-[#999999] max-w-2xl mx-auto font-light leading-relaxed pt-2">
          If you want to achieve ground-breaking growth with custom CRM architectures, autonomous agents, and enterprise automation, then you&apos;re in the right place.
        </p>
      </div>

      {/* 3. Action Buttons (Conversion Flame & Glass) */}
      <div className="pt-8 flex flex-wrap items-center justify-center gap-4">
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
      <div className="pt-20 w-full max-w-4xl mx-auto space-y-6">
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
