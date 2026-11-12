"use client";

import React from "react";
import Image from "next/image";
import { Shield, Terminal, Code2, ExternalLink, MessageSquare, CheckCircle } from "lucide-react";
import { FOUNDER_DATA } from "@/lib/agencyData";
import { useAgencyShell } from "@/components/ClientShell";
import TeamsSection from "@/components/TeamsSection";

export default function AboutPage() {
  const { openDrawer, openFounderModal } = useAgencyShell();

  return (
    <main className="min-h-screen pt-36 pb-24 px-6 relative z-10 bg-[#000000]">
      <div className="max-w-[1440px] mx-auto space-y-24">

        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-white/90 font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4533]" />
            <span>Studio Leadership &bull; 04 About</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#FCFCFA]">
            Intelligence,{" "}
            <span className="font-serif italic font-normal text-white lowercase">Engineered</span>.
          </h1>
          <p className="text-base text-white/60 leading-relaxed font-light">
            Cortelo was founded on a simple premise: enterprise AI does not need more Twitter demos or marketing hype. It needs resilient, predictable software engineering that operates seamlessly on Monday morning.
          </p>
        </div>

        {/* Founders Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Hunzila Nisar */}
          <div className="rounded-3xl p-8 md:p-10 border border-[#FF4533]/50 space-y-6 bg-[#0D0D0D] shadow-[0_0_40px_rgba(255,69,51,0.12)]">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-[#FF4533]/50 shrink-0 shadow-2xl relative">
                <Image
                  src="/assets/team/hunzila_nisar.jpg"
                  alt="Hunzila Nisar - Founder & Lead AI Architect"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left space-y-1">
                <span className="text-xs font-mono text-[#FF4533] uppercase tracking-wider font-semibold">
                  Founder &amp; Lead AI Architect
                </span>
                <h2 className="text-3xl font-black uppercase text-[#FCFCFA]">
                  Hunzila Nisar
                </h2>
                <p className="text-xs font-mono text-white/60">
                  BSc in Artificial Intelligence (A+ Grade Honors)
                </p>
                <p className="text-xs font-mono text-white/50">
                  Blizon Software House &bull; EnlivenAI Solutions &bull; BuiltinSoft
                </p>
              </div>
            </div>

            <p className="text-sm text-white/60 leading-relaxed font-light">
              Hunzila leads the engineering practice at Cortelo. He delivers end-to-end production client systems, including live commercial enterprise CRMs and self-hosted n8n automation infrastructure running on private Tailscale VPS meshes. Certified with highest distinction (A+ Grade) by NAVTTC in Machine Learning &amp; Deep Learning.
            </p>

            {/* Distinctions Checklist */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="text-[11px] font-mono uppercase text-white/50">
                Key Accomplishments:
              </div>
              <ul className="space-y-1.5 text-xs font-mono text-white/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#FF4533]" />
                  <span>Lead Architect of Enterprise Revenue CRM Platforms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#FF4533]" />
                  <span>Smart Helmet IoT Crash Detection System (A+ Grade FYP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#FF4533]" />
                  <span>Self-Hosted n8n Automation Engine (n8n.devhunzila.site)</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2.5">
              <a
                href={FOUNDER_DATA.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-conversion-primary px-4 py-2 rounded-full bg-[#FF4533] hover:bg-[#FF220E] text-white font-mono font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,69,51,0.3)] transition-all"
              >
                <span>devhunzila.site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={openFounderModal}
                className="px-4 py-2 rounded-full border border-white/10 bg-[#141414] hover:border-white/30 text-xs font-mono text-white transition-all cursor-pointer"
              >
                Inspect Credentials
              </button>
              <a
                href={FOUNDER_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-[#FF4533] hover:border-[#FF4533]/40 text-xs font-mono transition-all flex items-center gap-1.5"
              >
                <MessageSquare className="w-3 h-3 text-[#FF4533]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Mahreen Hashir */}
          <div className="rounded-3xl p-8 md:p-10 border border-white/10 space-y-6 bg-[#0D0D0D] shadow-xl">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-32 h-32 rounded-2xl overflow-hidden border border-white/10 shrink-0 shadow-2xl relative bg-[#141414]">
                <Image
                  src="/assets/team/mahreen_hashir.jpg"
                  alt="Mahreen Hashir - Co-Founder & Head of Systems"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left space-y-1">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">
                  Co-Founder &amp; Head of Systems
                </span>
                <h2 className="text-3xl font-black uppercase text-[#FCFCFA]">
                  Mahreen Hashir
                </h2>
                <p className="text-xs font-mono text-white/60">
                  Model Evaluation &bull; Continuous MLOps &bull; Security
                </p>
                <p className="text-xs font-mono text-white/50">
                  OWASP ASVS L2 &bull; Deterministic Verification Benches
                </p>
              </div>
            </div>

            <p className="text-sm text-white/60 leading-relaxed font-light">
              Mahreen directs system reliability, deterministic verification guardrails, and enterprise security perimeters at Cortelo. She oversees continuous model retraining pipelines, dataset drift evaluation benches, and compliance with OWASP ASVS Level 2 security standards across all client deployments.
            </p>

            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="text-[11px] font-mono uppercase text-white/50">
                Governance &amp; Quality Focus:
              </div>
              <ul className="space-y-1.5 text-xs font-mono text-white/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                  <span>Deterministic Zod / Pydantic schema validation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                  <span>Zero-drift continuous model evaluation loops</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                  <span>100% intellectual property transfer governance</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => openDrawer("Direct engagement request with Mahreen Hashir")}
                className="px-6 py-2.5 rounded-full bg-[#141414] border border-white/10 hover:border-purple-400 hover:text-purple-300 text-xs font-mono transition-all text-white cursor-pointer"
              >
                Engage Systems Governance &rarr;
              </button>
            </div>
          </div>

        </div>

        {/* Specialized Teams Section */}
        <div className="pt-8 border-t border-white/10">
          <TeamsSection onInitiateProject={(div) => openDrawer(`Inquiry for ${div}`)} />
        </div>

        {/* Studio Principles */}
        <div className="space-y-8 pt-8 border-t border-white/10">
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#FCFCFA]">
            Studio Engineering Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl p-6 border border-white/10 space-y-3 bg-[#0D0D0D]">
              <Terminal className="w-6 h-6 text-[#FF4533]" />
              <h3 className="text-lg font-bold uppercase text-[#FCFCFA]">1. Zero Vibe-Coding</h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Every line of code is structured, strictly typed, and verified against tests. No generic templates, no unexplained gradients, no ungrounded outputs.
              </p>
            </div>

            <div className="rounded-3xl p-6 border border-white/10 space-y-3 bg-[#0D0D0D]">
              <Shield className="w-6 h-6 text-[#FF4533]" />
              <h3 className="text-lg font-bold uppercase text-[#FCFCFA]">2. 100% IP Handover</h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                We believe you must own your intelligence assets. We transfer full, unencumbered rights to all code, checkpoints, and infrastructure upon final milestone acceptance.
              </p>
            </div>

            <div className="rounded-3xl p-6 border border-white/10 space-y-3 bg-[#0D0D0D]">
              <Code2 className="w-6 h-6 text-[#FF4533]" />
              <h3 className="text-lg font-bold uppercase text-[#FCFCFA]">3. Deterministic Proofs</h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                AI systems cannot be probabilistic gambles. We wrap LLMs in deterministic Zod schemas, finite-state harnesses, and regression test suites.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-12 border-t border-white/10 text-center space-y-4">
          <h3 className="text-2xl font-bold uppercase text-[#FCFCFA]">
            Ready to Build With Hunzila &amp; Team?
          </h3>
          <p className="text-xs font-mono text-white/60 max-w-md mx-auto">
            Schedule an architectural discovery session with our founding team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openDrawer()}
              className="btn-conversion-primary px-8 py-3.5 rounded-full bg-[#FF4533] hover:bg-[#FF220E] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,69,51,0.35)] cursor-pointer"
            >
              Initiate Project Briefing
            </button>
            <a
              href={FOUNDER_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-[#FF4533] hover:border-[#FF4533]/40 text-xs font-mono transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#FF4533]" />
              <span>Initiate Direct Inquiry</span>
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
