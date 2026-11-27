import React from "react";
import { FOUNDER_DATA } from "@/lib/agencyData";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://cortelo.tech/#organization",
        "name": "Cortelo",
        "alternateName": ["Cortelo Systems", "Cortelo Studio", "Cortelo AI"],
        "description": "Autonomous AI systems, enterprise CRMs, self-hosted VPS infrastructure, and high-conversion full-stack software engineering studio founded by Hunzila Nisar (Hunzila Rajput) and Mahreen Hashir.",
        "url": "https://cortelo.tech",
        "logo": "https://cortelo.tech/assets/brand/cortelo-logo-dark.png",
        "image": "https://cortelo.tech/assets/brand/cortelo-og-image.png",
        "email": FOUNDER_DATA.agencyEmail,
        "telephone": FOUNDER_DATA.phone,
        "sameAs": [
          FOUNDER_DATA.companyLinkedinUrl,
          FOUNDER_DATA.githubUrl,
          FOUNDER_DATA.portfolioUrl,
        ],
        "founder": {
          "@id": "https://cortelo.tech/team/hunzila-nisar#person",
        },
      },
      {
        "@type": "Person",
        "@id": "https://cortelo.tech/team/hunzila-nisar#person",
        "name": FOUNDER_DATA.name,
        "alternateName": [FOUNDER_DATA.alias, "devhunzila", "Hunzila Nisar AI"],
        "jobTitle": FOUNDER_DATA.title,
        "url": "https://cortelo.tech/team/hunzila-nisar",
        "image": "https://cortelo.tech/assets/team/hunzila_nisar_v2.jpg",
        "email": FOUNDER_DATA.email,
        "worksFor": {
          "@id": "https://cortelo.tech/#organization",
        },
        "sameAs": [
          FOUNDER_DATA.portfolioUrl,
          FOUNDER_DATA.linkedinUrl,
          FOUNDER_DATA.githubUrl,
          FOUNDER_DATA.fiverrUrl,
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://cortelo.tech/#website",
        "url": "https://cortelo.tech",
        "name": "Cortelo — AI systems and software engineering studio",
        "publisher": {
          "@id": "https://cortelo.tech/#organization",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
