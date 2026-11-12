import React from "react";

interface StatusBadgeProps {
  label: string;
  variant?: "mint" | "cyan" | "rose" | "purple";
}

export default function StatusBadge({ label, variant = "mint" }: StatusBadgeProps) {
  const styles = {
    mint: "border-cortelo-mint/40 bg-cortelo-mint/10 text-cortelo-mint",
    cyan: "border-cyan-400/40 bg-cyan-400/10 text-cyan-400",
    rose: "border-rose-400/40 bg-rose-400/10 text-rose-400",
    purple: "border-purple-400/40 bg-purple-400/10 text-purple-400",
  }[variant];

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase border ${styles}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      <span>{label}</span>
    </span>
  );
}
