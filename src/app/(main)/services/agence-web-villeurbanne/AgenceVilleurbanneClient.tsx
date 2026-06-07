'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, Globe, Sparkles, CheckSquare } from 'lucide-react'
import Link from 'next/link'
import { FAQAccordion } from '@/components/FAQAccordion'
import CTAButton from '@/components/ui/CTAButton'

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export default function AgenceVilleurbanneClient() {
  const faqItems = [
    {
      id: '1',
      question: 'Quel est le coût d’un site internet à Villeurbanne ?',
      answer:
        'Un site vitrine professionnel à Villeurbanne démarre à 890€ TTC, livré en 5 à 7 jours ouvrés. Un site multi-pages (3 à 5 pages) est proposé à 1 290€, idéal pour les commerces de Gratte-Ciel, Charpennes et Cusset. Un e-commerce complet démarre à 1 990€ avec gestion des stocks et paiement sécurisé. Devis gratuit sous 24h, sans frais cachés.',
      category: 'pricing',
    },
    {
      id: '2',
      question: 'Combien de temps pour livrer un site web à Villeurbanne ?',
      answer:
        'Entre 5 et 7 jours ouvrés for un site vitrine standard, 10 à 14 jours pour un site multi-pages. Les e-commerces et applications sur mesure prennent 4 à 8 semaines selon la complexité. Nous proposons aussi un service express. Les délais sont garantis par contrat et un planning détaillé est remis dès la validation du devis.',
      category: 'timing',
    },
    {
      id: '3',
      question: 'Votre agence web de Villeurbanne fait-elle du SEO local ?',
      answer:
        'Oui, le SEO local est au cœur de notre méthode. Nous optimisons chaque page pour les recherches géolocalisées (Villeurbanne, Gratte-Ciel, Charpennes, Grand Lyon), configurons votre fiche Google Business Profile et créons du contenu ancré localement pour un positionnement durable. Nos sites Next.js obtiennent systématiquement des scores Lighthouse > 95 — un avantage SEO direct face aux concurrents.',
      category: 'seo',
    },
    {
      id: '4',
      question: 'Utilisez-vous des technologies modernes comme Next.js ?',
      answer:
        'Oui, Next.js est notre framework principal pour tous les projets professionnels. Il garantit des scores Lighthouse 95+, un chargement en moins d’une seconde (LCP < 2,5s), une sécurité renforcée et un excellent SEO natif. Nous utilisons aussi React, TypeScript, Tailwind CSS et des CMS headless (Sanity, Strapi) pour vous rendre autonome dans la gestion du contenu.',
      category: 'tech',
    },
    {
      id: '5',
      question: 'Puis-je mettre à jour mon site sans compétences techniques ?',
      answer:
        'Oui, tous nos sites sont livrés avec un back-office intuitif ou un CMS (Sanity, WordPress headless). Vous gérez textes, images et articles de blog en totale autonomie. Une formation complète de 1 à 2h est incluse dans chaque livraison. Si vous préférez déléguer, nos forfaits maintenance (dès 49€/mois) prennent en charge toutes les mises à jour.',
      category: 'tech',
    },
    {
      id: '6',
      question: 'Proposez-vous un suivi après la mise en ligne ?',
      answer:
        'Absolument. Nous proposons des contrats de maintenance mensuelle : mises à jour de sécurité, sauvegardes quotidiennes, monitoring 24/7, support réactif et petites évolutions incluses. Vous avez un interlocuteur unique basé à Villeurbanne, disponible rapidement pour toute intervention.',
      category: 'maintenance',
    },
    {
      id: '7',
      question: 'Proposez-vous des services de développeur web freelance à Villeurbanne ?',
      answer:
        'Oui. En tant que développeur web freelance basé à Villeurbanne, nous intervenons directement chez vous ou à distance : création de site, refonte, intégration d’API, migration Next.js ou développement de fonctionnalités spécifiques. Nous offrons la flexibilité d’un freelance avec les ressources d’une agence structurée.',
      category: 'freelance',
    },
    {
      id: '8',
      question: 'Faites-vous de la refonte de site web à Villeurbanne ?',
      answer:
        'Oui, la refonte de site web est l’un de nos services phares à Villeurbanne. Nous migrons vos anciens sites (WordPress, Wix, Squarespace) vers Next.js pour un gain de performance immédiat : chargement plus rapide, meilleur SEO, design modernisé et code maintenable. Chaque refonte inclut un audit technique préalable et une stratégie SEO de reconversion.',
      category: 'redesign',
    },
  ]

  return (
    <div
      className="relative min-h-screen bg-[#F9F7F7] text-[#112D4E] selection:bg-[#3377FF] selection:text-white pt-32 pb-20 font-sans overflow-x-hidden"
      style={{
        backgroundImage: 'linear-gradient(225deg, #FDF2F8 5%, #EBF2FF 30%, #F9F7F7 70%, #F0F9FF 95%)',
        backgroundSize: 'cover',
      }}
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#112D4E 1px, transparent 1px), linear-gradient(90deg, #112D4E 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Top Banner Ticker */}
      <div className="w-full border-y border-[#3377FF]/20 bg-[#3377FF]/5 text-[#3377FF] py-3.5 overflow-hidden mb-12 md:mb-20">
        <div className="flex w-full whitespace-nowrap overflow-hidden items-center justify-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest">
            — Agence web Villeurbanne — Gratte-ciel, Charpennes, Cusset, La Doua, Création de site internet & SEO —
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#3377FF]/35 bg-[#3377FF]/8 shadow-sm mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs uppercase font-semibold tracking-wider text-[#3377FF]">
            Disponible pour projets
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-[#112D4E] max-w-5xl leading-[1.1] uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AGENCE WEB VILLEURBANNE
          <br />
          <span className="text-[#3377FF] block mt-3 text-3xl md:text-5xl lg:text-6xl italic font-semibold tracking-normal lowercase">
            — création site internet & seo villeurbanne
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-[#112D4E]/85 max-w-3xl mx-auto mb-12 leading-relaxed border-l-2 border-[#3377FF] pl-6 text-left font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Propulsez votre visibilité en ligne avec une esthétique moderne. Nous concevons des
          plateformes web sur-mesure pour les entreprises locales, des boutiques en ligne
          performantes et déployons une stratégie SEO Villeurbanne implacable.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <CTAButton
            href="/contact"
            variant="primary"
            size="md"
            className="w-full sm:w-auto"
            trackingAction="click_primary_cta"
            trackingCategory="villeurbanne_hero"
          >
            Démarrer le projet
            <ArrowUpRight className="w-5 h-5 ml-2 shrink-0" />
          </CTAButton>
          <CTAButton
            href="#expertise"
            variant="secondary"
            size="md"
            className="w-full sm:w-auto"
            trackingAction="click_secondary_cta"
            trackingCategory="villeurbanne_hero"
          >
            Explorer notre expertise
          </CTAButton>
        </motion.div>

        {/* Freshness & Author Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-col items-center gap-1.5 text-[11px] uppercase tracking-wider font-medium text-[#112D4E]/70"
        >
          <p>
            Par <span rel="author" className="font-semibold">Sardorbek Sidikov</span> — Sidikoff Digital
          </p>
          <p>
            Mis à jour le 12 May 2026
          </p>
        </motion.div>
      </section>

      {/* Subtle Divider */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20 md:my-28">
        <div className="h-px bg-gradient-to-r from-transparent via-[#112D4E]/10 to-transparent w-full" />
      </div>

      {/* Expertise Section */}
      <section id="expertise" className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-28">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          className="mb-14"
        >
          <span className="text-[#3377FF] font-semibold text-sm tracking-wider uppercase mb-3 block">
            [01] Notre Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#112D4E] uppercase tracking-tight">
            LES COMPÉTENCES DE NOTRE CABINET
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Card 1 */}
          <motion.div
            variants={fadeIn}
            className="bg-white border border-slate-200/80 rounded-2xl shadow-xl shadow-slate-100/50 p-8 flex flex-col relative group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full flex items-start justify-end p-6">
              <Globe className="text-amber-600 w-7 h-7" />
            </div>
            <span className="text-4xl font-extrabold text-slate-200 block mb-6">
              01
            </span>
            <h3 className="text-2xl font-bold mb-4 text-[#112D4E] uppercase tracking-wide">CRÉATION WEB</h3>
            <p className="text-[#112D4E]/80 font-normal leading-relaxed mb-8 flex-grow">
              Plateformes vitrines modernes, e-commerce immersifs. Coder avec intégrité pour une
              conversion maximale.
            </p>
            <div className="flex gap-2 flex-wrap">
              {['NEXT.JS', 'TAILWIND', 'SHOPIFY'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-slate-100 text-slate-700 text-[10px] font-bold uppercase rounded-md tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeIn}
            className="bg-gradient-to-br from-[#112D4E] to-[#1e3e6b] text-white rounded-2xl shadow-2xl p-8 flex flex-col relative group transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#3377FF]/25 to-transparent rounded-bl-full flex items-start justify-end p-6">
              <Code2 className="text-[#3377FF] w-7 h-7" />
            </div>
            <span className="text-4xl font-extrabold text-white/10 block mb-6">
              02
            </span>
            <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-wide">GÉNIE LOGICIEL</h3>
            <p className="text-white/80 font-normal leading-relaxed mb-8 flex-grow">
              Automatisation et conception d&apos;ERP/CRM sur-mesure. Intégration IA pour optimiser
              la logistique interne.
            </p>
            <div className="flex gap-2 flex-wrap">
              {['REACT', 'NODE', 'PYTHON'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-white/10 text-white/90 border border-white/10 text-[10px] font-bold uppercase rounded-md tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={fadeIn}
            className="bg-white border border-slate-200/80 rounded-2xl shadow-xl shadow-slate-100/50 p-8 flex flex-col relative group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full flex items-start justify-end p-6">
              <Sparkles className="text-purple-600 w-7 h-7" />
            </div>
            <span className="text-4xl font-extrabold text-slate-200 block mb-6">
              03
            </span>
            <h3 className="text-2xl font-bold mb-4 text-[#112D4E] uppercase tracking-wide">STRATÉGIE SEO</h3>
            <p className="text-[#112D4E]/80 font-normal leading-relaxed mb-8 flex-grow">
              Classement organique de haut vol. Visibilité pérenne sur Google pour capter la
              clientèle du Grand Lyon.
            </p>
            <div className="flex gap-2 flex-wrap">
              {['AUDIT', 'CONTENT', 'LOCAL'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-slate-100 text-slate-700 text-[10px] font-bold uppercase rounded-md tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Subtle Divider */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20 md:my-28">
        <div className="h-px bg-gradient-to-r from-transparent via-[#112D4E]/10 to-transparent w-full" />
      </div>

      {/* Local Process Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <span className="text-[#3377FF] font-semibold text-sm tracking-wider uppercase mb-3 block">
              [02] Pourquoi le local ?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#112D4E] mb-8 uppercase tracking-tight">
              L&apos;excellence à l&apos;échelle de votre territoire
            </h2>
            <div className="space-y-4 font-normal text-base text-[#112D4E]/90">
              {[
                'Consultation rapide sur Villeurbanne, Lyon et alentours.',
                'Saisie optimale des enjeux de la concurrence régionale.',
                'Développement 100% français sans aucune sous-traitance cachée.',
                'Engagement de qualité garanti pour nos structures partenaires.',
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 border border-slate-200/80 bg-white/70 rounded-2xl shadow-sm hover:shadow-md transition-shadow items-center"
                >
                  <div className="h-7 w-7 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                    <CheckSquare className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="font-medium text-foreground">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 w-full"
          >
            <div className="bg-gradient-to-br from-[#112D4E] to-[#1d3d67] text-white rounded-2xl shadow-2xl p-8 lg:p-10 border border-white/10 flex flex-col">
              <h3 className="text-xl font-bold uppercase mb-6 border-b border-white/15 pb-4 tracking-wider text-[#3377FF]">
                PROTOCOLE DE PRODUCTION
              </h3>
              <div className="space-y-0">
                {[
                  { n: '01', t: 'Audit & Direction' },
                  { n: '02', t: 'Design UI/UX & Architecture' },
                  { n: '03', t: 'Intégration Typographique' },
                  { n: '04', t: 'Sécurité & Déploiement' },
                ].map((step, i) => (
                  <div
                    key={i}
                    className="flex border-b border-white/10 py-5 last:border-0 group cursor-default"
                  >
                    <span className="text-2xl font-bold text-[#3377FF]/80 mr-6 shrink-0">
                      {step.n}
                    </span>
                    <p className="text-lg font-medium text-white/95 self-center">
                      {step.t}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subtle Divider */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20 md:my-28">
        <div className="h-px bg-gradient-to-r from-transparent via-[#112D4E]/10 to-transparent w-full" />
      </div>

      {/* Local Depth Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-[#3377FF] font-semibold text-sm tracking-wider uppercase mb-3 block">
            [03] Contexte local
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#112D4E] mb-10 uppercase tracking-tight">
            Pourquoi Villeurbanne ?
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6 text-base md:text-lg text-[#112D4E]/85 font-light leading-relaxed">
              <p>
                Villeurbanne est la{' '}
                <strong className="font-semibold text-foreground">deuxième ville la plus peuplée de la région Auvergne-Rhône-Alpes</strong>,
                avec plus de 150 000 habitants et un tissu économique dense. Gratte-Ciel,
                Charpennes, Cusset, La Doua : chaque quartier a ses propres dynamiques commerciales
                et ses propres opportunités digitales.
              </p>
              <p>
                Contrairement à Lyon intramuros où la concurrence digitale est saturée,{' '}
                <strong className="font-semibold text-foreground">
                  Villeurbanne offre des fenêtres de positionnement SEO local encore accessibles
                </strong>{' '}
                pour les PME, artisans et professions libérales. Une stratégie bien menée permet
                d&apos;apparaître en première position sur des requêtes comme « plombier Villeurbanne »,
                « coiffeur Charpennes » ou « agence immobilière Gratte-Ciel ».
              </p>
              <p>
                Notre agence, basée à Villeurbanne et Lyon, connaît parfaitement ce marché. Nous
                avons accompagné des commerces du Cours Émile Zola, des cabinets médicaux près de
                l&apos;Hôpital Desgenettes, des restaurants autour du Parc de la Feyssine et des
                entreprises tech du quartier de La Doua. Cette expertise locale se traduit
                concrètement dans nos maquettes, nos contenus et notre stratégie SEO.
              </p>
              <p>
                En 2026, un site web professionnel à Villeurbanne est un{' '}
                <strong className="font-semibold text-foreground">investissement rentable</strong> : nos clients constatent en moyenne une
                augmentation de 3 à 5× de leurs leads en ligne dans les 6 premiers mois suivant la
                mise en ligne d&apos;un site optimisé SEO.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-bold uppercase mb-6 tracking-widest text-[#3377FF]">
                Pour qui travaillons-nous ?
              </h3>
              {[
                {
                  n: '→',
                  t: 'Commerces & artisans',
                  d: 'Boulangers, coiffeurs, plombiers, électriciens : vitrine locale, SEO de proximité, Google Business Profile optimisé.',
                },
                {
                  n: '→',
                  t: 'Professions de santé',
                  d: 'Médecins, dentistes, kinés, ostéopathes : sites RGPD-conformes avec prise de RDV en ligne intégrée (Doctolib, Calendly).',
                },
                {
                  n: '→',
                  t: 'PME & industries',
                  d: 'Entreprises du Grand Lyon : catalogues produits, sites institutionnels, outils de gestion interne sur mesure.',
                },
                {
                  n: '→',
                  t: 'Startups tech & SaaS',
                  d: 'Portails, applications web, landing pages de conversion et MVP pour les entreprises innovantes du pôle technologique de La Doua.',
                },
                {
                  n: '→',
                  t: 'Restauration & événementiel',
                  d: 'Sites avec menus, galeries, réservation en ligne et SEO local pour capter la clientèle du secteur Tonkin / Gratte-Ciel.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 border border-slate-200/80 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-[#3377FF] font-bold text-lg flex-shrink-0">
                    {item.n}
                  </span>
                  <div>
                    <p className="font-bold text-sm uppercase mb-1.5 text-foreground tracking-wide">
                      {item.t}
                    </p>
                    <p className="text-[#112D4E]/80 text-sm leading-relaxed font-light">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Subtle Divider */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20 md:my-28">
        <div className="h-px bg-gradient-to-r from-transparent via-[#112D4E]/10 to-transparent w-full" />
      </div>

      {/* Consultant SEO Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#112D4E] to-[#1c375b] text-white rounded-3xl shadow-2xl p-8 md:p-16 border border-white/10 relative overflow-hidden"
        >
          {/* Decorative design orbs in dark box */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#3377FF]/10 rounded-full blur-[100px] pointer-events-none" />

          <span className="text-[#3377FF] font-semibold text-sm tracking-wider uppercase mb-3 block">
            [04] Audit & Accompagnement
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-10 uppercase tracking-tight">
            Besoin d’un consultant SEO à Villeurbanne ?
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
            <div className="space-y-6 text-base md:text-lg text-white/80 font-light leading-relaxed">
              <p>
                Avoir un site esthétique ne suffit plus dans le marché ultra-concurrentiel du Grand
                Lyon. En tant que <strong className="font-semibold text-white">consultant SEO à Villeurbanne</strong>, notre rôle est
                d&apos;analyser votre visibilité en ligne, de comprendre les intentions de recherche de
                vos futurs clients et d&apos;optimiser chaque aspect technique de votre domaine. Le{' '}
                <strong className="font-semibold text-white">SEO Villeurbanne</strong> est essentiel pour vous démarquer.
              </p>
              <p>
                Nous réalisons un <strong className="font-semibold text-white">audit SEO complet</strong> pour identifier les freins à
                votre classement organique. Qu&apos;il s&apos;agisse de corriger des problèmes de performance,
                d&apos;optimiser vos balises H1, d&apos;améliorer l&apos;expérience utilisateur ou de concevoir une
                architecture de contenu performante, nous posons les bases d&apos;une croissance durable
                pour des solutions web performantes. Notre expertise en{' '}
                <strong className="font-semibold text-white">SEO Villeurbanne</strong> couvre tous les aspects on-page et off-page.
              </p>
              <p>
                Chaque mois, nous monitorons vos positions sur des mots-clés stratégiques comme
                &quot;création site internet villeurbanne&quot;, &quot;boutiques en ligne&quot;, &quot;seo villeurbanne&quot;, ou
                votre propre cœur de métier, en ajustant la stratégie pour vous permettre de
                devancer vos concurrents locaux à Lyon, Bron et Villeurbanne. Devenez leader dans
                votre secteur d&apos;activité avec notre accompagnement en{' '}
                <strong className="font-semibold text-white">SEO Villeurbanne</strong>.
              </p>
            </div>
            <div className="space-y-4 w-full">
              {[
                {
                  title: 'Audit Technique SEO',
                  desc: 'Analyse approfondie de la vitesse (Core Web Vitals), indexabilité, et structure sémantique.',
                },
                {
                  title: 'Optimisation de Contenu',
                  desc: 'Recherche de mots-clés (SEO local villeurbanne), rédaction sémantique et référencement naturel.',
                },
                {
                  title: 'Netlinking & Autorité',
                  desc: 'Acquisition de liens de qualité depuis des médias et annuaires locaux en région lyonnaise.',
                },
                {
                  title: 'Google Business Profile',
                  desc: 'Optimisation maximale pour dominer le référencement local sur Google Maps à Villeurbanne.',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <h4 className="font-semibold text-[#3377FF] text-base uppercase mb-2 tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-sm font-light text-white/80 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Subtle Divider */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20 md:my-28">
        <div className="h-px bg-gradient-to-r from-transparent via-[#112D4E]/10 to-transparent w-full" />
      </div>

      {/* FAQ Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-[#3377FF] font-semibold text-sm tracking-wider uppercase mb-3 block">
            [05] Questions fréquentes
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#112D4E] uppercase tracking-tight mb-4">
            FAQ — Agence Web Villeurbanne
          </h2>
          <p className="text-lg text-[#112D4E]/70 max-w-2xl font-light mb-12">
            Retrouvez les réponses aux questions les plus fréquentes concernant nos solutions de création de site web et de référencement local.
          </p>
          <div className="mt-8 text-left">
            <FAQAccordion items={faqItems} />
          </div>
        </motion.div>
      </section>

      {/* Subtle Divider */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20 md:my-28">
        <div className="h-px bg-gradient-to-r from-transparent via-[#112D4E]/10 to-transparent w-full" />
      </div>

      {/* Lyon Cluster Internal Links */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#3377FF] font-semibold text-sm tracking-wider uppercase mb-3 block">
            [06] Interventions Grand Lyon
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#112D4E] mb-12 uppercase tracking-tight">
            Nos pages dans la Métropole de Lyon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                city: 'Villeurbanne & Bron',
                desc: 'Notre agence intervient pour la création site internet Villeurbanne et Bron pour tous vos projets digitaux.',
                link: '/services/agence-web-villeurbanne',
                label: 'Agence web Villeurbanne',
              },
              {
                city: 'Lyon',
                desc: 'Création de site internet Lyon — hub principal du Grand Lyon et de la Métropole.',
                link: '/services/creation-site-internet-lyon',
                label: 'Création site internet Lyon',
              },
              {
                city: 'Agence Web Lyon',
                desc: 'Notre flagship page pour les entreprises lyonnaises cherchant une agence web premium.',
                link: '/services/agence-web-lyon',
                label: 'Agence web Lyon',
              },
              {
                city: 'Caluire-et-Cuire',
                desc: 'Développeur web freelance à Caluire (69300) — sites vitrines et e-commerce locaux.',
                link: '/services/creation-site-web-caluire-et-cuire',
                label: 'Site web Caluire',
              },
              {
                city: 'Vaulx-en-Velin',
                desc: 'Expertise SEO local et visibilité en ligne pour dynamiser votre activité à Vaulx-en-Velin.',
                link: '/services/creation-site-internet-lyon',
                label: 'SEO Grand Lyon',
              },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="block border border-[#3377FF]/10 bg-white/75 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
              >
                <p className="text-[#3377FF] text-xs font-bold uppercase mb-2.5 tracking-wider">
                  {item.city}
                </p>
                <p className="text-[#112D4E]/80 text-sm leading-relaxed mb-6 font-light">
                  {item.desc}
                </p>
                <span className="text-xs font-semibold uppercase text-[#112D4E] border-b border-[#112D4E]/30 pb-0.5 group-hover:border-[#112D4E]">
                  {item.label} →
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Bottom CTA Block */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-28 md:mt-36">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden py-16 px-8 md:p-20 rounded-3xl bg-gradient-to-br from-[#112D4E] to-[#1c3657] text-white shadow-2xl border border-white/10 text-center"
        >
          <div className="absolute top-0 left-0 -translate-x-12 -translate-y-12 w-64 h-64 bg-[#3377FF]/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 translate-x-12 translate-y-12 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

          <span className="bg-[#3377FF] text-white px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-[10px] inline-block mb-8 border border-white/10">
            SYSTEM INITIATION
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tight leading-tight">
            PRÊT À REDÉFINIR LES STANDARDS ?
          </h2>
          <p className="text-base md:text-lg text-white/80 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Contactez notre centre d&apos;ingénierie situé dans l&apos;environnement stratégique de
            Villeurbanne. Actionnez immédiatement la conception.
          </p>
          <CTAButton
            href="/contact"
            variant="outline"
            className="bg-white text-[#112D4E] border-white hover:bg-slate-100 hover:text-[#112D4E] shadow-xl text-base px-10 py-4.5 rounded-full"
            trackingAction=" villeurbanne_bottom_cta"
            trackingCategory="villeurbanne_footer"
          >
            Obtenir une proposition
            <ArrowUpRight className="w-5 h-5 ml-2.5 shrink-0" />
          </CTAButton>
        </motion.div>
      </section>
    </div>
  )
}
