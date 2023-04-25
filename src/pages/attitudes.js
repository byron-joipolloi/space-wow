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
  incrementScorel,
  updateLocalStorage,
}) {
  const router = useRouter()

  const handleClick = (pageStep) => {
    const newProgress = {
      ...progress,
      attitudes: {
        ...progress.attitudes,
        step: pageStep
      }
    }
    setProgress(newProgress)
    updateLocalStorage(newProgress)
    window.scrollTo(0, 0)
  }

  const handleFinish = () => {
    const newScore = progress.score + 1
    const newFinished = true
    const newProgress = {
      ...progress,
      score: newScore,
      attitudes: {
        ...progress.attitudes,
        finished: newFinished,
      }
    }
    setProgress(newProgress)
    updateLocalStorage(newProgress)

    if (newFinished) {
      router.push({
        pathname: '/finish',
      })
    }
  }

  if (progress.attitudes.step === 1) {
    return (
      <div className="bg-[url('/bg-green.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 text-center">
          <p className="text-lg font-bold text-[#473f9b] uppercase tracking-widest">Scenario {progress.score + 1} / 4</p>

          <div>
            <h1 className="text-[#473f9b] font-serif text-6xl uppercase">
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
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <Image
            loader={imgLoader}
            src="/img-attitudes.png"
            alt="attitudes illustration"
            width={300}
            height={259}
            className="block max-w-full h-auto mx-auto"
          />

          <div className="text-2xl text-[#473f9b] space-y-3" dangerouslySetInnerHTML={{ __html: attitudes[1].text }}></div>

          <button onClick={() => handleClick(3)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (progress.attitudes.step === 3) {
    return (
      <div className="bg-[#454791] bg-[url('/bg-dark-blue.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div className="flex-1 flex items-center justify-center">
            <p className="text-[#c0dbd4] font-serif text-6xl uppercase text-center">
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
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <Image
            loader={imgLoader}
            src="/img-attitudes.png"
            alt="attitudes illustration"
            width={327}
            height={300}
            className="block max-w-full h-auto mx-auto"
          />

          <div className="text-2xl text-[#473f9b] space-y-3" dangerouslySetInnerHTML={{ __html: attitudes[3].text }}></div>

          <button onClick={() => handleClick(5)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (progress.attitudes.step === 5) {
    return (
      <div className="bg-[#454791] bg-[url('/bg-dark-blue.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div className="flex-1 flex items-center justify-center">
            <p className="text-[#c0dbd4] font-serif text-6xl uppercase text-center">
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
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <div className="text-2xl text-[#473f9b] space-y-3" dangerouslySetInnerHTML={{ __html: attitudes[5].text1 }}></div>

          <blockquote className="quote bg-white text-[#473f9b] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#6071be]" dangerouslySetInnerHTML={{ __html: attitudes[5].quote }}></blockquote>

          <button onClick={() => handleClick(8)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (progress.attitudes.step === 7) {
    return (
      <div className="bg-[#b2d5d3] bg-[url('/bg-green.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <div className="text-2xl text-[#473f9b] space-y-3" dangerouslySetInnerHTML={{ __html: attitudes[5].text2 }}></div>

          <blockquote className="quote bg-white text-[#473f9b] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#6071be]" dangerouslySetInnerHTML={{ __html: attitudes[5].quote }}></blockquote>

          <button onClick={() => handleClick(8)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (progress.attitudes.step === 8) {
    return (
      <div className="bg-[#b2d5d3] bg-[url('/bg-green.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <p className="end text-[#473f9b] font-serif text-6xl uppercase text-center mb-10" dangerouslySetInnerHTML={{ __html: attitudes[6].title }}></p>

          <div className="scrollbar-thin scrollbar-thumb-[#473f9b] scrollbar-track-white scrollbar-thumb-rounded scrollbar-track-rounded h-[16rem] overflow-y-scroll pr-6">
            <div className="text-2xl text-[#473f9b] space-y-3" dangerouslySetInnerHTML={{ __html: attitudes[6].text }}></div>
          </div>

          <button onClick={() => handleFinish()} className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Finish</button>
        </div>
      </div>
    )
  }
}
