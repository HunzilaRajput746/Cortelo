"use client";

import React from "react";

export default function AmbientVideoBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#090b0d]">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-[0.18] grayscale"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/images/hero_ambient.mp4.jpg"
        aria-hidden="true"
      >
        <source src="/assets/videos/hero_ambient.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#090b0d]/70" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,11,13,0.28)_0%,#090b0d_78%)]" />
    </div>
  );
}
