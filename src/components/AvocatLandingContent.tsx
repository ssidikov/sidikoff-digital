'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Scale,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  BookOpen,
  Building,
  Clock,
  Lock,
  Globe,
  Award
} from 'lucide-react'

import { FAQAccordion } from '@/components/FAQAccordion'

const benefits = [
  "Respect strict de la déontologie du CNB",
  "Design premium et statutaire",
  "Sécurisation des données clients (RGPD)",
  "Intégration de prise de rendez-vous (Consulto)",
  "Référencement local optimisé (SEO)"
]

const services = [
  {
    icon: ShieldCheck,
    title: 'Conformité Déontologique',
    description: 'Site web développé dans le plus strict respect du Règlement Intérieur National (RIN) de la profession d\'avocat. Mentions légales conformes et transparence des honoraires.'
  },
  {
    icon: Lock,
    title: 'Sécurité & Confidentialité (RGPD)',
    description: 'Hébergement souverain sécurisé, formulaires cryptés pour le secret professionnel, et gestion rigoureuse des données de vos clients.'
  },
  {
    icon: Globe,
    title: 'SEO Local Avocats',
    description: 'Optimisation sémantique pour dominer les recherches de type "Avocat droit du travail Paris" ou "Avocat pénaliste Lyon". Générez des appels qualifiés.'
  },
  {
    icon: BookOpen,
    title: 'Expertise & Publications',
    description: 'Module d\'actualités et de jurisprudence intégré pour démontrer votre autorité. Partagez facilement vos articles et arrêts marquants.'
  },
  {
    icon: Clock,
    title: 'Prise de RDV en Ligne',
    description: 'Intégration fluide de solutions comme Consulto ou Meetlaw pour automatiser la prise de rendez-vous et le paiement des consultations.'
  },
  {
    icon: Building,
    title: 'Identité Statutaire',
    description: 'Un web design sur mesure qui reflète l\'excellence et le prestige de votre cabinet. Photos de l\'équipe, présentation des associés et des locaux.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Audit & Stratégie',
    description: 'Analyse de votre spécialité (pénal, famille, affaires) et du marché local.'
  },
  {
    number: '02',
    title: 'Web Design Statutaire',
    description: 'Création d\'une maquette premium véhiculant la confiance et l\'autorité.'
  },
  {
    number: '03',
    title: 'Développement & Sécurité',
    description: 'Intégration sous Next.js avec cryptage des formulaires de contact.'
  },
  {
    number: '04',
    title: 'Mise en ligne & SEO',
    description: 'Déploiement, indexation Google et référencement des domaines d\'intervention.'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Le site respecte-t-il les règles du Conseil National des Barreaux (CNB) ?',
    answer: 'Absolument. Nous connaissons les restrictions de la publicité pour les avocats (Art. 10.2 du RIN). Nos sites évitent toute mention comparative, garantissent l\'information objective, et incluent les mentions obligatoires (Barreau d\'appartenance, structure d\'exercice, toque).',
    category: 'legal'
  },
  {
    id: '2',
    question: 'Pouvez-vous intégrer Consulto ou un autre système de prise de RDV ?',
    answer: 'Oui, nous pouvons intégrer Consulto, Meetlaw, ou Calendly directement sur votre site web. Vos clients pourront ainsi réserver et payer leur première consultation en ligne, réduisant le secrétariat et les rendez-vous non honorés.',
    category: 'features'
  },
  {
    id: '3',
    question: 'Combien de temps faut-il pour créer le site de notre cabinet ?',
    answer: 'La création d\'un site web pour un avocat indépendant prend généralement entre 3 et 4 semaines. Pour un cabinet pluridisciplinaire nécessitant des portraits professionnels et une architecture complexe, comptez 6 à 8 semaines.',
    category: 'timing'
  },
  {
    id: '4',
    question: 'Mon site me permettra-t-il d\'avoir de nouveaux clients ?',
    answer: 'Oui. Grâce à notre stratégie de SEO local, votre site sera optimisé pour apparaître dans les premiers résultats Google lorsque des justiciables chercheront un avocat dans votre ville et votre spécialité (ex: "avocat divorce amiable Lyon").',
    category: 'seo'
  },
  {
    id: '5',
    question: 'Les formulaires de contact garantissent-ils le secret professionnel ?',
    answer: 'Tous nos sites utilisent le protocole HTTPS avec des certificats SSL/TLS robustes. Les formulaires de contact sont sécurisés pour protéger les données sensibles de vos clients potentiels (RGPD) avant le premier contact.',
    category: 'security'
  }
]

export default function AvocatLandingContent() {
  return (
    <div className='min-h-screen bg-slate-50'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden bg-slate-900'>
        {/* Background Overlay */}
        <div className='absolute inset-0 z-0 opacity-20'>
          <Image
            src='https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop'
            alt='Cabinet Avocat Bibliothèque'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40'></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              <div className='inline-flex items-center px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-full text-sm font-medium'>
                <Scale className='w-4 h-4 mr-2' />
                Agence Web pour les Professions Juridiques
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
                  Création de site internet pour <span className='text-amber-500'>Avocats</span> & Cabinets
                </h1>
                <p className='text-xl text-slate-300 leading-relaxed mb-8'>
                  Développez votre clientèle avec un site web statutaire, sécurisé et performant. Conception sur mesure dans le strict respect de la déontologie du CNB.
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
                    <CheckCircle className='w-5 h-5 text-amber-500 flex-shrink-0' />
                    <span className='text-slate-200 font-medium'>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-amber-500 text-slate-900 rounded-lg font-bold hover:bg-amber-400 transition-all duration-300 flex items-center justify-center shadow-lg shadow-amber-500/20'>
                    Demander un devis gratuit
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </button>
                </Link>
                <Link href='/projects'>
                  <button className='w-full sm:w-auto px-8 py-4 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300'>
                    Voir nos références
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
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 aspect-[4/5]'>
                <Image
                  src='https://images.unsplash.com/photo-1505664173615-04f1befdfeb0?q=80&w=800&auto=format&fit=crop'
                  alt='Avocat au travail'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent'></div>
                
                <div className='absolute bottom-8 left-8 right-8 bg-slate-900/80 backdrop-blur-md p-6 rounded-xl border border-slate-700'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <div className='w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0'>
                      <Scale className='w-6 h-6 text-slate-900' />
                    </div>
                    <div>
                      <h3 className='text-white font-bold text-lg'>Maître Dupont</h3>
                      <p className='text-amber-500 text-sm'>Avocat au Barreau de Paris</p>
                    </div>
                  </div>
                  <button className='w-full py-2 bg-slate-800 text-white rounded text-sm font-medium hover:bg-slate-700 transition'>
                    Prendre Rendez-Vous en Ligne
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className='py-8 bg-amber-500'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 text-slate-900 font-bold'>
            <div className='flex items-center gap-2'>
              <ShieldCheck className='w-6 h-6' />
              <span>Conforme CNB</span>
            </div>
            <div className='flex items-center gap-2'>
              <Lock className='w-6 h-6' />
              <span>Secret Professionnel & RGPD</span>
            </div>
            <div className='flex items-center gap-2'>
              <Award className='w-6 h-6' />
              <span>Design Premium</span>
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
              Pourquoi un cabinet d'avocats a-t-il besoin d'un site internet d'excellence ?
            </h2>
            <div className='prose prose-lg text-slate-700 space-y-6'>
              <p>
                La profession d'avocat a connu une mutation digitale profonde ces dernières années. Si le bouche-à-oreille reste un pilier de l'acquisition de clientèle, une vaste majorité des justiciables ou des entreprises utilisent Google pour trouver un conseil juridique, chercher un avocat spécialiste, ou simplement vérifier la réputation d'un confrère qui leur a été recommandé. La <strong>création d'un site internet pour avocat</strong> n'est donc plus une option, c'est le fondement de votre développement.
              </p>
              <p>
                Le marché du droit étant ultra-concurrentiel, votre site web doit être le reflet exact de votre niveau d'exigence. Un justiciable qui confie un dossier sensible (droit de la famille, droit pénal, droit des affaires) a besoin d'être rassuré dès les premières secondes. Un <strong>web design statutaire, moderne et parfaitement structuré</strong> suscite instantanément la confiance. Chez Sidikoff Digital, nous concevons des plateformes qui traduisent vos valeurs : rigueur, réactivité et pugnacité.
              </p>
              <p>
                De plus, votre présence en ligne est régie par une <strong>déontologie stricte</strong>. Le Règlement Intérieur National (RIN) de la profession d'avocat impose des limites précises à la publicité personnelle. Nos équipes maîtrisent ces contraintes : nous garantissons l'intégration des mentions légales obligatoires, nous évitons les termes laudatifs ou comparatifs interdits, et nous veillons à la parfaite conformité de la présentation de vos honoraires. Le site web de votre cabinet respectera les recommandations de votre Conseil de l'Ordre, tout en restant un outil marketing redoutable.
              </p>
              <p>
                Sur le plan technique, nous déployons des stratégies de <strong>SEO Local Avocats</strong> agressives. En structurant correctement vos pages de compétences (ex: "Avocat droit immobilier Paris 8", "Avocat licenciement Lyon"), nous permettons à votre cabinet de se positionner en tête des résultats Google. Couplé à l'intégration de modules de <strong>prise de rendez-vous en ligne</strong> (Consulto, Meetlaw) et de paiement des consultations, votre site se transforme en un puissant canal d'acquisition. Vous gagnez du temps sur la gestion administrative, réduisez les "lapins", et facilitez l'accès au droit pour vos clients.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Des solutions pensées pour la profession</h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Chaque fonctionnalité est développée pour répondre aux besoins spécifiques de votre exercice.
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
                  className='bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100'
                >
                  <div className='w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-6'>
                    <Icon className='w-7 h-7 text-amber-600' />
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
      <section className='py-20 bg-slate-900 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>Notre méthodologie de création</h2>
            <p className='text-xl text-slate-400'>De l'audit initial à la mise en ligne, un accompagnement sur mesure.</p>
          </div>

          <div className='grid md:grid-cols-4 gap-8 relative'>
            <div className='hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -z-10 -translate-y-1/2'></div>
            
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-slate-800 p-6 rounded-xl border border-slate-700 relative'
              >
                <div className='w-12 h-12 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-amber-500/20'>
                  {step.number}
                </div>
                <h3 className='text-lg font-bold mb-2'>{step.title}</h3>
                <p className='text-slate-400 text-sm'>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Questions Fréquentes</h2>
            <p className='text-xl text-slate-600'>Les interrogations courantes de nos confrères avocats.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 bg-gradient-to-br from-amber-500 to-amber-600 text-slate-900'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold mb-6'>Prêt à développer la visibilité de votre cabinet ?</h2>
          <p className='text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium'>
            Demandez un audit gratuit de votre présence en ligne. Nous vous proposerons une stratégie sur mesure pour acquérir de nouveaux dossiers.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <button className='px-10 py-4 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-all shadow-xl'>
                Demander un devis
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
