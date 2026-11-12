"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useAgencyShell } from "./ClientShell";

export default function FloatingCTA() {
  const { openDrawer } = useAgencyShell();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 800);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 sm:hidden">
      <button
        onClick={() => openDrawer("Mobile Discovery Call")}
        className="btn-conversion-primary flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF4533] hover:bg-[#FF220E] text-white font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,69,51,0.4)] cursor-pointer"
      >
        <span>Book a 15-min call</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
