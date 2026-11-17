import "server-only";

/** Per-IP request limit kept in memory (the site runs as one process). */
const hits = new Map<string, number[]>();

export function rateLimited(ip: string, limit = 6, windowMs = 10 * 60_000): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > limit;
}

export function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  return (fwd?.split(",")[0] || req.headers.get("x-real-ip") || "unknown").trim();
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type FieldErrors = Record<string, string>;

/** Trims a value and caps its length; returns "" for anything that isn't a string. */
export function clean(v: unknown, max = 2000): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export function checkContact(body: Record<string, unknown>) {
  const errors: FieldErrors = {};
  const name = clean(body.name, 120);
  const email = clean(body.email, 200).toLowerCase();
  if (name.length < 2) errors.name = "Enter your name.";
  if (!EMAIL.test(email)) errors.email = "Enter a valid email address.";
  return { name, email, errors };
}

/** Bots fill the hidden "website" field; people never see it. */
export const isBot = (body: Record<string, unknown>) => clean(body.website).length > 0;

/** The public origin behind a reverse proxy (nginx passes Host and X-Forwarded-Proto). */
export function publicOrigin(req: Request): string {
  const url = new URL(req.url);
  const proto = req.headers.get("x-forwarded-proto")?.split(",")[0] || url.protocol.replace(":", "");
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host") || url.host;
  return `${proto}://${host}`;
}
