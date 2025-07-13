import { deleteAction } from '@/actions/auth'
import React from 'react'

const ButtonDeleteAction = ({ id }: { id: string }) => {
  return (
    <form action={deleteAction}  >
      <input type='hidden' name='id' value={id} />
      <button type='submit' className='bg-red-500 px-4 py-1 rounded-lg'>
        Delete
      </button>
    </form>
  )
}

export default ButtonDeleteAction