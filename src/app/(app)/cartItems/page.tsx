import React from 'react'

export default async function CartItems() {
  // 
  const req =await fetch("/api/cart",{
    method:"GET",

  })
  
  const result= await req.json()
console.log(result);

  return (
    <div>
      cart
    </div>
  )
}
