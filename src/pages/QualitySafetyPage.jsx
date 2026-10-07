import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'

const safetyItems = [
  'Site-specific hazard assessment and control measures',
  'Personal protective equipment and safe work procedures',
  'Safe electrical work and equipment handling',
  'Housekeeping, safe access, and material storage',
  'Material checks against approved specifications',
  'Workmanship monitoring and correction of defects',
  'Inspection and testing before completion',
  'Waste handling and protection of existing facilities',
  'As-built records and documented handover where applicable',
]

export default function QualitySafetyPage() {
  return (
    <>
      <SEO title="Quality, Safety & Professional Execution | ASHU Electrical Solution" description="Learn about ASHU Electrical Solution’s focus on quality, safety, testing, inspection and professional execution across construction and technical services." canonical="https://ashuelectricalsolution.com/quality-safety" />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Quality & Safety" title="Quality, health, safety & environmental practice" description="The company profile describes project-specific hazard controls, PPE, material checks, workmanship inspection, testing, housekeeping, waste management, defect correction, and client handover." />

        <div className="mt-10 rounded-[2rem] border border-[#f0d8d8] bg-white/85 p-7 shadow-[0_14px_30px_rgba(177,0,0,0.05)]">
          <h3 className="text-xl font-bold text-[#b30000]">Quality process</h3>
          <p className="mt-3 text-sm leading-7 text-[#7b0000]">Work is checked against approved drawings, specifications, and project requirements. Materials are inspected on delivery; workmanship is monitored during execution; relevant installations are tested; defects are corrected before final review. Handover documents may include as-built information, test results, material details, and inspection records where applicable.</p>
          <h3 className="mt-6 text-xl font-bold text-[#b30000]">Health, safety & environment</h3>
          <p className="mt-3 text-sm leading-7 text-[#7b0000]">The Project Manager and Site Supervisor coordinate day-to-day site safety. The profile commits to hazard identification, appropriate PPE, safe work practices, organized storage and access, responsible construction-waste handling, and reasonable steps to limit dust, debris, noise, and impact on existing facilities.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {safetyItems.map((item) => (
            <div key={item} className="rounded-[1.5rem] border border-[#f0d8d8] bg-white p-6 shadow-[0_14px_30px_rgba(177,0,0,0.04)]">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#fbe7e7] text-[#b30000]">
                ✓
              </div>
              <h3 className="text-xl font-bold text-[#6b0000]">{item}</h3>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
