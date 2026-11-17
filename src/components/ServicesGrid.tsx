"use client";

import React from "react";
import { AGENCY_SERVICES, type AgencyService } from "@/lib/agencyData";
import {
  Activity,
  ArrowUpRight,
  Brain,
  Cpu,
  Database,
  LayoutTemplate,
  MessagesSquare,
  Network,
  PenLine,
  PhoneCall,
  Plug,
  ScanFace,
  ScanText,
  Server,
  Smartphone,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { useAgencyShell } from "./ClientShell";
import { pointerGlow } from "@/lib/usePointerGlow";

const ICONS: Record<string, React.ElementType> = {
  "ai-agents": Network,
  "voice-agents": PhoneCall,
  "rag-assistants": MessagesSquare,
  "private-llm": Cpu,
  "mcp-integrations": Plug,
  "custom-models": Brain,
  "face-recognition": ScanFace,
  "document-ai": ScanText,
  "classic-ai-ml": Activity,
  "crm-architecture": Server,
  "fullstack-platforms": LayoutTemplate,
  "mobile-apps": Smartphone,
  "workflow-automation": Workflow,
  "data-dashboards": Database,
  "growth-marketing": TrendingUp,
  "ai-content": PenLine,
};

/** Short names for the cards; the full title stays in the data for detail views. */
const SHORT: Record<string, string> = {
  "ai-agents": "AI agents",
  "voice-agents": "AI voice agents",
  "rag-assistants": "RAG assistants and chatbots",
  "private-llm": "Fine-tuned and private LLMs",
  "mcp-integrations": "MCP servers and AI integrations",
  "custom-models": "Custom ML and deep learning models",
  "face-recognition": "Face recognition and computer vision",
  "document-ai": "Document AI and OCR",
  "classic-ai-ml": "Predictive analytics and IoT",
  "crm-architecture": "Custom CRMs",
  "fullstack-platforms": "Web and SaaS products",
  "mobile-apps": "Mobile apps with AI",
  "workflow-automation": "Automation and private hosting",
  "data-dashboards": "Data pipelines and dashboards",
  "growth-marketing": "Growth funnels",
  "ai-content": "AI content and SEO",
};

const GROUPS: { title: string; line: string; ids: string[] }[] = [
  {
    title: "AI agents and LLMs",
    line: "Assistants that talk, answer and act on your systems.",
    ids: ["ai-agents", "voice-agents", "rag-assistants", "private-llm", "mcp-integrations"],
  },
  {
    title: "Machine learning and vision",
    line: "Models trained on your data, for your problem.",
    ids: ["custom-models", "face-recognition", "document-ai", "classic-ai-ml"],
  },
  {
    title: "Software products",
    line: "The CRM, the web app and the phone app around it.",
    ids: ["crm-architecture", "fullstack-platforms", "mobile-apps"],
  },
  {
    title: "Automation, data and growth",
    line: "The pipes, the numbers and the pipeline.",
    ids: ["workflow-automation", "data-dashboards", "growth-marketing", "ai-content"],
  },
];

const byId = Object.fromEntries(AGENCY_SERVICES.map((s) => [s.id, s])) as Record<string, AgencyService>;

function ServiceCard({ s, detailed }: { s: AgencyService; detailed: boolean }) {
  const { openDrawer } = useAgencyShell();
  const Icon = ICONS[s.id] ?? Server;
  const name = SHORT[s.id] ?? s.title;

  return (
    <button
      type="button"
      onPointerMove={pointerGlow}
      onClick={() => openDrawer(`Inquiry regarding: ${s.title}`)}
      aria-label={`Ask about ${name}`}
      className="card card-link card-glow group flex h-full flex-col p-6 text-left"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-m)] border border-[var(--line)] bg-[var(--surface2)] text-[var(--accent)] transition-[transform,border-color] duration-500 group-hover:scale-110 group-hover:border-[rgba(95,212,192,0.45)]">
          <Icon className="h-5 w-5" />
        </span>
        <ArrowUpRight className="h-5 w-5 text-[var(--text-faint)] transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
      </div>

      <h4 className="mt-6 text-[19px] font-medium leading-snug tracking-[-0.02em] text-[var(--text)]">{name}</h4>
      <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-muted)]">{s.tagline}</p>

      {detailed && (
        <ul className="mt-5 space-y-2 border-t border-[var(--line)] pt-5">
          {s.deliverables.slice(0, 4).map((d) => (
            <li key={d} className="flex gap-3 text-[14px] text-[var(--text-muted)]">
              <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
              {d}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
        {s.techStack.slice(0, detailed ? 6 : 3).map((t) => (
          <span key={t} className="rounded-full border border-[var(--line)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-faint)]">
            {t}
          </span>
        ))}
      </div>
    </button>
  );
}

/** The service catalogue in four groups. `detailed` adds deliverables for the services page. */
export function ServiceGroups({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="space-y-16">
      {GROUPS.map((g, gi) => (
        <div key={g.title} className="grid gap-6 lg:grid-cols-[260px_1fr] lg:gap-10">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-[12px] text-[var(--accent)]">
              {String(gi + 1).padStart(2, "0")} · {g.ids.length} services
            </p>
            <h3 className="mt-3 text-[24px] font-medium tracking-[-0.025em] text-[var(--text)]">{g.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-muted)]">{g.line}</p>
          </div>
          {/* 4 cards sit 2x2; 5 cards lead with one wide card so no row is left half empty */}
          <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${g.ids.length === 4 ? "" : "xl:grid-cols-3"}`}>
            {g.ids
              .map((id) => byId[id])
              .filter(Boolean)
              .map((s, i) => (
                <div key={s.id} className={g.ids.length === 5 && i === 0 ? "sm:col-span-2" : ""}>
                  <ServiceCard s={s} detailed={detailed} />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section id="services" aria-labelledby="services-h" className="py-24 md:py-32">
      <div className="wrap">
        <div className="mb-16 grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-end">
          <div>
            <p className="eyebrow mb-6">Services</p>
            <h2 id="services-h" className="h2">
              {AGENCY_SERVICES.length} things we build. <span className="soft">All of them end up in your repository.</span>
            </h2>
          </div>
          <p className="lede md:justify-self-end md:max-w-[440px]">
            Voice agents, custom models, face recognition, private LLMs and the software around them. One studio for the
            model, the backend, the interface and the server it runs on.
          </p>
        </div>

        <ServiceGroups />
      </div>
    </section>
  );
}
