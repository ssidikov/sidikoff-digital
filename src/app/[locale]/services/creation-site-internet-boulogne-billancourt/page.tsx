import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils';
import { Metadata } from 'next'
import { Locale } from '@/lib/i18n'

import { Section } from '@/components/ui'
import CTAButton from '@/components/ui/CTAButton'

interface BoulogneBillancourtPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({
  params,
}: BoulogneBillancourtPageProps): Promise<Metadata> {
  const { locale } = await params

  const title = 'Création site internet Boulogne-Billancourt – Agence web spécialisée'

  const description = 'SIDIKOFF DIGITAL, agence web 92, est spécialisée dans la création de sites Internet et le webmarketing. Contactez-nous dès maintenant.'

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: createCanonicalUrl('services/creation-site-internet-boulogne-billancourt', locale),
      languages: generateAlternateUrls('services/creation-site-internet-boulogne-billancourt'),
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sidikoff.com'}/${
        ''
      }services/creation-site-internet-boulogne-billancourt`,
      siteName: 'SIDIKOFF Digital',
      locale: 'fr_FR',
      images: [
        {
          url: `${
            process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sidikoff.com'
          }/images/og-creation-sites-web.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        `${
          process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sidikoff.com'
        }/images/og-creation-sites-web.jpg`,
      ],
    },
    keywords:
      'création site internet Boulogne-Billancourt, agence web Boulogne-Billancourt, site vitrine Boulogne-Billancourt, site e-commerce Boulogne-Billancourt, référencement local Boulogne-Billancourt, développement web Hauts-de-Seine, site internet professionnel, site responsive, SEO local, design moderne, Core Web Vitals, multilingue',
  }
}

export default async function BoulogneBillancourtPage({ params }: BoulogneBillancourtPageProps) {
  const { locale } = await params

  const content = {
    fr: {
      h1: 'Création de site internet professionnel à Boulogne-Billancourt (92)',
      intro:
        'Vous êtes une entreprise, un artisan ou une startup à Boulogne-Billancourt et souhaitez développer votre présence en ligne ? Notre agence web spécialisée accompagne les entreprises dans la création de sites internet sur mesure, modernes, performants et optimisés pour le SEO local à Boulogne-Billancourt. Que ce soit pour un site vitrine, un site e-commerce ou un site multilingue, nous avons la solution pour booster votre visibilité et attirer de nouveaux clients.',
      why_title:
        'Pourquoi un site internet est essentiel pour votre entreprise à Boulogne-Billancourt',
      why_points: [
        'Présenter vos services, produits ou offres locales',
        'Faciliter la prise de contact, les réservations ou commandes en ligne',
        'Renforcer votre visibilité sur Google et Google Maps dans les Hauts-de-Seine',
        'Offrir une expérience utilisateur moderne et mobile-friendly pour vos clients',
      ],
      services_title: 'Nos services de création de site web à Boulogne-Billancourt',
      showcase_title: 'Site vitrine professionnel',
      showcase_desc:
        'Présentez votre entreprise, vos horaires, votre adresse et vos valeurs avec un design moderne et responsive.',
      ecommerce_title: 'Site e-commerce performant',
      ecommerce_desc:
        'Vente en ligne de produits, services ou abonnements avec paiement sécurisé, catalogue intuitif et interface simple à gérer.',
      features_title: 'Fonctionnalités personnalisées',
      features: [
        'Site multilingue (FR/EN) pour toucher une clientèle locale et internationale',
        'Gestion de contenu facile via CMS',
        'Optimisation SEO locale et référencement Google Maps',
        'Intégration de blog ou actualités pour améliorer la visibilité',
      ],
      seo_title: 'SEO local Boulogne-Billancourt',
      seo_desc:
        'Optimisation complète des contenus, balises meta, vitesse, Core Web Vitals, et stratégie de mots-clés ciblant Boulogne-Billancourt et Île-de-France.',
      design_title: 'Design & expérience utilisateur',
      design_desc:
        'Navigation fluide, responsive design, visuels attractifs et conversion optimisée pour transformer vos visiteurs en clients.',
      maintenance_title: 'Maintenance & support technique',
      maintenance_desc:
        'Mises à jour régulières, sécurité renforcée, sauvegardes automatiques et assistance continue pour assurer la performance de votre site.',
      advantages_title: "Avantages d'un site web optimisé pour Boulogne-Billancourt",
      advantages: [
        'Visibilité accrue dans les recherches locales',
        'Clients mieux informés et fidélisés grâce à un site clair et intuitif',
        'Gain de temps grâce aux fonctionnalités automatisées',
        'Image professionnelle et moderne de votre entreprise',
        'Solution multilingue pour attirer une clientèle internationale',
      ],
      portfolio_title: 'Portfolio / Exemples de projets',
      portfolio_desc:
        'Découvrez nos réalisations pour des entreprises à Boulogne-Billancourt et dans les Hauts-de-Seine.',
      faq_title: 'FAQ – Création de site internet Boulogne-Billancourt',
      faq: [
        {
          question: 'Quel est le prix pour créer un site à Boulogne-Billancourt ?',
          answer:
            'Le tarif dépend du type de site et des fonctionnalités souhaitées. Contactez-nous pour un devis gratuit et personnalisé.',
        },
        {
          question: 'Combien de temps pour créer un site web ?',
          answer: 'En moyenne 4 à 8 semaines, selon la complexité du projet et le contenu fourni.',
        },
        {
          question: 'Mon site sera-t-il visible sur Google ?',
          answer:
            'Oui. Tous nos sites sont optimisés pour le SEO local Boulogne-Billancourt et apparaissent en tête des résultats Google.',
        },
        {
          question: 'Puis-je gérer mon site moi-même après sa mise en ligne ?',
          answer:
            'Oui. Nous fournissons un CMS simple et une formation pour mettre à jour vos textes, images et contenus.',
        },
      ],
      contact_title: 'Demandez votre devis gratuit',
      contact_desc:
        'Boostez votre visibilité à Boulogne-Billancourt (92) avec un site web moderne, performant et multilingue, conçu pour attirer de nouveaux clients et renforcer votre image.',
      cta_quote: 'Demander un devis gratuit',
      cta_portfolio: 'Voir nos réalisations',
      cta_pricing: 'Consulter nos tarifs',
    },
  }

  const t = content.fr

  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section */}
      <Section className='pt-24 pb-12'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight'>
              {t.h1}
            </h1>
            <p className='text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed'>
              {t.intro}
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <CTAButton href='/contact' variant='primary' size='lg'>
                {t.cta_quote}
              </CTAButton>
              <CTAButton href='/projects' variant='secondary' size='lg'>
                {t.cta_portfolio}
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Website Section */}
      <Section className='py-16 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-8 text-center'>
              {t.why_title}
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              {t.why_points.map((point, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full mt-3 shrink-0' />
                  <p className='text-lg text-muted-foreground'>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-12 text-center'>
              {t.services_title}
            </h2>

            <div className='grid lg:grid-cols-2 gap-8 mb-12'>
              <div className='bg-card border rounded-lg p-8'>
                <h3 className='text-2xl font-bold text-foreground mb-4'>{t.showcase_title}</h3>
                <p className='text-muted-foreground mb-6'>{t.showcase_desc}</p>
              </div>

              <div className='bg-card border rounded-lg p-8'>
                <h3 className='text-2xl font-bold text-foreground mb-4'>{t.ecommerce_title}</h3>
                <p className='text-muted-foreground mb-6'>{t.ecommerce_desc}</p>
              </div>
            </div>

            <div className='bg-card border rounded-lg p-8 mb-8'>
              <h3 className='text-2xl font-bold text-foreground mb-6'>{t.features_title}</h3>
              <div className='grid md:grid-cols-2 gap-4'>
                {t.features.map((feature, index) => (
                  <div key={index} className='flex items-start gap-3'>
                    <div className='w-2 h-2 bg-primary rounded-full mt-3 shrink-0' />
                    <p className='text-muted-foreground'>{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-8'>
              <div className='bg-card border rounded-lg p-6'>
                <h3 className='text-xl font-bold text-foreground mb-4'>{t.seo_title}</h3>
                <p className='text-muted-foreground'>{t.seo_desc}</p>
              </div>

              <div className='bg-card border rounded-lg p-6'>
                <h3 className='text-xl font-bold text-foreground mb-4'>{t.design_title}</h3>
                <p className='text-muted-foreground'>{t.design_desc}</p>
              </div>

              <div className='bg-card border rounded-lg p-6'>
                <h3 className='text-xl font-bold text-foreground mb-4'>{t.maintenance_title}</h3>
                <p className='text-muted-foreground'>{t.maintenance_desc}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Advantages Section */}
      <Section className='py-16 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-8 text-center'>
              {t.advantages_title}
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              {t.advantages.map((advantage, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-primary rounded-full mt-3 shrink-0' />
                  <p className='text-lg text-muted-foreground'>{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              {t.portfolio_title}
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>{t.portfolio_desc}</p>
            <CTAButton href='/projects' variant='primary' size='lg'>
              {t.cta_portfolio}
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className='py-16 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-12 text-center'>
              {t.faq_title}
            </h2>
            <div className='space-y-6'>
              {t.faq.map((item, index) => (
                <div key={index} className='bg-card border rounded-lg p-6'>
                  <h3 className='text-xl font-semibold text-foreground mb-3'>{item.question}</h3>
                  <p className='text-muted-foreground'>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact CTA Section */}
      <Section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              {t.contact_title}
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>{t.contact_desc}</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <CTAButton href='/contact' variant='primary' size='lg'>
                {t.cta_quote}
              </CTAButton>
              <CTAButton href='/projects' variant='secondary' size='lg'>
                {t.cta_portfolio}
              </CTAButton>
              <CTAButton href='/tarifs' variant='outline' size='lg'>
                {t.cta_pricing}
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>

      {/* SEO Links */}
    </div>
  )
}
