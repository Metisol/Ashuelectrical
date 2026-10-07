import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { services } from '../data/services'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  const relatedProjects = projects.filter((project) => project.serviceSlugs?.includes(service.slug))

  return (
    <>
      <SEO
        title={`${service.name} | ASHU Electrical Solution`}
        description={service.fullDescription}
        canonical={`https://ashuelectricalsolution.com/services/${service.slug}`}
      />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Link to="/services" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#b30000] transition hover:gap-3">
          <ArrowLeft className="h-4 w-4" /> All services
        </Link>

        <section className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeader eyebrow={service.category} title={service.name} description={service.fullDescription} />
            <Link to="/consultation" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#e10600] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(225,6,0,0.2)] transition hover:bg-[#b30000]">
              Discuss this service <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <figure className="group relative h-[360px] overflow-hidden rounded-[2rem] border border-[#f0d8d8] shadow-[0_22px_60px_rgba(177,0,0,0.12)] sm:h-[460px]">
            <img src={service.image} alt={service.imageAlt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#b30000]/65 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-6 bottom-6 flex flex-col items-start gap-2 text-sm font-semibold text-white sm:flex-row sm:items-center sm:justify-between">
              <span>{service.name}</span>
              <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#b30000]">Representative image</span>
            </figcaption>
          </figure>
        </section>

        <section className="mt-16 border-t border-[#f0d8d8] pt-12">
          <SectionHeader eyebrow="Scope of work" title="What the service includes" description="The exact scope is coordinated around your site, project requirements, and technical specifications." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.workIncludes.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-[#f0d8d8] bg-white/85 p-5 shadow-[0_10px_28px_rgba(177,0,0,0.06)]">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#e10600]" />
                <span className="text-sm font-medium leading-6 text-[#b30000]">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {relatedProjects.length > 0 && (
          <section className="mt-16 border-t border-[#f0d8d8] pt-12">
            <SectionHeader eyebrow="Related work" title="Project references" description={`Selected project references connected to ${service.name.toLowerCase()}.`} />
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedProjects.slice(0, 3).map((project) => <ProjectCard key={project.title} project={project} />)}
            </div>
          </section>
        )}
      </main>
    </>
  )
}