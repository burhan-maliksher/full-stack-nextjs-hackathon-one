"use client"

import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import LinkBtn from "../code/link"
import Cart from "../code/cart"
import Searchbar from "../code/searchbar"
import Logo from "../code/logo"
import Link from "next/link"

export default function Nav() {
  return (
    <div className="flex justify-center items-center  w-screen">
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-16 text-lg">
        {/* logo */}
        <Link href="/" >
          <Logo/>
        </Link>
       
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
        
        {/*search bar  */}
          <Searchbar/>
        
        {/* cart icon */}
        <Link href="/cartItems" >
          <Cart/>
        </Link>
       
      </NavigationMenuList>
    </NavigationMenu>

    </div>
  )
}
