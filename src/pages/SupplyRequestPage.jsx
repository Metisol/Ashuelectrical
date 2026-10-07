import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import { useState } from 'react'
import useRequestSubmission from '../hooks/useRequestSubmission'
import OtherDetailsField from '../components/OtherDetailsField'
import GoogleLocationInput from '../components/GoogleLocationInput'

export default function SupplyRequestPage() {
  const { status, submit } = useRequestSubmission('supply')
  const [selectedCategory, setSelectedCategory] = useState('')

  return (
    <>
      <SEO title="Material & Equipment Supply | ASHU Electrical Solution" description="Submit your material and equipment supply requirements to ASHU Electrical Solution for project quotation and review." canonical="https://ashuelectricalsolution.com/supply-request" />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Supply Request" title="Material & Equipment Supply" description="Submit your project requirements and let our team review the appropriate materials and equipment." align="center" />

        <form onSubmit={submit} onReset={() => setSelectedCategory('')} className="mt-10 rounded-[2rem] border border-[#f0d8d8] bg-white p-6 shadow-[0_20px_40px_rgba(177,0,0,0.04)] md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000]">
              Full Name
              <input name="name" required maxLength={160} autoComplete="name" className="rounded-2xl border border-[#ebd7d7] bg-[#fffaf9] px-4 py-3 outline-none transition focus:border-[#d84d4d]" placeholder="Your full name" />
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
            <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000]">
              Category
              <select name="category" required value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)} className="rounded-2xl border border-[#ebd7d7] bg-[#fffaf9] px-4 py-3 outline-none transition focus:border-[#d84d4d]">
                <option value="">Choose a category</option>
                <option>Electrical</option>
                <option>Lighting</option>
                <option>CCTV</option>
                <option>Network Infrastructure</option>
                <option>Security</option>
                <option>Construction</option>
                <option>Building Fit-Out</option>
                <option>Power Distribution</option>
                <option>Fire Alarm & Detection</option>
                <option>HVAC / Air Conditioning</option>
                <option>Generator & Power Backup</option>
                <option>Digital Screen & TV Installation</option>
                <option>Other</option>
              </select>
            </label>
            <OtherDetailsField visible={selectedCategory === 'Other'} />
            <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000]">
              Quantity
              <input name="quantity" type="number" min="1" required className="rounded-2xl border border-[#ebd7d7] bg-[#fffaf9] px-4 py-3 outline-none transition focus:border-[#d84d4d]" placeholder="Required quantity" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000] md:col-span-2">
              Item / Specification
              <input name="item" required maxLength={500} className="rounded-2xl border border-[#ebd7d7] bg-[#fffaf9] px-4 py-3 outline-none transition focus:border-[#d84d4d]" placeholder="Describe the item or specification" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000]">
              Project Location
              <GoogleLocationInput placeholder="Start typing a project location" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000]">
              Required Date
              <input name="requiredDate" type="date" required className="rounded-2xl border border-[#ebd7d7] bg-[#fffaf9] px-4 py-3 outline-none transition focus:border-[#d84d4d]" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000] md:col-span-2">
              Upload BOQ / Specification
              <input name="attachment" type="file" accept=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx,.xls,.xlsx,.csv" className="rounded-2xl border border-dashed border-[#e8c2c2] bg-[#fffaf9] px-4 py-3 text-sm text-[#6b0000] outline-none transition focus:border-[#d84d4d]" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000] md:col-span-2">
              Additional Notes
              <textarea name="notes" rows="5" maxLength={5000} className="rounded-2xl border border-[#ebd7d7] bg-[#fffaf9] px-4 py-3 outline-none transition focus:border-[#d84d4d]" placeholder="Add any extra requirements or notes" />
            </label>
          </div>

          {status.message && <p role="status" aria-live="polite" className="mt-5 text-sm font-semibold text-[#e10600]">{status.message}</p>}
          <button type="submit" disabled={status.pending} className="mt-8 inline-flex items-center justify-center rounded-full bg-[#e10600] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(177,0,0,0.18)] transition hover:bg-[#b30000] disabled:cursor-wait disabled:opacity-60">
            {status.pending ? 'Sending...' : 'Request Supply Quote'}
          </button>
        </form>
      </main>
    </>
  )
}
