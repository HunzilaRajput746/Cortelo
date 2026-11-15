"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";
import { FOUNDER_DATA } from "@/lib/agencyData";

interface NavbarProps {
  onOpenDrawer: () => void;
  onOpenFounderModal: () => void;
}

export default function Navbar({ onOpenDrawer, onOpenFounderModal }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/#services" },
    { label: "Results", href: "/#results" },
    { label: "Process", href: "/#process" },
    { label: "Team", href: "/team" },
    { label: "FAQs", href: "/#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 max-w-[1440px] mx-auto px-6 sm:px-10 pointer-events-none">
      <div className="flex items-center justify-between pointer-events-auto">

        {/* Left: Brand Mark */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 py-6 text-[#f5f7fb] font-black text-sm tracking-[0.2em] uppercase hover:text-[#d7a47a] transition-colors group"
          >
            <span>CORTELO</span>
          </Link>

          {/* Operational Status (Desktop) */}
          <span className="hidden xl:block text-[10px] uppercase tracking-[0.18em] text-white/35">Independent AI studio</span>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-wide">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white/60 hover:text-white transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Founder Portfolio Pill & Book a call CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3">

          {/* Founder Portfolio Button */}
          <button
            onClick={onOpenFounderModal}
            className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 text-white/70 hover:text-[#d7a47a] text-xs font-mono transition-colors group cursor-pointer"
            title="Inspect Founder Hunzila Nisar's Verified Portfolio & Credentials"
          >
            <User className="w-3.5 h-3.5 text-[#8bf0d4] group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Founder Portfolio</span>
            <span className="sm:hidden">Founder</span>
          </button>

          {/* Book a call Pill */}
          <button
            onClick={onOpenDrawer}
            className="btn-conversion-primary px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider active:scale-95 transition-all cursor-pointer"
          >
            Book a call
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#FCFCFA] text-sm font-mono px-3 py-1.5 border border-white/10 rounded-full bg-[#0D0D0D]/80 cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 rounded-2xl p-6 pointer-events-auto flex flex-col gap-3 text-xs font-mono text-white/60 border border-white/10 bg-[#0D0D0D]/95 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-2 border-b border-white/10 flex items-center justify-between"
            >
              <span>{item.label}</span>
              <span className="text-[#FF4533]">&rarr;</span>
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFounderModal();
              }}
              className="w-full py-2.5 rounded-xl border border-white/10 bg-white/5 text-white font-medium flex items-center justify-center gap-2 cursor-pointer"
            >
              <User className="w-4 h-4 text-[#FF4533]" />
              <span>Founder Portfolio (devhunzila.site)</span>
            </button>
            <a
              href={`mailto:${FOUNDER_DATA.email}`}
              className="w-full py-2.5 text-[#d7a47a] font-bold flex items-center justify-center gap-2"
            >
              <span>Email the studio</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
