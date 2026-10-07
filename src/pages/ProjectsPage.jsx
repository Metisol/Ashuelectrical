import { useMemo, useState } from 'react'
import SEO from '../components/SEO'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import { projects, projectCategories } from '../data/projects'

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects
    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <>
      <SEO title="Projects | ASHU Electrical Solution" description="Review ASHU Electrical Solution project references across construction, renovation, electrical, lighting, security and technical infrastructure work." canonical="https://ashuelectricalsolution.com/projects" />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Projects" title="Project portfolio and verified references" description="The following project references reflect construction, renovation and technical execution across commercial and institutional settings." />

        <div className="mt-10 flex flex-wrap gap-3">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                activeCategory === category
                  ? 'bg-[#e10600] text-white shadow-[0_12px_24px_rgba(225,6,0,0.18)]'
                  : 'border border-[#f1d3d3] bg-white text-[#6b0000] hover:border-[#d9abab]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </main>
    </>
  )
}
