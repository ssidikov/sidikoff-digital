'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Monitor,
  Smartphone,
  Zap,
  Palette,
  Search,
  PenTool
} from 'lucide-react'

import { FAQAccordion } from '@/components/FAQAccordion'

const benefits = [
  "Création de site internet sur-mesure (vitrine) basé à Lyon",
  "Design premium et ergonomie pensée pour la conversion",
  "Optimisation mobile (Responsive) et performances (Core Web Vitals)",
  "Optimisation SEO local pour être visible sur Google à Lyon",
  "Formation incluse pour la gestion de votre contenu"
]

const services = [
  {
    icon: Palette,
    title: 'Web Design Sur-Mesure',
    description: 'Fini les templates vus mille fois. Nous concevons une identité visuelle unique qui reflète le professionnalisme de votre entreprise lyonnaise.'
  },
  {
    icon: Smartphone,
    title: 'Mobile First & Responsive',
    description: 'Plus de 60% du trafic provient des smartphones. Votre site vitrine offrira une expérience fluide et parfaite sur tous les écrans.'
  },
  {
    icon: Zap,
    title: 'Performance & Vitesse',
    description: 'Nous utilisons les dernières technologies (Next.js) pour garantir un temps de chargement instantané. Un site rapide convertit mieux.'
  },
  {
    icon: Search,
    title: 'Optimisation SEO Native',
    description: 'Votre site est techniquement optimisé dès sa création pour plaire aux algorithmes de Google et attirer du trafic organique localisé.'
  },
  {
    icon: PenTool,
    title: 'Rédaction Web Persuasive',
    description: 'Nos experts en copywriting rédigent vos pages de services pour transformer vos simples visiteurs en prospects qualifiés (Leads).'
  },
  {
    icon: Monitor,
    title: 'Hébergement & Maintenance',
    description: 'Nous gérons la sécurité, les sauvegardes et les mises à jour techniques pour que vous puissiez vous concentrer sur votre cœur de métier.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Stratégie & Maquettage',
    description: 'Définition de l\'arborescence de votre site vitrine et création des maquettes UX/UI validées ensemble.'
  },
  {
    number: '02',
    title: 'Développement Web',
    description: 'Intégration pixel-perfect des designs avec du code propre, léger et respectant les standards du web actuel.'
  },
  {
    number: '03',
    title: 'Intégration & SEO',
    description: 'Insertion de vos textes et images, et configuration complète du référencement naturel on-page.'
  },
  {
    number: '04',
    title: 'Lancement & Formation',
    description: 'Mise en ligne sur votre nom de domaine et session de prise en main pour vous rendre 100% autonome.'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Quel est le prix pour la création d\'un site vitrine à Lyon ?',
    answer: 'Le tarif dépend de la complexité de votre projet (nombre de pages, design sur-mesure, fonctionnalités spécifiques). En général, pour un site vitrine professionnel clé en main par notre agence, le budget démarre autour de 1 500 € à 3 000 €. Nous proposons des devis précis après un premier échange gratuit.',
    category: 'pricing'
  },
  {
    id: '2',
    question: 'Combien de temps faut-il pour créer le site ?',
    answer: 'Pour un site vitrine standard de 5 à 10 pages, comptez généralement entre 4 et 6 semaines de délai de réalisation, de la validation du cahier des charges à la mise en ligne finale.',
    category: 'timing'
  },
  {
    id: '3',
    question: 'Serai-je propriétaire de mon site web ?',
    answer: 'Absolument. Contrairement à certaines plateformes de location, vous êtes l\'unique propriétaire de votre nom de domaine, de vos contenus et de votre site internet une fois la livraison effectuée.',
    category: 'ownership'
  },
  {
    id: '4',
    question: 'Mon site sera-t-il bien référencé sur Google ?',
    answer: 'Chaque site que nous développons inclut une base SEO solide : balises meta optimisées, structure Hn propre, sitemap XML, et rapidité de chargement. Pour dominer des mots-clés très concurrentiels sur Lyon, nous proposons des forfaits d\'accompagnement SEO mensuel dédiés.',
    category: 'seo'
  },
  {
    id: '5',
    question: 'Pourrai-je modifier les textes de mon site moi-même ?',
    answer: 'Oui ! Nous relions votre site à un système de gestion de contenu (CMS) intuitif. À la livraison, nous vous formons pour que vous puissiez modifier les textes, ajouter des articles de blog ou changer des photos de manière totalement autonome.',
    category: 'management'
  }
]

export default function SiteVitrineLyonLandingContent() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2000&auto=format&fit=crop"
            alt="Création Site Vitrine Lyon"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-emerald-900/40"></div>
        </div>

        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-emerald-500/20 blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full text-sm font-medium">
                <Monitor className="w-4 h-4 mr-2" />
                Création Site Web Lyon
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Votre Site <span className="text-emerald-400">Vitrine</span> à Lyon
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed mb-8">
                  Démarquez-vous de la concurrence avec un site internet premium, rapide et optimisé pour générer des contacts de qualité dans toute la région lyonnaise.
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
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-200 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <button className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-500 transition-all duration-300 flex items-center justify-center shadow-lg shadow-emerald-600/20">
                    Demander un devis gratuit
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </Link>
                <Link href="/projects">
                  <button className="w-full sm:w-auto px-8 py-4 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300">
                    Voir nos réalisations
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
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700 relative">
                  {/* Web Browser Mockup */}
                  <div className="h-8 bg-slate-800 flex items-center px-4 gap-2 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden">
                     {/* Fake Site Hero */}
                     <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-white">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full mb-6 flex items-center justify-center">
                          <Monitor className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Le partenaire de votre croissance</h3>
                        <p className="text-slate-500 mb-8 max-w-sm">Découvrez nos services d'accompagnement sur-mesure pour les entreprises lyonnaises.</p>
                        <div className="px-6 py-2 bg-emerald-600 text-white rounded-full text-sm font-bold">Contactez-nous</div>
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-8 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white font-bold">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              <span>Génération de Leads</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-6 h-6" />
              <span>100% Mobile Responsive</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6" />
              <span>Vitesse de Chargement A+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi un site vitrine ? */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Pourquoi votre entreprise lyonnaise a-t-elle besoin d'un site vitrine pro ?
            </h2>
            <div className="prose prose-lg text-slate-700 space-y-6">
              <p>
                Aujourd'hui, <strong>plus de 80% des consommateurs</strong> recherchent en ligne avant de contacter un professionnel ou de se rendre en boutique. Votre site internet est la vitrine numérique de votre entreprise. Si elle est inexistante, peu attrayante ou difficile à trouver, vos futurs clients iront chez vos concurrents.
              </p>
              <p>
                Un site vitrine ne sert pas uniquement à présenter votre activité. C'est un <strong>outil d'acquisition de clients</strong>. Il travaille pour vous 24h/24 et 7j/7, rassure vos prospects par un design professionnel et répond à leurs questions de manière claire.
              </p>
              <p>
                En tant qu'<strong>agence web à Lyon</strong>, nous ne nous contentons pas d'assembler des pages. Nous pensons votre site comme un tunnel de conversion. Le parcours utilisateur (UX) est pensé pour guider le visiteur naturellement vers la prise de contact (demande de devis, appel téléphonique, formulaire).
              </p>
              <p>
                De plus, un site internet performant vous donne de la crédibilité. Que vous soyez artisan, profession libérale, consultant ou gérant de PME dans le Rhône, posséder un site vitrine moderne, rapide et optimisé pour le référencement (SEO) est la base indispensable de toute stratégie digitale réussie.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">La méthode Sidikoff Digital</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Une conception sur-mesure axée sur la qualité, la vitesse et le résultat.
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
                  <div className="w-14 h-14 bg-emerald-50 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-emerald-600" />
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
            <h2 className="text-3xl font-bold mb-4">Les étapes de votre projet web</h2>
            <p className="text-xl text-slate-400">Un accompagnement de A à Z, sans jargon technique.</p>
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
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-emerald-500/30">
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
            <p className="text-xl text-slate-600">Tout ce que vous devez savoir avant de lancer la création de votre site vitrine.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à développer votre activité en ligne ?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium text-emerald-100">
            Parlez-nous de votre projet. Nous réaliserons une étude gratuite pour vous proposer la solution web la plus adaptée à vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-10 py-4 bg-white text-emerald-900 rounded-lg font-bold hover:bg-slate-100 transition-all shadow-xl">
                Demander un devis gratuit
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
