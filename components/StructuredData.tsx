'use client'

import Script from 'next/script'
import {
  generateLocalBusinessSchema,
  generateWebsiteSchema,
  generateOrganizationSchema,
} from '@/lib/seo'

interface StructuredDataProps {
  type?: 'business' | 'website' | 'organization' | 'all'
  customData?: Record<string, any>
}

export default function StructuredData({ type = 'all', customData }: StructuredDataProps) {
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
