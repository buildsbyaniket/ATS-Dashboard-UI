import { motion } from 'framer-motion'

function SummaryCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className='
      bg-[#0f172a]
      border
      border-slate-800
      p-6
      rounded-3xl
      relative
      overflow-hidden
    '
    >
      <div
        className={`
        absolute
        top-0
        right-0
        w-32
        h-32
        rounded-full
        blur-3xl
        opacity-20
        ${color}
      `}
      ></div>

      <div className='flex items-center justify-between'>
        <div>
          <p className='text-slate-400'>
            {title}
          </p>

          <h1
            className='
            text-white
            text-5xl
            font-black
            mt-5
          '
          >
            {value}
          </h1>
        </div>

        <div
          className={`
          w-16
          h-16
          rounded-2xl
          flex
          items-center
          justify-center
          text-2xl
          text-white
          ${color}
        `}
        >
          {icon}
        </div>
      </div>
    </motion.div>
  )
}

export default SummaryCard