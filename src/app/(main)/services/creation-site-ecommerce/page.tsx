import { Metadata } from 'next'
import common from '@/locales/fr/common.json'
import EcommerceLandingContent from '@/components/EcommerceLandingContent'
import { generatePageMetadata, createCanonicalUrl, generateServiceSchema } from '@/lib/seo-utils'

const PAGE_URL = createCanonicalUrl('services/creation-site-ecommerce', 'fr')

export async function generateMetadata(): Promise<Metadata> {
  const t = common.ecommerce_landing

  return generatePageMetadata(
    t.meta_title,
    t.meta_description,
    '/services/creation-site-ecommerce',
    'fr',
    {
      keywords: t.keywords,
      ogImage: '/images/og/ecommerce-websites.jpg',
      ogType: 'website',
    },
  )
}

const serviceSchema = generateServiceSchema({
  name: 'Création de Site E-commerce Sur Mesure',
  description:
    'Boutiques en ligne performantes : Next.js, React, Shopify, WooCommerce. SEO optimisé, paiement sécurisé, design responsive. À partir de 1 990 € TTC. Devis gratuit.',
  url: PAGE_URL,
  serviceType: 'Création de site e-commerce',
  areaServed: ['France', 'Lyon', 'Paris', 'Villeurbanne'],
  image: 'https://www.sidikoff.com/images/og/ecommerce-websites.jpg',
})

export default function EcommerceLandingPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <EcommerceLandingContent />
    </>
  )
}
