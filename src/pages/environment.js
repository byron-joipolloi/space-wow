import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import data from '../data.json'

const imgLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const environment = data.environment

export default function Environment({
  progress,
  setProgress,
  incrementScorel,
  updateLocalStorage,
}) {
  const router = useRouter()

  const handleClick = (pageStep) => {
    const newProgress = {
      ...progress,
      environment: {
        ...progress.environment,
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
      environment: {
        ...progress.environment,
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

  if (progress.environment.step === 1) {
    return (
      <div className="bg-[#FF8FBA] bg-[url('/bg-medium-pink.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 text-center">
          <p className="text-lg font-bold text-[#6E0869] uppercase tracking-widest">Scenario {progress.score + 1} / 4</p>

          <div>
            <h1 className="text-[#6E0869] font-serif text-6xl uppercase">
              <span className="block font-bold">{environment[0].title[0]}</span>
              <span className="block italic">{environment[0].title[1]}</span>
              <span className="block font-bold">{environment[0].title[2]}</span>
            </h1>
          </div>

          <button onClick={() => handleClick(2)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#6E0869] border-5 border-[#390136] text-white shadow-sm transition">Start</button>
        </div>
      </div>
    )
  } else if (progress.environment.step === 2) {
    return (
      <div className="bg-[#FF8FBA] bg-[url('/bg-medium-pink.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <Image
            loader={imgLoader}
            src="/img-environment.png"
            alt="Environment illustration"
            width={327}
            height={294}
            className="block max-w-full h-auto mx-auto"
          />

          <div className="text-2xl text-[#6E0869] space-y-3" dangerouslySetInnerHTML={{ __html: environment[1].text }}></div>

          <button onClick={() => handleClick(3)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#6E0869] border-5 border-[#390136] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (progress.environment.step === 3) {
    return (
      <div className="bg-[#8b1e6b] bg-[url('/bg-purple.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div className="flex-1 flex items-center justify-center">
            <p className="text-[#FF8FBA] font-serif text-6xl uppercase text-center">
              <span className="font-bold">{environment[2].title[0]}&nbsp;</span>
              <span className="italic">{environment[2].title[1]}</span>
              <span className="block font-bold">{environment[2].title[2]}</span>
            </p>
          </div>

          <div>
            <button onClick={() => handleClick(4)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#FF8FBA] border-5 border-[#390136] text-[#6E0869] shadow-sm transition mb-4">{environment[2].button[0]}</button>
            <button onClick={() => handleClick(7)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#FF8FBA] border-5 border-[#390136] text-[#6E0869] shadow-sm transition">{environment[2].button[1]}</button>
          </div>
        </div>
      </div>
    )
  } else if (progress.environment.step === 4) {
    return (
      <div className="bg-[#FF8FBA] bg-[url('/bg-medium-pink.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <Image
            loader={imgLoader}
            src="/img-environment.png"
            alt="Environment illustration"
            width={327}
            height={294}
            className="block max-w-full h-auto mx-auto"
          />

          <div className="text-2xl text-[#6E0869] space-y-3" dangerouslySetInnerHTML={{ __html: environment[3].text }}></div>

          <button onClick={() => handleClick(5)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#6E0869] border-5 border-[#390136] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (progress.environment.step === 5) {
    return (
      <div className="bg-[#8b1e6b] bg-[url('/bg-purple.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div className="flex-1 flex items-center justify-center">
            <p className="text-[#FF8FBA] font-serif text-6xl uppercase text-center">
              <span className="block font-bold">{environment[4].title[0]}</span>
              <span className="block italic">{environment[4].title[1]}</span>
              <span className="block font-bold">{environment[4].title[2]}</span>
            </p>
          </div>

          <div>
            <button onClick={() => handleClick(6)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#FF8FBA] border-5 border-[#390136] text-[#6E0869] shadow-sm transition mb-4">{environment[4].button[0]}</button>
            <button onClick={() => handleClick(7)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#FF8FBA] border-5 border-[#390136] text-[#6E0869] shadow-sm transition">{environment[4].button[1]}</button>
          </div>
        </div>
      </div>
    )
  } else if (progress.environment.step === 6) {
    return (
      <div className="bg-[#FF8FBA] bg-[url('/bg-medium-pink.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <div className="text-2xl text-[#6E0869] space-y-3" dangerouslySetInnerHTML={{ __html: environment[5].text1 }}></div>

          <blockquote className="quote bg-white text-[#6E0869] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#9a3082]" dangerouslySetInnerHTML={{ __html: environment[5].quote }}></blockquote>

          <button onClick={() => handleClick(8)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#6E0869] border-5 border-[#390136] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (progress.environment.step === 7) {
    return (
      <div className="bg-[#FF8FBA] bg-[url('/bg-medium-pink.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <div className="text-2xl text-[#6E0869] space-y-3" dangerouslySetInnerHTML={{ __html: environment[5].text2 }}></div>

          <blockquote className="quote bg-white text-[#6E0869] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#9a3082]" dangerouslySetInnerHTML={{ __html: environment[5].quote }}></blockquote>

          <button onClick={() => handleClick(8)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#6E0869] border-5 border-[#390136] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (progress.environment.step === 8) {
    return (
      <div className="bg-[#FF8FBA] bg-[url('/bg-medium-pink.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <p className="end text-[#6E0869] font-serif text-6xl uppercase text-center" dangerouslySetInnerHTML={{ __html: environment[6].title }}></p>

          <div className="scrollbar-thin scrollbar-thumb-[#6E0869] scrollbar-track-white scrollbar-thumb-rounded scrollbar-track-rounded h-[306px] overflow-y-scroll pr-6 space-y-10">
            <div className="text-2xl text-[#6E0869] space-y-3" dangerouslySetInnerHTML={{ __html: environment[6].text }}></div>
          </div>

          <button onClick={() => handleFinish()} className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#6E0869] border-5 border-[#390136] text-white shadow-sm transition">Finish</button>
        </div>
      </div>
    )
  }
}
