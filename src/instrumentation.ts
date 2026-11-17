/**
 * Runs once when the server starts. The Supabase check lives in a Node-only module,
 * loaded only on the Node runtime so the edge bundle never includes it.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { checkSupabaseOnStartup } = await import("./instrumentation-node");
    await checkSupabaseOnStartup();
  }
}
