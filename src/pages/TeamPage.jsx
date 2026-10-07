import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import TeamCard from '../components/TeamCard'
import { team } from '../data/team'

export default function TeamPage() {
  return (
    <>
      <SEO title="Project Team | ASHU Electrical Solution" description="Meet the key project team listed in the ASHU Electrical Solution company profile, including management, architecture, site supervision, and electrical leadership." canonical="https://ashuelectricalsolution.com/team" />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Team" title="Leadership and project delivery team" description="The company profile identifies five key project leaders supported by a permanent technical workforce and project-based specialists." />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#f0d8d8] bg-white/85 p-5">
            <p className="text-sm font-semibold text-[#b30000]">Permanent technical workforce</p>
            <p className="mt-2 text-2xl font-black text-[#6b0000]">6 technicians</p>
          </div>
          <div className="rounded-2xl border border-[#f0d8d8] bg-white/85 p-5">
            <p className="text-sm font-semibold text-[#b30000]">Additional project workforce</p>
            <p className="mt-2 text-2xl font-black text-[#6b0000]">5 temporary technicians</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </main>
    </>
  )
}
