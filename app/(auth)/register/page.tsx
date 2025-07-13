import React from 'react'
import { Metadata } from 'next'
import RegisterForm from '@/components/RegisterForm'

export const metadata: Metadata = {
  title: 'Register Page',
}

const RegisterPage = ({ searchParams }: { searchParams: { error?: string } }) => {
  return <div className='min-h-[calc(100vh-128px)] flex flex-col items-center justify-center gap-4'>
    <h1 className='text-3xl font-semibold'>Register</h1>
    {searchParams.error && (
      <div className='text-red-500'>
        {decodeURIComponent(searchParams.error)}
      </div>
    )}
    <RegisterForm/>
  </div>
}

export default RegisterPage