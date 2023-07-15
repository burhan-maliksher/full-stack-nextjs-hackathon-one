import PromotionSec1 from '../../components/home/promotionsec1'
import PromotionSec2 from '../../components/home/promotionsec2'

export default function PromotionSection() {
  return (
    <section className='flex flex-col justify-center space-y-4 text-center w-full '>
      <h3 className='text-blue-600 font-bold '>PROMOTIONS</h3>
      <h2 className=' font-extrabold lg:text-5xl text-4xl '>Our Promotions Events</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-9 pt-4 '>
        <PromotionSec1/>
        <PromotionSec2/>
      </div>
      
    </section>
  )
}
