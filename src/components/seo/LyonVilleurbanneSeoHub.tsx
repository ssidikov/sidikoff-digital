import Link from 'next/link'
import { ArrowRight, BarChart3, ExternalLink, MapPin, ShieldCheck } from 'lucide-react'

const relatedPages = [
  {
    href: '/services/agence-web-lyon',
    label: 'Agence web Lyon',
    text: 'Création de site, refonte et acquisition locale pour PME lyonnaises.',
  },
  {
    href: '/services/creation-site-internet-lyon',
    label: 'Création site internet Lyon',
    text: 'Site vitrine, e-commerce et pages de service indexables.',
  },
  {
    href: '/services/agence-web-villeurbanne',
    label: 'Agence web Villeurbanne',
    text: 'Proximité avec adresse principale à Villeurbanne.',
  },
  {
    href: '/services/seo-lyon',
    label: 'SEO Lyon',
    text: 'Audit technique, contenu local et suivi GSC.',
  },
  {
    href: '/services/site-vitrine-lyon',
    label: 'Site vitrine Lyon',
    text: 'Pages rapides, lisibles et pensées conversion.',
  },
]

const proofItems = [
  {
    icon: MapPin,
    title: 'Base locale vérifiable',
    text: 'Adresse principale : 73 Rue Racine, 69100 Villeurbanne. Zone cible : Lyon, Villeurbanne et métropole.',
  },
  {
    icon: BarChart3,
    title: 'Mesure GSC',
    text: 'Priorisation par impressions, clics, CTR et position moyenne. Aucun mot-clé poussé sans données.',
  },
  {
    icon: ShieldCheck,
    title: 'Schema propre',
    text: 'Entités LocalBusiness, ProfessionalService, Person, Article, BreadcrumbList et Service sans schema FAQ commercial.',
  },
]

interface LyonVilleurbanneSeoHubProps {
  currentPath?: string
  className?: string
}

export function LyonVilleurbanneSeoHub({ currentPath, className = '' }: LyonVilleurbanneSeoHubProps) {
  const links = relatedPages.filter((page) => page.href !== currentPath)

  return (
    <section className={`bg-[#060812] py-14 md:py-20 text-white border-t border-white/10 ${className}`}>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-8 lg:grid-cols-[0.95fr_1.25fr] lg:items-start'>
          <div>
            <p className='mb-3 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-cyan-400'>
              Lyon / Villeurbanne (69)
            </p>
            <h2 className='max-w-xl text-3xl font-bold tracking-tight text-white md:text-4xl leading-tight'>
              Un cluster local construit pour convertir les recherches proches achat.
            </h2>
            <p className='mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 font-light'>
              Le maillage relie les pages à plus forte intention pour aider Google et les visiteurs à
              comprendre l&apos;offre locale : agence web, création de site, SEO, refonte et site vitrine.
            </p>
            <div className='mt-6'>
              <Link
                href='/projects'
                className='inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white hover:text-black'>
                Voir les projets
                <ExternalLink className='h-3.5 w-3.5' aria-hidden='true' />
              </Link>
            </div>
          </div>

          <div className='grid gap-4 md:grid-cols-3'>
            {proofItems.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className='rounded-2xl border border-white/10 bg-slate-900/40 p-5 backdrop-blur-xl'>
                  <Icon className='mb-3 h-5 w-5 text-cyan-400' aria-hidden='true' />
                  <h3 className='text-sm font-bold text-white'>{item.title}</h3>
                  <p className='mt-2 text-xs leading-relaxed text-gray-400'>{item.text}</p>
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
              className='group rounded-xl border border-white/10 bg-slate-900/40 p-4 transition-all hover:border-cyan-400/40 hover:bg-slate-900/80'>
              <span className='flex items-center justify-between gap-3 text-xs font-bold text-white group-hover:text-cyan-300'>
                {page.label}
                <ArrowRight className='h-3.5 w-3.5 shrink-0 text-gray-400 group-hover:text-cyan-400 transition-colors' aria-hidden='true' />
              </span>
              <span className='mt-2 block text-xs leading-relaxed text-gray-400 group-hover:text-gray-200'>
                {page.text}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

