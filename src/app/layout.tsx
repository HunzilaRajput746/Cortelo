import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import ClientShell from "@/components/ClientShell";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://cortelo.tech"),
  title: "Cortelo — AI systems and software engineering studio",
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
    { name: "Hunzila Nisar", url: "https://cortelo.tech" },
    { name: "Mahreen Hashir", url: "https://cortelo.tech" },
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Cortelo — Systems of Intelligence",
    description: "Bespoke AI Agents &bull; Neural Architectures &bull; Resilient Software",
    url: "https://cortelo.tech",
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
    <html lang="en" className={`dark scroll-smooth ${geist.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-[var(--bg)] text-[var(--text)]">
        <a href="#main" className="skip-link">Skip to content</a>
        <ClientShell><JsonLd />{children}</ClientShell>
      </body>
    </html>
  );
}
