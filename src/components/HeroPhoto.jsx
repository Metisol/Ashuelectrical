import { motion, useReducedMotion } from 'framer-motion'

export default function HeroPhoto() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="[perspective:1200px]">
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -7, 0], rotateY: [-2, 2, -2], rotateX: [1, -1, 1] }}
        whileHover={reduceMotion ? undefined : { scale: 1.035, rotateY: 0, rotateX: 0 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative h-[440px] w-full overflow-hidden rounded-[2rem] border border-[#f0d4d4] bg-[#fff7f7] shadow-[0_22px_60px_rgba(177,0,0,0.08)]"
      >
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=85"
          alt="Representative electrician-at-work photograph"
          className="h-full w-full object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#b30000]/75 via-transparent to-white/10" />
        <div className="absolute left-6 top-6 rounded-full border border-white/80 bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b30000]">
          ASHU Electrical Solution
        </div>
        <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4 text-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Electrical & technical services</p>
            <p className="mt-2 text-2xl font-bold">Coordinated from install to handover</p>
          </div>
          <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e10600] text-xl font-black sm:flex">
            AS
          </div>
        </div>
      </motion.div>
    </div>
  )
}