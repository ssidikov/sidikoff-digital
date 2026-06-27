'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Layers, Search, Zap, Code2, MapPin, Headphones } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { FAQAccordion } from '@/components/FAQAccordion'
import CTAButton from '@/components/ui/CTAButton'
import PortfolioCarousel, {
  convertProjectsToPortfolioItems,
} from '@/components/ui/PortfolioCarousel'
import { getProjects } from '@/data/projects'
import { TESTIMONIALS_DATA } from '@/data/testimonials'
import StarRating from '@/components/ui/StarRating'

export default function AgenceVilleurbanneClient() {
  const shouldReduceMotion = useReducedMotion()

  const projects = getProjects()
  const carouselItems = convertProjectsToPortfolioItems(projects)

  const faqItems = [
    {
      id: '1',
      question: 'Quel est le budget pour la création d\u2019un site web à Villeurbanne ?',
      answer:
        'Un site vitrine professionnel sur mesure démarre à 890€ TTC. Une plateforme multi-pages est proposée à partir de 1 290€, et un site e-commerce performant commence à 1 990€. Nous fournissons un devis clair sous 24 heures, sans aucun frais caché ni abonnement obligatoire.',
      category: 'pricing',
    },
    {
      id: '2',
      question: 'Quel est le délai de livraison pour un projet web ?',
      answer:
        'Pour un site vitrine standard, comptez 5 à 7 jours ouvrés après réception de vos contenus. Les projets plus complexes (boutiques e-commerce ou applications spécifiques) s\u2019étendent de 3 à 6 semaines. Nous validons ensemble un calendrier précis dès le lancement.',
      category: 'timing',
    },
    {
      id: '3',
      question: 'Proposez-vous des prestations de développeur freelance à Villeurbanne ?',
      answer:
        'Oui, nous intervenons également sous format freelance pour renforcer vos équipes ou piloter un projet spécifique : développement Next.js/React, intégration d\u2019API, refonte technique ou audit de performance. Nous vous offrons la flexibilité d\u2019un freelance avec la structure d\u2019une agence.',
      category: 'freelance',
    },
    {
      id: '4',
      question: 'Comment garantissez-vous le bon référencement (SEO) de mon site ?',
      answer:
        'Chaque site est conçu selon les standards les plus stricts de Google : scores Lighthouse proches de 100, temps de chargement sous la seconde, structure sémantique claire et balisage JSON-LD optimisé. Nous configurons également votre fiche Google Business Profile et ciblons les requêtes locales stratégiques à Villeurbanne.',
      category: 'seo',
    },
    {
      id: '5',
      question: 'Serai-je autonome pour modifier les textes ou les images ?',
      answer:
        'Absolument. Nous connectons votre site à un outil de gestion simplifié (comme Sanity ou un WordPress headless). Vous pourrez mettre à jour vos articles, textes et images en quelques clics sans toucher au code. Une formation personnalisée d\u2019une heure est incluse à la livraison.',
      category: 'tech',
    },
    {
      id: '6',
      question: 'Proposez-vous un accompagnement pour la refonte d\u2019un vieux site ?',
      answer:
        'Oui, c\u2019est l\u2019une de nos spécialités. Nous analysons l\u2019existant pour conserver votre historique SEO, puis nous migrons votre contenu vers une architecture Next.js moderne. Vous gagnez immédiatement en vitesse, en sécurité et en taux de conversion.',
      category: 'redesign',
    },
  ]

  const staggerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
  }

  const testimonials = TESTIMONIALS_DATA.slice(0, 3)

  return (
    <div className="relative min-h-screen bg-[#F9F7F7] text-[#112D4E] pt-32 pb-20 font-sans overflow-x-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] rounded-full bg-[#3377FF]/5 blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[#3F72AF]/5 blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Hero Left */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#3377FF]/20 bg-[#3377FF]/5 text-xs font-semibold uppercase tracking-wider text-[#3377FF] mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3377FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3377FF]"></span>
              </span>
              Disponible pour vos projets
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-[#112D4E] uppercase mb-4 max-w-2xl font-[family:var(--font-grotesk)]">
              AGENCE WEB
              <br />
              <span className="text-[#3377FF] block mt-1 lowercase font-normal italic tracking-normal">
                villeurbanne
              </span>
            </h1>

            <p className="text-[#3377FF] text-xl md:text-2xl font-medium tracking-tight mb-8">
              — création de site internet &amp; seo local
            </p>

            <p className="text-base md:text-lg text-[#112D4E]/85 max-w-xl mb-10 leading-relaxed font-light">
              Nous concevons des plateformes web ultra-rapides et développons votre visibilité sur Google à Villeurbanne. Pas de template générique, uniquement du code sur mesure pensé pour capter vos futurs clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
              <CTAButton
                href="/contact"
                variant="primary"
                size="md"
                className="w-full sm:w-auto active:scale-[0.98] transition-transform duration-150"
                trackingAction="click_primary_cta"
                trackingCategory="villeurbanne_hero"
              >
                Lancer mon projet
                <ArrowUpRight className="w-4 h-4 ml-2 shrink-0" />
              </CTAButton>
              <CTAButton
                href="#expertise"
                variant="secondary"
                size="md"
                className="w-full sm:w-auto"
                trackingAction="click_secondary_cta"
                trackingCategory="villeurbanne_hero"
              >
                Découvrir l&apos;expertise
              </CTAButton>
            </div>

            <div className="mt-8 flex flex-col items-start gap-1 text-[11px] uppercase tracking-wider font-semibold text-[#112D4E]/60">
              <p>Par <span className="text-[#112D4E]">Sardorbek Sidikov</span> — Sidikoff Digital</p>
              <p>Mis à jour le 7 Juin 2026</p>
            </div>
          </div>

          {/* Hero Right: Double-Bezel Enclosure */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#DBE2EF]/40 p-2 rounded-[2rem] border border-[#DBE2EF]/80 shadow-soft"
            >
              <div className="relative aspect-[4/3] rounded-[calc(2rem-0.5rem)] overflow-hidden bg-white shadow-soft">
                <Image
                  src="/images/services/villeurbanne-hero-creative.png"
                  alt="Sculpture 3D moderniste représentant l'architecture numérique à Villeurbanne"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Logowall */}
      <section className="relative z-10 w-full border-y border-[#DBE2EF]/60 bg-white/40 py-6 overflow-hidden mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          <span className="text-sm font-bold tracking-widest text-[#112D4E]/80 uppercase">React</span>
          <span className="text-sm font-bold tracking-widest text-[#112D4E]/80 uppercase">Next.js</span>
          <span className="text-sm font-bold tracking-widest text-[#112D4E]/80 uppercase">Tailwind v4</span>
          <span className="text-sm font-bold tracking-widest text-[#112D4E]/80 uppercase">Shopify</span>
          <span className="text-sm font-bold tracking-widest text-[#112D4E]/80 uppercase">Sanity</span>
          <span className="text-sm font-bold tracking-widest text-[#112D4E]/80 uppercase">SEO local</span>
        </div>
      </section>

      {/* [01] Section Expertise (Bento Grid) */}
      <section id="expertise" className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24 scroll-mt-28">
        <div className="mb-12">
          <span className="text-[#3377FF] font-semibold text-xs tracking-wider uppercase mb-2 block">
            [01] Notre Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#112D4E] uppercase tracking-tight font-[family:var(--font-grotesk)]">
            l&apos;artisanat numérique au service du local
          </h2>
        </div>

        <motion.div
          variants={staggerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Card 01: Web Dev - Double Bezel White Card */}
          <motion.div
            variants={itemVariants}
            className="bg-[#DBE2EF]/30 p-2.5 rounded-[2rem] border border-[#DBE2EF]/60 flex flex-col hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="bg-white p-8 rounded-[calc(2rem-0.625rem)] flex flex-col h-full">
              <div className="h-10 w-10 rounded-xl bg-[#3377FF]/10 flex items-center justify-center text-[#3377FF] mb-6">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-[#112D4E] mb-3 font-[family:var(--font-grotesk)]">
                Création Web sur mesure
              </h3>
              <p className="text-sm text-[#112D4E]/80 leading-relaxed font-light mb-6">
                Développement de <Link href="/services/site-vitrine-villeurbanne" className="text-[#3377FF] underline underline-offset-2 hover:text-[#112D4E] transition-colors">sites vitrines</Link> et plateformes <Link href="/services/creation-site-ecommerce" className="text-[#3377FF] underline underline-offset-2 hover:text-[#112D4E] transition-colors">e-commerce</Link> à fort taux de conversion. Conception Next.js / React optimisée pour une vitesse d&apos;affichage instantanée.
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {['Next.js', 'React', 'TypeScript'].map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-[#F9F7F7] text-[#112D4E]/70 text-[10px] font-bold uppercase rounded-md tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 02: SEO Local - Drenched Navy Card */}
          <motion.div
            variants={itemVariants}
            className="bg-[#112D4E] p-2.5 rounded-[2rem] flex flex-col hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 text-white"
          >
            <div className="bg-gradient-to-br from-[#112D4E] to-[#1e3e6b] p-8 rounded-[calc(2rem-0.625rem)] flex flex-col h-full relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#3377FF]/10 rounded-full blur-xl" />
              <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-[#3377FF] mb-6">
                <Search className="w-5 h-5 text-[#3377FF]" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-3 font-[family:var(--font-grotesk)]">
                Référencement SEO Local
              </h3>
              <p className="text-sm text-white/80 leading-relaxed font-light mb-6">
                Positionnement ciblé sur Villeurbanne, Lyon et Gratte-Ciel. Nous optimisons l&apos;aspect technique de votre site et vos contenus pour capter les requêtes clés de vos futurs clients. Découvrez notre <Link href="/services/seo-villeurbanne" className="text-[#3377FF] underline underline-offset-2 hover:text-white transition-colors">expertise SEO à Villeurbanne</Link>.
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {['SEO Local', 'JSON-LD', 'Audit'].map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-white/10 text-white/95 text-[10px] font-bold uppercase rounded-md tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 03: Software - Double Bezel with visual preview inside */}
          <motion.div
            variants={itemVariants}
            className="bg-[#DBE2EF]/30 p-2.5 rounded-[2rem] border border-[#DBE2EF]/60 flex flex-col hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="bg-white p-6 rounded-[calc(2rem-0.625rem)] flex flex-col h-full">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-6 shadow-soft bg-[#F9F7F7]">
                <Image
                  src="/images/services/villeurbanne-seo-performance.png"
                  alt="Interface d'analyse de croissance SEO"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 350px"
                />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight text-[#112D4E] mb-2 font-[family:var(--font-grotesk)]">
                Logiciel Métier &amp; SaaS
              </h3>
              <p className="text-xs text-[#112D4E]/80 leading-relaxed font-light">
                Automatisation de vos processus internes, création d&apos;outils CRM/ERP simplifiés et intégration d&apos;APIs pour une efficacité opérationnelle maximale.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* [02] Section Projets (Portfolio Carousel) */}
      <section className="relative z-10 mb-24">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-4">
          <span className="text-[#3377FF] font-semibold text-xs tracking-wider uppercase mb-2 block">
            [02] Nos Réalisations
          </span>
        </div>
        <PortfolioCarousel
          items={carouselItems}
          title="Des projets livrés à Villeurbanne et au-delà"
          subtitle="Sites vitrines, e-commerce et applications web conçus sur mesure"
          isHomePage={false}
        />
      </section>

      {/* [03] Section Local Context (Asymmetric Split) */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Left */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-[#3377FF] font-semibold text-xs tracking-wider uppercase mb-2 block">
              [03] Ancrage local
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#112D4E] uppercase tracking-tight font-[family:var(--font-grotesk)] mb-6">
              Pourquoi choisir notre agence à Villeurbanne ?
            </h2>

            <div className="space-y-6 text-base text-[#112D4E]/80 font-light leading-relaxed">
              <p>
                Deuxième commune de la métropole avec plus de 150 000 habitants, <strong className="font-semibold text-[#112D4E]">Villeurbanne</strong> possède une vitalité économique unique. Des boutiques animées du Cours Émile Zola aux restaurants branchés des Gratte-Ciel, en passant par les start-ups technologiques de La Doua et le secteur résidentiel de Cusset, chaque quartier a ses codes.
              </p>
              <p>
                Contrairement aux marchés saturés de Lyon intramuros, Villeurbanne offre d&apos;immenses opportunités de positionnement local sur Google. Notre <Link href="/services/agence-web-lyon" className="text-[#3377FF] underline underline-offset-2 hover:text-[#112D4E] transition-colors">agence web</Link> maîtrise parfaitement le marché local pour concevoir un <Link href="/services/creation-site-internet-lyon" className="text-[#3377FF] underline underline-offset-2 hover:text-[#112D4E] transition-colors">site internet</Link> qui répond directement aux attentes des professionnels du Grand Lyon.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['Gratte-Ciel', 'Charpennes', 'La Doua', 'Cusset', 'Grand Lyon'].map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 bg-[#DBE2EF]/40 border border-[#DBE2EF]/60 text-xs font-semibold uppercase rounded-full tracking-wider text-[#112D4E]/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Visual Right */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#DBE2EF]/40 p-2 rounded-[2rem] border border-[#DBE2EF]/80 shadow-soft"
            >
              <div className="relative aspect-square rounded-[calc(2rem-0.5rem)] overflow-hidden bg-white shadow-soft">
                <Image
                  src="/images/services/villeurbanne-local-impact.png"
                  alt="Espace de travail épuré face aux toits de Villeurbanne"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* [04] Pourquoi SIDIKOFF DIGITAL */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <span className="text-[#3377FF] font-semibold text-xs tracking-wider uppercase mb-2 block">
            [04] Nos Engagements
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#112D4E] uppercase tracking-tight font-[family:var(--font-grotesk)]">
            Pourquoi SIDIKOFF DIGITAL ?
          </h2>
        </div>

        <motion.div
          variants={staggerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            {
              icon: <Zap className="w-5 h-5" />,
              title: 'Performance extrême',
              desc: 'Scores Lighthouse supérieurs à 95. Temps de chargement sous la seconde. Votre site se charge plus vite que ceux de vos concurrents à Villeurbanne.',
            },
            {
              icon: <Code2 className="w-5 h-5" />,
              title: 'Code sur mesure, zéro template',
              desc: 'Nous développons en Next.js et React — pas de WordPress, pas de page builder. Chaque ligne de code est écrite pour votre projet, garantissant flexibilité et pérennité.',
            },
            {
              icon: <MapPin className="w-5 h-5" />,
              title: 'Proximité locale',
              desc: 'Basés à Villeurbanne, quartier Gratte-Ciel. Réunions en présentiel possibles. Nous connaissons le tissu économique local et les habitudes de recherche de vos clients.',
            },
            {
              icon: <Headphones className="w-5 h-5" />,
              title: 'Réactivité & suivi',
              desc: 'Un interlocuteur unique, des réponses sous 2 heures en semaine. Pas de ticket support anonyme — une vraie relation de confiance avec votre développeur.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-[#DBE2EF]/30 p-2.5 rounded-[2rem] border border-[#DBE2EF]/60 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-white p-8 rounded-[calc(2rem-0.625rem)] flex flex-col h-full">
                <div className="h-10 w-10 rounded-xl bg-[#3377FF]/10 flex items-center justify-center text-[#3377FF] mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#112D4E] mb-3 font-[family:var(--font-grotesk)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#112D4E]/80 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* [05] Témoignages clients */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <span className="text-[#3377FF] font-semibold text-xs tracking-wider uppercase mb-2 block">
            [05] Avis Clients
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#112D4E] uppercase tracking-tight font-[family:var(--font-grotesk)]">
            Ce que disent nos clients
          </h2>
          <p className="mt-4 text-base text-[#112D4E]/70 font-light max-w-2xl">
            Chaque projet est une collaboration. Voici les retours de nos clients à Lyon et Villeurbanne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#DBE2EF]/30 p-2.5 rounded-[2rem] border border-[#DBE2EF]/60 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-white p-6 rounded-[calc(2rem-0.625rem)] flex flex-col h-full relative">
                <span className="pointer-events-none absolute -right-1 top-2 text-[4rem] leading-none text-[#3377FF]/10">
                  &rdquo;
                </span>
                <StarRating rating={testimonial.rating} size="sm" animated={false} className="mb-4" />
                <blockquote className="text-sm text-[#112D4E]/85 leading-relaxed font-light mb-6 line-clamp-5">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <div className="mt-auto pt-4 border-t border-[#DBE2EF]/60">
                  <p className="text-sm font-semibold text-[#112D4E]">{testimonial.author}</p>
                  <p className="text-xs text-[#112D4E]/60 mt-1">{testimonial.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://maps.app.goo.gl/1aArF53esMA5vco28"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#3377FF] hover:text-[#112D4E] transition-colors underline underline-offset-4"
          >
            Lire tous nos avis sur Google
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* [06] Production Protocol */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-[#3377FF] font-semibold text-xs tracking-wider uppercase mb-2 block">
              [06] Notre Méthode
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#112D4E] uppercase tracking-tight font-[family:var(--font-grotesk)] mb-6">
              notre protocole de création
            </h2>
            <p className="text-base text-[#112D4E]/80 font-light leading-relaxed max-w-md">
              Nous appliquons un processus rigoureux de l&apos;audit initial à la mise en ligne pour assurer la performance technique et le succès SEO de votre site.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {[
              {
                num: '01',
                title: 'Audit & Analyse Sémantique',
                desc: 'Étude minutieuse de vos concurrents à Villeurbanne et définition des requêtes les plus rentables pour votre secteur d&apos;activité.',
              },
              {
                num: '02',
                title: 'Design UI/UX & Prototypes',
                desc: 'Création d&apos;une maquette sur mesure axée sur l&apos;expérience utilisateur, évitant tout template rigide.',
              },
              {
                num: '03',
                title: 'Intégration Next.js / React',
                desc: 'Développement d&apos;un code propre et rapide. Nous ciblons des performances Lighthouse supérieures à 95 %.',
              },
              {
                num: '04',
                title: 'Déploiement & Suivi SEO',
                desc: 'Mise en ligne sécurisée et configuration complète des outils de suivi pour mesurer votre trafic organique.',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-6 p-6 border border-[#DBE2EF]/60 bg-white/70 rounded-2xl shadow-soft hover:shadow-soft-md transition-all duration-300"
              >
                <span className="text-2xl font-black text-[#3377FF] font-[family:var(--font-grotesk)]">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wide text-[#112D4E] mb-2 font-[family:var(--font-grotesk)]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#112D4E]/80 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: step.desc }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [07] FAQ Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-24 scroll-mt-28">
        <div className="text-center mb-12">
          <span className="text-[#3377FF] font-semibold text-xs tracking-wider uppercase mb-2 block">
            [07] Foire aux questions
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#112D4E] uppercase tracking-tight font-[family:var(--font-grotesk)]">
            des réponses claires à vos questions
          </h2>
        </div>

        <div className="mt-8 text-left">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* [08] Carte — Gratte-Ciel, Villeurbanne */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-[#3377FF] font-semibold text-xs tracking-wider uppercase mb-2 block">
              [08] Nous trouver
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#112D4E] uppercase tracking-tight font-[family:var(--font-grotesk)] mb-6">
              Au cœur de Villeurbanne
            </h2>
            <div className="space-y-4 text-base text-[#112D4E]/80 font-light leading-relaxed">
              <p>
                Notre agence est située dans le quartier <strong className="font-semibold text-[#112D4E]">Gratte-Ciel</strong>, au centre de Villeurbanne — à quelques minutes du métro.
              </p>
              <p className="text-sm font-medium text-[#112D4E]">
                📍 73 Rue Racine, 69100 Villeurbanne
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=73+Rue+Racine+69100+Villeurbanne"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#3377FF] hover:text-[#112D4E] transition-colors underline underline-offset-4"
            >
              Ouvrir dans Google Maps
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#DBE2EF]/40 p-2 rounded-[2rem] border border-[#DBE2EF]/80 shadow-soft"
            >
              <div className="relative aspect-[16/10] rounded-[calc(2rem-0.5rem)] overflow-hidden bg-white shadow-soft">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.508!2d4.8788!3d45.7676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea9d3e0b4b1f%3A0x0!2s73+Rue+Racine%2C+69100+Villeurbanne!5e0!3m2!1sfr!2sfr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', inset: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte Sidikoff Digital — 73 Rue Racine, Villeurbanne"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* [09] Internal Links Cluster (expanded) */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="text-center mb-10">
          <span className="text-[#3377FF] font-semibold text-xs tracking-wider uppercase mb-2 block">
            [09] Proximité
          </span>
          <h2 className="text-xl md:text-2xl font-bold uppercase text-[#112D4E] font-[family:var(--font-grotesk)]">
            Création de sites internet dans la Métropole de Lyon
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              city: 'Agence Web Lyon',
              desc: 'Création de site internet et référencement SEO pour les entreprises lyonnaises.',
              link: '/services/agence-web-lyon',
            },
            {
              city: 'Refonte Site Villeurbanne',
              desc: 'Modernisation technique de vos anciens sites internet vers Next.js.',
              link: '/services/refonte-site-villeurbanne',
            },
            {
              city: 'Création Site Caluire',
              desc: 'Sites vitrines et e-commerce locaux pour commerçants de Caluire-et-Cuire.',
              link: '/services/creation-site-web-caluire-et-cuire',
            },
            {
              city: 'Site Vitrine Villeurbanne',
              desc: 'Création de sites de présentation sur mesure pour artisans et professions libérales.',
              link: '/services/site-vitrine-villeurbanne',
            },
            {
              city: 'SEO Villeurbanne',
              desc: 'Audit et optimisation du référencement naturel pour gagner en visibilité locale.',
              link: '/services/seo-villeurbanne',
            },
            {
              city: 'Agence Web France',
              desc: 'Nous accompagnons des clients dans toute la France avec la même exigence qualité.',
              link: '/services/agence-web-france',
            },
            {
              city: 'SEO Lyon',
              desc: 'Stratégie SEO complète pour dominer les résultats de recherche à Lyon.',
              link: '/services/seo-lyon',
            },
            {
              city: 'Création Site Lyon',
              desc: 'Sites internet professionnels livrés en 7 jours pour PME et indépendants lyonnais.',
              link: '/services/creation-site-internet-lyon',
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="block border border-[#DBE2EF]/60 bg-white/60 rounded-2xl p-6 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-[#3377FF] text-sm font-bold uppercase mb-2 font-[family:var(--font-grotesk)]">
                {item.city}
              </h3>
              <p className="text-xs text-[#112D4E]/80 leading-relaxed font-light">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden py-16 px-8 md:p-20 rounded-[2.5rem] bg-[#112D4E] text-white shadow-soft-xl text-center border border-white/10"
        >
          <div className="absolute top-0 left-0 -translate-x-12 -translate-y-12 w-64 h-64 bg-[#3377FF]/10 rounded-full blur-[80px] pointer-events-none" />

          <span className="bg-[#3377FF] text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px] inline-block mb-6 border border-white/10">
            Démarrer
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight leading-tight font-[family:var(--font-grotesk)]">
            un projet web à Villeurbanne ?
          </h2>
          <p className="text-sm md:text-base text-white/80 font-light mb-8 max-w-xl mx-auto leading-relaxed">
            Discutons de vos objectifs et élaborons une stratégie sur mesure pour propulser votre présence numérique à Lyon et Villeurbanne.
          </p>
          <CTAButton
            href="/contact"
            variant="outline"
            className="bg-white text-[#112D4E] border-white hover:bg-[#F9F7F7] hover:text-[#112D4E] shadow-soft-md text-sm px-8 py-3.5 rounded-full active:scale-[0.98] transition-transform duration-150 banner-button-white"
            trackingAction="villeurbanne_bottom_cta"
            trackingCategory="villeurbanne_footer"
          >
            Obtenir un devis gratuit
            <ArrowUpRight className="w-4 h-4 ml-2 shrink-0" />
          </CTAButton>
        </motion.div>
      </section>
    </div>
  )
}
