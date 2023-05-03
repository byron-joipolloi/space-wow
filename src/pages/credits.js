import Link from 'next/link'
import Image from 'next/image'
import data from '../data.json'
import Reset from '../components/Reset'
import { useRouter } from 'next/router'

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
      <div className="flex flex-col justify-center min-h-screen max-w-sm w-full mx-auto px-6 py-12 text-center space-y-12">
        <div className="space-y-6 slide-up-1">
          <h1 className="text-[#a50c9d] font-serif text-6xl uppercase">
            <span className="block font-bold">Working</span>
            <span className="block italic">Together</span>
          </h1>

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
        </div>
      </div>

      <Reset
        setProgress={setProgress}
        updateLocalStorage={updateLocalStorage}
        setQrCode={setQrCode}
      />
    </div>
  )
}
