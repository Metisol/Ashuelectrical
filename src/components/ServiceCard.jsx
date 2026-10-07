import { ArrowRight } from 'lucide-react'
import * as icons from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  const Icon = icons[service.icon] || icons.Building2
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -9, rotateZ: -1, scale: 1.025 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 19 }}
      className="group flex h-full flex-col rounded-[1.5rem] border border-[#f1d7d7] bg-white p-6 shadow-[0_10px_30px_rgba(177,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(177,0,0,0.16)]"
    >
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fbe7e7] text-[#b30000] ring-1 ring-[#f5caca]">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-bold text-[#6b0000]">{service.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-[#8a1c1c]">{service.description}</p>
      <Link to={`/services/${service.slug}`} className="mt-6 inline-flex min-w-[148px] items-center justify-center gap-3 self-start rounded-xl bg-[#e10600] px-4 py-3 text-sm font-bold text-white shadow-[0_8px_18px_rgba(225,6,0,0.2)] transition hover:-translate-y-0.5 hover:bg-[#b30000] hover:shadow-[0_12px_24px_rgba(225,6,0,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e10600]">
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.article>
  )
}
