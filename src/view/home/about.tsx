import AboutSec2 from '../../components/home/aboutsec2'
import AboutSec1 from '../../components/home/aboutsec1'

export default function About() {
  return (
    <section className='flex flex-col justify-center space-y-4 text-center  w-full '>
      <div className='flex xl:justify-end'>
        <h2 className=' font-bold w-[80vw] lg:w-full lg:px-40 lg:pt-32  xl:px-0 xl:w-[600px] 
                   text-left  leading-snug md:leading-normal text-4xl md:text-5xl '>
          Unique and Authentic Vintage Designer Jewellery
        </h2>
      </div>  
      <div className='grid grid-cols-1 xl:grid-cols-2 lg:gap-9 pt-4 '>
        <AboutSec1/>
        <AboutSec2/>
      </div>
      
  </section>
  )
}
