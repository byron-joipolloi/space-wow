import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import data from '../data.json'

const imgLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const attitudes = data.attitudes

export default function Attitudes({
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
      attitudes: {
        ...progress.attitudes,
        step: pageStep,
        active: true,
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
      attitudes: {
        ...progress.attitudes,
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

  if (progress.attitudes.step === 1) {
    return (
      <div className="bg-[url('/bg-green.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-center min-h-screen max-w-sm w-full mx-auto px-6 py-10 text-center space-y-12">
          <p className="text-lg font-bold text-[#473f9b] uppercase tracking-widest">Scenario {score} / 4</p>

          <div>
            <h1 className="text-[#473f9b] font-serif text-6xl uppercase slide-up-1">
              <span className="block font-bold">{attitudes[0].title[0]}</span>
              <span className="block italic">{attitudes[0].title[1]}</span>
              <span className="block font-bold">{attitudes[0].title[2]}</span>
            </h1>
          </div>

          <button onClick={() => handleClick(2)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Start</button>
        </div>
      </div>
    )
  } else if (progress.attitudes.step === 2) {
    return (
      <div className="bg-[#b2d5d3] bg-[url('/bg-green.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-center min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-12">

          <Image
            loader={imgLoader}
            src="/img-attitudes.png"
            alt="attitudes illustration"
            width={375}
            height={324}
            className="block min-w-[375px] max-w-full -ml-6 h-auto mx-auto"
          />

          <div className="text-xl text-[#473f9b] space-y-3 slide-up-1" dangerouslySetInnerHTML={{ __html: attitudes[1].text }}></div>

          <button onClick={() => handleClick(3)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (progress.attitudes.step === 3) {
    return (
      <div className="bg-[#454791] bg-[url('/bg-dark-blue.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-center min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div className="flex items-center justify-center mb-12">
            <p className="text-[#c0dbd4] font-serif text-6xl uppercase text-center slide-up-1">
              <span className="block font-bold">{attitudes[2].title[0]}</span>
              <span className="block italic">{attitudes[2].title[1]}</span>
              <span className="block font-bold">{attitudes[2].title[2]}</span>
            </p>
          </div>

          <div>
            <button onClick={() => handleClick(4)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#c0dbd4] border-5 border-[#231d57] text-[#454791] shadow-sm transition mb-4">{attitudes[2].button[0]}</button>
            <button onClick={() => handleClick(7)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#c0dbd4] border-5 border-[#231d57] text-[#454791] shadow-sm transition">{attitudes[2].button[1]}</button>
          </div>
        </div>
      </div>
    )
  } else if (progress.attitudes.step === 4) {
    return (
      <div className="bg-[#b2d5d3] bg-[url('/bg-green.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-center min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-12">

          <Image
            loader={imgLoader}
            src="/img-attitudes.png"
            alt="attitudes illustration"
            width={375}
            height={324}
            className="block min-w-[375px] max-w-full -ml-6 h-auto mx-auto"
          />

          <div className="text-xl text-[#473f9b] space-y-3 slide-up-1" dangerouslySetInnerHTML={{ __html: attitudes[3].text }}></div>

          <button onClick={() => handleClick(5)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (progress.attitudes.step === 5) {
    return (
      <div className="bg-[#454791] bg-[url('/bg-dark-blue.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-center min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div className="flex items-center justify-center mb-12">
            <p className="text-[#c0dbd4] font-serif text-6xl uppercase text-center slide-up-1">
              <span className="block font-bold">{attitudes[4].title[0]}</span>
              <span className="block italic">{attitudes[4].title[1]}</span>
              <span className="block font-bold">{attitudes[4].title[2]}</span>
            </p>
          </div>

          <div>
            <button onClick={() => handleClick(6)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#c0dbd4] border-5 border-[#231d57] text-[#454791] shadow-sm transition mb-4">{attitudes[4].button[0]}</button>
            <button onClick={() => handleClick(7)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#c0dbd4] border-5 border-[#231d57] text-[#454791] shadow-sm transition">{attitudes[4].button[1]}</button>
          </div>
        </div>
      </div>
    )
  } else if (progress.attitudes.step === 6) {
    return (
      <div className="bg-[#b2d5d3] bg-[url('/bg-green.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-center min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-12">

          <div className="text-xl text-[#473f9b] space-y-3 slide-up-1" dangerouslySetInnerHTML={{ __html: attitudes[5].text1 }}></div>

          <blockquote className="quote bg-white text-[#473f9b] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#6071be] slide-up-2" dangerouslySetInnerHTML={{ __html: attitudes[5].quote }}></blockquote>

          <button onClick={() => handleClick(8)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (progress.attitudes.step === 7) {
    return (
      <div className="bg-[#b2d5d3] bg-[url('/bg-green.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-center min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-12">

          <div className="text-xl text-[#473f9b] space-y-3 slide-up-1" dangerouslySetInnerHTML={{ __html: attitudes[5].text2 }}></div>

          <blockquote className="quote bg-white text-[#473f9b] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#6071be] slide-up-2" dangerouslySetInnerHTML={{ __html: attitudes[5].quote }}></blockquote>

          <button onClick={() => handleClick(8)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (progress.attitudes.step === 8) {
    return (
      <div className="bg-[#b2d5d3] bg-[url('/bg-green.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-center min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-12">

          <p className="end text-[#473f9b] font-serif text-6xl uppercase text-center" dangerouslySetInnerHTML={{ __html: attitudes[6].title }}></p>

          <div className="text-xl text-[#473f9b] space-y-3" dangerouslySetInnerHTML={{ __html: attitudes[6].text }}></div>

          <button onClick={() => handleFinish(1)} className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Finish</button>
        </div>
      </div>
    )
  }
}
