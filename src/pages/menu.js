import Link from 'next/link'
import Reset from '../components/Reset'

export default function Menu() {
  return (
    <div className="bg-[#accff8] bg-[url('/bg-blue.png')] bg-center bg-no-repeat bg-cover">
      <div className="flex flex-col justify-center min-h-screen max-w-sm w-full mx-auto px-6 py-10 text-center space-y-12">
        <h1 className="text-[#374590] font-serif font-bold text-6xl uppercase slide-up-1">
          Choose a topic
        </h1>

        <div className="flex flex-col space-y-3">
          <Link href="/attitudes" className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#374590] border-5 border-[#10194a] text-white shadow-sm transition">Attitudes</Link>

          <Link href="/health" className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#374590] border-5 border-[#10194a] text-white shadow-sm transition">Health</Link>

          <Link href="/safety" className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#374590] border-5 border-[#10194a] text-white shadow-sm transition">Safety</Link>

          <Link href="/environment" className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#374590] border-5 border-[#10194a] text-white shadow-sm transition">Environment</Link>
        </div>
      </div>

      <Reset />
    </div>
  )
}
