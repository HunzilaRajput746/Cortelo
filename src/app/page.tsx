"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight, ShieldCheck, Cpu, Terminal, Play, Sparkles } from "lucide-react";
import ServiceTabs from "@/components/ServiceTabs";
import FAQAccordion from "@/components/FAQAccordion";

export default function HomePage() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [showVideoPrism, setShowVideoPrism] = useState(false);

  const caseStudies = [
    {
      id: "wave",
      title: "Automated Regulatory Extraction",
      client: "Global Fintech Tier-1",
      video: "/assets/videos/case_study_1.mp4",
      image: "/assets/images/card_wave.png",
      accuracy: "99.8%",
      latency: "P99 Latency < 42ms",
      desc: "Deterministic legal text parser achieving zero hallucination under high regulatory scrutiny.",
    },
    {
      id: "quadrupod",
      title: "Autonomous Refactor Harness",
      client: "Developer Infrastructure",
      video: "/assets/videos/case_study_2.mp4",
      image: "/assets/images/card_quadrupod.png",
      accuracy: "99.8%",
      latency: "P99 Latency < 42ms",
      desc: "Self-healing microservice orchestration cluster generating verified pull requests.",
    },
    {
      id: "neural-ui",
      title: "Enterprise AI Telemetry Bus",
      client: "Enterprise Logistics",
      video: "/assets/videos/case_study_3.mp4",
      image: "/assets/images/card_telemetry.png",
      accuracy: "99.8%",
      latency: "Client: Enterprise AI",
      desc: "Real-time edge event streaming backbone managing 4.8M concurrent agent events.",
    },
  ];

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative z-10 w-full overflow-hidden">
      
      {/* Sleek Vertical Section Indicator Rail (Right Screen Edge matching Mockup) */}
      <div className="hidden xl:flex fixed right-4 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-3">
        <div className="w-[3px] h-12 rounded-full bg-cortelo-mint shadow-[0_0_12px_#2DD4A7]" />
        <div className="w-[2px] h-6 rounded-full bg-cortelo-border/60" />
        <div className="w-[2px] h-6 rounded-full bg-cortelo-border/40" />
      </div>

      {/* ======================================================== */}
      {/* 1. EXACT MOCKUP HERO SCREEN (Viewport Sized 100vh) */}
      {/* ======================================================== */}
      <section className="relative min-h-screen pt-28 pb-8 px-6 sm:px-10 flex flex-col justify-between max-w-[1440px] mx-auto">
        
        {/* Main Hero Row: Headline on Left, 3D Iridescent Crystal on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          
          {/* Left: Giant Kinetic Typography */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1 select-none">
              {/* CORTELO with connected stylized ribbon typography */}
              <div className="text-5xl sm:text-7xl xl:text-[88px] font-black tracking-[-0.04em] uppercase text-cortelo-text leading-[0.92]">
                CORTELO
              </div>
              <div className="text-5xl sm:text-7xl xl:text-[88px] font-black tracking-[-0.04em] text-cortelo-text leading-[0.92]">
                Systems of
              </div>
              <div className="text-5xl sm:text-7xl xl:text-[88px] font-black tracking-[-0.04em] text-cortelo-text leading-[0.92]">
                Intelligence
              </div>
            </div>

            <p className="text-sm sm:text-base text-cortelo-muted max-w-lg font-light leading-relaxed pt-2">
              Engineering bespoke autonomous agents, neural architectures, and resilient enterprise software.
            </p>

            <div className="flex items-center gap-4 pt-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cortelo-mint hover:underline"
              >
                Explore Engineered Disciplines &rarr;
              </Link>
            </div>
          </div>

          {/* Right: The Giant 3D Iridescent Refractive Glass Crystal Centerpiece */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-[320px] sm:w-[420px] aspect-square flex items-center justify-center">
              
              {/* Ambient Dispersion Glow behind crystal */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cortelo-mint/25 via-cyan-400/20 to-purple-600/25 filter blur-[75px] pointer-events-none" />

              {/* Exact 3D Crystal Prism from Mockup with gentle floating animation */}
              <div className="relative z-10 w-full h-full flex items-center justify-center animate-float group cursor-pointer"
                   onClick={() => setShowVideoPrism(!showVideoPrism)}
                   title="Click to toggle between 4K Crystal Prism and 60FPS Video Loop"
              >
                {!showVideoPrism ? (
                  <Image
                    src="/assets/images/crystal_prism_transparent.png"
                    alt="Cortelo 3D Refractive Crystal"
                    width={420}
                    height={420}
                    priority
                    className="w-full h-auto object-contain filter drop-shadow-[0_20px_50px_rgba(45,212,167,0.3)] transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(45,212,167,0.3)] rounded-3xl"
                  >
                    <source src="/assets/videos/prism_loop.mp4" type="video/mp4" />
                  </video>
                )}
              </div>

            </div>

            {/* Subtle Interactive 3D Mode Toggle Pill */}
            <button
              onClick={() => setShowVideoPrism(!showVideoPrism)}
              className="mt-2 text-[10px] font-mono text-cortelo-muted hover:text-cortelo-mint px-3 py-1 rounded-full border border-cortelo-border/50 bg-[#0B0F19]/40 backdrop-blur-sm transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-cortelo-mint" />
              <span>{showVideoPrism ? "View Static 4K Crystal" : "View 60FPS Kinetic Loop"}</span>
            </button>
          </div>

        </div>

        {/* Bottom Upper-Fold: Case Study Carousel + Studio Leadership Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-cortelo-border/60">
          
          {/* Left Column (8 cols): Case Study Carousel */}
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-cortelo-muted">
              <span className="tracking-wider uppercase">Case study carousel</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Slide"
                  className="w-7 h-7 rounded-full border border-cortelo-border bg-[#0B0F19]/80 flex items-center justify-center hover:border-cortelo-mint hover:text-cortelo-mint transition-colors active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Slide"
                  className="w-7 h-7 rounded-full border border-cortelo-border bg-[#0B0F19]/80 flex items-center justify-center hover:border-cortelo-mint hover:text-cortelo-mint transition-colors active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Carousel Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudies.map((study, idx) => (
                <Link
                  key={study.id}
                  href={`/work`}
                  className="glass-panel rounded-xl p-3.5 border border-cortelo-border hover:border-cortelo-mint/60 transition-all flex flex-col justify-between group overflow-hidden bg-[#0B0F19]/50"
                >
                  {/* Card Visual with Looping Video */}
                  <div className="h-28 rounded-lg bg-[#07090E] relative overflow-hidden mb-3 border border-cortelo-border/50">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                    >
                      <source src={study.video} type="video/mp4" />
                    </video>
                  </div>

                  <div className="space-y-1 text-[11px] font-mono">
                    <div className="flex justify-between items-center text-cortelo-muted">
                      <span>Precision: <strong className="text-cortelo-text">{study.accuracy}</strong></span>
                    </div>
                    <div className="text-cortelo-mint font-semibold truncate">
                      {study.latency}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column (4 cols): Studio Leadership Preview */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono text-cortelo-muted tracking-wider uppercase">
              Studio leadership preview
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Hunzila Nisar (Founder & Lead Architect) */}
              <Link
                href="/about"
                className="glass-panel rounded-xl p-3 border border-cortelo-border flex flex-col items-center text-center space-y-2 group hover:border-cortelo-mint/60 transition-all bg-[#0B0F19]/50"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden border border-cortelo-border relative shadow-lg bg-[#07090E]">
                  <Image
                    src="/assets/team/hunzila_nisar.jpg"
                    alt="Hunzila Nisar - Founder & Lead Architect"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-cortelo-text leading-tight group-hover:text-cortelo-mint transition-colors">
                    Hunzila Nisar
                  </div>
                  <div className="text-[10px] font-mono text-cortelo-muted leading-tight mt-0.5">
                    Founder & Lead Architect
                  </div>
                </div>
              </Link>

              {/* Mahreen Hashir (Co-Founder & Head of Systems) */}
              <Link
                href="/about"
                className="glass-panel rounded-xl p-3 border border-cortelo-border flex flex-col items-center text-center space-y-2 group hover:border-cortelo-mint/60 transition-all bg-[#0B0F19]/50"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden border border-cortelo-border relative shadow-lg bg-[#07090E]">
                  <Image
                    src="/assets/team/mahreen_hashir.jpg"
                    alt="Mahreen Hashir - Co-Founder & Head of Systems"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-cortelo-text leading-tight group-hover:text-cortelo-mint transition-colors">
                    Mahreen Hashir
                  </div>
                  <div className="text-[10px] font-mono text-cortelo-muted leading-tight mt-0.5">
                    Co-Founder & Head of Systems
                  </div>
                </div>
              </Link>
            </div>
          </div>

        </div>

      </section>

      {/* ======================================================== */}
      {/* 2. SERVICES SECTION (Interactive 5-Discipline System) */}
      {/* ======================================================== */}
      <section id="systems" className="py-28 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-cortelo-border/60">
        <ServiceTabs />
      </section>

      {/* ======================================================== */}
      {/* 3. CASE STUDIES & WORK SHOWCASE */}
      {/* ======================================================== */}
      <section id="work" className="py-28 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-cortelo-border/60">
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cortelo-mint font-semibold">
              Selected Work &bull; 02
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-cortelo-text mt-2 uppercase">
              Production Systems In The Wild.
            </h2>
            <p className="text-sm text-cortelo-muted mt-2 max-w-lg font-light">
              High-throughput architectures battle-tested under enterprise production constraints.
            </p>
          </div>
          <Link
            href="/work"
            className="px-6 py-2.5 rounded-full border border-cortelo-border hover:border-cortelo-mint text-xs font-mono tracking-wider text-cortelo-text uppercase transition-colors"
          >
            All Case Studies &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="glass-panel rounded-2xl p-6 border border-cortelo-border hover:border-cortelo-mint/60 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 rounded-xl bg-[#07090E] relative overflow-hidden mb-6 border border-cortelo-border/50">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                  >
                    <source src={study.video} type="video/mp4" />
                  </video>
                </div>
                <div className="text-xs font-mono text-cortelo-mint mb-2">{study.client}</div>
                <h3 className="text-xl font-bold text-cortelo-text mb-3 uppercase">{study.title}</h3>
                <p className="text-xs text-cortelo-muted leading-relaxed font-light">{study.desc}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-cortelo-border/60 flex items-center justify-between text-xs font-mono">
                <span className="text-cortelo-muted">Precision: <strong className="text-cortelo-text">{study.accuracy}</strong></span>
                <span className="text-cortelo-mint font-bold">{study.latency}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. PROCESS & VERIFICATION PIPELINE */}
      {/* ======================================================== */}
      <section id="studio" className="py-28 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-cortelo-border/60">
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-cortelo-mint font-semibold">
            Delivery Framework &bull; 03
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-cortelo-text mt-2 uppercase">
            Transparent, Milestone-Driven Execution.
          </h2>
          <p className="text-sm text-cortelo-muted mt-2 max-w-lg font-light">
            No endless discovery retainers. Every build follows four structured milestones with verified acceptance tests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-8 rounded-2xl glass-panel border border-cortelo-border flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-cortelo-mint font-bold mb-4">MILESTONE 01</div>
              <h3 className="text-lg font-bold text-cortelo-text mb-2 uppercase">Technical Discovery</h3>
              <p className="text-xs text-cortelo-muted leading-relaxed font-light">
                Data pipeline auditing, schema mapping, model selection benchmarks, and precise latency budget definitions.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-cortelo-border text-[11px] font-mono text-cortelo-muted">
              Week 1 &bull; Architectural Blueprint
            </div>
          </div>

          <div className="p-8 rounded-2xl glass-panel border border-cortelo-border flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-cortelo-mint font-bold mb-4">MILESTONE 02</div>
              <h3 className="text-lg font-bold text-cortelo-text mb-2 uppercase">Core Engine & Training</h3>
              <p className="text-xs text-cortelo-muted leading-relaxed font-light">
                Model training, fine-tuning, vector indexing, deterministic guardrail setup, and automated evaluation benchmark runs.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-cortelo-border text-[11px] font-mono text-cortelo-muted">
              Weeks 2–3 &bull; Staging Benchmarks
            </div>
          </div>

          <div className="p-8 rounded-2xl glass-panel border border-cortelo-border flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-cortelo-mint font-bold mb-4">MILESTONE 03</div>
              <h3 className="text-lg font-bold text-cortelo-text mb-2 uppercase">Platform Integration</h3>
              <p className="text-xs text-cortelo-muted leading-relaxed font-light">
                Next.js / React Native interface integration, OWASP ASVS L2 security hardening, SSRF guards, and client portal deployment.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-cortelo-border text-[11px] font-mono text-cortelo-muted">
              Weeks 4–5 &bull; Full Integration
            </div>
          </div>

          <div className="p-8 rounded-2xl glass-panel border border-cortelo-border flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-cortelo-mint font-bold mb-4">MILESTONE 04</div>
              <h3 className="text-lg font-bold text-cortelo-text mb-2 uppercase">Handover & Telemetry</h3>
              <p className="text-xs text-cortelo-muted leading-relaxed font-light">
                Production deployment on your private tenant, Prometheus/Sentry monitoring setup, documentation, and full IP handover.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-cortelo-border text-[11px] font-mono text-cortelo-muted">
              Week 6 &bull; 100% IP Handover
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. ARCHITECTURAL SECURITY & COMPLIANCE */}
      {/* ======================================================== */}
      <section className="py-24 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-cortelo-border/60">
        <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-cortelo-border relative overflow-hidden bg-gradient-to-br from-[#0B0F19]/80 via-[#07090E] to-[#0B0F19]/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cortelo-mint/30 bg-cortelo-mint/10 text-cortelo-mint text-xs font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>OWASP ASVS Level 2 Hardened Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-cortelo-text uppercase tracking-tight">
                Zero-Retention Private Model Enclaves.
              </h2>
              <p className="text-xs sm:text-sm text-cortelo-muted max-w-xl font-light leading-relaxed">
                Client data never crosses insecure inference boundaries. We deploy models directly inside your VPC (AWS, GCP, Azure, or on-premise clusters) with end-to-end cryptographic mutual TLS and automated vulnerability scans.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <div className="p-4 rounded-xl border border-cortelo-border bg-[#07090E]/80 text-xs font-mono space-y-1">
                <div className="text-cortelo-mint font-semibold">SSRF & Prompt Injection Defense</div>
                <div className="text-cortelo-muted">Deterministic regex and AST semantic AST token sandboxing.</div>
              </div>
              <div className="p-4 rounded-xl border border-cortelo-border bg-[#07090E]/80 text-xs font-mono space-y-1">
                <div className="text-cortelo-mint font-semibold">Cryptographic IP Ownership</div>
                <div className="text-cortelo-muted">Full source repository transfer, zero vendor locks.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. FAQ & BRIEFING */}
      {/* ======================================================== */}
      <section className="py-24 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-cortelo-border/60">
        <FAQAccordion />
      </section>

    </div>
  );
}
