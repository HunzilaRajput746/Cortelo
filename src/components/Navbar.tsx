"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";

interface NavbarProps {
  onOpenDrawer: () => void;
}

export default function Navbar({ onOpenDrawer }: NavbarProps) {
  const [time, setTime] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Karachi",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setTime(`PKT ${now.toLocaleTimeString("en-GB", options)}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-40 max-w-[1360px] mx-auto px-6 pointer-events-none">
      <div className="glass-panel rounded-full px-6 py-3.5 flex items-center justify-between pointer-events-auto shadow-2xl">
        
        {/* Brand Logo */}
        <Link href="/" className="pointer-events-auto">
          <BrandLogo />
        </Link>

        {/* Coordinates Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono text-cortelo-muted tracking-wider">
          <Link href="/services" className="hover:text-cortelo-text transition-colors">
            01 SYSTEMS
          </Link>
          <Link href="/work" className="hover:text-cortelo-text transition-colors">
            02 WORK
          </Link>
          <Link href="/process" className="hover:text-cortelo-text transition-colors">
            03 PROCESS
          </Link>
          <Link href="/about" className="hover:text-cortelo-text transition-colors">
            04 ABOUT
          </Link>
          <Link href="/contact" className="hover:text-cortelo-text transition-colors">
            05 CONTACT
          </Link>
        </nav>

        {/* Right Section: Clock & Pill CTA */}
        <div className="flex items-center gap-4">
          {time && (
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-cortelo-muted px-3 py-1 rounded-full border border-cortelo-border bg-cortelo-surface/50">
              <span className="w-1.5 h-1.5 rounded-full bg-cortelo-mint animate-pulse" />
              <span>{time}</span>
            </div>
          )}

          <button
            onClick={onOpenDrawer}
            className="px-5 py-2 rounded-full bg-cortelo-mint text-black font-semibold text-xs tracking-wider uppercase hover:opacity-90 active:scale-95 transition-all shadow-[0_0_20px_rgba(45,212,167,0.35)]"
          >
            Initiate Project
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-cortelo-text text-sm font-mono px-2 py-1 border border-cortelo-border rounded"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 glass-panel rounded-2xl p-6 pointer-events-auto flex flex-col gap-4 text-xs font-mono text-cortelo-muted animate-in slide-in-from-top-2">
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-cortelo-text py-1 border-b border-cortelo-border/50"
          >
            01 SYSTEMS & SERVICES
          </Link>
          <Link
            href="/work"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-cortelo-text py-1 border-b border-cortelo-border/50"
          >
            02 WORK & CASE STUDIES
          </Link>
          <Link
            href="/process"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-cortelo-text py-1 border-b border-cortelo-border/50"
          >
            03 HOW WE WORK
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-cortelo-text py-1 border-b border-cortelo-border/50"
          >
            04 FOUNDERS & STUDIO
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-cortelo-text py-1"
          >
            05 DIRECT CONTACT
          </Link>
        </div>
      )}
    </header>
  );
}
