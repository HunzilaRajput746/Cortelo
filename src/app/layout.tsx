import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import "./globals.css";
import ClientShell from "@/components/ClientShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://cortelo.ai"),
  title: "Cortelo — Systems of Intelligence",
  description:
    "An independent artificial intelligence and software engineering studio. Directed by Hunzila Nisar & Mahreen Hashir. We engineer bespoke autonomous agents, neural architectures, and resilient full-stack platforms.",
  keywords: [
    "AI automation agency",
    "custom AI development",
    "autonomous agents",
    "machine learning studio",
    "Cortelo",
    "Hunzila Nisar",
    "Mahreen Hashir",
    "full-stack AI systems",
  ],
  authors: [
    { name: "Hunzila Nisar", url: "https://cortelo.ai" },
    { name: "Mahreen Hashir", url: "https://cortelo.ai" },
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Cortelo — Systems of Intelligence",
    description: "Bespoke AI Agents &bull; Neural Architectures &bull; Resilient Software",
    url: "https://cortelo.ai",
    siteName: "Cortelo Studio",
    images: [
      {
        url: "/assets/brand/cortelo-og-image.svg",
        width: 1200,
        height: 630,
        alt: "Cortelo Studio Systems of Intelligence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased selection:bg-[#FF4533]/30 selection:text-white bg-[#000000] text-[#FCFCFA]">
        <ClientShell><JsonLd />{children}</ClientShell>
      </body>
    </html>
  );
}
