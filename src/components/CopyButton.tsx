"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  text: string;
  label?: string;
}

export default function CopyButton({ text, label }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono border border-cortelo-border bg-white/[0.02] hover:border-cortelo-mint text-cortelo-muted hover:text-cortelo-mint transition-colors cursor-pointer"
      title="Copy to clipboard"
    >
      {copied ? <Check className="w-3 h-3 text-cortelo-mint" /> : <Copy className="w-3 h-3" />}
      <span>{copied ? "Copied" : label || "Copy"}</span>
    </button>
  );
}
