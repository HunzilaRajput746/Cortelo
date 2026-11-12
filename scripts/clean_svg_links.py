import re

# Update revenue_crm_preview.svg
with open('public/assets/projects/revenue_crm_preview.svg', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('dashboard.revenue.inc', 'private-crm.internal.mesh')
c = c.replace('REVENUE.INC', 'ENTERPRISE CRM')
with open('public/assets/projects/revenue_crm_preview.svg', 'w', encoding='utf-8') as f:
    f.write(c)

# Update c17_crm_preview.svg
with open('public/assets/projects/c17_crm_preview.svg', 'r', encoding='utf-8') as f:
    c2 = f.read()
c2 = c2.replace('dashboard.c17.ai', 'deal-matrix.internal.mesh')
c2 = c2.replace('C17 LEAD & DEAL PLATFORM', 'ENTERPRISE DEAL PIPELINE')
with open('public/assets/projects/c17_crm_preview.svg', 'w', encoding='utf-8') as f:
    f.write(c2)

print('Updated preview SVGs successfully!')

