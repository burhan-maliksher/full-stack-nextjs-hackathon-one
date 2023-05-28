import Image from 'next/image'
import { CardDemo } from './card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>hi</div>
      <div>
        <CardDemo/>
      </div>
    </main>
  )
}
