import React from 'react'
import { Metadata } from 'next'
import RegisterForm from '@/components/RegisterForm'

export const metadata: Metadata = {
  title: 'Register Page',
}

const RegisterPage = async ({ searchParams }: { searchParams: Promise<{ error?: string }> }) => {
  const error = await searchParams
  return <div className='min-h-[calc(100vh-128px)] flex flex-col items-center justify-center gap-4'>
    <h1 className='text-3xl font-semibold'>Register</h1>
    {error && (
      <div className='text-red-500'>
        {decodeURIComponent(error .error || '')}
      </div>
    )}
    <RegisterForm/>
  </div>
}

export default RegisterPage