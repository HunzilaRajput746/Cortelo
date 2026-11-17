/**
 * Supabase settings, all from the environment:
 *   NEXT_PUBLIC_SUPABASE_URL       Project URL          (Settings -> API)
 *   NEXT_PUBLIC_SUPABASE_ANON_KEY  anon / public key    (Settings -> API)
 *   SUPABASE_SERVICE_ROLE_KEY      service_role key     (Settings -> API) — server only, never in the browser
 *   ADMIN_EMAILS                   comma-separated emails allowed into /admin
 * With these unset the site keeps working on the local file store and ADMIN_PASSWORD.
 */
export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

/** Supabase Auth runs the admin sign-in once the public URL and key are set. */
export const authEnabled = () => Boolean(supabaseUrl && supabaseAnonKey);

export const adminEmails = () =>
  (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);

export const isAdminEmail = (email?: string | null) => !!email && adminEmails().includes(email.toLowerCase());
