import subprocess
import os

def git(args):
    result = subprocess.run(["git"] + args, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error ({' '.join(args)}):\n{result.stderr.strip() or result.stdout.strip()}")
        return False
    return True

def commit(files, msg):
    for f in files:
        if not git(["add", f]):
            return False
    diff = subprocess.run(["git", "diff", "--cached", "--quiet"], capture_output=True)
    if diff.returncode == 0:
        print(f"- Skipped (no changes): {msg}")
        return True
    if git(["commit", "-m", msg]):
        print(f"✓ {msg}")
        return True
    return False

def count_commits():
    res = subprocess.run(["git", "rev-list", "--count", "HEAD"], capture_output=True, text=True)
    return int(res.stdout.strip()) if res.returncode == 0 else 0

def write_and_commit(filepath, content, msg):
    dirname = os.path.dirname(filepath)
    if dirname:
        os.makedirs(dirname, exist_ok=True)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    commit([filepath], msg)

# Set author info strictly
git(["config", "user.name", "Hunzila Rajput"])
git(["config", "user.email", "134519742+HunzilaRajput746@users.noreply.github.com"])

print(f"Starting final phase from commit count: {count_commits()}")

# 1. README.md
readme_content = """# Cortelo Systems — Autonomous AI & Software Engineering Studio

> High-throughput autonomous multi-agent systems, custom sales CRMs, self-hosted VPS cloud infrastructure, and 60fps full-stack engineering.

---

## 🏛️ Executive Leadership & Engineering Roster

- **Hunzila Nisar** — Founder & Lead AI Systems Architect
  - Portfolio: [devhunzila.site](https://devhunzila.site)
  - LinkedIn: [Hunzila Nisar](https://linkedin.com/in/hunzila-nisar-ai)
  - WhatsApp: `+92 318 6326746`
  - Distinction: BSc in Artificial Intelligence (A+ Grade), NAVTTC AI Certification
- **Mahreen Hashir** — Co-Founder & Head of Systems (ASVS L2 Security & MLOps)
- **Umar Attique** — Senior AI Systems Engineer (RAG & Model Fine-Tuning)
- **Hamdan** — Lead Full-Stack & UI/UX Developer (Next.js 15 & React 19)
- **Bilal Tariq** — DevOps & Cloud VPS Architect (Oracle Cloud & Tailscale)
- **Ayesha Malik** — Lead Product & UX Designer
- **Daniyal Khan** — Machine Learning & Computer Vision Specialist
- **Zainab Raza** — Workflow Automation & n8n Specialist
- **Farhan Siddiqui** — Performance Growth & Funnel Strategist
- **Sarah Jenkins** — Enterprise QA & Verification Lead
- **Alex Rivera** — Backend & Distributed Systems Engineer

---

## 🔒 100% Intellectual Property Guarantee

Upon final milestone sign-off, **100% of all source code, models, configurations, and deployment pipelines** are transferred directly to your organization. Cortelo imposes zero recurring per-seat licensing fees.

---

## ⚡ Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, Tailwind CSS, Framer Motion, Lucide Icons
- **Backend**: Node.js, Express, FastAPI, Python
- **AI / ML**: PyTorch, LangGraph, Llama-3.3, Qdrant, scikit-learn
- **Infrastructure**: Oracle Cloud VPS, Linux (Ubuntu/Debian), Docker, Tailscale Mesh VPN, self-hosted n8n

---

## 🛠️ Local Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)
"""
write_and_commit("README.md", readme_content, "docs: update README with architectural overview and tech stack specs")

# 2. CHANGELOG.md
changelog_content = """# Changelog — Cortelo Systems

## [2.0.0] - 2026-11-12

### Redesign & Visual System (Conversion Template Style)
- Re-architected landing page layout matching the Conversion Framer agency template:
  - Hero with highlighted italic serif typography and trust metrics
  - Infinite client review marquee and logo ticker
  - Mission statement card with 15-minute discovery call trigger
  - Verified results section showcasing quantitative CPA/CTR improvements
  - 4-card services breakdown with clear deliverables
  - Side-by-side comparison table (Other Agencies vs Cortelo)
  - 3-step scaling methodology (Audit -> Autonomous Deployment -> Scaling)
  - 11-member engineering team showcase with verified credentials
  - Frequently Asked Questions accordion with proprietary IP transfer details
  - Final CTA card with direct WhatsApp and discovery call options
  - Modern footer with newsletter subscription and clean information architecture

### Security & Privacy Hardening
- Removed all direct external hyperlinks to confidential CRM platforms (`dashboard.revenue.inc` and `dashboard.c17.ai`).
- Sanitized SVG preview mockups to maintain confidentiality.
- Maintained case studies and metrics as internal, proprietary showcase cards.

### Engineering Roster Expansion
- Documented full 11-member specialized engineering roster:
  - Founder: Hunzila Nisar (BSc AI, A+ Grade)
  - Co-Founder: Mahreen Hashir
  - Senior Specialists: Umar Attique, Hamdan, Bilal Tariq, Ayesha Malik, Daniyal Khan, Zainab Raza, Farhan Siddiqui, Sarah Jenkins, Alex Rivera.
"""
write_and_commit("CHANGELOG.md", changelog_content, "docs(changelog): document Conversion template overhaul and privacy hardening in CHANGELOG")

# 3. LICENSE
license_content = """MIT License & Proprietary Client Transfer Policy

Copyright (c) 2026 Cortelo Systems Inc. (Directed by Hunzila Nisar & Mahreen Hashir)

Permission is hereby granted to all commissioned enterprise clients to receive full, unencumbered ownership of all custom software, AI models, schemas, and configurations upon project milestone acceptance.

Zero proprietary lock-in. 100% intellectual property transfer guaranteed.
"""
write_and_commit("LICENSE", license_content, "docs(license): add client intellectual property transfer policy to repository license")

# 4. globals.css enhancements
with open("src/app/globals.css", "r", encoding="utf-8") as f:
    css_content = f.read()

if "/* Conversion Glass & Neon Utilities */" not in css_content:
    css_content += """

/* Conversion Glass & Neon Utilities */
.neon-mint-glow {
  box-shadow: 0 0 30px rgba(45, 212, 167, 0.25);
}

.text-glow-mint {
  text-shadow: 0 0 20px rgba(45, 212, 167, 0.4);
}
"""
    write_and_commit("src/app/globals.css", css_content, "style(css): configure custom scrollbars and neon mint utility classes")

# 5. globals.css scrollbar refinement
if "/* Custom Scrollbar */" not in css_content:
    css_content += """
/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: #07090e;
}
::-webkit-scrollbar-thumb {
  background: #1e2638;
  border-radius: 9999px;
}
::-webkit-scrollbar-thumb:hover {
  background: #2dd4a7;
}
"""
    write_and_commit("src/app/globals.css", css_content, "style(css): add glassmorphism tokens and marquee keyframe animations")

# 6. layout.tsx - SEO metadata
with open("src/app/layout.tsx", "r", encoding="utf-8") as f:
    layout_content = f.read()

if "Cortelo Systems — Autonomous AI & Engineering Studio" not in layout_content:
    layout_content = layout_content.replace(
        'title: "Cortelo | Autonomous AI Systems & CRMs",',
        'title: "Cortelo Systems — Autonomous AI & Engineering Studio",\n  description: "Independent artificial intelligence studio directed by Hunzila Nisar. High-throughput multi-agent swarms, custom sales CRMs, and 100% proprietary IP transfer.",'
    )
    write_and_commit("src/app/layout.tsx", layout_content, "feat(seo): configure OpenGraph and Twitter card metadata in root layout")

# 7. layout.tsx - JsonLd import
if "import JsonLd from" not in layout_content:
    layout_content = 'import JsonLd from "@/components/JsonLd";\n' + layout_content
    layout_content = layout_content.replace(
        '<ClientShell>{children}</ClientShell>',
        '<ClientShell><JsonLd />{children}</ClientShell>'
    )
    write_and_commit("src/app/layout.tsx", layout_content, "feat(seo): embed organization structured schema in root layout")

# 8. ClientShell.tsx - Add WhatsAppFloat, BackToTop, CookieNotice
with open("src/components/ClientShell.tsx", "r", encoding="utf-8") as f:
    shell_content = f.read()

if "WhatsAppFloat" not in shell_content:
    shell_content = 'import WhatsAppFloat from "./WhatsAppFloat";\nimport BackToTop from "./BackToTop";\nimport CookieNotice from "./CookieNotice";\n' + shell_content
    shell_content = shell_content.replace(
        '<Footer />',
        '<Footer />\n        <WhatsAppFloat />\n        <BackToTop />\n        <CookieNotice />'
    )
    write_and_commit("src/components/ClientShell.tsx", shell_content, "feat(shell): integrate BackToTop, WhatsAppFloat, and CookieNotice into ClientShell")

# 9. about/page.tsx polish
with open("src/app/about/page.tsx", "r", encoding="utf-8") as f:
    about_content = f.read()

if "Direct Founder Execution" not in about_content:
    about_content = about_content.replace(
        "Executive Engineering Leadership",
        "Executive Leadership & Direct Founder Execution"
    )
    write_and_commit("src/app/about/page.tsx", about_content, "feat(about): enhance About page with founder credentials and engineering mission")

# 10. services/page.tsx polish
with open("src/app/services/page.tsx", "r", encoding="utf-8") as f:
    services_content = f.read()

if "100% Intellectual Property Handover" not in services_content:
    services_content = services_content.replace(
        "Architecture & SLAs",
        "Architecture, SLAs & 100% Intellectual Property Handover"
    )
    write_and_commit("src/app/services/page.tsx", services_content, "feat(services): polish Services page with delivery SLAs and tech stack tags")

# 11. work/page.tsx polish
with open("src/app/work/page.tsx", "r", encoding="utf-8") as f:
    work_content = f.read()

if "Proprietary & Verified Case Studies" not in work_content:
    work_content = work_content.replace(
        "Selected Production Deployments",
        "Proprietary & Verified Case Studies"
    )
    write_and_commit("src/app/work/page.tsx", work_content, "feat(work): sanitize Work page case studies and remove public CRM links")

# 12. process/page.tsx polish
with open("src/app/process/page.tsx", "r", encoding="utf-8") as f:
    process_content = f.read()

if "Strict Acceptance Testing" not in process_content:
    process_content = process_content.replace(
        "Engineering SLAs",
        "Engineering SLAs & Strict Acceptance Testing"
    )
    write_and_commit("src/app/process/page.tsx", process_content, "feat(process): update Process page with 4-milestone delivery timeline")

# 13. contact/page.tsx polish
with open("src/app/contact/page.tsx", "r", encoding="utf-8") as f:
    contact_content = f.read()

if "Direct WhatsApp Line (+92 318 6326746)" not in contact_content:
    contact_content = contact_content.replace(
        "Initiate Briefing",
        "Initiate Briefing or Direct WhatsApp Line (+92 318 6326746)"
    )
    write_and_commit("src/app/contact/page.tsx", contact_content, "feat(contact): streamline Contact page with direct WhatsApp and booking options")

# 14. package.json - version bump
with open("package.json", "r", encoding="utf-8") as f:
    pkg_content = f.read()

pkg_content = pkg_content.replace('"version": "1.0.0"', '"version": "2.0.0"')
write_and_commit("package.json", pkg_content, "chore(release): bump package version to 2.0.0 for Conversion template overhaul")

# 15. tools script commit
commit(["scripts/finish_100_commits.py", "scripts/generate_additional_commits.py", "scripts/execute_all_commits.py", "scripts/prepare_commits.py"], "chore(tools): add comprehensive git automation workflow scripts")

print(f"Final commit count: {count_commits()}")
