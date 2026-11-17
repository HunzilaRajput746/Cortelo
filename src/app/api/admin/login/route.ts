import { NextResponse } from "next/server";
import { ADMIN_COOKIE, adminToken, passwordMatches } from "@/lib/server/admin";
import { clientIp, publicOrigin, rateLimited } from "@/lib/server/guard";
import { authEnabled, isAdminEmail } from "@/lib/supabase/config";
import { supabaseForUser } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const origin = publicOrigin(req);
  const back = new URL("/admin", origin);
  const fail = (code: string) => {
    back.searchParams.set("error", code);
    return NextResponse.redirect(back, 303);
  };

  if (rateLimited(`admin:${clientIp(req)}`, 8, 15 * 60_000)) return fail("wait");

  const form = await req.formData();
  const password = String(form.get("password") ?? "");

  // Supabase Auth: email and password, admins only
  if (authEnabled()) {
    const email = String(form.get("email") ?? "").trim().toLowerCase();
    if (!isAdminEmail(email)) return fail("1");
    const supabase = await supabaseForUser();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return fail("1");
    return NextResponse.redirect(back, 303);
  }

  // Fallback: single shared password
  const token = adminToken();
  if (!token || !passwordMatches(password)) return fail("1");
  const res = NextResponse.redirect(back, 303);
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: origin.startsWith("https:"),
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
  });
  return res;
}
