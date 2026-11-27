import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import ClientShell from "@/components/ClientShell";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://cortelo.tech"),
  alternates: {
    canonical: "./",
  },
  title: "Cortelo — AI systems and software engineering studio",
  description:
    "Cortelo (Cortelo Systems) is an AI systems, custom CRM, and full-stack software engineering studio led by Hunzila Nisar (Hunzila Rajput) & Mahreen Hashir.",
  keywords: [
    "Cortelo",
    "Cortelo Systems",
    "Cortelo AI",
    "Hunzila Nisar",
    "Hunzila Rajput",
    "devhunzila",
    "Mahreen Hashir",
    "AI automation agency",
    "custom AI development",
    "custom CRM development",
    "autonomous agents",
    "machine learning studio",
    "full-stack AI systems",
  ],
  authors: [
    { name: "Hunzila Nisar (Hunzila Rajput)", url: "https://devhunzila.site" },
    { name: "Mahreen Hashir", url: "https://cortelo.tech/team/mahreen-hashir" },
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Cortelo — Systems of Intelligence",
    description: "AI systems, custom CRMs & full-stack software studio by Hunzila Nisar (Hunzila Rajput) & Mahreen Hashir.",
    url: "https://cortelo.tech",
    siteName: "Cortelo Studio",
    images: [
      {
        url: "/assets/brand/cortelo-og-image.png",
        width: 1200,
        height: 630,
        alt: "Cortelo Studio Systems of Intelligence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortelo — AI systems and software engineering studio",
    description: "AI agents, custom CRMs & full-stack software led by Hunzila Nisar (Hunzila Rajput) & Mahreen Hashir.",
    images: ["/assets/brand/cortelo-og-image.png"],
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
