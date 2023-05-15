import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next(); // create empty response
    const supabase = createMiddlewareSupabaseClient({req, res}); // create supabase client
    await supabase.auth.getSession(); // check if user is logged in
    return res;
}