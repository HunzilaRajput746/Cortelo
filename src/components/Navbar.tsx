"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { FOUNDER_DATA } from "@/lib/agencyData";
import BrandLogo from "./BrandLogo";

interface NavbarProps {
  onOpenDrawer: () => void;
  onOpenFounderModal: () => void;
}

const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Team", href: "/team" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ onOpenDrawer }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-[background-color,border-color,backdrop-filter] duration-500 border-b ${
          scrolled || open
            ? "bg-[rgba(7,9,10,0.78)] backdrop-blur-xl border-[var(--line)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="wrap flex h-[72px] items-center justify-between gap-6">
          <Link href="/" aria-label="Cortelo home" className="flex items-center">
            <BrandLogo className="h-7 w-7" />
          </Link>

          <nav aria-label="Main" className="hidden lg:flex items-center gap-8 text-[14px]">
            {NAV_ITEMS.map((item) => {
              const active = item.href !== "/" && (pathname === item.href || pathname.startsWith(item.href + "/"));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`link-draw py-2 ${active ? "!text-[var(--accent)]" : "!text-[var(--text-muted)] hover:!text-[var(--text)]"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={onOpenDrawer} className="btn btn-primary hidden sm:inline-flex !min-h-[44px] !px-5">
              Book a call
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="lg:hidden relative h-11 w-11 rounded-[var(--radius-s)] border border-[var(--line-strong)] flex items-center justify-center"
            >
              <span
                className={`absolute h-px w-5 bg-[var(--text)] transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[4px]"}`}
              />
              <span
                className={`absolute h-px w-5 bg-[var(--text)] transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[4px]"}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen menu on phones and tablets */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-[var(--bg)] transition-[opacity,visibility] duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav aria-label="Mobile" className="wrap flex h-full flex-col justify-between py-10">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item, i) => (
              <li
                key={item.label}
                className={`transition-all duration-500 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                style={{ transitionDelay: open ? `${60 + i * 45}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-[var(--line)] py-4 text-[32px] font-medium tracking-[-0.03em] text-[var(--text)] hover:text-[var(--accent)]"
                >
                  {item.label}
                  <ArrowUpRight className="h-5 w-5 text-[var(--text-faint)]" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <button
              onClick={() => {
                setOpen(false);
                onOpenDrawer();
              }}
              className="btn btn-primary w-full"
            >
              Book a call
            </button>
            <a href={`mailto:${FOUNDER_DATA.agencyEmail}`} className="block text-center text-sm text-[var(--text-muted)]">
              {FOUNDER_DATA.agencyEmail}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
