"use client";

import React from "react";
import HeroConversion from "@/components/HeroConversion";
import TestimonialTicker from "@/components/TestimonialTicker";
import StatementCard from "@/components/StatementCard";
import ResultsSection from "@/components/ResultsSection";
import ServicesGrid from "@/components/ServicesGrid";
import ComparisonTable from "@/components/ComparisonTable";
import ProcessSteps from "@/components/ProcessSteps";
import TeamShowcase from "@/components/TeamShowcase";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <div className="relative z-10 w-full overflow-hidden">
      {/* 1. Hero Launchpad (Conversion Style) */}
      <HeroConversion />

      {/* 2. Client Trust Logos & Floating Testimonials Ticker */}
      <TestimonialTicker />

      {/* 3. Core Mission Statement Card */}
      <StatementCard />

      {/* 4. Results Section (Metrics & Case Studies) */}
      <ResultsSection />

      {/* 5. Services Grid */}
      <ServicesGrid />

      {/* 6. Comparison Table (Other Agencies vs Cortelo) */}
      <ComparisonTable />

      {/* 7. 3-Step Scaling Process */}
      <ProcessSteps />

      {/* 8. Team Showcase (Founder Hunzila Nisar + 10 Specialists) */}
      <TeamShowcase />

      {/* 9. Frequently Asked Questions Accordion */}
      <FAQSection />

      {/* 10. Final Call to Action */}
      <FinalCTA />
    </div>
  );
}
