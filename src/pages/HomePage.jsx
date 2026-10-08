import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Building2, CheckCircle2, ClipboardCheck, ShieldCheck, Wrench, Phone, MessageSquareText } from 'lucide-react'
import { Link } from 'react-router-dom'
import HeroPhoto from '../components/HeroPhoto'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import TeamCard from '../components/TeamCard'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { team } from '../data/team'
import SEO from '../components/SEO'
import useRequestSubmission from '../hooks/useRequestSubmission'
import GoogleMap from '../components/GoogleMap'
import OtherDetailsField from '../components/OtherDetailsField'

const trustItems = [
  'Professional Project Execution',
  'Quality & Safety',
  'Technical Expertise',
  'Testing & Handover',
]

const reasons = [
  {
    title: 'More than one trade, coordinated together',
    description: 'Construction, renovation, fit-out, electrical and low-current work can be planned together through one team. This helps align related tasks and reduce the gaps that can happen when building and technical work are handled separately.',
  },
  {
    title: 'Plans shaped around the actual site',
    description: 'Work is coordinated around site access, existing conditions, approved drawings and client decisions—not just a generic checklist. That practical approach helps keep activities relevant to the building and its day-to-day needs.',
  },
  {
    title: 'Technical details carried through to handover',
    description: 'The work does not stop at installation. Material checks, workmanship inspection, testing, defect correction and handover documentation help connect execution to a clearer project closeout.',
  },
  {
    title: 'Support beyond the initial request',
    description: 'Clients can discuss requirements with the team, coordinate decisions during delivery and request technical assistance after handover. The aim is to make support part of the working relationship, not just the first conversation.',
  },
]

export default function HomePage() {
  const { status: contactStatus, submit: submitContact } = useRequestSubmission('contact')
  const [selectedService, setSelectedService] = useState('')
  const reduceMotion = useReducedMotion()
  const textReveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.75, ease: 'easeOut' },
  }

  return (
    <>
      <SEO title="ASHU Electrical Solution | Electrical Contractor in Addis Ababa, Ethiopia" description="ASHU Electrical Solution is an electrical contractor in Addis Ababa, Ethiopia delivering office renovation, fit-out, electrical installation, power systems, and technical services." canonical="https://ashuelectricalsolution.com/" />

      <section className="relative isolate overflow-hidden border-b border-[#f0d9d9] bg-transparent">
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <motion.p {...textReveal} className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#b30000]">ASHU ELECTRICAL SOLUTION</motion.p>
            <motion.h1 {...textReveal} className="max-w-[13ch] text-5xl font-black leading-[0.95] tracking-[-0.08em] text-[#6b0000] sm:text-6xl lg:text-7xl">
              Electrical Contractor in Addis Ababa, Ethiopia
            </motion.h1>
            <motion.p {...textReveal} className="mt-6 max-w-xl text-lg leading-8 text-[#7b0000]">
              ASHU Electrical Solution is a trusted electrical contractor in Addis Ababa, Ethiopia, delivering office renovation, fit-out, electrical installation, power distribution, CCTV, fire alarm, and technical services for commercial, institutional, and industrial projects.
            </motion.p>
            <motion.div {...textReveal} className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#b30000]">
              <span className="rounded-full border border-[#f0d9d9] bg-white px-3 py-2">Electrical contractor in Addis Ababa</span>
              <span className="rounded-full border border-[#f0d9d9] bg-white px-3 py-2">Office renovation</span>
              <span className="rounded-full border border-[#f0d9d9] bg-white px-3 py-2">Electrical installation</span>
              <span className="rounded-full border border-[#f0d9d9] bg-white px-3 py-2">CCTV & Security</span>
            </motion.div>
            <motion.div {...textReveal} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/consultation" className="inline-flex items-center justify-center rounded-full bg-[#e10600] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(225,6,0,0.25)] transition hover:bg-[#b30000]">
                Request a Project Consultation
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center rounded-full border border-[#f1d5d5] bg-white px-6 py-3.5 text-sm font-semibold text-[#6b0000] shadow-sm transition hover:border-[#d6a6a6] hover:bg-[#fff7f7]">
                Explore Our Services
              </Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <HeroPhoto />
          </motion.div>
          </div>
        </div>
      </section>

      <div className="border-y border-[#f0d9d9] bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {trustItems.map((item) => (
            <motion.div {...textReveal} key={item} className="flex items-center gap-3 rounded-2xl border border-[#f0d8d8] bg-[#fff8f8] p-4 text-sm font-semibold text-[#6b0000]">
              <CheckCircle2 className="h-5 w-5 text-[#b30000]" />
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div {...textReveal} className="overflow-hidden rounded-[2rem] border border-[#f1d8d8] bg-white p-8 shadow-[0_18px_36px_rgba(177,0,0,0.04)]">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fbe7e7] text-[#b30000]">
              <Building2 className="h-7 w-7" />
            </div>
            <motion.h2 {...textReveal} className="text-3xl font-black tracking-[-0.06em] text-[#6b0000]">Professional electrical and fit-out services for Addis Ababa projects.</motion.h2>
            <motion.p {...textReveal} className="mt-4 text-base leading-7 text-[#8a1c1c]">
              ASHU Electrical Solution supports businesses, offices, and institutions with electrical contractor services in Addis Ababa, office renovation, building fit-out, electrical installation, power systems, and technical coordination from planning through handover.
            </motion.p>
            <motion.div {...textReveal} className="mt-6 space-y-4 text-sm text-[#6b0000]">
              <div className="flex items-center gap-3"><ClipboardCheck className="h-5 w-5 text-[#b30000]" /> Structured project coordination and execution</div>
              <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-[#b30000]" /> Quality-driven execution and safe working practices</div>
              <div className="flex items-center gap-3"><Wrench className="h-5 w-5 text-[#b30000]" /> Technical service coverage for electrical and security systems</div>
            </motion.div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div {...textReveal} className="rounded-[1.5rem] border border-[#efdad9] bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b30000]">Core Capabilities</p>
              <h3 className="mt-4 text-2xl font-bold text-[#6b0000]">Office renovation and electrical installation in Addis Ababa</h3>
              <p className="mt-3 text-sm leading-7 text-[#8a1c1c]">Execution support for building works, fit-out, electrical installation, low-current systems, and technical integration for commercial and institutional projects.</p>
            </motion.div>
            <motion.div {...textReveal} className="rounded-[1.5rem] border border-[#efdad9] bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b30000]">Project Focus</p>
              <h3 className="mt-4 text-2xl font-bold text-[#6b0000]">Commercial & institutional electrical contracting</h3>
              <p className="mt-3 text-sm leading-7 text-[#8a1c1c]">Practical, coordinated execution for environments that need power systems, controls, fire protection, security systems, and disciplined handover.</p>
            </motion.div>
            <motion.div {...textReveal} className="rounded-[1.5rem] border border-[#efdad9] bg-white p-6 md:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b30000]">Leadership</p>
              <h3 className="mt-4 text-2xl font-bold text-[#6b0000]">Ashenafi Tamene — Owner / General Manager</h3>
              <p className="mt-3 text-sm leading-7 text-[#8a1c1c]">Guiding project execution across construction, renovation, electrical and technical service delivery.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-transparent py-16 text-[#6b0000]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...textReveal}><SectionHeader eyebrow="Services" title="Integrated solutions for every stage of the project" description="From building works to technical systems, ASHU coordinates the core disciplines needed for reliable project delivery." align="center" /></motion.div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.slice(0, 8).map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div {...textReveal}><SectionHeader eyebrow="Project Experience" title="Selected project references" description="Office renovation, electrical and technical works for clients and construction partners in Ethiopia and the region." /></motion.div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.slice(0, 6).map((project) => (
            <motion.div {...textReveal} key={project.title}><ProjectCard project={project} /></motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#fff7f7] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...textReveal}><SectionHeader eyebrow="Why ASHU" title="One coordinated team, from site work to technical handover" description="ASHU connects building, finishing and technical services within a single project approach. Instead of treating each task as a separate job, the team considers how site conditions, trades, installation, inspection and handover fit together—so clients have a clearer path from requirements to completed work." align="center" /></motion.div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((reason, index) => (
              <motion.div {...textReveal} key={reason.title} className="rounded-[1.5rem] border border-[#f0d7d7] bg-white p-6 shadow-[0_12px_30px_rgba(177,0,0,0.04)]">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#fbe7e7] text-sm font-black text-[#b30000]">0{index + 1}</div>
                <h3 className="text-lg font-bold text-[#6b0000]">{reason.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#7b0000]">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#b30000] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <motion.div {...textReveal}><SectionHeader eyebrow="Consultation & Supply" title="Request expert support for your next project" description="Not sure what your project needs? Talk to ASHU's technical team or request material and equipment support." inverse /></motion.div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div {...textReveal}><Link to="/consultation" className="flex items-center justify-between rounded-[1.5rem] border border-[#8a1717] bg-[#650000] p-5 text-left hover:border-[#a31d1d]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f4b7b7]">Technical</p>
                  <h3 className="mt-2 text-xl font-bold">Consultation</h3>
                </div>
                <ArrowRight className="h-5 w-5 text-[#fcd3d3]" />
              </Link></motion.div>
              <motion.div {...textReveal}><Link to="/supply-request" className="flex items-center justify-between rounded-[1.5rem] border border-[#8a1717] bg-[#650000] p-5 text-left hover:border-[#a31d1d]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f4b7b7]">B2B</p>
                  <h3 className="mt-2 text-xl font-bold">Supply Request</h3>
                </div>
                <ArrowRight className="h-5 w-5 text-[#fcd3d3]" />
              </Link></motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fef5f5] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-[#f2d3d3] bg-white p-8 shadow-[0_18px_42px_rgba(177,0,0,0.05)] lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <motion.div {...textReveal}>
                <motion.p {...textReveal} className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b30000]">Next Step</motion.p>
                <motion.h2 {...textReveal} className="mt-4 text-3xl font-black tracking-[-0.06em] text-[#6b0000] md:text-4xl">Let’s plan your next building or technical project.</motion.h2>
                <motion.p {...textReveal} className="mt-4 max-w-xl text-base leading-7 text-[#8a1c1c]">Talk with ASHU about your building, renovation, electrical, security or technical service needs.</motion.p>
              </motion.div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Link to="/consultation" className="inline-flex items-center justify-center rounded-full bg-[#e10600] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(225,6,0,0.25)] transition hover:bg-[#b30000]">
                  Request a Project Consultation
                </Link>
                <a href="tel:+251913312828" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f0d6d6] bg-white px-6 py-3.5 text-sm font-semibold text-[#6b0000]">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <motion.div {...textReveal}><SectionHeader eyebrow="Contact" title="Let’s Discuss Your Project" description="Get in touch to discuss your project requirements, site needs or technical support request." /></motion.div>
            <div className="mt-8 space-y-5 text-sm text-[#6b0000]">
              <div className="flex items-center gap-3"><span className="font-semibold text-[#6b0000]">ASHU ELECTRICAL SOLUTION</span></div>
              <div className="flex items-center gap-3"><span className="font-medium">Addis Ababa, Ethiopia</span></div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#b30000]" /> +251 913 312 828</div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#b30000]" /> +251 921 809 883</div>
              <div className="flex items-center gap-3"><span className="">ashutame1216@gmail.com</span></div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="tel:+251913312828" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e10600] px-5 py-3 text-sm font-semibold text-white">Call</a>
              <a href="https://wa.me/251913312828" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f0d6d6] bg-white px-5 py-3 text-sm font-semibold text-[#6b0000]"><MessageSquareText className="h-4 w-4" /> WhatsApp</a>
              <a href="mailto:ashutame1216@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f0d6d6] bg-white px-5 py-3 text-sm font-semibold text-[#6b0000]">Email</a>
            </div>
          </div>

          <form onSubmit={submitContact} onReset={() => setSelectedService('')} className="rounded-[2rem] border border-[#f0d8d8] bg-white p-6 shadow-[0_18px_36px_rgba(177,0,0,0.05)] md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000]">
                Name
                <input name="name" required maxLength={160} autoComplete="name" className="rounded-2xl border border-[#ebd7d7] bg-[#fffbfb] px-4 py-3 outline-none transition focus:border-[#d84d4d]" placeholder="Your name" />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000]">
                Company
                <input name="company" maxLength={200} autoComplete="organization" className="rounded-2xl border border-[#ebd7d7] bg-[#fffbfb] px-4 py-3 outline-none transition focus:border-[#d84d4d]" placeholder="Company name" />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000]">
                Phone
                <input name="phone" required maxLength={40} autoComplete="tel" className="rounded-2xl border border-[#ebd7d7] bg-[#fffbfb] px-4 py-3 outline-none transition focus:border-[#d84d4d]" placeholder="+251..." />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000]">
                Email
                <input name="email" type="email" required maxLength={254} autoComplete="email" className="rounded-2xl border border-[#ebd7d7] bg-[#fffbfb] px-4 py-3 outline-none transition focus:border-[#d84d4d]" placeholder="you@example.com" />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000] md:col-span-2">
                Service
                <select name="service" required value={selectedService} onChange={(event) => setSelectedService(event.target.value)} className="rounded-2xl border border-[#ebd7d7] bg-[#fffbfb] px-4 py-3 outline-none transition focus:border-[#d84d4d]">
                  <option value="">Choose a service</option>
                  <option>Electrical</option>
                  <option>Construction / Renovation</option>
                  <option>Building Fit-Out</option>
                  <option>CCTV & Security</option>
                  <option>Fire Alarm & Detection</option>
                  <option>Lighting</option>
                  <option>Network Infrastructure</option>
                  <option>HVAC / Air Conditioning</option>
                  <option>Generator & Power Backup</option>
                  <option>Digital Screen & TV Installation</option>
                  <option>Other</option>
                </select>
              </label>
              <OtherDetailsField visible={selectedService === 'Other'} />
              <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000] md:col-span-2">
                Message
                <textarea name="message" rows="5" required maxLength={5000} className="rounded-2xl border border-[#ebd7d7] bg-[#fffbfb] px-4 py-3 outline-none transition focus:border-[#d84d4d]" placeholder="Tell us about your project requirements" />
              </label>
            </div>
            {contactStatus.message && <p role="status" aria-live="polite" className={`mt-5 text-sm font-semibold ${contactStatus.error ? 'text-[#b30000]' : 'text-[#087a3e]'}`}>{contactStatus.message}</p>}
            <button type="submit" disabled={contactStatus.pending} className="mt-6 inline-flex items-center justify-center rounded-full bg-[#e10600] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(225,6,0,0.2)] transition hover:bg-[#b30000] disabled:cursor-wait disabled:opacity-60">
              {contactStatus.pending ? 'Sending...' : 'Request Consultation'}
            </button>
          </form>
        </div>
        <motion.div {...textReveal}>
          <GoogleMap />
        </motion.div>
      </section>
    </>
  )
}
