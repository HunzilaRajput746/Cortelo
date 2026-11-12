"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, Sparkles, Terminal, Code2, ExternalLink, Award, MessageSquare, CheckCircle } from "lucide-react";
import { FOUNDER_DATA } from "@/lib/agencyData";
import { useAgencyShell } from "@/components/ClientShell";
import TeamsSection from "@/components/TeamsSection";

export default function AboutPage() {
  const { openDrawer, openFounderModal } = useAgencyShell();

  return (
    <main className="min-h-screen pt-36 pb-24 px-6 relative z-10">
      <div className="max-w-[1440px] mx-auto space-y-24">

        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cortelo-mint/40 bg-cortelo-mint/10 text-xs font-mono text-cortelo-mint font-semibold uppercase">
            <span>Studio Leadership &bull; 04 About</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-cortelo-text">
            Intelligence, Engineered.
          </h1>
          <p className="text-base text-cortelo-muted leading-relaxed font-light">
            Cortelo was founded on a simple premise: enterprise AI does not need more Twitter demos or marketing hype. It needs resilient, predictable software engineering that operates seamlessly on Monday morning.
          </p>
        </div>

        {/* Founders Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Hunzila Nisar */}
          <div className="glass-panel rounded-2xl p-8 md:p-10 border border-cortelo-mint/40 space-y-6 bg-[#0F131D]/90 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-cortelo-mint/50 shrink-0 shadow-2xl relative">
                <Image
                  src="/assets/team/hunzila_nisar.jpg"
                  alt="Hunzila Nisar - Founder & Lead AI Architect"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left space-y-1">
                <span className="text-xs font-mono text-cortelo-mint uppercase tracking-wider font-semibold">
                  Founder &amp; Lead AI Architect
                </span>
                <h2 className="text-3xl font-black uppercase text-cortelo-text">
                  Hunzila Nisar
                </h2>
                <p className="text-xs font-mono text-cortelo-muted">
                  BSc in Artificial Intelligence (A+ Grade Honors)
                </p>
                <p className="text-xs font-mono text-cortelo-muted">
                  Blizon Software House &bull; EnlivenAI Solutions &bull; BuiltinSoft
                </p>
              </div>
            </div>

            <p className="text-sm text-cortelo-muted leading-relaxed font-light">
              Hunzila leads the engineering practice at Cortelo. He delivers end-to-end production client systems, including live commercial sales CRMs (<strong>Revenue.inc</strong> &amp; <strong>C17 CRM</strong>) and self-hosted n8n automation infrastructure running on private Tailscale VPS meshes. Certified with highest distinction (A+ Grade) by NAVTTC in Machine Learning &amp; Deep Learning.
            </p>

            {/* Distinctions Checklist */}
            <div className="space-y-2 pt-2 border-t border-cortelo-border">
              <div className="text-[11px] font-mono uppercase text-cortelo-muted">
                Key Accomplishments:
              </div>
              <ul className="space-y-1.5 text-xs font-mono text-cortelo-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cortelo-mint" />
                  <span>Architect of Revenue.inc CRM (dashboard.revenue.inc)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cortelo-mint" />
                  <span>Smart Helmet IoT Crash Detection System (A+ Grade FYP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cortelo-mint" />
                  <span>Self-Hosted n8n Automation Engine (n8n.devhunzila.site)</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-cortelo-border flex flex-wrap gap-2.5">
              <a
                href={FOUNDER_DATA.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-cortelo-mint text-black font-mono font-bold text-xs flex items-center gap-1.5 hover:opacity-90 transition-all shadow-md"
              >
                <span>devhunzila.site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={openFounderModal}
                className="px-4 py-2 rounded-full border border-cortelo-border bg-cortelo-surface hover:border-cortelo-mint text-xs font-mono text-cortelo-text transition-all"
              >
                Inspect Credentials
              </button>
              <a
                href={FOUNDER_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 text-xs font-mono transition-all flex items-center gap-1.5"
              >
                <MessageSquare className="w-3 h-3" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Mahreen Hashir */}
          <div className="glass-panel rounded-2xl p-8 md:p-10 border border-cortelo-border space-y-6 bg-[#0F131D]/90 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-32 h-32 rounded-2xl overflow-hidden border border-cortelo-border shrink-0 shadow-2xl relative">
                <Image
                  src="/assets/team/mahreen_hashir.jpg"
                  alt="Mahreen Hashir - Co-Founder & Head of Systems"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left space-y-1">
                <span className="text-xs font-mono text-cortelo-mint uppercase tracking-wider font-semibold">
                  Co-Founder &amp; Head of Systems
                </span>
                <h2 className="text-3xl font-black uppercase text-cortelo-text">
                  Mahreen Hashir
                </h2>
                <p className="text-xs font-mono text-cortelo-muted">
                  Model Evaluation &bull; Continuous MLOps &bull; Security
                </p>
                <p className="text-xs font-mono text-cortelo-muted">
                  OWASP ASVS L2 &bull; Deterministic Verification Benches
                </p>
              </div>
            </div>

            <p className="text-sm text-cortelo-muted leading-relaxed font-light">
              Mahreen directs system reliability, deterministic verification guardrails, and enterprise security perimeters at Cortelo. She oversees continuous model retraining pipelines, dataset drift evaluation benches, and compliance with OWASP ASVS Level 2 security standards across all client deployments.
            </p>

            <div className="space-y-2 pt-2 border-t border-cortelo-border">
              <div className="text-[11px] font-mono uppercase text-cortelo-muted">
                Governance &amp; Quality Focus:
              </div>
              <ul className="space-y-1.5 text-xs font-mono text-cortelo-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cortelo-mint" />
                  <span>Deterministic Zod / Pydantic schema validation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cortelo-mint" />
                  <span>Zero-drift continuous model evaluation loops</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cortelo-mint" />
                  <span>100% intellectual property transfer governance</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-cortelo-border">
              <button
                onClick={() => openDrawer("Direct engagement request with Mahreen Hashir")}
                className="px-6 py-2.5 rounded-full bg-cortelo-surface border border-cortelo-border hover:border-cortelo-mint hover:text-cortelo-mint text-xs font-mono transition-all"
              >
                Engage Systems Governance &rarr;
              </button>
            </div>
          </div>

        </div>

        {/* Specialized Teams Section */}
        <div className="pt-8 border-t border-cortelo-border">
          <TeamsSection onInitiateProject={(div) => openDrawer(`Inquiry for ${div}`)} />
        </div>

        {/* Studio Principles */}
        <div className="space-y-8 pt-8 border-t border-cortelo-border">
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-cortelo-text">
            Studio Engineering Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-xl border border-cortelo-border space-y-3 bg-[#0F131D]/80">
              <Terminal className="w-6 h-6 text-cortelo-mint" />
              <h3 className="text-lg font-bold uppercase text-cortelo-text">1. Zero Vibe-Coding</h3>
              <p className="text-xs text-cortelo-muted leading-relaxed font-light">
                Every line of code is structured, strictly typed, and verified against tests. No generic templates, no unexplained gradients, no ungrounded outputs.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-cortelo-border space-y-3 bg-[#0F131D]/80">
              <Shield className="w-6 h-6 text-cyan-400" />
              <h3 className="text-lg font-bold uppercase text-cortelo-text">2. 100% IP Handover</h3>
              <p className="text-xs text-cortelo-muted leading-relaxed font-light">
                We believe you must own your intelligence assets. We transfer full, unencumbered rights to all code, checkpoints, and infrastructure upon final milestone acceptance.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-cortelo-border space-y-3 bg-[#0F131D]/80">
              <Code2 className="w-6 h-6 text-purple-400" />
              <h3 className="text-lg font-bold uppercase text-cortelo-text">3. Deterministic Proofs</h3>
              <p className="text-xs text-cortelo-muted leading-relaxed font-light">
                AI systems cannot be probabilistic gambles. We wrap LLMs in deterministic Zod schemas, finite-state harnesses, and regression test suites.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-12 border-t border-cortelo-border text-center space-y-4">
          <h3 className="text-2xl font-bold uppercase text-cortelo-text">
            Ready to Build With Hunzila &amp; Team?
          </h3>
          <p className="text-xs font-mono text-cortelo-muted max-w-md mx-auto">
            Schedule an architectural discovery session with our founding team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openDrawer()}
              className="px-8 py-3.5 rounded-full bg-cortelo-mint text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_20px_rgba(45,212,167,0.3)]"
            >
              Initiate Project Briefing
            </button>
            <a
              href={FOUNDER_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 text-xs font-mono transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct (+92 318 6326746)</span>
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
