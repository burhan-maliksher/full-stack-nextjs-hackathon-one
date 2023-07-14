"use client"

import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Cart from "../code/cart"
import Searchbar from "../code/searchbar"
import Logo from "../code/logo"
import Link from "next/link"
import MenuBtn from "../code/menubtn"
import NavBtnList from "../code/navbtnList"
import { useEffect, useState } from "react"

export default function Nav() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1024);
    
  };

  const windowResize=()=>{
    
    window.addEventListener('resize', handleResize);

  }


  useEffect(() => {
    
    handleResize();
    
  }, [windowResize()]);

  return (
    <div className="mt-2 " >
      <NavigationMenu>
        <NavigationMenuList className="flex justify-between px-6 lg:px-0 lg:pl-6     text-lg w-screen ">
        {/* logo */}
        <Link href="/" className="">
          <Logo/>
        </Link>
        <div className="lg:pt-4 lg:px-8">
          {isLargeScreen ? (
            <WindowNavBtnList/>
          ) : (
            <MenuBtn/>
          )}
        </div>
        
      </NavigationMenuList>
    </NavigationMenu>

    </div>
  )
}

function WindowNavBtnList() {
  return (
    <div className="flex  xl:w-[75vw] lg:justify-between   lg:space-x-4 lg:text-sm xl:text-lg">
        <div className="flex xl:pl-8 xl:w-[52vw] xl:justify-between">
          {/* links */}
          <NavBtnList/>
            
          {/*search bar  */}
          <div className="lg:ml-4 xl:ml-0 xl:pr-8">
           <Searchbar/>

          </div>
          
        </div>        
        {/* cart icon */}
        <Link href="/cartItems" className=" " >
          <Cart/>
        </Link>
    </div>
  )
}
