import Image from 'next/image'
import { CardDemo } from '../components/code/card'
import Nav  from '../components/code/nav'
// import Nav from '@/app/nav'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className='mt-0'>
        <Nav/>
      </div>
    </main>
  )
}
