import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Home from "@/pages/home";


export default function Index() {
  return (
    <main
      className={`${inter.className}`}
    >
    <Home/>
    </main>
  )
}