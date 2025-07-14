import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='min-h-[calc(100vh-64px)] flex flex-col items-center justify-center gap-4'>
      <h2 className='text-2xl text-red-500 font-semibold'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='bg-green-500 text-white py-2 px-4 rounded-sm hover:bg-green-300 transition '>Return Home</Link>
    </div>
  )
}