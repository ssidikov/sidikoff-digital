import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  FileText,
  ArrowRight,
  CheckCircle,
  PenTool,
  Settings,
  ShieldAlert,
  Search,
  LayoutTemplate,
  Rocket
} from 'lucide-react'

import { FAQAccordion } from '@/components/FAQAccordion'

const benefits = [
  "Thèmes WordPress sur mesure (sans constructeurs lourds)",
  "Hébergement sécurisé et sauvegardes quotidiennes",
  "Optimisation drastique du temps de chargement (WP Rocket)",
  "Back-office simplifié et formation incluse",
  "Sécurisation avancée contre les piratages (Wordfence/Cloudflare)"
]

const services = [
  {
    icon: LayoutTemplate,
    title: 'Création de Thèmes Sur Mesure',
    description: 'Fini les thèmes préfabriqués lents et buggés. Nous développons votre thème WordPress de zéro (from scratch) pour un design unique et des performances optimales.'
  },
  {
    icon: Search,
    title: 'SEO WordPress Avancé',
    description: 'Configuration experte de Yoast/RankMath, optimisation du maillage interne, et structuration sémantique pour dominer les résultats Google.'
  },
  {
    icon: Rocket,
    title: 'Optimisation de la Vitesse',
    description: 'Audit et refonte technique de votre site WordPress lent. Mise en cache, optimisation des requêtes base de données, et conversion des images en WebP.'
  },
  {
    icon: ShieldAlert,
    title: 'Sécurité & Maintenance',
    description: 'Mises à jour régulières (Core, thèmes, plugins), protection contre les attaques par force brute, et hébergement infogéré haute disponibilité.'
  },
  {
    icon: PenTool,
    title: 'Gutenberg & Blocs Flexibles',
    description: 'Nous configurons l\'éditeur natif Gutenberg avec des blocs ACF (Advanced Custom Fields) sur mesure pour vous offrir une édition de contenu puissante et sans risque.'
  },
  {
    icon: Settings,
    title: 'Migrations complexes',
    description: 'Migration sans perte de SEO de votre ancien CMS (Wix, Joomla, Drupal) vers WordPress, ou changement d\'hébergement sécurisé.'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Cadrage & Arborescence',
    description: 'Définition des types de contenus (CPT), de l\'arborescence SEO et de la stratégie d\'acquisition.'
  },
  {
    number: '02',
    title: 'Design UI/UX',
    description: 'Création des maquettes graphiques sur Figma, validées par vos équipes avant tout développement.'
  },
  {
    number: '03',
    title: 'Intégration & Code',
    description: 'Développement du thème WordPress sur mesure, création des blocs Gutenberg et intégration des contenus.'
  },
  {
    number: '04',
    title: 'Formation & Lancement',
    description: 'Formation de vos équipes à la gestion du back-office, puis mise en production avec suivi technique.'
  }
]

const faqItems = [
  {
    id: '1',
    question: 'Pourquoi faire appel à une agence WordPress plutôt que de le faire soi-même ?',
    answer: 'Bien que WordPress soit accessible, créer un site performant, sécurisé et bien référencé demande une réelle expertise. Un site fait par un amateur utilise souvent des constructeurs de pages lourds (Elementor, Divi) et trop de plugins, ce qui détruit le temps de chargement et l\'expérience utilisateur. Notre agence code des thèmes sur mesure, ultra-légers et protégés contre les piratages.',
    category: 'tech'
  },
  {
    id: '2',
    question: 'WordPress est-il sécurisé pour une entreprise ?',
    answer: 'Oui, si et seulement s\'il est bien configuré. WordPress motorise 43% du web mondial, il est donc la cible principale des hackers. Nous sécurisons votre site via des pare-feux applicatifs (WAF), le masquage de l\'interface d\'administration, la limitation des tentatives de connexion, et des mises à jour proactives.',
    category: 'security'
  },
  {
    id: '3',
    question: 'Utilisez-vous des constructeurs de pages comme Elementor ?',
    answer: 'En règle générale, non. Pour les sites professionnels, nous privilégions le développement de thèmes sur mesure avec l\'éditeur natif Gutenberg et ACF (Advanced Custom Fields). Cela permet d\'obtenir un site 3x plus rapide, plus facile à mettre à jour pour vos équipes, et avec un code parfaitement propre pour le SEO.',
    category: 'tech'
  },
  {
    id: '4',
    question: 'Quel est le budget pour un site WordPress professionnel ?',
    answer: 'Un site vitrine WordPress sur mesure (design UI exclusif, thème développé from scratch, optimisation SEO) commence généralement autour de 3 000 €. Les prix évoluent en fonction du nombre de modèles de pages, des fonctionnalités complexes (annuaires, espaces membres) et du volume de contenu à intégrer.',
    category: 'pricing'
  },
  {
    id: '5',
    question: 'Proposez-vous la maintenance après la mise en ligne ?',
    answer: 'Oui, c\'est fortement recommandé. Notre forfait de maintenance inclut les mises à jour du cœur WordPress, des thèmes et des plugins, des sauvegardes quotidiennes externalisées, le monitoring de disponibilité 24/7, et des heures d\'intervention en cas de besoin d\'évolution.',
    category: 'service'
  }
]

export default function WordpressParisLandingContent() {
  return (
    <div className='min-h-screen bg-slate-50'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 overflow-hidden bg-[#0A101A]'>
        {/* Background Overlay */}
        <div className='absolute inset-0 z-0 opacity-30'>
          <Image
            src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop'
            alt='Création site WordPress'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-[#0A101A] via-[#0A101A]/90 to-blue-900/40'></div>
        </div>

        {/* Decorative Blue Glow */}
        <div className='absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-blue-500/20 blur-[100px] pointer-events-none'></div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              <div className='inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-sm font-medium'>
                <FileText className='w-4 h-4 mr-2' />
                Agence Experte CMS WordPress
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
                  Agence <span className='text-blue-400'>WordPress</span> Paris : Création de sites sur mesure
                </h1>
                <p className='text-xl text-slate-300 leading-relaxed mb-8'>
                  Développement de thèmes exclusifs, ultra-rapides et sécurisés. Reprenez le contrôle de votre communication digitale avec le CMS le plus puissant au monde.
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
                    <CheckCircle className='w-5 h-5 text-blue-400 flex-shrink-0' />
                    <span className='text-slate-200 font-medium'>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <Link href='/contact'>
                  <button className='w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-500 transition-all duration-300 flex items-center justify-center shadow-lg shadow-blue-600/20'>
                    Demander un devis WordPress
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
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-100 p-6'>
                <div className='flex bg-white rounded-xl shadow-lg h-[400px] overflow-hidden border border-slate-200'>
                  {/* WP Sidebar Mockup */}
                  <div className='w-16 md:w-48 bg-[#1e1e1e] flex flex-col'>
                    <div className='h-12 flex items-center px-4 bg-[#23282d] border-b border-slate-700'>
                      <div className='w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-serif italic text-xs'>W</div>
                    </div>
                    <div className='flex-1 p-2 space-y-1'>
                      <div className='h-8 bg-[#0073aa] rounded flex items-center px-2'>
                        <FileText className='w-4 h-4 text-white mr-2' />
                        <span className='hidden md:block text-white text-xs'>Articles</span>
                      </div>
                      <div className='h-8 hover:bg-[#32373c] rounded flex items-center px-2'>
                        <LayoutTemplate className='w-4 h-4 text-slate-400 mr-2' />
                        <span className='hidden md:block text-slate-300 text-xs'>Pages</span>
                      </div>
                      <div className='h-8 hover:bg-[#32373c] rounded flex items-center px-2'>
                        <Settings className='w-4 h-4 text-slate-400 mr-2' />
                        <span className='hidden md:block text-slate-300 text-xs'>Réglages</span>
                      </div>
                    </div>
                  </div>
                  {/* WP Content Area Mockup */}
                  <div className='flex-1 bg-[#f0f0f1] p-6'>
                    <div className='bg-white p-6 rounded shadow-sm border border-slate-200 h-full'>
                      <div className='w-3/4 h-8 bg-slate-100 rounded mb-6 border border-slate-200 px-3 flex items-center'>
                         <span className='text-slate-400 text-lg font-serif'>Nouvel Article Optimisé SEO...</span>
                      </div>
                      <div className='space-y-4'>
                        <div className='w-full h-32 bg-slate-50 rounded border border-slate-200 border-dashed flex items-center justify-center'>
                           <span className='text-slate-400 text-sm'>+ Ajouter un bloc Gutenberg (Custom ACF)</span>
                        </div>
                        <div className='flex justify-end pt-4'>
                           <div className='px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium'>Publier</div>
                        </div>
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
      <section className='py-8 bg-blue-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white font-bold'>
            <div className='flex items-center gap-2'>
              <Rocket className='w-6 h-6' />
              <span>Temps de chargement &lt; 1s</span>
            </div>
            <div className='flex items-center gap-2'>
              <ShieldAlert className='w-6 h-6' />
              <span>Protection Hackers 24/7</span>
            </div>
            <div className='flex items-center gap-2'>
              <Search className='w-6 h-6' />
              <span>Code 100% SEO Friendly</span>
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
              Pourquoi choisir une agence experte pour votre projet WordPress à Paris ?
            </h2>
            <div className='prose prose-lg text-slate-700 space-y-6'>
              <p>
                WordPress est le système de gestion de contenu (CMS) le plus populaire au monde, motorisant plus de 40% des sites internet globaux. Cependant, cette accessibilité cache une réalité complexe : un site WordPress mal conçu peut rapidement devenir un gouffre en termes de performances, de sécurité et de référencement. C'est ici qu'intervient notre <strong>agence WordPress à Paris</strong>.
              </p>
              <p>
                Notre philosophie est simple : <strong>fuyez les thèmes usines et les constructeurs de pages lourds</strong> (comme Elementor ou Divi) qui génèrent un code spaghetti (DOM Depth) détesté par Google. Nous concevons des <strong>thèmes WordPress sur mesure</strong> (from scratch) pour nos clients B2B, institutions et startups. Résultat ? Votre site charge instantanément, respecte parfaitement votre charte graphique, et offre une expérience utilisateur premium.
              </p>
              <p>
                La gestion du contenu (back-office) est souvent un cauchemar pour les équipes marketing. Nous résolvons ce problème en déployant une architecture basée sur des <strong>blocs Gutenberg personnalisés via Advanced Custom Fields (ACF)</strong>. Vous pouvez créer des landing pages complexes en empilant simplement des blocs prédéfinis, sans jamais risquer de casser le design ou de toucher à une ligne de code. L'autonomie de vos équipes est totale.
              </p>
              <p>
                La sécurité et la maintenance sont les piliers d'un projet web pérenne. Étant très populaire, WordPress est souvent la cible de robots malveillants. En confiant votre site à notre <strong>équipe technique parisienne</strong>, vous bénéficiez d'une infrastructure d'hébergement infogérée, de pare-feux stricts, de sauvegardes externalisées quotidiennes, et d'un monitoring continu. Vous pouvez dormir sur vos deux oreilles.
              </p>
              <p>
                Enfin, WordPress est une machine de guerre pour le SEO, s'il est bien configuré. Nous intégrons les meilleures pratiques techniques d'optimisation : maillage interne automatisé, gestion fine des sitemaps XML, optimisation des balises Schema.org et compression d'images WebP nouvelle génération. Votre site n'est plus une simple vitrine, mais une véritable machine d'acquisition de trafic organique pour votre entreprise en Île-de-France ou à l'international.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Nos prestations WordPress</h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Une maîtrise complète du CMS pour des plateformes robustes et évolutives.
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
                  <div className='w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6'>
                    <Icon className='w-7 h-7 text-blue-600' />
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
      <section className='py-20 bg-[#0A101A] text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>La conception d'un site premium</h2>
            <p className='text-xl text-slate-400'>De l'architecture des données à la livraison clé en main.</p>
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
                className='bg-slate-900 p-6 rounded-xl border border-slate-800 relative'
              >
                <div className='w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-blue-500/20'>
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
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Vos questions sur WordPress</h2>
            <p className='text-xl text-slate-600'>Les éclaircissements techniques de nos chefs de projet.</p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl font-bold mb-6'>Envie de redonner vie à votre communication web ?</h2>
          <p className='text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium text-blue-50'>
            Refonte, création sur mesure ou migration. Rencontrons-nous pour auditer votre site actuel et vous proposer une architecture WordPress performante.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <button className='px-10 py-4 bg-white text-blue-900 rounded-lg font-bold hover:bg-slate-100 transition-all shadow-xl'>
                Demander un devis WordPress
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
