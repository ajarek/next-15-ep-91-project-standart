'use client'
import { useRouter } from 'next/navigation'

const ButtonLogout = ({handleLogout}:{handleLogout: () => Promise<void>}) => {
  if (typeof handleLogout !== 'function') {
    throw new Error('handleLogout must be a function');
  }
  const router = useRouter()
  return (
    <button
      className=' hover:bg-red-500  rounded-md px-4 py-2 transition-colors duration-300'
      onClick={async () => {
        await handleLogout()
        router.push('/login')
      }}
    >
      Logout
    </button>
  )
}
export default ButtonLogout
