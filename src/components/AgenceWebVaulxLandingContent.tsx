import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Code,
  ArrowRight,
  CheckCircle,
  MapPin,
  Smartphone,
  Search,
  Rocket,
  Shield,
  Zap
} from 'lucide-react'

import { FAQAccordion } from '@/components/FAQAccordion'

const benefits = [
  "Agence web locale intervenant à Vaulx-en-Velin",
  "Design web impactant et sur mesure (sans templates)",
  "Plateformes performantes développées sous Next.js ou WordPress",
  "Référencement naturel (SEO) optimisé pour le marché lyonnais",
  "Stratégie de conversion (UX/UI) pour générer des leads"
]

const services = [
  {
    icon: LayoutTemplate,
    title: 'Design de Sites Vitrines',
    description: 'Affirmez la présence de votre entreprise à Vaulx-en-Velin avec un site internet professionnel, conçu pour valoriser votre image de marque.'
  },
  {
    icon: ShoppingCart,
    title: 'Développement E-Commerce',
    description: 'Vendez vos produits en ligne 24/7 avec une boutique E-commerce sécurisée, ergonomique et connectée à vos outils logistiques.'
  },
  {
    icon: Search,
    title: 'Référencement Local (SEO)',
    description: 'Ne laissez plus vos concurrents capter vos clients. Nous positionnons votre site en haut de la première page Google sur vos mots-clés stratégiques.'
  },
  {
    icon: Smartphone,
    title: 'Responsive & Mobile-First',
    description: 'Une navigation fluide et agréable sur tous les supports (Smartphone, Tablette, Ordinateur) pour ne perdre aucun prospect.'
  },
  {
    icon: Rocket,
    title: 'Refonte de Site Internet',
    description: 'Un site vieillissant nuit à votre image. Nous le modernisons avec les derniers standards du web pour relancer votre acquisition digitale.'
  },
  {
    icon: Shield,
    title: 'Hébergement Sécurisé',
    description: 'Hébergement sur des serveurs Cloud rapides, certificat HTTPS inclus, et sauvegardes quotidiennes pour une tranquillité d\'esprit totale.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Atelier Stratégique',
    description: 'Compréhension de votre secteur d\'activité à Vaulx-en-Velin, de vos cibles, et de vos objectifs commerciaux.'
  },
  {
    number: '02',
    title: 'Conception UI/UX',
    description: 'Création des maquettes graphiques de votre futur site, centrées sur l\'expérience utilisateur et la conversion.'
  },
  {
    number: '03',
    title: 'Développement Web',
    description: 'Programmation de votre site avec un code propre (Clean Code) et intégration de vos contenus optimisés SEO.'
  },
  {
    number: '04',
    title: 'Tests & Lancement',
    description: 'Tests rigoureux de fonctionnalités, mise en ligne publique et livraison des clés de votre espace d\'administration.'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Faites-vous des sites internet pour tous les secteurs d\'activité ?',
    answer: 'Oui, nous accompagnons une grande variété de professionnels à Vaulx-en-Velin et dans la métropole lyonnaise : artisans du BTP, professions libérales (avocats, experts-comptables), commerçants, industries et startups technologiques. Nous adaptons notre stratégie à votre marché spécifique.',
    category: 'agency'
  },
  {
    id: '2',
    question: 'Pourquoi le design sur mesure est-il préférable à un modèle tout fait ?',
    answer: 'Un modèle (template) acheté 50€ est utilisé par des milliers d\'autres entreprises. Il est souvent lourd à charger et difficile à personnaliser. Un design sur mesure permet de créer une identité visuelle unique qui vous démarque, tout en garantissant un code léger, rapide et apprécié par Google.',
    category: 'design'
  },
  {
    id: '3',
    question: 'Proposez-vous un service de maintenance après la mise en ligne ?',
    answer: 'Absolument. La mise en ligne d\'un site n\'est que le début. Nous proposons des forfaits de maintenance incluant les mises à jour de sécurité, la gestion des sauvegardes, le monitoring de disponibilité 24/7 et des heures de support technique en cas de besoin.',
    category: 'service'
  },
  {
    id: '4',
    question: 'Mon site apparaîtra-t-il sur Google ?',
    answer: 'Oui. Tous nos sites sont conçus "SEO-friendly" : structure des titres (H1/H2), balises méta, vitesse de chargement et sitemap XML optimisés. Nous proposons également des prestations SEO avancées pour vous aider à atteindre les premières positions sur des requêtes concurrentielles.',
    category: 'seo'
  },
  {
    id: '5',
    question: 'Quel est le mode de facturation ?',
    answer: 'Nous fonctionnons généralement sur devis fixe après validation du cahier des charges. Le paiement s\'effectue en plusieurs échéances (ex: 30% à la commande, 40% au design, 30% à la livraison). Vous maîtrisez ainsi totalement votre budget, sans frais cachés.',
    category: 'pricing'
  }
]

// Fix missing icons
import { ShoppingCart, LayoutTemplate } from 'lucide-react'

export default function AgenceWebVaulxLandingContent() {
  return (
    <div className='min-h-screen bg-slate-50'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden bg-[#1E0F2D]'>
        {/* Background Overlay */}
        <div className='absolute inset-0 z-0 opacity-30'>
          <Image
            src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop'
            alt='Création site web Vaulx-en-Velin'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-[#1E0F2D] via-[#1E0F2D]/90 to-fuchsia-900/40'></div>
        </div>

        {/* Decorative Fuchsia Glow */}
        <div className='absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-fuchsia-500/30 blur-[100px] pointer-events-none'></div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              <div className='inline-flex items-center px-4 py-2 bg-fuchsia-500/20 border border-fuchsia-500/40 text-fuchsia-300 rounded-full text-sm font-medium'>
                <MapPin className='w-4 h-4 mr-2' />
                Agence Web de l'Est Lyonnais
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
                  Création de site internet à <span className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-500'>Vaulx-en-Velin</span>
                </h1>
                <p className='text-xl text-slate-300 leading-relaxed mb-8'>
                  Démarquez-vous de la concurrence avec un site web moderne, performant et optimisé pour générer de nouveaux clients dans le Grand Lyon.
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
                    <CheckCircle className='w-5 h-5 text-fuchsia-400 flex-shrink-0' />
                    <span className='text-slate-200 font-medium'>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white rounded-lg font-bold hover:from-fuchsia-500 hover:to-pink-500 transition-all duration-300 flex items-center justify-center shadow-lg shadow-fuchsia-600/20'>
                    Demander un devis
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </button>
                </Link>
                <Link href='/projects'>
                  <button className='w-full sm:w-auto px-8 py-4 border border-fuchsia-500/50 text-fuchsia-100 rounded-lg font-semibold hover:bg-fuchsia-900/30 transition-all duration-300'>
                    Voir notre portfolio
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
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-fuchsia-900/50 bg-[#2A1B3D] aspect-square'>
                <div className='absolute inset-0 bg-[url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop")] bg-cover bg-center opacity-20 mix-blend-overlay'></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center p-8 text-center'>
                  <div className='w-20 h-20 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8 shadow-xl -rotate-6'>
                    <Code className='w-10 h-10 text-white rotate-6' />
                  </div>
                  <h3 className='text-3xl font-bold text-white mb-4'>Votre Agence Digitale</h3>
                  <p className='text-fuchsia-300 font-medium text-lg mb-6'>Design Premium & Code propre</p>
                  <div className='bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-4 w-full'>
                    <div className='flex justify-between items-center text-sm mb-2'>
                       <span className='text-white font-medium'>Performance Mobile</span>
                       <span className='text-fuchsia-400 font-bold'>Ultra-Rapide</span>
                    </div>
                    <div className='w-full h-2 bg-slate-800 rounded-full overflow-hidden'>
                      <div className='h-full bg-gradient-to-r from-fuchsia-500 to-pink-500 w-[95%] rounded-full'></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className='py-8 bg-gradient-to-r from-fuchsia-600 to-pink-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white font-bold'>
            <div className='flex items-center gap-2'>
              <LayoutTemplate className='w-6 h-6' />
              <span>Conception Sur Mesure</span>
            </div>
            <div className='flex items-center gap-2'>
              <Zap className='w-6 h-6' />
              <span>Optimisation Web Vitals</span>
            </div>
            <div className='flex items-center gap-2'>
              <Search className='w-6 h-6' />
              <span>SEO Local Inclus</span>
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
              Développez votre entreprise à Vaulx-en-Velin avec une agence web d'excellence
            </h2>
            <div className='prose prose-lg text-slate-700 space-y-6'>
              <p>
                <strong>Vaulx-en-Velin</strong>, au cœur de l'Est de la métropole lyonnaise, connaît un dynamisme économique et urbain majeur. Pour les artisans, PME et commerces locaux, être visible sur internet n'est plus une option. Cependant, posséder un site internet "bricolé" à la hâte peut faire plus de mal que de bien à votre image de marque. C'est ici qu'intervient l'expertise de notre <strong>agence web</strong>.
              </p>
              <p>
                Chez Sidikoff Digital, nous concevons des <strong>sites internet professionnels sur mesure</strong>. Nous ne nous contentons pas de l'esthétique : nous construisons de véritables tunnels de conversion. Chaque bouton, chaque image, chaque paragraphe est pensé pour inciter vos visiteurs à vous contacter, demander un devis ou acheter vos produits. L'expérience utilisateur (UX) est au centre de notre processus de design.
              </p>
              <p>
                La technologie que nous employons fait toute la différence. À l'heure où les utilisateurs sont de plus en plus impatients, nous développons des sites web ultra-rapides en utilisant les dernières technologies de la French Tech (comme <strong>Next.js ou React</strong>). Un site fluide rassure vos prospects et envoie des signaux très positifs aux moteurs de recherche.
              </p>
              <p>
                Pour attirer des clients locaux, le <strong>référencement naturel (SEO)</strong> est indispensable. Nous intégrons les meilleures pratiques SEO dès la conception de l'architecture de votre site. Nous optimisons le maillage interne, rédigeons des balises "Title" pertinentes et optimisons votre profil Google Maps. L'objectif est clair : lorsqu'un habitant de Vaulx-en-Velin ou du Grand Lyon recherche vos services sur Google, votre site doit apparaître en tête de liste.
              </p>
              <p>
                Enfin, nous prônons une collaboration basée sur la transparence et la proximité. Nous nous déplaçons facilement pour des réunions de travail, nous vous formons à l'utilisation de votre site, et nous garantissons une propriété totale de vos outils numériques une fois le projet livré. Investissez dans un outil pérenne pour faire grandir votre entreprise.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Nos prestations digitales</h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Une offre complète pour répondre à tous les besoins numériques de votre entreprise.
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
                  <div className='w-14 h-14 bg-fuchsia-50 rounded-lg flex items-center justify-center mb-6'>
                    <Icon className='w-7 h-7 text-fuchsia-600' />
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
      <section className='py-20 bg-[#1E0F2D] text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>Comment nous construisons votre réussite</h2>
            <p className='text-xl text-slate-400'>Un cycle de création web parfaitement maîtrisé, de l'idée à la mise en ligne.</p>
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
                className='bg-[#2A1B3D] p-6 rounded-xl border border-fuchsia-900/50 relative'
              >
                <div className='w-12 h-12 bg-fuchsia-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-fuchsia-500/30'>
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
            <p className='text-xl text-slate-600'>Les réponses claires à vos interrogations sur la création de site web.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 bg-gradient-to-br from-fuchsia-600 to-pink-600 text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold mb-6'>Prêt à développer votre visibilité à Vaulx-en-Velin ?</h2>
          <p className='text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium text-fuchsia-50'>
            Rencontrez nos experts digitaux pour discuter de votre projet et obtenir une proposition commerciale transparente, adaptée à vos ambitions.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <button className='px-10 py-4 bg-white text-fuchsia-900 rounded-lg font-bold hover:bg-slate-100 transition-all shadow-xl'>
                Demander un devis gratuit
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
