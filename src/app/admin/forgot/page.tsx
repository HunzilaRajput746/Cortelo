import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { authEnabled } from "@/lib/supabase/config";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Reset password — Cortelo admin", robots: { index: false, follow: false } };

export default async function ForgotPage({ searchParams }: { searchParams: Promise<{ sent?: string; expired?: string }> }) {
  const { sent, expired } = await searchParams;

  return (
    <section className="pt-40 pb-32">
      <div className="wrap max-w-[440px]">
        <Link href="/admin" className="link-draw mb-8 text-[14px] !text-[var(--text-muted)]">
          <ArrowLeft className="h-4 w-4" /> Back to sign in
        </Link>
        <h1 className="text-[34px] font-medium tracking-[-0.03em]">Reset your password</h1>

        {!authEnabled() ? (
          <p className="mt-4 text-[15px] text-[var(--text-muted)]">Password reset needs Supabase. Add its settings on the server first.</p>
        ) : sent ? (
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-muted)]" role="status">
            If that email belongs to an admin, a reset link is on its way. Open it in this browser within an hour.
          </p>
        ) : (
          <>
            <p className="mt-4 text-[15px] text-[var(--text-muted)]">
              {expired ? "That link has expired or was already used. Ask for a new one." : "Enter your admin email and we will send you a link."}
            </p>
            <form method="post" action="/api/admin/forgot" className="mt-8 space-y-4">
              <label className="block">
                <span className="text-[14px] text-[var(--text-muted)]">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="username"
                  className="mt-2 h-12 w-full rounded-[var(--radius-s)] border border-[var(--line-strong)] bg-[var(--surface)] px-4 text-[15px] outline-none focus:border-[var(--accent)]"
                />
              </label>
              <button className="btn btn-primary w-full">Send the reset link</button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
