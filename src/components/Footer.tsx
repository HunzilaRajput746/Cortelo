"use client";

import React, { useState } from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { FOUNDER_DATA } from "@/lib/agencyData";
import { ExternalLink, MessageSquare, Mail, Award, Check, ArrowRight } from "lucide-react";
import { useAgencyShell } from "./ClientShell";

export default function Footer() {
  const { openFounderModal } = useAgencyShell();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="py-20 border-t border-cortelo-border bg-[#07090E] text-xs font-mono text-cortelo-muted relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">

        {/* Newsletter Section (Conversion Style) */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-cortelo-border mb-16 bg-[#0B0F19]/80 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full border border-cortelo-mint/40 bg-cortelo-mint/10 text-[11px] font-mono text-cortelo-mint font-semibold uppercase">
                Newsletter
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase text-cortelo-text tracking-tight font-sans">
                Join our <span className="text-cortelo-mint italic font-serif lowercase">newsletter</span>.
              </h3>
              <p className="text-xs sm:text-sm text-cortelo-muted max-w-md font-sans font-light leading-relaxed">
                Sign up to our mailing list below and be the first to know about new engineering updates, AI benchmarks, and case studies. Don&apos;t worry, we hate spam too.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-5 py-3.5 rounded-2xl bg-[#131926] border border-cortelo-border text-sm text-cortelo-text placeholder:text-cortelo-muted/50 focus:outline-none focus:border-cortelo-mint transition-colors font-sans"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-cortelo-mint text-[#07090E] font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-[0_0_20px_rgba(45,212,167,0.3)] font-sans"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-4 h-4" /> Subscribed
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-cortelo-mint font-mono animate-in fade-in">
                  ✓ Thank you for subscribing! You will receive our latest architecture benchmarks.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* 4-Column Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo className="w-7 h-7" />
              <span className="text-base font-black uppercase text-cortelo-text tracking-wider font-sans">
                CORTELO
              </span>
            </div>

            <p className="text-xs text-cortelo-muted leading-relaxed max-w-sm font-sans font-light">
              Cortelo is an independent artificial intelligence and software engineering studio. We architect bespoke autonomous agents, proprietary enterprise CRMs, self-hosted automation infrastructure, and resilient full-stack platforms.
            </p>

            <div className="pt-2 text-[11px] text-cortelo-muted space-y-1">
              <div>
                Directed by{" "}
                <button
                  onClick={openFounderModal}
                  className="text-cortelo-mint hover:underline font-bold cursor-pointer"
                >
                  Hunzila Nisar
                </button>{" "}
                &amp;{" "}
                <span className="text-cortelo-text font-bold">Mahreen Hashir</span>.
              </div>
              <div>BSc Artificial Intelligence &bull; Production Systems Verified</div>
            </div>

            {/* Social & Direct Contact Links */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={FOUNDER_DATA.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-cortelo-border bg-[#0F131D] flex items-center justify-center text-cortelo-muted hover:text-cortelo-mint hover:border-cortelo-mint transition-all"
                title="Founder Portfolio: devhunzila.site"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={FOUNDER_DATA.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-cortelo-border bg-[#0F131D] flex items-center justify-center text-green-400 hover:border-green-400 transition-all"
                title="Fiverr Profile & Services"
              >
                <Award className="w-3.5 h-3.5" />
              </a>

              <a
                href={FOUNDER_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-cortelo-border bg-[#0F131D] flex items-center justify-center text-cortelo-muted hover:text-white hover:border-white transition-all"
                title="GitHub @HunzilaRajput746"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                href={FOUNDER_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-cortelo-border bg-[#0F131D] flex items-center justify-center text-cortelo-muted hover:text-cyan-400 hover:border-cyan-400 transition-all"
                title="LinkedIn Profile"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href={FOUNDER_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/20 transition-all"
                title="Direct Project Inquiry"
              >
                <MessageSquare className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Proprietary Systems & Services */}
          <div>
            <div className="text-cortelo-text uppercase tracking-widest font-bold mb-4 text-[11px]">
              Services &amp; Architecture
            </div>
            <ul className="space-y-2.5 font-sans">
              <li>
                <Link href="/services/ai-automation" className="hover:text-cortelo-mint transition-colors">
                  Autonomous AI Agents
                </Link>
              </li>
              <li>
                <Link href="/services/enterprise-crm" className="hover:text-cortelo-mint transition-colors">
                  Custom Enterprise CRMs
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-infrastructure" className="hover:text-cortelo-mint transition-colors">
                  Self-Hosted VPS &amp; n8n
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="hover:text-cortelo-mint transition-colors">
                  Full-Stack Next.js 15
                </Link>
              </li>
              <li>
                <Link href="/#results" className="hover:text-cortelo-mint transition-colors">
                  Client Results &amp; Metrics
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio & Founder */}
          <div>
            <div className="text-cortelo-text uppercase tracking-widest font-bold mb-4 text-[11px]">
              Information
            </div>
            <ul className="space-y-2.5 font-sans">
              <li>
                <Link href="/about" className="hover:text-cortelo-mint transition-colors">
                  About Cortelo
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-cortelo-mint transition-colors">
                  Selected Work &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-cortelo-mint transition-colors">
                  Engineering Process
                </Link>
              </li>
              <li>
                <Link href="/#team" className="hover:text-cortelo-mint transition-colors">
                  Engineering Team
                </Link>
              </li>
              <li>
                <a
                  href={FOUNDER_DATA.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cortelo-mint hover:underline font-bold flex items-center gap-1"
                >
                  <span>Founder Portfolio</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-cortelo-text uppercase tracking-widest font-bold mb-4 text-[11px]">
              Contact
            </div>
            <ul className="space-y-2.5 font-sans">
              <li>
                <a
                  href={FOUNDER_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>Direct Inquiry Channel</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${FOUNDER_DATA.email}`}
                  className="hover:text-cortelo-mint transition-colors break-all"
                >
                  {FOUNDER_DATA.email}
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@cortelo.ai"
                  className="hover:text-cortelo-mint transition-colors"
                >
                  hello@cortelo.ai
                </a>
              </li>
              <li>
                <a
                  href={FOUNDER_DATA.fiverrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors flex items-center gap-1"
                >
                  <span>Order on Fiverr</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-cortelo-mint hover:underline font-semibold">
                  Book 15-min Call &rarr;
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cortelo-border flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px]">
          <div>
            &copy; 2026 Cortelo Systems Inc. Directed by Hunzila Nisar &amp; Mahreen Hashir. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>PKT (UTC+5) &bull; Global Remote Delivery</span>
            <span className="text-cortelo-mint">100% IP Code Transfer</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
