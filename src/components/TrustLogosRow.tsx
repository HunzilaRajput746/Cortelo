import React from "react";
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
