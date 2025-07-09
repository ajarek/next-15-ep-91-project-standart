import ButtonLogout from "@/components/ButtonLogout"
import Link from "next/link"



const Navbar=()=>{
  const session= true
  return(
    <nav className="bg-white shadow-sm">
      <div className='container mx-auto p-4 flex justify-between items-center'>
          <Link href='/' className='text-xl font-bold text-blue-600'>Contact Manager</Link>
          <div className='flex items-center space-x-4 text-black'>
            {session?(
              <>
              <Link href='/contact' className='hover:text-blue-600 mr-8'>Contacts</Link>
             <ButtonLogout/>
              </>
            ):(
              <>
              <Link href='/login' className='hover:text-blue-600 mr-8'>Login</Link>
              <Link href='/register' className='hover:text-blue-600 mr-8'>Register</Link>
              </>
            )
          }
          </div>
      </div>

    </nav>
  )
}

export default Navbar