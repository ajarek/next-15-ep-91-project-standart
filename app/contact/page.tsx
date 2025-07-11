import { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Contact',
}

const dataContacts = await fetch('http://localhost:3001/contacts', {
  next: { revalidate: 120 },
}) //{ cache: 'force-cache' }
const contacts = await dataContacts.json()

const dataUsers = await fetch('http://localhost:3001/users', {
  next: { revalidate: 120 },
}) //{ cache: 'force-cache' }
const users = await dataUsers.json()

const ContactPage = () => {
  return (
    <div className='min-h-[calc(100vh-128px)] relative'>
       <Link href='/contact/new' className='absolute right-5 top-5 bg-blue-500 px-4 py-2 rounded-lg'>Add Contact</Link>
       <Link href='/contact/new' className='absolute right-40 top-5 bg-green-500 px-4 py-2 rounded-lg'>Add Users</Link>
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
      <h1>Users</h1>
      {users.map((post: { id: number; name: string; email: string; password:string }) => (
        <div
          key={post.id}
          className='flex items-center gap-8'
        >
          <p>{post.id}</p>
          <p>{post.name}</p>
          <p>{post.email}</p>
          <p>{post.password}</p>
        </div>
      ))}
    </div>
  )
}

export default ContactPage
