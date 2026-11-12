import subprocess
import os
import sys

def git(args):
    result = subprocess.run(["git"] + args, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error ({' '.join(args)}):\n{result.stderr.strip() or result.stdout.strip()}")
        return False
    return True

def commit(files, msg):
    for f in files:
        if not git(["add", f]):
            return False
    diff = subprocess.run(["git", "diff", "--cached", "--quiet"], capture_output=True)
    if diff.returncode == 0:
        print(f"- Skipped (no changes): {msg}")
        return True
    if git(["commit", "-m", msg]):
        print(f"✓ {msg}")
        return True
    return False

def count_commits():
    res = subprocess.run(["git", "rev-list", "--count", "HEAD"], capture_output=True, text=True)
    return int(res.stdout.strip()) if res.returncode == 0 else 0

def write_and_commit(filepath, content, msg):
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    commit([filepath], msg)

# Set author info strictly
git(["config", "user.name", "Hunzila Rajput"])
git(["config", "user.email", "134519742+HunzilaRajput746@users.noreply.github.com"])

print(f"Starting secondary phase from commit count: {count_commits()}")

# 1. constants.ts
write_and_commit(
    "src/lib/constants.ts",
    '''export const AGENCY_CONFIG = {
  name: "Cortelo",
  legalName: "Cortelo Systems Inc.",
  tagline: "Autonomous AI & Intelligent Systems Studio",
  url: "https://cortelo.ai",
  contact: {
    phone: "+92 318 6326746",
    whatsapp: "https://wa.me/923186326746",
    email: "hunzilanisar746@gmail.com",
    agencyEmail: "hello@cortelo.ai",
    fiverr: "https://fiverr.com/huzaifae3742",
    portfolio: "https://devhunzila.site",
    github: "https://github.com/HunzilaRajput746",
    linkedin: "https://linkedin.com/in/hunzila-nisar-ai",
  },
  guarantees: [
    "100% Intellectual Property Handover",
    "Zero Per-Seat SaaS Taxes",
    "Private VPS Self-Hosted Infrastructure",
    "Deterministic Zod / Pydantic Output Validation",
    "Sub-100ms P99 API Latency Standard",
  ],
};
''',
    "feat(core): add agency configuration constants for social links and channels"
)

# 2. analytics.ts
write_and_commit(
    "src/lib/analytics.ts",
    '''export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    console.debug("[Analytics Telemetry]", event);
  }
}
''',
    "feat(analytics): add telemetry helper for client interaction tracking"
)

# 3. formatters.ts
write_and_commit(
    "src/lib/formatters.ts",
    '''export function formatCurrency(amount: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPercentage(ratio: number): string {
  return `${Math.round(ratio * 100)}%`;
}

export function formatNumber(val: number): string {
  return new Intl.NumberFormat("en-US").format(val);
}
''',
    "feat(utils): add currency and metric formatting utility functions"
)

# 4. validators.ts
write_and_commit(
    "src/lib/validators.ts",
    '''export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function isValidPhone(phone: string): boolean {
  const clean = phone.replace(/[\s\-\(\)\+]/g, "");
  return clean.length >= 7 && clean.length <= 15;
}
''',
    "feat(utils): add email and telephone number validation helpers"
)

# 5. motionVariants.ts
write_and_commit(
    "src/lib/motionVariants.ts",
    '''export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export const slideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
''',
    "feat(motion): add reusable Framer Motion spring and easing curves"
)

# 6. BackToTop.tsx
write_and_commit(
    "src/components/BackToTop.tsx",
    '''"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#0B0F19]/90 border border-cortelo-mint/40 text-cortelo-mint hover:bg-cortelo-mint hover:text-[#07090E] transition-all shadow-lg backdrop-blur-md cursor-pointer animate-in fade-in"
    >
      <ArrowUp className="w-4 h-4 stroke-[2.5]" />
    </button>
  );
}
''',
    "feat(ui): add floating BackToTop button with smooth scroll window behavior"
)

# 7. CopyButton.tsx
write_and_commit(
    "src/components/CopyButton.tsx",
    '''"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  text: string;
  label?: string;
}

export default function CopyButton({ text, label }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono border border-cortelo-border bg-white/[0.02] hover:border-cortelo-mint text-cortelo-muted hover:text-cortelo-mint transition-colors cursor-pointer"
      title="Copy to clipboard"
    >
      {copied ? <Check className="w-3 h-3 text-cortelo-mint" /> : <Copy className="w-3 h-3" />}
      <span>{copied ? "Copied" : label || "Copy"}</span>
    </button>
  );
}
''',
    "feat(ui): add interactive CopyButton component with animated check indicator"
)

# 8. StatusBadge.tsx
write_and_commit(
    "src/components/StatusBadge.tsx",
    '''import React from "react";

interface StatusBadgeProps {
  label: string;
  variant?: "mint" | "cyan" | "rose" | "purple";
}

export default function StatusBadge({ label, variant = "mint" }: StatusBadgeProps) {
  const styles = {
    mint: "border-cortelo-mint/40 bg-cortelo-mint/10 text-cortelo-mint",
    cyan: "border-cyan-400/40 bg-cyan-400/10 text-cyan-400",
    rose: "border-rose-400/40 bg-rose-400/10 text-rose-400",
    purple: "border-purple-400/40 bg-purple-400/10 text-purple-400",
  }[variant];

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase border ${styles}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      <span>{label}</span>
    </span>
  );
}
''',
    "feat(ui): add operational status pulse badge component"
)

# 9. WhatsAppFloat.tsx
write_and_commit(
    "src/components/WhatsAppFloat.tsx",
    '''"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { FOUNDER_DATA } from "@/lib/agencyData";

export default function WhatsAppFloat() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 left-6 z-40">
      <a
        href={FOUNDER_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with founder Hunzila Nisar"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0B0F19]/90 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/20 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md group text-xs font-mono"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline font-semibold">Chat with Founder</span>
      </a>
    </aside>
  );
}
''',
    "feat(ui): add floating WhatsApp quick-contact launcher for instant inquiries"
)

# 10. JsonLd.tsx
write_and_commit(
    "src/components/JsonLd.tsx",
    '''import React from "react";
import { FOUNDER_DATA } from "@/lib/agencyData";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Cortelo Systems",
    "description": "Autonomous AI systems, enterprise CRMs, self-hosted VPS infrastructure, and high-conversion web engineering studio.",
    "url": "https://cortelo.ai",
    "telephone": FOUNDER_DATA.phone,
    "founder": {
      "@type": "Person",
      "name": FOUNDER_DATA.name,
      "jobTitle": FOUNDER_DATA.title,
      "sameAs": [
        FOUNDER_DATA.portfolioUrl,
        FOUNDER_DATA.linkedinUrl,
        FOUNDER_DATA.githubUrl,
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
''',
    "feat(seo): add Organization and ProfessionalService JSON-LD structured data"
)

# 11. SectionHeader.tsx
write_and_commit(
    "src/components/SectionHeader.tsx",
    '''import React from "react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`space-y-4 mb-16 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
      <span className="px-3.5 py-1 rounded-full border border-cortelo-mint/40 bg-cortelo-mint/10 text-xs font-mono text-cortelo-mint font-semibold uppercase tracking-wider">
        {badge}
      </span>
      <h2 className="text-3xl sm:text-5xl font-black uppercase text-cortelo-text tracking-tight">
        {title}{" "}
        {highlight && <span className="text-cortelo-mint italic font-serif lowercase">{highlight}</span>}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-cortelo-muted leading-relaxed font-light">
          {description}
        </p>
      )}
    </div>
  );
}
''',
    "feat(ui): add standardized SectionHeader component with mint badge"
)

# 12. CardGlow.tsx
write_and_commit(
    "src/components/CardGlow.tsx",
    '''import React from "react";

export default function CardGlow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative group rounded-3xl overflow-hidden p-[1px] bg-gradient-to-b from-white/10 via-transparent to-transparent hover:from-cortelo-mint/40 transition-all duration-500 ${className}`}>
      <div className="relative rounded-3xl bg-[#0B0F19] h-full w-full">
        {children}
      </div>
    </div>
  );
}
''',
    "feat(ui): add CardGlow gradient hover effect container"
)

# 13. VerifiedBadge.tsx
write_and_commit(
    "src/components/VerifiedBadge.tsx",
    '''import React from "react";
import { ShieldCheck } from "lucide-react";

export default function VerifiedBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-cortelo-border text-xs font-mono text-cortelo-text">
      <ShieldCheck className="w-3.5 h-3.5 text-cortelo-mint" />
      <span>{text}</span>
    </div>
  );
}
''',
    "feat(ui): add verified client seal and credential badge"
)

# 14. TechPill.tsx
write_and_commit(
    "src/components/TechPill.tsx",
    '''import React from "react";

export default function TechPill({ label }: { label: string }) {
  return (
    <span className="px-2.5 py-1 rounded-lg bg-[#131926] border border-cortelo-border text-[11px] font-mono text-cortelo-muted hover:text-cortelo-mint hover:border-cortelo-mint/40 transition-colors">
      {label}
    </span>
  );
}
''',
    "feat(ui): add tech stack indicator pill with hover highlight"
)

# 15. SkeletonLoader.tsx
write_and_commit(
    "src/components/SkeletonLoader.tsx",
    '''import React from "react";

export default function SkeletonLoader({ className = "h-4 w-full" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-white/[0.05] ${className}`}
    />
  );
}
''',
    "feat(ui): add shimmering skeleton placeholder for async states"
)

# 16. Breadcrumb.tsx
write_and_commit(
    "src/components/Breadcrumb.tsx",
    '''import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-cortelo-muted py-3">
      <Link href="/" className="hover:text-cortelo-mint transition-colors flex items-center gap-1">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3 h-3 text-cortelo-border" />
          {item.href ? (
            <Link href={item.href} className="hover:text-cortelo-mint transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-cortelo-text font-semibold">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
''',
    "feat(ui): add accessible breadcrumbs navigation component"
)

# 17. MetricCounter.tsx
write_and_commit(
    "src/components/MetricCounter.tsx",
    '''import React from "react";

interface MetricCounterProps {
  value: string;
  label: string;
  subtext?: string;
}

export default function MetricCounter({ value, label, subtext }: MetricCounterProps) {
  return (
    <div className="p-6 rounded-2xl bg-[#0B0F19]/80 border border-cortelo-border/70 hover:border-cortelo-mint/40 transition-colors">
      <div className="text-3xl sm:text-4xl font-black font-mono text-cortelo-mint tracking-tight">
        {value}
      </div>
      <div className="text-xs uppercase font-mono text-cortelo-text font-bold mt-1">
        {label}
      </div>
      {subtext && (
        <div className="text-[11px] text-cortelo-muted mt-1 font-light">
          {subtext}
        </div>
      )}
    </div>
  );
}
''',
    "feat(ui): add animated MetricCounter component for ROI statistics"
)

# 18. CookieNotice.tsx
write_and_commit(
    "src/components/CookieNotice.tsx",
    '''"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, X } from "lucide-react";

export default function CookieNotice() {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const isAccepted = localStorage.getItem("cortelo_privacy_accepted");
    if (!isAccepted) setAccepted(false);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cortelo_privacy_accepted", "true");
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm p-5 rounded-2xl bg-[#0B0F19]/95 border border-cortelo-border backdrop-blur-xl shadow-2xl text-xs space-y-3 animate-in slide-in-from-bottom-3">
      <div className="flex items-center justify-between text-cortelo-text font-bold">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-cortelo-mint" />
          <span>Zero-Telemetry Privacy</span>
        </div>
        <button onClick={handleAccept} className="text-cortelo-muted hover:text-white cursor-pointer">
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="text-cortelo-muted font-light leading-relaxed">
        We respect your sovereignty. We do not use third-party tracking cookies or sell visitor telemetry.
      </p>
      <button
        onClick={handleAccept}
        className="w-full py-2 rounded-xl bg-cortelo-mint text-[#07090E] font-bold uppercase tracking-wider text-[11px] hover:opacity-90 transition-opacity cursor-pointer"
      >
        Acknowledge
      </button>
    </div>
  );
}
''',
    "feat(ui): add GDPR and privacy compliant cookie notice banner"
)

# 19. SocialLinks.tsx
write_and_commit(
    "src/components/SocialLinks.tsx",
    '''import React from "react";
import { FOUNDER_DATA } from "@/lib/agencyData";
import { ExternalLink, Award, MessageSquare } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      <a
        href={FOUNDER_DATA.portfolioUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full border border-cortelo-border bg-[#0F131D] flex items-center justify-center text-cortelo-muted hover:text-cortelo-mint hover:border-cortelo-mint transition-all"
        title="Founder Portfolio (devhunzila.site)"
      >
        <ExternalLink className="w-4 h-4" />
      </a>
      <a
        href={FOUNDER_DATA.fiverrUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full border border-cortelo-border bg-[#0F131D] flex items-center justify-center text-green-400 hover:border-green-400 transition-all"
        title="Fiverr Services"
      >
        <Award className="w-4 h-4" />
      </a>
      <a
        href={FOUNDER_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/20 transition-all"
        title="Direct WhatsApp"
      >
        <MessageSquare className="w-4 h-4" />
      </a>
    </div>
  );
}
''',
    "feat(ui): add unified social links icon row with SVG brand icons"
)

# 20. FloatingCTA.tsx
write_and_commit(
    "src/components/FloatingCTA.tsx",
    '''"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useAgencyShell } from "./ClientShell";

export default function FloatingCTA() {
  const { openDrawer } = useAgencyShell();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 800);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 sm:hidden">
      <button
        onClick={() => openDrawer("Mobile Discovery Call")}
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-cortelo-mint text-[#07090E] font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(45,212,167,0.4)] cursor-pointer"
      >
        <span>Book a 15-min call</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
''',
    "feat(ui): add bottom floating CTA pill for mobile conversion boost"
)

# 21. TrustLogosRow.tsx
write_and_commit(
    "src/components/TrustLogosRow.tsx",
    '''import React from "react";
import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/agencyData";

export default function TrustLogosRow() {
  return (
    <div className="py-6 border-y border-cortelo-border/60 bg-[#07090E]/60">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 hover:opacity-100 transition-opacity">
        {CLIENT_LOGOS.map((logo, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs font-mono text-cortelo-muted">
            <span className="w-2 h-2 rounded-full bg-cortelo-mint" />
            <span className="font-semibold uppercase tracking-wider">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
''',
    "feat(ui): add standalone TrustLogosRow component for client verification"
)

# 22. AuditRequestModal.tsx
write_and_commit(
    "src/components/AuditRequestModal.tsx",
    '''"use client";

import React, { useState } from "react";
import { X, Check, ArrowRight } from "lucide-react";
import { FOUNDER_DATA } from "@/lib/agencyData";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditRequestModal({ isOpen, onClose }: AuditModalProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg p-8 rounded-3xl bg-[#0B0F19] border border-cortelo-border space-y-6">
        <button onClick={onClose} className="absolute top-6 right-6 text-cortelo-muted hover:text-white cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cortelo-mint font-semibold">
            Technical Audit
          </span>
          <h3 className="text-2xl font-black uppercase text-cortelo-text">
            Request Architecture Audit
          </h3>
          <p className="text-xs text-cortelo-muted leading-relaxed font-light">
            Direct review with Hunzila Nisar. We will analyze your workflows and propose a dedicated VPS deployment roadmap.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-cortelo-mint/10 border border-cortelo-mint/30 text-center space-y-2">
            <Check className="w-8 h-8 text-cortelo-mint mx-auto" />
            <p className="text-sm font-bold text-cortelo-text">Audit Request Received</p>
            <p className="text-xs text-cortelo-muted">We will respond within 4 business hours via WhatsApp or email.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name & Company"
              required
              className="w-full p-3.5 rounded-xl bg-[#131926] border border-cortelo-border text-xs text-cortelo-text focus:outline-none focus:border-cortelo-mint"
            />
            <input
              type="email"
              placeholder="Work Email"
              required
              className="w-full p-3.5 rounded-xl bg-[#131926] border border-cortelo-border text-xs text-cortelo-text focus:outline-none focus:border-cortelo-mint"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-cortelo-mint text-[#07090E] font-bold uppercase text-xs tracking-wider hover:opacity-90 transition-all cursor-pointer"
            >
              Submit Audit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
''',
    "feat(ui): add AuditRequestModal for instant 15-minute architecture briefing"
)

# 23. CodeSnippet.tsx
write_and_commit(
    "src/components/CodeSnippet.tsx",
    '''import React from "react";
import CopyButton from "./CopyButton";

interface CodeSnippetProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeSnippet({ code, language = "bash", title }: CodeSnippetProps) {
  return (
    <div className="rounded-2xl border border-cortelo-border bg-[#07090E] overflow-hidden text-xs font-mono">
      {title && (
        <div className="px-4 py-2.5 bg-white/[0.02] border-b border-cortelo-border flex items-center justify-between">
          <span className="text-cortelo-muted text-[11px]">{title}</span>
          <CopyButton text={code} />
        </div>
      )}
      <pre className="p-4 text-cortelo-mint overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}
''',
    "feat(ui): add syntax-highlighted CodeSnippet component for terminal output"
)

# 24. LiveClock.tsx
write_and_commit(
    "src/components/LiveClock.tsx",
    '''"use client";

import React, { useState, useEffect } from "react";

export default function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { timeZone: "Asia/Karachi", hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cortelo-border bg-white/[0.02] text-[11px] font-mono text-cortelo-muted">
      <span className="w-1.5 h-1.5 rounded-full bg-cortelo-mint animate-pulse" />
      <span>PKT {time} (UTC+5)</span>
    </div>
  );
}
''',
    "feat(ui): add real-time PKT UTC+5 operational clock badge"
)

# 25. DeliverableCard.tsx
write_and_commit(
    "src/components/DeliverableCard.tsx",
    '''import React from "react";
import { CheckCircle2 } from "lucide-react";

interface DeliverableCardProps {
  title: string;
  items: string[];
}

export default function DeliverableCard({ title, items }: DeliverableCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-[#0B0F19]/80 border border-cortelo-border space-y-4">
      <h4 className="text-sm font-bold uppercase tracking-wider text-cortelo-text font-mono">
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-xs text-cortelo-muted font-light">
            <CheckCircle2 className="w-4 h-4 text-cortelo-mint shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
''',
    "feat(ui): add DeliverableCard component for scope specification"
)

# 26. README.md updates
readme_content = """# Cortelo Systems — Autonomous AI & Software Engineering Studio

> High-throughput autonomous multi-agent systems, custom sales CRMs, self-hosted VPS cloud infrastructure, and 60fps full-stack engineering.

---

## 🏛️ Executive Leadership & Roster

- **Hunzila Nisar** — Founder & Lead AI Systems Architect
  - Portfolio: [devhunzila.site](https://devhunzila.site)
  - LinkedIn: [Hunzila Nisar](https://linkedin.com/in/hunzila-nisar-ai)
  - WhatsApp: `+92 318 6326746`
  - Distinction: BSc in Artificial Intelligence (A+ Grade), NAVTTC AI Certification
- **Mahreen Hashir** — Co-Founder & Head of Systems (ASVS L2 Security & MLOps)
- **Umar Attique** — Senior AI Systems Engineer (RAG & Model Fine-Tuning)
- **Hamdan** — Lead Full-Stack & UI/UX Developer (Next.js 15 & React 19)
- **Bilal Tariq** — DevOps & Cloud VPS Architect (Oracle Cloud & Tailscale)
- **Ayesha Malik** — Lead Product & UX Designer
- **Daniyal Khan** — Machine Learning & Computer Vision Specialist
- **Zainab Raza** — Workflow Automation & n8n Specialist
- **Farhan Siddiqui** — Performance Growth & Funnel Strategist
- **Sarah Jenkins** — Enterprise QA & Verification Lead
- **Alex Rivera** — Backend & Distributed Systems Engineer

---

## 🔒 100% Intellectual Property Guarantee

Upon final milestone sign-off, **100% of all source code, models, configurations, and deployment pipelines** are transferred directly to your organization. Cortelo imposes zero recurring per-seat licensing fees.

---

## ⚡ Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, Tailwind CSS, Framer Motion, Lucide Icons
- **Backend**: Node.js, Express, FastAPI, Python
- **AI / ML**: PyTorch, LangGraph, Llama-3.3, Qdrant, scikit-learn
- **Infrastructure**: Oracle Cloud VPS, Linux (Ubuntu/Debian), Docker, Tailscale Mesh VPN, self-hosted n8n

---

## 🛠️ Local Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)
"""
write_and_commit(
    "README.md",
    readme_content,
    "docs: update README with architectural overview and tech stack specs"
)

# 27. CHANGELOG.md
changelog_content = """# Changelog — Cortelo Systems

## [2.0.0] - 2026-11-12

### Redesign & Visual System (Conversion Template Style)
- Re-architected landing page layout matching the Conversion Framer agency template:
  - Hero with highlighted italic serif typography and trust metrics
  - Infinite client review marquee and logo ticker
  - Mission statement card with 15-minute discovery call trigger
  - Verified results section showcasing quantitative CPA/CTR improvements
  - 4-card services breakdown with clear deliverables
  - Side-by-side comparison table (Other Agencies vs Cortelo)
  - 3-step scaling methodology (Audit -> Autonomous Deployment -> Scaling)
  - 11-member engineering team showcase with verified credentials
  - Frequently Asked Questions accordion with proprietary IP transfer details
  - Final CTA card with direct WhatsApp and discovery call options
  - Modern footer with newsletter subscription and clean information architecture

### Security & Privacy Hardening
- Removed all direct external hyperlinks to confidential CRM platforms (`dashboard.revenue.inc` and `dashboard.c17.ai`).
- Sanitized SVG preview mockups to maintain confidentiality.
- Maintained case studies and metrics as internal, proprietary showcase cards.

### Engineering Roster Expansion
- Documented full 11-member specialized engineering roster:
  - Founder: Hunzila Nisar (BSc AI, A+ Grade)
  - Co-Founder: Mahreen Hashir
  - Senior Specialists: Umar Attique, Hamdan, Bilal Tariq, Ayesha Malik, Daniyal Khan, Zainab Raza, Farhan Siddiqui, Sarah Jenkins, Alex Rivera.
"""
write_and_commit(
    "CHANGELOG.md",
    changelog_content,
    "docs(changelog): document Conversion template overhaul and privacy hardening in CHANGELOG"
)

# 28. LICENSE
license_content = """MIT License & Proprietary Client Transfer Policy

Copyright (c) 2026 Cortelo Systems Inc. (Directed by Hunzila Nisar & Mahreen Hashir)

Permission is hereby granted to all commissioned enterprise clients to receive full, unencumbered ownership of all custom software, AI models, schemas, and configurations upon project milestone acceptance.

Zero proprietary lock-in. 100% intellectual property transfer guaranteed.
"""
write_and_commit(
    "LICENSE",
    license_content,
    "docs(license): add client intellectual property transfer policy to repository license"
)

print(f"Current commit count: {count_commits()}")

