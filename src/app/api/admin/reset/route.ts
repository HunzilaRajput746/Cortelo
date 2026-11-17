import { NextResponse } from "next/server";
import { publicOrigin } from "@/lib/server/guard";
import { authEnabled, isAdminEmail } from "@/lib/supabase/config";
import { supabaseForUser } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

/** Sets a new password for the admin who arrived through a reset link. */
export async function POST(req: Request) {
  const origin = publicOrigin(req);
  const page = new URL("/admin/reset", origin);
  const fail = (code: string) => {
    page.searchParams.set("error", code);
    return NextResponse.redirect(page, 303);
  };

  if (!authEnabled()) return NextResponse.redirect(new URL("/admin", origin), 303);

  const supabase = await supabaseForUser();
  const { data } = await supabase.auth.getUser();
  if (!isAdminEmail(data.user?.email)) return NextResponse.redirect(new URL("/admin/forgot?expired=1", origin), 303);

  const form = await req.formData();
  const password = String(form.get("password") ?? "");
  const confirm = String(form.get("confirm") ?? "");
  if (password.length < 10) return fail("short");
  if (password !== confirm) return fail("match");

  const { error } = await supabase.auth.updateUser({ password });
  if (error) {
    console.error("[admin] password update failed:", error.message);
    return fail("server");
  }
  return NextResponse.redirect(new URL("/admin?reset=1", origin), 303);
}
