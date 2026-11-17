import type { Metadata } from "next";
import Link from "next/link";
import { authEnabled, isAdminEmail } from "@/lib/supabase/config";
import { supabaseForUser } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "New password — Cortelo admin", robots: { index: false, follow: false } };

const ERRORS: Record<string, string> = {
  short: "Use at least 10 characters.",
  match: "The two passwords don't match.",
  server: "Supabase couldn't save the password. Try again or ask for a new link.",
};

const fieldClass =
  "mt-2 h-12 w-full rounded-[var(--radius-s)] border border-[var(--line-strong)] bg-[var(--surface)] px-4 text-[15px] outline-none focus:border-[var(--accent)]";

export default async function ResetPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  let email: string | undefined;
  if (authEnabled()) {
    const supabase = await supabaseForUser();
    const { data } = await supabase.auth.getUser();
    email = data.user?.email ?? undefined;
  }
  const allowed = isAdminEmail(email);

  return (
    <section className="pt-40 pb-32">
      <div className="wrap max-w-[440px]">
        <h1 className="text-[34px] font-medium tracking-[-0.03em]">Choose a new password</h1>
        {!allowed ? (
          <p className="mt-4 text-[15px] text-[var(--text-muted)]">
            This link has expired or was opened in another browser.{" "}
            <Link href="/admin/forgot" className="link-draw">
              Ask for a new one
            </Link>
            .
          </p>
        ) : (
          <form method="post" action="/api/admin/reset" className="mt-8 space-y-4">
            <p className="text-[14px] text-[var(--text-faint)]">For {email}</p>
            <label className="block">
              <span className="text-[14px] text-[var(--text-muted)]">New password</span>
              <input name="password" type="password" required minLength={10} autoComplete="new-password" className={fieldClass} />
            </label>
            <label className="block">
              <span className="text-[14px] text-[var(--text-muted)]">Repeat it</span>
              <input name="confirm" type="password" required minLength={10} autoComplete="new-password" className={fieldClass} />
            </label>
            {error && <p className="text-[14px] text-[#ff8a7a]">{ERRORS[error] ?? ERRORS.server}</p>}
            <button className="btn btn-primary w-full">Save the password</button>
          </form>
        )}
      </div>
    </section>
  );
}
