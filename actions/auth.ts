'use server'

import { setSessionCookie } from '@/lib/session'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

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
export const registerAction = async (formData: FormData): Promise<void> => {
  
  const id = formData.get('id')?.toString()
  const name = formData.get('name')?.toString()
  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()

  if (!id ||!name ||!email || !password) {
    redirect(
      `/register?error=${encodeURIComponent('Email and password are required')}`
    )
  }

  try {
    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id, name, email, password }),
    })

    if (!response.ok) {
      redirect(`/register?error=${encodeURIComponent('Registration failed')}`)
    }

    const user = await response.json()
    console.log('User registered:', user.email)
    await setSessionCookie('user', user.email)
    revalidatePath('/contact')
  } catch (err) {
    console.error('Unexpected error ', err)
    redirect(`/register?error=${encodeURIComponent('Unexpected error ')}`
    )
  }
  redirect('/contact')
}

export const deleteAction = async (formData: FormData): Promise<void> => {
  const id = formData.get('id')?.toString()

  if (!id) {
    redirect(`/contact?error=${encodeURIComponent('ID is required')}`)
  }

  try {
    const response = await fetch(`http://localhost:3001/users/${id}`, {
      method: 'DELETE',
    })
    revalidatePath('/contact')   
    if (!response.ok) {
      redirect(`/contact?error=${encodeURIComponent('Delete failed')}`)
    }

    console.log('User deleted:', id)
  } catch (err) {
    console.error('Unexpected error during delete:', err)
    redirect(`/contact?error=${encodeURIComponent('Unexpected error during delete')}`)
  }
  redirect('/contact')
}