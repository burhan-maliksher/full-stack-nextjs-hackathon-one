import Nav from '@/view/layouts/nav'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/view/layouts/footer'
import UpperFooter from '@/view/layouts/upperfooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` ${inter.className} overflow-x-hidden`} >
        <Nav/>
        <div className={`flex mx-auto max-w-screen-xl items-center flex-col  p-5 `}>
          {children}
          <UpperFooter/>
        </div>
        <Footer/>        
      </body>
    </html>
  )
}
