import "server-only";
import crypto from "crypto";
import { cookies } from "next/headers";

/**
 * The admin area is open only when ADMIN_PASSWORD is set on the server.
 * A signed-in browser holds a cookie with an HMAC of the password, never the password.
 */
export const ADMIN_COOKIE = "cortelo_admin";

export function adminToken(): string | null {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return null;
  return crypto.createHmac("sha256", pw).update("cortelo-admin-v1").digest("hex");
}

export function passwordMatches(input: string): boolean {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(pw);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export async function isAdmin(): Promise<boolean> {
  const token = adminToken();
  if (!token) return false;
  const jar = await cookies();
  const value = jar.get(ADMIN_COOKIE)?.value ?? "";
  const a = Buffer.from(value);
  const b = Buffer.from(token);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
