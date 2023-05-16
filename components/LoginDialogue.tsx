'use client'
import React from 'react'
import { Formik, Field, Form  } from 'formik'
import Link from 'next/link'
import Image from 'next/image'

import { useSupabase } from '@/components/supabase/supabase-provider'

import logo from "@/public/appIcons/fragz-logo.png";
import discord from "@/public/images/discordlogo.png";
import google from "@/public/images/googlelogo.png";
import github from "@/public/images/githublogo.png";

import { LoginFormValues } from '@/types'
import { validateEmail, validatePassword  } from '@/utils/form-helpers'

const LoginDialogue = () => {
    const { supabase } = useSupabase()

    return (
        <div className='flex flex-col gap-4 w-[370px] md:w-[400px] h-[600px] items-center justify-start'>
            {/* Logo header */}
            <span className="logo-header">
                <Image src={logo} alt='logo' className='object-cover' />
            </span>
            {/* Dialogue */}
            <section className="">
                {/* 3rd Party Login */}
                <div className="flex flex-col w-[200px] h-[100px] text-white font-windows text-center justify-between">
                    <h1 className="w-full text-2xl tracking-wider">Login With</h1>
                    <div className="flex flex-row items-end justify-between w-full h-[60px]">
                        <span className="auth-provider-button">
                            <Image src={google} alt='logo' width={100} height={100} className='object-cover' />
                        </span>
                        <span className="auth-provider-button">
                            <Image src={github} alt='logo' width={100} height={100} className='object-cover' />
                        </span>
                        <span className="auth-provider-button">
                            <Image src={discord} alt='logo' width={100} height={100} className='object-cover' />
                        </span>
                    </div>
                </div>
                <h1 className="w-full text-white font-windows text-center text-xl tracking-wider my-3">or</h1>
                {/* Email login */}
                <div className="flex flex-col w-full h-[300px]">
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={async (values: LoginFormValues) => {
                            const { data, error } = await supabase.auth.signInWithPassword({
                                email: values.email,
                                password: values.password,
                            })
                            if (error) {
                                console.log(error.message);
                            } else {
                                console.log("No errors");
                            }
                        }}
                    >
                        {({ errors, touched, isValidating}) => (
                            <Form className='form mb-3'>
                            <label className='form-label'>Email</label>
                            <Field className='form-field' type="email" name="email" validate={validateEmail} />
                            {errors.email && touched.email && <div className='form-error'>{errors.email}</div>}

                            <label className='form-label'>Password</label>
                            <Field className='form-field' type="password" name="password" validate={validatePassword} />
                            {errors.password && touched.password && <div className='form-error'>{errors.password}</div>}
                            <button type="submit" className='form-button'>Login</button>
                        </Form>
                        )}
                    </Formik>
                    <Link className='mx-auto text-white font-windows text-center' href={'/register'}>Sign Up</Link>
                </div>
            </section>
        </div>
    )
}

export default LoginDialogue