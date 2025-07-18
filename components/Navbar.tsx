import ButtonLogout from '@/components/ButtonLogout'
import { deleteSessionCookie, getSessionCookie } from '@/lib/session'
import Link from 'next/link'

const Navbar = async () => {
  const session = await getSessionCookie('user')
  
  return (
    <nav className='bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 text-white shadow-sm'>
      <div className='h-16 max-w-7xl container mx-auto px-4  flex justify-between items-center'>
        <Link
          href='/'
          className='text-xl font-bold '
        >
          Contact Manager
        </Link>
        <div className='flex items-center space-x-4 '>
          {session==='admin@wp.pl' && (
            <Link
              href='/users'
              className='hover:text-blue-300 mr-8'
            >
              Users
            </Link>
          )}
          {session ? (
            <>
              <Link
                href='/contacts'
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
