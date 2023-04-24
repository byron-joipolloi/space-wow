import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import data from '../data.json'

const imgLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const health = data.health

export default function Health() {
  const [pageStep, setPageStep] = useState(1)

  const handleClick = (pageStep) => {
    setPageStep(pageStep)
    window.scrollTo(0, 0)
  }

  if (pageStep === 1) {
    return (
      <div className="bg-[#FFC33C] bg-[url('/bg-yellow.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 text-center">
          <p className="text-lg font-bold text-[#9C0D95] uppercase tracking-widest">Scenario 4 / 4</p>

          <div>
            <h1 className="text-[#9C0D95] font-serif text-6xl uppercase">
              <span className="block font-bold">{health[0].title[0]}</span>
              <span className="block italic">{health[0].title[1]}</span>
              <span className="block font-bold">{health[0].title[2]}</span>
            </h1>
          </div>

          <button onClick={() => handleClick(2)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#9C0D95] border-5 border-[#72056D] text-white shadow-sm transition">Start</button>
        </div>
      </div>
    )
  } else if (pageStep === 2) {
    return (
      <div className="bg-[#FFC33C] bg-[url('/bg-yellow.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <Image
            loader={imgLoader}
            src="/img-health.png"
            alt="Health illustration"
            width={327}
            height={311}
            className="block max-w-full h-auto mx-auto"
          />

          <div className="scrollbar-thin scrollbar-thumb-[#9C0D95] scrollbar-track-white scrollbar-thumb-rounded scrollbar-track-rounded h-[16rem] overflow-y-scroll pr-6 space-y-10">
            <div className="text-2xl text-[#9C0D95] space-y-3" dangerouslySetInnerHTML={{ __html: health[1].text }}></div>
          </div>

          <button onClick={() => handleClick(3)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#9C0D95] border-5 border-[#72056D] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 3) {
    return (
      <div className="bg-[#ac2a83] bg-[url('/bg-light-purple.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div className="flex-1 flex items-center justify-center">
            <p className="text-[#FFC33C] font-serif text-6xl uppercase text-center">
              <span className="font-bold">{health[2].title[0]}&nbsp;</span>
              <span className="italic">{health[2].title[1]}</span>
              <span className="block font-bold">{health[2].title[2]}</span>
            </p>
          </div>

          <div>
            <button onClick={() => handleClick(4)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#FFC33C] border-5 border-[#72056D] text-[#9C0D95] shadow-sm transition mb-4">{health[2].button[0]}</button>
            <button onClick={() => handleClick(7)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#FFC33C] border-5 border-[#72056D] text-[#9C0D95] shadow-sm transition">{health[2].button[1]}</button>
          </div>
        </div>
      </div>
    )
  } else if (pageStep === 4) {
    return (
      <div className="bg-[#FFC33C] bg-[url('/bg-yellow.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <Image
            loader={imgLoader}
            src="/img-health.png"
            alt="Health illustration"
            width={327}
            height={311}
            className="block max-w-full h-auto mx-auto"
          />

          <div className="text-2xl text-[#9C0D95] space-y-3" dangerouslySetInnerHTML={{ __html: health[3].text }}></div>

          <button onClick={() => handleClick(5)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#9C0D95] border-5 border-[#72056D] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 5) {
    return (
      <div className="bg-[#ac2a83] bg-[url('/bg-light-purple.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div className="flex-1 flex items-center justify-center">
            <p className="text-[#FFC33C] font-serif text-6xl uppercase text-center">
              <span className="block font-bold">{health[4].title[0]}</span>
              <span className="block italic">{health[4].title[1]}</span>
              <span className="block font-bold">{health[4].title[2]}</span>
            </p>
          </div>

          <div>
            <button onClick={() => handleClick(6)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#FFC33C] border-5 border-[#72056D] text-[#9C0D95] shadow-sm transition mb-4">{health[4].button[0]}</button>
            <button onClick={() => handleClick(7)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#FFC33C] border-5 border-[#72056D] text-[#9C0D95] shadow-sm transition">{health[4].button[1]}</button>
          </div>
        </div>
      </div>
    )
  } else if (pageStep === 6) {
    return (
      <div className="bg-[#FFC33C] bg-[url('/bg-yellow.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <div className="text-2xl text-[#9C0D95] space-y-3" dangerouslySetInnerHTML={{ __html: health[5].text1 }}></div>

          <blockquote className="quote bg-white text-[#9C0D95] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#9a3082]" dangerouslySetInnerHTML={{ __html: health[5].quote }}></blockquote>

          <button onClick={() => handleClick(8)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#9C0D95] border-5 border-[#72056D] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 7) {
    return (
      <div className="bg-[#FFC33C] bg-[url('/bg-yellow.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <div className="scrollbar-thin scrollbar-thumb-[#9C0D95] scrollbar-track-white scrollbar-thumb-rounded scrollbar-track-rounded h-[14rem] overflow-y-scroll pr-6 space-y-10">
            <div className="text-2xl text-[#9C0D95] space-y-3" dangerouslySetInnerHTML={{ __html: health[5].text2 }}></div>
          </div>

          <blockquote className="quote bg-white text-[#9C0D95] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#9a3082]" dangerouslySetInnerHTML={{ __html: health[5].quote }}>
          </blockquote>

          <button onClick={() => handleClick(8)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#9C0D95] border-5 border-[#72056D] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 8) {
    return (
      <div className="bg-[#FFC33C] bg-[url('/bg-yellow.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <p className="end text-[#9C0D95] font-serif text-6xl uppercase text-center" dangerouslySetInnerHTML={{ __html: health[6].title }}></p>

          <div className="scrollbar-thin scrollbar-thumb-[#9C0D95] scrollbar-track-white scrollbar-thumb-rounded scrollbar-track-rounded h-[18rem] overflow-y-scroll pr-6 space-y-10">
            <div className="text-2xl text-[#9C0D95] space-y-3" dangerouslySetInnerHTML={{ __html: health[6].text }}>
            </div>
          </div>

          <Link href="/finish" className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#9C0D95] border-5 border-[#72056D] text-white shadow-sm transition">Finish</Link>
        </div>
      </div>
    )
  }
}
