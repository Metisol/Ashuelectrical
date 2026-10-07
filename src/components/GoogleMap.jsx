import { ExternalLink } from 'lucide-react'

const mapLink = 'https://maps.app.goo.gl/HbW8Zatxn19pKMA29?g_st=it'
const mapEmbedUrl = 'https://www.google.com/maps?q=9.0163626,38.8241219&output=embed'

export default function GoogleMap({ compact = false }) {
  return (
    <div className={compact ? 'mt-4 overflow-hidden rounded-xl border border-[#f0d8d8] bg-white' : 'mt-10 overflow-hidden rounded-[2rem] border border-[#f0d8d8] bg-white shadow-[0_18px_36px_rgba(177,0,0,0.05)]'}>
      {!compact && (
        <div className="flex flex-col justify-between gap-3 p-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-[#6b0000]">Find us</h2>
            <p className="mt-1 text-sm text-[#8a1c1c]">Addis Ababa, Ethiopia</p>
          </div>
          <a
            href={mapLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 self-start rounded-full border border-[#f0d6d6] bg-white px-5 py-3 text-sm font-semibold text-[#6b0000] transition hover:border-[#d6a6a6] hover:bg-[#fff7f7] sm:self-auto"
          >
            Open in Google Maps
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      )}
      {compact && (
        <a
          href={mapLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#6b0000] hover:text-[#b30000]"
        >
          Open in Google Maps
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}
      <div className="relative">
        <iframe
          title="ASHU Electrical Solution location on Google Maps"
          src={mapEmbedUrl}
          className={compact ? 'h-36 w-full border-0 sm:h-40' : 'h-72 w-full border-0 sm:h-96'}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <a
          href={mapLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Open the original ASHU Electrical Solution location in Google Maps"
          title="Open this location in Google Maps"
          className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#e10600]"
        />
      </div>
    </div>
  )
}
