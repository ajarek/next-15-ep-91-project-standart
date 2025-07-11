import React from 'react'
import { Metadata } from 'next'
import LoginForm from '@/components/LoginForm'

export const metadata: Metadata = {
  title: 'Login Page',
}

const LoginPage = ({ searchParams }: { searchParams: { error?: string } }) => {
  return <div className='min-h-[calc(100vh-128px)] flex flex-col items-center justify-center gap-4'>
    <h1 className='text-3xl font-semibold'>Login</h1>
    {searchParams.error && (
      <div className='text-red-500'>
        {decodeURIComponent(searchParams.error)}
      </div>
    )}
    <LoginForm/>
  </div>
}

export default LoginPage
