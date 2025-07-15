import { Metadata } from 'next'
import Link from 'next/link'
import { getSessionCookie } from '@/lib/session'
import { redirect } from 'next/navigation'
import { GetContacts } from '@/lib/getContacts'

export const metadata: Metadata = {
  title: 'Contact',
}

const ContactPage = async () => {
  const session = await getSessionCookie('user')
  if (!session) {
    redirect('/login')
  }
  const contacts = await GetContacts()
  return (
    <div className='min-h-[calc(100vh-128px)] relative flex flex-col items-start justify-start gap-8 px-4'>
      <Link
        href='/contact/new'
        className='absolute right-5 top-5 bg-blue-500 px-4 py-2 rounded-lg'
      >
        Add Contact
      </Link>
      <h1 className='w-full text-2xl font-bold text-center'>Main contacts</h1>
      {contacts
      .filter((post: { userId: string }) => post.userId === session)
      .map((post: { id: number; name: string; email: string }, index:number) => (
        <div
          key={post.id}
          className='flex items-center gap-8'
        >
          <p>{index+1}</p>
          <p>{post.name}</p>
          <p>{post.email}</p>
        </div>
      ))}
    </div>
  )
}

export default ContactPage
