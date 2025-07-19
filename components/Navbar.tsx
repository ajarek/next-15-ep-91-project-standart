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
        <div className='flex items-center space-x-4 max-sm:space-x-2'>
          {session==='admin@wp.pl' && (
            <Link
              href='/users'
              className='hover:text-blue-300 mr-4'
            >
              Users
            </Link>
          )}
          {session ? (
            <>
              <Link
                href='/contacts'
                className='hover:text-blue-300 mr-4'
              >
                Contacts
              </Link>
              <div className='w-8 h-8 flex items-center justify-center border-2 border-white rounded-full'>{session.split("")[0].toLocaleUpperCase()}</div>
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
