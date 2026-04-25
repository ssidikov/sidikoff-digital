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
  Code,
  Zap,
  Layout,
  Search,
  PenTool,
  MapPin,
  Star
} from 'lucide-react'

import { FAQAccordion } from '@/components/FAQAccordion'

const benefits = [
  "Création de site internet Premium sur-mesure",
  "Optimisation SEO ciblée sur Bordeaux et la Nouvelle-Aquitaine",
  "Design haut de gamme (Desktop & Mobile First)",
  "Performances techniques optimales (Next.js)",
  "Accompagnement et formation pour la gestion du site"
]

const services = [
  {
    icon: Layout,
    title: 'Site Web Vitrine & Sur-Mesure',
    description: 'Conception de sites internet au design unique pour affirmer votre identité de marque face à la concurrence bordelaise.'
  },
  {
    icon: Search,
    title: 'Référencement Naturel (SEO)',
    description: 'Stratégie de mots-clés transactionnels pour placer votre entreprise en tête des recherches Google sur Bordeaux et la Gironde.'
  },
  {
    icon: Zap,
    title: 'Vitesse & Core Web Vitals',
    description: 'Développement avec React et Next.js garantissant des temps de chargement ultra-rapides, essentiels pour la conversion.'
  },
  {
    icon: Code,
    title: 'Développement d\'Applications',
    description: 'Création d\'outils métiers, de plateformes SaaS et de portails web complexes pour digitaliser vos processus.'
  },
  {
    icon: PenTool,
    title: 'UX/UI Design',
    description: 'Maquettage et parcours utilisateur pensés pour maximiser l\'engagement de vos visiteurs et générer des leads qualifiés.'
  },
  {
    icon: Monitor,
    title: 'Maintenance & Sécurité',
    description: 'Hébergement sécurisé, mises à jour techniques régulières et sauvegardes quotidiennes de vos données.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Audit & Stratégie',
    description: 'Analyse de votre marché cible à Bordeaux et définition de l\'arborescence idéale pour votre projet web.'
  },
  {
    number: '02',
    title: 'Maquettage UI/UX',
    description: 'Création des designs sur-mesure validés ensemble pour s\'assurer qu\'ils reflètent parfaitement votre image.'
  },
  {
    number: '03',
    title: 'Développement & SEO',
    description: 'Intégration pixel-perfect avec un code propre et optimisation des balises pour le référencement naturel.'
  },
  {
    number: '04',
    title: 'Mise en ligne & Suivi',
    description: 'Déploiement sur votre domaine, formation à l\'outil d\'administration et suivi de vos positions.'
  }
]

const pricingPlans = [
  {
    name: 'Essentiel Vitrine',
    price: 'À partir de 990€',
    timeline: 'Délai : 2 à 3 semaines',
    features: [
      'Design professionnel sur-mesure (jusqu\'à 5 pages)',
      'Intégration Mobile Responsive',
      'Optimisation SEO de base',
      'Formulaire de contact et Google Maps',
      'Formation pour la gestion du contenu'
    ],
    recommended: false
  },
  {
    name: 'Croissance PME',
    price: 'À partir de 1 990€',
    timeline: 'Délai : 4 à 6 semaines',
    features: [
      'Site vitrine complet (jusqu\'à 15 pages)',
      'Design UX/UI Premium',
      'Stratégie SEO locale avancée (Bordeaux)',
      'Module de blog ou actualités',
      'Performances techniques A+ (Google Lighthouse)'
    ],
    recommended: true
  },
  {
    name: 'Sur-Mesure / E-commerce',
    price: 'À partir de 2 990€',
    timeline: 'Délai : 6 à 10 semaines',
    features: [
      'Boutique en ligne complète ou Web App',
      'Parcours d\'achat optimisé pour la conversion',
      'Paiement sécurisé (Stripe/Paypal)',
      'Stratégie de contenu et netlinking',
      'Support et maintenance prioritaire'
    ],
    recommended: false
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Combien coûte la création d\'un site internet à Bordeaux ?',
    answer: 'Le tarif dépend de la complexité de votre projet. Un site vitrine professionnel démarre à 990€, tandis qu\'un site plus complexe avec une stratégie SEO locale ou des fonctionnalités e-commerce se situe entre 1990€ et 3000€+. Nous proposons des devis précis après un échange gratuit.',
    category: 'pricing'
  },
  {
    id: '2',
    question: 'Mon site sera-t-il visible sur Google à Bordeaux ?',
    answer: 'Oui, l\'optimisation SEO locale est au cœur de notre processus de création. Votre site sera techniquement structuré pour plaire à Google, avec des balises optimisées pour des requêtes telles que "votre métier + Bordeaux", afin d\'attirer des clients de la région.',
    category: 'seo'
  },
  {
    id: '3',
    question: 'Avez-vous des locaux physiques à Bordeaux ?',
    answer: 'Bien que notre siège soit basé en région lyonnaise, nous accompagnons de nombreuses entreprises de la Nouvelle-Aquitaine et de La French Tech Bordeaux. Grâce aux outils collaboratifs (Visio, Slack, Figma), la distance n\'est jamais un frein, et nous offrons la même qualité de service de proximité.',
    category: 'location'
  },
  {
    id: '4',
    question: 'Qui rédigera les textes de mon site ?',
    answer: 'Vous avez le choix. Vous pouvez fournir vos propres contenus, ou faire appel à notre équipe de copywriters spécialisés. Ils rédigeront des textes persuasifs, orientés pour la conversion de vos clients et optimisés pour le SEO.',
    category: 'content'
  },
  {
    id: '5',
    question: 'Serai-je propriétaire de mon site web ?',
    answer: 'Absolument. Une fois la facture finale réglée, vous êtes le seul et unique propriétaire de votre site, de son code source et de votre nom de domaine. Vous n\'êtes lié par aucun abonnement restrictif.',
    category: 'ownership'
  },
  {
    id: '6',
    question: 'Pourrai-je modifier le site moi-même après sa mise en ligne ?',
    answer: 'Oui, nous développons sur des CMS intuitifs ou des solutions headless avec un back-office sur-mesure. Une formation est incluse pour que vous puissiez modifier vos textes, ajouter des photos ou des articles de blog en toute autonomie.',
    category: 'tech'
  },
  {
    id: '7',
    question: 'Faites-vous également la refonte de sites existants ?',
    answer: 'Tout à fait. Nous reprenons votre site vieillissant, améliorons son design, ses performances (souvent ralenties par WordPress) et mettons en place un plan de redirections (301) rigoureux pour conserver votre référencement acquis.',
    category: 'refonte'
  },
  {
    id: '8',
    question: 'Quel est le délai de livraison d\'un site internet ?',
    answer: 'Pour un site vitrine classique de 5 à 10 pages, comptez environ 4 à 6 semaines. Ce délai peut varier en fonction de vos retours sur les maquettes et de la rapidité de validation des contenus.',
    category: 'timing'
  }
]

export default function BordeauxLandingContent() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#1A0B14]"> {/* Deep Wine Base */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=2000&auto=format&fit=crop" // Bordeaux/Wine related tech or city view
            alt="Création de site internet Bordeaux"
            fill
            className="object-cover"
            priority
          />
          {/* Deep bordeaux gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0B14] via-[#1A0B14]/90 to-[#6E1C38]/40"></div>
        </div>

        {/* Gold/Wine glowing accent */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#E5B558]/20 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-[#8A1A3F]/30 blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-[#6E1C38]/20 border border-[#8A1A3F]/30 text-[#E5B558] rounded-full text-sm font-medium">
                <MapPin className="w-4 h-4 mr-2" />
                Agence Web Bordeaux & Nouvelle-Aquitaine
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Propulsez votre présence en ligne à <span className="text-[#E5B558]">Bordeaux</span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed mb-8">
                  Création de sites internet premium, ultra-rapides et optimisés pour le référencement naturel. Transformez vos visiteurs en clients fidèles.
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
                    <CheckCircle className="w-5 h-5 text-[#E5B558] flex-shrink-0" />
                    <span className="text-slate-200 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <button className="w-full sm:w-auto px-8 py-4 bg-[#6E1C38] text-white rounded-lg font-bold hover:bg-[#8A1A3F] transition-all duration-300 flex items-center justify-center shadow-lg shadow-[#6E1C38]/20 border border-[#8A1A3F]">
                    Obtenir un devis gratuit
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </Link>
                <Link href="/projects">
                  <button className="w-full sm:w-auto px-8 py-4 border border-slate-600 text-white rounded-lg font-semibold hover:bg-white/5 transition-all duration-300">
                    Découvrir nos réalisations
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#2A1121] p-6">
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-800 relative">
                  <div className="h-8 bg-slate-800 flex items-center px-4 gap-2 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="relative aspect-[4/3] bg-[#FDFBF7] overflow-hidden">
                     {/* Elegant Mockup Design */}
                     <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                        <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center bg-[#6E1C38]/10">
                          <Star className="w-8 h-8 text-[#6E1C38]" />
                        </div>
                        <h3 className="text-3xl font-bold text-[#1A0B14] mb-4 font-serif">Maison Bordelaise</h3>
                        <p className="text-slate-600 mb-8 max-w-sm">L'élégance du design couplée à la performance technique pour les entreprises de la région.</p>
                        <div className="px-8 py-3 bg-[#6E1C38] text-white rounded font-medium shadow-md">Découvrir le savoir-faire</div>
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-8 bg-[#6E1C38]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white font-bold text-sm uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#E5B558]" />
              <span>Génération de Contacts</span>
            </div>
            <div className="flex items-center gap-2">
              <Monitor className="w-5 h-5 text-[#E5B558]" />
              <span>Design Sur-Mesure</span>
            </div>
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-[#E5B558]" />
              <span>Optimisation SEO Native</span>
            </div>
          </div>
        </div>
      </section>

      {/* Semantic SEO Expansion - Bordeaux */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Pourquoi confier la création de votre site web à Bordeaux à des experts ?
            </h2>
            <div className="prose prose-lg text-slate-700 space-y-6">
              <p>
                Bordeaux et la région Nouvelle-Aquitaine connaissent un essor économique fulgurant, porté par <strong>La French Tech Bordeaux</strong> et un écosystème d'entreprises innovantes (du quartier des Chartrons à Darwin, en passant par Saint-Michel et Mérignac). Dans ce marché hyper-concurrentiel, posséder un simple site internet ne suffit plus : il vous faut une machine d'acquisition digitale.
              </p>
              <p>
                En tant qu'<strong>agence web</strong>, nous concevons des plateformes premium qui allient l'esthétique raffinée attendue par la clientèle bordelaise, à des performances techniques de pointe. Que vous soyez un acteur du monde viticole, de la wine-tech, un artisan renommé ou une startup en croissance, votre vitrine digitale doit refléter l'excellence de votre savoir-faire.
              </p>
              <p>
                Notre méthodologie repose sur trois piliers : <strong>l'Expérience Utilisateur (UX)</strong> pour guider vos visiteurs vers l'action, <strong>la Vitesse d'affichage</strong> (via l'architecture Next.js) pour ne perdre aucun prospect impatient, et le <strong>Référencement Naturel (SEO local)</strong>. Nous intégrons les bons mots-clés transactionnels dès la conception de vos pages, pour garantir votre présence en 1ère page de Google sur Bordeaux.
              </p>
              <p>
                Avoir un site esthétique est primordial, mais s'il est invisible, il ne génère aucun chiffre d'affaires. C'est pourquoi nous auditons la sémantique de vos concurrents girondins pour élaborer une structure de site capable de capter le trafic de qualité, là où vos prospects vous recherchent.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nos Solutions Web Premium</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Des prestations sur-mesure pour accompagner votre croissance en Gironde.
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
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group"
                >
                  <div className="w-14 h-14 bg-[#6E1C38]/5 group-hover:bg-[#6E1C38]/10 rounded-lg flex items-center justify-center mb-6 transition-colors">
                    <Icon className="w-7 h-7 text-[#6E1C38]" />
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
      <section className="py-20 bg-[#1A0B14] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">La méthode pour réussir votre projet</h2>
            <p className="text-xl text-slate-400">Un accompagnement rigoureux de l'idée jusqu'à la mise en ligne.</p>
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
                className="bg-[#2A1121] p-6 rounded-xl border border-white/10 relative"
              >
                <div className="w-12 h-12 bg-[#6E1C38] text-[#E5B558] rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-[#6E1C38]/30 border border-[#8A1A3F]">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-50" id="tarifs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Des tarifs transparents, sans surprise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choisissez l'offre qui correspond aux ambitions digitales de votre entreprise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col ${
                  plan.recommended ? 'border-2 border-[#6E1C38] transform md:-translate-y-4' : 'border border-slate-200'
                }`}
              >
                {plan.recommended && (
                  <div className="bg-[#6E1C38] text-[#E5B558] text-center py-2 text-sm font-bold tracking-wider uppercase">
                    Le plus choisi
                  </div>
                )}
                <div className="p-8 flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-[#6E1C38] mb-4">{plan.price}</div>
                  <div className="text-sm text-slate-500 mb-8 font-medium">{plan.timeline}</div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <Link href="/contact">
                    <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                      plan.recommended 
                        ? 'bg-[#6E1C38] text-white hover:bg-[#8A1A3F] shadow-lg shadow-[#6E1C38]/20' 
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                    }`}>
                      Obtenir un Devis
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Questions Fréquentes (Bordeaux)</h2>
            <p className="text-xl text-slate-600">Tout ce que vous devez savoir avant de lancer votre projet.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Internal Links Cross-mesh */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500 font-medium mb-4 text-center">Découvrez nos autres expertises géographiques & métiers :</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <Link href="/services/agence-web-paris" className="text-slate-600 hover:text-[#6E1C38] transition-colors">Agence Web Paris</Link>
            <span className="text-slate-300">|</span>
            <Link href="/services/agence-web-lyon" className="text-slate-600 hover:text-[#6E1C38] transition-colors">Agence Web Lyon</Link>
            <span className="text-slate-300">|</span>
            <Link href="/services/optimisation-seo" className="text-slate-600 hover:text-[#6E1C38] transition-colors">Expert SEO</Link>
            <span className="text-slate-300">|</span>
            <Link href="/services/creation-sites-web" className="text-slate-600 hover:text-[#6E1C38] transition-colors">Création de Site</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#1A0B14] to-[#6E1C38] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à digitaliser votre entreprise bordelaise ?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium text-[#E5B558]">
            Parlons de votre projet. Nous réaliserons une étude personnalisée et gratuite pour vous proposer la solution web la plus adaptée à vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-10 py-4 bg-white text-[#6E1C38] rounded-lg font-bold hover:bg-slate-100 transition-all shadow-xl">
                Contacter notre équipe
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
