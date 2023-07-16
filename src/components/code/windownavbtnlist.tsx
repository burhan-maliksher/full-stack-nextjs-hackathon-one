import NavBtnList from "../../components/code/navbtnList"
import Cart from "../../components/code/cart"
import Searchbar from "../../components/code/searchbar"
import Link from "next/link"

export default function WindowNavBtnList() {
    return (
      <div className="flex  xl:w-[75vw] lg:justify-between   lg:space-x-4 lg:text-sm xl:text-lg">
        <div className="flex xl:pl-8 xl:w-[52vw] xl:justify-between">
          {/* links */}
          <NavBtnList />
  
          {/*search bar  */}
          <div className="lg:ml-4 xl:ml-0 xl:pr-8">
            <Searchbar />
  
          </div>
  
        </div>
        {/* cart icon */}
        <Link href="/cartItems" className=" " >
          <Cart />
        </Link>
      </div>
    )
  }
  