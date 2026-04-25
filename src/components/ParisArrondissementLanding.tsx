import Image from 'next/image'
import Link from 'next/link'
import { Bodoni_Moda, Manrope } from 'next/font/google'
import {
  ArrowRight,
  Compass,
  Gauge,
  Landmark,
  Layers,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  TimerReset,
} from 'lucide-react'

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-bodoni',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-manrope',
})

export interface ParisArrondissementLandingProps {
  arrondissement: string
  heroTitle: React.ReactNode
  heroDescription: string
  neighborhoods: string[]
  visionLocaleText: string
  faqItems: { question: string; answer: string }[]
  storyBlocks?: { chapter: string; title: string; description: string; icon: React.ElementType }[]
  children?: React.ReactNode
}

const defaultStoryBlocks = [
  {
    chapter: 'Chapitre 01',
    title: 'Un beau site qui ne genere rien',
    description:
      'Vous avez peut-etre deja un site elegant, mais qui ne transforme pas les visites en prises de contact. Nous corrigeons le fond avant la forme.',
    icon: Compass,
  },
  {
    chapter: 'Chapitre 02',
    title: 'Un parcours client souvent trop long',
    description:
      'Entre la homepage, le menu, les blocs repetes et les appels a l action dilues, vos prospects quittent la page trop tot.',
    icon: Layers,
  },
  {
    chapter: 'Chapitre 03',
    title: 'Un referencement local sous-exploite',
    description:
      'Nous structurons vos pages pour capter les requetes locales a forte intention dans votre arrondissement.',
    icon: Search,
  },
]

const processSteps = [
  {
    title: 'Audit express de votre positionnement',
    description:
      'Analyse de votre positionnement, de vos concurrents locaux et des points de friction sur votre parcours actuel.',
  },
  {
    title: 'Direction artistique claire',
    description:
      'Un systeme visuel editorial, premium et memorisable: grille, typo, contraste, hierarchie, CTA.',
  },
  {
    title: 'Production rapide et mesuree',
    description:
      'Maquettes, integration Next.js, optimisation mobile, suivi des conversions et ajustements post-lancement.',
  },
]

const servicePillars = [
  {
    title: 'Site vitrine premium',
    description:
      'Presentation haut de gamme, storytelling de marque, pages de services qui convertissent.',
    icon: Landmark,
  },
  {
    title: 'E-commerce selectif',
    description:
      'Catalogues clairs, fiches produits performantes, tunnel simplifie et paiement securise.',
    icon: ShieldCheck,
  },
  {
    title: 'SEO local operationnel',
    description:
      'Architecture orientee requetes geolocalisees et contenus penses pour les recherches pres de moi.',
    icon: Gauge,
  },
  {
    title: 'Maintenance continue',
    description:
      'Mises a jour, monitoring technique, evolution des pages et support reactif en francais.',
    icon: TimerReset,
  },
]

export default function ParisArrondissementLanding({
  arrondissement,
  heroTitle,
  heroDescription,
  neighborhoods,
  visionLocaleText,
  faqItems,
  storyBlocks = defaultStoryBlocks,
  children,
}: ParisArrondissementLandingProps) {
  return (
    <main
      className={`${manrope.variable} ${bodoni.variable} relative overflow-hidden bg-[#f5f0e6] text-[#14110f]`}
      style={{ fontFamily: 'var(--font-manrope)' }}>
      <div aria-hidden className='pointer-events-none absolute inset-0'>
        <div className='absolute -left-32 top-16 h-72 w-72 rounded-full bg-[#d9c7a4]/45 blur-3xl' />
        <div className='absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#b8c6d9]/40 blur-3xl' />
        <div className='absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[#c58e5a]/20 blur-3xl' />
      </div>

      <section className='relative px-6 pb-16 pt-28 md:px-10 lg:px-16'>
        <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end'>
          <div>
            <p className='mb-6 inline-flex items-center gap-2 rounded-full border border-[#14110f]/15 bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#6f3b18]'>
              <MapPin className='h-4 w-4' aria-hidden='true' />
              Creation site internet Paris {arrondissement}
            </p>

            <h1
              className='max-w-4xl text-5xl leading-[0.95] text-[#1a1512] sm:text-6xl'
              style={{ fontFamily: 'var(--font-bodoni)' }}>
              {heroTitle}
            </h1>

            <p className='mt-6 max-w-2xl text-lg leading-relaxed text-[#3a312c] md:text-xl'>
              {heroDescription}
            </p>

            <div className='mt-9 flex flex-col gap-4 sm:flex-row sm:items-center'>
              <Link
                href='/contact'
                className='inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1f3a5f] px-7 py-3 text-base font-semibold text-white transition duration-200 hover:bg-[#152a45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f3a5f] focus-visible:ring-offset-2'>
                Demander un devis sous 24h
                <ArrowRight className='h-4 w-4' aria-hidden='true' />
              </Link>
              <Link
                href='/projects'
                className='inline-flex min-h-12 items-center justify-center rounded-full border border-[#14110f]/20 bg-white/75 px-7 py-3 text-base font-semibold text-[#1a1512] transition duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f3a5f] focus-visible:ring-offset-2'>
                Voir les realisations
              </Link>
            </div>

            <div className='mt-10 grid gap-4 sm:grid-cols-3'>
              {[
                { value: '7-14 j', label: 'Delai de lancement' },
                { value: '24 h', label: 'Retour sur devis' },
                { value: '95+', label: 'Objectif performance' },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className='rounded-2xl border border-[#14110f]/10 bg-white/70 p-4 backdrop-blur-sm'>
                  <p className='text-2xl font-bold text-[#1f3a5f]'>{metric.value}</p>
                  <p className='mt-1 text-sm text-[#52453c]'>{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='relative'>
            <div className='relative aspect-4/5 overflow-hidden rounded-4xl border border-[#14110f]/15 bg-[#ddd3c1]'>
              <Image
                src='/images/paris-15/hero-paris.jpg'
                alt={`Agence web Paris ${arrondissement} - creation site web professionnel`}
                fill
                priority
                className='object-cover'
                sizes='(max-width: 1024px) 100vw, 42vw'
              />
              <div className='absolute inset-0 bg-linear-to-t from-[#111]/55 via-[#111]/10 to-transparent' />

              <div className='absolute bottom-5 left-5 right-5 rounded-2xl border border-white/25 bg-black/55 p-4 text-white backdrop-blur-md'>
                <p className='text-xs uppercase tracking-[0.16em] text-[#f2dcb5]'>Vision locale</p>
                <p className='mt-2 text-base leading-snug'>
                  {visionLocaleText}
                </p>
              </div>
            </div>

            <div className='absolute -left-5 top-8 rounded-xl border border-[#14110f]/15 bg-white p-4 shadow-lg'>
              <p className='text-xs uppercase tracking-[0.16em] text-[#6f3b18]'>Positionnement</p>
              <p className='mt-1 text-sm font-semibold text-[#1a1512]'>Premium, net, memorisable</p>
            </div>
          </div>
        </div>
      </section>

      <section className='relative border-y border-[#14110f]/10 bg-[#f8f4eb] px-6 py-20 md:px-10 lg:px-16'>
        <div className='mx-auto max-w-7xl'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#6f3b18]'>
            Storyline
          </p>
          <h2
            className='mt-4 text-4xl leading-tight text-[#1a1512] md:text-5xl'
            style={{ fontFamily: 'var(--font-bodoni)' }}>
            Une page qui guide, au lieu d empiler.
          </h2>

          <div className='mt-10 grid gap-5 lg:grid-cols-3'>
            {storyBlocks.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className='group rounded-3xl border border-[#14110f]/10 bg-white/85 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#1f3a5f]/40 hover:shadow-xl motion-reduce:transform-none'>
                  <Icon className='h-8 w-8 text-[#1f3a5f]' aria-hidden='true' />
                  <p className='mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#6f3b18]'>
                    {item.chapter}
                  </p>
                  <h3 className='mt-3 text-2xl font-semibold leading-tight text-[#1d1714]'>
                    {item.title}
                  </h3>
                  <p className='mt-3 text-base leading-relaxed text-[#4d4037]'>{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className='relative px-6 py-20 md:px-10 lg:px-16'>
        <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#6f3b18]'>
              Processus
            </p>
            <h2
              className='mt-4 text-4xl leading-tight text-[#1a1512] md:text-5xl'
              style={{ fontFamily: 'var(--font-bodoni)' }}>
              Trois etapes pour passer de l intention a l impact.
            </h2>
            <p className='mt-4 text-lg leading-relaxed text-[#4d4037]'>
              Chaque livraison est pensee pour vos objectifs business et la realite terrain du {arrondissement}e:
              prise de rendez-vous, appels entrants, demandes qualifiees.
            </p>

            <div className='mt-8 flex flex-wrap gap-2'>
              {neighborhoods.map((zone) => (
                <span
                  key={zone}
                  className='inline-flex items-center rounded-full border border-[#1f3a5f]/20 bg-[#edf2f8] px-4 py-2 text-sm font-medium text-[#1f3a5f]'>
                  {zone}
                </span>
              ))}
            </div>
          </div>

          <ol className='space-y-4'>
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className='rounded-3xl border border-[#14110f]/10 bg-white/80 p-6 shadow-sm'>
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-[#6f3b18]'>
                  Etape {index + 1}
                </p>
                <h3 className='mt-2 text-2xl font-semibold text-[#1d1714]'>{step.title}</h3>
                <p className='mt-3 text-base leading-relaxed text-[#4d4037]'>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className='relative border-y border-[#14110f]/10 bg-white px-6 py-20 md:px-10 lg:px-16'>
        <div className='mx-auto max-w-7xl'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#6f3b18]'>
            Solutions
          </p>
          <h2
            className='mt-4 text-4xl leading-tight text-[#1a1512] md:text-5xl'
            style={{ fontFamily: 'var(--font-bodoni)' }}>
            Services de creation site web Paris {arrondissement} pour les entreprises locales.
          </h2>

          <div className='mt-10 grid gap-5 md:grid-cols-2'>
            {servicePillars.map((service) => (
              <article
                key={service.title}
                className='rounded-3xl border border-[#14110f]/10 bg-[#fbf8f1] p-7 transition duration-300 hover:border-[#1f3a5f]/35 hover:bg-white'>
                <service.icon className='h-8 w-8 text-[#1f3a5f]' aria-hidden='true' />
                <h3 className='mt-4 text-2xl font-semibold text-[#1d1714]'>{service.title}</h3>
                <p className='mt-3 text-base leading-relaxed text-[#4d4037]'>
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='relative px-6 py-20 md:px-10 lg:px-16'>
        <div className='mx-auto max-w-7xl rounded-4xl border border-[#14110f]/10 bg-[#172a44] p-10 text-white md:p-14'>
          <p className='inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f3d8ad]'>
            <Sparkles className='h-4 w-4' aria-hidden='true' />
            Climax CTA
          </p>

          <h2
            className='mt-6 text-4xl leading-tight md:text-5xl'
            style={{ fontFamily: 'var(--font-bodoni)' }}>
            Vous voulez une page qui signe votre difference dans le {arrondissement}e ?
          </h2>

          <p className='mt-5 max-w-3xl text-lg leading-relaxed text-[#d8dfeb]'>
            Nous construisons une experience claire, rapide et visible sur Google, avec une
            narration qui inspire confiance des les premieres secondes.
          </p>

          <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
            <Link
              href='/contact'
              className='inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f3d8ad] px-7 py-3 text-base font-semibold text-[#1a1512] transition duration-200 hover:bg-[#f0cf98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3d8ad] focus-visible:ring-offset-2 focus-visible:ring-offset-[#172a44]'>
              Lancer mon redesign
              <ArrowRight className='h-4 w-4' aria-hidden='true' />
            </Link>
            <Link
              href='/tarifs'
              className='inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 bg-white/10 px-7 py-3 text-base font-semibold text-white transition duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#172a44]'>
              Consulter les tarifs
            </Link>
          </div>
        </div>
      </section>

      {children}

      <section className='relative px-6 pb-24 md:px-10 lg:px-16'>
        <div className='mx-auto max-w-5xl'>
          <h2
            className='text-4xl leading-tight text-[#1a1512] md:text-5xl'
            style={{ fontFamily: 'var(--font-bodoni)' }}>
            FAQ creation site web Paris {arrondissement}
          </h2>

          <div className='mt-8 space-y-3'>
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className='group rounded-2xl border border-[#14110f]/10 bg-white/85 px-6 py-5'>
                <summary className='cursor-pointer list-none pr-8 text-lg font-semibold text-[#1d1714]'>
                  {faq.question}
                </summary>
                <p className='mt-4 text-base leading-relaxed text-[#4d4037]'>{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className='mt-12 text-center'>
            <p className='text-[#4d4037]'>
              Votre entreprise n'est pas dans le {arrondissement}e ?{' '}
              <Link href='/services/agence-web-paris' className='font-bold text-[#1f3a5f] underline hover:text-[#1a1512] transition'>
                Découvrez notre page principale Agence Web Paris
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
