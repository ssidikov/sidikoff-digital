'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import common from '@/locales/fr/common.json'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface Breadcrumbs {
  items: BreadcrumbItem[]
}

interface SeoOptimizationLandingContentProps {
  breadcrumbs: Breadcrumbs
}

export default function SeoOptimizationLandingContent({
  breadcrumbs,
}: SeoOptimizationLandingContentProps) {
  const t = common.testimonials.seo_optimization_landing

  return (
    <div className='min-h-screen'>
      {/* Hero Section - Full Screen */}
      <section className='relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-linear-to-br from-white via-[var(--bg-accent-light)] to-[var(--accent-alpha-10)] pt-[120px] md:pt-[160px] pb-8 md:pb-16'>
        {/* Background Elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute -top-40 -right-40 w-80 h-80 bg-[var(--accent-alpha-10)] rounded-full opacity-60 animate-pulse'></div>
          <div className='absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--accent-alpha-20)] rounded-full opacity-40 animate-pulse delay-700'></div>
        </div>

        <div className='relative w-full max-w-7xl mx-auto'>
          {/* Breadcrumbs */}
          <motion.nav
            className='mb-8'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <ol className='flex items-center space-x-2 text-sm text-gray-600'>
              {breadcrumbs.items.map((item, index: number) => (
                <li key={index} className='flex items-center'>
                  {index > 0 && <span className='mx-2 text-gray-400'>/</span>}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className='hover:text-[var(--accent)] transition-colors duration-200'>
                      {item.label}
                    </Link>
                  ) : (
                    <span className='text-[var(--accent)] font-medium'>{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left Column - Content */}
            <motion.div
              className='space-y-8'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}>
              {/* Badge */}
              <motion.div
                className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--accent-alpha-10)] text-[var(--accent)] border border-[var(--accent-alpha-20)]'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}>
                {t.hero.badge}
              </motion.div>

              {/* Title */}
              <motion.h1
                className='text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}>
                {t.hero.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                className='text-xl text-gray-600 leading-relaxed'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}>
                {t.hero.description}
              </motion.p>

              {/* Benefits List */}
              <motion.ul
                className='space-y-3'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}>
                {t.hero.benefits.map((benefit: string, index: number) => (
                  <motion.li
                    key={index}
                    className='flex items-start space-x-3'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}>
                    <div className='w-2 h-2 bg-[var(--accent)] rounded-full mt-2 flex-shrink-0'></div>
                    <span className='text-gray-700'>{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA Buttons */}
              <motion.div
                className='flex flex-col sm:flex-row gap-4 pt-4'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}>
                <Link
                  href={`/contact`}
                  className='inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[var(--accent)] rounded-lg hover:bg-[var(--accent-dark)] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
                  {t.hero.cta_primary}
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              className='relative'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}>
              <div className='relative w-full md:h-[500px] flex items-center justify-center'>
                <Image
                  src='/images/services/seo.png'
                  alt={t.hero.image_alt}
                  width={800}
                  height={600}
                  quality={95}
                  className='w-full h-full object-contain max-w-2xl mx-auto'
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='grid md:grid-cols-3 gap-8'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            {t.stats.map((stat, index: number) => (
              <motion.div
                key={index}
                className='text-center p-6 bg-linear-to-br from-[var(--bg-accent-light)] to-[var(--accent-alpha-10)] rounded-xl border border-[var(--accent-alpha-20)]'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}>
                <div className='text-4xl font-bold text-[var(--accent)] mb-2'>{stat.number}</div>
                <div className='text-lg font-semibold text-[var(--foreground)] mb-1'>
                  {stat.title}
                </div>
                <div className='text-gray-600'>{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-20 bg-[var(--bg-primary)]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-4xl font-bold text-[var(--foreground)] mb-4'>{t.process.title}</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.process.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {t.process.steps.map((step, index: number) => (
              <motion.div
                key={index}
                className='relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}>
                <div className='absolute -top-4 left-6 w-8 h-8 bg-[var(--accent)] rounded-full flex items-center justify-center text-white font-bold text-sm'>
                  {index + 1}
                </div>
                <h3 className='text-lg font-bold text-[var(--foreground)] mb-3 mt-4'>
                  {step.title}
                </h3>
                <p className='text-gray-600'>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-4xl font-bold text-[var(--foreground)] mb-4'>{t.features.title}</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.features.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {t.features.items.map((feature, index: number) => (
              <motion.div
                key={index}
                className='p-6 bg-linear-to-br from-[var(--bg-primary)] to-white rounded-xl border border-gray-100 hover:border-[var(--accent-alpha-20)] hover:shadow-lg transition-all duration-300'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}>
                <div className='w-12 h-12 bg-[var(--accent)] rounded-lg flex items-center justify-center mb-4'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                    />
                  </svg>
                </div>
                <h3 className='text-lg font-bold text-[var(--foreground)] mb-3'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Context Section */}
      <section className='py-20 bg-[var(--bg-primary)]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-16 items-start'>
            <div>
              <motion.h2
                className='text-4xl font-bold text-[var(--foreground)] mb-8 leading-tight'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}>
                Pourquoi le SEO est indispensable en 2026
              </motion.h2>
              <motion.div
                className='space-y-5 text-lg text-gray-700 leading-relaxed'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}>
                <p>
                  En 2026, <strong>93 % des expériences en ligne commencent par un moteur de recherche</strong>.
                  Vos clients potentiels tapent leurs besoins sur Google avant même de penser à une recommandation.
                  Si votre site n&apos;apparaît pas dans les 3 premiers résultats organiques, vous laissez 75 %
                  de ce trafic à vos concurrents. Le SEO n&apos;est plus une option — c&apos;est la colonne
                  vertébrale de toute stratégie digitale rentable.
                </p>
                <p>
                  Avec l&apos;essor de l&apos;<strong>IA générative</strong> (ChatGPT, Gemini, Perplexity), le
                  comportement de recherche évolue. Les utilisateurs posent des questions de plus en plus précises
                  et attendent des réponses expertes. Les sites qui dominent en 2026 sont ceux qui démontrent
                  leur <strong>autorité thématique</strong> — pas seulement ceux qui ont le plus de backlinks.
                  Notre approche SEO intègre ces nouvelles réalités : contenu E-E-A-T, structured data, et
                  optimisation pour les featured snippets et AI Overviews.
                </p>
                <p>
                  Notre méthode combine <strong>SEO technique</strong> (Core Web Vitals, architecture de l&apos;information,
                  balisage sémantique), <strong>SEO de contenu</strong> (topical authority, FAQ, articles de fond)
                  et <strong>SEO local</strong> (Google Business Profile, NAP consistency, citations locales).
                  Nous ciblons des résultats durables — pas des positions artificielles qui s&apos;effondrent
                  au prochain update Google.
                </p>
                <p>
                  Nous travaillons principalement avec des entreprises en <strong>France, Belgique et Suisse
                  francophone</strong>. Nos spécialités incluent le SEO local pour Paris, Lyon, Bordeaux,
                  Marseille et leurs agglomérations. Chaque stratégie est construite sur des données réelles :
                  analyse concurrentielle, volume de recherche, intention utilisateur et potentiel de conversion.
                </p>
              </motion.div>
            </div>

            <div>
              <motion.h3
                className='text-2xl font-bold text-[var(--foreground)] mb-6'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}>
                Pour qui nos services SEO sont-ils faits ?
              </motion.h3>
              <motion.div
                className='space-y-4'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}>
                {[
                  {
                    icon: '🏢',
                    title: 'PME & entreprises locales',
                    desc: 'Vous avez un site mais peu de trafic organique. Nous auditons, corrigeons et développons votre visibilité pour capter des prospects qualifiés dans votre zone géographique.'
                  },
                  {
                    icon: '🛒',
                    title: 'E-commerce & boutiques en ligne',
                    desc: 'SEO produit, optimisation des pages catégories, netlinking e-commerce et stratégie de contenu blog pour générer du trafic organique rentable sur votre boutique.'
                  },
                  {
                    icon: '⚕️',
                    title: 'Professions libérales & santé',
                    desc: 'Médecins, avocats, experts-comptables, consultants : positionnement sur des requêtes à forte intention locale et construction d\'autorité E-E-A-T dans votre domaine.'
                  },
                  {
                    icon: '🚀',
                    title: 'Startups & scale-ups',
                    desc: 'Stratégie SEO fondée sur la croissance organique : keyword gap analysis, content marketing, link building et optimisation de conversion pour accélérer votre acquisition.'
                  },
                  {
                    icon: '🌍',
                    title: 'Entreprises multilingues',
                    desc: 'SEO international avec stratégie hreflang, ciblage par pays et adaptation culturelle du contenu pour capter du trafic qualifié en France, Belgique, Suisse et au-delà.'
                  },
                ].map((item, i) => (
                  <div key={i} className='flex gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-[var(--accent-alpha-20)] hover:shadow-md transition-all duration-300'>
                    <span className='text-2xl flex-shrink-0'>{item.icon}</span>
                    <div>
                      <h4 className='font-bold text-[var(--foreground)] mb-1'>{item.title}</h4>
                      <p className='text-gray-600 text-sm leading-relaxed'>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* E-E-A-T Section — Sprint 2 Task 3 */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-4xl font-bold text-[var(--foreground)] mb-4'>
              Notre approche E-E-A-T pour dominer Google en 2026
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Google évalue chaque page selon quatre critères exigeants. Voici comment nous les
              construisons concrètement pour votre site.
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
            {[
              {
                letter: 'E',
                color: 'from-blue-500 to-blue-700',
                title: 'Expérience',
                desc: "Contenu rédigé par des experts qui ont vécu le sujet. Études de cas réels, résultats mesurés, témoignages clients vérifiables — pas du contenu générique.",
              },
              {
                letter: 'E',
                color: 'from-purple-500 to-purple-700',
                title: 'Expertise',
                desc: "Démonstration de maîtrise technique et sectorielle : statistiques sourcées, méthodologie détaillée, références aux bonnes pratiques Google et aux standards du secteur.",
              },
              {
                letter: 'A',
                color: 'from-green-500 to-green-700',
                title: 'Autorité',
                desc: "Construction d'une réputation thématique via le netlinking de qualité, les mentions presse, les partenariats sectoriels et la cohérence du contenu sur votre domaine.",
              },
              {
                letter: 'T',
                color: 'from-orange-500 to-orange-700',
                title: 'Fiabilité',
                desc: "HTTPS, mentions légales, politique de confidentialité RGPD, informations de contact claires, avis clients vérifiés et transparence totale sur l'identité de l'auteur.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className='p-6 bg-[var(--bg-primary)] rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}>
                <div
                  className={`w-12 h-12 bg-linear-to-br ${item.color} rounded-lg flex items-center justify-center text-white font-black text-xl mb-4`}>
                  {item.letter}
                </div>
                <h3 className='text-lg font-bold text-[var(--foreground)] mb-3'>{item.title}</h3>
                <p className='text-gray-600 text-sm leading-relaxed'>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* YMYL note */}
          <motion.div
            className='bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4 items-start'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            <span className='text-2xl flex-shrink-0'>⚠️</span>
            <div>
              <h4 className='font-bold text-amber-900 mb-1'>
                YMYL — Your Money or Your Life : exigences renforcées
              </h4>
              <p className='text-amber-800 text-sm leading-relaxed'>
                Les secteurs Santé, Finance, Juridique et Sécurité sont soumis à des{' '}
                <strong>critères E-E-A-T ultra-stricts</strong>. Pour les médecins, avocats,
                experts-comptables et thérapeutes, nous appliquons une stratégie d&apos;autorité
                renforcée : bios d&apos;auteur avec diplômes et affiliations, sources médicales ou
                juridiques référencées, pages &quot;À propos&quot; détaillées avec accréditations,
                et données structurées Person/MedicalOrganization pour renforcer la confiance de
                Google.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Overviews & SEO 2026 — Sprint 2 Task 4 */}
      <section className='py-20 bg-[var(--bg-primary)]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-16 items-start'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}>
              <h2 className='text-4xl font-bold text-[var(--foreground)] mb-8 leading-tight'>
                AI Overviews, ChatGPT & GEO : optimiser pour les moteurs IA en 2026
              </h2>
              <div className='space-y-5 text-lg text-gray-700 leading-relaxed'>
                <p>
                  Depuis 2024, Google intègre des{' '}
                  <strong>AI Overviews (anciennement SGE)</strong> en haut des pages de résultats.
                  Ces encadrés générés par l&apos;IA résument directement les réponses sans que
                  l&apos;utilisateur ait besoin de cliquer. Pour votre site, cela signifie deux
                  choses : soit vous êtes <strong>cité comme source</strong> dans ces résumés et
                  vous capturez de l&apos;autorité, soit vous êtes invisible et vous perdez des
                  parts de trafic.
                </p>
                <p>
                  La <strong>GEO (Generative Engine Optimization)</strong> est la discipline qui
                  consiste à optimiser votre contenu pour être sélectionné par les LLMs (ChatGPT,
                  Gemini, Perplexity, Claude) comme source de référence. Elle repose sur des
                  contenus structurés, clairs, sourcés et{' '}
                  <strong>répondant précisément aux questions de votre audience</strong>. Notre
                  approche intègre la GEO systématiquement : blocs FAQ, données structurées
                  HowTo/FAQPage/Article, schémas Author et citations vérifiables.
                </p>
                <p>
                  Nous mesurons les performances avec <strong>Google Search Console</strong>,{' '}
                  <strong>Semrush</strong> et <strong>Ahrefs</strong> : positions, taux de clic
                  (CTR), impressions par requête et évolution de l&apos;autorité de domaine. Chaque
                  mois, vous recevez un rapport orienté ROI — pas des métriques creuses, mais des
                  données directement corrélées à votre chiffre d&apos;affaires.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}>
              <h3 className='text-2xl font-bold text-[var(--foreground)] mb-6'>
                Comment nous optimisons pour les IA en pratique
              </h3>
              <div className='space-y-4'>
                {[
                  {
                    icon: '🏗️',
                    title: 'Données structurées Schema.org',
                    desc: 'FAQ, BreadcrumbList, Article, Person, LocalBusiness — chaque page reçoit le balisage JSON-LD approprié pour être correctement interprétée par les LLMs et moteurs de recherche.',
                  },
                  {
                    icon: '❓',
                    title: 'Contenu FAQs & PAA (People Also Ask)',
                    desc: "Nous ciblons systématiquement les questions que posent vos prospects dans Google et dans ChatGPT. Chaque FAQ est rédigée pour obtenir la position zéro et apparaître dans les AI Overviews.",
                  },
                  {
                    icon: '✍️',
                    title: 'Topical authority & clusters thématiques',
                    desc: "Plutôt que des pages isolées, nous construisons des clusters de contenu cohérents : page pilier + articles de soutien + FAQ + glossaire. Google et les IA récompensent la profondeur thématique.",
                  },
                  {
                    icon: '🔗',
                    title: 'Netlinking & citations vérifiables',
                    desc: "Liens entrants depuis des sites d'autorité (presse, annuaires professionnels, partenaires sectoriels) et citations NAP cohérentes pour renforcer la crédibilité aux yeux des algorithmes.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className='flex gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-[var(--accent-alpha-20)] hover:shadow-md transition-all duration-300'>
                    <span className='text-2xl flex-shrink-0'>{item.icon}</span>
                    <div>
                      <h4 className='font-bold text-[var(--foreground)] mb-1'>{item.title}</h4>
                      <p className='text-gray-600 text-sm leading-relaxed'>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Extended FAQ Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-4xl font-bold text-[var(--foreground)] mb-4'>
              FAQ — Optimisation SEO & Référencement
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Toutes vos questions sur le référencement naturel et nos services SEO
            </p>
          </motion.div>

          <motion.div
            className='space-y-0 divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            {[
              {
                q: 'Combien de temps faut-il pour voir des résultats en SEO ?',
                a: 'Les premiers effets sont généralement visibles sous 60 à 90 jours pour les corrections techniques. Pour les gains de positions significatifs sur des mots-clés concurrentiels, comptez 4 à 6 mois. Le SEO est un investissement de moyen-long terme : les résultats sont durables, contrairement au SEA (publicité payante) qui s\'arrête dès que vous coupez le budget.'
              },
              {
                q: 'Quelle est la différence entre SEO local et SEO national ?',
                a: 'Le SEO local cible des requêtes géolocalisées (« dentiste Paris 15 », « plombier Lyon urgence ») et optimise votre fiche Google Business Profile pour apparaître dans le « pack local » des 3 premiers résultats cartographiques. Le SEO national vise des mots-clés sans intention géographique (« logiciel comptabilité PME »). Nous maîtrisons les deux approches et les adaptons à votre marché.'
              },
              {
                q: 'Comment mesurez-vous les résultats de votre travail SEO ?',
                a: 'Nous utilisons Google Search Console, Google Analytics 4, Semrush et Ahrefs. Vous recevez chaque mois un rapport détaillé incluant : évolution des positions sur vos mots-clés cibles, trafic organique, taux de clic (CTR), conversions attribuées au SEO et analyse des opportunités. Tout est transparent, chiffré et orienté ROI.'
              },
              {
                q: 'Le SEO est-il rentable pour les petites entreprises ?',
                a: 'Oui, particulièrement pour les petites entreprises locales. Un artisan, un commerce ou une profession libérale peut capter l\'ensemble des recherches locales avec un investissement SEO modéré — là où une grande enseigne nationale n\'ira pas. Le retour sur investissement est souvent meilleur pour les TPE/PME locales que pour les grandes entreprises sur des mots-clés nationaux.'
              },
              {
                q: 'Travaillez-vous sur des sites déjà existants ou uniquement les nouveaux ?',
                a: 'Les deux. Nous auditons et optimisons des sites existants (migrations, correctifs techniques, enrichissement de contenu) aussi bien que nous intégrons le SEO dès la création d\'un nouveau site. Un audit SEO complet est inclus dans toute prestation, même pour les sites récents — car même un site neuf peut avoir des problèmes d\'indexation ou de structure.'
              },
              {
                q: 'Utilisez-vous des techniques SEO « black hat » ?',
                a: 'Non, jamais. Nous pratiquons exclusivement le SEO white hat : contenus utiles et originaux, netlinking naturel via des partenariats légitimes, optimisation technique conforme aux guidelines Google. Les techniques black hat peuvent générer des résultats rapides mais exposent à des pénalités algorithmiques (Google Penguin, Panda) qui peuvent détruire définitivement votre positionnement.'
              },
              {
                q: 'Proposez-vous des audits SEO pour des sites concurrents ?',
                a: 'Nous réalisons une analyse concurrentielle approfondie dans le cadre de chaque mission SEO. Nous identifions les mots-clés sur lesquels vos concurrents se positionnent, leur stratégie de contenu, leur profil de backlinks et leurs lacunes — pour construire une stratégie qui vous permet de les dépasser.'
              },
            ].map((item, i) => (
              <div key={i} className='p-6 bg-white hover:bg-[var(--bg-primary)] transition-colors'>
                <h3 className='text-lg font-bold text-[var(--foreground)] mb-3'>{item.q}</h3>
                <p className='text-gray-600 leading-relaxed'>{item.a}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      <section className='py-20 bg-[var(--accent)]'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            className='space-y-8'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-4xl font-bold text-white'>{t.cta.title}</h2>
            <p className='text-xl text-white/90 max-w-2xl mx-auto'>{t.cta.description}</p>
            <Link
              href={`/contact`}
              className='inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[var(--accent)] bg-white rounded-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
              {t.cta.primary_button}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
