import { NextResponse } from "next/server";
import { ADMIN_COOKIE } from "@/lib/server/admin";
import { publicOrigin } from "@/lib/server/guard";
import { authEnabled } from "@/lib/supabase/config";
import { supabaseForUser } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  if (authEnabled()) {
    const supabase = await supabaseForUser();
    await supabase.auth.signOut();
  }
  const res = NextResponse.redirect(new URL("/admin", publicOrigin(req)), 303);
  res.cookies.delete(ADMIN_COOKIE);
  return res;
}
