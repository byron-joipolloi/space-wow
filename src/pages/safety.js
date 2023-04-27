import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import data from '../data.json'

const imgLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const safety = data.safety

export default function Safety({
  progress,
  setProgress,
  updateLocalStorage,
  getScore,
}) {
  const router = useRouter()
  let score = getScore(progress)

  const handleClick = (pageStep) => {
    const newProgress = {
      ...progress,
      safety: {
        ...progress.safety,
        step: pageStep
      }
    }
    setProgress(newProgress)
    updateLocalStorage('progress', newProgress)
    window.scrollTo(0, 0)
  }

  const handleFinish = (pageStep) => {
    const newCompleted = true
    const newProgress = {
      ...progress,
      safety: {
        ...progress.safety,
        step: pageStep,
        completed: newCompleted,
      }
    }
    setProgress(newProgress)
    updateLocalStorage('progress', newProgress)

    if (newCompleted) {
      router.push({
        pathname: '/finish',
      })
    }
  }

  if (progress.safety.step === 1) {
    return (
      <div className="bg-[#FFF6F5] bg-[url('/bg-light-pink.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 text-center">
          <p className="text-lg font-bold text-[#DA1B64] uppercase tracking-widest">Scenario {score} / 4</p>

          <div>
            <h1 className="text-[#DA1B64] font-serif text-6xl uppercase slide-up-1">
              <span className="block font-bold">{safety[0].title[0]}</span>
              <span className="block italic">{safety[0].title[1]}</span>
              <span className="block font-bold">{safety[0].title[2]}</span>
            </h1>
          </div>

          <button onClick={() => handleClick(2)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#DA1B64] border-5 border-[#96013B] text-white shadow-sm transition">Start</button>
        </div>
      </div>
    )
  } else if (progress.safety.step === 2) {
    return (
      <div className="bg-[#FFF6F5] bg-[url('/bg-light-pink.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <Image
            loader={imgLoader}
            src="/img-safety.png"
            alt="Safety illustration"
            width={375}
            height={333}
            className="block min-w-[375px] -ml-6 max-w-full h-auto mx-auto"
          />

          <div className="text-2xl text-[#DA1B64] space-y-3 slide-up-1" dangerouslySetInnerHTML={{ __html: safety[1].text }}></div>

          <button onClick={() => handleClick(3)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#DA1B64] border-5 border-[#96013B] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (progress.safety.step === 3) {
    return (
      <div className="bg-[#DA1B64] bg-[url('/bg-dark-pink.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div className="flex-1 flex items-center justify-center">
            <p className="text-white font-serif text-6xl uppercase text-center slide-up-1">
              <span className="font-bold">{safety[2].title[0]}&nbsp;</span>
              <span className="italic">{safety[2].title[1]}</span>
              <span className="block font-bold">{safety[2].title[2]}</span>
            </p>
          </div>

          <div>
            <button onClick={() => handleClick(4)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-white border-5 border-[#96013B] text-[#DA1B64] shadow-sm transition mb-4">{safety[2].button[0]}</button>
            <button onClick={() => handleClick(7)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-white border-5 border-[#96013B] text-[#DA1B64] shadow-sm transition">{safety[2].button[1]}</button>
          </div>
        </div>
      </div>
    )
  } else if (progress.safety.step === 4) {
    return (
      <div className="bg-[#FFF6F5] bg-[url('/bg-light-pink.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <Image
            loader={imgLoader}
            src="/img-safety.png"
            alt="Safety illustration"
            width={375}
            height={333}
            className="block min-w-[375px] -ml-6 max-w-full h-auto mx-auto"
          />

          <div className="text-2xl text-[#DA1B64] space-y-3 slide-up-1" dangerouslySetInnerHTML={{ __html: safety[3].text }}></div>

          <button onClick={() => handleClick(5)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#DA1B64] border-5 border-[#96013B] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (progress.safety.step === 5) {
    return (
      <div className="bg-[#DA1B64] bg-[url('/bg-dark-pink.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div className="flex-1 flex items-center justify-center">
            <p className="text-white font-serif text-6xl uppercase text-center slide-up-1">
              <span className="block font-bold">{safety[4].title[0]}</span>
              <span className="block italic">{safety[4].title[1]}</span>
              <span className="block font-bold">{safety[4].title[2]}</span>
            </p>
          </div>

          <div>
            <button onClick={() => handleClick(6)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-white border-5 border-[#96013B] text-[#DA1B64] shadow-sm transition mb-4">{safety[4].button[0]}</button>
            <button onClick={() => handleClick(7)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-white border-5 border-[#96013B] text-[#DA1B64] shadow-sm transition">{safety[4].button[1]}</button>
          </div>
        </div>
      </div>
    )
  } else if (progress.safety.step === 6) {
    return (
      <div className="bg-[#FFF6F5] bg-[url('/bg-light-pink.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <div className="text-2xl text-[#DA1B64] space-y-3 slide-up-1" dangerouslySetInnerHTML={{ __html: safety[5].text1 }}></div>

          <blockquote className="quote bg-white text-[#DA1B64] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#DA1B64B3] slide-up-2" dangerouslySetInnerHTML={{ __html: safety[5].quote }}></blockquote>

          <button onClick={() => handleClick(8)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#DA1B64] border-5 border-[#96013B] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (progress.safety.step === 7) {
    return (
      <div className="bg-[#FFF6F5] bg-[url('/bg-light-pink.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <div className="text-2xl text-[#DA1B64] space-y-3 slide-up-1" dangerouslySetInnerHTML={{ __html: safety[5].text2 }}></div>

          <blockquote className="quote bg-white text-[#DA1B64] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#DA1B64B3] slide-up-2" dangerouslySetInnerHTML={{ __html: safety[5].quote }}></blockquote>

          <button onClick={() => handleClick(8)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#DA1B64] border-5 border-[#96013B] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (progress.safety.step === 8) {
    return (
      <div className="bg-[#FFF6F5] bg-[url('/bg-light-pink.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <p className="end text-[#DA1B64] font-serif text-6xl uppercase text-center" dangerouslySetInnerHTML={{ __html: safety[6].title }}></p>

          <div className="scrollbar-thin scrollbar-thumb-[#DA1B64] scrollbar-track-white scrollbar-thumb-rounded scrollbar-track-rounded h-[16rem] overflow-y-scroll pr-6 slide-up-1">
            <div className="text-2xl text-[#DA1B64] space-y-3" dangerouslySetInnerHTML={{ __html: safety[6].text }}></div>
          </div>

          <button onClick={() => handleFinish(1)} className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#DA1B64] border-5 border-[#96013B] text-white shadow-sm transition">Finish</button>
        </div>
      </div>
    )
  }
}
