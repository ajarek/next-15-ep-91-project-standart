import React from 'react'
 const data = await fetch('http://localhost:3000/api',{ next: { revalidate: 120 } }) //{ cache: 'force-cache' }
  const posts = await data.json()
type Posts={
  name:string
  age:number
  is_active:boolean
  address:{
    street:string
    city:string
    zip_code:string
  }
  hobbies:string[]
  null_value:null
  date_created:string
}
const Home = () => {
  return (
    <div className='min-h-screen '>
      <h1>
        {posts.name} 
        </h1>
        <p>{posts.age}</p>
        <p>{posts.address.street}</p>
        <p>{posts.address.city}</p>
        <p>{posts.address.zip_code}</p>
        <p>{posts.is_active?'Active':'Failed'}</p>
        {posts.hobbies.map((el:Posts["hobbies"],index:number)=><p key={index}>{el}</p>)}
        <p>{posts.data_created}</p>
    </div>
  )
}

export default Home