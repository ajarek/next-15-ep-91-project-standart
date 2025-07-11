'use client'
import { deleteSessionCookie } from '@/lib/session'

const ButtonLogout = () => {
  const handleLogout = async () => {
    await deleteSessionCookie('user')
  }

  return (
    <button
      className='hover:text-blue-300'
      onClick={handleLogout}
    >
      Logout
    </button>
  )
}
export default ButtonLogout
