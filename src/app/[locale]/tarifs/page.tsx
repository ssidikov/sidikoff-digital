import { Metadata } from 'next'
import { PricingContent } from '@/sections/Pricing'
import Section from '@/components/ui/Section'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'

interface TarifsPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: TarifsPageProps): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return {
    title: dict?.pricing?.title
      ? `${dict.pricing.title} | Sidikoff Digital`
      : 'Tarifs & Prix - Création de Sites Web | Sidikoff Digital',
    description:
      dict?.pricing?.description ||
      'Découvrez nos tarifs transparents pour la création de sites web. Solutions adaptées à tous les budgets : site vitrine, site professionnel et solutions sur mesure.',
    keywords:
      'tarifs site web, prix création site internet, devis site web, développement web prix, création site vitrine prix',
    openGraph: {
      title: dict?.pricing?.title
        ? `${dict.pricing.title} | Sidikoff Digital`
        : 'Tarifs & Prix - Création de Sites Web | Sidikoff Digital',
      description:
        dict?.pricing?.description ||
        'Découvrez nos tarifs transparents pour la création de sites web. Solutions adaptées à tous les budgets.',
      url: `https://www.sidikoff.com/${locale === 'fr' ? '' : locale + '/'}tarifs`,
      type: 'website',
    },
    alternates: {
      canonical: `https://www.sidikoff.com/${locale === 'fr' ? '' : locale + '/'}tarifs`,
    },
  }
}

export default async function TarifsPage({ params }: TarifsPageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return (
    <Section backgroundImage='/images/prices-bg.webp' className='min-h-screen py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl lg:text-5xl font-bold text-[#112D4E] mb-6'>
            {dict?.pricing?.title || 'Nos Tarifs & Formules'}
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            {dict?.pricing?.subtitle ||
              'Des solutions transparentes et adaptées à vos besoins. Choisissez la formule qui correspond le mieux à votre projet et à votre budget.'}
          </p>
        </div>

        <PricingContent locale={locale} />
      </div>
    </Section>
  )
}
