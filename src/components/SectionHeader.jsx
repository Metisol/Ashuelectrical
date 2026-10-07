export default function SectionHeader({ eyebrow, title, description, align = 'left', inverse = false }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${inverse ? 'text-[#ffd1d1]' : 'text-[#b30000]'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-black tracking-[-0.06em] md:text-4xl ${inverse ? 'text-white' : 'text-[#6b0000]'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-7 md:text-lg ${inverse ? 'font-medium text-[#ffe8e8]' : 'text-[#8a1c1c]'}`}>{description}</p>
      )}
    </div>
  )
}
