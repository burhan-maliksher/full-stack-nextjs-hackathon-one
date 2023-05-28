"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

// import React from 'react'

export default function Nav() {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="flex gap-6 bg-red-500 w-screen px-[10rem]">
            <NavigationMenuLink>
              <Image src={'/Logo.png'} alt={"logo"} width={150} height={60} className=""/>

            </NavigationMenuLink>
            <NavigationMenuLink>Female</NavigationMenuLink>
            <NavigationMenuLink>Male</NavigationMenuLink>
            <NavigationMenuLink>Kids</NavigationMenuLink>
            <NavigationMenuLink>All Products</NavigationMenuLink>
            {/* <NavigationMenuTrigger>Item One</NavigationMenuTrigger> */}
            {/* <NavigationMenuContent>
            </NavigationMenuContent> */}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    </div>
  )
}
