import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Next.js env vars must be prefixed with NEXT_PUBLIC_ to be available on the client.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
	supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
	console.warn('Supabase env vars missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to enable live data. Falling back to static content.');
}

/**
 * Returns a Supabase client or throws if env vars are missing, so callers can surface a friendly error.
 */
export function getSupabaseClient(): SupabaseClient {
	if (!supabase) {
		throw new Error('Supabase client is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.');
	}
	return supabase;
}

export { supabase };
