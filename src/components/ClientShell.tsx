"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProjectDrawer from "./ProjectDrawer";
import AmbientVideoBackground from "./AmbientVideoBackground";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Real Fullscreen Ambient Video Loop */}
      <AmbientVideoBackground />

      {/* Top Floating Glass Navigation matching Mockup */}
      <Navbar onOpenDrawer={() => setDrawerOpen(true)} />

      {/* Slide-out Project Briefing / NDA Drawer */}
      <ProjectDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* Main Page Surface */}
      <main className="relative z-10">{children}</main>

      {/* Obsidian Brand Footer */}
      <Footer />
    </>
  );
}
