'use client'
import React from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useSupabase } from '@/app/(user)/supabase-provider'
const LoginDialogue = () => {
    const { supabase } = useSupabase()


    const signUp = async () => {
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

    const signIn = async () => {
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

    const signout =  async() => {
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
            <button onClick={signIn} className="">Sign In</button>
            <button onClick={signout} className="">Sign Out</button>
            <button onClick={signUp} className="">Sign up</button>
        </div>
    )
}

export default LoginDialogue