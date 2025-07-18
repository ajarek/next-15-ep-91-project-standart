import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const data = await fetch('http://localhost:3000/api', {
  next: { revalidate: 120 },
}) //{ cache: 'force-cache' }
const posts = await data.json()
type Posts = {
  name: string
  age: number
  is_active: boolean
  address: {
    street: string
    city: string
    zip_code: string
  }
  hobbies: string[]
  null_value: null
  date_created: string
}
const Home = () => {
  return (
    <div className='min-h-[calc(100vh-64px)]  flex flex-col items-start justify-start'>
      <div className='w-full relative'>
        <Image
          src='/images/banner.jpg'
          alt='banner'
          width={1280}
          height={640}
        />
        <Link
          href='/contacts'
          className='absolute top-4 left-4 bg-green-600 hover:bg-green-500 text-white text-xl font-semibold px-8 py-4 rounded-md'
        >
          Start here
        </Link>

        <div className='absolute bottom-28 left-1/2 transform -translate-x-1/2 flex bg-amber-300  text-black text-center gap-2 p-4 shadow-2xl rounded-md border-2 border-gray-400'>
          <h1>{posts.name}</h1>
          
          <p>{posts.address.street}</p>
          <p>{posts.address.city}</p>
          <p>{posts.address.zip_code}</p>
          
          {posts.hobbies.map((el: Posts['hobbies'], index: number) => (
            <p key={index}>{el}</p>
          ))}
          <p>{posts.data_created}</p>
        </div>
      </div>
    </div>
  )
}

export default Home
