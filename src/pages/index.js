import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Home</h1>
      </div>
    </main>
  )
}
