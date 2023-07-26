"use client"
import ProductSlide from "@/components/home/productslide";

export default  async function ProductSection() {
  
  const data= await ProductSection()  
  return (
    <section className=' flex flex-col items-center  space-y-4 text-center w-full '>
      <h3 className='text-blue-600 font-bold '>PRODUCTS</h3>
      <h2 className=' font-extrabold lg:text-5xl text-4xl '>Check What We Have</h2>
      <div className='   w-[280px] 2xsm:w-[360px] xsm:w-[400px] md:w-[720px] lg:w-[980px] xl:w-full  '>
       {data}
       {/* <ProductSlide /> */}
      </div>
    </section>
  )
}
