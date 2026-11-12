"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, User, ExternalLink, MessageSquare, Award } from "lucide-react";
import { FOUNDER_DATA, CLIENT_LOGOS } from "@/lib/agencyData";
import { useAgencyShell } from "./ClientShell";

export default function HeroConversion() {
  const { openDrawer, openFounderModal } = useAgencyShell();

  return (
    <section className="relative pt-36 pb-20 px-6 sm:px-10 max-w-[1440px] mx-auto text-center flex flex-col items-center">
      
      {/* 1. Floating Happy Clients / Verified Deployments Pill */}
      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cortelo-border bg-[#0F131D]/80 backdrop-blur-md shadow-lg mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
        <div className="flex -space-x-2 overflow-hidden">
          <div className="w-6 h-6 rounded-full border border-[#0F131D] overflow-hidden relative">
            <Image src="/assets/team/hunzila_nisar.jpg" alt="Client 1" fill className="object-cover" />
          </div>
          <div className="w-6 h-6 rounded-full border border-[#0F131D] overflow-hidden relative">
            <Image src="/assets/team/mahreen_hashir.jpg" alt="Client 2" fill className="object-cover" />
          </div>
          <div className="w-6 h-6 rounded-full border border-[#0F131D] overflow-hidden relative">
            <Image src="/assets/team/umar_attique.jpg" alt="Client 3" fill className="object-cover" />
          </div>
          <div className="w-6 h-6 rounded-full border border-[#0F131D] overflow-hidden relative">
            <Image src="/assets/team/hamdan.jpg" alt="Client 4" fill className="object-cover" />
          </div>
        </div>
        <span className="text-xs font-mono text-cortelo-text font-semibold">
          115+ Enterprise Deployments &amp; Happy Clients
        </span>
      </div>

      {/* 2. Main Giant Typography with Highlighted Colored Words */}
      <div className="max-w-5xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-black tracking-[-0.03em] uppercase text-cortelo-text leading-[1.02]">
          Ready to{" "}
          <span className="text-cortelo-mint underline decoration-cortelo-mint/40 underline-offset-8 italic">
            scale
          </span>{" "}
          your brand with{" "}
          <span className="text-cortelo-mint italic">intelligent AI</span>?
        </h1>

        <p className="text-base sm:text-xl text-cortelo-muted max-w-2xl mx-auto font-light leading-relaxed pt-3">
          If you want to achieve ground-breaking growth with custom CRM architectures, autonomous agents, and enterprise automation, then you&apos;re in the right place.
        </p>
      </div>

      {/* 3. Primary Conversion Action Buttons */}
      <div className="pt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => openDrawer()}
          className="px-9 py-4 rounded-full bg-cortelo-mint text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-[0_0_30px_rgba(45,212,167,0.4)] flex items-center gap-2 group"
        >
          <span>Book a 15-min call</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>

        <a
          href="#services"
          className="px-8 py-4 rounded-full border border-cortelo-border bg-cortelo-surface/80 hover:border-cortelo-mint hover:text-cortelo-mint text-cortelo-text font-mono text-xs font-semibold transition-all shadow-md"
        >
          Learn More &darr;
        </a>

        <button
          onClick={openFounderModal}
          className="px-6 py-4 rounded-full border border-cortelo-border bg-cortelo-surface/60 hover:border-cortelo-mint text-cortelo-text font-mono text-xs transition-all flex items-center gap-2"
        >
          <User className="w-3.5 h-3.5 text-cortelo-mint" />
          <span>Founder Portfolio (devhunzila.site)</span>
          <ExternalLink className="w-3 h-3 text-cortelo-muted" />
        </button>
      </div>

      {/* 4. Client Trust Logos Bar */}
      <div className="pt-20 w-full max-w-4xl mx-auto space-y-6">
        <div className="text-xs font-mono uppercase tracking-widest text-cortelo-muted">
          You&apos;re in good hands:
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity">
          {CLIENT_LOGOS.map((client, idx) => (
            <div
              key={idx}
              className="h-10 w-28 relative flex items-center justify-center filter grayscale hover:grayscale-0 transition-all"
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

