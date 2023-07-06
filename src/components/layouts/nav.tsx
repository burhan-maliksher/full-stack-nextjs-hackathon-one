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
  // const isPc=window.innerWidth >=1024;
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Add event listener to track window resize
    window.addEventListener('resize', handleResize);

    // Initial check for large screen on component mount
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="flex justify-center items-center  w-full">
      <NavigationMenu>
        <NavigationMenuList className="flex justify-between px-6 md:px-10 lg:px-0  text-lg w-screen lg:w-full ">
        {/* logo */}
        <Link href="/" className="">
          <Logo/>
        </Link>
        <div className="lg:pt-4 lg:pl-4">
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
    <div className="flex lg:space-x-4 xl:space-x-9 lg:text-sm xl:text-lg">
        {/* links */}
        <NavBtnList/>
  
        {/*search bar  */}
        <Searchbar/>
        
        {/* cart icon */}
        <Link href="/cartItems" >
          <Cart/>
        </Link>
    </div>
  )
}
