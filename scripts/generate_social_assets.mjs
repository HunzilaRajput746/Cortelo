import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = process.cwd();
const brandDir = path.join(root, "assets", "brand");
const publicBrandDir = path.join(root, "public", "assets", "brand");

async function generate() {
  console.log("Generating social branding PNG assets...");

  // 1. Avatar (Square 800x800 with Obsidian background and centered Cortelo Mark, padded for circular crop)
  const avatarSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
    <rect width="800" height="800" fill="#07090E" />
    <circle cx="400" cy="400" r="280" fill="#2DD4A7" opacity="0.06" filter="blur(40px)" />
    <!-- Cortelo Mark centered inside circular safe zone -->
    <g transform="translate(160, 160) scale(4.8)">
      <path d="M72 26 C60 16 38 16 26 28 C14 40 14 60 26 72 C38 84 60 84 72 74" 
            stroke="#2DD4A7" 
            stroke-width="10" 
            stroke-linecap="round" 
            fill="none" />
      <circle cx="50" cy="50" r="8" fill="#F2F0EA" />
    </g>
  </svg>
  `;

  const avatarBuf = await sharp(Buffer.from(avatarSvg)).png({ quality: 100 }).toBuffer();
  fs.writeFileSync(path.join(brandDir, "cortelo-avatar.png"), avatarBuf);
  fs.writeFileSync(path.join(publicBrandDir, "cortelo-avatar.png"), avatarBuf);
  console.log("✔ Created cortelo-avatar.png (800x800 square for LinkedIn & Facebook profile)");

  // 2. LinkedIn Company Banner (1584 x 396 px)
  const liBannerSvg = fs.readFileSync(path.join(brandDir, "cortelo-banner-linkedin.svg"));
  const liBannerBuf = await sharp(liBannerSvg).resize(1584, 396).png({ quality: 100 }).toBuffer();
  fs.writeFileSync(path.join(brandDir, "cortelo-banner-linkedin.png"), liBannerBuf);
  fs.writeFileSync(path.join(publicBrandDir, "cortelo-banner-linkedin.png"), liBannerBuf);
  console.log("✔ Created cortelo-banner-linkedin.png (1584x396 for LinkedIn Cover)");

  // 3. Facebook Page Cover Banner (1200 x 630 / 1640 x 720)
  const fbBannerSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1640 720" width="1640" height="720">
    <rect width="1640" height="720" fill="#07090E"/>
    
    <!-- Subtle Architectural Grid Background -->
    <g opacity="0.12" stroke="#25304A" stroke-width="1">
      <line x1="120" y1="0" x2="120" y2="720"/>
      <line x1="420" y1="0" x2="420" y2="720"/>
      <line x1="900" y1="0" x2="900" y2="720"/>
      <line x1="1400" y1="0" x2="1400" y2="720"/>
      <line x1="0" y1="120" x2="1640" y2="120"/>
      <line x1="0" y1="600" x2="1640" y2="600"/>
    </g>

    <!-- Accent Ambient Glow -->
    <circle cx="1350" cy="360" r="260" fill="#2DD4A7" opacity="0.09" />

    <!-- Brand Mark -->
    <g transform="translate(140, 160) scale(1.4)">
      <path d="M110 40 C90 25 60 25 40 45 C20 65 20 95 40 115 C60 135 90 135 110 120" 
            stroke="#2DD4A7" 
            stroke-width="15" 
            stroke-linecap="round"
            fill="none" />
      <circle cx="77" cy="80" r="12" fill="#F2F0EA" />
    </g>

    <!-- Typography -->
    <text x="360" y="270" fill="#F2F0EA" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="76" font-weight="800" letter-spacing="-0.04em">CORTELO</text>
    <text x="365" y="325" fill="#2DD4A7" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="600">Systems of Intelligence</text>
    <text x="365" y="380" fill="#A3AABB" font-family="monospace, Courier New" font-size="18" letter-spacing="0.15em">BESPOKE AI AGENTS &#8226; CLOUD ARCHITECTURES &#8226; ENTERPRISE PLATFORMS</text>

    <!-- Badges / Value props -->
    <rect x="365" y="430" width="220" height="42" rx="21" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
    <text x="475" y="457" fill="#F2F0EA" font-family="monospace, Courier New" font-size="13" font-weight="600" text-anchor="middle">100% IP HANDOVER</text>

    <rect x="605" y="430" width="230" height="42" rx="21" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
    <text x="720" y="457" fill="#F2F0EA" font-family="monospace, Courier New" font-size="13" font-weight="600" text-anchor="middle">ZERO SAAS TAXES</text>

    <rect x="855" y="430" width="250" height="42" rx="21" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
    <text x="980" y="457" fill="#F2F0EA" font-family="monospace, Courier New" font-size="13" font-weight="600" text-anchor="middle">PRIVATE VPS CLUSTERS</text>

    <!-- Bottom URL and Contact -->
    <text x="140" y="650" fill="#2DD4A7" font-family="monospace, Courier New" font-size="16" font-weight="700">HTTPS://CORTELO.TECH</text>
    <text x="1500" y="650" fill="#A3AABB" font-family="monospace, Courier New" font-size="15" text-anchor="end">CONTACT@CORTELO.TECH</text>
  </svg>
  `;

  const fbBannerBuf = await sharp(Buffer.from(fbBannerSvg)).png({ quality: 100 }).toBuffer();
  fs.writeFileSync(path.join(brandDir, "cortelo-banner-facebook.png"), fbBannerBuf);
  fs.writeFileSync(path.join(publicBrandDir, "cortelo-banner-facebook.png"), fbBannerBuf);
  console.log("✔ Created cortelo-banner-facebook.png (1640x720 for Facebook Page Cover)");

  // 4. Logo Dark PNG (1280 x 320 px)
  const logoDarkSvg = fs.readFileSync(path.join(brandDir, "cortelo-logo-dark.svg"));
  const logoDarkBuf = await sharp(logoDarkSvg).resize(1280, 320).png({ quality: 100 }).toBuffer();
  fs.writeFileSync(path.join(brandDir, "cortelo-logo-dark.png"), logoDarkBuf);
  fs.writeFileSync(path.join(publicBrandDir, "cortelo-logo-dark.png"), logoDarkBuf);
  console.log("✔ Created cortelo-logo-dark.png (1280x320)");

  // 5. OpenGraph Image PNG (1200 x 630 px)
  const ogSvg = fs.readFileSync(path.join(brandDir, "cortelo-og-image.svg"));
  const ogBuf = await sharp(ogSvg).resize(1200, 630).png({ quality: 100 }).toBuffer();
  fs.writeFileSync(path.join(brandDir, "cortelo-og-image.png"), ogBuf);
  fs.writeFileSync(path.join(publicBrandDir, "cortelo-og-image.png"), ogBuf);
  console.log("✔ Created cortelo-og-image.png (1200x630)");

  console.log("\nAll social assets successfully generated!");
}

generate().catch(console.error);
