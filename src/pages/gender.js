import { useRouter } from 'next/router'

export default function Home({
  progress,
  setProgress,
  qrCode,
  setQrCode,
  updateLocalStorage,
}) {
  const router = useRouter()
  
  const handleStart = (qr) => {
    if (progress.firstTime) {
      router.push({
        pathname: '/intro',
      })
    } else if (qr.page === 'attitudes') {
      router.push({
        pathname: '/attitudes',
      })
    } else if (qr.page === 'health') {
      router.push({
        pathname: '/health',
      })
    } else if (qr.page === 'safety') {
      router.push({
        pathname: '/safety',
      })
    } else if (qr.page === 'environment') {
      router.push({
        pathname: '/environment',
      })
    } else {
      router.push({
        pathname: '/menu',
      })
    }

    gtag('event', 'gender_select', {'gender': progress.gender})
  }

  const selectGender = (gender) => {
    const newProgress = {
      ...progress,
      gender: gender
    }
    setProgress(newProgress)
    updateLocalStorage({progress: newProgress})
  }

  const showingStart = () => {
    return !progress.gender
  }

  return (
    <div className="bg-[#fecee1] bg-[url('/bg-pink.png')] bg-center bg-no-repeat bg-cover">
      <div className="flex flex-col justify-between min-h-[100dvh] max-w-sm w-full mx-auto px-6 py-10 text-center space-y-12">
        <div className="space-y-6 slide-up-1">
          <h1 className="text-[#a50c9d] font-serif text-6xl uppercase">
            What gender do you identify as?
          </h1>
        </div>

        <div className="flex flex-col space-y-1.5">
          <button onClick={() => selectGender('male')} className="relative text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#a50c9d] border-5 border-[#7b0575] text-white shadow-sm transition">Male {(progress.gender === 'male') ? (<svg className="absolute top-3 right-4 w-6 h-6 opacity-60" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>) : null }</button>
          <button onClick={() => selectGender('female')} className="relative text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#a50c9d] border-5 border-[#7b0575] text-white shadow-sm transition">Female {(progress.gender === 'female') ? (<svg className="absolute top-3 right-4 w-6 h-6 opacity-60" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>) : null }</button>
          <button onClick={() => selectGender('non-binary')} className="relative text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#a50c9d] border-5 border-[#7b0575] text-white shadow-sm transition">Non-binary {(progress.gender === 'non-binary') ? (<svg className="absolute top-3 right-4 w-6 h-6 opacity-60" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>) : null }</button>
          <button onClick={() => selectGender('other')} className="relative text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#a50c9d] border-5 border-[#7b0575] text-white shadow-sm transition">Other {(progress.gender === 'other') ? (<svg className="absolute top-3 right-4 w-6 h-6 opacity-60" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>) : null }</button>
          <button onClick={() => selectGender('prefer-not-to-say')} className="relative text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#a50c9d] border-5 border-[#7b0575] text-white shadow-sm transition">Prefer not to say {(progress.gender === 'prefer-not-to-say') ? (<svg className="absolute top-3 right-4 w-6 h-6 opacity-60" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>) : null }</button>
        </div>

        <button onClick={() => handleStart(qrCode)} className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#a50c9d] border-5 border-[#7b0575] text-white shadow-sm transition disabled:opacity-50" disabled={(showingStart())}>Start</button>

      </div>
    </div>
  )
}
