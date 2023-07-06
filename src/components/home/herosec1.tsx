import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import {FiShoppingCart} from "react-icons/fi"
import Image from "next/image"
export default function HeroSec1() {
  return (
    <div className="flex flex-col space-y-6 justify-center  mt-4 lg:mt-20">
      <Badge variant="outline" className='text-indigo-700 bg-indigo-100   rounded-sm text-lg flex justify-center w-32 h-10'>Sale 70%</Badge>
        <h1 className='text-5xl xl:text-6xl font-bold pt-2 w-auto h-auto lg:w-[450px] xl:w-[600px]'>
            An Industrial Take on Streetwear
        </h1>
        <p className='font-light w-72 xl:w-96 pt-4'>
            Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
        </p>
        <div className='w-auto flex md:pt-6'>
            <Link href={"/allProducts"} className="bg-slate-800 w-60 h-auto text-xl font-bold p-4 text-white flex justify-center space-x-4">
                <FiShoppingCart className='pr-2 w-8 h-8'/>
                Start Shopping
            </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:pt-14 lg:w-[400p] gap-2">
            <Image src={"/Featured1.png"} alt='header' width={150} height={80} className='h-7 w-28 lg:h-9'/>
            <Image src={"/Featured2.png"} alt='header' width={150} height={80} className='h-7 w-28 lg:h-9'/>
            <Image src={"/Featured3.png"} alt='header' width={150} height={80} className='h-7 w-28 lg:h-9'/>
            <Image src={"/Featured4.png"} alt='header' width={150} height={80} className='h-7 w-28 lg:h-9'/>

        </div>
    </div>
  )
}
