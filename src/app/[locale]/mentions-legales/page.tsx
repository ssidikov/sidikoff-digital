import { Metadata } from 'next'
import { Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import { PremiumLegalTemplate } from '@/components/ui/PremiumLegalTemplate'

interface Props {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return {
    title: `${dict.legal.title} | SIDIKOFF DIGITAL- Agence Web`,
    description:
      'Mentions légales et informations légales de Sidikoff, agence web spécialisée dans la création de sites internet et applications.',
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com'}/${locale === 'fr' ? '' : locale + '/'}mentions-legales`,
    },
  }
}

export default async function MentionsLegalesPage({ params }: Props) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return (
    <PremiumLegalTemplate title={dict.legal.title}>
      {/* Company Information */}
      <section>
        <h2>{dict.legal.company_info_title}</h2>
        <ul>
          <li>
            <strong>{dict.legal.company_name_label} :</strong> {dict.legal.company_name}
          </li>
          <li>
            <strong>{dict.legal.company_type_label} :</strong> {dict.legal.company_type}
          </li>
          <li>
            <strong>{dict.legal.siren_label} :</strong> {dict.legal.siren}
          </li>
          <li>
            <strong>{dict.legal.address_label} :</strong> {dict.legal.address}
          </li>
          <li>
            <strong>{dict.legal.phone_label} :</strong>{' '}
            <a href={`tel:${dict.legal.phone.replace(/\s+/g, '')}`}>{dict.legal.phone}</a>
          </li>
          <li>
            <strong>{dict.legal.email_label} :</strong>{' '}
            <a href={`mailto:${dict.legal.email}`}>{dict.legal.email}</a>
          </li>
        </ul>
      </section>

      {/* Publication Director */}
      <section>
        <h2>{dict.legal.director_title}</h2>
        <p>{dict.legal.director_name}</p>
      </section>

      {/* Hosting */}
      <section>
        <h2>{dict.legal.hosting_title}</h2>
        <ul>
          <li>
            <strong>{dict.legal.host_label} :</strong> {dict.legal.host}
          </li>
          <li>
            <strong>{dict.legal.host_address_label} :</strong> {dict.legal.host_address}
          </li>
          <li>
            <strong>{dict.legal.host_website_label} :</strong>{' '}
            <a
              href={`https://${dict.legal.host_website}`}
              target='_blank'
              rel='noopener noreferrer'>
              {dict.legal.host_website}
            </a>
          </li>
        </ul>
      </section>

      {/* Intellectual Property */}
      <section>
        <h2>{dict.legal.ip_title}</h2>
        <p>{dict.legal.ip_text}</p>
      </section>

      {/* Data Protection */}
      <section>
        <h2>{dict.legal.data_title}</h2>
        <p>{dict.legal.data_text}</p>
      </section>

      {/* Cookies */}
      <section>
        <h2>{dict.legal.cookies_title}</h2>
        <p>{dict.legal.cookies_text}</p>
      </section>
    </PremiumLegalTemplate>
  )
}
