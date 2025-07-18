"use server"
import { revalidatePath, revalidateTag } from "next/cache"
import { redirect } from "next/navigation"



export const addContactAction = async (formData: FormData): Promise<void> => {
  const email = formData.get('email')?.toString()
  const name = formData.get('name')?.toString()
  const id = formData.get('id')?.toString()
  const userId = formData.get('userId')?.toString()

  if (!email || !name || !id) {
    redirect(`/contacts?error=${encodeURIComponent('All fields are required')}`)
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
      redirect(`/contacts?error=${encodeURIComponent('Failed to add contact')}`)
    }
    revalidatePath('/users')
    revalidateTag('/users')  

    const contact = await response.json()
    console.log('Contacts added:', contact)
  } catch (err) {
    console.error('Unexpected error during add contacts:', err)
    redirect(`/contacts?error=${encodeURIComponent('Unexpected error during add contact')}`)
  }
   redirect('/contacts?success=true')
}




export const deleteContact = async (formData: FormData): Promise<void> => {
  const id = formData.get('id')?.toString()

  if (!id) {
    redirect(`/contacts?error=${encodeURIComponent('ID is required')}`)
  }

  try {
    const response = await fetch(`http://localhost:3001/contacts/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) {
      redirect(`/contacts?error=${encodeURIComponent('Delete failed')}`)
    }
    
    revalidatePath('/contacts')
    revalidateTag('/contacts')   
    console.log('Contact deleted:', id)
  } catch (err) {
    console.error('Unexpected error during delete:', err)
    redirect(`/contacts?error=${encodeURIComponent('Unexpected error during delete')}`)
  }
  redirect('/contacts')
}

export const updateContact = async (formData: FormData): Promise<void> => {
  const id = formData.get('id')?.toString()
  const email = formData.get('email')?.toString()
  const name = formData.get('name')?.toString()
  const userId = formData.get('userId')?.toString()

  if (!id || !email || !name) {
    redirect(`/contacts?error=${encodeURIComponent('All fields are required')}`)
  }

  try {
    const response = await fetch(`http://localhost:3001/contacts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id, email, name, userId }),
    })

    if (!response.ok) {
      redirect(`/contacts?error=${encodeURIComponent('Update failed')}`)
    }
    
    revalidatePath('/contacts')
    revalidateTag('/contacts')   
    console.log('Contact updated:', { id, email, name })
  } catch (err) {
    console.error('Unexpected error during update:', err)
    redirect(`/contacts?error=${encodeURIComponent('Unexpected error during update')}`)
  }
  redirect('/contacts?success=true')
}