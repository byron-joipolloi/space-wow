import Link from 'next/link'
import Image from 'next/image'

const imgLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export default function Home() {
  return (
    <div className="bg-[#fecee1] bg-[url('/bg-pink.jpg')] bg-center bg-no-repeat bg-cover">
      <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-12 text-center">
        <div className="flex items-center justify-center space-x-6">
          <span>
            <Image
              loader={imgLoader}
              src="/img-leeds.png"
              alt="Leeds 2020"
              width={93}
              height={33}
              className="max-w-full"
            />
          </span>
          <span>
            <Image
              loader={imgLoader}
              src="/img-wow.png"
              alt="Leeds 2020"
              width={93}
              height={33}
              className="max-w-full"
            />
          </span>
          <span>
            <Image
              loader={imgLoader}
              src="/img-space.png"
              alt="Leeds 2020"
              width={105}
              height={34}
              className="max-w-full"
            />
          </span>
        </div>

        <div className="space-y-6">
          <h1 className="text-[#a50c9d] font-serif text-6xl uppercase">
            <span className="block font-bold">One Way</span>
            <span className="block italic">or</span>
            <span className="block font-bold">Another</span>
          </h1>

          <p className="text-lg font-bold text-[#a50c9d] uppercase tracking-widest">An Interactive Experience</p>
        </div>

        <Link href="/intro" className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#a50c9d] border-5 border-[#7b0575] text-white shadow-sm transition">Start</Link>
      </div>
    </div>
  )
}
