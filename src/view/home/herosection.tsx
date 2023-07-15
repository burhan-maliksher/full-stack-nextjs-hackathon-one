import HeroSec1 from '../../components/home/herosec1'
import HeroSec2 from '../../components/home/herosec2'

export default function HeroSection() {
  return (
    <div className='flex flex-row space-y-6 space-x-14 md:mt-4  lg:mx-0 justify-around'>
        <HeroSec1/>
        <HeroSec2/>
    </div>
  )
}
