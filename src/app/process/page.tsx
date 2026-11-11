import React from "react";
import Link from "next/link";
import { CheckCircle2, Shield, Lock, Terminal, Activity, FileCode } from "lucide-react";

export const metadata = {
  title: "Engineering Process — Cortelo",
  description: "The 4-stage delivery framework, security benchmarks, and IP transfer at Cortelo.",
};

const stages = [
  {
    step: "01",
    title: "Technical Discovery & Feasibility",
    duration: "Week 1",
    deliverables: "Architectural Blueprint • Latency Budget • ROI Model",
    description:
      "We audit your internal data pipelines, verify schema readiness, calculate latency requirements, and select the optimal model families (open-weight fine-tunes vs. proprietary models).",
    icon: Terminal,
  },
  {
    step: "02",
    title: "Neural Engine & Guardrail Build",
    duration: "Weeks 2–3",
    deliverables: "Staging Pipeline • Evaluation Benchmark • Guardrails",
    description:
      "Model training, vector indexing, deterministic Zod schema validation, and rigorous evaluation benches to guarantee zero hallucinations and deterministic tool calling.",
    icon: Activity,
  },
  {
    step: "03",
    title: "Full-Stack Interface Integration",
    duration: "Weeks 4–5",
    deliverables: "Next.js 15 Platform • ASVS L2 Security • SSRF Guard",
    description:
      "Client-facing application interface, server actions with strict type safety, private VPC connection, and OWASP ASVS L2 hardening against injection and privilege escalation.",
    icon: FileCode,
  },
  {
    step: "04",
    title: "Deployment & Complete IP Handover",
    duration: "Week 6+",
    deliverables: "100% IP Handover • Cloud Tenant Deploy • Telemetry",
    description:
      "Direct deployment to your private cloud infrastructure (AWS/GCP), Prometheus/Grafana/Sentry observability setup, documentation transfer, and 30-day warranty monitoring.",
    icon: Shield,
  },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen pt-36 pb-24 px-6 relative z-10">
      <div className="max-w-[1360px] mx-auto space-y-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono text-cortelo-mint tracking-widest uppercase">
            03 &bull; Engineering Framework
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-cortelo-text">
            How We Build & Deploy.
          </h1>
          <p className="text-base text-cortelo-muted leading-relaxed font-light">
            We avoid vague consulting loops. Every project runs on strict milestones, transparent code repositories, and verifiable production benchmarks.
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.step}
                className="glass-panel rounded-2xl p-8 border border-cortelo-border flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-cortelo-mint font-bold">STAGE {stage.step}</span>
                    <span className="px-3 py-1 rounded-full border border-cortelo-border bg-cortelo-surface text-cortelo-muted">
                      {stage.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-cortelo-mint shrink-0" />
                    <h2 className="text-2xl font-bold uppercase text-cortelo-text">
                      {stage.title}
                    </h2>
                  </div>
                  <p className="text-sm text-cortelo-muted leading-relaxed font-light">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-cortelo-border flex items-center justify-between text-xs font-mono">
                  <span className="text-cortelo-muted">DELIVERABLES</span>
                  <span className="text-cortelo-text font-semibold">{stage.deliverables}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Standard Callout */}
        <div className="p-10 rounded-2xl glass-panel border border-cortelo-mint/40 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-cortelo-mint uppercase">
              <Lock className="w-4 h-4" />
              <span>OWASP ASVS Level 2 Target Standard</span>
            </div>
            <h3 className="text-xl font-bold uppercase text-cortelo-text">
              Zero Trust Architecture & Security Hardening
            </h3>
            <p className="text-xs text-cortelo-muted max-w-2xl font-light">
              Every route and API call verifies authentication, rate limits (Redis-backed), SSRF guards, input sanitization via Zod, and data isolation. No shared public endpoints.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-cortelo-mint text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 shrink-0 shadow-[0_0_20px_rgba(45,212,167,0.3)]"
          >
            Initiate Architecture Sprint
          </Link>
        </div>
      </div>
    </main>
  );
}
