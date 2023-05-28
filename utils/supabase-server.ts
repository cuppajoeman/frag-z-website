import { Database } from "@/lib/database.types";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from 'next/headers'

export const createClient = () =>
    createServerComponentSupabaseClient<Database>({
        headers,
        cookies
    })

// USED FOR SERVER COMPONENTS