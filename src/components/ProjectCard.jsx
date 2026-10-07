const projectImages = {
  Construction: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
  Renovation: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
  Electrical: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
  Lighting: 'https://images.unsplash.com/photo-1598528738936-c50861cc75a9?auto=format&fit=crop&w=1000&q=80',
  Cabling: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
  'CCTV / Security': 'https://images.unsplash.com/photo-1589935447067-5531094415d1?auto=format&fit=crop&w=1000&q=80',
}

export default function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-[#f2d6d6] bg-white shadow-[0_12px_30px_rgba(177,0,0,0.05)]">
      <div className="group relative flex h-52 items-end justify-between overflow-hidden bg-[#f7eded] p-5">
        <img
          src={projectImages[project.category] || projectImages.Construction}
          alt={`Representative ${project.category.toLowerCase()} project image`}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#b30000]/65 via-transparent to-white/10" />
        <div className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#b30000]">
          Representative image
        </div>
        <div className="relative rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#b30000] backdrop-blur-sm">
          {project.category}
        </div>
        {project.period && (
          <div className="relative rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs font-semibold text-[#b30000]">
            {project.period}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-[#e10600]">
          <span>{project.location}</span>
          <span>{project.client}</span>
        </div>
        <h3 className="text-xl font-bold text-[#6b0000]">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#8a1c1c]">{project.description}</p>
      </div>
    </article>
  )
}
