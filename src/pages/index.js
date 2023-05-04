import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import data from '../data.json'
import Reset from '../components/Reset'
import { useRouter } from 'next/router'
import Html5QrcodePlugin from '../components/Html5QrcodePlugin.js'

const imgLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const home = data.home
const intro = data.intro

export default function Home({
  progress,
  setProgress,
  qrCode,
  setQrCode,
  updateLocalStorage,
}) {
  const router = useRouter()
  
  const handleStart = (qr) => {
    if (progress.firstTime) {
      router.push({
        pathname: '/intro',
      })
    } else if (qr.page) {
      router.push({
        pathname: `/${qr.page}`,
      })
    } else {
      router.push({
        pathname: '/menu',
      })
    }
  }

  useEffect(() => {
    
  })

  const onNewScanResult = (decodedText, decodedResult) => {
    console.log(decodedText, decodedResult)
  };

  return (
    <div className="bg-[#fecee1] bg-[url('/bg-pink.png')] bg-center bg-no-repeat bg-cover">
      <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 text-center space-y-12">
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

        <div className="space-y-6 slide-up-1">
          <h1 className="text-[#a50c9d] font-serif text-6xl uppercase">
            <span className="block font-bold">{home.title[0]}</span>
            <span className="block italic">{home.title[1]}</span>
            <span className="block font-bold">{home.title[2]}</span>
          </h1>

          <p className="text-lg font-bold text-[#a50c9d] uppercase tracking-widest">An Interactive Experience</p>
        </div>

        <button onClick={() => handleStart(qrCode)} className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#a50c9d] border-5 border-[#7b0575] text-white shadow-sm transition">Start</button>
        
        {/*<Html5QrcodePlugin
          fps={10}
          qrbox={375}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />*/}

      </div>

      <Reset
        setProgress={setProgress}
        updateLocalStorage={updateLocalStorage}
        setQrCode={setQrCode}
      />
    </div>
  )
}
