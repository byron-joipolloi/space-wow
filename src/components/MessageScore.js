import { motion, AnimatePresence } from 'framer-motion'

export default function Message({
  isVisible,
  score
}) {
  return (
    <AnimatePresence mode={'popLayout'}>
      {isVisible && (
        <motion.div
          layout
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: 'spring' }}
          className="message message-score text-xl pt-4 pb-6 px-4 bg-white text-[#374590] mb-8 rounded-[0.25rem] relative shadow-[0.4rem_0.5rem_0_#6071be] text-center">
          <div>
            <p>You've found <span className="block font-serif italic text-5xl">{score - 1} of 4</span></p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
