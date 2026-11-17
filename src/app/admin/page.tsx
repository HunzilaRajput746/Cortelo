import type { Metadata } from "next";
import { isAdmin, adminToken } from "@/lib/server/admin";
import { readAll, type BookingRecord, type InquiryRecord } from "@/lib/server/store";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Admin — Cortelo", robots: { index: false, follow: false } };

const pkt = (iso: string) =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Karachi",
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));

function Login({ error, disabled }: { error?: string; disabled: boolean }) {
  return (
    <section className="pt-40 pb-32">
      <div className="wrap max-w-[440px]">
        <h1 className="text-[34px] font-medium tracking-[-0.03em]">Studio admin</h1>
        {disabled ? (
          <p className="mt-4 text-[15px] text-[var(--text-muted)]">
            The admin area is off. Set <code className="font-mono text-[var(--accent)]">ADMIN_PASSWORD</code> in the
            server&apos;s environment and restart the site to turn it on.
          </p>
        ) : (
          <form method="post" action="/api/admin/login" className="mt-8 space-y-4">
            <label className="block">
              <span className="text-[14px] text-[var(--text-muted)]">Password</span>
              <input
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="mt-2 h-12 w-full rounded-[var(--radius-s)] border border-[var(--line-strong)] bg-[var(--surface)] px-4 text-[15px] outline-none focus:border-[var(--accent)]"
              />
            </label>
            {error && (
              <p className="text-[14px] text-[#ff8a7a]">
                {error === "wait" ? "Too many tries. Wait 15 minutes." : "That password is wrong."}
              </p>
            )}
            <button className="btn btn-primary w-full">Sign in</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  if (!(await isAdmin())) return <Login error={error} disabled={!adminToken()} />;

  const [bookings, inquiries] = await Promise.all([
    readAll<BookingRecord>("bookings"),
    readAll<InquiryRecord>("inquiries"),
  ]);
  const now = Date.now();
  const upcoming = bookings
    .filter((b) => b.status === "confirmed" && new Date(b.slotStart).getTime() > now - 3_600_000)
    .sort((a, b) => a.slotStart.localeCompare(b.slotStart));
  const past = bookings.filter((b) => !upcoming.includes(b)).sort((a, b) => b.slotStart.localeCompare(a.slotStart));
  const messages = [...inquiries].sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <section className="pt-32 pb-28">
      <div className="wrap space-y-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-4">Studio admin</p>
            <h1 className="text-[40px] font-medium tracking-[-0.035em]">Calls and messages</h1>
          </div>
          <form method="post" action="/api/admin/logout">
            <button className="btn btn-ghost">Sign out</button>
          </form>
        </div>

        <dl className="grid grid-cols-3 gap-4">
          {[
            ["Upcoming calls", upcoming.length],
            ["Messages and briefs", messages.length],
            ["All calls booked", bookings.length],
          ].map(([label, n]) => (
            <div key={label} className="card p-6">
              <dt className="text-[13px] text-[var(--text-faint)]">{label}</dt>
              <dd className="mt-2 text-[34px] font-medium tracking-[-0.03em]">{n}</dd>
            </div>
          ))}
        </dl>

        <div>
          <h2 className="mb-5 text-[22px] font-medium">Upcoming calls (PKT)</h2>
          {upcoming.length === 0 ? (
            <p className="text-[15px] text-[var(--text-muted)]">No calls booked yet.</p>
          ) : (
            <div className="overflow-x-auto rounded-[var(--radius-l)] border border-[var(--line)]">
              <table className="w-full min-w-[760px] text-left text-[14px]">
                <thead className="bg-[var(--surface)] text-[12px] uppercase tracking-[0.12em] text-[var(--text-faint)]">
                  <tr>
                    <th className="px-5 py-3 font-normal">When</th>
                    <th className="px-5 py-3 font-normal">Who</th>
                    <th className="px-5 py-3 font-normal">Service</th>
                    <th className="px-5 py-3 font-normal">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {upcoming.map((b) => (
                    <tr key={b.id} className="border-t border-[var(--line)] align-top">
                      <td className="px-5 py-4 whitespace-nowrap text-[var(--accent)]">{pkt(b.slotStart)}</td>
                      <td className="px-5 py-4">
                        {b.name}
                        <br />
                        <a href={`mailto:${b.email}`} className="link-draw text-[var(--text-muted)]">
                          {b.email}
                        </a>
                        {b.company && <div className="text-[var(--text-faint)]">{b.company}</div>}
                        {b.timeZone && <div className="text-[12px] text-[var(--text-faint)]">{b.timeZone}</div>}
                      </td>
                      <td className="px-5 py-4 text-[var(--text-muted)]">{b.service ?? "—"}</td>
                      <td className="px-5 py-4 max-w-[360px] text-[var(--text-muted)] whitespace-pre-wrap">{b.message ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div>
          <h2 className="mb-5 text-[22px] font-medium">Messages and project briefs</h2>
          {messages.length === 0 ? (
            <p className="text-[15px] text-[var(--text-muted)]">No messages yet.</p>
          ) : (
            <ul className="space-y-3">
              {messages.map((m) => (
                <li key={m.id} className="card p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <p className="text-[16px]">
                      {m.name}{" "}
                      <a href={`mailto:${m.email}`} className="link-draw text-[14px] text-[var(--text-muted)]">
                        {m.email}
                      </a>
                    </p>
                    <p className="font-mono text-[12px] text-[var(--text-faint)]">
                      {m.kind === "brief" ? "Brief" : "Contact"} · {pkt(m.createdAt)}
                    </p>
                  </div>
                  <p className="mt-1 text-[13px] text-[var(--text-faint)]">
                    {[m.company, m.service, m.budget, m.timeline].filter(Boolean).join(" · ")}
                  </p>
                  <p className="mt-3 whitespace-pre-wrap text-[15px] leading-relaxed text-[var(--text-muted)]">{m.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {past.length > 0 && (
          <details className="rounded-[var(--radius-l)] border border-[var(--line)] p-6">
            <summary className="cursor-pointer text-[15px] text-[var(--text-muted)]">Past calls ({past.length})</summary>
            <ul className="mt-4 space-y-2 text-[14px] text-[var(--text-muted)]">
              {past.map((b) => (
                <li key={b.id}>
                  {pkt(b.slotStart)} — {b.name} ({b.email})
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </section>
  );
}
