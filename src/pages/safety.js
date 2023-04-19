import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

export default function Attitudes() {
  const [pageStep, setPageStep] = useState(1)

  if (pageStep === 1) {
    return (
      <div className="bg-[#FFF6F5]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 text-center">
          <p className="text-lg font-bold text-[#DA1B64] uppercase tracking-widest mb-12">Scenario 2 / 4</p>

          <div>
            <h1 className="text-[#DA1B64] font-serif text-6xl mb-6 uppercase">
              <span className="block font-bold">Do we</span>
              <span className="block italic">feel</span>
              <span className="block font-bold">safe?</span>
            </h1>
          </div>

          <button onClick={() => setPageStep(2)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#DA1B64] border-5 border-[#96013B] text-white shadow-sm transition">Start</button>
        </div>
      </div>
    )
  } else if (pageStep === 2) {
    return (
      <div className="bg-[#FFF6F5]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <img src="/img-safety-1.png" alt="" width="300" className="block max-w-full h-auto mx-auto mb-6" />

          <div>
            <p className="text-xl text-[#DA1B64] mb-6">On your walk home from school, a group of men in a car start driving slowly next to you, shouting inappropriate comments.</p>
          </div>

          <button onClick={() => setPageStep(3)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#DA1B64] border-5 border-[#96013B] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 3) {
    return (
      <div className="bg-[#DA1B64]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div className="flex-1 flex items-center justify-center">
            <p className="text-white font-serif text-6xl mb-6 uppercase text-center">
              <span className="font-bold">What </span>
              <span className="italic">do</span>
              <span className="block font-bold">you do?</span>
            </p>
          </div>

          <div>
            <button onClick={() => setPageStep(4)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-white border-5 border-[#96013B] text-[#DA1B64] shadow-sm transition mb-4">Ignore them</button>
            <button onClick={() => setPageStep(7)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-white border-5 border-[#96013B] text-[#DA1B64] shadow-sm transition">Shout back at them</button>
          </div>
        </div>
      </div>
    )
  } else if (pageStep === 4) {
    return (
      <div className="bg-[#FFF6F5]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <img src="/img-safety-1.png" alt="" width="300" className="block max-w-full h-auto mx-auto mb-6" />

          <div>
            <p className="text-xl text-[#DA1B64] mb-4">You ignore them. The car continues to follow you. Ignoring them only seems to make them harass you more and more.</p>
          </div>

          <button onClick={() => setPageStep(5)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#DA1B64] border-5 border-[#96013B] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 5) {
    return (
      <div className="bg-[#DA1B64]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div className="flex-1 flex items-center justify-center">
            <p className="text-white font-serif text-6xl mb-6 uppercase text-center">
              <span className="block font-bold">Want to</span>
              <span className="block italic">change</span>
              <span className="block font-bold">your mind?</span>
            </p>
          </div>

          <div>
            <button onClick={() => setPageStep(6)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-white border-5 border-[#96013B] text-[#DA1B64] shadow-sm transition mb-4">Ignore them</button>
            <button onClick={() => setPageStep(7)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-white border-5 border-[#96013B] text-[#DA1B64] shadow-sm transition">Shout back at them</button>
          </div>
        </div>
      </div>
    )
  } else if (pageStep === 6) {
    return (
      <div className="bg-[#FFF6F5]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div>
            <p className="text-xl text-[#DA1B64] mb-4">You ignore them and the men continue to follow you until you find a shop and run inside.</p>

            <p className="text-xl text-[#DA1B64]">They all laugh when I do.</p>
          </div>

          <blockquote className="bg-white text-[#DA1B64] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#DA1B64B3]">
            <p className="text-xl mb-4"><span className="block font-serif text-6xl mb-4">35%</span> of females aged 14-21 have experienced unwanted sexual attention or harassment in a public place while wearing a school uniform*</p>

            <p className="leading-tight"><small>*A Plan International UK survey</small></p>
          </blockquote>

          <button onClick={() => setPageStep(8)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#DA1B64] border-5 border-[#96013B] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 7) {
    return (
      <div className="bg-[#FFF6F5]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div>
            <p className="text-xl text-[#DA1B64] mb-4">You shout back at them. They become more aggressive and start threatening you, continuing to follow you until you find a shop and run inside.</p>

            <p className="text-xl text-[#DA1B64]">They all laugh when you do.</p>
          </div>

          <blockquote className="bg-white text-[#DA1B64] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#6071be]">
            <p className="text-xl mb-4"><span className="block font-serif text-6xl mb-4">35%</span> of females aged 14-21 have experienced unwanted sexual attention or harrassment in a public space while wearing a school uniform</p>

            <p className="leading-tight"><small>A Plan International UK survey</small></p>
          </blockquote>

          <button onClick={() => setPageStep(8)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#DA1B64] border-5 border-[#96013B] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 8) {
    return (
      <div className="bg-[#FFF6F5]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <p className="text-[#DA1B64] font-serif text-6xl mb-6 uppercase text-center">
            <span className="block italic">But,</span>
            <span className="block font-bold">there is good news</span>
          </p>

          <div>
            <p className="text-xl text-[#DA1B64] mb-4">Campaign groups have managed to get a bill that would make street harassment illegal debated in parliament. However, as of the 24th of March 2023, the Bill still places a burden on victims of public sexual harassment to prove that the perpetrator intended to cause distress or harm. It does not explicitly make public sexual harassment a crime. Public sexual harassment needs to be directly addressed by the Bill as it progresses.</p>
          </div>

          <Link href="/finish" className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#DA1B64] border-5 border-[#96013B] text-white shadow-sm transition">Finish</Link>
        </div>
      </div>
    )
  }
}
