import React from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-cortelo-border bg-cortelo-obsidian text-xs font-mono text-cortelo-muted relative z-10">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <BrandLogo className="w-6 h-6" />
            <p className="text-xs text-cortelo-muted leading-relaxed max-w-sm font-sans font-light">
              Cortelo is an independent artificial intelligence and software engineering studio. We build and deploy bespoke autonomous agents, neural architectures, and resilient full-stack platforms.
            </p>
            <div className="pt-2 text-[11px] text-cortelo-muted">
              Founded & Directed by <span className="text-cortelo-text">Hunzila Nisar</span> & <span className="text-cortelo-text">Mahreen Hashir</span>.
            </div>
          </div>

          {/* Systems */}
          <div>
            <div className="text-cortelo-text uppercase tracking-widest font-bold mb-4 text-[11px]">
              Systems
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services/ai-automation" className="hover:text-cortelo-mint transition-colors">
                  AI Automation & Agents
                </Link>
              </li>
              <li>
                <Link href="/services/machine-learning" className="hover:text-cortelo-mint transition-colors">
                  Machine Learning Core
                </Link>
              </li>
              <li>
                <Link href="/services/generative-ai" className="hover:text-cortelo-mint transition-colors">
                  Generative AI & RAG
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="hover:text-cortelo-mint transition-colors">
                  Full-Stack Platforms
                </Link>
              </li>
              <li>
                <Link href="/services/data-mlops" className="hover:text-cortelo-mint transition-colors">
                  Data Pipelines & MLOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio */}
          <div>
            <div className="text-cortelo-text uppercase tracking-widest font-bold mb-4 text-[11px]">
              Studio
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link href="/work" className="hover:text-cortelo-mint transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-cortelo-mint transition-colors">
                  Engineering Process
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cortelo-mint transition-colors">
                  About & Leadership
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cortelo-mint transition-colors">
                  Direct Contact
                </Link>
              </li>
              <li>
                <a href="mailto:hello@cortelo.ai" className="hover:text-cortelo-mint transition-colors">
                  hello@cortelo.ai
                </a>
              </li>
            </ul>
          </div>

          {/* Assurance & Legal */}
          <div>
            <div className="text-cortelo-text uppercase tracking-widest font-bold mb-4 text-[11px]">
              Assurance
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link href="/legal/privacy" className="hover:text-cortelo-mint transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-cortelo-mint transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/.well-known/security.txt" className="hover:text-cortelo-mint transition-colors">
                  security.txt
                </Link>
              </li>
              <li>
                <span className="text-cortelo-mint">OWASP ASVS L2 Target</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cortelo-border flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px]">
          <div>
            &copy; 2026 Cortelo Systems. All rights reserved. 100% intellectual property transfer upon delivery.
          </div>
          <div>
            PKT (UTC+5) &bull; Global Enterprise Delivery &bull; Zero Vibe-Coding Standard
          </div>
        </div>
      </div>
    </footer>
  );
}
