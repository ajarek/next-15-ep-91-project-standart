import ButtonDeleteUser from '@/components/ButtonDeleteUser'
import { GetUsers } from '@/lib/getUsers'
import { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Users',
}

const UsersPage = async () => {
  const users = await GetUsers()
  return (
    <div className='min-h-[calc(100vh-64px)] relative'>
      <h1 className='w-full text-center text-2xl font-semibold mb-4'>Users</h1>
      <table className='min-w-full border border-gray-200 py-2'>
        <thead>
          <tr className='border-b border-gray-200  h-14'>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className=''>
          {users.map(
            (
              post: {
                id: number
                name: string
                email: string
                password: string
              },
              index: number
            ) => (
              <tr
                key={post.id}
                className='border-b border-gray-200 hover:bg-green-600 text-center h-14  transition-colors duration-300'
              >
                <td>{index + 1}</td>
                <td>{post.name}</td>
                <td>{post.email}</td>
                <td>{post.password}</td>
                <td className='h-14 flex items-center gap-8 max-sm:gap-4 justify-center'>
                  <Link
                    href={`/users/edit/${post.id}`}
                    className='p-1 border-2 border-blue-500 rounded-full text-xl'
                  >
                    🖊️
                  </Link>
                  <ButtonDeleteUser id={post.id.toString()} />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default UsersPage
