import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

export default function Attitudes() {
  const [pageStep, setPageStep] = useState(1)

  const handleClick = (pageStep) => {
    setPageStep(pageStep)
    window.scrollTo(0, 0)
  }

  if (pageStep === 1) {
    return (
      <div className="bg-[#FFF6F5]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 text-center">
          <p className="text-lg font-bold text-[#DA1B64] uppercase tracking-widest">Scenario 2 / 4</p>

          <div>
            <h1 className="text-[#DA1B64] font-serif text-6xl uppercase">
              <span className="block font-bold">Do we</span>
              <span className="block italic">feel</span>
              <span className="block font-bold">safe?</span>
            </h1>
          </div>

          <button onClick={() => handleClick(2)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#DA1B64] border-5 border-[#96013B] text-white shadow-sm transition">Start</button>
        </div>
      </div>
    )
  } else if (pageStep === 2) {
    return (
      <div className="bg-[#FFF6F5]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <img src="/img-safety-1.png" alt="" width="300" className="block max-w-full h-auto mx-auto" />

          <div className="text-2xl text-[#DA1B64] space-y-3">
            <p>On your walk home from school, a group of men in a car start driving slowly next to you, shouting inappropriate comments.</p>
          </div>

          <button onClick={() => handleClick(3)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#DA1B64] border-5 border-[#96013B] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 3) {
    return (
      <div className="bg-[#DA1B64]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div className="flex-1 flex items-center justify-center">
            <p className="text-white font-serif text-6xl uppercase text-center">
              <span className="font-bold">What </span>
              <span className="italic">do</span>
              <span className="block font-bold">you do?</span>
            </p>
          </div>

          <div>
            <button onClick={() => handleClick(4)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-white border-5 border-[#96013B] text-[#DA1B64] shadow-sm transition mb-4">Ignore them</button>
            <button onClick={() => handleClick(7)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-white border-5 border-[#96013B] text-[#DA1B64] shadow-sm transition">Shout back at them</button>
          </div>
        </div>
      </div>
    )
  } else if (pageStep === 4) {
    return (
      <div className="bg-[#FFF6F5]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <img src="/img-safety-1.png" alt="" width="300" className="block max-w-full h-auto mx-auto" />

          <div className="text-2xl text-[#DA1B64] space-y-3">
            <p>You ignore them. The car continues to follow you. Ignoring them only seems to make them harass you more and more.</p>
          </div>

          <button onClick={() => handleClick(5)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#DA1B64] border-5 border-[#96013B] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 5) {
    return (
      <div className="bg-[#DA1B64]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div className="flex-1 flex items-center justify-center">
            <p className="text-white font-serif text-6xl uppercase text-center">
              <span className="block font-bold">Want to</span>
              <span className="block italic">change</span>
              <span className="block font-bold">your mind?</span>
            </p>
          </div>

          <div>
            <button onClick={() => handleClick(6)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-white border-5 border-[#96013B] text-[#DA1B64] shadow-sm transition mb-4">Ignore them</button>
            <button onClick={() => handleClick(7)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-white border-5 border-[#96013B] text-[#DA1B64] shadow-sm transition">Shout back at them</button>
          </div>
        </div>
      </div>
    )
  } else if (pageStep === 6) {
    return (
      <div className="bg-[#FFF6F5]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <div className="text-2xl text-[#DA1B64] space-y-3">
            <p>You ignore them and the men continue to follow you until you find a shop and run inside.</p>

            <p>They all laugh when I do.</p>
          </div>

          <blockquote className="bg-white text-[#DA1B64] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#DA1B64B3]">
            <p className="text-2xl mb-4"><span className="block font-serif text-6xl mb-4">35%</span> of females aged 14-21 have experienced unwanted sexual attention or harassment in a public place while wearing a school uniform*</p>

            <p className="leading-tight"><small className="text-base">*A Plan International UK survey</small></p>
          </blockquote>

          <button onClick={() => handleClick(8)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#DA1B64] border-5 border-[#96013B] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 7) {
    return (
      <div className="bg-[#FFF6F5]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <div className="text-2xl text-[#DA1B64] space-y-3">
            <p>You shout back at them. They become more aggressive and start threatening you, continuing to follow you until you find a shop and run inside.</p>

            <p>They all laugh when you do.</p>
          </div>

          <blockquote className="bg-white text-[#DA1B64] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#DA1B64B3]">
            <p className="text-2xl mb-4"><span className="block font-serif text-6xl mb-4">35%</span> of females aged 14-21 have experienced unwanted sexual attention or harrassment in a public space while wearing a school uniform</p>

            <p className="leading-tight"><small className="text-base">A Plan International UK survey</small></p>
          </blockquote>

          <button onClick={() => handleClick(8)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#DA1B64] border-5 border-[#96013B] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 8) {
    return (
      <div className="bg-[#FFF6F5]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <p className="text-[#DA1B64] font-serif text-6xl uppercase text-center">
            <span className="block italic">But,</span>
            <span className="block font-bold">there is good news</span>
          </p>

          <div class="scrollbar-thin scrollbar-thumb-[#DA1B64] scrollbar-track-white scrollbar-thumb-rounded scrollbar-track-rounded h-[16rem] overflow-y-scroll pr-6 space-y-10">
            <div className="text-2xl text-[#DA1B64] space-y-3">
              <p>Campaign groups have managed to get a bill that would make street harassment illegal debated in parliament. However, as of the 24th of March 2023, the Bill still places a burden on victims of public sexual harassment to prove that the perpetrator intended to cause distress or harm. It does not explicitly make public sexual harassment a crime. Public sexual harassment needs to be directly addressed by the Bill as it progresses.</p>
            </div>
          </div>

          <Link href="/finish" className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#DA1B64] border-5 border-[#96013B] text-white shadow-sm transition">Finish</Link>
        </div>
      </div>
    )
  }
}
