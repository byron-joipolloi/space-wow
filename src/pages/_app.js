import '@/styles/globals.css'
import { useState, useEffect } from "react"

export default function App({ Component, pageProps }) {
  const initialProgress = {
    attitudes: {
      step: 1,
      completed: false,
    },
    safety: {
      step: 1,
      completed: false,
    },
    environment: {
      step: 1,
      completed: false,
    },
    health: {
      step: 1,
      completed: false,
    }
  }

  const [progress, setProgress] = useState(initialProgress)
  const [qrCode, setQrCode] = useState({})

  function updateLocalStorage(key, progress) {
    localStorage.setItem(key, JSON.stringify(progress));
  }

  function getScore(prog) {
    const score = Object.values(prog).reduce((count, page) => {
      if (page.completed === true) ++count
      return count
    }, 0)

    return score
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
  }, [])

  return (
    <Component
      {...pageProps}
      progress={progress}
      setProgress={setProgress}
      updateLocalStorage={updateLocalStorage}
      getScore={getScore}
      qrCode={qrCode}
      setQrCode={setQrCode}
    />
  )
}
