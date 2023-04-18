export default function Message({text, active}) {
  return (
    <p className={`text-2xl py-3 px-5 bg-white text-[#374590] mb-8 rounded-[0.25rem] relative shadow-[0.5rem_0.5rem_0_#6071be]`}>{text}</p>
  )
}
