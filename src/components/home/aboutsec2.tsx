import Image from 'next/image'
import Link from 'next/link'

export default function AboutSec2() {
  return (
    <div className='flex flex-col md:grid md:grid-cols-2 mt-6 lg:h-full lg:mt-0 space-y-6 md:space-y-0 md:space-x-6 h-min  '>
        <Image src={'/feature.png'} alt={"logo"} width={150} height={0} className="w-full md:w-96"/>
        <div className='flex flex-col items-center pt-4 h-full w-auto '>
            <div className='flex flex-col m-auto '>
                <p className='m-auto mb-8 text-left pr-4'>
                    This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care.
                    The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
                </p>
                <Link href={'./allProducts'}>
                    <div className='bg-black text-white w-fit px-8 py-4'>
                        See All Products
                    </div>
                </Link>
            </div>
        </div>

    </div>
  )
}
