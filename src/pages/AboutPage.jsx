import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import GoogleMap from '../components/GoogleMap'
import { CheckCircle2 } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <SEO title="About ASHU Electrical Solution | Integrated Construction & Technical Services" description="ASHU Electrical Solution is an integrated construction, renovation, building fit-out, electrical and technical services company based in Addis Ababa, Ethiopia." canonical="https://ashuelectricalsolution.com/about" />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="About" title="ASHU Electrical Solution" description="An Ethiopian company providing construction, renovation, building fit-out, electrical installation, and integrated technical services." />

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[#f0d8d8] bg-white p-8 shadow-[0_18px_36px_rgba(177,0,0,0.04)]">
            <p className="text-base leading-8 text-[#7b0000]">
              ASHU Electrical Solution undertakes office renovation, refurbishment, fit-out, electrical installation, low-current systems, network infrastructure, security systems, building works, and related technical services. The company works directly for clients and as a specialist subcontractor to construction companies.
            </p>
            <p className="mt-5 text-base leading-8 text-[#7b0000]">
              Its multidisciplinary approach coordinates civil, finishing, electrical, technical, and specialist trades from site preparation to inspection, defect rectification, documentation, and handover. The company is based in Addis Ababa, Ethiopia.
            </p>
            <div className="mt-8 grid items-start gap-4 md:grid-cols-2">
              <div className="rounded-[1.25rem] bg-[#fff7f7] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b30000]">Leadership</p>
                <h3 className="mt-3 text-xl font-bold text-[#6b0000]">Ashenafi Tamene</h3>
                <p className="mt-2 text-sm text-[#7b0000]">Owner / General Manager</p>
              </div>
              <div className="rounded-[1.25rem] bg-[#fff7f7] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b30000]">Location</p>
                <h3 className="mt-3 text-xl font-bold text-[#6b0000]">Addis Ababa</h3>
                <p className="mt-2 text-sm text-[#7b0000]">Ethiopia</p>
                <GoogleMap compact />
              </div>
            </div>
          </div>

          <div className="h-fit rounded-[2rem] border border-[#f0d8d8] bg-[#650000] p-8 text-white shadow-[0_18px_36px_rgba(177,0,0,0.08)]">
            <h3 className="text-2xl font-bold">Company focus</h3>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-white">
              <li>• Office renovation, refurbishment, construction, and fit-out</li>
              <li>• Electrical installation, lighting, power distribution, and controls</li>
              <li>• CCTV, access control, fire alarm, and low-current systems</li>
              <li>• Data/network infrastructure, HVAC controls, and generator works</li>
              <li>• Inspection, testing, defect correction, and documented handover</li>
            </ul>
          </div>
        </div>

        <section className="mt-12 border-t border-[#f0d8d8] pt-10">
          <SectionHeader eyebrow="Quality & Safety" title="Quality, safety and professional execution" description="The company applies disciplined work practices focused on safe execution, inspection and documented handover." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              'Site-specific hazard assessment',
              'PPE and safe work procedures',
              'Material checks against approved specifications',
              'Workmanship inspection and defect correction',
              'Electrical and technical testing',
              'Housekeeping and waste management',
              'Protection of existing facilities',
              'As-built records and client handover',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-[1.2rem] border border-[#f0d8d8] bg-white p-4 text-sm font-medium text-[#6b0000]">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#b30000]" />
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-[#f0d8d8] pt-10">
          <SectionHeader eyebrow="Client & Contractor References" title="Project relationships listed in the company profile" description="ASHU’s profile includes project experience and reference letters for the following organizations." />
          <div className="mt-6 flex flex-wrap gap-3">
            {['DHL World Wide Express One Member PLC', 'DHL Ethiopian Airlines Logistics Services S.C.', 'Leo Construction PLC', 'Filcon Construction PLC', 'ZeeyonComputech'].map((client) => (
              <span key={client} className="rounded-full border border-[#f0d8d8] bg-white/85 px-4 py-2 text-sm font-semibold text-[#b30000]">{client}</span>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 border-t border-[#f0d8d8] pt-10 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Tools & Resources" title="Resources for project delivery" description="The company profile lists tools and resources selected according to each project’s scope and technical requirements." />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {['Electrical and testing equipment', 'Cable installation and termination tools', 'ELV, security, and network tools', 'Construction and finishing tools', 'Access and installation equipment', 'Personal protective equipment'].map((resource) => (
                <li key={resource} className="rounded-xl border border-[#f0d8d8] bg-white/85 p-4 text-sm font-medium text-[#b30000]">{resource}</li>
              ))}
            </ul>
          </div>
          <div className="h-fit rounded-[2rem] border border-[#f0d8d8] bg-white/85 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b30000]">After-sales support</p>
            <h3 className="mt-3 text-2xl font-bold text-[#b30000]">Support after handover</h3>
            <p className="mt-4 text-sm leading-7 text-[#7b0000]">The company profile describes technical assistance, inspection of reported issues, troubleshooting, corrective support, maintenance, and system guidance after handover. Warranty coverage is provided according to the agreed contract and applicable manufacturer conditions.</p>
          </div>
        </section>
      </main>
    </>
  )
}
