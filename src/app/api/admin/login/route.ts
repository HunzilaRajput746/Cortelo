import { NextResponse } from "next/server";
import { ADMIN_COOKIE, adminToken, passwordMatches } from "@/lib/server/admin";
import { clientIp, publicOrigin, rateLimited } from "@/lib/server/guard";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const origin = publicOrigin(req);
  const back = new URL("/admin", origin);
  if (rateLimited(`admin:${clientIp(req)}`, 8, 15 * 60_000)) {
    back.searchParams.set("error", "wait");
    return NextResponse.redirect(back, 303);
  }

  const form = await req.formData();
  const password = String(form.get("password") ?? "");
  const token = adminToken();
  if (!token || !passwordMatches(password)) {
    back.searchParams.set("error", "1");
    return NextResponse.redirect(back, 303);
  }

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
