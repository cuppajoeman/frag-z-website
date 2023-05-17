'use client';

import { useSupabase } from "./supabase-provider";
import { Session } from "@supabase/supabase-js";
import { Profile } from "@/types";

import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect } from "react";
import useSwr from "swr";

type AuthContext = {
    user: Profile | null | undefined;
    error: any;
    isLoading: boolean;
    mutate: any;
    signOut: () => Promise<void>
    signInWithGmail: () => Promise<void>;
    signInWithEmail: (email: string, password: string) => Promise<string | null> ;
    signInWithGithub: () => Promise<void> ;
    signInWithDiscord:  () => Promise<void> ;
    signUpWithEmail: (email: string, username: string, password: string) => Promise<string | null> ;
}

const Context = createContext<AuthContext>({
    user: null,
    error: null,
    isLoading: true,
    mutate: null,
    signOut: async () => {},
    signInWithGmail: async () => {},
    signInWithEmail: async (email: string, password: string) => null,
    signInWithDiscord: async () => {},
    signInWithGithub: async () => {},
    signUpWithEmail: async (email: string, username: string, password: string) => null
})

export default function SupabaseAuthProvider({
    serverSession,
    children,
}: {
    serverSession?: Session | null,
    children: React.ReactNode
}){
    const { supabase } = useSupabase();
    const router = useRouter();
    
    // User stuff

    const getUser = async () => {
        const { data: user, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id",serverSession?.user?.id)
            .single()
        if(error){
            console.log(error);
            return null
        }
        else {
            return user
        }
    }

    const {
        data: user,
        error,
        isLoading,
        mutate,
    } = useSwr(serverSession ? "profile-context": null, getUser)

    // signup stuff

    const signUpWithEmail = async (email: string, username: string, password: string) => {
        console.log("Signing up...");
        const { error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    username: username
                }
            },
        })
        if (error) {
            console.log(error.message);
        } else {
            console.log("Signed up with email!");
            router.push('/')
        }
        return null
    }

    const signOut = async () => {
        await supabase.auth.signOut();
        router.push('/')
    }

    // Login stuff

    const signInWithGithub = async () => {
        console.log("Signing in with Github...");
        await supabase.auth.signInWithOAuth({ provider: "github"})
    }

    const signInWithDiscord = async () => {
        console.log("Signing in with Discord...");
        await supabase.auth.signInWithOAuth({ provider: "discord"})
    }


    const signInWithGmail = async () => {
        console.log("Signing in with GMail...");
        await supabase.auth.signInWithOAuth({ provider: "google"})
    }

    const signInWithEmail = async (email: string, password: string) => {
        console.log("Signing in with Email...");
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        if (error) {
            console.log(error.message);
        } else {
            console.log("Signed in with email!");
            router.push('/');
        }
        return null
    }

    // Page refresh for server and client
    useEffect(() => {
        const { data: subscription } = supabase.auth.onAuthStateChange((event, session) => {
            if (session?.access_token !== serverSession?.access_token) {
                router.refresh()
            }
        });

        return () => {
            subscription.subscription.unsubscribe()
        };
    },[router, supabase, serverSession?.access_token]);

    const exposed: AuthContext = {
        user,
        error,
        isLoading,
        mutate,
        signOut,
        signInWithGithub,
        signInWithDiscord,
        signInWithGmail,
        signInWithEmail,
        signUpWithEmail
    };

    return (
        <Context.Provider value={exposed}> 
            {children} 
        </Context.Provider>
    )
}

export const useAuth = () => {
    let context =  useContext(Context)
    if (context === undefined) {
        throw new Error("useAuth must be used inside SupabaseAuthProvider");
    } else {
        return context;
    }
}