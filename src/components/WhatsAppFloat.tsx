"use client";

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
