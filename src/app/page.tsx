"use client";

import React from "react";
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
