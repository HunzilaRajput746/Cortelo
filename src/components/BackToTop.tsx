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
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#0B0F19]/90 border border-cortelo-mint/40 text-cortelo-mint hover:bg-cortelo-mint hover:text-[#07090E] transition-all shadow-lg backdrop-blur-md cursor-pointer animate-in fade-in"
    >
      <ArrowUp className="w-4 h-4 stroke-[2.5]" />
    </button>
  );
}
