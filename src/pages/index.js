import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-[#f0b4d7] max-w-sm w-full mx-auto px-6 py-12 text-center">
      <div>
        <img src="/img-start-top.png" alt="" />
      </div>

      <div>
        <h1 className="text-[#a50c9d] font-serif text-6xl mb-6 uppercase">
          <span className="block font-bold">One Way</span>
          <span className="block italic">or</span>
          <span className="block font-bold">Another</span>
        </h1>

        <p className="text-lg font-bold text-[#a50c9d] uppercase tracking-widest mb-12">An Interactive Experience</p>
      </div>

      <Link href="/intro" className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#a50c9d] border-5 border-[#7b0575] text-white shadow-sm transition">Start</Link>
    </div>
  )
}
