"use server"
import { redirect } from "next/navigation"



export const addContactAction = async (formData: FormData): Promise<void> => {
  const email = formData.get('email')?.toString()
  const name = formData.get('name')?.toString()
  const id = formData.get('id')?.toString()
  const userId = formData.get('userId')?.toString()

  if (!email || !name || !id) {
    redirect(`/contact?error=${encodeURIComponent('All fields are required')}`)
  }

  try {
    const response = await fetch('http://localhost:3001/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name, id, userId }),
    })

    if (!response.ok) {
      redirect(`/contact?error=${encodeURIComponent('Failed to add contact')}`)
    }

    const contact = await response.json()
    console.log('Contact added:', contact)
  } catch (err) {
    console.error('Unexpected error during add contact:', err)
    redirect(`/contact?error=${encodeURIComponent('Unexpected error during add contact')}`)
  }
}