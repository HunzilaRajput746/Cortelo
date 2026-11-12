"use client";

import React, { useState, createContext, useContext } from "react";
import WhatsAppFloat from "./WhatsAppFloat";
import BackToTop from "./BackToTop";
import CookieNotice from "./CookieNotice";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProjectDrawer from "./ProjectDrawer";
import AmbientVideoBackground from "./AmbientVideoBackground";
import FounderSpotlightModal from "./FounderSpotlightModal";
import ProjectDetailModal from "./ProjectDetailModal";
import { ProjectItem } from "@/lib/agencyData";

interface ShellContextType {
  openDrawer: (scope?: string) => void;
  openFounderModal: () => void;
  openProjectModal: (project: ProjectItem) => void;
}

const ShellContext = createContext<ShellContextType>({
  openDrawer: () => { },
  openFounderModal: () => { },
  openProjectModal: () => { },
});

export const useAgencyShell = () => useContext(ShellContext);

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerScope, setDrawerScope] = useState("");
  const [founderModalOpen, setFounderModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenDrawer = (scope?: string) => {
    if (scope) setDrawerScope(scope);
    setDrawerOpen(true);
  };

  const handleOpenFounderModal = () => {
    setFounderModalOpen(true);
  };

  const handleOpenProjectModal = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  return (
    <ShellContext.Provider
      value={{
        openDrawer: handleOpenDrawer,
        openFounderModal: handleOpenFounderModal,
        openProjectModal: handleOpenProjectModal,
      }}
    >
      {/* 1. Cinematic 60FPS Ambient Video Background */}
      <AmbientVideoBackground />

      {/* 2. Top Floating Glass Navigation */}
      <Navbar
        onOpenDrawer={() => handleOpenDrawer()}
        onOpenFounderModal={handleOpenFounderModal}
      />

      {/* 3. Interactive Project Briefing Drawer */}
      <ProjectDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        initialScope={drawerScope}
      />

      {/* 4. Founder Profile & Verified Credentials Modal */}
      <FounderSpotlightModal
        isOpen={founderModalOpen}
        onClose={() => setFounderModalOpen(false)}
        onInitiateProject={() => {
          setFounderModalOpen(false);
          handleOpenDrawer("Engagement requested directly with Founder Hunzila Nisar");
        }}
      />

      {/* 5. Rich Project Architecture & Outcomes Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInitiateProject={(projectTitle) => {
          setSelectedProject(null);
          handleOpenDrawer(`Inquiry regarding system architecture similar to: ${projectTitle}`);
        }}
      />

      {/* Main Content Area */}
      <main className="relative z-10">{children}</main>

      {/* 6. Footer */}
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
      <CookieNotice />
    </ShellContext.Provider>
  );
}
