import HeroSection from '@/components/home/herosection'
import PromotionSection from '@/components/home/promotionsection'

export default function Home() {
  return (
    <main className="flex mx-auto max-w-screen-xl space-y-20 mt-4 flex-col">
        <HeroSection/>
        <PromotionSection/>
    </main>
  )
}
