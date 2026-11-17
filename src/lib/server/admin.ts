import "server-only";
import crypto from "crypto";
import { cookies } from "next/headers";
import { authEnabled, isAdminEmail } from "@/lib/supabase/config";
import { supabaseForUser } from "@/lib/supabase/server";

/**
 * Two ways into /admin:
 *   - Supabase Auth (when NEXT_PUBLIC_SUPABASE_URL and the anon key are set): email and
 *     password, with forgotten-password emails. Only emails in ADMIN_EMAILS get in.
 *   - Fallback: a single ADMIN_PASSWORD, kept as an HMAC in a cookie, for when Supabase is not set up.
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

async function fallbackCookieValid(): Promise<boolean> {
  const token = adminToken();
  if (!token) return false;
  const jar = await cookies();
  const value = jar.get(ADMIN_COOKIE)?.value ?? "";
  const a = Buffer.from(value);
  const b = Buffer.from(token);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

/** The signed-in admin's email, or null. */
export async function currentAdmin(): Promise<string | null> {
  if (authEnabled()) {
    const supabase = await supabaseForUser();
    const { data } = await supabase.auth.getUser();
    return isAdminEmail(data.user?.email) ? data.user!.email! : null;
  }
  return (await fallbackCookieValid()) ? "admin" : null;
}

export async function isAdmin(): Promise<boolean> {
  return (await currentAdmin()) !== null;
}

/** Whether anyone can sign in at all with the current settings. */
export const signInAvailable = () => authEnabled() || adminToken() !== null;
