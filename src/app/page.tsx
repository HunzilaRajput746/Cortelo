"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  ShieldCheck,
  Zap,
  ArrowRight,
  User,
  MessageSquare,
  Award,
  CheckCircle2,
  Terminal,
  Server,
  Layers,
  ChevronRight,
} from "lucide-react";
import ServiceTabs from "@/components/ServiceTabs";
import FAQAccordion from "@/components/FAQAccordion";
import WorkCarousel from "@/components/WorkCarousel";
import TeamsSection from "@/components/TeamsSection";
import SystemEstimator from "@/components/SystemEstimator";
import { useAgencyShell } from "@/components/ClientShell";
import { FOUNDER_DATA, AGENCY_PROJECTS } from "@/lib/agencyData";

export default function HomePage() {
  const { openDrawer, openFounderModal, openProjectModal } = useAgencyShell();

  const heroFeaturedProjects = AGENCY_PROJECTS.slice(0, 3);

  return (
    <div className="relative z-10 w-full overflow-hidden">
      
      {/* ======================================================== */}
      {/* 0. LIVE STREAMING TELEMETRY TICKER */}
      {/* ======================================================== */}
      <div className="pt-24 pb-2 border-b border-cortelo-border/40 bg-[#07090E]/60 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between text-[11px] font-mono text-cortelo-muted overflow-x-auto scrollbar-none whitespace-nowrap gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cortelo-mint animate-pulse" />
            <span className="text-cortelo-text font-bold uppercase">LIVE PRODUCTION FLEET:</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://dashboard.revenue.inc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cortelo-mint transition-colors flex items-center gap-1.5"
            >
              <span>Revenue.inc CRM (dashboard.revenue.inc)</span>
              <span className="text-cortelo-mint">● 28ms P99</span>
            </a>
            <span className="text-cortelo-border">//</span>
            <a
              href="https://dashboard.c17.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <span>C17 CRM (dashboard.c17.ai)</span>
              <span className="text-cyan-400">● AI Lead Active</span>
            </a>
            <span className="text-cortelo-border">//</span>
            <a
              href="https://n8n.devhunzila.site"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-400 transition-colors flex items-center gap-1.5"
            >
              <span>Oracle VPS n8n (n8n.devhunzila.site)</span>
              <span className="text-rose-400">● 1.24M Executions</span>
            </a>
            <span className="text-cortelo-border">//</span>
            <span className="text-cortelo-mint font-semibold">100% IP HANDOVER GUARANTEED</span>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. ULTRA-REALISTIC 4K HERO LAUNCHPAD */}
      {/* ======================================================== */}
      <section className="relative min-h-[92vh] pt-12 pb-16 px-6 sm:px-10 flex flex-col justify-between max-w-[1440px] mx-auto">
        
        {/* Main Hero Row: Kinetic Headline + 3D Holographic Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-auto">
          
          {/* Left: Headline & Founder Endorsement (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Founder Credentials Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 p-1.5 pr-4 rounded-full border border-cortelo-mint/40 bg-cortelo-mint/10 text-xs font-mono">
              <span className="px-2.5 py-0.5 rounded-full bg-cortelo-mint text-black font-bold text-[10px] uppercase">
                Enterprise AI Studio
              </span>
              <span className="text-cortelo-text">Directed by</span>
              <button
                onClick={openFounderModal}
                className="text-cortelo-mint font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Hunzila Nisar</span>
                <User className="w-3 h-3" />
              </button>
              <span className="text-cortelo-muted hidden sm:inline">&bull; BSc AI Honors</span>
            </div>

            {/* Giant Kinetic Typography */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-7xl xl:text-[86px] font-black tracking-[-0.04em] uppercase text-cortelo-text leading-[0.92]">
                CORTELO
              </h1>
              <div className="text-5xl sm:text-7xl xl:text-[86px] font-black tracking-[-0.04em] text-cortelo-text leading-[0.92]">
                Systems of
              </div>
              <div className="text-5xl sm:text-7xl xl:text-[86px] font-black tracking-[-0.04em] bg-clip-text text-transparent bg-gradient-to-r from-cortelo-text via-cortelo-mint to-cyan-400 leading-[0.92]">
                Intelligence.
              </div>
            </div>

            {/* Detailed Agency Scope Prose */}
            <p className="text-sm sm:text-base text-cortelo-muted max-w-xl font-light leading-relaxed">
              We architect and deploy custom enterprise sales CRMs (like <strong>Revenue.inc</strong> &amp; <strong>C17 CRM</strong>), autonomous multi-agent swarms, self-hosted cloud automation engines, and high-performance full-stack web platforms on dedicated private VPS infrastructure.
            </p>

            {/* High-Impact Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openDrawer()}
                className="px-8 py-4 rounded-full bg-cortelo-mint text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-[0_0_30px_rgba(45,212,167,0.4)] flex items-center gap-2"
              >
                <span>Initiate Project Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={openFounderModal}
                className="px-6 py-4 rounded-full border border-cortelo-mint/40 bg-cortelo-surface/80 text-cortelo-text hover:border-cortelo-mint hover:text-cortelo-mint font-mono text-xs transition-all flex items-center gap-2 group shadow-md"
              >
                <Award className="w-4 h-4 text-cortelo-mint group-hover:scale-110 transition-transform" />
                <span>Founder Portfolio (devhunzila.site)</span>
                <ExternalLink className="w-3 h-3 text-cortelo-muted" />
              </button>

              <a
                href={FOUNDER_DATA.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-4 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 hover:bg-green-500/20 font-mono text-xs transition-all flex items-center gap-2"
              >
                <span>Hire on Fiverr</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-cortelo-muted">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cortelo-mint" />
                100% Intellectual Property Handover
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cortelo-mint" />
                Zero Ongoing Per-Seat SaaS Taxes
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cortelo-mint" />
                Private Tailscale VPS Mesh
              </span>
            </div>

          </div>

          {/* Right: 3D Holographic Refractive Prism + Live Telemetry Cards (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-[340px] sm:w-[440px] aspect-square flex items-center justify-center">
              
              {/* Radial Dispersion Background Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cortelo-mint/25 via-cyan-400/20 to-purple-600/20 filter blur-[80px] pointer-events-none" />

              {/* Central Floating 3D Crystal */}
              <div className="relative z-10 w-full h-full flex items-center justify-center animate-float">
                <Image
                  src="/assets/images/crystal_prism.png"
                  alt="Cortelo Systems of Intelligence 3D Refractive Prism"
                  width={440}
                  height={440}
                  priority
                  className="w-full h-auto object-contain filter drop-shadow-[0_25px_60px_rgba(45,212,167,0.3)] select-none pointer-events-none"
                />
              </div>

              {/* Floating Widget 1: Revenue.inc CRM Live MRR */}
              <div className="absolute -top-4 -left-4 z-20 p-3 sm:p-3.5 rounded-xl glass-panel border border-cortelo-mint/50 bg-[#0B0F19]/90 shadow-2xl space-y-1 animate-pulse-slow">
                <div className="flex items-center gap-2 text-[10px] font-mono text-cortelo-mint">
                  <span className="w-2 h-2 rounded-full bg-cortelo-mint" />
                  <span>REVENUE.INC (LIVE)</span>
                </div>
                <div className="text-sm sm:text-base font-black text-cortelo-text font-mono">
                  $124,800 Signed MRR
                </div>
                <div className="text-[10px] font-mono text-cortelo-muted">
                  Tailscale VPS &bull; P99 &lt; 28ms
                </div>
              </div>

              {/* Floating Widget 2: Self-Hosted n8n Engine */}
              <div className="absolute -bottom-6 -right-2 z-20 p-3 sm:p-3.5 rounded-xl glass-panel border border-cyan-400/50 bg-[#0B0F19]/90 shadow-2xl space-y-1">
                <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>N8N AUTOMATION ENGINE</span>
                </div>
                <div className="text-sm sm:text-base font-black text-cortelo-text font-mono">
                  1,240,000+ Executions
                </div>
                <div className="text-[10px] font-mono text-cortelo-muted">
                  Oracle VPS &bull; 0 SaaS Limits
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Lower Hero Shelf: Production Showcase Cards + Studio Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10 mt-8 border-t border-cortelo-border/70">
          
          {/* Left Column (8 cols): 3 Live Production Highlights */}
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-cortelo-muted">
              <span className="tracking-wider uppercase flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-cortelo-mint" />
                Featured Live Deployments &bull; Click to Inspect
              </span>
              <Link href="/#work" className="text-cortelo-mint hover:underline">
                View All Systems &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {heroFeaturedProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => openProjectModal(project)}
                  className="glass-panel rounded-xl p-3.5 border border-cortelo-border hover:border-cortelo-mint/70 transition-all flex flex-col justify-between group cursor-pointer bg-[#0F131D]/80"
                >
                  <div className="h-28 rounded-lg bg-[#07090E] relative overflow-hidden mb-3 border border-cortelo-border/60">
                    <Image
                      src={project.previewImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-black/80 border border-cortelo-mint/50 text-cortelo-mint">
                      {project.status.split(" ")[0]}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs font-bold text-cortelo-text uppercase truncate">
                      {project.title.split("—")[0]}
                    </div>
                    <div className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-cortelo-muted">{project.metrics.primaryLabel}:</span>
                      <strong className="text-cortelo-mint">{project.metrics.primaryValue}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (4 cols): Studio Leadership Showcase */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-cortelo-muted tracking-wider uppercase">
              <span>Studio Leadership</span>
              <button
                onClick={openFounderModal}
                className="text-cortelo-mint hover:underline text-[11px]"
              >
                Full Bio &rarr;
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Hunzila Nisar */}
              <div
                onClick={openFounderModal}
                className="glass-panel rounded-xl p-3 border border-cortelo-border flex flex-col items-center text-center space-y-2 group hover:border-cortelo-mint transition-all cursor-pointer bg-[#0F131D]/80"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-cortelo-border relative shadow-lg">
                  <Image
                    src="/assets/team/hunzila_nisar.jpg"
                    alt="Hunzila Nisar - Founder of Cortelo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-cortelo-text leading-tight group-hover:text-cortelo-mint transition-colors">
                    Hunzila Nisar
                  </div>
                  <div className="text-[10px] font-mono text-cortelo-muted leading-tight mt-0.5">
                    Founder &bull; Lead Architect
                  </div>
                </div>
              </div>

              {/* Mahreen Hashir */}
              <div
                onClick={() => openDrawer("Briefing directed to Co-Founder Mahreen Hashir")}
                className="glass-panel rounded-xl p-3 border border-cortelo-border flex flex-col items-center text-center space-y-2 group hover:border-cortelo-mint transition-all cursor-pointer bg-[#0F131D]/80"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-cortelo-border relative shadow-lg">
                  <Image
                    src="/assets/team/mahreen_hashir.jpg"
                    alt="Mahreen Hashir - Co-Founder"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-cortelo-text leading-tight group-hover:text-cortelo-mint transition-colors">
                    Mahreen Hashir
                  </div>
                  <div className="text-[10px] font-mono text-cortelo-muted leading-tight mt-0.5">
                    Co-Founder &bull; Systems
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* ======================================================== */}
      {/* 2. SERVICES & TECHNICAL DISCIPLINES (Interactive) */}
      {/* ======================================================== */}
      <section id="systems" className="py-24 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-cortelo-border">
        <ServiceTabs />
      </section>

      {/* ======================================================== */}
      {/* 3. VERIFIED PRODUCTION DEPLOYMENTS & CRMs (WorkCarousel) */}
      {/* ======================================================== */}
      <section id="work" className="py-24 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-cortelo-border">
        <WorkCarousel />
      </section>

      {/* ======================================================== */}
      {/* 4. FOUNDER SPOTLIGHT BANNER (devhunzila.site) */}
      {/* ======================================================== */}
      <section className="py-20 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-cortelo-border">
        <div className="glass-panel rounded-2xl p-8 sm:p-12 border border-cortelo-mint/40 bg-gradient-to-br from-[#0B0F19] to-[#07090E] relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cortelo-mint/40 bg-cortelo-mint/10 text-[11px] font-mono text-cortelo-mint font-semibold uppercase">
                <Award className="w-3.5 h-3.5" />
                Founder Spotlight &bull; Verified Credentials
              </div>
              <h3 className="text-3xl sm:text-5xl font-black uppercase text-cortelo-text tracking-tight">
                Engineering Led by Hunzila Nisar.
              </h3>
              <p className="text-sm text-cortelo-muted leading-relaxed font-light max-w-2xl">
                BSc in Artificial Intelligence with A+ distinction. Seasoned industry experience spanning Blizon Software House, EnlivenAI Solutions, and NAVTTC. Architect of live corporate CRMs (Revenue.inc &amp; C17 CRM) and self-hosted n8n automation engines. Explore complete academic and project credentials on his personal website.
              </p>
              
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={FOUNDER_DATA.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-cortelo-mint text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_20px_rgba(45,212,167,0.35)] flex items-center gap-2"
                >
                  <span>Open devhunzila.site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={openFounderModal}
                  className="px-5 py-3 rounded-full border border-cortelo-border bg-cortelo-surface hover:border-cortelo-mint text-cortelo-text text-xs font-mono transition-all flex items-center gap-2"
                >
                  <User className="w-3.5 h-3.5 text-cortelo-mint" />
                  <span>Inspect Verified Profile</span>
                </button>

                <a
                  href={FOUNDER_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 text-xs font-mono transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Direct (+92 318 6326746)</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-cortelo-mint/50 relative shadow-[0_0_40px_rgba(45,212,167,0.25)]">
                <Image
                  src="/assets/team/hunzila_nisar.jpg"
                  alt="Hunzila Nisar - Founder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. MULTIDISCIPLINARY TEAMS (TeamsSection) */}
      {/* ======================================================== */}
      <section id="teams" className="py-24 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-cortelo-border">
        <TeamsSection onInitiateProject={(divName) => openDrawer(`Inquiry for: ${divName}`)} />
      </section>

      {/* ======================================================== */}
      {/* 6. INTERACTIVE SCOPE ARCHITECT & ESTIMATOR */}
      {/* ======================================================== */}
      <section id="blueprint" className="py-24 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-cortelo-border">
        <SystemEstimator onOpenDrawerWithConfig={(config) => openDrawer(config)} />
      </section>

      {/* ======================================================== */}
      {/* 7. DELIVERY PROCESS & 4 MILESTONES */}
      {/* ======================================================== */}
      <section id="process" className="py-24 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-cortelo-border">
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-cortelo-mint font-semibold">
            Delivery Framework &bull; 06
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-cortelo-text mt-2 uppercase">
            Transparent, Milestone-Driven Execution.
          </h2>
          <p className="text-sm text-cortelo-muted mt-2 max-w-lg font-light">
            Zero ambiguous discovery retainers. Every system follows four structured milestones with verified acceptance tests before deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-8 rounded-2xl glass-panel border border-cortelo-border flex flex-col justify-between bg-[#0F131D]/80">
            <div>
              <div className="text-xs font-mono text-cortelo-mint font-bold mb-4">MILESTONE 01</div>
              <h3 className="text-lg font-bold text-cortelo-text mb-2 uppercase">Technical Discovery</h3>
              <p className="text-xs text-cortelo-muted leading-relaxed font-light">
                Schema mapping, VPS topology design, model selection benchmarks, and precise latency budget definitions.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-cortelo-border text-[11px] font-mono text-cortelo-muted">
              Week 1 &bull; Architectural Blueprint
            </div>
          </div>

          <div className="p-8 rounded-2xl glass-panel border border-cortelo-border flex flex-col justify-between bg-[#0F131D]/80">
            <div>
              <div className="text-xs font-mono text-cortelo-mint font-bold mb-4">MILESTONE 02</div>
              <h3 className="text-lg font-bold text-cortelo-text mb-2 uppercase">Core Engine &amp; Pipelines</h3>
              <p className="text-xs text-cortelo-muted leading-relaxed font-light">
                Database schemas, n8n webhook pipelines, AI agent swarms, deterministic guardrails, and staging benchmarks.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-cortelo-border text-[11px] font-mono text-cortelo-muted">
              Weeks 2–3 &bull; Staging Benchmarks
            </div>
          </div>

          <div className="p-8 rounded-2xl glass-panel border border-cortelo-border flex flex-col justify-between bg-[#0F131D]/80">
            <div>
              <div className="text-xs font-mono text-cortelo-mint font-bold mb-4">MILESTONE 03</div>
              <h3 className="text-lg font-bold text-cortelo-text mb-2 uppercase">Platform Integration</h3>
              <p className="text-xs text-cortelo-muted leading-relaxed font-light">
                Full-stack Next.js/React interface integration, Tailscale secure mesh configuration, and ASVS L2 security hardening.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-cortelo-border text-[11px] font-mono text-cortelo-muted">
              Weeks 4–5 &bull; Full Integration
            </div>
          </div>

          <div className="p-8 rounded-2xl glass-panel border border-cortelo-border flex flex-col justify-between bg-[#0F131D]/80">
            <div>
              <div className="text-xs font-mono text-cortelo-mint font-bold mb-4">MILESTONE 04</div>
              <h3 className="text-lg font-bold text-cortelo-text mb-2 uppercase">Handover &amp; Telemetry</h3>
              <p className="text-xs text-cortelo-muted leading-relaxed font-light">
                Production deployment on your private tenant, monitoring telemetry, documentation, and 100% IP code transfer.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-cortelo-border text-[11px] font-mono text-cortelo-muted">
              Week 6 &bull; 100% IP Handover
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      {/* ======================================================== */}
      <section className="py-24 px-6 sm:px-10 max-w-[900px] mx-auto border-t border-cortelo-border">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-cortelo-mint font-semibold">
            Assurance &amp; Standards &bull; 07
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-cortelo-text mt-2 uppercase">
            Frequently Asked Questions.
          </h2>
        </div>
        <FAQAccordion />
      </section>

      {/* ======================================================== */}
      {/* 9. FINAL EXECUTIVE COMMISSIONING BANNER */}
      {/* ======================================================== */}
      <section className="py-28 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-cortelo-border text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-mono text-cortelo-mint tracking-widest uppercase font-semibold">
            Direct Founder Access &bull; 24h Response
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase text-cortelo-text">
            Let&apos;s Engineer Your Advantage.
          </h2>
          <p className="text-base text-cortelo-muted leading-relaxed font-light">
            Schedule an architectural discovery session directly with <strong>Hunzila Nisar</strong> and <strong>Mahreen Hashir</strong>. We assess your latency objectives, custom CRM requirements, and data privacy needs.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openDrawer()}
              className="px-10 py-4 rounded-full bg-cortelo-mint text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-[0_0_30px_rgba(45,212,167,0.4)]"
            >
              Initiate Project Briefing
            </button>
            <a
              href={FOUNDER_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 text-xs font-mono transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct (+92 318 6326746)</span>
            </a>
            <a
              href="mailto:hello@cortelo.ai"
              className="text-xs font-mono text-cortelo-muted hover:text-white underline"
            >
              hello@cortelo.ai
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
