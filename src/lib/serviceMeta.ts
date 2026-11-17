import type React from "react";
import {
  Activity,
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

export const SERVICE_ICONS: Record<string, React.ElementType> = {
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
export const SERVICE_SHORT: Record<string, string> = {
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

export const SERVICE_GROUPS: { title: string; line: string; ids: string[] }[] = [
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

/** The group a service belongs to, for "related services". */
export const groupOf = (id: string) => SERVICE_GROUPS.find((g) => g.ids.includes(id));
