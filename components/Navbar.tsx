import ButtonLogout from '@/components/ButtonLogout'
import { deleteSessionCookie, getSessionCookie } from '@/lib/session'
import Link from 'next/link'

const Navbar = async () => {
  const session = await getSessionCookie('user')
  return (
    <nav className='bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 text-white shadow-sm'>
      <div className='container mx-auto p-4 flex justify-between items-center'>
        <Link
          href='/'
          className='text-xl font-bold '
        >
          Contact Manager
        </Link>
        <div className='flex items-center space-x-4 '>
          {session ? (
            <>
              <Link
                href='/contact'
                className='hover:text-blue-300 mr-8'
              >
                Contacts
              </Link>
              <ButtonLogout handleLogout={async () => {
                'use server'
                await deleteSessionCookie('user')
              }}/>
            </>
          ) : (
            <>
              <Link
                href='/login'
                className='hover:text-blue-300 mr-8'
              >
                Login
              </Link>
              <Link
                href='/register'
                className='hover:text-blue-300 mr-8'
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
