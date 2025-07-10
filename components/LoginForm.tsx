import { loginAction } from '@/app/actions/auth'
import React from 'react'

const LoginForm = () => {
  return (
    <form action={loginAction} className='w-full max-w-2xl border-2 rounded-lg p-8 gap-4'>
      <div className='flex flex-col gap-4'>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          id='email'
          placeholder='Enter your email '
          required
          className='border border-gray-500 p-2 rounded-lg '
        />
      </div>
      <div className='flex flex-col gap-4 mt-4'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Enter your password '
          required
          className='border border-gray-500 p-2 rounded-lg '
        />
      </div>
      <div className='w-full flex justify-end'>
        <button
          type='submit'
          className='mt-4 bg-green-500 px-6 py-2 rounded-lg  hover:bg-green-500/75'
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default LoginForm
