import { useEffect, useState, useRef } from 'react'
import SpeechBubble from '../components/SpeechBubble.js'

export default function Attitudes() {

  const [pageStep, setPageStep] = useState(1)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView()
  }

  const handleAnswerClick = (answer) => {
    if (answer === 'positive') {
      setPageStep(pageStep + 1)
    } else {
      setPageStep(pageStep - 1)
    }
  }

  const backToStart = () => {
    setPageStep(1)
  }

  useEffect(() => {
    scrollToBottom()
  }, [pageStep]);

  if (pageStep === 1) {
    return (
      <div className="flex items-center min-h-screen bg-[#ffc7dc]">
        <div className="max-w-sm mx-auto px-6 py-12 text-center">
          <h1 className="text-[#a50c9d] font-serif text-5xl mb-6 uppercase">
            <span className="block font-bold">One Way</span>
            <span className="block italic">or</span>
            <span className="block font-bold">Another</span>
          </h1>

          <p className="text-[#a50c9d] uppercase tracking-widest mb-12">Interactive Experience</p>

          <button onClick={() => setPageStep(2)} className="text-lg w-full p-2 font-semibold text-sm bg-[#a50c9d] border-4 border-[#80097a] text-white rounded-full shadow-sm transition">Start</button>
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex items-end min-h-screen bg-[#accff8]">
        <div className="max-w-sm mx-auto px-6 py-12 relative">
          
          <div className="">

            {(pageStep > 1) ? <SpeechBubble text={`Hi there!`} /> : null}
            {(pageStep > 2) ? <SpeechBubble text={`We're from the local secondary school.`} /> : null}
            {(pageStep > 3) ? <SpeechBubble text={`You've just found one of the barn's interactive experience stations!`} /> : null}
            {(pageStep > 4) ? <SpeechBubble text={`Around the barn, you will find different stations relating to topics that affect women, girls and non-binary people.`} /> : null}
            {(pageStep > 5) ? <SpeechBubble text={`You'll be given a scenario at each station. It's your job to make decisions!`} /> : null}
          </div>

          <div className="mb-6">
            <img src="/img-girls.png" alt="" />
          </div>

          <div className="flex justify-end">
            <button onClick={() => handleAnswerClick('negative')} className="p-2 font-semibold text-sm bg-[#374590] border-4 border-[#29336a] text-white rounded-full shadow-sm ml-3"><span className="sr-only">Previous</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/></svg></button>
            
            <button onClick={() => handleAnswerClick('positive')} className="p-2 font-semibold text-sm bg-[#374590] border-4 border-[#29336a] text-white rounded-full shadow-sm ml-3"><span className="sr-only">Next</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg></button>
          </div>
        </div>

        <div ref={messagesEndRef} />
      </div>
    )
  }
}
