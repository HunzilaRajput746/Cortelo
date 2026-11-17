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
    return Object.entries(moved).map(([from, to]) => ({
      source: `/services/${from}`,
      destination: `/services/${to}`,
      permanent: true,
    }));
  },
};

export default nextConfig;

