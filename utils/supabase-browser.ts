import { Database } from "@/lib/database.types";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

export const createClient = () => createBrowserSupabaseClient<Database>();

// USED FOR AUTHENTICATION IN CLIENT COMPONENTS