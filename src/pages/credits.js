import Link from 'next/link'
import Image from 'next/image'
import data from '../data.json'
import Reset from '../components/Reset'
import { useRouter } from 'next/router'

const credits = data.credits

const imgLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export default function Credits({
  setProgress,
  updateLocalStorage,
  setQrCode,
}) {
  return (
    <div className="bg-[#fecee1] bg-[url('/bg-pink.png')] bg-center bg-no-repeat bg-cover">
      <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 text-center space-y-12 space-y-6">
        
        <h1 className="text-[#a50c9d] font-serif text-6xl uppercase">
          <span className="block font-bold">{credits.title[0]}</span>
          <span className="block italic">{credits.title[1]}</span>
        </h1>

        <div className="text-2xl text-[#a50c9d] text-left slide-up-1" dangerouslySetInnerHTML={{ __html: credits.text }}></div>

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

        <div className="flex items-center justify-center space-x-6">
          <span>
            <Image
              loader={imgLoader}
              src="/img-trinity.png"
              alt="Trinity"
              width={70}
              height={78}
              className="max-w-full"
            />
          </span>
          <span>
            <Image
              loader={imgLoader}
              src="/img-four.png"
              alt="Four Communications"
              width={88}
              height={32}
              className="max-w-full"
            />
          </span>
        </div>

        <Link href="/menu" className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#a50c9d] border-5 border-[#7b0575] text-white shadow-sm transition">Back to menu</Link>
      </div>

      <Reset
        setProgress={setProgress}
        updateLocalStorage={updateLocalStorage}
        setQrCode={setQrCode}
      />
    </div>
  )
}
