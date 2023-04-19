import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

export default function Attitudes() {
  const [pageStep, setPageStep] = useState(1)

  if (pageStep === 1) {
    return (
      <div className="bg-[#FF8FBA]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 text-center">
          <p className="text-lg font-bold text-[#6E0869] uppercase tracking-widest">Scenario 3 / 4</p>

          <div>
            <h1 className="text-[#6E0869] font-serif text-6xl uppercase">
              <span className="block font-bold">It's a</span>
              <span className="block italic">man's</span>
              <span className="block font-bold">world</span>
            </h1>
          </div>

          <button onClick={() => setPageStep(2)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#6E0869] border-5 border-[#390136] text-white shadow-sm transition">Start</button>
        </div>
      </div>
    )
  } else if (pageStep === 2) {
    return (
      <div className="bg-[#FF8FBA]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <img src="/img-environment-1.png" alt="" width="375" className="block max-w-full h-auto mx-auto" />

          <div className="text-2xl text-[#6E0869] space-y-3">
            <p>You’re walking home after school. It’s winter, so it’s already dark outside. The park you normally walk through doesn’t have any lighting or CCTV.</p>
          </div>

          <button onClick={() => setPageStep(3)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#6E0869] border-5 border-[#390136] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 3) {
    return (
      <div className="bg-[#8b1e6b]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div className="flex-1 flex items-center justify-center">
            <p className="text-[#FF8FBA] font-serif text-6xl uppercase text-center">
              <span className="font-bold">What </span>
              <span className="italic">do</span>
              <span className="block font-bold">you do?</span>
            </p>
          </div>

          <div>
            <button onClick={() => setPageStep(4)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#FF8FBA] border-5 border-[#390136] text-[#6E0869] shadow-sm transition mb-4">Walk through</button>
            <button onClick={() => setPageStep(7)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#FF8FBA] border-5 border-[#390136] text-[#6E0869] shadow-sm transition">Walk around</button>
          </div>
        </div>
      </div>
    )
  } else if (pageStep === 4) {
    return (
      <div className="bg-[#FF8FBA]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <img src="/img-environment-1.png" alt="" width="375" className="block max-w-full h-auto mx-auto" />

          <div className="text-2xl text-[#6E0869] space-y-3">
            <p>You begin to walk through the park, it’s dark and you can’t see much.</p>

            <p>You can see a group of people sat on a park bench up ahead.</p>
          </div>

          <button onClick={() => setPageStep(5)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#6E0869] border-5 border-[#390136] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 5) {
    return (
      <div className="bg-[#8b1e6b]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div className="flex-1 flex items-center justify-center">
            <p className="text-[#FF8FBA] font-serif text-6xl uppercase text-center">
              <span className="block font-bold">Want to</span>
              <span className="block italic">change</span>
              <span className="block font-bold">your mind?</span>
            </p>
          </div>

          <div>
            <button onClick={() => setPageStep(6)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#FF8FBA] border-5 border-[#390136] text-[#6E0869] shadow-sm transition mb-4">Ignore them</button>
            <button onClick={() => setPageStep(7)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#FF8FBA] border-5 border-[#390136] text-[#6E0869] shadow-sm transition">Shout back at them</button>
          </div>
        </div>
      </div>
    )
  } else if (pageStep === 6) {
    return (
      <div className="bg-[#FF8FBA]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <div className="text-2xl text-[#6E0869] space-y-3">
            <p>You continue to walk through the park, as you know if you go around it it will take longer.</p>

            <p>You clutch your keys between your fingers as you walk past the group of people. Luckily, they don’t bother you, but you are scared regardless. You don’t want to have to risk this every time you walk home in winter.</p>
          </div>

          <blockquote className="bg-white text-[#6E0869] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#9a3082]">
            <p className="text-2xl mb-4"><span className="block font-serif text-6xl mb-4">28%</span> of women steer clear of certain areas and 21% avoid being out at certain times to protect themselves. By contrast, only 14% of men avoid certain areas, and 9% avoid being out at certain times.*</p>

            <p className="leading-tight"><small className="text-base">*A 2018 YouGov survey</small></p>
          </blockquote>

          <button onClick={() => setPageStep(8)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#6E0869] border-5 border-[#390136] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 7) {
    return (
      <div className="bg-[#FF8FBA]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <div className="text-2xl text-[#6E0869] space-y-3">
            <p>You walk round the outside of the park. Whilst you made it back safely, it takes 20 minutes longer than if you had walked through it. You don't want to have to have this added journey time all winter.</p>
          </div>

          <blockquote className="bg-white text-[#6E0869] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#9a3082]">
            <p className="text-2xl mb-4"><span className="block font-serif text-6xl mb-4">28%</span> of women steer clear of certain areas and 21% avoid being out at certain times to protect themselves. By contrast, only 14% of men avoid certain areas, and 9% avoid being out at certain times.*</p>

            <p className="leading-tight"><small className="text-base">*A 2018 YouGov survey</small></p>
          </blockquote>

          <button onClick={() => setPageStep(8)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#6E0869] border-5 border-[#390136] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 8) {
    return (
      <div className="bg-[#FF8FBA]">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <p className="text-[#6E0869] font-serif text-6xl uppercase text-center">
            <span className="block italic">But,</span>
            <span className="block font-bold">there is good news</span>
          </p>

          <div className="text-2xl text-[#6E0869] space-y-3">
            <p>In India, a group of women founded an app that helps women stay safe by letting users rate streets and areas for safety criteria such as lighting, visibility, people density, gender diversity, security and transportation. The app has now been contracted by local authorities in Delhi to make recommendations on how to make metro stations, bus stops, tourist spots, public toilets and parks more woman-friendly.</p>
          </div>

          <Link href="/menu" className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#6E0869] border-5 border-[#390136] text-white shadow-sm transition">Finish</Link>
        </div>
      </div>
    )
  }
}
