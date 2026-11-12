import React from "react";
import Link from "next/link";
import { Lock, Terminal, Activity, FileCode, Shield } from "lucide-react";

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
      "Client-facing application interface, server actions with strict type safety, private VPS connection, and OWASP ASVS L2 hardening against injection and privilege escalation.",
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
    <main className="min-h-screen pt-36 pb-24 px-6 relative z-10 bg-[#000000]">
      <div className="max-w-[1360px] mx-auto space-y-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-white/90 font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4533]" />
            <span>03 &bull; Engineering Framework</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#FCFCFA]">
            How We Build &amp;{" "}
            <span className="font-serif italic font-normal text-white lowercase">Deploy</span>.
          </h1>
          <p className="text-base text-white/60 leading-relaxed font-light">
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
                className="rounded-3xl p-8 border border-white/10 bg-[#0D0D0D] flex flex-col justify-between space-y-6 shadow-sm hover:border-[#FF4533]/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-[#FF4533] font-bold">STAGE {stage.step}</span>
                    <span className="px-3 py-1 rounded-full border border-white/10 bg-[#141414] text-white/60">
                      {stage.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-[#FF4533] shrink-0" />
                    <h2 className="text-2xl font-bold uppercase text-[#FCFCFA]">
                      {stage.title}
                    </h2>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed font-light">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-white/40">DELIVERABLES</span>
                  <span className="text-white/80 font-semibold">{stage.deliverables}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Standard Callout */}
        <div className="p-10 rounded-3xl border border-white/10 bg-[#0D0D0D] flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF4533] uppercase">
              <Lock className="w-4 h-4" />
              <span>OWASP ASVS Level 2 Target Standard</span>
            </div>
            <h3 className="text-xl font-bold uppercase text-[#FCFCFA]">
              Zero Trust Architecture &amp; Security Hardening
            </h3>
            <p className="text-xs text-white/60 max-w-2xl font-light">
              Every route and API call verifies authentication, rate limits (Redis-backed), SSRF guards, input sanitization via Zod, and data isolation. No shared public endpoints.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-conversion-primary px-8 py-3.5 rounded-full bg-[#FF4533] hover:bg-[#FF220E] text-white font-bold text-xs uppercase tracking-wider shrink-0 shadow-[0_0_20px_rgba(255,69,51,0.35)] transition-all"
          >
            Initiate Architecture Sprint
          </Link>
        </div>
      </div>
    </main>
  );
}
