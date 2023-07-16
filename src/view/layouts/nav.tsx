"use client"
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Logo from "../../components/code/logo"
import Link from "next/link"
import MenuBtn from "../../components/code/menubtn"
import WindowNavBtnList from "@/components/code/windownavbtnlist"


export default function Nav() {

  return (
    <div className="mt-2 " >
      <NavigationMenu>
        <NavigationMenuList className="flex justify-between px-6 lg:px-0 lg:pl-6     text-lg w-screen ">
          {/* logo */}
          <Link href="/" className="">
            <Logo />
          </Link>
          <div className="">
            <div className="hidden lg:block pt-4 px-8">
              <WindowNavBtnList />
            </div>
            <div className="lg:hidden block">
              <MenuBtn />
            </div>

          </div>

        </NavigationMenuList>
      </NavigationMenu>

    </div>
  )
}

