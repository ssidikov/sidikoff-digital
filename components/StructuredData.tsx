'use client'

import Script from 'next/script'
import {
  generateLocalBusinessSchema,
  generateWebsiteSchema,
  generateOrganizationSchema,
  generatePersonSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/seo'

interface StructuredDataProps {
  type?: 'business' | 'website' | 'organization' | 'person' | 'webpage' | 'breadcrumb' | 'faq' | 'all'
  customData?: Record<string, unknown>
  pageData?: {
    name: string
    description: string
    url: string
    datePublished?: string
    dateModified?: string
    locale: string
  }
  breadcrumbs?: Array<{ name: string; url: string }>
  faqs?: Array<{ question: string; answer: string }>
}

export default function StructuredData({
  type = 'all',
  customData,
  pageData,
  breadcrumbs,
  faqs,
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

  if ((type === 'breadcrumb' || type === 'all') && breadcrumbs) {
    schemas.push(generateBreadcrumbSchema(breadcrumbs))
  }

  if ((type === 'faq' || type === 'all') && faqs) {
    schemas.push(generateFAQSchema(faqs))
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
