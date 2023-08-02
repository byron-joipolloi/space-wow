import { useEffect } from 'react'
import { useRouter } from 'next/router'
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
      active: 'attitudes',
      attitudes: {
        ...progress.attitudes,
        step: pageStep,
      }
    }
    setProgress(newProgress)
    updateLocalStorage('progress', newProgress)
    console.log(progress)
    window.scrollTo(0, 0)
  }

  const handleAnswerClick = (questionLabel, responseText, pageStep) => {
    const gender = process.gender
    gtag('event', 'question_answered',
    {
       question: questionLabel,
       response: responseText,
       gender: gender
    });
    handleClick(pageStep);
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

  useEffect(() => {
    if (progress.attitudes.indexOrder === -1) {
      const newProgress = {
        ...progress,
        attitudes: {
          ...progress.attitudes,
          indexOrder: score,
        }
      }
      setProgress(newProgress)
    }
  }, [progress])

  if (progress.attitudes.step === 1) {
    return (
      <div className="bg-[url('/bg-green.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-[100dvh] max-w-sm w-full mx-auto px-6 py-10 text-center space-y-12">
          <p className="text-lg font-bold text-[#473f9b] uppercase tracking-widest">Scenario {progress.attitudes.indexOrder} / 4</p>

          <div>
            <h1 className="text-[#473f9b] font-serif text-6xl uppercase slide-up-1">
              <span className="block font-bold">{attitudes[0].title[0]}</span>
              <span className="block italic">{attitudes[0].title[1]}</span>
              <span className="block font-bold">{attitudes[0].title[2]}</span>
            </h1>
          </div>

          <button onClick={() => handleClick(2)} className="min-h-[60px] text-lg uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Start</button>
        </div>
      </div>
    )
  } else if (progress.attitudes.step === 2) {
    return (
      <div className="bg-[#b2d5d3] bg-[url('/bg-green.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-[100dvh] max-w-sm w-full mx-auto px-6 py-10 space-y-12">

          <Image
            loader={imgLoader}
            src="/img-attitudes.png"
            alt="attitudes illustration"
            width={375}
            height={324}
            className="block max-w-full h-auto mx-auto"
          />

          <div className="text-2xl text-[#473f9b] space-y-3 slide-up-1" dangerouslySetInnerHTML={{ __html: attitudes[1].text }}></div>

          <div>
            <button onClick={() => handleClick(3)} className="min-h-[60px] text-lg uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Next</button>

            <button onClick={() => handleClick(1)} className="flex items-center justify-center w-full min-h-[60px] bg-[#473f9b] border-5 border-[#231d57] text-white mt-4 relative">
              <svg fill="currentColor" className="w-5 h-5 absolute left-24 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
              <span className="text-lg uppercase tracking-widest">Back</span>
            </button>
          </div>
        </div>
      </div>
    )
  } else if (progress.attitudes.step === 3) {
    return (
      <div className="bg-[#454791] bg-[url('/bg-dark-blue.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-[100dvh] max-w-sm w-full mx-auto px-6 py-10 space-y-12">

          <div className="flex-1 flex items-center justify-center">
            <p className="text-[#c0dbd4] font-serif text-6xl uppercase text-center slide-up-1">
              <span className="block font-bold">{attitudes[2].title[0]}</span>
              <span className="block italic">{attitudes[2].title[1]}</span>
              <span className="block font-bold">{attitudes[2].title[2]}</span>
            </p>
          </div>

          <div className="space-y-3">
            <button onClick={() => handleAnswerClick('attitude_question_answered', attitudes[2].button[0], 4)} className="min-h-[60px] text-lg uppercase tracking-widest w-full p-2.5 bg-[#c0dbd4] border-5 border-[#231d57] text-[#454791] shadow-sm transition">{attitudes[2].button[0]}</button>

            <button onClick={() => handleAnswerClick('attitude_question_answered', attitudes[2].button[1], 7)} className="min-h-[60px] text-lg uppercase tracking-widest w-full p-2.5 bg-[#c0dbd4] border-5 border-[#231d57] text-[#454791] shadow-sm transition">{attitudes[2].button[1]}</button>

            <button onClick={() => handleClick(2)} className="flex items-center justify-center w-full min-h-[60px] bg-[#c0dbd4] border-5 border-[#231d57] text-[#454791] relative">
              <svg fill="currentColor" className="w-5 h-5 absolute left-24 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
              <span className="text-lg uppercase tracking-widest">Back</span>
            </button>
          </div>
        </div>
      </div>
    )
  } else if (progress.attitudes.step === 4) {
    return (
      <div className="bg-[#b2d5d3] bg-[url('/bg-green.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-[100dvh] max-w-sm w-full mx-auto px-6 py-10 space-y-12">

          <Image
            loader={imgLoader}
            src="/img-attitudes.png"
            alt="attitudes illustration"
            width={375}
            height={324}
            className="block max-w-full h-auto mx-auto"
          />

          <div className="text-2xl text-[#473f9b] space-y-3 slide-up-1" dangerouslySetInnerHTML={{ __html: attitudes[3].text }}></div>

          <div className="space-y-3">
            <button onClick={() => handleClick(5)} className="min-h-[60px] text-lg uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Next</button>

            <button onClick={() => handleClick(3)} className="flex items-center justify-center w-full min-h-[60px] bg-[#473f9b] border-5 border-[#231d57] text-white relative">
              <svg fill="currentColor" className="w-5 h-5 absolute left-24 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
              <span className="text-lg uppercase tracking-widest">Back</span>
            </button>
          </div>
        </div>
      </div>
    )
  } else if (progress.attitudes.step === 5) {
    return (
      <div className="bg-[#454791] bg-[url('/bg-dark-blue.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-[100dvh] max-w-sm w-full mx-auto px-6 py-10 space-y-12">

          <div className="flex-1 flex items-center justify-center">
            <p className="text-[#c0dbd4] font-serif text-6xl uppercase text-center slide-up-1">
              <span className="block font-bold">{attitudes[4].title[0]}</span>
              <span className="block italic">{attitudes[4].title[1]}</span>
              <span className="block font-bold">{attitudes[4].title[2]}</span>
            </p>
          </div>


          <div className="space-y-3">
            <button onClick={() => handleAnswerClick('attitude_question_answered', attitudes[4].button[0], 6)} className="min-h-[60px] text-lg uppercase tracking-widest w-full p-2.5 bg-[#c0dbd4] border-5 border-[#231d57] text-[#454791] shadow-sm transition">{attitudes[4].button[0]}</button>

            <button onClick={() => handleAnswerClick('attitude_question_answered', attitudes[4].button[1], 7)} className="min-h-[60px] text-lg uppercase tracking-widest w-full p-2.5 bg-[#c0dbd4] border-5 border-[#231d57] text-[#454791] shadow-sm transition">{attitudes[4].button[1]}</button>

            <button onClick={() => handleClick(4)} className="flex items-center justify-center w-full min-h-[60px] bg-[#c0dbd4] border-5 border-[#231d57] text-[#454791] mr-3 relative">
              <svg fill="currentColor" className="w-5 h-5 absolute left-24 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
              <span className="text-lg uppercase tracking-widest">Back</span>
            </button>
          </div>
        </div>
      </div>
    )
  } else if (progress.attitudes.step === 6) {
    return (
      <div className="bg-[#b2d5d3] bg-[url('/bg-green.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-[100dvh] max-w-sm w-full mx-auto px-6 py-10 space-y-12">

          <div className="text-2xl text-[#473f9b] space-y-3 slide-up-1" dangerouslySetInnerHTML={{ __html: attitudes[5].text1 }}></div>

          <blockquote className="quote bg-white text-[#473f9b] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#6071be] slide-up-2" dangerouslySetInnerHTML={{ __html: attitudes[5].quote }}></blockquote>

          <div className="space-y-3">
            <button onClick={() => handleClick(8)} className="min-h-[60px] text-lg uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Next</button>

            <button onClick={() => handleClick(5)} className="flex items-center justify-center w-full min-h-[60px] bg-[#473f9b] border-5 border-[#231d57] text-white relative">
              <svg fill="currentColor" className="w-5 h-5 absolute left-24 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
              <span className="text-lg uppercase tracking-widest">Back</span>
            </button>
          </div>
        </div>
      </div>
    )
  } else if (progress.attitudes.step === 7) {
    return (
      <div className="bg-[#b2d5d3] bg-[url('/bg-green.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-[100dvh] max-w-sm w-full mx-auto px-6 py-10 space-y-12">

          <div className="text-2xl text-[#473f9b] space-y-3 slide-up-1" dangerouslySetInnerHTML={{ __html: attitudes[5].text2 }}></div>

          <blockquote className="quote bg-white text-[#473f9b] p-7 rounded-[0.25rem] shadow-[0.5rem_0.5rem_0_#6071be] slide-up-2" dangerouslySetInnerHTML={{ __html: attitudes[5].quote }}></blockquote>

          <div className="space-y-3">
            <button onClick={() => handleClick(8)} className="min-h-[60px] text-lg uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Next</button>

            <button onClick={() => handleClick(3)} className="flex items-center justify-center w-full min-h-[60px] bg-[#473f9b] border-5 border-[#231d57] text-white mr-3 relative">
              <svg fill="currentColor" className="w-5 h-5 absolute left-24 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
              <span className="text-lg uppercase tracking-widest">Back</span>
            </button>
          </div>
        </div>
      </div>
    )
  } else if (progress.attitudes.step === 8) {
    return (
      <div className="bg-[#b2d5d3] bg-[url('/bg-green.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-[100dvh] max-w-sm w-full mx-auto px-6 py-10 space-y-12">

          <p className="end text-[#473f9b] font-serif text-6xl uppercase text-center" dangerouslySetInnerHTML={{ __html: attitudes[6].title }}></p>

          <div className="text-xl text-[#473f9b] space-y-3" dangerouslySetInnerHTML={{ __html: attitudes[6].text }}></div>

          <div className="space-y-3">
            <button onClick={() => handleClick(9)} className="min-h-[60px] text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Next</button>

            <button onClick={() => handleClick(7)} className="flex items-center justify-center w-full min-h-[60px] bg-[#473f9b] border-5 border-[#231d57] text-white mr-3 relative">
              <svg fill="currentColor" className="w-5 h-5 absolute left-24 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
              <span className="text-lg uppercase tracking-widest">Back</span>
            </button>
          </div>
        </div>
      </div>
    )
  } else if (progress.attitudes.step === 9) {
    return (
      <div className="bg-[#b2d5d3] bg-[url('/bg-green.png')] bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-between min-h-[100dvh] max-w-sm w-full mx-auto px-6 py-10 space-y-12">

          <p className="end text-[#473f9b] font-serif text-6xl uppercase text-center" dangerouslySetInnerHTML={{ __html: attitudes[7].title }}></p>

          <div className="text-2xl text-[#473f9b] space-y-3" dangerouslySetInnerHTML={{ __html: attitudes[7].text }}></div>

          <div className="space-y-3">
            <button onClick={() => handleFinish(1)} className="min-h-[60px] text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#473f9b] border-5 border-[#231d57] text-white shadow-sm transition">Finish</button>

            <button onClick={() => handleClick(8)} className="flex items-center justify-center w-full min-h-[60px] bg-[#473f9b] border-5 border-[#231d57] text-white relative">
              <svg fill="currentColor" className="w-5 h-5 absolute left-24 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
              <span className="text-lg uppercase tracking-widest">Back</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
