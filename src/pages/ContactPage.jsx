import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { Phone, MessageSquareText, Mail } from 'lucide-react'
import { useState } from 'react'
import useRequestSubmission from '../hooks/useRequestSubmission'
import GoogleMap from '../components/GoogleMap'
import OtherDetailsField from '../components/OtherDetailsField'

export default function ContactPage() {
  const { status, submit } = useRequestSubmission('contact')
  const [selectedService, setSelectedService] = useState('')

  return (
    <>
      <SEO title="Contact ASHU Electrical Solution | Addis Ababa, Ethiopia" description="Request a consultation with ASHU Electrical Solution in Addis Ababa for electrical contracting, office renovation, fit-out, CCTV, fire alarm, power distribution, and technical services." canonical="https://ashuelectricalsolution.com/contact" />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader eyebrow="Contact" title="Let’s Discuss Your Project" description="Speak with ASHU about your construction, renovation, electrical or technical requirements." />
            <div className="mt-8 space-y-5 text-sm text-[#6b0000]">
              <div className="flex items-center gap-3"><span className="font-semibold text-[#6b0000]">ASHU ELECTRICAL SOLUTION</span></div>
              <div className="flex items-center gap-3"><span className="font-medium">Electrical contractor and technical services provider in Addis Ababa, Ethiopia</span></div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#b30000]" /> +251 913 312 828</div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#b30000]" /> +251 921 809 883</div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#b30000]" /> ashutame1216@gmail.com</div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="tel:+251913312828" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e10600] px-5 py-3 text-sm font-semibold text-white">Call</a>
              <a href="https://wa.me/251913312828" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f0d6d6] bg-white px-5 py-3 text-sm font-semibold text-[#6b0000]"><MessageSquareText className="h-4 w-4" /> WhatsApp</a>
              <a href="mailto:ashutame1216@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f0d6d6] bg-white px-5 py-3 text-sm font-semibold text-[#6b0000]">Email</a>
            </div>
          </div>

          <form onSubmit={submit} onReset={() => setSelectedService('')} className="rounded-[2rem] border border-[#f0d8d8] bg-white p-6 shadow-[0_20px_40px_rgba(177,0,0,0.04)] md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000]">
                Name
                <input name="name" required maxLength={160} autoComplete="name" className="rounded-2xl border border-[#ebd7d7] bg-[#fffaf9] px-4 py-3 outline-none transition focus:border-[#d84d4d]" placeholder="Your name" />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000]">
                Company
                <input name="company" maxLength={200} autoComplete="organization" className="rounded-2xl border border-[#ebd7d7] bg-[#fffaf9] px-4 py-3 outline-none transition focus:border-[#d84d4d]" placeholder="Company name" />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000]">
                Phone
                <input name="phone" required maxLength={40} autoComplete="tel" className="rounded-2xl border border-[#ebd7d7] bg-[#fffaf9] px-4 py-3 outline-none transition focus:border-[#d84d4d]" placeholder="+251..." />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000]">
                Email
                <input name="email" type="email" required maxLength={254} autoComplete="email" className="rounded-2xl border border-[#ebd7d7] bg-[#fffaf9] px-4 py-3 outline-none transition focus:border-[#d84d4d]" placeholder="you@example.com" />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000] md:col-span-2">
                Service
                <select name="service" required value={selectedService} onChange={(event) => setSelectedService(event.target.value)} className="rounded-2xl border border-[#ebd7d7] bg-[#fffaf9] px-4 py-3 outline-none transition focus:border-[#d84d4d]">
                  <option value="">Choose a service</option>
                  <option>Electrical</option>
                  <option>Construction / Renovation</option>
                  <option>Building Fit-Out</option>
                  <option>CCTV & Security</option>
                  <option>Fire Alarm & Detection</option>
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
                <textarea name="message" rows="5" required maxLength={5000} className="rounded-2xl border border-[#ebd7d7] bg-[#fffaf9] px-4 py-3 outline-none transition focus:border-[#d84d4d]" placeholder="Describe your project needs" />
              </label>
            </div>
            {status.message && <p role="status" aria-live="polite" className="mt-5 text-sm font-semibold text-[#e10600]">{status.message}</p>}
            <button type="submit" disabled={status.pending} className="mt-6 inline-flex items-center justify-center rounded-full bg-[#e10600] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(177,0,0,0.18)] transition hover:bg-[#b30000] disabled:cursor-wait disabled:opacity-60">
              {status.pending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        <GoogleMap />
      </main>
    </>
  )
}
