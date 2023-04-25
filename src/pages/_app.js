import '@/styles/globals.css'
import { useState, useEffect } from "react"

export default function App({ Component, pageProps }) {
  const initialProgress = {
    score: 0,
    attitudes: {
      step: 1,
      finished: false,
    },
    safety: {
      step: 1,
      finished: false,
    },
    environment: {
      step: 1,
      finished: false,
    },
    health: {
      step: 1,
      finished: false,
    }
  }

  const [progress, setProgress] = useState(initialProgress)
  const [scanned, setScanned] = useState(false)

  const incrementScore = () => setProgress((amount) => amount + 1);

  function updateLocalStorage(progress) {
    localStorage.setItem('progress', JSON.stringify(progress));
  }

  useEffect(() => {
    if ('?fromQRcode' == location.search) {
      setScanned(true)
      window.localStorage.setItem('qrCode', JSON.stringify(scanned))
    }
  })

  return (
    <Component
      {...pageProps}
      progress={progress}
      setProgress={setProgress}
      incrementScore={incrementScore}
      updateLocalStorage={updateLocalStorage}
    />
  )
}
