'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle,
  Code2,
  Cpu,
  Gauge,
  GitBranch,
  Globe,
  Layers,
  Lock,
  Rocket,
  Sparkles,
  Zap,
} from 'lucide-react'
import { FAQAccordion } from '@/components/FAQAccordion'

const techStack = [
  { name: 'Next.js 14+', desc: 'App Router, Server Components, Streaming', color: 'from-gray-900 to-gray-700' },
  { name: 'React 18+', desc: 'Hooks, Context, Suspense, Concurrent', color: 'from-blue-600 to-cyan-500' },
  { name: 'TypeScript', desc: 'Typage strict, DX premium, zéro surprises', color: 'from-blue-700 to-blue-500' },
  { name: 'Tailwind CSS', desc: 'Design system scalable, purge CSS auto', color: 'from-teal-600 to-emerald-500' },
  { name: 'Vercel / Edge', desc: 'Déploiement CDN mondial, latence < 50ms', color: 'from-purple-700 to-violet-500' },
  { name: 'Sanity / Prisma', desc: 'CMS headless ou ORM typé selon le projet', color: 'from-red-600 to-rose-500' },
]

const advantages = [
  {
    icon: Gauge,
    title: 'Performance Lighthouse 95+',
    description:
      'Rendu côté serveur (SSR), génération statique (SSG) et streaming optimisent le LCP, FID et CLS. Vos pages se chargent en moins d\'une seconde sur mobile.',
  },
  {
    icon: Lock,
    title: 'SEO technique supérieur',
    description:
      'Les Server Components Next.js génèrent un HTML sémantique parfaitement crawlable. Sitemap dynamique, métadonnées générées, canonical automatique.',
  },
  {
    icon: Layers,
    title: 'Architecture composants réutilisables',
    description:
      'Chaque composant React est isolé, testé et réutilisable. Moins de code, moins de bugs, évolution rapide. Vos futures fonctionnalités coûtent moins cher.',
  },
  {
    icon: GitBranch,
    title: 'CI/CD & déploiement continu',
    description:
      'Preview URLs sur chaque pull request, déploiements atomiques et rollback instantané. Zéro downtime lors des mises à jour.',
  },
  {
    icon: Cpu,
    title: 'API Routes & backend intégré',
    description:
      'Next.js permet d\'intégrer des endpoints API directement dans votre projet. Webhooks, auth, formulaires — tout dans un seul repo TypeScript.',
  },
  {
    icon: Globe,
    title: 'Internationalisation native',
    description:
      'Support i18n intégré pour les projets multilingues. Routing automatique par langue, SEO hreflang, contenu localisé sans surcoût.',
  },
]

const useCases = [
  { emoji: '🏢', title: 'Sites corporate & institutionnels', desc: 'Landing pages haute performance, sites multi-pages avec CMS headless Sanity ou Contentful.' },
  { emoji: '🛒', title: 'E-commerce Next.js', desc: 'Intégration Stripe, Shopify Storefront API ou WooCommerce headless. Tunnel de paiement ultra-rapide.' },
  { emoji: '📱', title: 'Applications web React', desc: 'SaaS, dashboards, outils métier internes — des interfaces complexes avec gestion d\'état Zustand ou Redux Toolkit.' },
  { emoji: '🚀', title: 'Startups & scale-ups', desc: 'Architecture scalable dès le jour 1. Monorepo Turborepo, tests E2E Playwright, monitoring Sentry.' },
  { emoji: '🎨', title: 'Portfolios & agences créatives', desc: 'Animations GSAP ou Framer Motion, effets WebGL, transitions fluides — la vitrine parfaite pour les créatifs.' },
  { emoji: '📊', title: 'Refonte & migration', desc: 'Migration depuis WordPress, Webflow ou Wix vers Next.js. Stack moderne, performances doublées, coûts d\'hébergement réduits.' },
]

const faqItems = [
  {
    id: '1',
    question: 'Pourquoi choisir Next.js plutôt que WordPress pour mon site ?',
    answer: 'Next.js est un framework React qui offre des performances nettement supérieures à WordPress : score Lighthouse 95-100 vs 40-70 en moyenne, chargement en moins d\'une seconde, sécurité renforcée (pas de plugins vulnérables) et SEO technique natif. WordPress reste pertinent pour les sites qui nécessitent un CMS classique avec un grand écosystème de plugins. Next.js est idéal si vous voulez vous démarquer techniquement et en performance SEO.',
    category: 'technical',
  },
  {
    id: '2',
    question: 'Quelle est la différence entre Next.js et React ?',
    answer: 'React est la bibliothèque d\'interface utilisateur (UI) développée par Meta. Next.js est un framework construit au-dessus de React qui ajoute le rendu côté serveur (SSR), la génération statique (SSG), le routing automatique, l\'optimisation des images et les API Routes. En résumé : React est le moteur, Next.js est la voiture complète prête à rouler en production.',
    category: 'technical',
  },
  {
    id: '3',
    question: 'Combien coûte un développement Next.js ou React ?',
    answer: 'Le budget dépend de la complexité du projet. Un site vitrine Next.js démarre à partir de 1 290 € avec CMS headless. Une application React sur mesure (dashboard, SaaS, e-commerce) commence autour de 3 000 €. Nous fournissons un devis détaillé et gratuit après un appel de cadrage. Chaque ligne du devis est expliquée et justifiée.',
    category: 'pricing',
  },
  {
    id: '4',
    question: 'Livrez-vous le code source et puis-je le modifier moi-même ?',
    answer: 'Oui, vous êtes propriétaire à 100% du code source. Nous livrons un repo GitHub privé avec documentation technique. Si vous avez des développeurs en interne, ils pourront reprendre le projet facilement. Si vous n\'en avez pas, nous proposons des contrats de maintenance et d\'évolution.',
    category: 'ownership',
  },
  {
    id: '5',
    question: 'Mon site Next.js sera-t-il bien référencé sur Google ?',
    answer: 'Oui, et c\'est l\'un des avantages majeurs de Next.js. Le rendu côté serveur génère un HTML complet et sémantique que Googlebot crawle parfaitement. Nous intégrons sitemap.xml dynamique, métadonnées Open Graph, données structurées JSON-LD et canonical automatiques. Nos sites atteignent systématiquement un score Lighthouse SEO de 100.',
    category: 'seo',
  },
  {
    id: '6',
    question: 'Combien de temps faut-il pour développer un projet Next.js ?',
    answer: 'Un site vitrine Next.js avec CMS prend 2 à 4 semaines. Une application React complexe (authentification, base de données, API) nécessite 6 à 12 semaines selon la portée fonctionnelle. Nous travaillons en sprints avec des livrables intermédiaires visibles pour vous tenir informé à chaque étape.',
    category: 'timing',
  },
]

export default function AgenceNextjsReactContent() {
  return (
    <div className='min-h-screen bg-[#09090b] text-white'>
      {/* Hero Section */}
      <section className='relative overflow-hidden pt-20 pb-24'>
        {/* Background grid */}
        <div
          className='absolute inset-0 opacity-20'
          style={{
            backgroundImage: `linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Gradient orbs */}
        <div className='absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl' />
        <div className='absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl' />

        <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-white/80 mb-8'
              >
                <Code2 className='h-4 w-4 text-blue-400' />
                Agence Next.js & React · Paris
              </motion.div>

              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight mb-6'>
                Agence{' '}
                <span className='bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
                  Next.js
                </span>{' '}
                &{' '}
                <span className='bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
                  React
                </span>
              </h1>

              <p className='text-xl text-white/65 leading-relaxed mb-8 max-w-xl'>
                Nous développons des applications React et des sites Next.js haute performance pour les startups, PME et
                scale-ups qui veulent se démarquer techniquement. Framework moderne, composants réutilisables, front end
                sur mesure.
              </p>

              <div className='flex flex-wrap gap-3 mb-10'>
                {['Next.js App Router', 'React 18+', 'TypeScript', 'Vercel Edge', 'Tailwind CSS'].map((tag) => (
                  <span
                    key={tag}
                    className='inline-flex items-center rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-sm font-medium text-white/70'
                  >
                    <CheckCircle className='h-3.5 w-3.5 mr-1.5 text-green-400' />
                    {tag}
                  </span>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <Link
                  href='/contact'
                  className='inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-black transition hover:bg-white/90 hover:scale-105 duration-200'
                >
                  Devis gratuit sous 24h
                  <ArrowRight className='h-4 w-4' />
                </Link>
                <Link
                  href='/projects'
                  className='inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/8 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/15 duration-200'
                >
                  Voir nos projets React
                </Link>
              </div>
            </motion.div>

            {/* Code preview card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='relative'
            >
              <div className='rounded-2xl border border-white/10 bg-[#0d0d10] overflow-hidden shadow-2xl'>
                {/* Window bar */}
                <div className='flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-white/4'>
                  <span className='h-3 w-3 rounded-full bg-red-500/80' />
                  <span className='h-3 w-3 rounded-full bg-yellow-500/80' />
                  <span className='h-3 w-3 rounded-full bg-green-500/80' />
                  <span className='ml-3 text-xs text-white/40'>page.tsx · Next.js App Router</span>
                </div>
                <pre className='p-6 text-sm leading-relaxed overflow-x-auto'>
                  <code>
                    <span className='text-violet-400'>{'// '}</span>
                    <span className='text-white/40'>Server Component — zéro JS côté client</span>
                    {'\n'}
                    <span className='text-blue-400'>export async function </span>
                    <span className='text-yellow-300'>generateMetadata</span>
                    <span className='text-white/60'>() {'{'}</span>
                    {'\n  '}
                    <span className='text-blue-400'>return</span>
                    <span className='text-white/60'>{' { '}</span>
                    <span className='text-green-400'>title</span>
                    <span className='text-white/60'>: </span>
                    <span className='text-amber-300'>&apos;Agence Next.js Paris&apos;</span>
                    <span className='text-white/60'>{' }'}</span>
                    {'\n'}
                    <span className='text-white/60'>{'}'}</span>
                    {'\n\n'}
                    <span className='text-blue-400'>export default async function </span>
                    <span className='text-yellow-300'>Page</span>
                    <span className='text-white/60'>() {'{'}</span>
                    {'\n  '}
                    <span className='text-violet-400'>const </span>
                    <span className='text-white/80'>data </span>
                    <span className='text-white/60'>= </span>
                    <span className='text-blue-400'>await </span>
                    <span className='text-white/80'>fetchData</span>
                    <span className='text-white/60'>()</span>
                    {'\n  '}
                    <span className='text-blue-400'>return </span>
                    <span className='text-green-400'>{'<'}</span>
                    <span className='text-yellow-300'>Hero</span>
                    <span className='text-white/60'>{' data={data} />'}</span>
                    {'\n'}
                    <span className='text-white/60'>{'}'}</span>
                  </code>
                </pre>
              </div>

              {/* Floating metrics */}
              <div className='absolute -bottom-4 -left-4 rounded-xl border border-white/10 bg-[#0d0d10] p-4 shadow-xl'>
                <p className='text-xs text-white/40 mb-1'>Lighthouse Score</p>
                <div className='flex gap-3'>
                  {[
                    { label: 'Perf', value: '99', color: 'text-green-400' },
                    { label: 'SEO', value: '100', color: 'text-green-400' },
                    { label: 'A11y', value: '98', color: 'text-green-400' },
                  ].map((m) => (
                    <div key={m.label} className='text-center'>
                      <p className={`text-lg font-bold ${m.color}`}>{m.value}</p>
                      <p className='text-xs text-white/40'>{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className='py-20 bg-[#0d0d10] border-y border-white/8'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-14'>
            <p className='text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4'>Stack technique</p>
            <h2 className='text-3xl md:text-4xl font-bold text-white'>
              Notre stack Next.js & React en production
            </h2>
            <p className='mt-4 text-lg text-white/55 max-w-2xl mx-auto'>
              Chaque technologie est choisie pour sa maturité, sa performance et son impact sur le référencement
              naturel.
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className='rounded-2xl border border-white/10 bg-white/4 p-6 hover:border-white/20 hover:bg-white/8 transition duration-300'
              >
                <div className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${tech.color} px-3 py-1 text-xs font-bold text-white mb-4`}>
                  <Zap className='h-3 w-3' />
                  {tech.name}
                </div>
                <p className='text-sm text-white/55 leading-relaxed'>{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className='py-24 bg-[#09090b]'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <p className='text-sm font-semibold uppercase tracking-widest text-violet-400 mb-4'>Pourquoi Next.js</p>
            <h2 className='text-3xl md:text-4xl font-bold text-white'>
              Les avantages d&apos;un développement React professionnel
            </h2>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {advantages.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className='rounded-2xl border border-white/10 bg-white/4 p-7 hover:border-blue-500/30 hover:bg-white/8 transition duration-300 group'
                >
                  <div className='mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/15 group-hover:bg-blue-600/25 transition'>
                    <Icon className='h-6 w-6 text-blue-400' />
                  </div>
                  <h3 className='text-lg font-bold text-white mb-3'>{item.title}</h3>
                  <p className='text-sm text-white/55 leading-relaxed'>{item.description}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className='py-24 bg-[#0d0d10] border-y border-white/8'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-16 items-start'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-4'>Cas d&apos;usage</p>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                Ce que nous développons avec React & Next.js
              </h2>
              <p className='text-lg text-white/55 leading-relaxed mb-8'>
                Du site vitrine ultra-performant à l&apos;application web React complexe — notre équipe maîtrise l&apos;ensemble
                du front end moderne. Composants réutilisables, développement web typé TypeScript, marketing digital
                orienté performance.
              </p>
              <Link
                href='/contact'
                className='inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-blue-500 duration-200'
              >
                Discuter de votre projet
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>

            <div className='space-y-4'>
              {useCases.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className='flex gap-4 rounded-xl border border-white/10 bg-white/4 p-5 hover:border-white/20 transition duration-300'
                >
                  <span className='text-2xl flex-shrink-0'>{item.emoji}</span>
                  <div>
                    <h3 className='font-bold text-white mb-1'>{item.title}</h3>
                    <p className='text-sm text-white/50 leading-relaxed'>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal links to Paris pages */}
      <section className='py-20 bg-[#09090b]'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center'>
          <p className='text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4'>Expertise locale</p>
          <h2 className='text-3xl font-bold text-white mb-4'>
            Développement Next.js & React à Paris
          </h2>
          <p className='text-white/55 max-w-2xl mx-auto mb-10'>
            Nous intervenons dans tous les arrondissements parisiens. Besoin d&apos;un devis local pour votre
            projet React ou Next.js ?
          </p>
          <div className='flex flex-wrap justify-center gap-3 mb-10'>
            {[
              { label: 'Agence Web Paris', href: '/services/agence-web-paris' },
              { label: 'Paris 6ème', href: '/services/agence-web-paris-6' },
              { label: 'Paris 14ème', href: '/services/agence-web-paris-14' },
              { label: 'Paris 15ème', href: '/services/agence-web-paris-15' },
              { label: 'Paris 17ème', href: '/services/agence-web-paris-17' },
              { label: 'Paris 19ème', href: '/services/agence-web-paris-19' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='rounded-full border border-white/15 bg-white/6 px-5 py-2.5 text-sm font-medium text-white/70 hover:border-blue-500/50 hover:text-white transition duration-200'
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-24 bg-[#0d0d10] border-t border-white/8'>
        <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-14'>
            <p className='text-sm font-semibold uppercase tracking-widest text-violet-400 mb-4'>FAQ</p>
            <h2 className='text-3xl md:text-4xl font-bold text-white'>
              Questions fréquentes — Agence Next.js & React
            </h2>
          </div>
          <div className='space-y-3'>
            {faqItems.map((faq) => (
              <details
                key={faq.id}
                className='group rounded-2xl border border-white/10 bg-white/4 px-6 py-5 hover:border-white/20 transition'
              >
                <summary className='cursor-pointer list-none text-base font-semibold text-white pr-8'>
                  {faq.question}
                </summary>
                <p className='mt-4 text-sm leading-relaxed text-white/55'>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-24 bg-[#09090b] relative overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute top-0 left-1/3 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl' />
          <div className='absolute bottom-0 right-1/3 h-80 w-80 rounded-full bg-violet-600/15 blur-3xl' />
        </div>
        <div className='relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-white/70 mb-8'>
              <Sparkles className='h-4 w-4 text-yellow-400' />
              Prêt à lancer votre projet React ?
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Démarrons votre projet{' '}
              <span className='bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent'>
                Next.js
              </span>{' '}
              ensemble
            </h2>
            <p className='text-xl text-white/55 mb-10'>
              Devis gratuit sous 24h. Appel de cadrage offert. Aucun engagement.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-5 text-lg font-bold text-black transition hover:bg-white/90 hover:scale-105 duration-200'
              >
                <Rocket className='h-5 w-5' />
                Demander un devis
              </Link>
              <Link
                href='/projects'
                className='inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/8 px-10 py-5 text-lg font-semibold text-white transition hover:bg-white/15 duration-200'
              >
                Voir nos réalisations
                <ArrowRight className='h-5 w-5' />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
