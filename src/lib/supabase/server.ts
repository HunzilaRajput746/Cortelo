import "server-only";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { supabaseAnonKey, supabaseUrl } from "./config";

/** A client acting as the signed-in visitor (reads and writes the auth cookies). */
export async function supabaseForUser() {
  const jar = await cookies();
  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll: () => jar.getAll(),
      setAll: (list: { name: string; value: string; options: CookieOptions }[]) => {
        try {
          list.forEach(({ name, value, options }) => jar.set(name, value, options));
        } catch {
          // called from a server component, where cookies are read-only; middleware refreshes them
        }
      },
    },
  });
}

let service: SupabaseClient | null | undefined;

/** A client with the service role key, for server-side writes and admin reads. Null when not configured. */
export function supabaseService(): SupabaseClient | null {
  if (service !== undefined) return service;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  service = supabaseUrl && key ? createClient(supabaseUrl, key, { auth: { persistSession: false, autoRefreshToken: false } }) : null;
  return service;
}
