import { Metadata } from 'next'
import Link from 'next/link'
import { getSessionCookie } from '@/lib/session'
import { redirect } from 'next/navigation'
import { GetContacts } from '@/lib/getContacts'
import ButtonDeleteContact from '@/components/ButtonDeleteContact'
export const metadata: Metadata = {
  title: 'Contacts',
}

const ContactPage = async () => {
  const session = await getSessionCookie('user')
  if (!session) {
    redirect('/login')
  }
  const contacts = await GetContacts()
  return (
    <div className='min-h-[calc(100vh-64px)] relative flex flex-col items-start justify-start gap-8 max-sm:px-2 px-4'>
      <Link
        href='/contacts/new'
        className='absolute right-5 top-0 bg-blue-500 px-4 py-2 rounded-lg'
      >
        Add Contact
      </Link>
      <h1 className='w-full text-2xl font-bold text-center'>{session=== 'admin@wp.pl'?'All contacts':'Main contacts'}</h1>
      <table className="min-w-full border border-gray-200 py-2 ">
  <thead>
    <tr className='border-b border-gray-200  h-14'>
      <th>No</th>
      <th>Name</th>
      <th>Email</th>
      <th className='max-sm:hidden'>Who created</th>
      <th>Action</th>
      
    </tr>
  </thead>
  <tbody className=''>
      {contacts
      .filter((post: { userId: string }) => (session=== 'admin@wp.pl'|| post.userId === session ))
      .map((post: { id: number; name: string; email: string; userId: string }, index:number) => (
        <tr
          key={post.id}
          className='border-b border-gray-200 hover:bg-green-300 text-center h-14  transition-colors duration-300'
        >
          <td>{index + 1}</td>
          <td>{post.name}</td>
          <td>{post.email}</td>
          <td className='capitalize max-sm:hidden'>{post.userId.split('@')[0]}</td>
          <td className='h-14 flex items-center gap-8 max-sm:gap-4 justify-center'>
            <Link href={`/contacts/edit/${post.id}`} className='p-1 border-2 border-blue-500 rounded-full text-xl'>
              🖊️
            </Link>
            <ButtonDeleteContact id={post.id.toString()} />
          </td>
         
        </tr>
      ))}
  </tbody>
</table>
    </div>
  )
}

export default ContactPage
