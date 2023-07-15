import About from '@/view/home/about'
import HeroSection from '@/view/home/herosection'
import NewsLetter from '@/view/home/newsletter'
import ProductSection from '@/view/home/productsection'
import PromotionSection from '@/view/home/promotionsection'

export default async function Home() {

  return (
    <main className="flex mx-auto max-w-screen-xl space-y-20 mt-4 flex-col">
        <HeroSection/>
        <PromotionSection/>
        <ProductSection/>
        <About/>
        <NewsLetter/>
    </main>
  )
}
