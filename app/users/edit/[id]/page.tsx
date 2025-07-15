import EditFormUser from '@/components/EditFormUser'
import { GetUsers } from '@/lib/getUsers';
import React from 'react'

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
}

const EditUserId = async ({ params,}: {params: Promise<{ id: string }>} ) => {
  const { id } = await params;
  const users = await GetUsers()
  const user = users.find((user: User) => user.id == Number(id))
  if (!user) {
    return <div>User not found</div>
  }
  return (
    <div className='min-h-[calc(100vh-64px)] flex flex-col items-center justify-center gap-4'>
      <h2 className='text-2xl font-semibold'>Edit User</h2>
      <p>Update user information</p>
      <EditFormUser user={{ id: user.id, name: user.name, email: user.email, password: user.password }} />
    </div>
  )
}

export default EditUserId