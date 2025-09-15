import { Metadata } from 'next'
import { Pricing } from '@/sections'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import LocaleProvider from '@/components/LocaleProvider'
import SEOLinks from '@/components/SEOLinks'

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

  return (
    <>
      <SEOLinks locale={locale} />
      <LocaleProvider locale={locale}>
        <div className='min-h-screen'>
          <main className='m-0 p-0'>
            <Pricing locale={locale} className='pt-[80px] md:pt-[100px]' />
          </main>
        </div>
      </LocaleProvider>
    </>
  )
}
