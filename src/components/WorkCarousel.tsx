"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, Zap } from "lucide-react";

const caseStudies = [
  {
    id: "fintech-regulatory-extraction",
    title: "Enterprise Regulatory Extraction Engine",
    client: "Global Tier-1 Fintech",
    type: "Client Project",
    category: "Fintech & RAG",
    description:
      "Autonomous ingestion and verified entity extraction across 150,000+ statutory SEC filings with zero hallucination guardrails.",
    metricValue: "99.4%",
    metricLabel: "Verification Accuracy",
    latency: "180ms P95",
    color: "from-emerald-500/10",
  },
  {
    id: "autonomous-refactor-harness",
    title: "Autonomous Codebase Refactor Harness",
    client: "Developer Infrastructure",
    type: "Founder Project",
    category: "Agent Swarms",
    description:
      "Multi-agent software harness orchestrating codebase-wide refactors, AST modifications, and zero-breaking regression test suites.",
    metricValue: "4.2x",
    metricLabel: "Developer Throughput",
    latency: "0% Regressions",
    color: "from-cyan-500/10",
  },
  {
    id: "graph-neural-dispatch",
    title: "Graph Neural Dispatch Optimization",
    client: "Metropolitan Logistics Fleet",
    type: "Client Project",
    category: "Deep Learning",
    description:
      "Graph neural network forecasting metropolitan transport congestion with dynamic re-routing running on high-scale AWS ECS clusters.",
    metricValue: "-22%",
    metricLabel: "Fuel & Time Savings",
    latency: "2M+ Trips/Mo",
    color: "from-purple-500/10",
  },
  {
    id: "clinical-assistant-model",
    title: "HIPAA-Isolated Clinical Knowledge Engine",
    client: "Healthcare Systems Group",
    type: "Client Project",
    category: "Private LLM",
    description:
      "Private on-premise model fine-tuned on clinical notes with zero external API transmission and complete immutable audit trails.",
    metricValue: "99.1%",
    metricLabel: "Diagnostic Recall",
    latency: "HIPAA Certified",
    color: "from-blue-500/10",
  },
];

export default function WorkCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prevIndex) => (prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrent((prevIndex) => (prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="space-y-8">
      {/* Header controls */}
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
        <div>
          <span className="text-xs font-mono text-cortelo-mint tracking-widest uppercase">
            02 &bull; Selected Works
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-cortelo-text mt-2">
            Verified Production Outcomes.
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous Project"
            className="w-12 h-12 rounded-full border border-cortelo-border glass-panel flex items-center justify-center hover:border-cortelo-mint hover:text-cortelo-mint transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next Project"
            className="w-12 h-12 rounded-full border border-cortelo-border glass-panel flex items-center justify-center hover:border-cortelo-mint hover:text-cortelo-mint transition-all"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Sliding Cards */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 33.333}%)` }}
        >
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] glass-panel rounded-2xl p-8 flex flex-col justify-between group hover:border-cortelo-mint transition-all shrink-0"
            >
              <div>
                <div className="flex items-center justify-between mb-6 text-xs font-mono">
                  <span className="text-cortelo-mint font-semibold">{study.category}</span>
                  <span className="text-cortelo-muted px-2.5 py-0.5 rounded border border-cortelo-border bg-cortelo-surface">
                    {study.type}
                  </span>
                </div>

                <div className="h-44 rounded-xl bg-cortelo-surface mb-6 relative overflow-hidden border border-cortelo-border flex items-center justify-center">
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.color} to-transparent`} />
                  <div className="relative z-10 text-center font-mono text-xs text-cortelo-muted">
                    <Zap className="w-8 h-8 text-cortelo-mint mx-auto mb-2 opacity-50 group-hover:scale-110 transition-transform" />
                    <span>{study.client}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold uppercase text-cortelo-text mb-3 leading-snug">
                  {study.title}
                </h3>
                <p className="text-xs text-cortelo-muted leading-relaxed mb-6 font-light">
                  {study.description}
                </p>
              </div>

              <div className="pt-6 border-t border-cortelo-border flex justify-between text-xs font-mono">
                <div>
                  <span className="text-cortelo-muted block">{study.metricLabel}</span>
                  <span className="text-lg font-bold text-cortelo-text">{study.metricValue}</span>
                </div>
                <div className="text-right">
                  <span className="text-cortelo-muted block">BENCHMARK</span>
                  <span className="text-lg font-bold text-cortelo-mint">{study.latency}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center text-xs font-mono text-cortelo-muted pt-4 border-t border-cortelo-border">
        <span>Slide {current + 1} of {caseStudies.length}</span>
        <Link href="/work" className="hover:text-cortelo-mint transition-colors">
          View All Case Studies &rarr;
        </Link>
      </div>
    </div>
  );
}
