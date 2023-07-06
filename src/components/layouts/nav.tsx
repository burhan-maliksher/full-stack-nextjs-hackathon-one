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
import MenuBtn from "../code/menubtn"
import NavBtn from "../code/navbtnList"
import NavBtnList from "../code/navbtnList"

export default function Nav() {
  return (
    <div className="flex justify-center items-center  w-screen">
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-16 text-lg">
        {/* logo */}
        <Link href="/" >
          <Logo/>
        </Link>
        
        <MenuBtn/>

        {/* links */}
        <NavBtnList/>
        
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
