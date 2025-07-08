import { NextResponse } from "next/server"

export const GET = ()=>{
  return NextResponse.json({
    message:'Hello World , this is the API route',
    success:true
  })

 
}