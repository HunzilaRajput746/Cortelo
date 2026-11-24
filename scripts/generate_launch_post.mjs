import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = process.cwd();
const brandDir = path.join(root, "assets", "brand");
const publicBrandDir = path.join(root, "public", "assets", "brand");

async function generate() {
  console.log("Generating LinkedIn Launch Post image (1200 x 627)...");

  const postSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 627" width="1200" height="627">
    <rect width="1200" height="627" fill="#07090E" />

    <!-- Architectural Grid Background -->
    <g opacity="0.10" stroke="#25304A" stroke-width="1">
      <line x1="80" y1="0" x2="80" y2="627"/>
      <line x1="380" y1="0" x2="380" y2="627"/>
      <line x1="820" y1="0" x2="820" y2="627"/>
      <line x1="1120" y1="0" x2="1120" y2="627"/>
      <line x1="0" y1="80" x2="1200" y2="80"/>
      <line x1="0" y1="540" x2="1200" y2="540"/>
    </g>

    <!-- Ambient Mint Glow -->
    <circle cx="1060" cy="180" r="240" fill="#2DD4A7" opacity="0.08" />
    <circle cx="120" cy="500" r="180" fill="#2DD4A7" opacity="0.05" />

    <!-- Top Brand Lockup -->
    <g transform="translate(80, 56) scale(0.7)">
      <path d="M72 26 C60 16 38 16 26 28 C14 40 14 60 26 72 C38 84 60 84 72 74" 
            stroke="#2DD4A7" 
            stroke-width="10" 
            stroke-linecap="round" 
            fill="none" />
      <circle cx="50" cy="50" r="8" fill="#F2F0EA" />
    </g>
    <text x="145" y="78" fill="#F2F0EA" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="800" letter-spacing="-0.04em">CORTELO</text>
    
    <!-- Top Right Badge -->
    <rect x="910" y="52" width="210" height="34" rx="17" fill="rgba(45,212,167,0.10)" stroke="rgba(45,212,167,0.30)" stroke-width="1" />
    <text x="1015" y="74" fill="#2DD4A7" font-family="monospace, Courier New" font-size="11" font-weight="700" letter-spacing="0.1em" text-anchor="middle">OFFICIAL LAUNCH &#8226; 2026</text>

    <!-- Main Headline -->
    <text x="80" y="180" fill="#F2F0EA" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="900" letter-spacing="-0.035em">SYSTEMS OF INTELLIGENCE.</text>
    <text x="80" y="224" fill="#2DD4A7" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="600">Bespoke AI Agents &#8226; Cloud Architecture &#8226; Resilient Platforms</text>
    
    <text x="80" y="270" fill="#8C94A6" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" max-width="900">
      We engineer custom multi-agent execution clusters, private self-hosted automation infrastructure,
    </text>
    <text x="80" y="296" fill="#8C94A6" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" max-width="900">
      and high-performance enterprise full-stack web platforms with complete code sovereignty.
    </text>

    <!-- 3 Core Pillar Cards -->
    <!-- Card 1 -->
    <rect x="80" y="340" width="320" height="150" rx="12" fill="#0D1118" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <rect x="100" y="360" width="32" height="32" rx="8" fill="rgba(45,212,167,0.15)"/>
    <text x="116" y="382" fill="#2DD4A7" font-family="monospace" font-size="16" font-weight="bold" text-anchor="middle">&#9889;</text>
    <text x="145" y="382" fill="#F2F0EA" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="700">Autonomous AI Agents</text>
    <text x="100" y="420" fill="#8C94A6" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" line-height="1.4">
      Deterministic Zod/Pydantic validation, RAG pipelines, and zero hallucination risk.
    </text>

    <!-- Card 2 -->
    <rect x="440" y="340" width="320" height="150" rx="12" fill="#0D1118" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <rect x="460" y="360" width="32" height="32" rx="8" fill="rgba(45,212,167,0.15)"/>
    <text x="476" y="382" fill="#2DD4A7" font-family="monospace" font-size="16" font-weight="bold" text-anchor="middle">&#9889;</text>
    <text x="505" y="382" fill="#F2F0EA" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="700">Self-Hosted VPS Clusters</text>
    <text x="460" y="420" fill="#8C94A6" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" line-height="1.4">
      Private n8n engines, Tailscale mesh networking, and zero recurring SaaS taxes.
    </text>

    <!-- Card 3 -->
    <rect x="800" y="340" width="320" height="150" rx="12" fill="#0D1118" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <rect x="820" y="360" width="32" height="32" rx="8" fill="rgba(45,212,167,0.15)"/>
    <text x="836" y="382" fill="#2DD4A7" font-family="monospace" font-size="16" font-weight="bold" text-anchor="middle">&#9889;</text>
    <text x="865" y="382" fill="#F2F0EA" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="700">100% IP Handover</text>
    <text x="820" y="420" fill="#8C94A6" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13" line-height="1.4">
      Complete unencumbered ownership of code, models, and infrastructure configs.
    </text>

    <!-- Bottom Footer -->
    <line x1="80" y1="535" x2="1120" y2="535" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    
    <text x="80" y="575" fill="#8C94A6" font-family="monospace, Courier New" font-size="13">
      DIRECTED BY <tspan fill="#F2F0EA" font-weight="bold">HUNZILA NISAR</tspan> &#38; <tspan fill="#F2F0EA" font-weight="bold">MAHREEN HASHIR</tspan>
    </text>

    <text x="1120" y="575" fill="#2DD4A7" font-family="monospace, Courier New" font-size="14" font-weight="bold" text-anchor="end">
      HTTPS://CORTELO.TECH &#8226; CONTACT@CORTELO.TECH
    </text>
  </svg>
  `;

  const buf = await sharp(Buffer.from(postSvg)).png({ quality: 100 }).toBuffer();
  fs.writeFileSync(path.join(brandDir, "cortelo-linkedin-launch-post.png"), buf);
  fs.writeFileSync(path.join(publicBrandDir, "cortelo-linkedin-launch-post.png"), buf);
  console.log("✔ Created cortelo-linkedin-launch-post.png (1200x627)");
}

generate().catch(console.error);
