import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { useState } from 'react'
import useRequestSubmission from '../hooks/useRequestSubmission'
import OtherDetailsField from '../components/OtherDetailsField'
import GoogleLocationInput from '../components/GoogleLocationInput'

export default function ConsultationPage() {
  const { status, submit } = useRequestSubmission('consultation')
  const [selectedProjectType, setSelectedProjectType] = useState('Electrical')

  return (
    <>
      <SEO title="Technical Consultation | ASHU Electrical Solution" description="Request a technical consultation for office renovation, refurbishment, fit-out, electrical installation, network infrastructure, security, fire alarm, HVAC, and generator-related work." canonical="https://ashuelectricalsolution.com/consultation" />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Consultation" title="Technical Consultation" description="Not sure what your project needs? Talk to ASHU's technical team." align="center" />

        <form onSubmit={submit} onReset={() => setSelectedProjectType('Electrical')} className="mt-10 rounded-[2rem] border border-[#f0d8d8] bg-white p-6 shadow-[0_20px_40px_rgba(177,0,0,0.04)] md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000]">
              Full Name
              <input name="name" required maxLength={160} autoComplete="name" className="rounded-2xl border border-[#ebd7d7] bg-[#fffaf9] px-4 py-3 outline-none transition focus:border-[#d84d4d]" placeholder="Your full name" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000]">
              Company / Organization
              <input name="company" maxLength={200} autoComplete="organization" className="rounded-2xl border border-[#ebd7d7] bg-[#fffaf9] px-4 py-3 outline-none transition focus:border-[#d84d4d]" placeholder="Company or organization" />
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
              Project Type
              <select name="projectType" required value={selectedProjectType} onChange={(event) => setSelectedProjectType(event.target.value)} className="rounded-2xl border border-[#ebd7d7] bg-[#fffaf9] px-4 py-3 outline-none transition focus:border-[#d84d4d]">
                <option>Electrical</option>
                <option>CCTV & Security</option>
                <option>Lighting</option>
                <option>Network Infrastructure</option>
                <option>Building Fit-Out</option>
                <option>Construction / Renovation</option>
                <option>Fire Alarm & Detection</option>
                <option>HVAC / Air Conditioning</option>
                <option>Generator & Power Backup</option>
                <option>Digital Screen & TV Installation</option>
                <option>Other</option>
              </select>
            </label>
            <OtherDetailsField visible={selectedProjectType === 'Other'} />
            <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000] md:col-span-2">
              Project Location
              <GoogleLocationInput placeholder="Start typing a project location" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000] md:col-span-2">
              Project Description
              <textarea name="description" rows="5" required maxLength={5000} className="rounded-2xl border border-[#ebd7d7] bg-[#fffaf9] px-4 py-3 outline-none transition focus:border-[#d84d4d]" placeholder="Describe your project requirements" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000] md:col-span-2">
              Upload Drawing / Document
              <input name="attachment" type="file" accept=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx,.xls,.xlsx,.csv" className="rounded-2xl border border-dashed border-[#e8c2c2] bg-[#fffaf9] px-4 py-3 text-sm text-[#6b0000] outline-none transition focus:border-[#d84d4d]" />
            </label>
          </div>

          {status.message && <p role="status" aria-live="polite" className="mt-5 text-sm font-semibold text-[#e10600]">{status.message}</p>}
          <button type="submit" disabled={status.pending} className="mt-8 inline-flex items-center justify-center rounded-full bg-[#e10600] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(177,0,0,0.18)] transition hover:bg-[#b30000] disabled:cursor-wait disabled:opacity-60">
            {status.pending ? 'Sending...' : 'Request Consultation'}
          </button>
        </form>
      </main>
    </>
  )
}
