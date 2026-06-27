'use client'

import React from 'react'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

interface LinkItem {
  href: string
  label: string
}

interface RegionGroup {
  name: string
  links: LinkItem[]
}

const REGIONS: RegionGroup[] = [
  {
    name: 'Métropole de Lyon & Rhône',
    links: [
      { href: '/services/agence-web-lyon', label: 'Agence Web Lyon' },
      { href: '/services/creation-site-internet-lyon', label: 'Création Site Lyon' },
      { href: '/services/seo-lyon', label: 'SEO Lyon' },
      { href: '/services/site-vitrine-lyon', label: 'Site Vitrine Lyon' },
      { href: '/services/react-lyon', label: 'React.js Lyon' },
      { href: '/services/nextjs-lyon', label: 'Next.js Lyon' },
      { href: '/services/wordpress-lyon', label: 'WordPress Lyon' },
      { href: '/services/ecommerce-lyon', label: 'E-commerce Lyon' },
      { href: '/services/developpeur-web-lyon', label: 'Développeur Lyon' },
      { href: '/services/agence-web-villeurbanne', label: 'Agence Villeurbanne' },
      { href: '/services/seo-villeurbanne', label: 'SEO Villeurbanne' },
      { href: '/services/site-vitrine-villeurbanne', label: 'Vitrine Villeurbanne' },
      { href: '/services/refonte-site-villeurbanne', label: 'Refonte Villeurbanne' },
      { href: '/services/agence-web-caluire-et-cuire', label: 'Agence Caluire' },
      { href: '/services/creation-site-web-caluire-et-cuire', label: 'Création Caluire' },
      { href: '/services/seo-caluire', label: 'SEO Caluire' },
      { href: '/services/agence-web-bron', label: 'Agence Bron' },
      { href: '/services/seo-bron', label: 'SEO Bron' },
      { href: '/services/agence-web-vaulx-en-velin', label: 'Vaulx-en-Velin' },
      { href: '/services/agence-web-venissieux', label: 'Vénissieux' },
    ],
  },
  {
    name: 'Paris & Île-de-France',
    links: [
      { href: '/services/agence-web-paris', label: 'Agence Web Paris' },
      { href: '/services/creation-site-internet-paris', label: 'Création Site Paris' },
      { href: '/services/developpeur-web-paris', label: 'Développeur Paris' },
      { href: '/services/seo-paris', label: 'SEO Paris' },
      { href: '/services/wordpress-paris', label: 'WordPress Paris' },
      { href: '/services/react-paris', label: 'React.js Paris' },
      { href: '/services/nextjs-paris', label: 'Next.js Paris' },
      { href: '/services/ecommerce-paris', label: 'E-commerce Paris' },
      { href: '/services/creation-site-internet-paris-16', label: 'Paris 16e' },
      { href: '/services/agence-web-paris-15', label: 'Paris 15e' },
      { href: '/services/agence-web-paris-17', label: 'Paris 17e' },
      { href: '/services/agence-web-paris-14', label: 'Paris 14e' },
      { href: '/services/agence-web-paris-6', label: 'Paris 6e' },
      { href: '/services/agence-web-paris-7', label: 'Paris 7e' },
      { href: '/services/agence-web-paris-19', label: 'Paris 19e' },
      { href: '/services/creation-site-internet-boulogne-billancourt', label: 'Boulogne-Billancourt' },
    ],
  },
  {
    name: 'Autres Métropoles',
    links: [
      { href: '/services/agence-web-france', label: 'Agence Web France' },
      { href: '/services/agence-web-bordeaux', label: 'Agence Bordeaux' },
      { href: '/services/agence-web-nantes', label: 'Agence Nantes' },
      { href: '/services/creation-site-internet-toulouse', label: 'Création Toulouse' },
    ],
  },
]

interface ZonesInterventionBlockProps {
  currentPath?: string
}

export function ZonesInterventionBlock({ currentPath }: ZonesInterventionBlockProps) {
  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#3377FF]/20 bg-[#3377FF]/5 text-xs font-semibold uppercase tracking-wider text-[#3377FF] mb-4">
          <MapPin className="h-3.5 w-3.5" />
          Proximité &amp; Réactivité
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-[#112D4E] uppercase tracking-tight font-[family:var(--font-grotesk)]">
          Nos zones d&apos;intervention &amp; expertises locales
        </h2>
        <p className="mt-4 text-base text-[#112D4E]/70 font-light max-w-2xl">
          Nous concevons vos projets web et optimisons votre SEO local partout en France, avec une forte présence dans les grandes métropoles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {REGIONS.map((region) => {
          const filteredLinks = region.links.filter((l) => l.href !== currentPath)
          if (filteredLinks.length === 0) return null

          return (
            <div key={region.name} className="bg-[#DBE2EF]/30 p-2 rounded-[2rem] border border-[#DBE2EF]/60 hover:shadow-soft-lg transition-all duration-300">
              <div className="bg-white p-6 rounded-[calc(2rem-0.5rem)] flex flex-col h-full">
                <h3 className="text-sm font-bold tracking-wider uppercase text-[#112D4E]/60 mb-4 font-[family:var(--font-grotesk)] pb-2 border-b border-[#DBE2EF]/60">
                  {region.name}
                </h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {filteredLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-xs md:text-sm text-[#112D4E]/80 hover:text-[#3377FF] transition duration-200"
                      >
                        <span className="truncate">{link.label}</span>
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition duration-200 text-[#3377FF] shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
