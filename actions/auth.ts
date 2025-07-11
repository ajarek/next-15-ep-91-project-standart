'use server'

import { setSessionCookie } from '@/lib/session'
import { redirect } from 'next/navigation'

export const loginAction = async (formData: FormData): Promise<void> => {
  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()

  if (!email || !password) {
    redirect(
      `/login?error=${encodeURIComponent('Email and password are required')}`
    )
  }

  try {
    const response = await fetch(
      `http://localhost:3001/users?email=${email}&password=${password}`
    )

    if (!response.ok) {
      redirect(`/login?error=${encodeURIComponent('Login failed')}`)
    }

    const users = await response.json()

    if (!Array.isArray(users) || users.length === 0) {
      redirect(`/login?error=${encodeURIComponent('Invalid credentials')}`)
    }

    const user = users[0]
    console.log('User logged in:', user.email)
    await setSessionCookie('user', user.email)
  } catch (err) {
    console.error('Unexpected error during login:', err)
    redirect(
      `/login?error=${encodeURIComponent('Unexpected error during login')}`
    )
  }
  redirect('/contact')
}
