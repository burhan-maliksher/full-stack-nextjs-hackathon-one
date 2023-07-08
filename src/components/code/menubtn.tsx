import * as DialogPrimitive from "@radix-ui/react-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RiMenu3Fill } from "react-icons/ri";
import Link from "next/link";
import Cart from "./cart";
import Logo from "./logo";
import React from 'react'


export default function MenuBtn() {
  return (
      <Dialog>
        <DialogTrigger className="">
          {/* menu btn */}
          <RiMenu3Fill />
        </DialogTrigger>
        <DialogContent className=" w-screen h-screen ">
          <DialogHeader className="">
            <DialogTitle>
              {/* brand logo */}
              <Logo/>
            </DialogTitle>
            <DialogDescription className="flex flex-col  justify-center  space-y-2 h-full item items-center ">
              
              {/* cart icon */}
              <Link href="/cartItems" className="mb-4">                  
                  <DialogPrimitive.Close>
                    <Cart />
                  </DialogPrimitive.Close>
              </Link>
              
              {/* navigation btn list */}
              <Link href="/female" className="text-lg text-black ">
                <DialogPrimitive.Close>
                  Female 
                </DialogPrimitive.Close>       
              </Link>
              <Link href="/male" className="text-lg text-black ">
                <DialogPrimitive.Close>
                  Male 
                </DialogPrimitive.Close>       
              </Link>
              <Link href="/kids" className="text-lg text-black " >
                <DialogPrimitive.Close>
                  Kids 
                </DialogPrimitive.Close>       
              </Link>
              <Link href="/allProducts" className="text-lg text-black " >
                <DialogPrimitive.Close>
                  All Products 
                </DialogPrimitive.Close>       
              </Link>
              
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
  );
}
