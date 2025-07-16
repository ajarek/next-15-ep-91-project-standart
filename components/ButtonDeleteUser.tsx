import { deleteUser } from '@/actions/contact'
import React from 'react'

const ButtonDeleteUser = ({ id }: { id: string }) => {
  return (
    <form action={deleteUser}  >
      <input type='hidden' name='id' value={id} />
      <button type='submit' className='bg-red-500 px-4 py-1 rounded-lg cursor-pointer'>
        Delete
      </button>
    </form>
  )
}

export default ButtonDeleteUser