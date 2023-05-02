import Link from 'next/link'
import Reset from '../components/Reset'

export default function Menu({
  progress,
  setProgress
}) {
  console.log(progress);

  const page = Object.keys(progress).map((key) => {
      return (
        <Link href={`/${key}`} key={key} className="relative text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#374590] border-5 border-[#10194a] text-white shadow-sm transition">{key} {(progress[key].completed) ? (<svg className="absolute top-3 right-4 w-6 h-6 opacity-60" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>) : null }</Link>
      )
  });

  return (
    <div className="bg-[#accff8] bg-[url('/bg-blue.png')] bg-center bg-no-repeat bg-cover">
      <div className="flex flex-col justify-center min-h-screen max-w-sm w-full mx-auto px-6 py-10 text-center space-y-12">
        <h1 className="text-[#374590] font-serif font-bold text-6xl uppercase slide-up-1">
          Choose a topic
        </h1>

        <div className="flex flex-col space-y-3">
          {page}
        </div>
      </div>

      <Reset setProgress={setProgress} />
    </div>
  )
}
