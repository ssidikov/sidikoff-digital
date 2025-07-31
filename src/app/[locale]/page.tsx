import Script from 'next/script'
import { 
  businessLocations, 
  generateLocalBusinessSchema, 
  organizationSchema,
  generateFrenchSEOMetadata 
} from '@/lib/seo-utils'
import { getDictionary } from '@/lib/dictionaries'
import { Hero, Services, Pricing, Portfolio, FAQ, Contact } from '@/sections'

import { Locale } from '@/lib/i18n'

interface HomePageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: HomePageProps) {
  const { locale } = await params
  return generateFrenchSEOMetadata(locale)
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  // Generate schemas for both locations
  const parisLocation = businessLocations.find((loc) => loc.address.addressLocality === 'Paris')!
  const toulouseLocation = businessLocations.find(
    (loc) => loc.address.addressLocality === 'Toulouse'
  )!

  const parisSchema = generateLocalBusinessSchema(parisLocation)
  const toulouseSchema = generateLocalBusinessSchema(toulouseLocation)

  return (
    <>
      <Script
        id='structured-data-org'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id='structured-data-paris'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(parisSchema) }}
      />
      <Script
        id='structured-data-toulouse'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toulouseSchema) }}
      />

      <main>
        <Hero dict={dict.hero} common={dict.common} locale={locale} />
        <Services dictionary={dict.services} locale={locale} />

        {/* Local SEO Section */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-8 text-[#112D4E]'>
                <span className='sr-only'>
                  {locale === 'fr'
                    ? 'Agence Web Paris & Toulouse'
                    : locale === 'en'
                      ? 'Web Agency Paris & Toulouse'
                      : 'Веб-агентство Париж и Тулуза'}
                </span>
                {locale === 'fr'
                  ? 'Nos Localisations'
                  : locale === 'en'
                    ? 'Our Locations'
                    : 'Наши Локации'}
              </h2>
              <p className='text-lg md:text-xl text-gray-600 mb-8'>
                {locale === 'fr'
                  ? 'Basés à Paris et Toulouse, nous accompagnons les entreprises françaises dans leur transformation digitale avec une approche locale et personnalisée.'
                  : locale === 'en'
                    ? 'Based in Paris and Toulouse, we support French companies in their digital transformation with a local and personalized approach.'
                    : 'Базируясь в Париже и Тулузе, мы помогаем французским компаниям в их цифровой трансформации с локальным и персонализированным подходом.'}
              </p>

              <div className='grid md:grid-cols-2 gap-8 mb-12'>
                <div className='bg-white p-6 rounded-xl shadow-lg'>
                  <div className='text-4xl mb-4'>🗼</div>
                  <h3 className='text-xl font-bold mb-3 text-[#112D4E]'>
                    {locale === 'fr'
                      ? 'Paris - Capitale'
                      : locale === 'en'
                        ? 'Paris - Capital'
                        : 'Париж - Столица'}
                  </h3>
                  <p className='text-gray-600'>
                    {locale === 'fr'
                      ? "Au cœur de l'innovation française, nous servons Paris et toute l'Île-de-France avec notre expertise en développement web moderne."
                      : locale === 'en'
                        ? 'At the heart of French innovation, we serve Paris and the entire Île-de-France region with our expertise in modern web development.'
                        : 'В сердце французских инноваций мы обслуживаем Париж и весь регион Иль-де-Франс с нашим опытом в современной веб-разработке.'}
                  </p>
                </div>

                <div className='bg-white p-6 rounded-xl shadow-lg'>
                  <div className='text-4xl mb-4'>🌹</div>
                  <h3 className='text-xl font-bold mb-3 text-[#112D4E]'>
                    {locale === 'fr'
                      ? 'Toulouse - Ville Rose'
                      : locale === 'en'
                        ? 'Toulouse - Pink City'
                        : 'Тулуза - Розовый город'}
                  </h3>
                  <p className='text-gray-600'>
                    {locale === 'fr'
                      ? "Ville européenne de l'aéronautique et du spatial, Toulouse nous inspire pour créer des solutions web innovantes et technologiques."
                      : locale === 'en'
                        ? 'European city of aeronautics and space, Toulouse inspires us to create innovative and technological web solutions.'
                        : 'Европейский город авиации и космоса, Тулуза вдохновляет нас создавать инновационные и технологические веб-решения.'}
                  </p>
                </div>
              </div>

              <div className='text-center'>
                <p className='text-sm text-gray-500 mb-4'>
                  {locale === 'fr'
                    ? 'Zones de couverture : Paris, Toulouse, et toute la France'
                    : locale === 'en'
                      ? 'Coverage areas: Paris, Toulouse, and all of France'
                      : 'Зоны покрытия: Париж, Тулуза и вся Франция'}
                </p>
              </div>
            </div>
          </div>
        </section>

        <Portfolio locale={locale} dictionary={dict.portfolio} />
        <Pricing locale={locale} />
        <FAQ locale={locale} dictionary={dict.faq} />
        <Contact dictionary={dict.contact} locale={locale} className='' />
      </main>
    </>
  )
}
