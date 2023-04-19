import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

export default function Attitudes() {
  const [pageStep, setPageStep] = useState(1)

  if (pageStep === 1) {
    return (
      <div className="bg-[#b2d5d3]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 text-center">
          <p className="text-lg font-bold text-[#473f9b] uppercase tracking-widest">Scenario 1 / 4</p>

          <div>
            <h1 className="text-[#473f9b] font-serif text-6xl uppercase">
              <span className="block font-bold">Mind</span>
              <span className="block italic">his</span>
              <span className="block font-bold">attitude</span>
            </h1>
          </div>

          <button onClick={() => setPageStep(2)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Start</button>
        </div>
      </div>
    )
  } else if (pageStep === 2) {
    return (
      <div className="bg-[#b2d5d3]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <img src="/img-attitudes-1.png" alt="" width="300" className="block max-w-full h-auto mx-auto" />

          <div className="text-2xl text-[#473f9b] space-y-3">
            <p>You arrive at school and go straight to your form room.</p>

            <p>When you sit down, you can hear the boys at the back of the room watching a video and making misogynistic comments.</p>
          </div>

          <button onClick={() => setPageStep(3)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 3) {
    return (
      <div className="bg-[#454791]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div className="flex-1 flex items-center justify-center">
            <p className="text-[#c0dbd4] font-serif text-6xl uppercase text-center">
              <span className="block font-bold">What</span>
              <span className="block italic">do</span>
              <span className="block font-bold">you do?</span>
            </p>
          </div>

          <div>
            <button onClick={() => setPageStep(4)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#c0dbd4] border-5 border-[#231d57] text-[#454791] shadow-sm transition mb-4">Ignore them</button>
            <button onClick={() => setPageStep(7)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#c0dbd4] border-5 border-[#231d57] text-[#454791] shadow-sm transition">Ask them to stop</button>
          </div>
        </div>
      </div>
    )
  } else if (pageStep === 4) {
    return (
      <div className="bg-[#b2d5d3]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <img src="/img-attitudes-1.png" alt="" width="300" className="block max-w-full h-auto mx-auto" />

          <div className="text-2xl text-[#473f9b] space-y-3">
            <p>You ignore them. The boys continue to joke, getting louder. It makes you feel very uncomfortable.</p>
          </div>

          <button onClick={() => setPageStep(5)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 5) {
    return (
      <div className="bg-[#454791]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div className="flex-1 flex items-center justify-center">
            <p className="text-[#c0dbd4] font-serif text-6xl uppercase text-center">
              <span className="block font-bold">Want to</span>
              <span className="block italic">change</span>
              <span className="block font-bold">your mind?</span>
            </p>
          </div>

          <div>
            <button onClick={() => setPageStep(6)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#c0dbd4] border-5 border-[#231d57] text-[#454791] shadow-sm transition mb-4">Continue ignoring them</button>
            <button onClick={() => setPageStep(7)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#c0dbd4] border-5 border-[#231d57] text-[#454791] shadow-sm transition">Ask them to stop</button>
          </div>
        </div>
      </div>
    )
  } else if (pageStep === 6) {
    return (
      <div className="bg-[#b2d5d3]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <div className="text-2xl text-[#473f9b] space-y-3">
            <p>You continue to stay silent. No one calls them out, and they continue to make jokes all day. Other boys start to get involved too.</p>
          </div>

          <blockquote className="bg-white text-[#473f9b] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#6071be]">
            <p className="text-2xl mb-4"><span className="block font-serif text-6xl mb-4">92%</span> of girls stated that they received sexist name-calling ‘a lot’ or ‘sometimes’ between people their age*</p>

            <p className="leading-tight"><small className="text-base">*A 2021 Ofsted survey of 32 schools and colleges</small></p>
          </blockquote>

          <button onClick={() => setPageStep(8)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 7) {
    return (
      <div className="bg-[#b2d5d3]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <div className="text-2xl text-[#473f9b] space-y-3">
            <p>The boys laugh and call you frigid. It doesn’t stop them. After all, the guy they’re watching makes the same jokes and has millions of fans.</p>
          </div>

          <blockquote className="bg-white text-[#473f9b] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#6071be]">
            <p className="text-2xl mb-4"><span className="block font-serif text-6xl mb-4">92%</span> of girls stated that they received sexist name-calling ‘a lot’ or ‘sometimes’ between people their age*</p>

            <p className="leading-tight"><small className="text-base">*A 2021 Ofsted survey of 32 schools and colleges</small></p>
          </blockquote>

          <button onClick={() => setPageStep(8)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 8) {
    return (
      <div className="bg-[#b2d5d3]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <p className="text-[#473f9b] font-serif text-6xl uppercase text-center">
            <span className="block italic">But,</span>
            <span className="block font-bold">there is good news</span>
          </p>

          <div className="text-2xl text-[#473f9b] space-y-3">
            <p>In 2012, British feminst writer Laura Bates founded The Everyday Sexism project. The site documents examples of sexism from around the world. Entries may be submitted directly to the site, or by email or tweet. The accounts of abuse are collated by a small group of volunteers. The launch of this website is considered to be the beginning of fourth-wave feminism.</p>
          </div>

          <Link href="/menu" className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Finish</Link>
        </div>
      </div>
    )
  }
}
