import { createClient } from "@supabase/supabase-js";

// Server-only — uses the service_role key (bypasses Row Level Security), so
// this must never be imported from a "use client" component. Env var names
// match exactly what Vercel's Supabase integration already injects (both
// locally in .env.local and in the linked Vercel project) — not renamed, to
// avoid drift if the integration re-syncs.
export function getSupabaseClient() {
  const url = process.env.Supa_Store_Stor_SUPABASE_URL;
  const serviceRoleKey = process.env.Supa_Store_Stor_SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) {
    throw new Error("Supabase env vars no están configuradas (Supa_Store_Stor_SUPABASE_URL / _SERVICE_ROLE_KEY).");
  }
  return createClient(url, serviceRoleKey);
}
