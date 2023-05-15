import '@/styles/globals.css'
import Head from 'next/head'
import { useState, useEffect } from "react"
import { GoogleAnalytics } from "nextjs-google-analytics"

export const initialProgress = {
  active: '',
  firstTime: true,
  attitudes: {
    step: 1,
    completed: false,
    indexOrder: -1,
  },
  safety: {
    step: 1,
    completed: false,
    indexOrder: -1,
  },
  environment: {
    step: 1,
    completed: false,
    indexOrder: -1,
  },
  health: {
    step: 1,
    completed: false,
    indexOrder: -1,
  }
}

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(initialProgress)
  const [qrCode, setQrCode] = useState({})
  const [scenario, setScenario] = useState(1)

  function updateLocalProgress(progress) {
    setProgress(progress);
    updateLocalStorage('progress', progress);
  }

  function updateLocalStorage(key, progress) {
    localStorage.setItem(key, JSON.stringify(progress));
  }

  function getScore(prog) {
    const score = Object.values(prog).reduce((count, page) => {
      if (page.completed === true) ++count
      return count
    }, 0)

    return score + 1
  }

  function updateQr(page) {
    const newQr = {
      page: page
    }
    setQrCode(newQr)
    updateLocalStorage('qr', newQr)
  }

  useEffect(() => {
    let newProgress = JSON.parse(localStorage.getItem('progress')) || initialProgress
    setProgress(newProgress)

    if ('?attitudes' == location.search) {
      updateQr('attitudes')
    }
    if ('?health' == location.search) {
      updateQr('health')
    }
    if ('?safety' == location.search) {
      updateQr('safety')
    }
    if ('?environment' == location.search) {
      updateQr('environment')
    }
    if ('?qr=1' == location.search) {
      updateQr('qr')
    }
  }, [])

  return (
    <>
      <Head>
        <title>One Way or Another</title>
      </Head>
      <GoogleAnalytics trackPageViews />
      <Component
        {...pageProps}
        progress={progress}
        setProgress={updateLocalProgress}
        updateLocalStorage={() => {}}
        getScore={getScore}
        qrCode={qrCode}
        setQrCode={setQrCode}
        scenario={scenario}
        setScenario={setScenario}
      />
    </>
  )
}
