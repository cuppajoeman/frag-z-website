'use client'
import React from 'react'
import { Formik, Field, Form } from 'formik'
import Image from 'next/image'
import { validateEmail, validatePassword, validateUsername  } from '@/utils/form-helpers'

import logo from "@/public/appIcons/fragz-logo.png";
import Link from 'next/link'

import { useAuth } from './supabase/supabase-auth-provider'

const SignUpDialogue = () => {
    const { signUpWithEmail } = useAuth();

    return (
        <div className='flex flex-col gap-4 w-[370px] md:w-[400px] h-[650px] min-h-fit items-center justify-start'>
            {/* Logo header */}
            <span className="logo-header">
                <Image src={logo} alt='logo' className='object-cover' />
            </span>
            {/* Dialogue */}
            <section className="">
                {/* Email login */}
                <div className="flex flex-col w-full h-[300px]">
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                            username: '',
                        }}
                        onSubmit={async (values) => {
                            try {
                                await signUpWithEmail(values.email, values.username, values.password);
                            } catch (error) {
                                console.log("Something went wrong signing up with email");
                                console.log(error);
                            }
                        }}
                    >
                        {({ errors, touched, isValidating}) => (
                            <Form className='form mb-3'>
                            <label className='form-label'>Username</label>
                            <Field className='form-field' type="username" name="username" validate={validateUsername}/>
                            {errors.username && touched.username && <div className='form-error'>{errors.username}</div>}

                            <label className='form-label'>Email</label>
                            <Field className='form-field' type="email" name="email" validate={validateEmail}/>
                            {errors.email && touched.email && <div className='form-error'>{errors.email}</div>}

                            <label className='form-label'>Password</label>
                            <Field className='form-field' type="password" name="password" validate={validatePassword}/>
                            {errors.password && touched.password && <div className='form-error'>{errors.password}</div>}
                            <button type="submit" className='form-button'>Sign Up</button>
                        </Form>
                        )}
                    </Formik>
                    <Link className='mx-auto text-white font-windows text-center' href={'/login'}>Login</Link>
                </div>
            </section>
        </div>
    )
}

export default SignUpDialogue