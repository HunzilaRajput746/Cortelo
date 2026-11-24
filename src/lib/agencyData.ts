export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  badge: string;
  category: string;
  status: "Confidential Enterprise CRM" | "Live VPS Automation" | "A+ Research & IoT" | "Deployed SaaS" | "Live in Production";
  liveUrl?: string;
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

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  avatar: string;
  badge: string;
  bio: string;
  specialties: string[];
  linkedinUrl?: string;
  portfolioUrl?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export const FOUNDER_DATA = {
  name: "Hunzila Nisar",
  alias: "Hunzila Rajput",
  title: "Founder & Lead AI Systems Architect",
  portfolioUrl: "https://devhunzila.site",
  fiverrUrl: "https://fiverr.com/huzaifae3742",
  githubUrl: "https://github.com/HunzilaRajput746",
  linkedinUrl: "https://linkedin.com/in/hunzila-nisar-ai",
  companyLinkedinUrl: "https://www.linkedin.com/company/cortelo",
  phone: "Available upon inquiry",
  email: "hunzila@cortelo.tech",
  agencyEmail: "contact@cortelo.tech",
  infoEmail: "info@cortelo.tech",
  location: "Lodhran, Punjab, Pakistan (Global Remote Delivery)",
  education: "BSc in Artificial Intelligence — The Islamia University of Bahawalpur (A+ Grade FYP)",
  distinctions: [
    "Architected Enterprise Sales CRMs on Tailscale VPS",
    "Self-Hosted Production n8n Engine running live at n8n.devhunzila.site",
    "NAVTTC (Govt. of Pakistan) ML & AI Certification with A+ Grade",
    "Smart Helmet IoT System (A+ Grade, 95% Crash Alert Accuracy)",
    "Breast Cancer Oncology AI System (96.0% Benchmark Accuracy)",
  ],
};

/** The two founders, shown first and highlighted everywhere. */
export const FOUNDER_IDS = ["hunzila-nisar", "mahreen-hashir"];

export const AGENCY_TEAM_ROSTER: TeamMember[] = [
  {
    id: "hunzila-nisar",
    name: "Hunzila Nisar",
    role: "Founder & Lead AI Architect",
    title: "Founder",
    avatar: "/assets/team/hunzila_nisar_v2.jpg",
    badge: "FOUNDER",
    bio: "AI Engineer with a BSc in Artificial Intelligence (A+ Grade). Proven industry experience building enterprise CRMs, orchestrating private VPS infrastructure, and engineering reliable autonomous multi-agent systems.",
    specialties: ["Multi-Agent Swarms", "Custom CRMs", "LangGraph", "PyTorch", "Next.js"],
    linkedinUrl: "https://linkedin.com/in/hunzila-nisar-ai",
    portfolioUrl: "https://devhunzila.site",
  },
  {
    id: "mahreen-hashir",
    name: "Mahreen Hashir",
    role: "Co-Founder & Head of Systems",
    title: "Co-Founder",
    avatar: "/assets/team/mahreen_hashir_v2.jpg",
    badge: "CO-FOUNDER",
    bio: "Directs system verification, deterministic schema validation, and security compliance. Ensures that every platform deployed by Cortelo meets enterprise standards with 100% intellectual property transfer.",
    specialties: ["Deterministic Guardrails", "Continuous MLOps", "ASVS L2 Security", "Sentry"],
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "hamdan",
    name: "Hamdan",
    role: "Lead Full-Stack & UI/UX Developer",
    title: "Full-Stack Lead",
    avatar: "/assets/team/hamdan_v2.jpg",
    badge: "PRODUCT LEAD",
    bio: "Crafts ultra-responsive 60fps frontend interfaces with Next.js 15, React 19, and Tailwind CSS. Specializes in real-time CRM dashboards, Kanban sprint workflows, and micro-interactions.",
    specialties: ["Next.js 15", "React 19", "Tailwind CSS", "TypeScript", "WebSocket"],
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "umar-attique",
    name: "Umar Attique",
    role: "Senior AI Systems Engineer",
    title: "AI Systems",
    avatar: "/assets/team/umar_attique_v2.jpg",
    badge: "AI SYSTEMS",
    bio: "Specializes in large language model fine-tuning, retrieval-augmented generation (RAG), vector embeddings, and high-throughput model inference pipelines.",
    specialties: ["RAG Pipelines", "Llama-3.3", "Vector Databases", "FastAPI", "Python"],
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "bilal-tariq",
    name: "Bilal Tariq",
    role: "DevOps & Cloud VPS Architect",
    title: "DevOps Lead",
    avatar: "/assets/team/bilal_tariq_v2.jpg",
    badge: "INFRASTRUCTURE",
    bio: "Architects self-hosted, independent server infrastructure, Oracle Cloud VPS deployments, Tailscale private mesh networking, Docker containers, and CI/CD pipelines.",
    specialties: ["Oracle Cloud VPS", "Tailscale Mesh", "Docker", "Linux SysAdmin", "Nginx"],
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "ayesha-malik",
    name: "Ayesha Malik",
    role: "Lead Product & UX Designer",
    title: "Design Lead",
    avatar: "/assets/team/ayesha_malik_v2.jpg",
    badge: "UI/UX DESIGN",
    bio: "Designs world-class design systems, user journeys, and high-conversion agency layouts in Figma. Ensures every interaction feels intentional, modern, and accessible.",
    specialties: ["Figma Design", "Design Systems", "Conversion Design", "Wireframing"],
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "daniyal-khan",
    name: "Daniyal Khan",
    role: "Machine Learning & Vision Specialist",
    title: "ML / CV Lead",
    avatar: "/assets/team/daniyal_khan_v2.jpg",
    badge: "DEEP LEARNING",
    bio: "Builds deep convolutional neural networks, OpenCV computer vision pipelines, and predictive statistical models with scikit-learn and PyTorch.",
    specialties: ["Computer Vision", "OpenCV", "PyTorch", "CNNs", "TensorRT"],
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Enterprise QA & Verification Lead",
    title: "QA Engineer",
    avatar: "/assets/team/sarah_jenkins_v2.jpg",
    badge: "QUALITY ASSURANCE",
    bio: "Ensures zero regressions, strict type-safety, deterministic schema test benches, and compliance with OWASP ASVS L2 security standards.",
    specialties: ["ASVS L2", "E2E Testing", "Deterministic Verification", "Zod Validation"],
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "zainab-raza",
    name: "Zainab Raza",
    role: "Workflow Automation & n8n Specialist",
    title: "Automation Engineer",
    avatar: "/assets/team/zainab_raza_v2.jpg",
    badge: "AUTOMATION",
    bio: "Constructs event-driven webhook workflows, CRM synchronizations, automated notification bots, and database bridges on self-hosted n8n infrastructure.",
    specialties: ["n8n Workflows", "Webhook Busses", "Database Sync", "Cron Jobs", "APIs"],
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "alex-rivera",
    name: "Alex Rivera",
    role: "Backend & Distributed Systems Architect",
    title: "Backend Engineer",
    avatar: "/assets/team/alex_rivera_v2.jpg",
    badge: "DISTRIBUTED SYSTEMS",
    bio: "Specializes in high-throughput Node.js and Go microservices, Redis caching layers, and resilient database clustering.",
    specialties: ["Node.js", "Redis", "Distributed Systems", "MongoDB Sharding"],
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "farah-siddiqui",
    name: "Farah Siddiqui",
    role: "Performance Growth & Funnel Strategist",
    title: "Growth Lead",
    avatar: "/assets/team/farah_siddiqui_v2.jpg",
    badge: "GROWTH",
    bio: "Focuses on high-ticket customer acquisition funnels, conversion rate optimization (CRO), analytics telemetry, and CRM lead nurturing workflows.",
    specialties: ["Funnel Architecture", "CRO", "Attribution Telemetry", "A/B Testing"],
    linkedinUrl: "https://linkedin.com",
  },
];

export const AGENCY_TEAMS: TeamDivision[] = [
  {
    id: "ai-systems",
    code: "DIV-01",
    name: "Autonomous AI & Intelligent Systems Division",
    leader: "Hunzila Nisar",
    role: "Lead AI Systems Architect",
    avatar: "/assets/team/hunzila_nisar_v2.jpg",
    capabilities: [
      "Multi-Agent Swarm Engineering",
      "Deterministic Guardrails & Zod Schemas",
      "Domain-Specific Fine-Tuned LLMs",
      "Grounded RAG & Vector Embeddings",
      "Self-Correction & Autonomous Reflection",
    ],
    bio: "Engineers reliable, hallucination-resistant multi-agent systems and custom generative models with strict deterministic output validation.",
    techStack: ["LangGraph", "PyTorch", "Python", "Llama-3.3", "DeepSeek-R1", "Qdrant"],
  },
  {
    id: "mlops-security",
    code: "DIV-02",
    name: "MLOps, Guardrails & Security Division",
    leader: "Mahreen Hashir",
    role: "Head of Systems & Security",
    avatar: "/assets/team/mahreen_hashir_v2.jpg",
    capabilities: [
      "OWASP ASVS L2 Hardening Standards",
      "Deterministic Schema Enforcement & Test Benches",
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
    leader: "Hamdan",
    role: "Lead Full-Stack & UI/UX Engineers",
    avatar: "/assets/team/hamdan_v2.jpg",
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
    leader: "Bilal Tariq",
    role: "DevOps & VPS Architecture Team",
    avatar: "/assets/team/bilal_tariq_v2.jpg",
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
    leader: "Farah Siddiqui",
    role: "Growth Strategists & Funnel Architects",
    avatar: "/assets/team/farah_siddiqui_v2.jpg",
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

export const AGENCY_PROJECTS: ProjectItem[] = [
  {
    id: "revenue-crm",
    title: "Enterprise Sales CRM & Revenue Telemetry",
    subtitle: "Real-Time Sales Telemetry & Sprint Kanban Engine",
    client: "Enterprise B2B Client (Confidential)",
    badge: "ENTERPRISE CRM",
    category: "CRM & Enterprise Systems",
    status: "Confidential Enterprise CRM",
    previewImage: "/assets/projects/revenue_crm_preview.svg",
    description:
      "Full-stack enterprise CRM platform built and deployed end-to-end for commercial production. Features real-time sales analytics (calls tracking, closed TCV, signed MRR, conversion funnels), developer sprint Kanban board, automated SOP documentation, and AI client workflows, secured on a dedicated Tailscale private mesh VPS.",
    metrics: {
      primaryValue: "$1.48M+",
      primaryLabel: "Closed TCV Tracked",
      secondaryValue: "P99 < 28ms",
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
    id: "deal-engine",
    title: "AI Lead & Deal Management Platform",
    subtitle: "AI Lead Scoring, Multi-Stage Pipelines & Workflow Triggers",
    client: "Commercial SaaS Client (Confidential)",
    badge: "AI DEAL ENGINE",
    category: "AI & CRM Infrastructure",
    status: "Confidential Enterprise CRM",
    previewImage: "/assets/projects/deal_engine_preview.svg",
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
    status: "Live VPS Automation",
    liveUrl: "https://n8n.devhunzila.site",
    previewImage: "/assets/projects/n8n_engine_preview.svg",
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
    title: "Oncology Diagnostic AI (96% Accuracy)",
    subtitle: "Deep Learning & Machine Learning Diagnostic Pipeline",
    client: "Healthcare AI & Clinical Research",
    badge: "96.0% ACCURACY BENCHMARK",
    category: "Deep Learning & Computer Vision",
    status: "A+ Research & IoT",
    previewImage: "/assets/projects/healthcare_ai_preview.svg",
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
      "We design, build, and deploy custom enterprise CRMs tailored specifically to your company's sales motion. Say goodbye to bloated $200/seat SaaS subscriptions — own your platform 100% on dedicated, secure private VPS infrastructure with real-time sales telemetry, automated SOPs, and AI lead qualification.",
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
    tagline: "Next.js 15, Ultra-Premium Interfaces & APIs",
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
    title: "Predictive Analytics & IoT Systems",
    tagline: "Forecasting models and connected hardware with on-device AI",
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
  {
    id: "voice-agents",
    num: "07",
    title: "AI Voice Agents",
    tagline: "Phone agents that answer, qualify and book around the clock",
    description:
      "Inbound and outbound AI callers that speak naturally, answer questions from your knowledge base, qualify leads, book meetings into your calendar and log every call to your CRM, with a human handoff when a caller needs one.",
    sla: "Live on your number in 2 to 3 weeks",
    deliverables: [
      "Inbound reception and outbound calling agents",
      "Calendar booking, CRM logging and call summaries",
      "Human handoff, call recording and transcripts",
      "English, Urdu and multilingual voices",
    ],
    techStack: ["Vapi", "Retell AI", "Twilio", "ElevenLabs", "Deepgram", "OpenAI Realtime"],
    specs: [
      { label: "Channels", value: "Phone, WhatsApp, web widget" },
      { label: "Integrations", value: "CRM, calendar, helpdesk" },
      { label: "Delivery", value: "2 to 3 weeks" },
    ],
  },
  {
    id: "rag-assistants",
    num: "08",
    title: "RAG Assistants & AI Chatbots",
    tagline: "Assistants that answer from your own documents and data",
    description:
      "Website, WhatsApp and internal chat assistants grounded in your documents, wikis and databases, with source citations, access control and an admin panel to keep the knowledge fresh.",
    sla: "Every answer cites its source",
    deliverables: [
      "Document ingestion and vector search pipeline",
      "Website, WhatsApp and Slack chat channels",
      "Cited answers with role-based access",
      "Admin panel for knowledge updates",
    ],
    techStack: ["LangChain", "LlamaIndex", "Qdrant", "pgvector", "OpenAI", "Claude"],
    specs: [
      { label: "Grounding", value: "Retrieval with citations" },
      { label: "Channels", value: "Web, WhatsApp, Slack" },
      { label: "Delivery", value: "2 to 4 weeks" },
    ],
  },
  {
    id: "private-llm",
    num: "09",
    title: "LLM Fine-Tuning & Private LLMs",
    tagline: "Open models tuned on your data, running on your servers",
    description:
      "We fine-tune open-weight models such as Llama, Qwen and Mistral on your domain data and host them privately, so sensitive data never leaves your infrastructure and per-token API bills disappear.",
    sla: "Your data stays on your hardware",
    deliverables: [
      "Dataset preparation and LoRA / QLoRA fine-tuning",
      "Evaluation suite against your real tasks",
      "Private GPU or CPU inference server",
      "OpenAI-compatible API for your apps",
    ],
    techStack: ["Llama", "Qwen", "Mistral", "Unsloth", "vLLM", "Ollama"],
    specs: [
      { label: "Hosting", value: "On-premise or private cloud" },
      { label: "Method", value: "LoRA, QLoRA, full fine-tune" },
      { label: "Delivery", value: "3 to 6 weeks" },
    ],
  },
  {
    id: "mcp-integrations",
    num: "10",
    title: "MCP Servers & AI Integrations",
    tagline: "Connect Claude, ChatGPT and your agents to your own tools",
    description:
      "Model Context Protocol servers and tool APIs that let AI assistants read and act on your CRM, database, files and internal systems safely, with scoped permissions and audit logs.",
    sla: "Scoped permissions and full audit logs",
    deliverables: [
      "Custom MCP servers for your systems",
      "Tool calling with scoped, revocable access",
      "Audit logging of every AI action",
      "Integration with Claude, ChatGPT and in-house agents",
    ],
    techStack: ["MCP", "TypeScript", "Python", "OAuth", "PostgreSQL", "Docker"],
    specs: [
      { label: "Protocol", value: "Model Context Protocol" },
      { label: "Security", value: "OAuth and scoped tokens" },
      { label: "Delivery", value: "1 to 3 weeks" },
    ],
  },
  {
    id: "custom-models",
    num: "11",
    title: "Custom ML & Deep Learning Models",
    tagline: "Models trained on your data for prediction, classification and detection",
    description:
      "From data cleaning and feature engineering to training, evaluation and deployment, we build machine learning and deep learning models for your exact problem and serve them behind a fast API.",
    sla: "Benchmarked on your held-out data",
    deliverables: [
      "Data audit, cleaning and feature engineering",
      "Model training with CNNs, transformers or gradient boosting",
      "Evaluation report on held-out data",
      "FastAPI or ONNX deployment with monitoring",
    ],
    techStack: ["PyTorch", "TensorFlow", "Scikit-Learn", "XGBoost", "ONNX", "FastAPI"],
    specs: [
      { label: "Tasks", value: "Prediction, classification, detection" },
      { label: "Serving", value: "API, edge or batch" },
      { label: "Delivery", value: "3 to 8 weeks" },
    ],
  },
  {
    id: "face-recognition",
    num: "12",
    title: "Face Recognition & Computer Vision",
    tagline: "Attendance, access control and video analytics from your cameras",
    description:
      "Face recognition for attendance and access, object detection, people counting and video analytics that run on your existing CCTV or edge devices, with dashboards and alerts.",
    sla: "Runs on your cameras or edge devices",
    deliverables: [
      "Face enrolment, matching and liveness checks",
      "Attendance and access-control dashboards",
      "Object detection and people counting",
      "Real-time alerts from live video streams",
    ],
    techStack: ["OpenCV", "YOLO", "InsightFace", "MediaPipe", "PyTorch", "Jetson"],
    specs: [
      { label: "Input", value: "CCTV, IP cameras, mobile" },
      { label: "Deployment", value: "Edge device or server" },
      { label: "Delivery", value: "3 to 6 weeks" },
    ],
  },
  {
    id: "document-ai",
    num: "13",
    title: "Document AI & OCR",
    tagline: "Invoices, forms and contracts read and filed automatically",
    description:
      "Pipelines that read scanned and digital documents, extract the fields you need, validate them and push clean data into your ERP, CRM or spreadsheets, with a review queue for anything uncertain.",
    sla: "Human review queue for low-confidence fields",
    deliverables: [
      "OCR and layout-aware field extraction",
      "Validation rules and review queue",
      "Export to ERP, CRM, Sheets or database",
      "Urdu and English document support",
    ],
    techStack: ["Tesseract", "PaddleOCR", "LayoutLM", "GPT-4o", "Python", "n8n"],
    specs: [
      { label: "Documents", value: "Invoices, forms, IDs, contracts" },
      { label: "Output", value: "Structured JSON to your systems" },
      { label: "Delivery", value: "2 to 4 weeks" },
    ],
  },
  {
    id: "mobile-apps",
    num: "14",
    title: "Mobile Apps with AI",
    tagline: "iOS and Android apps with AI features built in",
    description:
      "Cross-platform mobile apps with on-device and cloud AI features such as chat, voice, scanning and recommendations, published to the App Store and Google Play.",
    sla: "One codebase for iOS and Android",
    deliverables: [
      "React Native or Flutter app",
      "AI chat, voice and camera features",
      "Push notifications, payments and auth",
      "App Store and Google Play release",
    ],
    techStack: ["React Native", "Expo", "Flutter", "Firebase", "Supabase", "Stripe"],
    specs: [
      { label: "Platforms", value: "iOS and Android" },
      { label: "Backend", value: "Supabase, Firebase or custom" },
      { label: "Delivery", value: "6 to 10 weeks" },
    ],
  },
  {
    id: "data-dashboards",
    num: "15",
    title: "Data Engineering & Dashboards",
    tagline: "Your scattered data in one place, with dashboards people use",
    description:
      "We pull data from your apps, sheets and databases into one warehouse, clean it on a schedule and build live dashboards and reports, with an AI layer that answers questions in plain language.",
    sla: "Scheduled pipelines with failure alerts",
    deliverables: [
      "ETL pipelines from apps, sheets and databases",
      "Central warehouse with clean, modelled tables",
      "Live dashboards and scheduled reports",
      "Ask-your-data AI assistant",
    ],
    techStack: ["PostgreSQL", "dbt", "Airbyte", "Metabase", "Power BI", "Python"],
    specs: [
      { label: "Sources", value: "Apps, sheets, databases, APIs" },
      { label: "Output", value: "Dashboards and reports" },
      { label: "Delivery", value: "2 to 5 weeks" },
    ],
  },
  {
    id: "ai-content",
    num: "16",
    title: "AI Content & SEO Automation",
    tagline: "Content, social posts and SEO pages produced on a schedule",
    description:
      "Automated content systems that research, draft, review and publish blog posts, social media and product pages in your brand voice, with a human approval step and SEO tracking.",
    sla: "Human approval before anything publishes",
    deliverables: [
      "Brand-voice content generation workflows",
      "Social media scheduling and repurposing",
      "Programmatic SEO pages",
      "Approval queue and performance tracking",
    ],
    techStack: ["n8n", "OpenAI", "Claude", "WordPress", "Webflow", "Search Console"],
    specs: [
      { label: "Channels", value: "Blog, social, product pages" },
      { label: "Control", value: "Human approval step" },
      { label: "Delivery", value: "2 to 3 weeks" },
    ],
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    quote: "Our operational velocity and pipeline visibility went through the roof. The custom CRM and automation engine Cortelo built completely eliminated our manual spreadsheet backlog and saved our team 40+ hours every week.",
    author: "Marcus Vance",
    role: "Managing Partner",
    company: "Vance Logistics & Fleet",
    avatar: "/assets/brand/cortelo-avatar.png",
  },
  {
    id: "t2",
    quote: "Hunzila and the Cortelo engineering team don't mess around. Their self-hosted n8n infrastructure handles millions of monthly executions with zero third-party SaaS limits, saving us over $2,400 monthly.",
    author: "Kareem El-Sayed",
    role: "Founder & CTO",
    company: "Apex Flow Systems",
    avatar: "/assets/brand/cortelo-avatar.png",
  },
  {
    id: "t3",
    quote: "The multi-agent autonomous swarm they architected handles complex customer routing and knowledge retrieval with sub-50ms latency. Zero hallucinations, perfectly structured outputs every single time.",
    author: "Elena Rostova",
    role: "VP of Engineering",
    company: "TensorScale Systems",
    avatar: "/assets/brand/cortelo-avatar.png",
  },
  {
    id: "t4",
    quote: "From where we were before Cortelo to where we are now; it's night and day. 100% intellectual property transfer gave our enterprise complete ownership over our proprietary models and private VPS.",
    author: "David Chen",
    role: "Chief Commercial Officer",
    company: "Aegis Financial Capital",
    avatar: "/assets/brand/cortelo-avatar.png",
  },
  {
    id: "t5",
    quote: "They built our entire Next.js 15 platform with strict ASVS L2 security hardening and sub-100ms TTFB. Outstanding full-stack engineering and transparent milestone updates throughout.",
    author: "Sophia Sterling",
    role: "Director of Product",
    company: "Crestview Media & SaaS",
    avatar: "/assets/brand/cortelo-avatar.png",
  },
  {
    id: "t6",
    quote: "Cortelo deployed our custom deep learning classification microservice with 96% verified diagnostic accuracy. Incredible engineering precision, sub-40ms latency, and zero vendor lock-in.",
    author: "Dr. Tariq Mehmood",
    role: "Head of AI Imaging",
    company: "PulseBio Diagnostics",
    avatar: "/assets/brand/cortelo-avatar.png",
  },
];

export const CLIENT_LOGOS = [
  { name: "Nostalgie", image: "/assets/conversion/img_14.png" },
  { name: "Classicé", image: "/assets/conversion/img_15.png" },
  { name: "Yogamy", image: "/assets/conversion/img_16.png" },
  { name: "Friday", image: "/assets/conversion/img_17.png" },
  { name: "Thursday", image: "/assets/conversion/img_19.png" },
  { name: "Aether AI", image: "/assets/conversion/img_4.png" },
];

export const AGENCY_FAQS = [
  {
    q: "How do you tailor custom AI and CRM systems for different businesses?",
    a: "We conduct an in-depth Discovery Milestone during Week 1 to analyze your operational bottlenecks, data pipelines, and sales velocity. We then build custom schemas, deterministic guardrails, and real-time telemetry dashboards deployed exclusively on your private VPS infrastructure.",
  },
  {
    q: "Who owns the code and intellectual property once a project is completed?",
    a: "You do — 100%. Upon final milestone acceptance, Cortelo transfers full, unencumbered ownership of all source code, models, configurations, deployment scripts, and architectural assets directly to your private repositories. There are zero licensing lock-ins and zero ongoing per-seat software fees.",
  },
  {
    q: "Can we review Hunzila Nisar's personal engineering credentials and live portfolio?",
    a: "Yes! Hunzila Nisar's complete portfolio, verified projects, NAVTTC distinction in AI/ML, and industry experience are live at https://devhunzila.site. You can explore his work, inspect production systems, or connect directly via email (hunzila@cortelo.tech) or LinkedIn.",
  },
  {
    q: "How do your multi-agent AI systems avoid hallucinations and errors?",
    a: "We do not rely on fragile raw prompts. All Cortelo agent workflows are engineered with deterministic schema validation (Zod / Pydantic), grounded Retrieval-Augmented Generation (RAG) with source back-linking, structured function calling, and automated self-correction loops. If a model output fails validation, it is rejected and retried before reaching your client interface.",
  },
  {
    q: "What makes your self-hosted n8n automation engine superior to Zapier or Make?",
    a: "Zapier and Make charge steep per-task subscription fees that balloon into thousands of dollars monthly as your volume grows. Our self-hosted n8n engine runs on an isolated Oracle Cloud VPS server connected via a private Tailscale mesh network, processing millions of webhook events with zero third-party platform taxes.",
  },
  {
    q: "What is your typical project delivery timeline and process?",
    a: "We execute in four structured milestones with verified acceptance tests: Milestone 01 (Technical Discovery & Blueprint — Week 1), Milestone 02 (Core Engine & Pipelines — Weeks 2-3), Milestone 03 (Platform Integration & Security — Weeks 4-5), and Milestone 04 (Production Deployment & 100% IP Handover — Week 6).",
  },
];
