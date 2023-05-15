'use client'
import React from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useSupabase } from '@/components/supabase/supabase-provider'
const LoginDialogue = () => {
    const { supabase } = useSupabase()


    const handleSignUp = async () => {
        await supabase.auth.signUp({
            email: 'michochieng@gmail.com',
            password: 'k}5|tY9Orq',
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleLogin = async () => {
       await supabase.auth.signInWithPassword({
            email: 'michochieng@gmail.com',
            password: 'k}5|tY9Orq',
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleLogout =  async() => {
       await supabase.auth.signOut()
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='flex flex-col gap-4'>
            <button onClick={handleLogin} className="">Sign In</button>
            <button onClick={handleLogout} className="">Sign Out</button>
            <button onClick={handleSignUp} className="">Sign up</button>
        </div>
    )
}

export default LoginDialogue