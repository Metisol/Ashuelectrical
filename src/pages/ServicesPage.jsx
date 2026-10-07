import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { services, serviceCategories } from '../data/services'

export default function ServicesPage() {
  return (
    <>
      <SEO title="Services | ASHU Electrical Solution" description="Explore ASHU Electrical Solution services covering construction, renovation, building fit-out, electrical works, security systems and technical installation." canonical="https://ashuelectricalsolution.com/services" />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Services" title="Our service capabilities" description="ASHU supports building environments with coordinated construction, electrical, security and technical service delivery." />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {serviceCategories.map((category) => (
            <div key={category} className="rounded-full border border-[#f0d9d9] bg-white px-4 py-3 text-center text-sm font-semibold text-[#7b0000] shadow-sm">
              {category}
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </main>
    </>
  )
}
