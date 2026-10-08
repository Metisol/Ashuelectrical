import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { services, serviceCategories } from '../data/services'

export default function ServicesPage() {
  return (
    <>
      <SEO title="Electrical Services in Addis Ababa | ASHU Electrical Solution" description="ASHU Electrical Solution provides electrical services in Addis Ababa, including office renovation, electrical installation, fit-out, power distribution, CCTV, fire alarm, HVAC support, and technical project delivery." canonical="https://ashuelectricalsolution.com/services" />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Services" title="Electrical services in Addis Ababa" description="ASHU Electrical Solution helps businesses, offices, and institutions with electrical contracting, building fit-out, renovation, low-current systems, power installation, and technical project execution across Addis Ababa and Ethiopia. We support projects requiring electrical installation, CCTV, fire alarm, power distribution, and secure technical coordination." />

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
