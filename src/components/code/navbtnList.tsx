"use client"

import LinkBtn from "./link"
import Link from "next/link"

export default function NavBtnList() {
  return (
    <>
        {/* links */}
        <Link href="/female" >
          <LinkBtn name="Female"  />        
        </Link>
        <Link href="/male" >
          <LinkBtn name="Male" />
        </Link>
        <Link href="/kids" >
          <LinkBtn name="Kids" />
        </Link>
        <Link href="/allProducts" >
          <LinkBtn name="All Products" />
        </Link>         
        
      
    </>
  )
}
