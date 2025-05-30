'use client'

import Script from 'next/script'
import {
  generateLocalBusinessSchema,
  generateWebsiteSchema,
  generateOrganizationSchema,
  generatePersonSchema,
  generateWebPageSchema,
} from '@/lib/seo'

interface StructuredDataProps {
  type?: 'business' | 'website' | 'organization' | 'person' | 'webpage' | 'all'
  customData?: Record<string, any>
  pageData?: {
    name: string
    description: string
    url: string
    datePublished?: string
    dateModified?: string
  }
}

export default function StructuredData({
  type = 'all',
  customData,
  pageData,
}: StructuredDataProps) {
  const schemas = []

  if (type === 'business' || type === 'all') {
    schemas.push(generateLocalBusinessSchema())
  }

  if (type === 'website' || type === 'all') {
    schemas.push(generateWebsiteSchema())
  }

  if (type === 'organization' || type === 'all') {
    schemas.push(generateOrganizationSchema())
  }

  if (type === 'person' || type === 'all') {
    schemas.push(generatePersonSchema())
  }

  if ((type === 'webpage' || type === 'all') && pageData) {
    schemas.push(generateWebPageSchema(pageData))
  }

  if (customData) {
    schemas.push(customData)
  }
  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`structured-data-${index}`}
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  )
}
