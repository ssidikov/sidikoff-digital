'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, Globe, Sparkles, CheckSquare } from 'lucide-react'
import Link from 'next/link'
import { Limelight, JetBrains_Mono } from 'next/font/google'
import { generateServiceSchema } from '@/lib/seo-utils'

// Font configurations
const limelight = Limelight({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

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
  const serviceSchema = generateServiceSchema({
    name: 'Agence Web Villeurbanne - Sidikoff Digital',
    description:
      'Expertise en création de sites internet, référencement SEO et génie logiciel à Villeurbanne. Solutions sur-mesure pour entreprises.',
    url: 'https://www.sidikoff.com/services/agence-web-villeurbanne',
    serviceType: 'Agence Web & SEO',
    areaServed: ['Villeurbanne', 'Lyon', 'Grand Lyon'],
  })

  return (
    <div
      className={`relative min-h-screen bg-[#FFFFFF] text-[#111827] selection:bg-[#3B82F6] selection:text-white pt-28 pb-16 font-sans overflow-x-hidden ${jetbrainsMono.variable}`}>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Decorative Grid - replaces blurred orbs */}
      <div
        className='absolute inset-0 pointer-events-none opacity-[0.04]'
        style={{
          backgroundImage:
            'linear-gradient(#111827 1px, transparent 1px), linear-gradient(90deg, #111827 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Top Banner (Marquee style representation) */}
      <div className='w-full border-y-4 border-[#111827] bg-[#8B5CF6] text-white py-3 overflow-hidden mb-8 md:mb-16'>
        <div className='flex w-full whitespace-nowrap overflow-hidden items-center justify-center'>
          <p className={`${jetbrainsMono.className} text-sm font-bold uppercase tracking-widest`}>
            — Agence web Villeurbanne — Gratte-ciel, Charpennes, Cusset, La Doua, Création de site
            internet & SEO —
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className='relative z-10 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col items-center text-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`inline-flex items-center gap-3 px-6 py-2 border-[3px] border-[#111827] shadow-[4px_4px_0px_#3B82F6] bg-white mb-12`}>
          <div className='w-3 h-3 bg-[#16A34A] border-2 border-[#111827]' />
          <span
            className={`${jetbrainsMono.className} text-sm uppercase font-bold tracking-tight text-[#111827]`}>
            Disponible pour projets
          </span>
        </motion.div>

        <motion.h1
          className={`${limelight.className} text-6xl md:text-8xl lg:text-9xl tracking-tight mb-8 text-[#111827] max-w-5xl leading-none`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <span className='sr-only'>Agence Web Villeurbanne</span>
          AGENCE WEB.
          <br />
          <span className='text-[#3B82F6] block mt-2'>VILLEURBANNE</span>
        </motion.h1>

        <motion.p
          className='text-xl md:text-2xl text-[#111827] max-w-3xl mx-auto mb-16 font-medium leading-relaxed border-l-4 border-[#3B82F6] pl-6 text-left'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          Propulsez votre entreprise avec une esthétique radicale. Nous concevons des plateformes
          web sur-mesure, des logiciels métiers architecturés et une acquisition SEO implacable.
        </motion.p>

        <motion.div
          className='flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          <Link
            href='/contact'
            className={`group relative px-10 py-5 bg-[#3B82F6] text-white border-4 border-[#111827] shadow-[8px_8px_0px_#111827] hover:shadow-[2px_2px_0px_#111827] hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200 active:shadow-none active:translate-x-[8px] active:translate-y-[8px]`}>
            <span
              className={`${jetbrainsMono.className} font-bold uppercase text-lg flex items-center gap-3`}>
              Démarrer le projet
              <ArrowUpRight className='w-6 h-6 border-2 border-white rounded-full p-1' />
            </span>
          </Link>
          <Link
            href='#expertise'
            className={`group px-10 py-5 bg-white text-[#111827] border-4 border-[#111827] shadow-[8px_8px_0px_transparent] hover:shadow-[8px_8px_0px_#8B5CF6] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200`}>
            <span className={`${jetbrainsMono.className} font-bold uppercase text-lg`}>
              Explorer
            </span>
          </Link>
        </motion.div>

        {/* Freshness & Author Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.8 }}
          className='mt-12 flex flex-col items-center gap-2'>
          <p className={`${jetbrainsMono.className} text-[10px] uppercase font-bold`}>
            Par <span rel='author'>Sardorbek Sidikov</span> — Sidikoff Digital
          </p>
          <p className={`${jetbrainsMono.className} text-[10px] uppercase`}>
            Mis à jour le 12 Avril 2026
          </p>
        </motion.div>
      </section>

      {/* Brutalist Divider */}
      <div className='w-full border-t-4 border-[#111827] my-32'></div>

      {/* Expertise Section */}
      <section id='expertise' className='relative z-10 px-6 lg:px-12 max-w-7xl mx-auto'>
        <motion.div
          initial='initial'
          whileInView='animate'
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          className='mb-16 flex flex-col md:flex-row justify-between items-end gap-6'>
          <div>
            <span
              className={`${jetbrainsMono.className} text-[#3B82F6] font-bold text-xl uppercase mb-4 block`}>
              [01] Notre Expertise
            </span>
            <h2
              className={`${limelight.className} text-5xl md:text-7xl mb-4 text-[#111827] !leading-[1.1]`}>
              LES COMPÉTENCES DE NOTRE CABINET
            </h2>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className='grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12'>
          {/* Card 1 */}
          <motion.div
            variants={fadeIn}
            className='bg-white border-4 border-[#111827] shadow-[12px_12px_0px_#111827] p-8 flex flex-col relative group transition-transform hover:-translate-y-2'>
            <div className='absolute top-0 right-0 w-24 h-24 bg-[#D97706] border-b-4 border-l-4 border-[#111827] flex items-center justify-center -mt-4 -mr-4'>
              <Globe className='text-[#111827] w-10 h-10' />
            </div>
            <span className={`${jetbrainsMono.className} text-4xl font-bold opacity-20 block mb-8`}>
              01
            </span>
            <h3 className={`${limelight.className} text-3xl mb-6 tracking-wide`}>CRÉATION WEB</h3>
            <p className='text-[#111827] font-medium leading-relaxed mb-8 flex-grow'>
              Plateformes vitrines radicales, e-commerce immersifs. Coder avec intégrité pour une
              conversion maximale.
            </p>
            <div className='flex gap-2 flex-wrap'>
              {['NEXT.JS', 'TAILWIND', 'SHOPIFY'].map((tag) => (
                <span
                  key={tag}
                  className={`${jetbrainsMono.className} px-3 py-1 bg-[#111827] text-white text-xs font-bold uppercase`}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeIn}
            className='bg-[#111827] text-white border-4 border-[#111827] shadow-[12px_12px_0px_#3B82F6] p-8 flex flex-col relative group transition-transform hover:-translate-y-2'>
            <div className='absolute top-0 right-0 w-24 h-24 bg-[#3B82F6] border-b-4 border-l-4 border-[#111827] flex items-center justify-center -mt-4 -mr-4'>
              <Code2 className='text-[#111827] w-10 h-10' />
            </div>
            <span className={`${jetbrainsMono.className} text-4xl font-bold opacity-20 block mb-8`}>
              02
            </span>
            <h3 className={`${limelight.className} text-3xl mb-6 tracking-wide`}>GÉNIE LOGICIEL</h3>
            <p className='text-white/80 font-medium leading-relaxed mb-8 flex-grow'>
              Automatisation et conception d&apos;ERP/CRM sur-mesure. Intégration IA pour optimiser
              la logistique interne.
            </p>
            <div className='flex gap-2 flex-wrap'>
              {['REACT', 'NODE', 'PYTHON'].map((tag) => (
                <span
                  key={tag}
                  className={`${jetbrainsMono.className} px-3 py-1 bg-white text-[#111827] text-xs font-bold uppercase border-2 border-[#111827]`}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={fadeIn}
            className='bg-[#8B5CF6] text-white border-4 border-[#111827] shadow-[12px_12px_0px_#111827] p-8 flex flex-col relative group transition-transform hover:-translate-y-2'>
            <div className='absolute top-0 right-0 w-24 h-24 bg-[#FFFFFF] border-b-4 border-l-4 border-[#111827] flex items-center justify-center -mt-4 -mr-4'>
              <Sparkles className='text-[#111827] w-10 h-10' />
            </div>
            <span
              className={`${jetbrainsMono.className} text-4xl font-bold opacity-30 block mb-8 text-[#111827]`}>
              03
            </span>
            <h3 className={`${limelight.className} text-3xl mb-6 text-[#111827] tracking-wide`}>
              STRATÉGIE SEO
            </h3>
            <p className='text-[#111827] font-bold leading-relaxed mb-8 flex-grow'>
              Classement organique de haut vol. Visibilité pérenne sur Google pour capter la
              clientèle du Grand Lyon.
            </p>
            <div className='flex gap-2 flex-wrap'>
              {['AUDIT', 'CONTENT', 'LOCAL'].map((tag) => (
                <span
                  key={tag}
                  className={`${jetbrainsMono.className} px-3 py-1 bg-[#111827] text-white text-xs font-bold uppercase`}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <div className='w-full border-t-4 border-[#111827] my-32'></div>

      {/* Local Process Section */}
      <section className='relative z-10 px-6 lg:px-12 max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row gap-16 items-start'>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='flex-[1.5]'>
            <span
              className={`${jetbrainsMono.className} text-[#3B82F6] font-bold text-xl uppercase mb-4 block`}>
              [02] Pourquoi le local ?
            </span>
            <h2
              className={`${limelight.className} text-5xl md:text-6xl text-[#111827] mb-8 uppercase`}>
              L&apos;excellence à l&apos;échelle de votre territoire
            </h2>
            <div className='space-y-4 font-medium text-lg text-[#111827]'>
              {[
                'Consultation rapide sur Villeurbanne, Lyon et alentours.',
                'Saisie optimale des enjeux de la concurrence régionale.',
                'Développement 100% français sans aucune sous-traitance cachée.',
                'Engagement de qualité garanti pour nos structures partenaires.',
              ].map((text, i) => (
                <div
                  key={i}
                  className='flex gap-4 p-4 border-2 border-[#111827] bg-white shadow-[4px_4px_0px_#111827] items-center'>
                  <CheckSquare className='w-6 h-6 text-[#16A34A] shrink-0' />
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='flex-1 w-full'>
            <div className='border-4 border-[#111827] bg-[#DC2626] text-white shadow-[16px_16px_0px_#111827] p-10 flex flex-col'>
              <h3
                className={`${jetbrainsMono.className} text-2xl font-bold uppercase mb-8 border-b-2 border-white/30 pb-4`}>
                PROTOCOLE DE PRODUCTION
              </h3>
              <div className='space-y-0'>
                {[
                  { n: '01', t: 'Audit & Direction' },
                  { n: '02', t: 'Design UI/UX & Architecture' },
                  { n: '03', t: 'Intégration Typographique' },
                  { n: '04', t: 'Sécurité & Déploiement' },
                ].map((step, i) => (
                  <div
                    key={i}
                    className='flex border-b-2 border-[#111827]/10 py-6 last:border-0 group cursor-default'>
                    <span
                      className={`${jetbrainsMono.className} text-4xl font-bold text-[#111827] opacity-60 mr-6 group-hover:opacity-100 transition-opacity`}>
                      {step.n}
                    </span>
                    <p className={`${limelight.className} text-2xl tracking-wide self-center`}>
                      {step.t}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Depth Section */}
      <section className='relative z-10 px-6 lg:px-12 max-w-7xl mx-auto mt-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-16'>
          <span className={`${jetbrainsMono.className} text-[#3B82F6] font-bold text-xl uppercase mb-4 block`}>
            [03] Contexte local
          </span>
          <h2 className={`${limelight.className} text-5xl md:text-6xl text-[#111827] mb-12 uppercase`}>
            Pourquoi Villeurbanne ?
          </h2>
          <div className='grid lg:grid-cols-2 gap-12 items-start'>
            <div className='space-y-5 text-lg text-[#111827] font-medium leading-relaxed'>
              <p>
                Villeurbanne est la <strong>deuxième ville la plus peuplée de la région Auvergne-Rhône-Alpes</strong>,
                avec plus de 150 000 habitants et un tissu économique dense. Gratte-Ciel, Charpennes, Cusset, La Doua :
                chaque quartier a ses propres dynamiques commerciales et ses propres opportunités digitales.
              </p>
              <p>
                Contrairement à Lyon intramuros où la concurrence digitale est saturée, <strong>Villeurbanne offre
                des fenêtres de positionnement SEO local encore accessibles</strong> pour les PME, artisans et
                professions libérales. Une stratégie bien menée permet d'apparaître en première position sur des
                requêtes comme « plombier Villeurbanne », « coiffeur Charpennes » ou « agence immobilière Gratte-Ciel ».
              </p>
              <p>
                Notre agence, basée à Villeurbanne et Lyon, connaît parfaitement ce marché. Nous avons accompagné des
                commerces du Cours Émile Zola, des cabinets médicaux près de l'Hôpital Desgenettes, des restaurants
                autour du Parc de la Feyssine et des entreprises tech du quartier de La Doua. Cette expertise locale
                se traduit concrètement dans nos maquettes, nos contenus et notre stratégie SEO.
              </p>
              <p>
                En 2026, un site web professionnel à Villeurbanne est un <strong>investissement rentable</strong> :
                nos clients constatent en moyenne une augmentation de 3 à 5× de leurs leads en ligne dans les
                6 premiers mois suivant la mise en ligne d'un site optimisé SEO.
              </p>
            </div>
            <div className='space-y-4'>
              <h3 className={`${jetbrainsMono.className} text-xl font-bold uppercase mb-6`}>Pour qui travaillons-nous ?</h3>
              {[
                { n: '→', t: 'Commerces & artisans', d: 'Boulangers, coiffeurs, plombiers, électriciens : vitrine locale, SEO de proximité, Google Business Profile optimisé.' },
                { n: '→', t: 'Professions de santé', d: 'Médecins, dentistes, kinés, ostéopathes : sites RGPD-conformes avec prise de RDV en ligne intégrée (Doctolib, Calendly).' },
                { n: '→', t: 'PME & industries', d: 'Entreprises du Grand Lyon : catalogues produits, sites institutionnels, outils de gestion interne sur mesure.' },
                { n: '→', t: 'Startups tech & SaaS', d: 'Portails, applications web, landing pages de conversion et MVP pour les entreprises innovantes du pôle technologique de La Doua.' },
                { n: '→', t: 'Restauration & événementiel', d: 'Sites avec menus, galeries, réservation en ligne et SEO local pour capter la clientèle du secteur Tonkin / Gratte-Ciel.' },
              ].map((item, i) => (
                <div key={i} className='flex gap-4 p-4 border-2 border-[#111827] bg-white shadow-[4px_4px_0px_#3B82F6]'>
                  <span className={`${jetbrainsMono.className} text-[#3B82F6] font-bold text-xl flex-shrink-0`}>{item.n}</span>
                  <div>
                    <p className={`${jetbrainsMono.className} font-bold text-sm uppercase mb-1`}>{item.t}</p>
                    <p className='text-[#111827] text-sm leading-relaxed'>{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <div className='w-full border-t-4 border-[#111827] my-16'></div>

      {/* FAQ Section */}
      <section className='relative z-10 px-6 lg:px-12 max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-12'>
          <span className={`${jetbrainsMono.className} text-[#3B82F6] font-bold text-xl uppercase mb-4 block`}>
            [04] Questions fréquentes
          </span>
          <h2 className={`${limelight.className} text-5xl md:text-6xl text-[#111827] mb-12 uppercase`}>
            FAQ — Agence Web Villeurbanne
          </h2>
          <div className='space-y-0'>
            {[
              {
                q: 'Quel est le coût d'un site internet à Villeurbanne ?',
                a: 'Un site vitrine professionnel démarre à partir de 690 €. Un site e-commerce complet commence autour de 1 500 €. Nous établissons un devis gratuit et personnalisé sous 24h, sans frais cachés ni engagement.'
              },
              {
                q: 'Combien de temps pour livrer un site web ?',
                a: 'Entre 7 et 14 jours pour un site vitrine standard. De 4 à 8 semaines pour un e-commerce ou une application sur mesure. Nous respectons les délais convenus par contrat.'
              },
              {
                q: 'Votre agence web de Villeurbanne fait-elle du SEO local ?',
                a: 'Oui, le SEO local est au cœur de notre méthode. Nous optimisons chaque page pour les recherches géolocalisées (Villeurbanne, Gratte-Ciel, Charpennes, Grand Lyon), configurons Google Business Profile et créons du contenu ancré localement pour un positionnement durable.'
              },
              {
                q: 'Utilisez-vous des technologies modernes comme Next.js ?',
                a: 'Oui, Next.js est notre framework principal pour les sites professionnels. Il garantit des scores Lighthouse 95+, un chargement en moins d'une seconde et une sécurité renforcée. Nous utilisons aussi React, TypeScript, Tailwind CSS et des CMS headless (Sanity, Strapi).'
              },
              {
                q: 'Puis-je mettre à jour mon site sans compétences techniques ?',
                a: 'Oui, tous nos sites sont livrés avec un back-office intuitif ou un CMS (Sanity, WordPress headless). Vous gérez textes, images et articles de blog en totale autonomie. Une formation complète est incluse dans chaque livraison.'
              },
              {
                q: 'Proposez-vous un suivi après la mise en ligne ?',
                a: 'Absolument. Nous proposons des contrats de maintenance mensuelle : mises à jour de sécurité, sauvegardes quotidiennes, monitoring 24/7, support réactif et petites évolutions. Vous avez un interlocuteur unique basé à Villeurbanne.'
              },
            ].map((item, i) => (
              <div key={i} className='border-b-4 border-[#111827] py-6 last:border-b-0'>
                <h3 className={`${jetbrainsMono.className} font-bold text-lg mb-3 text-[#111827] uppercase`}>
                  {item.q}
                </h3>
                <p className='text-[#111827] font-medium leading-relaxed text-base'>{item.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className='w-full border-t-4 border-[#111827] my-16'></div>

      {/* Bottom CTA Block */}
      <section className='relative z-10 py-32 px-6 lg:px-12 mt-20'>
        <div className='absolute inset-0 bg-[#3B82F6] border-y-4 border-[#111827]' />

        {/* Animated striped background */}
        <div
          className='absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none'
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #111827 25%, transparent 25%, transparent 75%, #111827 75%, #111827)',
            backgroundSize: '40px 40px',
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='max-w-4xl mx-auto text-center relative z-10 bg-white border-4 border-[#111827] shadow-[24px_24px_0px_#111827] p-12 md:p-20'>
          <span
            className={`${jetbrainsMono.className} bg-[#DC2626] text-white px-4 py-2 font-bold uppercase tracking-widest text-sm inline-block mb-10 border-2 border-[#111827] outline outline-2 outline-offset-2 outline-[#111827]`}>
            CRITICAL SYSTEM INITIATION
          </span>
          <h2
            className={`${limelight.className} text-5xl md:text-7xl mb-8 text-[#111827] leading-[1.1]`}>
            PRÊT À REDÉFINIR LES STANDARDS ?
          </h2>
          <p className='text-xl text-[#111827] font-medium mb-12 max-w-2xl mx-auto'>
            Contactez notre centre d&apos;ingénierie situé dans l&apos;environnement stratégique de
            Villeurbanne. Actionnez immédiatement la conception.
          </p>
          <Link
            href='/contact'
            className={`group relative inline-flex px-12 py-6 bg-[#111827] text-white border-4 border-transparent hover:bg-white hover:text-[#111827] hover:border-[#111827] hover:shadow-[12px_12px_0px_#8B5CF6] transition-all duration-300`}>
            <span
              className={`${jetbrainsMono.className} font-bold uppercase text-2xl flex items-center gap-4`}>
              OBTENIR UNE PROPOSITION
              <ArrowUpRight className='w-8 h-8 group-hover:rotate-45 transition-transform duration-300 bg-[#3B82F6] text-white group-hover:bg-[#111827] p-1 border-2 border-transparent group-hover:border-white' />
            </span>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
