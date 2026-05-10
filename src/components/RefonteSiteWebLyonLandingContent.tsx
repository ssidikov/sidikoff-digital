'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  ArrowRight,
  CheckCircle,
  RefreshCw,
  Zap,
  Layout,
  Search,
  Code
} from 'lucide-react'

import { FAQAccordion } from '@/components/FAQAccordion'

const benefits = [
  "Audit technique et ergonomique gratuit de votre site actuel",
  "Migration de vos données (contenus, images, produits) sans perte",
  "Design entièrement modernisé et adapté aux attentes d'aujourd'hui",
  "Optimisation drastique de la vitesse de chargement (Next.js)",
  "Plan de redirection 301 pour préserver votre référencement (SEO)"
]

const services = [
  {
    icon: Layout,
    title: 'Modernisation UX/UI',
    description: 'Fini le design des années 2010. Nous repensons totalement l\'expérience utilisateur pour fluidifier la navigation et augmenter vos taux de conversion.'
  },
  {
    icon: Zap,
    title: 'Boost de Performance',
    description: 'Nous migrons votre ancien site (WordPress lent, Wix, etc.) vers des technologies modernes (React, Next.js) pour un affichage instantané.'
  },
  {
    icon: Search,
    title: 'Sécurisation du SEO',
    description: 'Une refonte mal gérée peut détruire votre trafic. Nous mettons en place un plan de redirection strict pour conserver et améliorer vos positions Google.'
  },
  {
    icon: Code,
    title: 'Code Source Propre',
    description: 'Nous éliminons la dette technique, les plugins obsolètes et les failles de sécurité pour repartir sur une base de code saine et évolutive.'
  },
  {
    icon: RefreshCw,
    title: 'Ajout de Fonctionnalités',
    description: 'Profitez de la refonte pour intégrer de nouveaux outils : module de réservation, espace client, paiement en ligne sécurisé, ou CRM.'
  },
  {
    icon: TrendingUp,
    title: 'Optimisation Conversion',
    description: 'Chaque bouton, chaque formulaire et chaque appel à l\'action (CTA) est repensé pour maximiser la génération de leads.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Audit & Diagnostic',
    description: 'Analyse complète de votre site existant (statistiques de trafic, bloqueurs techniques, points de friction UX).'
  },
  {
    number: '02',
    title: 'Cadrage & Maquettage',
    description: 'Définition de la nouvelle arborescence et proposition d\'un design moderne validé étape par étape.'
  },
  {
    number: '03',
    title: 'Développement & Migration',
    description: 'Intégration du nouveau site sur un serveur de pré-production et transfert de tous vos anciens contenus.'
  },
  {
    number: '04',
    title: 'Mise en Ligne (Go Live)',
    description: 'Test finaux, application du plan de redirections SEO (301) et lancement officiel du nouveau site.'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Combien coûte la refonte d\'un site internet à Lyon ?',
    answer: 'Le budget d\'une refonte dépend de l\'existant : s\'il s\'agit d\'une simple mise à jour graphique ou d\'une refonte technique complète avec migration de données. En général, nos tarifs de refonte démarrent autour de 2 000 € pour un site vitrine standard. Un devis sur-mesure vous sera proposé après l\'audit gratuit.',
    category: 'pricing'
  },
  {
    id: '2',
    question: 'Vais-je perdre mon référencement sur Google ?',
    answer: 'Non, au contraire ! C\'est notre priorité absolue. Nous réalisons un "plan de redirections 301" méticuleux. Cela indique à Google que vos anciennes pages ont déménagé vers de nouvelles adresses, transférant ainsi toute votre autorité SEO au nouveau site. Une refonte réussie entraîne généralement une hausse du trafic.',
    category: 'seo'
  },
  {
    id: '3',
    question: 'Mon site actuel restera-t-il en ligne pendant la refonte ?',
    answer: 'Oui, 100%. Nous développons votre nouveau site sur un serveur caché (environnement de pré-production ou "staging"). Votre ancien site continue de fonctionner normalement. Le basculement ne se fait que le jour du lancement officiel, avec une coupure invisible pour vos visiteurs.',
    category: 'process'
  },
  {
    id: '4',
    question: 'Pouvez-vous refaire un site WordPress, Wix ou Shopify ?',
    answer: 'Absolument. Nous maîtrisons la migration depuis toutes les plateformes du marché (WordPress, Wix, Squarespace, Prestashop...). Nous exportons vos données et les réintégrons dans un système plus performant et adapté à vos nouveaux besoins.',
    category: 'tech'
  },
  {
    id: '5',
    question: 'Combien de temps dure une refonte complète ?',
    answer: 'Le délai varie selon le volume de pages à migrer et les validations du design. Pour un site vitrine, comptez en moyenne 4 à 8 semaines. Nous nous engageons sur un planning précis dès la signature du devis.',
    category: 'timing'
  }
]

export default function RefonteSiteWebLyonLandingContent() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
            alt="Refonte de site internet Lyon"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-orange-900/40"></div>
        </div>

        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-orange-500/20 blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-full text-sm font-medium">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refonte Site Web Lyon
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Donnez une <span className="text-orange-400">seconde vie</span> à votre site web
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed mb-8">
                  Votre site est lent, n'attire plus de clients ou ne reflète plus votre image ? Notre agence basée à Lyon s'occupe de la refonte complète de votre site avec préservation de votre SEO.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-slate-200 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <button className="w-full sm:w-auto px-8 py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-500 transition-all duration-300 flex items-center justify-center shadow-lg shadow-orange-600/20">
                    Demander un audit gratuit
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </Link>
                <Link href="/projects">
                  <button className="w-full sm:w-auto px-8 py-4 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300">
                    Voir nos refontes réussies
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 p-6">
                <div className="grid grid-cols-2 gap-4">
                  {/* Before */}
                  <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 opacity-70 filter grayscale">
                    <div className="h-6 bg-slate-800 border-b border-slate-700 flex items-center justify-center text-xs text-slate-500 font-bold uppercase tracking-wider">Avant</div>
                    <div className="p-4 space-y-4">
                      <div className="h-8 bg-slate-800 rounded w-3/4"></div>
                      <div className="h-4 bg-slate-800 rounded w-full"></div>
                      <div className="h-4 bg-slate-800 rounded w-5/6"></div>
                      <div className="h-24 bg-slate-800 rounded w-full"></div>
                    </div>
                  </div>
                  {/* After */}
                  <div className="bg-white rounded-xl overflow-hidden border border-orange-200 shadow-xl shadow-orange-500/10 transform scale-105 z-10">
                    <div className="h-6 bg-orange-100 border-b border-orange-200 flex items-center justify-center text-xs text-orange-600 font-bold uppercase tracking-wider">Après</div>
                    <div className="p-4 space-y-4">
                      <div className="h-8 bg-orange-500 rounded-lg w-3/4 flex items-center px-2">
                        <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
                      </div>
                      <div className="h-4 bg-slate-100 rounded-full w-full"></div>
                      <div className="h-4 bg-slate-100 rounded-full w-5/6"></div>
                      <div className="h-24 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg w-full flex items-center justify-center">
                        <Zap className="w-8 h-8 text-orange-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-8 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white font-bold">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              <span>Trafic Préservé (Redirections 301)</span>
            </div>
            <div className="flex items-center gap-2">
              <Layout className="w-6 h-6" />
              <span>Design Moderne & Épuré</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6" />
              <span>Performances Optimales</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi refondre ? */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Pourquoi est-il crucial de faire la refonte de votre site internet ?
            </h2>
            <div className="prose prose-lg text-slate-700 space-y-6">
              <p>
                Un site internet vieillit plus vite qu'on ne le pense. Si votre site a <strong>plus de 4 ou 5 ans</strong>, il est probable qu'il ne réponde plus aux standards actuels exigés par Google et par vos utilisateurs. À Lyon comme ailleurs, la première impression se fait en ligne : un site obsolète renvoie l'image d'une entreprise dépassée.
              </p>
              <p>
                La refonte n'est pas qu'une question de "beau design". C'est un <strong>enjeu business majeur</strong>. Si votre site n'est pas parfaitement "Mobile Responsive", vous perdez plus de la moitié de vos visiteurs. S'il met plus de 3 secondes à charger, les internautes quittent la page avant même d'avoir lu votre offre.
              </p>
              <p>
                De plus, votre entreprise a certainement évolué. Vos services, vos prix, votre équipe et votre cible ont changé. Votre site internet doit être le reflet exact de votre professionnalisme actuel. La refonte permet d'aligner votre stratégie digitale avec vos nouveaux objectifs commerciaux.
              </p>
              <p>
                En tant qu'<strong>agence spécialisée dans la refonte de sites web à Lyon</strong>, nous maîtrisons le point le plus délicat de l'opération : la migration SEO. Nous veillons scrupuleusement à ce que chaque ancienne URL soit redirigée vers la nouvelle, afin que vous ne perdiez pas le référencement acquis durement au fil des années.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Notre approche de la Refonte Web</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Une transition en douceur vers un outil digital performant.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100"
                >
                  <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">La méthodologie de migration</h2>
            <p className="text-xl text-slate-400">Une refonte sans coupure et sans risque pour votre business.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -z-10 -translate-y-1/2"></div>
            
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 relative"
              >
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-orange-500/30">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Questions Fréquentes</h2>
            <p className="text-xl text-slate-600">Tout ce que vous devez savoir avant d'entamer une refonte.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-600 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Il est temps de moderniser votre présence en ligne</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium text-orange-100">
            Faites de votre site obsolète une véritable machine à convertir. Contactez-nous pour obtenir un diagnostic gratuit de votre site actuel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-10 py-4 bg-white text-orange-900 rounded-lg font-bold hover:bg-slate-100 transition-all shadow-xl">
                Demander un Audit de Refonte
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
