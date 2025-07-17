'use server'

import { setSessionCookie } from '@/lib/session'
import { redirect } from 'next/navigation'
import { revalidatePath, revalidateTag } from 'next/cache'

export const loginUser = async (formData: FormData): Promise<void> => {
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
  redirect('/contacts')
}
export const registerUser = async (formData: FormData): Promise<void> => {
  
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
   revalidatePath('/users')
    revalidateTag('/users')   
  } catch (err) {
    console.error('Unexpected error ', err)
    redirect(`/register?error=${encodeURIComponent('Unexpected error ')}`
    )
  }
  redirect('/contacts')
}


export const deleteUser = async (formData: FormData): Promise<void> => {
  const id = formData.get('id')?.toString()

  if (!id) {
    redirect(`/users?error=${encodeURIComponent('ID is required')}`)
  }

  try {
    const response = await fetch(`http://localhost:3001/users/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) {
      redirect(`/users?error=${encodeURIComponent('Delete failed')}`)
    }
    
    revalidatePath('/users')
    revalidateTag('/users')   
    console.log('User deleted:', id)
  } catch (err) {
    console.error('Unexpected error during delete:', err)
    redirect(`/users?error=${encodeURIComponent('Unexpected error during delete')}`)
  }
  redirect('/users')
}


export const updateUser = async (formData: FormData): Promise<void> => {
  const id = formData.get('id')?.toString()
  const name = formData.get('name')?.toString()
  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()

  if (!id || !name || !email || !password) {
    redirect(`/users?error=${encodeURIComponent('All fields are required')}`)
  }

  try {
    const response = await fetch(`http://localhost:3001/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({  name, email, password }),
    })

    
  
  if (!response.ok) {
      redirect(`/users?error=${encodeURIComponent('Update failed')}`)
    }

    const user = await response.json()
    console.log('User updated:', user.email)
    revalidatePath('/users')
    revalidateTag('/users')   
  }
  catch (err) {
    console.error('Unexpected error during update:', err)
    redirect(`/users?error=${encodeURIComponent('Unexpected error during update')}`)
  }
  redirect('/users')
}


 
