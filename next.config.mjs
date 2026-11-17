/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // older service links keep working after the catalogue grew
  async redirects() {
    const moved = {
      "ai-automation": "ai-agents",
      "machine-learning": "custom-models",
      "generative-ai": "rag-assistants",
      "web-development": "fullstack-platforms",
      "app-development": "mobile-apps",
      "data-mlops": "data-dashboards",
    };
    const services = Object.entries(moved).map(([from, to]) => ({
      source: `/services/${from}`,
      destination: `/services/${to}`,
      permanent: true,
    }));

    // one public address: www and the old subdomain both land on cortelo.tech, same path
    const hosts = ["www.cortelo.tech", "cortelo.devhunzila.site"].map((host) => ({
      source: "/:path*",
      has: [{ type: "host", value: host }],
      destination: "https://cortelo.tech/:path*",
      permanent: true,
    }));

    return [...hosts, ...services];
  },
};

export default nextConfig;

