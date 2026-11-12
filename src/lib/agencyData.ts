export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  badge: string;
  category: string;
  status: "Live in Production" | "Deployed SaaS" | "A+ Research & IoT";
  liveUrl?: string;
  repoUrl?: string;
  previewImage: string;
  video?: string;
  description: string;
  metrics: {
    primaryValue: string;
    primaryLabel: string;
    secondaryValue: string;
    secondaryLabel: string;
  };
  architecture: string[];
  highlights: string[];
}

export interface AgencyService {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  sla: string;
  deliverables: string[];
  techStack: string[];
  specs: { label: string; value: string }[];
}

export interface TeamDivision {
  id: string;
  code: string;
  name: string;
  leader: string;
  role: string;
  avatar: string;
  capabilities: string[];
  bio: string;
  techStack: string[];
}

export const FOUNDER_DATA = {
  name: "Hunzila Nisar",
  alias: "Hunzila Rajput",
  title: "Founder & Lead AI Systems Architect",
  portfolioUrl: "https://devhunzila.site",
  fiverrUrl: "https://fiverr.com/huzaifae3742",
  githubUrl: "https://github.com/HunzilaRajput746",
  linkedinUrl: "https://linkedin.com/in/hunzila-nisar-ai",
  whatsappUrl: "https://wa.me/923186326746",
  phone: "+92 318 6326746",
  email: "hunzilanisar746@gmail.com",
  agencyEmail: "hello@cortelo.ai",
  location: "Lodhran, Punjab, Pakistan (Global Remote Delivery)",
  education: "BSc in Artificial Intelligence — The Islamia University of Bahawalpur (A+ Grade FYP)",
  distinctions: [
    "Delivered Live Enterprise CRMs (Revenue.inc & C17 CRM) on Tailscale VPS",
    "Self-Hosted Production n8n Engine running live at n8n.devhunzila.site",
    "NAVTTC (Govt. of Pakistan) ML & AI Certification with A+ Grade",
    "Smart Helmet IoT System (A+ Grade, 95% Crash Alert Accuracy)",
    "Breast Cancer Oncology AI System (96.0% Benchmark Accuracy)",
  ],
};

export const AGENCY_PROJECTS: ProjectItem[] = [
  {
    id: "revenue-crm",
    title: "Revenue.inc — Enterprise Sales CRM & Analytics",
    subtitle: "Real-Time Sales Telemetry & Sprint Kanban Engine",
    client: "Revenue.inc (Active Production)",
    badge: "LIVE PRODUCTION CRM",
    category: "CRM & Enterprise Systems",
    status: "Live in Production",
    liveUrl: "https://dashboard.revenue.inc",
    previewImage: "/assets/projects/revenue_crm_preview.svg",
    video: "/assets/videos/case_study_1.mp4",
    description:
      "Full-stack enterprise CRM platform built and deployed end-to-end for active corporate production. Features real-time sales analytics (calls tracking, closed TCV, signed MRR, conversion funnels), developer sprint Kanban board, automated SOP documentation, and AI client workflows, secured on a dedicated Tailscale private mesh VPS.",
    metrics: {
      primaryValue: "$1.48M+",
      primaryLabel: "Closed TCV Tracked",
      secondaryValue: "P99 < 32ms",
      secondaryLabel: "VPS Query Latency",
    },
    architecture: [
      "React 19 Frontend with High-Performance Glass UI",
      "Express.js & Node High-Throughput REST APIs",
      "Tailscale Secured Mesh Private VPS Server",
      "MongoDB Sharded Document Store & Real-time Webhooks",
      "Real-time Sales Conversion Pipeline & Sprint Kanban",
    ],
    highlights: [
      "Custom analytics dashboard tracking calls, closed deals, and signed MRR ($124,800/mo).",
      "Developer Kanban board with sprint refinement and automated SOP documentation.",
      "Zero public server exposure — 100% private Tailscale authenticated access mesh.",
    ],
  },
  {
    id: "c17-crm",
    title: "C17 CRM — AI Lead & Deal Management Platform",
    subtitle: "AI Lead Scoring, Multi-Stage Pipelines & Workflow Triggers",
    client: "C17.ai (Active Production)",
    badge: "LIVE PRODUCTION CRM",
    category: "AI & CRM Infrastructure",
    status: "Live in Production",
    liveUrl: "https://dashboard.c17.ai",
    previewImage: "/assets/projects/c17_crm_preview.svg",
    video: "/assets/videos/case_study_2.mp4",
    description:
      "Production-ready customer relationship & lead management CRM in active commercial operation. Features AI-powered automated lead qualification, customer lifecycle stage tracking, multi-stage sales pipelines, and automated webhook triggers, running securely on a private VPS network.",
    metrics: {
      primaryValue: "94/100",
      primaryLabel: "Lead Scoring Precision",
      secondaryValue: "100%",
      secondaryLabel: "Tailscale Mesh Secured",
    },
    architecture: [
      "Full-Stack React & Node Enterprise Dashboard",
      "AI-Assisted Inbound Lead Qualifier & Scoring Engine",
      "Event-Driven Webhook Pipeline & Stage Transitions",
      "Private VPS Infrastructure with Encrypted Access",
      "Interactive Deal Stages (Inbound, Discovery, Contract, Won)",
    ],
    highlights: [
      "Automated lead enrichment cutting sales rep research time by 65%.",
      "Real-time deals pipeline with instant stage change notifications.",
      "Zero subscription lock-in, fully client-owned enterprise asset.",
    ],
  },
  {
    id: "n8n-automation-engine",
    title: "Self-Hosted n8n Enterprise Workflow Engine",
    subtitle: "Oracle Cloud VPS Automation with Zero Third-Party Limits",
    client: "devhunzila Infrastructure (Live Engine)",
    badge: "LIVE VPS AUTOMATION",
    category: "Cloud Automation & DevOps",
    status: "Live in Production",
    liveUrl: "https://n8n.devhunzila.site",
    previewImage: "/assets/projects/n8n_engine_preview.svg",
    video: "/assets/videos/case_study_3.mp4",
    description:
      "Enterprise workflow automation platform self-hosted and running live on an Oracle Cloud VPS server at n8n.devhunzila.site. Powers event-driven webhook processing, MongoDB database synchronization, scheduled cron triggers, and multi-agent AI execution pipelines with zero third-party subscription limits.",
    metrics: {
      primaryValue: "1.24M+",
      primaryLabel: "Executions Handled",
      secondaryValue: "99.98%",
      secondaryLabel: "Server Uptime",
    },
    architecture: [
      "Self-Hosted n8n Instance on Oracle Cloud VPS",
      "Tailscale Private Network Interconnects",
      "MongoDB & External SaaS Webhook Bridges",
      "Llama-3.3 70B & Groq AI Agent Integration Nodes",
      "Zero SaaS Execution Limits & Zero Per-Task Fees",
    ],
    highlights: [
      "Saves thousands of dollars annually compared to Zapier / Make enterprise plans.",
      "Handles bidirectional synchronizations between CRM databases and communication channels.",
      "Fully observable execution logs with automated alerting on webhook failures.",
    ],
  },
  {
    id: "smart-helmet-iot",
    title: "Smart Helmet with Navigation & Crash Detection",
    subtitle: "ESP32 IoT Safety System, Leaflet GPS & Face-API",
    client: "Academic & Tech Expo Showcase",
    badge: "A+ GRADE FINAL YEAR PROJECT",
    category: "IoT, Embedded & Vision",
    status: "A+ Research & IoT",
    previewImage: "/assets/projects/smart_helmet_preview.svg",
    video: "/assets/videos/prism_loop.mp4",
    description:
      "Comprehensive IoT safety system integrating ESP32, NEO-6M GPS, MPU6050 accelerometer, DHT11 sensors, and Face-API facial recognition. Features a live Node.js + Leaflet GPS route tracking dashboard and achieves 95% reliable crash alerts and 90% facial detection accuracy.",
    metrics: {
      primaryValue: "95%",
      primaryLabel: "Crash Alert Reliability",
      secondaryValue: "90%",
      secondaryLabel: "Face-API Recognition Acc",
    },
    architecture: [
      "ESP32 & Arduino Microcontroller C++ Firmware",
      "MPU6050 Accelerometer & NEO-6M GPS Real-time Telemetry",
      "Node.js WebSocket Server & Leaflet.js Live Map UI",
      "Client-Side Face-API Machine Learning Authentication",
      "SMS & Cellular Emergency Alert Relay System",
    ],
    highlights: [
      "Achieved A+ Grade distinction for BSc in Artificial Intelligence.",
      "Demonstrated at AI Expo 2024 with live crash impact simulation.",
      "Instant coordinate transmission to emergency contacts upon impact.",
    ],
  },
  {
    id: "gourmetos-saas",
    title: "GourmetOS — Restaurant Operations System",
    subtitle: "Next.js 14 SaaS, POS Terminal & Live Kitchen Display",
    client: "Commercial Hospitality SaaS",
    badge: "FULL-STACK SAAS",
    category: "Full-Stack Web & SaaS",
    status: "Deployed SaaS",
    previewImage: "/assets/projects/gourmetos_preview.svg",
    video: "/assets/videos/case_study_1.mp4",
    description:
      "Full-stack restaurant operations platform featuring role-based authentication (Admin/Staff), interactive Point-of-Sale terminal, live Kitchen Display System (Kanban order flow), menu and inventory control, revenue analytics dashboard, and an AI-assisted menu pricing engine.",
    metrics: {
      primaryValue: "Sub-100ms",
      primaryLabel: "POS Order Dispatch",
      secondaryValue: "Lighthouse 99",
      secondaryLabel: "Performance Score",
    },
    architecture: [
      "Next.js 14 App Router with Server Components",
      "NextAuth Role-Based Access Control (Admin / Staff)",
      "Live KDS Kanban Board with Real-Time Sound Alerts",
      "Tailwind CSS & Framer Motion Responsive Interface",
      "Dynamic Margin Optimizer & AI Pricing Engine",
    ],
    highlights: [
      "Streamlines order flow from front-of-house table to kitchen grill.",
      "Real-time kitchen order timing tracking to prevent table delays.",
      "Automated inventory decrementing on item completion.",
    ],
  },
  {
    id: "healthcare-ai",
    title: "Oncology Screening AI (96% Accuracy)",
    subtitle: "Deep Learning & Machine Learning Diagnostic Pipeline",
    client: "Healthcare AI & Clinical Research",
    badge: "96.0% ACCURACY BENCHMARK",
    category: "Deep Learning & Computer Vision",
    status: "A+ Research & IoT",
    previewImage: "/assets/projects/healthcare_ai_preview.svg",
    video: "/assets/videos/case_study_2.mp4",
    description:
      "End-to-end machine learning and deep learning classification system achieving 96% accuracy on clinical diagnostic datasets. Features full exploratory data analysis (EDA), PCA feature selection, SMOTE class balancing, Random Forest, XGBoost, and custom CNN architectures with FastAPI inference endpoints.",
    metrics: {
      primaryValue: "96.0%",
      primaryLabel: "Diagnostic Accuracy",
      secondaryValue: "0.988",
      secondaryLabel: "ROC-AUC Score",
    },
    architecture: [
      "PyTorch & Scikit-Learn Custom Model Pipelines",
      "SMOTE Class Balancing & PCA Dimensionality Reduction",
      "FastAPI Async Inference Microservice with Docker",
      "Cross-Validation Verification with Stratified 10-Fold",
      "Confusion Matrix & ROC-AUC Diagnostic Curves",
    ],
    highlights: [
      "Eliminates false negative clinical bias through balanced SMOTE sampling.",
      "P99 latency < 40ms per patient feature vector query.",
      "Fully audited with reproducible Jupyter research notebooks.",
    ],
  },
];

export const AGENCY_SERVICES: AgencyService[] = [
  {
    id: "crm-architecture",
    num: "01",
    title: "Custom CRM & Revenue Architecture",
    tagline: "Tailored Sales Platforms, Kanban Boards & Telemetry",
    description:
      "We design, build, and deploy custom enterprise CRMs tailored specifically to your company's sales motion (like Revenue.inc and C17 CRM). Say goodbye to bloated $200/seat SaaS subscriptions — own your platform 100% on dedicated, secure private VPS infrastructure with real-time sales telemetry, automated SOPs, and AI lead qualification.",
    sla: "100% Proprietary IP • Zero SaaS Seat Fees",
    deliverables: [
      "Custom Sales & Deal Kanban Pipeline",
      "Real-Time Sales Telemetry (TCV, MRR, Call Metrics)",
      "Developer Task & Sprint Refinement Boards",
      "Tailscale-Secured Private VPS Deployment",
      "AI-Assisted Lead Scoring & Enrichment",
    ],
    techStack: ["React 19", "Node.js", "Express", "MongoDB", "Tailscale", "Docker"],
    specs: [
      { label: "Deployment", value: "Dedicated VPS / Tailscale Mesh" },
      { label: "Ownership", value: "100% Client Code & IP Handover" },
      { label: "Delivery", value: "3 to 5 Weeks to Production" },
    ],
  },
  {
    id: "ai-agents",
    num: "02",
    title: "Autonomous AI Agents & Multi-Agent Swarms",
    tagline: "Deterministic Multi-Agent Workflows & Tool Calling",
    description:
      "We orchestrate production-grade autonomous agent systems capable of multi-step reasoning, tool execution, structured output parsing, and human-in-the-loop governance. Built with LangChain, LangGraph, Groq, and OpenAI, protected by deterministic Zod guardrails that ensure 0.00% ungrounded drift.",
    sla: "99.8% Task Completion Rate",
    deliverables: [
      "Multi-Agent Hierarchical Swarm Orchestration",
      "Autonomous Tool Calling & External API Dispatch",
      "Deterministic Guardrails & Structured Output Parsers",
      "RAG Cognitive Knowledge Bases with Vector Search",
      "Self-Correction & Automated Retries Benches",
    ],
    techStack: ["Python", "LangChain", "LangGraph", "Groq API", "OpenAI", "Qdrant", "Zod"],
    specs: [
      { label: "Architecture", value: "Multi-Agent Swarms + Central Policy" },
      { label: "Latency", value: "Sub-50ms Token Streaming" },
      { label: "Safety", value: "Deterministic Schema Validation" },
    ],
  },
  {
    id: "workflow-automation",
    num: "03",
    title: "Workflow Automation & Cloud DevOps",
    tagline: "Self-Hosted n8n Engines & Private Cloud VPS",
    description:
      "We eliminate expensive third-party subscription limits by deploying self-hosted n8n automation engines on Oracle Cloud VPS and private Linux servers. Connect your databases, webhooks, CRMs, payment gateways, and AI agents into seamless, event-driven pipelines that process millions of executions monthly.",
    sla: "99.98% Automation Pipeline Uptime",
    deliverables: [
      "Self-Hosted n8n Engine Setup on Oracle Cloud VPS",
      "Tailscale Private Encrypted Node Interconnects",
      "Event-Driven Webhook Processing & Sync Busses",
      "Database Bidirectional Sync (MongoDB, PostgreSQL, Stripe)",
      "Automated Dead-Letter Queue & Slack / Telegram Alerts",
    ],
    techStack: ["n8n", "Oracle Cloud VPS", "Tailscale", "Linux SysAdmin", "Docker", "Webhooks"],
    specs: [
      { label: "Cost Model", value: "Zero Per-Execution SaaS Fees" },
      { label: "Capacity", value: "1M+ Events/Month Scalability" },
      { label: "Security", value: "Private VPC Mesh Network" },
    ],
  },
  {
    id: "fullstack-platforms",
    num: "04",
    title: "Full-Stack Web & SaaS Engineering",
    tagline: "Next.js 15, Ultra-Premium 4K Interfaces & APIs",
    description:
      "We build breathtaking, ultra-fast web applications that elevate your brand to the top 1% of the tech industry. Powered by Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS. Every pixel is intentional, every button is functional, and performance scores hit 98+ on Google Lighthouse.",
    sla: "Lighthouse ≥ 98 Target • Sub-100ms TTFB",
    deliverables: [
      "Next.js 15 App Router with Server Components",
      "Fluid 60FPS Micro-Interactions & Framer Motion",
      "OWASP ASVS L2 Security Hardening & SSRF Guards",
      "REST & GraphQL High-Throughput API Architecture",
      "Responsive 4K Ultra-Wide to Mobile Layouts",
    ],
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js"],
    specs: [
      { label: "Performance", value: "Sub-100ms Server Response" },
      { label: "Security", value: "OWASP ASVS Level 2 Hardening" },
      { label: "Accessibility", value: "WCAG 2.1 AA Compliant" },
    ],
  },
  {
    id: "classic-ai-ml",
    num: "05",
    title: "Classic AI, Deep Learning & Computer Vision",
    tagline: "Predictive Analytics, Custom CNNs & IoT Integration",
    description:
      "From tabular predictive modeling to real-time Computer Vision and embedded IoT systems (ESP32/Arduino). We build custom machine learning pipelines, train deep neural networks on domain-specific datasets, and optimize models for edge deployment with sub-40ms inference latency.",
    sla: "> 96% Verified Benchmark Accuracy",
    deliverables: [
      "Custom Deep Learning CNNs & Object Detection",
      "Predictive Machine Learning (Random Forest, XGBoost)",
      "Exploratory Data Analysis, SMOTE & PCA Pipelines",
      "FastAPI Asynchronous Inference Microservices",
      "Hardware IoT Sensor Integration (ESP32, MPU6050, GPS)",
    ],
    techStack: ["PyTorch", "OpenCV", "Scikit-Learn", "FastAPI", "Pandas", "ESP32 C++"],
    specs: [
      { label: "Frameworks", value: "PyTorch • OpenCV • Scikit-Learn" },
      { label: "Serving", value: "FastAPI Async / Triton Docker" },
      { label: "Optimization", value: "ONNX Runtime & TensorRT" },
    ],
  },
  {
    id: "growth-marketing",
    num: "06",
    title: "Growth Marketing & Funnel Strategy",
    tagline: "Data-Driven Acquisition, CRO & Lead Funnels",
    description:
      "An elite engineering team backed by data-driven growth marketing. We design and optimize end-to-end customer acquisition funnels, automated CRM lead nurturing sequences, high-ticket conversion landing experiences, and multi-channel attribution analytics that drive measurable ROI.",
    sla: "Guaranteed Measurable Funnel Velocity",
    deliverables: [
      "High-Converting Landing Page Architecture",
      "Automated CRM Lead Nurturing & Email Workflows",
      "Multi-Channel Attribution & Analytics Telemetry",
      "Conversion Rate Optimization (A/B Testing Framework)",
      "Technical SEO & Content Distribution Pipelines",
    ],
    techStack: ["Google Analytics 4", "PostHog", "n8n Workflows", "CRM Telemetry", "Stripe API"],
    specs: [
      { label: "Focus", value: "High-Ticket Client Acquisition" },
      { label: "Integration", value: "Directly Synced with Custom CRM" },
      { label: "Target", value: "2x–4x Funnel Conversion Lift" },
    ],
  },
];

export const AGENCY_TEAMS: TeamDivision[] = [
  {
    id: "ai-systems",
    code: "DIV-01",
    name: "AI & Autonomous Systems Division",
    leader: "Hunzila Nisar",
    role: "Founder & Lead AI Architect",
    avatar: "/assets/team/hunzila_nisar.jpg",
    capabilities: [
      "Multi-Agent Swarm Orchestration",
      "LangGraph & LangChain Integration",
      "RAG Vector Search & Embeddings",
      "Deterministic Guardrails & Evaluators",
      "Groq & Llama-3.3 Production Workflows",
    ],
    bio: "AI Engineer with a BSc in Artificial Intelligence (A+ Grade). Proven track record delivering live enterprise platforms like Revenue.inc CRM and C17 CRM, orchestrating private VPS infrastructure, and engineering reliable autonomous agentic pipelines.",
    techStack: ["Python", "PyTorch", "LangChain", "Groq", "FastAPI", "Docker"],
  },
  {
    id: "mlops-security",
    code: "DIV-02",
    name: "Systems, MLOps & Security Division",
    leader: "Mahreen Hashir",
    role: "Co-Founder & Head of Systems",
    avatar: "/assets/team/mahreen_hashir.jpg",
    capabilities: [
      "OWASP ASVS L2 Security Auditing",
      "Continuous Model Evaluation Benches",
      "Dataset Drift & Latency Telemetry",
      "Private VPC Zero-Trust Architecture",
      "Production Handover & SLA Governance",
    ],
    bio: "Directs system verification, deterministic schema validation, and security compliance. Ensures that every platform deployed by Cortelo meets enterprise standards with 100% intellectual property transfer.",
    techStack: ["Prometheus", "Sentry", "Tailscale", "Linux Security", "Docker"],
  },
  {
    id: "fullstack-uiux",
    code: "DIV-03",
    name: "Full-Stack & Product Engineering Division",
    leader: "Product Engineering Team",
    role: "Lead Full-Stack & UI/UX Engineers",
    avatar: "/assets/team/hunzila_nisar.jpg",
    capabilities: [
      "Next.js 15 & React 19 App Router",
      "High-Conversion 4K Interface Design",
      "Real-Time WebSocket & REST Backends",
      "Micro-Interactions & Framer Motion",
      "Cross-Platform Responsive Engineering",
    ],
    bio: "Our multidisciplinary frontend and full-stack engineering team builds software interfaces that feel instantaneous, gorgeous, and rock-solid under enterprise load.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "MongoDB"],
  },
  {
    id: "cloud-devops",
    code: "DIV-04",
    name: "Cloud Infrastructure & Automation Division",
    leader: "Cloud Infrastructure Specialists",
    role: "DevOps & VPS Architecture Team",
    avatar: "/assets/team/hunzila_nisar.jpg",
    capabilities: [
      "Self-Hosted n8n Engine Orchestration",
      "Oracle Cloud & Linux VPS Administration",
      "Tailscale Private Encrypted Mesh",
      "CI/CD Pipelines & Docker Containers",
      "Zero SaaS Subscription Infrastructure",
    ],
    bio: "Architects self-hosted, independent server infrastructure that gives companies total autonomy over their data, workflows, and operating costs without recurring per-task platform fees.",
    techStack: ["Oracle Cloud", "n8n", "Tailscale", "Ubuntu/Debian", "Docker", "Nginx"],
  },
  {
    id: "growth-marketing",
    code: "DIV-05",
    name: "Growth Marketing & Strategy Division",
    leader: "Performance Marketing Team",
    role: "Growth Strategists & Funnel Architects",
    avatar: "/assets/team/mahreen_hashir.jpg",
    capabilities: [
      "High-Ticket Client Acquisition Funnels",
      "CRM Lead Nurturing & Retargeting",
      "Conversion Rate Optimization (CRO)",
      "Data-Driven Marketing Analytics",
      "Brand Positioning & Offer Architecture",
    ],
    bio: "Ensures the technical power of the systems we build translates into tangible market dominance, client acquisition, and measurable revenue acceleration.",
    techStack: ["CRM Telemetry", "Analytics", "Funnel Automation", "A/B Testing"],
  },
];

export const AGENCY_FAQS = [
  {
    q: "Who owns the code and intellectual property once a project is completed?",
    a: "You do — 100%. Upon final milestone acceptance, Cortelo transfers full, unencumbered ownership of all source code, models, configurations, deployment scripts, and architectural assets directly to your private repositories. There are zero licensing lock-ins, zero proprietary platform fees, and zero hidden dependencies.",
  },
  {
    q: "How does Cortelo's custom CRM compare to Salesforce or HubSpot?",
    a: "Salesforce and HubSpot charge steep monthly per-seat fees that grow exponentially, force you into rigid data models, and gate custom AI features behind expensive add-ons. We architect custom platforms like Revenue.inc and C17 CRM that are 100% tailored to your exact sales process, hosted on your private VPS, and include custom AI features with zero ongoing per-seat software fees.",
  },
  {
    q: "Can we review Hunzila Nisar's personal engineering credentials and live portfolio?",
    a: "Yes! Hunzila Nisar's complete portfolio, verified projects, NAVTTC distinction in AI/ML, and industry experience are live at https://devhunzila.site. You can explore his work, inspect live production deployments, or connect directly via WhatsApp (+92 318 6326746) or LinkedIn.",
  },
  {
    q: "How do your multi-agent AI systems avoid hallucinations and errors?",
    a: "We do not rely on fragile raw prompts. All Cortelo agent workflows are engineered with deterministic schema validation (Zod / Pydantic), grounded Retrieval-Augmented Generation (RAG) with source back-linking, structured function calling, and automated self-correction loops. If a model output fails validation, it is rejected and retried before reaching your client interface.",
  },
  {
    q: "What is your typical project delivery timeline and process?",
    a: "We execute in four structured milestones with verified acceptance tests: Milestone 01 (Technical Discovery & Blueprint — Week 1), Milestone 02 (Core Engine & Training — Weeks 2-3), Milestone 03 (Platform Integration & Security — Weeks 4-5), and Milestone 04 (Production Deployment & 100% IP Handover — Week 6).",
  },
];
