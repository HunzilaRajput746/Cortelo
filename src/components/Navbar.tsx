"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink, User, Sparkles, MessageSquare } from "lucide-react";
import { FOUNDER_DATA } from "@/lib/agencyData";

interface NavbarProps {
  onOpenDrawer: () => void;
  onOpenFounderModal: () => void;
}

export default function Navbar({ onOpenDrawer, onOpenFounderModal }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "01 Systems", href: "/#systems" },
    { label: "02 Work & CRMs", href: "/#work" },
    { label: "03 Teams", href: "/#teams" },
    { label: "04 Scope Blueprint", href: "/#blueprint" },
    { label: "05 Process", href: "/process" },
    { label: "06 Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-40 max-w-[1440px] mx-auto px-4 sm:px-8 pointer-events-none">
      <div className="flex items-center justify-between pointer-events-auto">
        
        {/* Left: CORTELO Brand Mark Pill */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-cortelo-border/80 bg-[#0B0F19]/80 backdrop-blur-md text-cortelo-text font-black text-sm tracking-wider uppercase hover:border-cortelo-mint hover:text-cortelo-mint transition-all shadow-lg group"
          >
            <span className="w-2 h-2 rounded-full bg-cortelo-mint shadow-[0_0_8px_#2DD4A7] group-hover:scale-125 transition-transform" />
            <span>CORTELO</span>
          </Link>

          {/* Operational Status Ticker (Desktop) */}
          <div className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cortelo-border/50 bg-[#07090E]/60 backdrop-blur-md text-[11px] font-mono text-cortelo-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-cortelo-mint animate-pulse" />
            <span>OPERATIONAL &bull; PKT (UTC+5)</span>
          </div>
        </div>

        {/* Center: Coordinates Navigation */}
        <nav className="hidden lg:flex items-center gap-6 px-6 py-2.5 rounded-full border border-cortelo-border/60 bg-[#0B0F19]/80 backdrop-blur-md text-xs font-mono tracking-wider">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-cortelo-muted hover:text-cortelo-mint transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Founder Portfolio Pill & Initiate Project CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* Founder Portfolio Button */}
          <button
            onClick={onOpenFounderModal}
            className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full border border-cortelo-border/70 bg-[#0B0F19]/80 backdrop-blur-md text-cortelo-text hover:border-cortelo-mint hover:text-cortelo-mint text-xs font-mono transition-all shadow-md group"
            title="Inspect Founder Hunzila Nisar's Verified Portfolio & Credentials"
          >
            <User className="w-3.5 h-3.5 text-cortelo-mint group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Founder Portfolio</span>
            <span className="sm:hidden">Portfolio</span>
          </button>

          {/* Direct WhatsApp CTA */}
          <a
            href={FOUNDER_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 text-xs font-mono transition-all"
            title="Chat directly on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden md:inline">WhatsApp</span>
          </a>

          {/* Initiate Project Pill */}
          <button
            onClick={onOpenDrawer}
            className="px-4 sm:px-5 py-2 rounded-full bg-cortelo-mint text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-[0_0_20px_rgba(45,212,167,0.35)]"
          >
            Initiate Project
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-cortelo-text text-sm font-mono px-3 py-1.5 border border-cortelo-border rounded-full bg-cortelo-surface/80"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 rounded-2xl p-6 pointer-events-auto flex flex-col gap-3 text-xs font-mono text-cortelo-muted border border-cortelo-border bg-[#0B0F19]/95 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cortelo-text py-2 border-b border-cortelo-border/40 flex items-center justify-between"
            >
              <span>{item.label}</span>
              <span className="text-cortelo-mint">&rarr;</span>
            </Link>
          ))}
          
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenFounderModal();
            }}
            className="py-2 text-left text-cortelo-mint flex items-center justify-between border-b border-cortelo-border/40"
          >
            <span>Founder Portfolio (devhunzila.site)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          <a
            href={FOUNDER_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 text-emerald-400 flex items-center justify-between border-b border-cortelo-border/40"
          >
            <span>Direct WhatsApp (+92 318 6326746)</span>
            <MessageSquare className="w-3.5 h-3.5" />
          </a>

          <div className="pt-2 text-[11px] text-cortelo-muted">
            Cortelo Systems &bull; Live in Production &bull; UTC+5
          </div>
        </div>
      )}
    </header>
  );
}
