import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, Sparkles, Terminal, Code2 } from "lucide-react";

export const metadata = {
  title: "About & Founders — Cortelo",
  description: "Meet the founders and team behind Cortelo: Hunzila Nisar and Mahreen Hashir.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-36 pb-24 px-6 relative z-10">
      <div className="max-w-[1360px] mx-auto space-y-20">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono text-cortelo-mint tracking-widest uppercase">
            04 &bull; Studio & Leadership
          </span>
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
          <div className="glass-panel rounded-2xl p-8 md:p-10 border border-cortelo-border space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-36 h-36 rounded-2xl overflow-hidden border border-cortelo-border shrink-0 shadow-2xl relative">
                <Image
                  src="/assets/team/hunzila_nisar.jpg"
                  alt="Hunzila Nisar - Founder & Lead AI Architect"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <span className="text-xs font-mono text-cortelo-mint uppercase tracking-wider font-semibold">
                  Founder & Lead AI Architect
                </span>
                <h2 className="text-3xl font-black uppercase text-cortelo-text mt-1">
                  Hunzila Nisar
                </h2>
                <p className="text-xs font-mono text-cortelo-muted mt-1">
                  Systems Architecture &bull; Autonomous Multi-Agent Swarms
                </p>
              </div>
            </div>

            <p className="text-sm text-cortelo-muted leading-relaxed font-light">
              Hunzila leads the engineering practice at Cortelo, focusing on distributed agent orchestration, fine-tuned neural models, sub-50ms inference pipelines, and enterprise-grade full-stack architectures. With a focus on architectural integrity, he ensures every system is built to scale deterministically under production workloads.
            </p>

            <div className="pt-4 border-t border-cortelo-border flex flex-wrap gap-2 text-xs font-mono text-cortelo-muted">
              <span className="px-3 py-1 rounded-full border border-cortelo-border bg-cortelo-surface">Agentic Architecture</span>
              <span className="px-3 py-1 rounded-full border border-cortelo-border bg-cortelo-surface">PyTorch / Triton</span>
              <span className="px-3 py-1 rounded-full border border-cortelo-border bg-cortelo-surface">Next.js / TypeScript</span>
            </div>
          </div>

          {/* Mahreen Hashir */}
          <div className="glass-panel rounded-2xl p-8 md:p-10 border border-cortelo-border space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-36 h-36 rounded-2xl overflow-hidden border border-cortelo-border shrink-0 shadow-2xl relative">
                <Image
                  src="/assets/team/mahreen_hashir.jpg"
                  alt="Mahreen Hashir - Co-Founder & Head of Systems"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <span className="text-xs font-mono text-cortelo-mint uppercase tracking-wider font-semibold">
                  Co-Founder & Head of Systems
                </span>
                <h2 className="text-3xl font-black uppercase text-cortelo-text mt-1">
                  Mahreen Hashir
                </h2>
                <p className="text-xs font-mono text-cortelo-muted mt-1">
                  Model Evaluation &bull; Continuous MLOps &bull; Security
                </p>
              </div>
            </div>

            <p className="text-sm text-cortelo-muted leading-relaxed font-light">
              Mahreen directs system reliability, deterministic verification guardrails, and enterprise security perimeters at Cortelo. She oversees continuous model retraining pipelines, dataset drift evaluation benches, and compliance with OWASP ASVS Level 2 security standards across all deployments.
            </p>

            <div className="pt-4 border-t border-cortelo-border flex flex-wrap gap-2 text-xs font-mono text-cortelo-muted">
              <span className="px-3 py-1 rounded-full border border-cortelo-border bg-cortelo-surface">Deterministic Guardrails</span>
              <span className="px-3 py-1 rounded-full border border-cortelo-border bg-cortelo-surface">Continuous MLOps</span>
              <span className="px-3 py-1 rounded-full border border-cortelo-border bg-cortelo-surface">ASVS L2 Security</span>
            </div>
          </div>

        </div>

        {/* Studio Principles */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-cortelo-text">
            Studio Engineering Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-xl border border-cortelo-border space-y-3">
              <Terminal className="w-6 h-6 text-cortelo-mint" />
              <h3 className="text-lg font-bold uppercase text-cortelo-text">1. Zero Vibe-Coding</h3>
              <p className="text-xs text-cortelo-muted leading-relaxed font-light">
                Every line of code is structured, strictly typed, and verified against tests. No generic templates, no unexplained gradients, no ungrounded outputs.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-cortelo-border space-y-3">
              <Shield className="w-6 h-6 text-cortelo-mint" />
              <h3 className="text-lg font-bold uppercase text-cortelo-text">2. Complete IP Sovereignty</h3>
              <p className="text-xs text-cortelo-muted leading-relaxed font-light">
                Clients own 100% of the code, dataset transformations, prompts, and trained model checkpoints from day one. Handover is direct into your private cloud tenant.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-cortelo-border space-y-3">
              <Sparkles className="w-6 h-6 text-cortelo-mint" />
              <h3 className="text-lg font-bold uppercase text-cortelo-text">3. Measured Outcomes</h3>
              <p className="text-xs text-cortelo-muted leading-relaxed font-light">
                Every project has quantifiable benchmarks: latency in milliseconds, accuracy in F1 score/precision, throughput in requests per second.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-12 rounded-2xl glass-panel border border-cortelo-border text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold uppercase text-cortelo-text">
            Speak Directly with Hunzila & Mahreen
          </h2>
          <p className="text-sm text-cortelo-muted max-w-xl mx-auto font-light">
            We hold direct 30-minute technical architecture evaluations for qualifying enterprise AI projects.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-full bg-cortelo-mint text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_20px_rgba(45,212,167,0.3)]"
          >
            Initiate Project Briefing
          </Link>
        </div>

      </div>
    </main>
  );
}
