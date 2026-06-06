import { Metadata } from 'next'
import Link from 'next/link'
import { allBlogPosts } from '@/lib/blog-data'
import { getProjects } from '@/data/projects'
import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'

const PAGE_SLUG = 'plan-du-site'

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Plan du site | Sidikoff Digital'
  const description = 'Accédez à toutes les pages de notre site web : services de création de site internet, expertises par secteur, implantations locales et articles de blog.'
  const pageUrl = createCanonicalUrl(PAGE_SLUG, 'fr')

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: pageUrl,
      languages: generateAlternateUrls(PAGE_SLUG),
    },
    robots: { index: true, follow: true },
  }
}

export default function PlanDuSite() {
  const projects = getProjects()

  const mainPages = [
    { name: 'Accueil', url: '/' },
    { name: 'Nos Services', url: '/services' },
    { name: 'Portfolio', url: '/projects' },
    { name: 'Nos Tarifs', url: '/tarifs' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Contactez-nous', url: '/contact' },
    { name: 'Mentions Légales', url: '/mentions-legales' },
    { name: 'Politique de Confidentialité', url: '/politique-de-confidentialite' },
  ]

  const coreServices = [
    { name: 'Création de sites internet vitrines', url: '/services/creation-sites-web' },
    { name: 'Refonte de sites internet', url: '/services/refonte-sites-web' },
    { name: 'Optimisation SEO & Référencement', url: '/services/optimisation-seo' },
    { name: 'Maintenance & Support technique', url: '/services/maintenance-support' },
    { name: 'Création site internet E-commerce', url: '/services/creation-site-ecommerce' },
    { name: 'Développement Next.js & React expert', url: '/services/agence-nextjs-react' },
  ]

  const industries = [
    { name: 'Sites web pour Artisans & BTP', url: '/services/creation-site-internet-artisan' },
    { name: 'Sites web pour Avocats', url: '/services/creation-site-internet-avocat' },
    { name: 'Sites web pour Boulangeries', url: '/services/creation-site-internet-boulangerie' },
    { name: 'Sites web pour Dentistes', url: '/services/creation-site-internet-dentiste' },
    { name: 'Sites web pour Médecins & Cabinets médicaux', url: '/services/creation-site-internet-medecin' },
    { name: 'Sites web pour Photographes', url: '/services/creation-site-internet-photographe' },
    { name: 'Sites web pour Restaurants & Cafés', url: '/services/creation-site-internet-restaurant' },
    { name: 'Sites web pour Agences de voyage', url: '/services/creation-site-internet-agence-voyage' },
    { name: 'Sites web pour Barbershops', url: '/services/creation-site-internet-barbershop' },
    { name: 'Sites web pour Coachs sportifs', url: '/services/creation-site-internet-coach-sportif' },
    { name: 'Sites web pour Freelances & Indépendants', url: '/services/creation-site-internet-freelance' },
  ]

  const parisGeo = [
    { name: 'Agence Web Paris (Général)', url: '/services/agence-web-paris' },
    { name: 'Création site internet Paris', url: '/services/creation-site-internet-paris' },
    { name: 'Création site internet Paris 16', url: '/services/creation-site-internet-paris-16' },
    { name: 'Création site internet Paris 6', url: '/services/agence-web-paris-6' },
    { name: 'Création site internet Paris 7', url: '/services/agence-web-paris-7' },
    { name: 'Création site internet Paris 14', url: '/services/agence-web-paris-14' },
    { name: 'Création site internet Paris 15', url: '/services/agence-web-paris-15' },
    { name: 'Création site internet Paris 17', url: '/services/agence-web-paris-17' },
    { name: 'Création site internet Paris 19', url: '/services/agence-web-paris-19' },
    { name: 'Création site internet Café Paris', url: '/services/creation-site-internet-cafe-paris' },
    { name: 'Agence E-commerce Paris', url: '/services/ecommerce-paris' },
    { name: 'Développeur React Paris', url: '/services/react-paris' },
    { name: 'Expert Next.js Paris', url: '/services/nextjs-paris' },
    { name: 'Agence WordPress Paris', url: '/services/wordpress-paris' },
    { name: 'Développeur web freelance Paris', url: '/services/developpeur-web-paris' },
    { name: 'Agence SEO Paris', url: '/services/seo-paris' },
  ]

  const lyonGeo = [
    { name: 'Agence Web Lyon (Général)', url: '/services/agence-web-lyon' },
    { name: 'Création site internet Lyon', url: '/services/creation-site-internet-lyon' },
    { name: 'Agence Web Villeurbanne', url: '/services/agence-web-villeurbanne' },
    { name: 'Création site vitrine Lyon', url: '/services/site-vitrine-lyon' },
    { name: 'Refonte de site internet Lyon', url: '/services/refonte-site-web-lyon' },
    { name: 'Création site internet Caluire-et-Cuire', url: '/services/creation-site-web-caluire-et-cuire' },
    { name: 'Agence web Caluire-et-Cuire', url: '/services/agence-web-caluire-et-cuire' },
    { name: 'Agence web Bron', url: '/services/agence-web-bron' },
    { name: 'Agence web Vaulx-en-Velin', url: '/services/agence-web-vaulx-en-velin' },
    { name: 'Agence web Vénissieux', url: '/services/agence-web-venissieux' },
    { name: 'Agence E-commerce Lyon', url: '/services/ecommerce-lyon' },
    { name: 'Développeur React Lyon', url: '/services/react-lyon' },
    { name: 'Expert Next.js Lyon', url: '/services/nextjs-lyon' },
    { name: 'Agence WordPress Lyon', url: '/services/wordpress-lyon' },
    { name: 'Développeur web freelance Lyon', url: '/services/developpeur-web-lyon' },
    { name: 'Agence SEO Lyon', url: '/services/seo-lyon' },
    { name: 'Agence SEO Villeurbanne', url: '/services/seo-villeurbanne' },
    { name: 'Agence SEO Bron', url: '/services/seo-bron' },
    { name: 'Agence SEO Caluire-et-Cuire', url: '/services/seo-caluire' },
    { name: 'Création site vitrine Villeurbanne', url: '/services/site-vitrine-villeurbanne' },
    { name: 'Refonte de site internet Villeurbanne', url: '/services/refonte-site-villeurbanne' },
  ]

  const otherGeo = [
    { name: 'Agence Web Bordeaux', url: '/services/agence-web-bordeaux' },
    { name: 'Agence Web Nantes', url: '/services/agence-web-nantes' },
    { name: 'Création site internet Toulouse', url: '/services/creation-site-internet-toulouse' },
    { name: 'Création site internet Boulogne-Billancourt', url: '/services/creation-site-internet-boulogne-billancourt' },
  ]

  return (
    <main className="bg-stone-50 text-[#112D4E] min-h-screen pt-[140px] pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 border-b border-gray-200 pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#112D4E] mb-4">
            Plan du site
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Retrouvez l'ensemble des pages, services, implantations géographiques et articles de blog de Sidikoff Digital.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Section 1: Pages principales */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#3F72AF] uppercase tracking-wider border-l-4 border-[#3F72AF] pl-3">
              Pages Principales
            </h2>
            <ul className="space-y-2">
              {mainPages.map((page) => (
                <li key={page.url}>
                  <Link href={page.url} className="text-gray-700 hover:text-[#3F72AF] hover:underline transition-colors">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 2: Services web */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#3F72AF] uppercase tracking-wider border-l-4 border-[#3F72AF] pl-3">
              Nos Services Web
            </h2>
            <ul className="space-y-2">
              {coreServices.map((service) => (
                <li key={service.url}>
                  <Link href={service.url} className="text-gray-700 hover:text-[#3F72AF] hover:underline transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3: Secteurs d'activité */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#3F72AF] uppercase tracking-wider border-l-4 border-[#3F72AF] pl-3">
              Secteurs & Métiers
            </h2>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry.url}>
                  <Link href={industry.url} className="text-gray-700 hover:text-[#3F72AF] hover:underline transition-colors">
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4: Implantations Paris */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#3F72AF] uppercase tracking-wider border-l-4 border-[#3F72AF] pl-3">
              Implantations Paris & Île-de-France
            </h2>
            <ul className="space-y-2">
              {parisGeo.map((paris) => (
                <li key={paris.url}>
                  <Link href={paris.url} className="text-gray-700 hover:text-[#3F72AF] hover:underline transition-colors">
                    {paris.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5: Implantations Lyon */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#3F72AF] uppercase tracking-wider border-l-4 border-[#3F72AF] pl-3">
              Implantations Lyon & Rhône
            </h2>
            <ul className="space-y-2">
              {lyonGeo.map((lyon) => (
                <li key={lyon.url}>
                  <Link href={lyon.url} className="text-gray-700 hover:text-[#3F72AF] hover:underline transition-colors">
                    {lyon.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 6: Autres Implantations */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#3F72AF] uppercase tracking-wider border-l-4 border-[#3F72AF] pl-3">
              Autres Régions
            </h2>
            <ul className="space-y-2">
              {otherGeo.map((other) => (
                <li key={other.url}>
                  <Link href={other.url} className="text-gray-700 hover:text-[#3F72AF] hover:underline transition-colors">
                    {other.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 7: Articles de blog */}
          <section className="space-y-4 md:col-span-2 lg:col-span-2">
            <h2 className="text-xl font-bold text-[#3F72AF] uppercase tracking-wider border-l-4 border-[#3F72AF] pl-3">
              Articles de Blog (SEO, Web, Stratégie)
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {allBlogPosts.map((post) => (
                <li key={post.slug} className="truncate">
                  <Link href={`/blog/${post.slug}`} className="text-gray-700 hover:text-[#3F72AF] hover:underline transition-colors text-sm">
                    • {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 8: Réalisations */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#3F72AF] uppercase tracking-wider border-l-4 border-[#3F72AF] pl-3">
              Nos Réalisations
            </h2>
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project.id}>
                  <Link href={`/projects/${project.id}`} className="text-gray-700 hover:text-[#3F72AF] hover:underline transition-colors">
                    Projet : {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
