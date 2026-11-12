import React from "react";
import { ShieldCheck } from "lucide-react";

export default function VerifiedBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/90">
      <ShieldCheck className="w-3.5 h-3.5 text-[#FF4533]" />
      <span>{text}</span>
    </div>
  );
}
