import type { MetadataRoute } from "next";

/** Served at /robots.txt: index the site, keep the admin area and APIs out of search. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/api/", "/auth/"] }],
    sitemap: "https://cortelo.tech/sitemap.xml",
    host: "https://cortelo.tech",
  };
}
