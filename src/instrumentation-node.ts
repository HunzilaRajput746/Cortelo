/**
 * Runs once when the server starts. Every call request and message is stored in Supabase
 * only, so the site refuses to start without a working Supabase connection instead of
 * accepting forms it can't save.
 */
export async function checkSupabaseOnStartup() {
  const required = ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_ANON_KEY", "SUPABASE_SERVICE_ROLE_KEY", "ADMIN_EMAILS"];
  const missing = required.filter((k) => !process.env[k]);
  if (missing.length) {
    console.error(`\n[startup] Supabase is not configured. Missing: ${missing.join(", ")}.\nAdd them to .env and restart.\n`);
    process.exit(1);
  }

  const { pingStore } = await import("./lib/server/store");
  try {
    await pingStore();
    console.log("[startup] Supabase connected.");
  } catch (err) {
    console.error(`\n[startup] Can't reach Supabase: ${(err as Error).message}\nThe site will not start until Supabase answers.\n`);
    process.exit(1);
  }
}
