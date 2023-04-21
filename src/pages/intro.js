import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Message from '../components/Message.js'

const imgLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export default function Intro() {
  const data = [
    {
      id: 1,
      text: "Hi there!",
      active: true,
    },
    {
      id: 2,
      text: "We're from the local secondary school.",
      active: false,
    },
    {
      id: 3,
      text: "You've just found one of the barn's interactive experience stations!",
      active: false,
    },
    {
      id: 4,
      text: "Around the barn, you will find different stations relating to topics that affect women, girls and non-binary people.",
      active: false,
    },
    {
      id: 5,
      text: "You'll be given a scenario at each station. It's your job to make decisions!",
      active: false,
    }
  ]

  const [messages, setMessages] = useState(data)
  const [activeMessage, setActiveMessage] = useState(1)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView()
  }

  const handleClick = (answer) => {
    if (answer === 'next') {
      if (activeMessage >= messages.length) return
      setActiveMessage(activeMessage + 1)
    } else {
      setActiveMessage(Math.max(activeMessage - 1, 1))
    }
  }

  const backToStart = () => {
    setActiveMessage(1)
  }

  useEffect(() => {
    scrollToBottom()
  }, [activeMessage])

  return (
    <div className="flex items-end min-h-screen bg-[#accff8] bg-[url('/bg-blue.jpg')] bg-center bg-no-repeat bg-cover">
      <div className="max-w-sm mx-auto px-6 py-10 relative">
        
        <div>
          {/*{messages.map(message => <Message key={message.id} text={message.text} active={message.active} />)}*/}
          {(activeMessage > 0) ? <Message id={1} text={`Hi there!`} /> : null}
          {(activeMessage > 1) ? <Message id={2} text={`We're from the local secondary school.`} /> : null}
          {(activeMessage > 2) ? <Message id={3} text={`You've just found one of the barn's interactive experience stations!`} /> : null}
          {(activeMessage > 3) ? <Message id={4} text={`Around the barn, you will find different stations relating to topics that affect women, girls and non-binary people.`} /> : null}
          {(activeMessage > 4) ? <Message id={5} text={`You'll be given a scenario at each station. It's your job to make decisions!`} /> : null}
        </div>

        <div className="mb-6">
          <Image
            loader={imgLoader}
            src="/img-girls.png"
            alt="Girls illustration"
            width={327}
            height={300}
            className="block max-w-full h-auto mx-auto"
          />
        </div>

        <div className="flex justify-end">
          <button onClick={() => handleClick('prev')} className="flex items-center justify-center w-[60px] h-[60px] bg-[#374590] border-5 border-[#10194a] text-white ml-3 disabled:opacity-50" disabled={(activeMessage === 1)}>
            <span className="sr-only">Previous</span>
            <svg fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
          </button>

          {(activeMessage >= 5) ? (
            <Link href="/menu" className="text-lg uppercase tracking-widest flex items-center justify-center h-[60px] px-6 bg-[#374590] border-5 border-[#10194a] text-white ml-3">I'm ready!</Link>
          ) : (
            <button onClick={() => handleClick('next')} className="flex items-center justify-center w-[60px] h-[60px] bg-[#374590] border-5 border-[#10194a] text-white ml-3">
              <span className="sr-only">Next</span>
              <svg fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </button>
          )}
          
        </div>
      </div>

      <div ref={messagesEndRef} />
    </div>
  )
}
