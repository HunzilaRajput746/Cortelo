import React from "react";
import { ShieldCheck } from "lucide-react";

export default function VerifiedBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-cortelo-border text-xs font-mono text-cortelo-text">
      <ShieldCheck className="w-3.5 h-3.5 text-cortelo-mint" />
      <span>{text}</span>
    </div>
  );
}
