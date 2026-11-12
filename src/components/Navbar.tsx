"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  onOpenDrawer: () => void;
}

export default function Navbar({ onOpenDrawer }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "01 Systems", href: "/#systems" },
    { label: "02 Work", href: "/#work" },
    { label: "03 Studio", href: "/#studio" },
    { label: "04 Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-5 left-0 right-0 z-40 max-w-[1440px] mx-auto px-6 sm:px-10 pointer-events-none">
      <div className="flex items-center justify-between pointer-events-auto">
        
        {/* Left: CORTELO Brand Mark Pill */}
        <Link
          href="/"
          className="px-5 py-2 rounded-full border border-cortelo-border/70 bg-[#0B0F19]/60 backdrop-blur-md text-cortelo-text font-black text-sm tracking-wider uppercase hover:border-cortelo-mint/60 hover:text-cortelo-mint transition-all shadow-lg"
        >
          CORTELO
        </Link>

        {/* Center: Coordinates Navigation matching exact mockup */}
        <nav className="hidden md:flex items-center gap-8 px-7 py-2.5 rounded-full border border-cortelo-border/50 bg-[#0B0F19]/60 backdrop-blur-md text-xs font-mono tracking-wider">
          {navItems.map((item, idx) => {
            const isActive = idx === 0 && (pathname === "/" || pathname === "");
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? "text-cortelo-text font-semibold"
                    : "text-cortelo-muted hover:text-cortelo-text"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cortelo-mint rounded-full shadow-[0_0_8px_#2DD4A7]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Timezone & Initiate Project pill */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-cortelo-muted px-4 py-2 rounded-full border border-cortelo-border/50 bg-[#0B0F19]/40 backdrop-blur-md">
            <span>UTC+5 / PKT</span>
          </div>

          <button
            onClick={onOpenDrawer}
            className="px-5 py-2 rounded-full border border-cortelo-mint/40 bg-gradient-to-r from-cortelo-mint/20 via-cortelo-surface/80 to-cortelo-mint/10 backdrop-blur-md text-cortelo-text text-xs font-medium tracking-wide hover:border-cortelo-mint hover:shadow-[0_0_20px_rgba(45,212,167,0.3)] active:scale-95 transition-all"
          >
            Initiate Project
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-cortelo-text text-sm font-mono px-3 py-1.5 border border-cortelo-border rounded-full bg-cortelo-surface/80"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 rounded-2xl p-6 pointer-events-auto flex flex-col gap-4 text-xs font-mono text-cortelo-muted border border-cortelo-border bg-[#0B0F19]/90 backdrop-blur-xl animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cortelo-text py-1 border-b border-cortelo-border/50"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 text-[11px] text-cortelo-muted">
            Pakistan Standard Time (UTC+5)
          </div>
        </div>
      )}
    </header>
  );
}
