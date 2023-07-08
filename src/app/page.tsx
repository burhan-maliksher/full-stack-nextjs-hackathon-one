import About from '@/components/home/about'
import HeroSection from '@/components/home/herosection'
import NewsLetter from '@/components/home/newsletter'
import ProductSection from '@/components/home/productsection'
import PromotionSection from '@/components/home/promotionsection'

export default function Home() {
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
