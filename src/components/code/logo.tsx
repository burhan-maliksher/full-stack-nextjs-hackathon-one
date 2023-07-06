import React from 'react'
import {
    NavigationMenuLink,
  } from "@/components/ui/navigation-menu"
import Image from 'next/image'  

export default function Logo() {
  return (
    <div>
        <NavigationMenuLink>
            <Image src={'/Logo.png'} alt={"logo"} width={150} height={0} className=""/>
        </NavigationMenuLink>
    </div>
  )
}
