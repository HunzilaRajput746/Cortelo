"use client";

import React from "react";

export default function AmbientVideoBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#080b12]">
      <div className="absolute inset-0 editorial-grid opacity-40" />
      <div className="absolute -top-[240px] left-1/2 -translate-x-1/2 w-[760px] h-[560px] rounded-full bg-[#263c7a]/25 blur-[120px]">
      </div>
      <div className="absolute top-[48%] -left-[240px] w-[520px] h-[520px] rounded-full bg-[#2c9588]/10 blur-[120px]">
      </div>
      <div className="absolute top-[72%] -right-[220px] w-[500px] h-[500px] rounded-full bg-[#b84d48]/10 blur-[120px]">
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#080b12_92%)]" />
    </div>
  );
}
