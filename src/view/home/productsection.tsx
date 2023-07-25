import ProductSlide from "@/components/home/productslide";

export default function ProductSection() {
  return (
    <section className='flex flex-col justify-center space-y-4 text-center w-full '>
      <h3 className='text-blue-600 font-bold '>PRODUCTS</h3>
      <h2 className=' font-extrabold lg:text-5xl text-4xl '>Check What We Have</h2>
      <div className='pt-8  w-full '>
          <ProductSlide/>
      </div>
    </section>
  )
}
