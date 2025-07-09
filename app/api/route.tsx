import { NextResponse } from "next/server"

export const GET = ()=>{
  return NextResponse.json({
  id: "a98d1377-2270-45fd-8e25-cde720c50bce",
  name: "John Smith",
  age: 65,
  is_active: true,
  address: {
    street: "123 Main St",
    city: "Londyn",
    zip_code: "12345"
  },
  hobbies: [
    "reading",
    "hiking",
    "coding"
  ],
  null_value: null,
  date_created: "2023-07-24T12:56:15.609Z"
})

 
}