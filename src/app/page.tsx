import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cortelo — AI systems, custom CRMs & software engineering studio",
  description:
    "Cortelo designs and builds bespoke AI agents, enterprise CRMs, workflow automation, and full-stack software with 100% IP ownership. Led by Hunzila Nisar (Hunzila Rajput) & Mahreen Hashir.",
  alternates: { canonical: "/" },
};
import HeroConversion from "@/components/HeroConversion";
import StatementCard from "@/components/StatementCard";
import ServicesGrid from "@/components/ServicesGrid";
import ResultsSection from "@/components/ResultsSection";
import ProcessSteps from "@/components/ProcessSteps";
import TeamShowcase from "@/components/TeamShowcase";
import ComparisonTable from "@/components/ComparisonTable";
import TestimonialTicker from "@/components/TestimonialTicker";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <div className="relative z-10 w-full">
      <HeroConversion />
      <StatementCard />
      <ServicesGrid />
      <ResultsSection />
      <ProcessSteps />
      <TeamShowcase />
      <ComparisonTable />
      <TestimonialTicker />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
