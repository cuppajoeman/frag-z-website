import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import { Database } from "./lib/database.types";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next(); // create empty response
    const pathname = req.nextUrl.pathname; // get pathname

    const supabase = createMiddlewareSupabaseClient<Database>({req, res}); // create supabase client

    const { data: session } = await supabase.auth.getSession(); // check if user is logged in

    // If user is logged in and trying to access login or register page, redirect to home page
    if (session && (pathname === "/login" || pathname === "/register")) {
        return NextResponse.redirect("/");
    }

    return res;
}

// Allows user session to be refreshed when navigating between pages