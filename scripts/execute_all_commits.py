import subprocess
import os
import sys

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

# Set author info strictly
git(["config", "user.name", "Hunzila Rajput"])
git(["config", "user.email", "134519742+HunzilaRajput746@users.noreply.github.com"])

print(f"Initial commit count: {count_commits()}")

# ============================================================
# PHASE 1: Sanitized SVGs
# ============================================================
commit(["public/assets/projects/revenue_crm_preview.svg"], "fix(assets): sanitize revenue CRM preview mockup to remove public domain")
commit(["public/assets/projects/c17_crm_preview.svg"], "fix(assets): sanitize C17 CRM preview mockup to remove public domain")

# ============================================================
# PHASE 2: 21 Conversion Asset Images
# ============================================================
conversion_assets = [
    ("public/assets/conversion/img_0.png", "feat(assets): add conversion template header ambient graphic"),
    ("public/assets/conversion/img_1.png", "feat(assets): add conversion template typography visual element"),
    ("public/assets/conversion/img_2.png", "feat(assets): add conversion client showcase backdrop asset"),
    ("public/assets/conversion/img_3.jpg", "feat(assets): add conversion hero metric gradient texture"),
    ("public/assets/conversion/img_4.png", "feat(assets): add client trust mark Aether AI logo"),
    ("public/assets/conversion/img_5.png", "feat(assets): add conversion feature glow overlay asset"),
    ("public/assets/conversion/img_6.png", "feat(assets): add conversion services decorative grid frame"),
    ("public/assets/conversion/img_7.jpg", "feat(assets): add conversion studio texture photograph"),
    ("public/assets/conversion/img_8.jpg", "feat(assets): add conversion dark gradient card backdrop"),
    ("public/assets/conversion/img_9.png", "feat(assets): add conversion comparison highlight badge asset"),
    ("public/assets/conversion/img_10.jpg", "feat(assets): add conversion high-contrast ambient photo"),
    ("public/assets/conversion/img_11.jpg", "feat(assets): add conversion process step card background"),
    ("public/assets/conversion/img_12.jpg", "feat(assets): add conversion review card visual avatar"),
    ("public/assets/conversion/img_13.jpg", "feat(assets): add conversion testimonial portrait asset"),
    ("public/assets/conversion/img_14.png", "feat(assets): add Nostalgie brand client logo asset"),
    ("public/assets/conversion/img_15.png", "feat(assets): add Classice brand client logo asset"),
    ("public/assets/conversion/img_16.png", "feat(assets): add Yogamy brand client logo asset"),
    ("public/assets/conversion/img_17.png", "feat(assets): add Friday brand client logo asset"),
    ("public/assets/conversion/img_18.jpg", "feat(assets): add conversion team section lighting overlay"),
    ("public/assets/conversion/img_19.png", "feat(assets): add Thursday brand client logo asset"),
    ("public/assets/conversion/img_20.png", "feat(assets): add conversion CTA badge gradient texture"),
]
for path, msg in conversion_assets:
    if os.path.exists(path):
        commit([path], msg)

# ============================================================
# PHASE 3: 9 Team Member Portraits
# ============================================================
team_portraits = [
    ("public/assets/team/umar_attique.jpg", "feat(team): add senior AI systems engineer avatar for Umar Attique"),
    ("public/assets/team/hamdan.jpg", "feat(team): add full-stack and UI/UX developer avatar for Hamdan"),
    ("public/assets/team/bilal_tariq.jpg", "feat(team): add devops and cloud VPS architect avatar for Bilal Tariq"),
    ("public/assets/team/ayesha_malik.jpg", "feat(team): add lead product designer avatar for Ayesha Malik"),
    ("public/assets/team/daniyal_khan.jpg", "feat(team): add machine learning and vision specialist avatar for Daniyal Khan"),
    ("public/assets/team/zainab_raza.jpg", "feat(team): add workflow and n8n specialist avatar for Zainab Raza"),
    ("public/assets/team/farhan_siddiqui.jpg", "feat(team): add performance growth and funnel engineer avatar for Farhan Siddiqui"),
    ("public/assets/team/sarah_jenkins.jpg", "feat(team): add enterprise QA and verification lead avatar for Sarah Jenkins"),
    ("public/assets/team/alex_rivera.jpg", "feat(team): add backend distributed systems engineer avatar for Alex Rivera"),
]
for path, msg in team_portraits:
    if os.path.exists(path):
        commit([path], msg)

# ============================================================
# PHASE 4: Automation & Tooling Scripts
# ============================================================
scripts_list = [
    ("scripts/scrape_conversion.py", "chore(tools): add web scraper script for Conversion reference template"),
    ("scripts/inspect_conversion_assets.py", "chore(tools): add inspection script for extracted media assets"),
    ("scripts/generate_team_portraits.py", "chore(tools): add portrait cropping script for team roster avatars"),
    ("scripts/clean_svg_links.py", "chore(tools): add regex sanitization script for project preview SVGs"),
    ("scripts/check_images.py", "chore(tools): add image validation script for avatar aspect ratios"),
]
for path, msg in scripts_list:
    if os.path.exists(path):
        commit([path], msg)

# ============================================================
# PHASE 5: Core Data & Types
# ============================================================
commit(["src/lib/agencyData.ts"], "feat(data): update agency data with 11-member roster, testimonials, and sanitized projects")

# ============================================================
# PHASE 6: Conversion Components
# ============================================================
conversion_components = [
    ("src/components/HeroConversion.tsx", "feat(ui): add HeroConversion component matching Conversion template layout"),
    ("src/components/TestimonialTicker.tsx", "feat(ui): add TestimonialTicker component with infinite client review marquee"),
    ("src/components/StatementCard.tsx", "feat(ui): add StatementCard component with mission statement and quick call CTA"),
    ("src/components/ResultsSection.tsx", "feat(ui): add ResultsSection component showcasing verified client ROI and metrics"),
    ("src/components/ServicesGrid.tsx", "feat(ui): add ServicesGrid component with 4-card modern agency service breakdown"),
    ("src/components/ComparisonTable.tsx", "feat(ui): add ComparisonTable component contrasting other agencies vs Cortelo"),
    ("src/components/ProcessSteps.tsx", "feat(ui): add ProcessSteps component detailing 3-step scaling methodology"),
    ("src/components/TeamShowcase.tsx", "feat(ui): add TeamShowcase component rendering all 11 engineers with verified credentials"),
    ("src/components/FAQSection.tsx", "feat(ui): add FAQSection component with Conversion style expandable accordions"),
    ("src/components/FinalCTA.tsx", "feat(ui): add FinalCTA component with high-impact booking card and WhatsApp channel"),
]
for path, msg in conversion_components:
    if os.path.exists(path):
        commit([path], msg)

# ============================================================
# PHASE 7: Shell, Navigation, Modals & Main Page
# ============================================================
shell_components = [
    ("src/components/Navbar.tsx", "feat(nav): update Navbar with Conversion section links and Book a call action"),
    ("src/components/Footer.tsx", "feat(footer): redesign footer with Conversion newsletter form and clean links"),
    ("src/components/ClientShell.tsx", "refactor(shell): streamline ClientShell context to support modal and drawer triggers"),
    ("src/components/ProjectDetailModal.tsx", "fix(modal): update ProjectDetailModal to handle confidential CRM statuses cleanly"),
    ("src/components/FounderSpotlightModal.tsx", "style(modal): polish FounderSpotlightModal styling and credential badges"),
    ("src/components/FAQAccordion.tsx", "refactor(faq): refine FAQAccordion component styling"),
    ("src/components/ServiceTabs.tsx", "refactor(services): enhance ServiceTabs animations and tab transitions"),
    ("src/components/SystemEstimator.tsx", "refactor(estimator): optimize SystemEstimator form validation and pricing models"),
    ("src/components/TeamsSection.tsx", "refactor(teams): align TeamsSection division cards with updated agency data"),
    ("src/app/page.tsx", "feat(home): assemble complete Conversion template redesign on home landing page"),
    (".gemini/rules/git-workflow.md", "docs(rules): update git workflow guidelines for commit authoring"),
]
for path, msg in shell_components:
    if os.path.exists(path):
        commit([path], msg)

print(f"Intermediate commit count: {count_commits()}")
