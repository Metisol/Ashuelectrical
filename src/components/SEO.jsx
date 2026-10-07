import { useEffect } from 'react'

export default function SEO({ title, description, canonical }) {
  useEffect(() => {
    document.title = title

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) metaDescription.setAttribute('content', description)

    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link')
    canonicalLink.setAttribute('rel', 'canonical')
    canonicalLink.setAttribute('href', canonical)
    if (!document.querySelector('link[rel="canonical"]')) document.head.appendChild(canonicalLink)

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta')
    ogTitle.setAttribute('property', 'og:title')
    ogTitle.setAttribute('content', title)
    if (!document.querySelector('meta[property="og:title"]')) document.head.appendChild(ogTitle)

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta')
    ogDescription.setAttribute('property', 'og:description')
    ogDescription.setAttribute('content', description)
    if (!document.querySelector('meta[property="og:description"]')) document.head.appendChild(ogDescription)

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta')
    ogUrl.setAttribute('property', 'og:url')
    ogUrl.setAttribute('content', canonical)
    if (!document.querySelector('meta[property="og:url"]')) document.head.appendChild(ogUrl)
  }, [title, description, canonical])

  return null
}
