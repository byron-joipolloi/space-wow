import { motion, AnimatePresence } from 'framer-motion'

export default function Message({ text, isVisible, id }) {
  console.log(id)
  return (
    <AnimatePresence mode={'popLayout'}>
      {isVisible && (
        <motion.div
          layout
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: "spring" }}
          key={id}
          className={`message text-xl py-4 px-5 bg-white text-[#374590] mb-8 rounded-[0.25rem] relative shadow-[0.4rem_0.5rem_0_#6071be] slide-up-1`}
        >
          <div>
            <p>{text}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
