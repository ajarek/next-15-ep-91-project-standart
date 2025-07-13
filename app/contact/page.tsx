import { Metadata } from 'next'
import Link from 'next/link'
import { getSessionCookie } from '@/lib/session'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Contact',
}

const dataContacts = await fetch('http://localhost:3001/contacts', {
  next: { revalidate: 120 },
}) //{ cache: 'force-cache' }
const contacts = await dataContacts.json()

const ContactPage = async () => {
  const session = await getSessionCookie('user')
  if (!session) {
    redirect('/login')
  }
  return (
    <div className='min-h-[calc(100vh-128px)] relative'>
      <Link
        href='/contact/new'
        className='absolute right-5 top-5 bg-blue-500 px-4 py-2 rounded-lg'
      >
        Add Contact
      </Link>
      <h1>Main contacts</h1>
      {contacts.map((post: { id: number; name: string; email: string }) => (
        <div
          key={post.id}
          className='flex items-center gap-8'
        >
          <p>{post.id}</p>
          <p>{post.name}</p>
          <p>{post.email}</p>
        </div>
      ))}
    </div>
  )
}

export default ContactPage
