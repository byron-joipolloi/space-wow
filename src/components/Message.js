export default function Message({text}) {
  return (
    <div className={`message text-3xl py-5 px-6 bg-white text-[#374590] mb-8 rounded-[0.25rem] relative shadow-[0.4rem_0.5rem_0_#6071be] slide-up-1`}>
      <p>{text}</p>
    </div>
  )
}
