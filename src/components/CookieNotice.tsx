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
    <div className="fixed bottom-6 right-6 z-50 max-w-sm p-5 rounded-3xl bg-[#0D0D0D]/95 border border-white/10 backdrop-blur-xl shadow-2xl text-xs space-y-3 animate-in slide-in-from-bottom-3">
      <div className="flex items-center justify-between text-[#FCFCFA] font-bold">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#FF4533]" />
          <span>Zero-Telemetry Privacy</span>
        </div>
        <button onClick={handleAccept} className="text-white/40 hover:text-white cursor-pointer">
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="text-white/60 font-light leading-relaxed">
        We respect your sovereignty. We do not use third-party tracking cookies or sell visitor telemetry.
      </p>
      <button
        onClick={handleAccept}
        className="btn-conversion-primary w-full py-2.5 rounded-full bg-[#FF4533] hover:bg-[#FF220E] text-white font-bold uppercase tracking-wider text-[11px] transition-all cursor-pointer shadow-[0_0_15px_rgba(255,69,51,0.3)]"
      >
        Acknowledge
      </button>
    </div>
  );
}
