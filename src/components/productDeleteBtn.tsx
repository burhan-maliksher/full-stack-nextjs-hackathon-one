"use client"
import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'



export default function ProductDeleteBtn(props:{productId:string,userId:string|undefined}) {
    const {productId,userId} = props

    const handleDelete=async ()=>{
        try {
            const req =await fetch(`/api/cart?productId=${productId}&userId=${userId}`,{
                method:'Delete',
                headers:{
                    'Content-Type':'application/json',
                }
            })
        
        } catch (error) {
            
        }
    }

return (
    <>
      <button className='w-[2rem]' onClick={handleDelete}>
        <RiDeleteBin5Line className=' w-6 h-6'/>
      </button>
    </>
  )
}
