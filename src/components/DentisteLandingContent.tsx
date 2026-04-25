'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Stethoscope,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Calendar,
  Smile,
  HeartPulse,
  Smartphone,
  Lock,
  Search,
  Users
} from 'lucide-react'

import { FAQAccordion } from '@/components/FAQAccordion'

const benefits = [
  "Respect du Code de Déontologie Dentaire",
  "Intégration native de Doctolib / Maiia",
  "Design rassurant pour réduire l'anxiété",
  "Présentation pédagogique des soins (Implants, Ortho)",
  "Hébergement Données de Santé (HDS)"
]

const services = [
  {
    icon: ShieldCheck,
    title: 'Conformité & Déontologie',
    description: 'Site web respectant strictement les recommandations de l\'Ordre des Chirurgiens-Dentistes. Communication loyale, claire et non commerciale.'
  },
  {
    icon: Calendar,
    title: 'Synchronisation Doctolib',
    description: 'Boutons de prise de rendez-vous omniprésents et intégration directe de l\'agenda Doctolib pour simplifier le parcours patient.'
  },
  {
    icon: Lock,
    title: 'Sécurité HDS & RGPD',
    description: 'Formulaires de premier contact ou de télé-dentisterie sécurisés sur des serveurs certifiés Hébergeur de Données de Santé (HDS).'
  },
  {
    icon: Smile,
    title: 'Pédagogie des Soins',
    description: 'Modules explicatifs pour l\'implantologie, l\'orthodontie (Invisalign), l\'esthétique ou la parodontologie. Rassurez vos patients avant la consultation.'
  },
  {
    icon: Search,
    title: 'SEO Local Dentaire',
    description: 'Stratégie de référencement ciblée (ex: "Urgence dentaire Paris", "Implant dentaire Lyon") pour attirer la patientèle de votre secteur.'
  },
  {
    icon: Smartphone,
    title: 'Mobile First & Accessibilité',
    description: 'Un design optimisé pour les smartphones, indispensable pour les urgences dentaires, et accessible aux personnes en situation de handicap.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Analyse du Cabinet',
    description: 'Compréhension de votre structure (omnipratique, spécialisation) et de votre flux patient.'
  },
  {
    number: '02',
    title: 'Design Rassurant',
    description: 'Maquette épurée, couleurs apaisantes (bleu/cyan), photos lumineuses du plateau technique.'
  },
  {
    number: '03',
    title: 'Intégration Médicale',
    description: 'Développement Next.js ultra-rapide, couplage Doctolib et sécurisation RGPD.'
  },
  {
    number: '04',
    title: 'Validation & Lancement',
    description: 'Vérification de la conformité déontologique et déploiement de la stratégie de SEO local.'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'A-t-on le droit de faire de la publicité sur un site de chirurgien-dentiste ?',
    answer: 'Non. L\'Ordre interdit la publicité, mais autorise l\'information objective. Votre site peut (et doit) présenter l\'équipe, le plateau technique (ex: Cone Beam, scanner intra-oral), les horaires, l\'accès, et expliquer les traitements de manière pédagogique. Nous veillons à ce que le contenu reste strictement informatif.',
    category: 'legal'
  },
  {
    id: '2',
    question: 'Pouvez-vous créer des pages spécifiques pour l\'implantologie ou l\'Invisalign ?',
    answer: 'Absolument. Il est très pertinent d\'avoir des pages dédiées pour les plans de traitement spécifiques. Cela permet de rassurer les patients anxieux en expliquant le déroulé des soins, et c\'est excellent pour le SEO de votre cabinet sur ces actes à forte valeur ajoutée.',
    category: 'content'
  },
  {
    id: '3',
    question: 'Le site sera-t-il connecté à notre profil Doctolib ?',
    answer: 'Oui. Le parcours patient est notre priorité. Nous intégrons des boutons d\'appel à l\'action "Prendre RDV en ligne" connectés directement à votre agenda Doctolib, Maiia, ou autre solution de gestion.',
    category: 'features'
  },
  {
    id: '4',
    question: 'Fournissez-vous des photos, ou devons-nous engager un photographe ?',
    answer: 'Nous pouvons intégrer des images libres de droits de très haute qualité illustrant les soins dentaires. Cependant, pour établir un climat de confiance optimal, nous recommandons fortement un shooting photo professionnel de votre cabinet, de la salle d\'attente, des salles de soins et de l\'équipe.',
    category: 'design'
  },
  {
    id: '5',
    question: 'Gérez-vous la fiche Google My Business de notre cabinet ?',
    answer: 'Oui, dans le cadre de notre accompagnement SEO Local, nous optimisons votre fiche Google Business Profile (horaires, photos, lien vers le site) pour maximiser votre visibilité sur Google Maps.',
    category: 'seo'
  }
]

export default function DentisteLandingContent() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden bg-sky-50'>
        <div className='absolute inset-0 bg-[url("/images/hero-illustration.svg")] bg-no-repeat bg-top-right opacity-5'></div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              <div className='inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium'>
                <HeartPulse className='w-4 h-4 mr-2' />
                Spécialistes du Secteur Dentaire
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6'>
                  Création de site internet pour <span className='text-teal-600'>Dentistes</span> & Centres
                </h1>
                <p className='text-xl text-slate-600 leading-relaxed mb-8'>
                  Rassurez vos patients avant même qu'ils ne franchissent la porte de votre cabinet. Web design apaisant, prise de rendez-vous intégrée et conformité déontologique absolue.
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
                    <CheckCircle className='w-5 h-5 text-teal-500 flex-shrink-0' />
                    <span className='text-slate-700 font-medium'>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-all duration-300 flex items-center justify-center shadow-lg shadow-teal-500/30'>
                    Évaluer mon projet
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative'
            >
              <div className='relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]'>
                <Image
                  src='https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop'
                  alt='Cabinet Dentaire Moderne'
                  fill
                  className='object-cover'
                  priority
                />
                <div className='absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent'></div>
                
                <div className='absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-3'>
                      <div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0'>
                        <Calendar className='w-5 h-5 text-blue-600' />
                      </div>
                      <div>
                        <p className='text-slate-900 font-bold'>Dr. Martin</p>
                        <p className='text-slate-500 text-xs'>Chirurgien-Dentiste</p>
                      </div>
                    </div>
                    <button className='px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold'>
                      Prendre RDV
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className='py-10 bg-teal-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white font-medium'>
            <div className='flex items-center gap-3'>
              <ShieldCheck className='w-8 h-8 opacity-80' />
              <span>Conforme Ordre National</span>
            </div>
            <div className='flex items-center gap-3'>
              <Lock className='w-8 h-8 opacity-80' />
              <span>Hébergement Données de Santé</span>
            </div>
            <div className='flex items-center gap-3'>
              <Users className='w-8 h-8 opacity-80' />
              <span>Expérience Patient Optimisée</span>
            </div>
          </div>
        </div>
      </section>

      {/* Semantic SEO Expansion */}
      <section className='py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-8'>
              L'importance capitale d'un site web pour un cabinet dentaire
            </h2>
            <div className='prose prose-lg text-slate-700 space-y-6'>
              <p>
                La relation entre un chirurgien-dentiste et son patient repose avant tout sur la confiance. Mais aujourd'hui, cette confiance ne commence plus dans la salle d'attente ; elle naît sur l'écran d'un smartphone. La <strong>création d'un site internet pour dentiste</strong> permet de construire un premier contact rassurant et professionnel. Face à des patients souvent anxieux à l'idée d'une consultation (stomatophobie), un web design soigné aux couleurs apaisantes, présentant une équipe souriante et un plateau technique moderne, est le meilleur des anxiolytiques.
              </p>
              <p>
                En tant que professionnels de santé, vous êtes soumis à des règles déontologiques rigoureuses dictées par l'Ordre des Chirurgiens-Dentistes. Notre agence web connaît parfaitement la frontière entre l'information nécessaire et la publicité prohibée. Nous structurons vos contenus pour informer vos patients de manière objective et pédagogique sur vos champs d'intervention : <strong>implantologie, orthodontie par aligneurs (ex: Invisalign), parodontologie, esthétique dentaire ou pédodontie</strong>. Ces explications cliniques claires valorisent votre expertise sans jamais tomber dans la démarche commerciale.
              </p>
              <p>
                Par ailleurs, le secrétariat d'un cabinet dentaire est souvent saturé par les appels. L'intégration intelligente de solutions comme <strong>Doctolib ou Maiia</strong> directement sur votre site web permet de fluidifier la prise de rendez-vous. En offrant une expérience utilisateur (UX) irréprochable et "mobile-first", vous facilitez l'accès aux soins, notamment pour les urgences dentaires où la rapidité de recherche locale est primordiale.
              </p>
              <p>
                Enfin, la question du référencement est cruciale, surtout dans des villes denses comme Paris, Lyon ou Marseille. Un bon <strong>SEO local pour cabinet dentaire</strong> permet de capter les patients de votre secteur géographique exact. Nous optimisons l'architecture sémantique de votre site et votre fiche Google My Business pour vous positionner sur des requêtes à forte valeur ajoutée telles que "pose implant dentaire" ou "urgence dentiste de garde", assurant ainsi la croissance et le renouvellement de votre patientèle.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>L'écosystème digital de votre cabinet</h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Un site internet pensé pour alléger votre charge administrative et rassurer la patientèle.
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
                  className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100'
                >
                  <div className='w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6'>
                    <Icon className='w-7 h-7 text-teal-600' />
                  </div>
                  <h3 className='text-xl font-bold text-slate-900 mb-3'>{service.title}</h3>
                  <p className='text-slate-600 leading-relaxed'>{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-slate-900 rounded-3xl p-8 md:p-12 lg:p-16'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl font-bold text-white mb-4'>Les étapes de votre projet</h2>
              <p className='text-xl text-slate-400'>Un processus fluide qui ne perturbe pas l'activité du cabinet.</p>
            </div>

            <div className='grid md:grid-cols-4 gap-8 relative'>
              <div className='hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-slate-700 -z-10'></div>
              
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='text-center'
                >
                  <div className='w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 mx-auto shadow-lg shadow-teal-500/20'>
                    {step.number}
                  </div>
                  <h3 className='text-lg font-bold text-white mb-2'>{step.title}</h3>
                  <p className='text-slate-400 text-sm'>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 bg-slate-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Questions Fréquentes</h2>
            <p className='text-xl text-slate-600'>Tout savoir sur la digitalisation de votre structure dentaire.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 bg-teal-900 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-[url("/images/hero-illustration.svg")] bg-no-repeat bg-bottom opacity-10'></div>
        <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold mb-6'>Modernisez l'image de votre cabinet dentaire</h2>
          <p className='text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium'>
            Un site internet professionnel réduit l'anxiété de vos patients et met en valeur le haut niveau technologique de vos traitements.
          </p>
          <Link href='/contact'>
            <button className='px-10 py-4 bg-teal-500 text-white rounded-xl font-bold hover:bg-teal-400 transition-all shadow-xl'>
              Demander un devis personnalisé
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
