import type { MetadataRoute } from "next";
import { AGENCY_PROJECTS, AGENCY_SERVICES, AGENCY_TEAM_ROSTER } from "@/lib/agencyData";

const SITE = "https://cortelo.tech";

/** Every public page, for Google Search Console (served at /sitemap.xml). */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1, "weekly"),
    page("/services", 0.9, "weekly"),
    ...AGENCY_SERVICES.map((s) => page(`/services/${s.id}`, 0.8)),
    page("/work", 0.8),
    ...AGENCY_PROJECTS.map((p) => page(`/work/${p.id}`, 0.7)),
    page("/team", 0.7),
    ...AGENCY_TEAM_ROSTER.map((m) => page(`/team/${m.id}`, 0.5)),
    page("/process", 0.6),
    page("/about", 0.6),
    page("/contact", 0.7),
    page("/legal/privacy", 0.2, "yearly"),
    page("/legal/terms", 0.2, "yearly"),
  ];
}
