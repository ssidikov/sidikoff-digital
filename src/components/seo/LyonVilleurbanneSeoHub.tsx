import Link from 'next/link'
import { ArrowRight, BarChart3, ExternalLink, MapPin, ShieldCheck } from 'lucide-react'

const relatedPages = [
  {
    href: '/services/agence-web-lyon',
    label: 'Agence web Lyon',
    text: 'Creation de site, refonte et acquisition locale pour PME lyonnaises.',
  },
  {
    href: '/services/creation-site-internet-lyon',
    label: 'Creation site internet Lyon',
    text: 'Site vitrine, e-commerce et pages de service indexables.',
  },
  {
    href: '/services/agence-web-villeurbanne',
    label: 'Agence web Villeurbanne',
    text: 'Proximite avec adresse principale a Villeurbanne.',
  },
  {
    href: '/services/seo-lyon',
    label: 'SEO Lyon',
    text: 'Audit technique, contenu local et suivi GSC.',
  },
  {
    href: '/services/site-vitrine-lyon',
    label: 'Site vitrine Lyon',
    text: 'Pages rapides, lisibles et pensees conversion.',
  },
]

const proofItems = [
  {
    icon: MapPin,
    title: 'Base locale verifiable',
    text: 'Adresse principale: 73 Rue Racine, 69100 Villeurbanne. Zone cible: Lyon, Villeurbanne et metropole.',
  },
  {
    icon: BarChart3,
    title: 'Mesure GSC',
    text: 'Priorisation par impressions, clics, CTR et position moyenne. Aucun mot-cle pousse sans donnees.',
  },
  {
    icon: ShieldCheck,
    title: 'Schema propre',
    text: 'Entites LocalBusiness, ProfessionalService, Person, Article, BreadcrumbList et Service sans schema FAQ commercial.',
  },
]

interface LyonVilleurbanneSeoHubProps {
  currentPath?: string
  className?: string
}

export function LyonVilleurbanneSeoHub({ currentPath, className = '' }: LyonVilleurbanneSeoHubProps) {
  const links = relatedPages.filter((page) => page.href !== currentPath)

  return (
    <section className={`bg-white py-14 md:py-18 ${className}`}>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-8 lg:grid-cols-[0.95fr_1.25fr] lg:items-start'>
          <div>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500'>
              Lyon / Villeurbanne
            </p>
            <h2 className='max-w-xl text-3xl font-bold tracking-normal text-slate-950 md:text-4xl'>
              Un cluster local construit pour convertir les recherches proches achat.
            </h2>
            <p className='mt-4 max-w-2xl text-base leading-7 text-slate-600'>
              Le maillage relie les pages a plus forte intention pour aider Google et les visiteurs a
              comprendre l'offre locale: agence web, creation de site, SEO, refonte et site vitrine.
            </p>
            <div className='mt-6'>
              <Link
                href='/projects'
                className='inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white'>
                Voir les projets
                <ExternalLink className='h-4 w-4' aria-hidden='true' />
              </Link>
            </div>
          </div>

          <div className='grid gap-4 md:grid-cols-3'>
            {proofItems.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className='rounded-lg border border-slate-200 bg-slate-50 p-5'>
                  <Icon className='mb-4 h-5 w-5 text-[#FF3E1A]' aria-hidden='true' />
                  <h3 className='text-base font-semibold text-slate-950'>{item.title}</h3>
                  <p className='mt-2 text-sm leading-6 text-slate-600'>{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className='mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4'>
          {links.slice(0, 4).map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className='group rounded-lg border border-slate-200 p-4 transition hover:border-slate-950 hover:bg-slate-950'>
              <span className='flex items-center justify-between gap-3 text-sm font-semibold text-slate-950 group-hover:text-white'>
                {page.label}
                <ArrowRight className='h-4 w-4 shrink-0' aria-hidden='true' />
              </span>
              <span className='mt-2 block text-sm leading-6 text-slate-600 group-hover:text-slate-300'>
                {page.text}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
