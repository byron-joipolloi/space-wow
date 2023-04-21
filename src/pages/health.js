import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const imgLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export default function Attitudes() {
  const [pageStep, setPageStep] = useState(1)

  const handleClick = (pageStep) => {
    setPageStep(pageStep)
    window.scrollTo(0, 0)
  }

  if (pageStep === 1) {
    return (
      <div className="bg-[#FFC33C] bg-[url('/bg-yellow.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 text-center">
          <p className="text-lg font-bold text-[#9C0D95] uppercase tracking-widest">Scenario 4 / 4</p>

          <div>
            <h1 className="text-[#9C0D95] font-serif text-6xl uppercase">
              <span className="block font-bold">What is</span>
              <span className="block italic">healthy</span>
              <span className="block font-bold">living</span>
            </h1>
          </div>

          <button onClick={() => handleClick(2)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#9C0D95] border-5 border-[#72056D] text-white shadow-sm transition">Start</button>
        </div>
      </div>
    )
  } else if (pageStep === 2) {
    return (
      <div className="bg-[#FFC33C] bg-[url('/bg-yellow.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <Image
            loader={imgLoader}
            src="/img-health.png"
            alt="Health illustration"
            width={327}
            height={311}
            className="block max-w-full h-auto mx-auto"
          />

          <div class="scrollbar-thin scrollbar-thumb-[#9C0D95] scrollbar-track-white scrollbar-thumb-rounded scrollbar-track-rounded h-[16rem] overflow-y-scroll pr-6 space-y-10">
            <div className="text-2xl text-[#9C0D95] space-y-3">
              <p>In a lesson, you think you’ve got your period. You have to beg your teacher to go to the toilet after they initially say no as “It’s just been breaktime”. Eventually, they let you go. When you get to the bathroom you realise that you don’t have any pads or tampons. There is no one else in the bathroom for you to ask.</p>
            </div>
          </div>

          <button onClick={() => handleClick(3)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#9C0D95] border-5 border-[#72056D] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 3) {
    return (
      <div className="bg-[#ac2a83] bg-[url('/bg-light-purple.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div className="flex-1 flex items-center justify-center">
            <p className="text-[#FFC33C] font-serif text-6xl uppercase text-center">
              <span className="font-bold">What </span>
              <span className="italic">do</span>
              <span className="block font-bold">you do?</span>
            </p>
          </div>

          <div>
            <button onClick={() => handleClick(4)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#FFC33C] border-5 border-[#72056D] text-[#9C0D95] shadow-sm transition mb-4">Wait for someone</button>
            <button onClick={() => handleClick(7)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#FFC33C] border-5 border-[#72056D] text-[#9C0D95] shadow-sm transition">Use toilet paper</button>
          </div>
        </div>
      </div>
    )
  } else if (pageStep === 4) {
    return (
      <div className="bg-[#FFC33C] bg-[url('/bg-yellow.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <Image
            loader={imgLoader}
            src="/img-health.png"
            alt="Health illustration"
            width={327}
            height={311}
            className="block max-w-full h-auto mx-auto"
          />

          <div className="text-2xl text-[#9C0D95] space-y-3">
            <p>You wait, but after a few minutes, you worry you’ll get into trouble if you wait any longer.</p>
          </div>

          <button onClick={() => handleClick(5)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#9C0D95] border-5 border-[#72056D] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 5) {
    return (
      <div className="bg-[#ac2a83] bg-[url('/bg-light-purple.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10">

          <div className="flex-1 flex items-center justify-center">
            <p className="text-[#FFC33C] font-serif text-6xl uppercase text-center">
              <span className="block font-bold">Want to</span>
              <span className="block italic">change</span>
              <span className="block font-bold">your mind?</span>
            </p>
          </div>

          <div>
            <button onClick={() => handleClick(6)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#FFC33C] border-5 border-[#72056D] text-[#9C0D95] shadow-sm transition mb-4">Keep waiting</button>
            <button onClick={() => handleClick(7)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#FFC33C] border-5 border-[#72056D] text-[#9C0D95] shadow-sm transition">Use toilet paper</button>
          </div>
        </div>
      </div>
    )
  } else if (pageStep === 6) {
    return (
      <div className="bg-[#FFC33C] bg-[url('/bg-yellow.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <div className="text-2xl text-[#9C0D95] space-y-3">
            <p>Your teacher sends someone to find you.</p>

            <p>They have a tampon on them, but you get into trouble when you’re back at your lesson.</p>
          </div>

          <blockquote className="bg-white text-[#9C0D95] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#9a3082]">
            <p className="text-2xl mb-4"><span className="block font-serif text-6xl mb-4">35%</span> of girls aged 13-18 have taken time off school or college because they have their period*</p>

            <p className="leading-tight"><small className="text-base">*A study by PHS Group with 250 young people</small></p>
          </blockquote>

          <button onClick={() => handleClick(8)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#9C0D95] border-5 border-[#72056D] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 7) {
    return (
      <div className="bg-[#FFC33C] bg-[url('/bg-yellow.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <div class="scrollbar-thin scrollbar-thumb-[#9C0D95] scrollbar-track-white scrollbar-thumb-rounded scrollbar-track-rounded h-[14rem] overflow-y-scroll pr-6 space-y-10">
            <div className="text-2xl text-[#9C0D95] space-y-3">
              <p>You use toilet paper as a temporary solution and go back to your lesson. When you get there, you manage to ask the girl next to you for a tampon, but your teacher won’t let you go to the toilet twice in one lesson. You find it hard to concentrate all lesson as you’re worried about your period. You go to the loo in between your next lesson, but get into trouble for being late.</p>
            </div>
          </div>

          <blockquote className="bg-white text-[#9C0D95] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#9a3082]">
            <p className="text-2xl mb-4"><span className="block font-serif text-6xl mb-4">35%</span> of girls aged 13-18 have taken time off school or college because they have their period*</p>

            <p className="leading-tight"><small className="text-base">*A study by PHS Group with 250 young people</small></p>
          </blockquote>

          <button onClick={() => handleClick(8)} className="text-lg uppercase tracking-widest w-full p-2.5 bg-[#9C0D95] border-5 border-[#72056D] text-white shadow-sm transition">Next</button>
        </div>
      </div>
    )
  } else if (pageStep === 8) {
    return (
      <div className="bg-[#FFC33C] bg-[url('/bg-yellow.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-screen max-w-sm w-full mx-auto px-6 py-10 space-y-10">

          <p className="text-[#9C0D95] font-serif text-6xl uppercase text-center">
            <span className="block italic">But,</span>
            <span className="block font-bold">there is good news</span>
          </p>

          <div class="scrollbar-thin scrollbar-thumb-[#9C0D95] scrollbar-track-white scrollbar-thumb-rounded scrollbar-track-rounded h-[18rem] overflow-y-scroll pr-6 space-y-10">
            <div className="text-2xl text-[#9C0D95] space-y-3">
              <p>In January 2020, the UK government launched its Period Products Scheme, which allows all state-maintained schools and 16 to 19 education organisations in England to order free period products. Since the scheme’s launch, 94% of secondary schools and 90% post-16 organisations in England now provide free period products to pupils.</p>
            </div>
          </div>

          <Link href="/finish" className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#9C0D95] border-5 border-[#72056D] text-white shadow-sm transition">Finish</Link>
        </div>
      </div>
    )
  }
}
