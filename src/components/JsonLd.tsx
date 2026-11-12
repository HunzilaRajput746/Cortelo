import React from "react";
import { FOUNDER_DATA } from "@/lib/agencyData";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Cortelo Systems",
    "description": "Autonomous AI systems, enterprise CRMs, self-hosted VPS infrastructure, and high-conversion web engineering studio.",
    "url": "https://cortelo.ai",
    "telephone": FOUNDER_DATA.phone,
    "founder": {
      "@type": "Person",
      "name": FOUNDER_DATA.name,
      "jobTitle": FOUNDER_DATA.title,
      "sameAs": [
        FOUNDER_DATA.portfolioUrl,
        FOUNDER_DATA.linkedinUrl,
        FOUNDER_DATA.githubUrl,
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
