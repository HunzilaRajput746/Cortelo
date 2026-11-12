"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, X } from "lucide-react";

export default function CookieNotice() {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const isAccepted = localStorage.getItem("cortelo_privacy_accepted");
    if (!isAccepted) setAccepted(false);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cortelo_privacy_accepted", "true");
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm p-5 rounded-2xl bg-[#0B0F19]/95 border border-cortelo-border backdrop-blur-xl shadow-2xl text-xs space-y-3 animate-in slide-in-from-bottom-3">
      <div className="flex items-center justify-between text-cortelo-text font-bold">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-cortelo-mint" />
          <span>Zero-Telemetry Privacy</span>
        </div>
        <button onClick={handleAccept} className="text-cortelo-muted hover:text-white cursor-pointer">
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="text-cortelo-muted font-light leading-relaxed">
        We respect your sovereignty. We do not use third-party tracking cookies or sell visitor telemetry.
      </p>
      <button
        onClick={handleAccept}
        className="w-full py-2 rounded-xl bg-cortelo-mint text-[#07090E] font-bold uppercase tracking-wider text-[11px] hover:opacity-90 transition-opacity cursor-pointer"
      >
        Acknowledge
      </button>
    </div>
  );
}
