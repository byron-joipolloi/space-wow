import Link from 'next/link'
import Image from 'next/image'
import data from '../data.json'
import Reset from '../components/Reset'

const imgLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const home = data.home

export default function Home({
  setProgress,
  setQrCode,
  updateLocalStorage,
}) {
  return (
    <div className="bg-[#fecee1] bg-[url('/bg-pink.png')] bg-center bg-no-repeat bg-cover">
      <div className="flex flex-col justify-between min-h-[100dvh] max-w-sm w-full mx-auto px-6 py-10 text-center space-y-12">
        <div className="flex flex-wrap items-center justify-center">
          <a href="https://leeds2023.co.uk/" className="mx-2 mb-4 mt-0">
            <Image
              loader={imgLoader}
              src="/img-leeds.png"
              alt="Leeds 2020"
              width={93}
              height={33}
              className="max-w-full"
            />
          </a>
          <a href="https://thewowfoundation.com/" className="mx-2 mb-4 mt-0">
            <Image
              loader={imgLoader}
              src="/img-wow.png"
              alt="Leeds 2020"
              width={93}
              height={33}
              className="max-w-full"
            />
          </a>
          <a href="https://www.thespace.org/" className="mx-2 mb-4 mt-0">
            <Image
              loader={imgLoader}
              src="/img-space.png"
              alt="Leeds 2020"
              width={105}
              height={34}
              className="max-w-full"
            />
          </a>
          <a href="https://www.artscouncil.org.uk/" className="mx-2 mb-4 mt-0">
            <Image
              loader={imgLoader}
              src="/img-lottery.png"
              alt="Lottery Funded"
              width={190}
              height={51}
              className="max-w-full"
            />
          </a>
        </div>

        <div className="space-y-6 slide-up-1">
          <h1 className="text-[#a50c9d] font-serif text-6xl uppercase">
            <span className="block font-bold">{home.title[0]}</span>
            <span className="block italic">{home.title[1]}</span>
            <span className="block font-bold">{home.title[2]}</span>
          </h1>

          <p className="text-lg font-bold text-[#a50c9d] uppercase tracking-widest">An Interactive Experience</p>
        </div>

        <Link href="/gender" className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#a50c9d] border-5 border-[#7b0575] text-white shadow-sm transition">Start</Link>

      </div>

      <Reset
        setProgress={setProgress}
        updateLocalStorage={updateLocalStorage}
        setQrCode={setQrCode}
      />
    </div>
  )
}
