# Security Policy — Cortelo

## 1. Reporting a Vulnerability
If you discover a security vulnerability in Cortelo infrastructure or client-facing platforms, please disclose it responsibly:
- **Email**: `security@cortelo.ai`
- **PGP**: Available upon request
- **Canonical security.txt**: `https://cortelo.ai/.well-known/security.txt`

We review all reports within 24 hours and commit to transparent remediation without legal threats against benevolent researchers.

---

## 2. Security Standards (OWASP ASVS L2 Target)
All production builds adhere to OWASP Application Security Verification Standard (ASVS) Level 2:
- **Input Validation**: All server endpoints strictly validated with Zod schemas. Unknown fields are rejected.
- **SSRF Guard**: Strict outbound fetch restrictions pinning DNS, disallowing private IP ranges (10/8, 172.16/12, 192.168/16, 169.254/16), and enforcing 5s timeouts.
- **Rate Limiting**: Redis-backed progressive rate limiting per IP and authenticated session.
- **Data Isolation**: Multi-tenant database queries strictly scoped by verified session identities.
- **Session Security**: HttpOnly, Secure, SameSite=Lax cookies with rotating IDs.

