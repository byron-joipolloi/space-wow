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
  const [scanned, setScanned] = useState(false)

  function updateLocalStorage(progress) {
    localStorage.setItem('progress', JSON.stringify(progress));
  }

  function getScore(prog) {
    const score = Object.values(prog).reduce((count, page) => {
      console.log({count, page});
      if (page.completed === true) ++count
      return count
    }, 0)

    return score
  }

  useEffect(() => {
    let newProgress = JSON.parse(localStorage.getItem('progress')) || initialProgress
    setProgress(newProgress)
  }, [])

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
      updateLocalStorage={updateLocalStorage}
      getScore={getScore}
    />
  )
}
