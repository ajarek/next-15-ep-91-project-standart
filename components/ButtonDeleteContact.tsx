import { deleteContact } from '@/actions/contact'
import React from 'react'

const ButtonDeleteContact = ({ id }: { id: string }) => {
  return (
    <form action={deleteContact}  >
      <input type='hidden' name='id' value={id} />
      <button type='submit' className='p-1 border-2 border-red-500 rounded-full text-xl cursor-pointer'>
       ❌
      </button>
    </form>
  )
}

export default ButtonDeleteContact