import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ShieldAlert, Cpu, Network, Sparkles, Layout, Database, Smartphone } from "lucide-react";

const serviceDetails: Record<
  string,
  {
    title: string;
    tagline: string;
    description: string;
    problems: string[];
    deliverables: string[];
    stack: string[];
    timeline: string;
    benchmark: string;
  }
> = {
  "ai-automation": {
    title: "AI Automation & Autonomous Agents",
    tagline: "Multi-Agent Swarms with Deterministic Verification",
    description:
      "We replace brittle legacy scripts with hierarchical autonomous agent swarms. Designed with human-in-the-loop approvals, deterministic state machines, and safe API bridges to execute mission-critical enterprise workflows.",
    problems: [
      "Manual multi-step operations causing high operational headcount and slow throughput.",
      "Brittle Zapier/Make automations that fail silently when third-party payloads change.",
      "Lack of structured auditing and safety controls over autonomous tool executions.",
    ],
    deliverables: [
      "Hierarchical multi-agent orchestration architecture.",
      "Deterministic input/output guardrails with Zod validation.",
      "Human-in-the-loop escalation UI and approval dashboard.",
      "Complete test harness and 99.9% task completion SLA.",
    ],
    stack: ["LangChain", "LlamaIndex", "Temporal.io", "Python", "FastAPI", "Redis"],
    timeline: "4 to 6 Weeks",
    benchmark: "99.9% Task Execution Reliability",
  },
  "machine-learning": {
    title: "Machine Learning & Deep Learning",
    tagline: "Statistical Precision Trained on Proprietary Enterprise Data",
    description:
      "Custom classification, regression, time-series forecasting, and computer vision models trained specifically on your proprietary data. Optimized for high throughput and sub-50ms latency using NVIDIA TensorRT and Triton Inference Server.",
    problems: [
      "Off-the-shelf generalized models failing on domain-specific edge cases.",
      "High inference latency and unoptimized compute bills on GPU clusters.",
      "Lack of continuous evaluation against statistical data and concept drift.",
    ],
    deliverables: [
      "Custom neural architecture and dataset preprocessing pipeline.",
      "Quantized and pruned model checkpoints (FP16/INT8).",
      "High-scale serving on Triton Inference Server / AWS ECS.",
      "Automated evaluation benches with baseline regression alerts.",
    ],
    stack: ["PyTorch", "ONNX Runtime", "Triton", "NVIDIA TensorRT", "Weights & Biases"],
    timeline: "6 to 8 Weeks",
    benchmark: "> 98.5% Validation Accuracy",
  },
  "generative-ai": {
    title: "Generative AI & LLM Systems",
    tagline: "Production RAG with Zero-Hallucination Guarantees",
    description:
      "Enterprise Retrieval-Augmented Generation (RAG) architectures with hybrid lexical-vector search, semantic reranking, contextual chunking, and verifiable source citation back-linking. Built for compliance-heavy domains.",
    problems: [
      "Hallucinations and ungrounded outputs in regulatory or customer-facing touchpoints.",
      "Slow retrieval latency across massive document archives (100k+ filings).",
      "Skyrocketing token expenditures from unoptimized context stuffing.",
    ],
    deliverables: [
      "Hybrid dense-sparse vector indexing pipeline (Qdrant / pgvector).",
      "Contextual compression and cross-encoder reranking.",
      "Prompt compilation, caching, and deterministic JSON-schema outputs.",
      "Automated RAGAS regression test suite.",
    ],
    stack: ["Qdrant", "pgvector", "vLLM", "Hugging Face", "Next.js", "TypeScript"],
    timeline: "4 to 6 Weeks",
    benchmark: "0.00% Ungrounded Hallucinations",
  },
  "web-development": {
    title: "Full-Stack Web Engineering",
    tagline: "Next.js 15 App Router Platforms Built for Enterprise Scale",
    description:
      "Modern full-stack web platforms engineered with Next.js 15, strict TypeScript, server components, and Tailwind CSS. Built with zero-vibe-coding standards, sub-second LCP, and OWASP ASVS Level 2 security compliance.",
    problems: [
      "Sluggish single-page apps with poor SEO, high LCP, and layout shifts.",
      "Spaghetti codebases with loose types, fragile dependencies, and regression bugs.",
      "Security vulnerabilities (SSRF, CSRF, IDOR) on critical endpoints.",
    ],
    deliverables: [
      "Production-ready Next.js 15 App Router platform with strict TypeScript.",
      "Custom design system with zero template clichés.",
      "Server actions with Zod validation and rate-limiting middleware.",
      "CI/CD pipeline with automated linting, unit tests, and Playwright E2E.",
    ],
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma/Drizzle", "Docker"],
    timeline: "4 to 8 Weeks",
    benchmark: "Lighthouse ≥ 98 / Mobile First",
  },
  "app-development": {
    title: "Mobile App Development",
    tagline: "Cross-Platform React Native Applications",
    description:
      "High-performance native mobile applications for iOS and Android powered by React Native and Expo. Seamless offline synchronization, biometric authentication, and smooth 60fps micro-interactions.",
    problems: [
      "Separate iOS and Android codebases doubling maintenance overhead.",
      "Janky animations and slow startup times on cross-platform wrappers.",
      "Complex offline state management and sync conflicts.",
    ],
    deliverables: [
      "Universal React Native codebase targeting iOS and Android.",
      "Biometric auth, push notification pipelines, and deep linking.",
      "Offline-first SQLite/WatermelonDB storage layer.",
      "Automated Fastlane deployment to TestFlight and Google Play.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Tailwind (NativeWind)", "WatermelonDB"],
    timeline: "6 to 8 Weeks",
    benchmark: "60fps Smooth Native Performance",
  },
  "data-mlops": {
    title: "Data Pipelines & MLOps",
    tagline: "Automated Retraining Loops, Drift Detection & Telemetry",
    description:
      "End-to-end data engineering and model operations. Automated model deployment CI/CD, data drift detection, continuous model retraining loops, and distributed streaming data pipelines running on isolated enterprise VPCs.",
    problems: [
      "Models degrading silently in production due to unseen concept drift.",
      "Manual retraining processes requiring engineer intervention every cycle.",
      "Lack of centralized lineage tracking for data, models, and latency metrics.",
    ],
    deliverables: [
      "Automated continuous retraining pipeline triggered by drift monitors.",
      "Model registry with semantic versioning and rollback capability.",
      "Grafana/Prometheus dashboards tracking P99 latency and token usage.",
      "Infrastructure as Code (Terraform) on AWS/GCP.",
    ],
    stack: ["Apache Kafka", "Flink", "MLflow", "Prometheus", "Grafana", "AWS SageMaker", "Docker"],
    timeline: "4 to 6 Weeks",
    benchmark: "Sub-50ms Bus Latency / Zero-Downtime Deploy",
  },
};

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-36 pb-24 px-6 relative z-10">
      <div className="max-w-[1100px] mx-auto space-y-16">
        
        {/* Navigation Back */}
        <div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono text-cortelo-muted hover:text-cortelo-mint transition-colors uppercase"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Systems & Services</span>
          </Link>
        </div>

        {/* Hero */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-cortelo-mint tracking-widest uppercase">
            {service.tagline}
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-cortelo-text">
            {service.title}
          </h1>
          <p className="text-base sm:text-lg text-cortelo-muted max-w-3xl leading-relaxed font-light">
            {service.description}
          </p>
        </div>

        {/* Metric Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 rounded-2xl glass-panel border border-cortelo-border text-xs font-mono">
          <div>
            <span className="text-cortelo-muted block">DELIVERY TIMELINE</span>
            <span className="text-lg font-bold text-cortelo-text">{service.timeline}</span>
          </div>
          <div>
            <span className="text-cortelo-muted block">TARGET BENCHMARK</span>
            <span className="text-lg font-bold text-cortelo-mint">{service.benchmark}</span>
          </div>
          <div className="col-span-2 md:col-span-1">
            <span className="text-cortelo-muted block">IP ASSIGNMENT</span>
            <span className="text-lg font-bold text-cortelo-text">100% Client Ownership</span>
          </div>
        </div>

        {/* Problems & Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="glass-panel p-8 rounded-2xl border border-cortelo-border space-y-6">
            <h2 className="text-xl font-bold uppercase text-cortelo-text flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-red-400" />
              <span>Challenges Solved</span>
            </h2>
            <ul className="space-y-4">
              {service.problems.map((prob, i) => (
                <li key={i} className="text-xs text-cortelo-muted leading-relaxed font-light flex items-start gap-2.5">
                  <span className="text-red-400 font-mono mt-0.5">&bull;</span>
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-cortelo-border space-y-6">
            <h2 className="text-xl font-bold uppercase text-cortelo-text flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cortelo-mint" />
              <span>What We Deliver</span>
            </h2>
            <ul className="space-y-4">
              {service.deliverables.map((deliv, i) => (
                <li key={i} className="text-xs text-cortelo-text leading-relaxed font-light flex items-start gap-2.5">
                  <span className="text-cortelo-mint font-mono mt-0.5">✓</span>
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Tech Stack */}
        <div className="glass-panel p-8 rounded-2xl border border-cortelo-border space-y-4">
          <h3 className="text-xs font-mono text-cortelo-muted uppercase tracking-wider">
            Verified Production Technologies
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {service.stack.map((item, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-full border border-cortelo-border bg-cortelo-surface text-xs font-mono text-cortelo-text"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Action */}
        <div className="pt-8 border-t border-cortelo-border text-center space-y-4">
          <h3 className="text-2xl font-bold uppercase text-cortelo-text">
            Ready to Implement This Architecture?
          </h3>
          <div>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 rounded-full bg-cortelo-mint text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_24px_rgba(45,212,167,0.3)]"
            >
              Consult with Hunzila & Mahreen
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}

