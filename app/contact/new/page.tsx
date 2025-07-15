import ContactForm from '@/components/ContactForm'
import { Metadata } from 'next'
import { getSessionCookie } from '@/lib/session'
export const metadata: Metadata = {
  title: 'New Contact',
}

const NewContactPage = async () => {
  const session = await getSessionCookie('user')
  return (
    <div className='min-h-[calc(100vh-128px)] relative flex flex-col items-center justify-center gap-4'>
      <h1 className='text-2xl font-bold mb-4'>New Contact</h1>
      <ContactForm userId={session ?? ''} />
    </div>
  )
}

export default NewContactPage
