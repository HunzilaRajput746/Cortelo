"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#0D0D0D]/90 border border-white/10 text-white/80 hover:bg-[#FF4533] hover:text-white hover:border-[#FF4533] transition-all shadow-lg backdrop-blur-md cursor-pointer animate-in fade-in"
    >
      <ArrowUp className="w-4 h-4 stroke-[2.5]" />
    </button>
  );
}
