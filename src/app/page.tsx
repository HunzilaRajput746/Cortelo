import React from "react";
import Link from "next/link";
import Image from "next/image";
import WorkCarousel from "@/components/WorkCarousel";
import ServiceTabs from "@/components/ServiceTabs";
import FAQAccordion from "@/components/FAQAccordion";

export default function HomePage() {
  return (
    <main className="relative z-10">
      {/* HERO SECTION */}
      <section className="min-h-screen pt-36 pb-24 md:pt-44 md:pb-32 flex flex-col justify-center px-6">
        <div className="max-w-[1360px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Kinetic Typography */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cortelo-border bg-cortelo-surface/60 text-xs font-mono text-cortelo-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-cortelo-mint animate-pulse" />
                <span>INDEPENDENT AI & SOFTWARE PRACTICE</span>
              </div>

              <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-[-0.04em] leading-[0.95] uppercase text-cortelo-text">
                Systems of<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cortelo-text via-cortelo-text to-cortelo-mint">
                  Intelligence.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-cortelo-muted max-w-xl font-light leading-relaxed">
                Cortelo designs, trains, and ships bespoke artificial intelligence architectures, autonomous agents, and resilient enterprise software platforms from model to interface.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-cortelo-mint text-black font-bold text-sm uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-[0_0_30px_rgba(45,212,167,0.4)]"
                >
                  Commission Architecture
                </Link>
                <Link
                  href="/work"
                  className="px-8 py-4 rounded-full border border-cortelo-border hover:border-cortelo-mint text-cortelo-text font-semibold text-sm uppercase tracking-wider transition-all"
                >
                  Inspect Selected Work
                </Link>
              </div>

              {/* Coordinate Telemetry Row */}
              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-cortelo-border text-xs font-mono">
                <div>
                  <div className="text-cortelo-muted">CORE LATENCY</div>
                  <div className="text-xl font-bold text-cortelo-text mt-1">P99 &lt; 42ms</div>
                </div>
                <div>
                  <div className="text-cortelo-muted">VERIFIED ACCURACY</div>
                  <div className="text-xl font-bold text-cortelo-mint mt-1">99.8%</div>
                </div>
                <div>
                  <div className="text-cortelo-muted">IP OWNERSHIP</div>
                  <div className="text-xl font-bold text-cortelo-text mt-1">100% Client</div>
                </div>
              </div>
            </div>

            {/* Central Refractive 3D Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-cortelo-mint/15 filter blur-[80px]" />

                <div className="relative z-10 w-full h-full rounded-2xl glass-panel p-6 flex flex-col justify-between overflow-hidden shadow-2xl animate-float border border-cortelo-borderHover">
                  <div className="flex items-center justify-between text-xs font-mono text-cortelo-muted">
                    <span>CORTELO &bull; CORE 01</span>
                    <span className="text-cortelo-mint">NEURAL BUS</span>
                  </div>

                  <svg className="w-full h-64 my-auto" viewBox="0 0 300 300" fill="none">
                    <defs>
                      <linearGradient id="prismGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2DD4A7" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="#00D2FF" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#9D00FF" stopOpacity="0.3" />
                      </linearGradient>
                      <linearGradient id="facetGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#2DD4A7" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>

                    <polygon
                      points="150,30 250,90 220,230 80,230 50,90"
                      stroke="url(#prismGrad)"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    <polygon
                      points="150,30 180,120 150,210 120,120"
                      stroke="#2DD4A7"
                      strokeWidth="1.5"
                      fill="url(#facetGrad)"
                    />
                    <line x1="150" y1="30" x2="220" y2="230" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    <line x1="150" y1="30" x2="80" y2="230" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    <line x1="50" y1="90" x2="180" y2="120" stroke="rgba(45,212,167,0.5)" strokeWidth="1" />
                    <line x1="250" y1="90" x2="120" y2="120" stroke="rgba(45,212,167,0.5)" strokeWidth="1" />
                    <circle cx="150" cy="150" r="14" fill="#2DD4A7" className="animate-ping" opacity="0.3" />
                    <circle cx="150" cy="150" r="8" fill="#F2F0EA" />
                  </svg>

                  <div className="flex items-center justify-between text-xs font-mono text-cortelo-muted pt-4 border-t border-cortelo-border">
                    <span>ARCHITECTURE &bull; MODEL-TO-INTERFACE</span>
                    <span className="text-cortelo-text font-semibold">LIVE STREAM</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TECH STRIP */}
      <section className="py-10 border-y border-cortelo-border bg-cortelo-surface/40">
        <div className="max-w-[1360px] mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 opacity-60 text-xs font-mono font-semibold tracking-wider">
            <span>PYTORCH</span>
            <span>LANGCHAIN</span>
            <span>NEXT.JS APP ROUTER</span>
            <span>POSTGRESQL</span>
            <span>DOCKER</span>
            <span>AMAZON WEB SERVICES</span>
            <span>GOOGLE CLOUD</span>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="systems" className="py-28 px-6">
        <div className="max-w-[1360px] mx-auto">
          <ServiceTabs />
        </div>
      </section>

      {/* WORK / SELECTED REELS */}
      <section id="work" className="py-28 px-6 border-y border-cortelo-border bg-cortelo-surface/20">
        <div className="max-w-[1360px] mx-auto">
          <WorkCarousel />
        </div>
      </section>

      {/* HOW WE WORK (4 Structured Stages) */}
      <section id="process" className="py-28 px-6 border-b border-cortelo-border">
        <div className="max-w-[1360px] mx-auto">
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
        </div>
      </section>

      {/* FOUNDERS & STUDIO LEADERSHIP */}
      <section id="founders" className="py-28 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-mono text-cortelo-mint tracking-widest uppercase">
              04 &bull; Studio Leadership
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight uppercase text-cortelo-text mt-2">
              The Principals Behind Cortelo.
            </h2>
            <p className="text-sm text-cortelo-muted mt-3 font-light">
              Senior software engineers who build, architect, and take personal responsibility for every deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Founder 1: Hunzila Nisar */}
            <div className="glass-panel rounded-2xl p-8 relative overflow-hidden group hover:border-cortelo-mint transition-all">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-32 h-32 rounded-2xl overflow-hidden border border-cortelo-border shrink-0 shadow-xl relative">
                  <Image
                    src="/assets/team/hunzila_nisar.jpg"
                    alt="Hunzila Nisar"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-xs font-mono text-cortelo-mint tracking-wider uppercase font-semibold">
                    Founder & Lead AI Architect
                  </span>
                  <h3 className="text-2xl font-black uppercase text-cortelo-text mt-1">
                    Hunzila Nisar
                  </h3>
                  <p className="text-xs text-cortelo-muted mt-2 leading-relaxed font-light">
                    Specializing in autonomous multi-agent orchestration, neural pipeline latency optimization, and enterprise full-stack system architecture.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start text-[11px] font-mono text-cortelo-muted">
                    <span className="px-2.5 py-0.5 rounded bg-cortelo-surface border border-cortelo-border">
                      Agentic Systems
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-cortelo-surface border border-cortelo-border">
                      PyTorch
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-cortelo-surface border border-cortelo-border">
                      Next.js 15
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder 2: Mahreen Hashir */}
            <div className="glass-panel rounded-2xl p-8 relative overflow-hidden group hover:border-cortelo-mint transition-all">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-32 h-32 rounded-2xl overflow-hidden border border-cortelo-border shrink-0 shadow-xl relative">
                  <Image
                    src="/assets/team/mahreen_hashir.jpg"
                    alt="Mahreen Hashir"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-xs font-mono text-cortelo-mint tracking-wider uppercase font-semibold">
                    Co-Founder & Head of Systems
                  </span>
                  <h3 className="text-2xl font-black uppercase text-cortelo-text mt-1">
                    Mahreen Hashir
                  </h3>
                  <p className="text-xs text-cortelo-muted mt-2 leading-relaxed font-light">
                    Directing model evaluation benches, zero-hallucination deterministic guardrails, high-volume MLOps, and enterprise security perimeters.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start text-[11px] font-mono text-cortelo-muted">
                    <span className="px-2.5 py-0.5 rounded bg-cortelo-surface border border-cortelo-border">
                      Deterministic Eval
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-cortelo-surface border border-cortelo-border">
                      MLOps & Cloud
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-cortelo-surface border border-cortelo-border">
                      ASVS L2
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-28 px-6 border-y border-cortelo-border bg-cortelo-surface/20">
        <div className="max-w-[860px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-cortelo-mint font-semibold">
              Terms & Assurance
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-cortelo-text mt-2 uppercase">
              Frequently Asked Questions.
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="py-32 px-6">
        <div className="max-w-[1360px] mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-mono text-cortelo-mint tracking-widest uppercase">
              Start an Engagement
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase text-cortelo-text">
              Let&apos;s Engineer Your Advantage.
            </h2>
            <p className="text-base text-cortelo-muted leading-relaxed font-light">
              Schedule an architectural discovery session directly with Hunzila Nisar and Mahreen Hashir.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-10 py-4 rounded-full bg-cortelo-mint text-black font-bold text-sm uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-[0_0_30px_rgba(45,212,167,0.4)]"
              >
                Initiate Project
              </Link>
              <a
                href="mailto:hello@cortelo.ai"
                className="text-xs font-mono text-cortelo-muted hover:text-white underline"
              >
                hello@cortelo.ai
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
