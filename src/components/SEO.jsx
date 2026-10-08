import { useEffect } from 'react'

const DEFAULT_TITLE = 'ASHU Electrical Solution | Electrical Contractor in Addis Ababa, Ethiopia'
const DEFAULT_DESCRIPTION =
  'ASHU Electrical Solution provides electrical contracting, office renovation, fit-out, power installation, maintenance, and technical services in Addis Ababa, Ethiopia.'
const DEFAULT_IMAGE = 'https://ashuelectricalsolution.com/favicon.svg'

function ensureMeta(selector, attributes) {
  let tag = document.head.querySelector(selector)

  if (!tag) {
    tag = document.createElement('meta')
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'property') tag.setAttribute('property', value)
      else if (key === 'name') tag.setAttribute('name', value)
      else tag.setAttribute(key, value)
    })
    document.head.appendChild(tag)
  }

  return tag
}

export default function SEO({ title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION, canonical, image = DEFAULT_IMAGE }) {
  useEffect(() => {
    const siteUrl = canonical || 'https://ashuelectricalsolution.com/'
    const resolvedImage = /^https?:\/\//i.test(image) ? image : new URL(image, siteUrl).toString()

    document.title = title

    const descriptionTag = document.querySelector('meta[name="description"]') || document.createElement('meta')
    descriptionTag.setAttribute('name', 'description')
    descriptionTag.setAttribute('content', description)
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(descriptionTag)

    const robotsTag = document.querySelector('meta[name="robots"]') || document.createElement('meta')
    robotsTag.setAttribute('name', 'robots')
    robotsTag.setAttribute(
      'content',
      'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    )
    if (!document.querySelector('meta[name="robots"]')) document.head.appendChild(robotsTag)

    const keywordsTag = document.querySelector('meta[name="keywords"]') || document.createElement('meta')
    keywordsTag.setAttribute('name', 'keywords')
    keywordsTag.setAttribute(
      'content',
      'ASHU Electrical Solution, electrical contractor in Addis Ababa, electrical services Ethiopia, office renovation Addis Ababa, fit-out contractor, electrical installation, commercial electrical, industrial electrical, power systems, security systems, generator installation, low current systems',
    )
    if (!document.querySelector('meta[name="keywords"]')) document.head.appendChild(keywordsTag)

    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link')
    canonicalLink.setAttribute('rel', 'canonical')
    canonicalLink.setAttribute('href', siteUrl)
    if (!document.querySelector('link[rel="canonical"]')) document.head.appendChild(canonicalLink)

    const ogTitle = ensureMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    ogTitle.setAttribute('content', title)

    const ogDescription = ensureMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    ogDescription.setAttribute('content', description)

    const ogUrl = ensureMeta('meta[property="og:url"]', { property: 'og:url', content: siteUrl })
    ogUrl.setAttribute('content', siteUrl)

    const ogType = ensureMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    ogType.setAttribute('content', 'website')

    const ogSiteName = ensureMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'ASHU Electrical Solution' })
    ogSiteName.setAttribute('content', 'ASHU Electrical Solution')

    const ogImage = ensureMeta('meta[property="og:image"]', { property: 'og:image', content: resolvedImage })
    ogImage.setAttribute('content', resolvedImage)

    const twitterCard = ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    twitterCard.setAttribute('content', 'summary_large_image')

    const twitterImage = ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: resolvedImage })
    twitterImage.setAttribute('content', resolvedImage)

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${siteUrl}#organization`,
          name: 'ASHU Electrical Solution',
          url: siteUrl,
          logo: 'https://ashuelectricalsolution.com/favicon.svg',
          telephone: '+251 913 312 828',
          email: 'ashutame1216@gmail.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Addis Ababa',
            addressCountry: 'Ethiopia',
          },
          areaServed: ['Addis Ababa', 'Ethiopia'],
        },
        {
          '@type': 'LocalBusiness',
          '@id': `${siteUrl}#localbusiness`,
          name: 'ASHU Electrical Solution',
          image: resolvedImage,
          url: siteUrl,
          description,
          telephone: '+251 913 312 828',
          email: 'ashutame1216@gmail.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Addis Ababa',
            addressCountry: 'Ethiopia',
          },
          areaServed: ['Addis Ababa', 'Ethiopia'],
          serviceType: [
            'Electrical contractor in Addis Ababa',
            'Office renovation',
            'Electrical installation',
            'Fit-out services',
            'Security systems',
            'Technical services',
          ],
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '+251 913 312 828',
              contactType: 'customer service',
              areaServed: 'ET',
              availableLanguage: ['English', 'Amharic'],
            },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': `${siteUrl}#website`,
          name: 'ASHU Electrical Solution',
          url: siteUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        },
      ],
    }

    let schemaTag = document.head.querySelector('script[data-schema="ashu"]')
    if (!schemaTag) {
      schemaTag = document.createElement('script')
      schemaTag.setAttribute('type', 'application/ld+json')
      schemaTag.setAttribute('data-schema', 'ashu')
      document.head.appendChild(schemaTag)
    }
    schemaTag.textContent = JSON.stringify(jsonLd)
  }, [title, description, canonical, image])

  return null
}
