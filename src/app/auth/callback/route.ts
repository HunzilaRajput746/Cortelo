import { NextResponse } from "next/server";
import { publicOrigin } from "@/lib/server/guard";
import { authEnabled } from "@/lib/supabase/config";
import { supabaseForUser } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

/** Where Supabase sends the admin back from a reset email: swaps the code for a session. */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const origin = publicOrigin(req);
  const code = url.searchParams.get("code");
  const nextParam = url.searchParams.get("next") ?? "/admin";
  // only ever continue to an admin page on this site
  const next = nextParam.startsWith("/admin") ? nextParam : "/admin";

  if (authEnabled() && code) {
    const supabase = await supabaseForUser();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) return NextResponse.redirect(new URL(next, origin), 303);
    console.error("[auth] code exchange failed:", error.message);
  }
  return NextResponse.redirect(new URL("/admin/forgot?expired=1", origin), 303);
}
