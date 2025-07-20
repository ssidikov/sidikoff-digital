'use client'

import { usePathname } from 'next/navigation'

interface HreflangLinksProps {
  baseUrl?: string
}

const HreflangLinks: React.FC<HreflangLinksProps> = ({ 
  baseUrl = 'https://sidikoff.com'
}) => {
  const pathname = usePathname()
  
  // Remove any existing locale prefix from the path
  const cleanPath = pathname.replace(/^\/(en|ru)/, '') || '/'
  
  const hreflangLinks = [
    {
      hreflang: 'fr',
      href: `${baseUrl}${cleanPath}`,
    },
    {
      hreflang: 'en', 
      href: `${baseUrl}/en${cleanPath}`,
    },
    {
      hreflang: 'ru',
      href: `${baseUrl}/ru${cleanPath}`,
    },
    {
      hreflang: 'x-default',
      href: `${baseUrl}${cleanPath}`,
    },
  ]

  return (
    <>
      {hreflangLinks.map(({ hreflang, href }) => (
        <link
          key={hreflang}
          rel="alternate"
          hrefLang={hreflang}
          href={href}
        />
      ))}
    </>
  )
}

export default HreflangLinks
