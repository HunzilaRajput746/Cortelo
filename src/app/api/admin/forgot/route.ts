import { NextResponse } from "next/server";
import { clientIp, publicOrigin, rateLimited } from "@/lib/server/guard";
import { authEnabled, isAdminEmail } from "@/lib/supabase/config";
import { supabaseForUser } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

/**
 * Sends a password reset link through Supabase. The answer is the same whether or not
 * the email is an admin, so the form can't be used to find admin addresses.
 */
export async function POST(req: Request) {
  const origin = publicOrigin(req);
  const done = new URL("/admin/forgot", origin);
  done.searchParams.set("sent", "1");

  if (!authEnabled() || rateLimited(`forgot:${clientIp(req)}`, 4, 30 * 60_000)) {
    return NextResponse.redirect(done, 303);
  }

  const form = await req.formData();
  const email = String(form.get("email") ?? "").trim().toLowerCase();
  if (isAdminEmail(email)) {
    const supabase = await supabaseForUser();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${origin}/auth/callback?next=/admin/reset`,
    });
    if (error) console.error("[admin] reset email failed:", error.message);
  }
  return NextResponse.redirect(done, 303);
}
