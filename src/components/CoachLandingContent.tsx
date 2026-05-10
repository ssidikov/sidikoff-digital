'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  CheckCircle,
  Calendar,
  Instagram,
  Zap,
  TrendingUp,
  Smartphone,
  Star,
  Dumbbell
} from 'lucide-react'

import { FAQAccordion } from '@/components/FAQAccordion'

const benefits = [
  "Réservation en ligne intégrée (Calendly, Mindbody)",
  "Paiement sécurisé des séances (Stripe)",
  "Galerie avant/après percutante",
  "Design ultra-sportif et motivationnel",
  "Optimisation Google Maps pour votre salle ou ville"
]

const services = [
  {
    icon: Calendar,
    title: 'Prise de RDV Automatisée',
    description: 'Ne gérez plus votre planning par SMS. Vos clients réservent et payent leurs séances directement sur votre site web selon vos disponibilités réelles.'
  },
  {
    icon: Smartphone,
    title: '100% Mobile & Rapide',
    description: 'La majorité de vos prospects vous chercheront sur leur téléphone à la salle de sport. Votre site se chargera en un éclair.'
  },
  {
    icon: Instagram,
    title: 'Connexion Réseaux Sociaux',
    description: 'Flux Instagram intégré en direct sur votre site pour montrer vos entraînements quotidiens, votre style de vie et vos résultats.'
  },
  {
    icon: TrendingUp,
    title: 'SEO Local Fitness',
    description: 'Nous optimisons votre présence pour des recherches ultra-ciblées comme "Coach sportif Paris 11" ou "Personal trainer perte de poids Lyon".'
  },
  {
    icon: Star,
    title: 'Preuves Sociales & Avis',
    description: 'Mise en avant stratégique des témoignages de vos clients et des transformations physiques pour déclencher l\'acte d\'achat.'
  },
  {
    icon: Zap,
    title: 'Espace Membre (Optionnel)',
    description: 'Possibilité d\'intégrer un espace privé pour vendre vos programmes PDF, vos vidéos VOD ou vos suivis nutritionnels.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Audit de votre Offre',
    description: 'Analyse de votre cible (perte de poids, prise de masse, post-partum) et de vos tarifs.'
  },
  {
    number: '02',
    title: 'Web Design Énergique',
    description: 'Création d\'une maquette agressive et motivante qui reflète votre personnalité sportive.'
  },
  {
    number: '03',
    title: 'Intégrations Techniques',
    description: 'Mise en place de votre calendrier de réservation, des paiements Stripe et du flux Instagram.'
  },
  {
    number: '04',
    title: 'Lancement & Croissance',
    description: 'Mise en ligne, indexation locale et début d\'acquisition de nouveaux élèves.'
  }
]

const coachTypes = [
  {
    icon: '💪',
    type: 'Personal Trainer',
    keywords: 'coach sportif, personal trainer, musculation',
    description: 'Séances individuelles, suivi nutritionnel, galerie avant/après et réservation Calendly intégrée.'
  },
  {
    icon: '👪',
    type: 'Coach Bootcamp & Cours Collectifs',
    keywords: 'bootcamp, HIIT, cours collectifs outdoor',
    description: 'Planning de séances hebdomadaires, inscriptions en ligne et gestion des groupes simplifiée.'
  },
  {
    icon: '🧘',
    type: 'Coach Yoga & Bien-être',
    keywords: 'professeur yoga, meditation, pilates',
    description: 'Design apaisant et épuré, tarifs et horaires clairs, module de réservation de cours adapté.'
  },
  {
    icon: '🥊',
    type: 'Coach Boxe & Arts Martiaux',
    keywords: 'coach boxe, MMA, krav-maga, self-défense',
    description: 'Design percutant, galerie d’entraînements vidéo et offres de cours d’essai mises en avant.'
  },
  {
    icon: '🏃',
    type: 'Coach Running & Triathlon',
    keywords: 'coach running, marathon, préparation physique',
    description: 'Plans d’entraînement personnalisés à vendre, suivi des performances et blog course à pied.'
  },
  {
    icon: '🥦',
    type: 'Coach Nutrition & Diététique',
    keywords: 'diététicien sportif, nutrition, perte de poids',
    description: 'Programmes PDF à vendre, consultation en ligne et blog de recettes saines pour générer du trafic SEO.'
  }
]

const pricingPlans = [
  {
    name: 'Starter Coach',
    price: '990 €',
    description: 'Pour le coach qui lance son activité en ligne',
    features: [
      '5 pages optimisées SEO',
      'Intégration Calendly (prise de RDV)',
      'Galerie avant/après',
      'Paiement Stripe',
      'Optimisation Google Maps',
      'Hébergement 1 an inclus'
    ],
    isPrimary: false
  },
  {
    name: 'Pro Fitness',
    price: '1 990 €',
    description: 'Pour dominer les recherches et automatiser votre business',
    features: [
      '10 pages + blog coaching',
      'SEO local avancé (3 villes)',
      'Flux Instagram intégré',
      'Programme PDF à vendre (e-commerce)',
      'Avis Google intégrés',
      'Rapport mensuel de trafic'
    ],
    isPrimary: true
  },
  {
    name: 'Digital Coach',
    price: '2 990 €',
    description: 'Pour créer une vraie plateforme de coaching hybride',
    features: [
      'Espace membre / VOD privé',
      'Boutique programmes & e-books',
      'Paiement abonnement mensuel',
      'Intégration app Mindbody',
      'SEO national + local',
      'Maintenance 12 mois incluse'
    ],
    isPrimary: false
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Pourquoi un coach sportif a-t-il besoin d\'un site si Instagram existe ?',
    answer: 'Instagram est excellent pour la notoriété, mais terrible pour la conversion. Un site web vous appartient. Il permet de centraliser vos tarifs, d\'automatiser la prise de rendez-vous, d\'encaisser les paiements à l\'avance (finis les lapins !) et surtout, de capter des clients via Google qui cherchent un coach dans leur ville (SEO local) et qui n\'ont pas forcément Instagram.',
    category: 'strategy'
  },
  {
    id: '2',
    question: 'Pouvez-vous intégrer un système de réservation de cours ?',
    answer: 'Oui. Que vous fassiez du coaching individuel (Personal Training) ou des bootcamps de groupe, nous intégrons des systèmes comme Calendly, Mindbody ou Acuity Scheduling. Vos clients voient vos créneaux libres, réservent et paient en ligne. Votre agenda Google se met à jour automatiquement.',
    category: 'features'
  },
  {
    id: '3',
    question: 'Je vends des programmes PDF, pouvez-vous créer une boutique en ligne ?',
    answer: 'Absolument. Nous pouvons intégrer un module e-commerce simple (ex: Stripe ou Shopify Buy Button) pour vendre vos e-books, plans d\'entraînement ou goodies, générant ainsi des revenus passifs.',
    category: 'ecommerce'
  },
  {
    id: '4',
    question: 'Faut-il engager un photographe pro pour le site ?',
    answer: 'C\'est fortement recommandé. Le métier du fitness est très visuel. Des photos professionnelles de vous en pleine action ou lors d\'un shooting rendent votre site web instantanément premium et justifient des tarifs de coaching plus élevés.',
    category: 'content'
  },
  {
    id: '5',
    question: 'Gérez-vous la fiche Google My Business de mon activité ?',
    answer: 'Oui, dans notre offre de SEO Local, nous optimisons votre fiche Google pour que vous apparaissiez en tête sur Google Maps lorsque quelqu\'un tape "coach sportif [Votre Ville]".',
    category: 'seo'
  },
  {
    id: '6',
    question: 'Quel est le budget pour un site de coach sportif professionnel ?',
    answer: 'Nos offres commencent à 990 € pour un site vitrine avec prise de RDV et paiement en ligne. Un site premium avec SEO local avancé et boutique de programmes est à 1 990 €. Cet investissement est généralement rentabilisé dès les 2 premiers nouveaux clients.',
    category: 'pricing'
  },
  {
    id: '7',
    question: 'Comment générer des revenus passifs grâce à mon site ?',
    answer: 'En ajoutant une boutique en ligne pour vendre vos programmes PDF, vidéos VOD, ou en créant un abonnement mensuel (espace membre privé). Ces revenus ne nécessitent aucun effort supplémentaire une fois en place et permettent de découpler vos revenus de votre temps de coaching.',
    category: 'business'
  },
  {
    id: '8',
    question: 'Mon site peut-il m\'aider à coacher des clients à distance ?',
    answer: 'Absolument. Avec un espace membre sécurisé, vos clients peuvent accéder à leurs programmes personnalisés, videos de correction de posture et suivis nutritionnels depuis n\'importe où. Le coaching à distance multiplie votre zone d\'intervention sans limite géographique.',
    category: 'remote'
  }
]

export default function CoachLandingContent() {
  return (
    <div className='min-h-screen bg-zinc-950'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden'>
        {/* Background Image & Overlay */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2000&auto=format&fit=crop'
            alt='Coach Sportif Entraînement'
            fill
            className='object-cover object-top opacity-40'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent'></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              <div className='inline-flex items-center px-4 py-2 bg-lime-500/10 border border-lime-500/30 text-lime-400 rounded-full text-sm font-bold tracking-wide uppercase'>
                <Activity className='w-4 h-4 mr-2' />
                Agence Web pour Coachs Sportifs
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-7xl font-black text-white leading-none mb-6 uppercase tracking-tight'>
                  Transformez <br />
                  <span className='text-lime-400'>Vos Abonnés</span><br />
                  En Clients.
                </h1>
                <p className='text-xl text-zinc-300 leading-relaxed mb-8 font-medium max-w-lg'>
                  Passez au niveau supérieur. Obtenez un site web qui automatise vos réservations, vend vos programmes, et domine Google.
                </p>
              </div>

              <div className='space-y-4'>
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className='flex items-center space-x-3'
                  >
                    <CheckCircle className='w-6 h-6 text-lime-400 flex-shrink-0' />
                    <span className='text-zinc-100 font-bold'>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-6'>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-lime-400 text-zinc-950 rounded-none font-black uppercase tracking-widest hover:bg-lime-300 transition-all duration-300 flex items-center justify-center shadow-[4px_4px_0px_#ffffff] hover:shadow-[2px_2px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px]'>
                    Créer mon site
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </button>
                </Link>
                <Link href='/projects'>
                  <button className='w-full sm:w-auto px-8 py-4 border-2 border-zinc-600 text-white rounded-none font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all duration-300'>
                    Voir le portfolio
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='hidden lg:block relative'
            >
              <div className='relative overflow-hidden shadow-2xl border border-zinc-800 aspect-[3/4] skew-y-3 skew-x-[-3deg] transform transition-transform hover:skew-y-0 hover:skew-x-0 duration-500'>
                <Image
                  src='https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop'
                  alt='Coach Personnel'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent'></div>
                
                <div className='absolute bottom-8 left-8 right-8 bg-zinc-950/90 backdrop-blur-md p-6 border-l-4 border-lime-400'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <div className='w-12 h-12 bg-lime-400 flex items-center justify-center flex-shrink-0'>
                      <Dumbbell className='w-6 h-6 text-zinc-950' />
                    </div>
                    <div>
                      <h3 className='text-white font-black text-xl uppercase'>Alex Fitness</h3>
                      <p className='text-lime-400 text-sm font-bold'>Personal Trainer • Paris</p>
                    </div>
                  </div>
                  <button className='w-full py-3 bg-white text-zinc-950 font-black uppercase text-sm hover:bg-zinc-200 transition'>
                    Réserver une séance
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className='py-8 bg-lime-400'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 text-zinc-950 font-black uppercase tracking-widest text-sm'>
            <div className='flex items-center gap-2'>
              <Calendar className='w-6 h-6' />
              <span>Calendly / Mindbody</span>
            </div>
            <div className='flex items-center gap-2'>
              <TrendingUp className='w-6 h-6' />
              <span>N°1 Google Maps</span>
            </div>
            <div className='flex items-center gap-2'>
              <Zap className='w-6 h-6' />
              <span>Paiement Stripe</span>
            </div>
          </div>
        </div>
      </section>

      {/* Semantic SEO Expansion */}
      <section className='py-24 bg-zinc-900'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl md:text-5xl font-black text-white mb-8 uppercase leading-tight'>
              Pourquoi Instagram <span className='text-lime-400'>ne suffit plus</span> pour un coach sportif ?
            </h2>
            <div className='prose prose-lg prose-invert text-zinc-300 space-y-6'>
              <p>
                Dans l'industrie du fitness et du coaching, la majorité des entraîneurs comptent uniquement sur les réseaux sociaux (Instagram, TikTok) pour trouver des clients. C'est une erreur stratégique majeure. Bien que ces plateformes soient excellentes pour développer une communauté, elles sont volatiles et peu optimisées pour la conversion. La <strong>création d'un site internet pour coach sportif</strong> est la seule manière de centraliser votre business, de professionnaliser votre image et de justifier des tarifs premium.
              </p>
              <p>
                Un site web bien conçu agit comme votre meilleur vendeur 24h/24. Fini les allers-retours interminables par Message Privé (DM) pour expliquer vos tarifs, vérifier vos disponibilités ou courir après les paiements. En intégrant des systèmes de <strong>réservation en ligne de cours de sport</strong> (comme Calendly ou Acuity), vos clients réservent leur créneau et paient par carte bancaire (Stripe) avant même de vous rencontrer. Votre planning se remplit tout seul, sans effort administratif.
              </p>
              <p>
                Côté acquisition, l'enjeu majeur est le <strong>SEO local pour personal trainer</strong>. Si quelqu'un cherche sur Google "coach sportif perte de poids Lyon" ou "préparateur physique Paris 17", c'est un prospect "chaud", prêt à investir immédiatement. S'il ne trouve que votre compte Instagram parmi des dizaines d'autres, il ira chez le concurrent qui possède un site web rassurant, avec des témoignages vérifiés et des photos avant/après impressionnantes. Nous optimisons votre site et votre fiche Google My Business pour capturer cette demande locale.
              </p>
              <p>
                Enfin, un site internet vous permet de diversifier vos revenus. Un coach dont l'agenda est plein est limité par son temps. Avec un site performant (développé sous Next.js par Sidikoff Digital), vous pouvez facilement ajouter une boutique en ligne pour vendre des <strong>programmes PDF de musculation</strong>, des plans de nutrition, ou créer un espace membre (VOD) pour un accompagnement à distance. Votre site devient une véritable plateforme de coaching hybride.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-24 bg-zinc-950 border-t border-zinc-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-5xl font-black text-white mb-6 uppercase'>L'Arsenal du <span className='text-lime-400'>Personal Trainer</span></h2>
            <p className='text-xl text-zinc-400 max-w-3xl mx-auto font-medium'>
              Des fonctionnalités techniques de pointe pour automatiser votre activité de coaching.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='bg-zinc-900 p-8 border border-zinc-800 hover:border-lime-400 transition-colors group relative overflow-hidden'
                >
                  <div className='absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity'>
                    <Icon className='w-32 h-32 text-lime-400' />
                  </div>
                  <div className='w-14 h-14 bg-zinc-800 flex items-center justify-center mb-6 border-l-2 border-lime-400 relative z-10'>
                    <Icon className='w-7 h-7 text-white' />
                  </div>
                  <h3 className='text-xl font-black text-white mb-3 uppercase relative z-10'>{service.title}</h3>
                  <p className='text-zinc-400 leading-relaxed font-medium relative z-10'>{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-24 bg-zinc-900 border-t border-zinc-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-5xl font-black text-white mb-6 uppercase'>Plan d'<span className='text-lime-400'>Entraînement</span></h2>
            <p className='text-xl text-zinc-400 font-medium'>4 semaines pour mettre votre business digital en forme.</p>
          </div>

          <div className='grid md:grid-cols-4 gap-8 relative'>
            <div className='hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-zinc-800 -z-10 -translate-y-1/2'></div>
            
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-zinc-950 p-6 border border-zinc-800 relative group hover:border-lime-400 transition-colors'
              >
                <div className='w-12 h-12 bg-lime-400 text-zinc-950 flex items-center justify-center font-black text-xl mb-6 shadow-[4px_4px_0px_#ffffff] group-hover:shadow-[2px_2px_0px_#ffffff] group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all'>
                  {step.number}
                </div>
                <h3 className='text-lg font-black text-white mb-2 uppercase'>{step.title}</h3>
                <p className='text-zinc-400 text-sm font-medium'>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coach Types Section */}
      <section className='py-24 bg-zinc-900 border-t border-zinc-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-5xl font-black text-white mb-6 uppercase'>Toutes les <span className='text-lime-400'>Disciplines</span></h2>
            <p className='text-xl text-zinc-400 max-w-3xl mx-auto font-medium'>
              Du personal trainer au coach nutrition, nous créons des sites adaptés à votre discipline.
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {coachTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className='bg-zinc-950 p-6 border border-zinc-800 hover:border-lime-400 transition-colors'
              >
                <div className='text-4xl mb-4'>{type.icon}</div>
                <h3 className='text-lg font-black text-white mb-1 uppercase'>{type.type}</h3>
                <p className='text-xs text-lime-400 font-bold mb-3 uppercase tracking-widest'>{type.keywords}</p>
                <p className='text-zinc-400 text-sm leading-relaxed font-medium'>{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className='py-24 bg-zinc-950 border-t border-zinc-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-5xl font-black text-white mb-6 uppercase'>Tarifs <span className='text-lime-400'>Transparents</span></h2>
            <p className='text-xl text-zinc-400 font-medium max-w-3xl mx-auto'>
              Des offres claires. Rentabilisées dès vos 2 premiers nouveaux clients.
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 border-2 ${
                  plan.isPrimary
                    ? 'bg-lime-400 border-lime-400 text-zinc-950'
                    : 'bg-zinc-900 border-zinc-700 text-white'
                }`}
              >
                {plan.isPrimary && (
                  <div className='absolute -top-5 left-1/2 -translate-x-1/2'>
                    <span className='px-4 py-1 bg-white text-zinc-950 text-sm font-black uppercase tracking-widest shadow-[4px_4px_0px_#000]'>Recommandé</span>
                  </div>
                )}
                <h3 className={`text-xl font-black mb-2 uppercase ${plan.isPrimary ? 'text-zinc-950' : 'text-white'}`}>{plan.name}</h3>
                <div className={`text-4xl font-black mb-2 ${plan.isPrimary ? 'text-zinc-950' : 'text-lime-400'}`}>{plan.price}</div>
                <p className={`text-sm mb-6 ${plan.isPrimary ? 'text-zinc-700' : 'text-zinc-400'}`}>{plan.description}</p>
                <ul className='space-y-3 mb-8'>
                  {plan.features.map((feature, i) => (
                    <li key={i} className='flex items-start gap-2'>
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.isPrimary ? 'text-zinc-950' : 'text-lime-400'}`} />
                      <span className={`text-sm font-medium ${plan.isPrimary ? 'text-zinc-800' : 'text-zinc-300'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href='/contact'>
                  <button className={`w-full py-3 font-black uppercase tracking-widest transition-all ${
                    plan.isPrimary
                      ? 'bg-zinc-950 text-white hover:bg-zinc-800 shadow-[4px_4px_0px_#fff] hover:shadow-[2px_2px_0px_#fff] hover:translate-x-[2px] hover:translate-y-[2px]'
                      : 'bg-lime-400 text-zinc-950 hover:bg-lime-300'
                  }`}>
                    Demander un devis
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-24 bg-zinc-950 border-t border-zinc-800'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-5xl font-black text-white mb-6 uppercase'>Questions <span className='text-lime-400'>Fréquentes</span></h2>
            <p className='text-xl text-zinc-400 font-medium'>Tout ce qu'un Personal Trainer doit savoir avant de lancer son site.</p>
          </div>
          <div className='bg-zinc-900 p-2 border border-zinc-800'>
            {/* Using standard FAQ accordion but wrapping in dark theme container context */}
            <div className='dark-faq-wrapper'>
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className='py-16 bg-zinc-900 border-t border-zinc-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-10'>
            <h2 className='text-2xl font-black text-white mb-3 uppercase'>Nos services <span className='text-lime-400'>liés</span></h2>
            <p className='text-zinc-400 font-medium'>Experts du digital sport & santé à Paris, Lyon et partout en France.</p>
          </div>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/services/creation-site-internet-medecin' className='px-5 py-2.5 bg-zinc-950 border border-zinc-700 text-zinc-300 font-bold uppercase text-xs tracking-widest hover:border-lime-400 hover:text-lime-400 transition-colors'>Site Internet Médecin</Link>
            <Link href='/services/agence-web-paris' className='px-5 py-2.5 bg-zinc-950 border border-zinc-700 text-zinc-300 font-bold uppercase text-xs tracking-widest hover:border-lime-400 hover:text-lime-400 transition-colors'>Agence Web Paris</Link>
            <Link href='/services/agence-web-lyon' className='px-5 py-2.5 bg-zinc-950 border border-zinc-700 text-zinc-300 font-bold uppercase text-xs tracking-widest hover:border-lime-400 hover:text-lime-400 transition-colors'>Agence Web Lyon</Link>
            <Link href='/services/creation-site-ecommerce' className='px-5 py-2.5 bg-zinc-950 border border-zinc-700 text-zinc-300 font-bold uppercase text-xs tracking-widest hover:border-lime-400 hover:text-lime-400 transition-colors'>Création Site E-commerce</Link>
            <Link href='/services/optimisation-seo' className='px-5 py-2.5 bg-zinc-950 border border-zinc-700 text-zinc-300 font-bold uppercase text-xs tracking-widest hover:border-lime-400 hover:text-lime-400 transition-colors'>Optimisation SEO</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-32 bg-lime-400 text-zinc-950 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[url("/images/hero-illustration.svg")] bg-no-repeat bg-center opacity-10'></div>
        <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-5xl md:text-7xl font-black mb-8 uppercase leading-none tracking-tight'>
            Dépassez Vos <br /> Concurrents.
          </h2>
          <p className='text-xl md:text-2xl mb-12 font-bold max-w-2xl mx-auto'>
            Demandez un audit gratuit de votre présence digitale. Nous allons remplir votre agenda.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <Link href='/contact'>
              <button className='px-12 py-5 bg-zinc-950 text-white font-black uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-[6px_6px_0px_#ffffff] hover:shadow-[3px_3px_0px_#ffffff] hover:translate-x-[3px] hover:translate-y-[3px] text-lg'>
                Let's Go
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
