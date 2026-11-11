"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProjectDrawer from "./ProjectDrawer";
import FluidCanvas from "./FluidCanvas";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <FluidCanvas />
      <Navbar onOpenDrawer={() => setDrawerOpen(true)} />
      <ProjectDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      {children}
      <Footer />
    </>
  );
}
