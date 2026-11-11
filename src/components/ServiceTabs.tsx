"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Cpu, Network, Sparkles, Layout, Database } from "lucide-react";

const disciplines = [
  {
    id: "ai-automation",
    slug: "/services/ai-automation",
    num: "01",
    name: "AI Automation & Agents",
    tagline: "Autonomous Multi-Agent Systems & Tool Calling",
    sla: "99.9% Task Completion SLA",
    icon: Network,
    description:
      "We design and orchestrate multi-agent autonomous swarms capable of complex reasoning, state management, parallel tool calling, and human-in-the-loop validation. Replacing fragile rule-based automation with deterministic, verified agents.",
    specs: [
      { label: "Architecture", val: "Hierarchical Swarm + Central Policy" },
      { label: "Safety", val: "Deterministic Zod Guardrails" },
      { label: "Timeline", val: "4 to 6 Weeks to Production" },
    ],
  },
  {
    id: "machine-learning",
    slug: "/services/machine-learning",
    num: "02",
    name: "Machine Learning Core",
    tagline: "Statistical Learning & Custom Deep Learning",
    sla: "> 98.5% Benchmark Accuracy",
    icon: Cpu,
    description:
      "Custom model architecture, data preprocessing pipelines, loss optimization, and precision training on enterprise proprietary datasets. From tabular forecasting to computer vision and signal processing.",
    specs: [
      { label: "Frameworks", val: "PyTorch • Hugging Face • ONNX" },
      { label: "Serving", val: "Triton Inference Server" },
      { label: "Hardware", val: "NVIDIA TensorRT Optimized" },
    ],
  },
  {
    id: "generative-ai",
    slug: "/services/generative-ai",
    num: "03",
    name: "Generative AI & RAG",
    tagline: "Cognitive Architectures with Zero Hallucination",
    sla: "0.00% Ungrounded Drift",
    icon: Sparkles,
    description:
      "Production Retrieval-Augmented Generation (RAG) with hybrid lexical-vector search, semantic reranking, contextual chunking, and verifiable citation back-linking. No ungrounded hallucinations.",
    specs: [
      { label: "Vector Engines", val: "Qdrant • pgvector • Pinecone" },
      { label: "Evaluation", val: "RAGAS • Automated Regression Benches" },
      { label: "Optimization", val: "Prompt Caching & Speculative Decoding" },
    ],
  },
  {
    id: "web-development",
    slug: "/services/web-development",
    num: "04",
    name: "Full-Stack Platforms",
    tagline: "High-Throughput Web & Mobile Engineering",
    sla: "≥ 98 Lighthouse Target",
    icon: Layout,
    description:
      "Enterprise Next.js (App Router) and React Native frontends built with strict TypeScript, server components, and rigorous state management. Clean, accessible, resilient software interfaces.",
    specs: [
      { label: "Stack", val: "Next.js 15 • TypeScript • Tailwind" },
      { label: "Security", val: "OWASP ASVS L2 • SSRF Guard" },
      { label: "Architecture", val: "Server Actions • Edge Middleware" },
    ],
  },
  {
    id: "data-mlops",
    slug: "/services/data-mlops",
    num: "05",
    name: "Data Pipelines & MLOps",
    tagline: "Continuous Retraining Loops & Telemetry",
    sla: "Sub-50ms Bus Latency",
    icon: Database,
    description:
      "Automated model deployment CI/CD, data drift detection, continuous model retraining loops, and distributed Kafka/Flink or Spark data pipelines running on isolated enterprise VPCs.",
    specs: [
      { label: "Telemetry", val: "Prometheus • Grafana • Sentry" },
      { label: "Registry", val: "MLflow • AWS SageMaker" },
      { label: "Orchestration", val: "Kubernetes • Temporal • Airflow" },
    ],
  },
];

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const current = disciplines[activeTab];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-cortelo-mint font-semibold">
            Technical Disciplines &bull; 01
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-cortelo-text mt-2 uppercase">
            Architectures Built to Deploy.
          </h2>
        </div>
        <p className="text-sm text-cortelo-muted max-w-sm font-light">
          Inspect technical specifications, deployment scope, and verified SLAs for each core engineering discipline.
        </p>
      </div>

      {/* Tabs navigation */}
      <div className="flex overflow-x-auto gap-2 p-1.5 rounded-full border border-cortelo-border glass-panel scrollbar-none">
        {disciplines.map((d, index) => {
          const isActive = activeTab === index;
          return (
            <button
              key={d.id}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-all whitespace-nowrap ${
                isActive
                  ? "bg-cortelo-mint text-black shadow-[0_0_15px_rgba(45,212,167,0.3)]"
                  : "text-cortelo-muted hover:text-cortelo-text"
              }`}
            >
              {d.num} {d.name}
            </button>
          );
        })}
      </div>

      {/* Tab Pane */}
      <div className="p-8 md:p-12 rounded-2xl glass-panel relative border border-cortelo-border space-y-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 pb-6 border-b border-cortelo-border">
          <div>
            <span className="text-xs font-mono text-cortelo-mint font-semibold uppercase">
              {current.tagline}
            </span>
            <h3 className="text-2xl font-black uppercase text-cortelo-text mt-1">
              {current.name}
            </h3>
          </div>
          <div className="text-left md:text-right">
            <div className="text-xs font-mono text-cortelo-muted">VERIFIED TARGET</div>
            <div className="text-sm font-mono font-bold text-cortelo-mint mt-0.5">
              {current.sla}
            </div>
          </div>
        </div>

        <p className="text-sm md:text-base text-cortelo-muted max-w-3xl leading-relaxed font-light">
          {current.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {current.specs.map((spec, i) => (
            <div key={i} className="p-4 rounded-xl bg-cortelo-surface/80 border border-cortelo-border">
              <div className="text-xs font-mono text-cortelo-muted uppercase mb-1">
                {spec.label}
              </div>
              <div className="text-sm font-semibold text-cortelo-text">
                {spec.val}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-cortelo-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-cortelo-muted">
          <span>Milestone deliverables &bull; 100% IP Handover</span>
          <Link
            href={current.slug}
            className="text-cortelo-mint hover:underline font-semibold flex items-center gap-1.5 uppercase"
          >
            Read In-Depth Specification &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
