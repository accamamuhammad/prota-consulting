import { createClient } from "@supabase/supabase-js";

// Server-only client — uses the service_role key, which bypasses Row Level
// Security. NEVER import this file in a "use client" component or expose
// SUPABASE_SERVICE_ROLE_KEY to the browser.
//
// Use this inside API routes (app/api/.../route.ts) only.
export function getSupabaseServerClient() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}