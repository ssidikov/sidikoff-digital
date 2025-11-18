'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Rocket, 
  Search, 
  ShoppingCart,
  Smartphone,
  MapPin,
  Award,
  Briefcase,
  Sparkles,
  Zap,
  Target,
  TrendingUp
} from 'lucide-react'
import type { Dictionary } from '@/lib/dictionaries'
import type { Locale } from '@/lib/i18n'

interface AgenceWebParis15LandingContentProps {
  dictionary: Dictionary
  locale: Locale
}

const iconMap = {
  'âš›ï¸': Code2,
  'ðŸ›’': ShoppingCart,
  'ðŸ›ï¸': ShoppingCart,
  'ðŸ“±': Smartphone,
  'ðŸ“': MapPin,
  'ðŸ†': Award,
  'ðŸ’¼': Briefcase
}

// Modern color palette - Vibrant purple & electric blue
const colors = {
  primary: '#6366F1', // Indigo
  secondary: '#EC4899', // Pink
  accent: '#8B5CF6', // Purple
  dark: '#0F172A', // Slate
  light: '#F8FAFC'
}

export default function AgenceWebParis15LandingContent({ 
  dictionary, 
  locale 
}: AgenceWebParis15LandingContentProps) {
  const content = dictionary.agence_web_paris_15_landing

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-purple-50/30 to-pink-50/20" style={{ fontFamily: 'var(--font-grotesk, system-ui)' }}>
      {/* Hero Section - Full viewport with overlay */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 md:pt-28">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/paris-15/hero-paris.jpg"
            alt="Paris 15ème - Tour Eiffel"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-linear-to-br from-indigo-900/95 via-purple-900/90 to-pink-900/85" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.3),transparent_50%)]" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold mb-8"
              >
                <MapPin className="w-5 h-5 text-pink-400" />
                <span className="bg-linear-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                  {content.hero.badge}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]"
                style={{ fontFamily: 'var(--font-grotesk, system-ui)' }}
              >
                {content.hero.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-purple-100 mb-10 leading-relaxed font-light"
              >
                {content.hero.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link
                  href={`/${locale}/contact`}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-linear-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
                >
                  {content.hero.cta_primary}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={`/${locale}/portfolio`}
                  className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  {content.hero.cta_secondary}
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-8"
              >
                {content.hero.trust_indicators.map((indicator: string, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-base font-semibold text-white">{indicator}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:grid grid-cols-2 gap-6"
            >
              {[
                { icon: Sparkles, label: '50+ Projets', value: 'Réalisés' },
                { icon: Target, label: '98%', value: 'Satisfaction' },
                { icon: Zap, label: '7-14j', value: 'Livraison' },
                { icon: TrendingUp, label: 'SEO', value: 'Optimisé' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <stat.icon className="w-10 h-10 text-pink-400 mb-4" />
                  <div className="text-3xl font-black text-white mb-1">{stat.label}</div>
                  <div className="text-sm font-medium text-purple-200">{stat.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </section>

      {/* Services Section - Modern Cards with Images */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #6366F1 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-linear-to-r from-pink-100 to-purple-100 text-indigo-700 rounded-full text-sm font-bold mb-6">
              NOS SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6" style={{ fontFamily: 'var(--font-grotesk, system-ui)' }}>
              {content.services.title}
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light">
              {content.services.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.services.items.map((service: { icon: string; title: string; description: string }, index: number) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code2
              const images: string[] = [
                '/images/paris-15/web-development.jpg',
                '/images/paris-15/office-workspace.jpg',
                '/images/paris-15/coding-laptop.jpg'
              ]
              const imageUrl: string = images[index % images.length]!

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
                >
                  {/* Image Header */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <IconComponent className="w-7 h-7 text-indigo-600" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors" style={{ fontFamily: 'var(--font-grotesk, system-ui)' }}>
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6 font-light">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all">
                      <span>En savoir plus</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Gradient accent on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/20 rounded-3xl transition-all duration-300 pointer-events-none" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section - Split Layout with Image */}
      <section className="py-24 md:py-32 bg-linear-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/paris-15/team-collaboration.jpg"
                  alt="Notre Ã©quipe"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-br from-indigo-600/30 to-purple-600/30" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-8 shadow-2xl max-w-xs"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-slate-900">98%</div>
                    <div className="text-sm text-slate-600 font-medium">Clients satisfaits</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-pink-300 rounded-full text-sm font-bold mb-6">
                POURQUOI NOUS ?
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-grotesk, system-ui)' }}>
                {content.about.title}
              </h2>
              <p className="text-xl text-purple-100 mb-12 font-light leading-relaxed">
                {content.about.subtitle}
              </p>

              <div className="space-y-6">
                {content.about.items.map((item: { icon: string; title: string; description: string }, index: number) => {
                  const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Award

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-5 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="shrink-0">
                        <div className="w-14 h-14 rounded-xl bg-linear-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-grotesk, system-ui)' }}>
                          {item.title}
                        </h3>
                        <p className="text-purple-200 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section - Timeline Style */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-linear-to-r from-pink-100 to-purple-100 text-indigo-700 rounded-full text-sm font-bold mb-6">
              NOTRE PROCESSUS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6" style={{ fontFamily: 'var(--font-grotesk, system-ui)' }}>
              {content.process.title}
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {content.process.steps.map((step: { number: string; title: string; description: string }, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative mb-16 last:mb-0"
              >
                <div className="flex gap-8 items-start">
                  {/* Step number - Large and bold */}
                  <div className="shrink-0">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-3xl bg-linear-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/30">
                        <span className="text-4xl font-black text-white" style={{ fontFamily: 'var(--font-grotesk, system-ui)' }}>
                          {step.number}
                        </span>
                      </div>
                      {/* Connector line */}
                      {index < content.process.steps.length - 1 && (
                        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-1 h-16 bg-linear-to-b from-indigo-300 to-transparent" />
                      )}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 pt-4">
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4" style={{ fontFamily: 'var(--font-grotesk, system-ui)' }}>
                        {step.title}
                      </h3>
                      <p className="text-lg text-slate-600 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-24 md:py-32 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-linear-to-r from-pink-100 to-purple-100 text-indigo-700 rounded-full text-sm font-bold mb-6">
              NOS RÉALISATIONS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6" style={{ fontFamily: 'var(--font-grotesk, system-ui)' }}>
              {content.portfolio_teaser.title}
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light mb-12">
              {content.portfolio_teaser.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href={`/${locale}/portfolio`}
              className="inline-flex items-center gap-3 px-10 py-6 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105"
            >
              {content.portfolio_teaser.cta}
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section - Full width with image */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/paris-15/team-meeting.jpg"
            alt="Contactez-nous"
            fill
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/95 via-indigo-900/95 to-purple-900/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.2),transparent_70%)]" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
            >
              <MapPin className="w-5 h-5 text-pink-400" />
              <span className="text-white font-semibold">Paris 15ème - Convention, Vaugirard, Grenelle</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight" style={{ fontFamily: 'var(--font-grotesk, system-ui)' }}>
              {content.cta.title}
            </h2>

            <p className="text-2xl md:text-3xl text-purple-100 mb-12 font-light">
              {content.cta.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex items-center justify-center gap-3 px-12 py-6 bg-linear-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
              >
                {content.cta.button}
                <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={`/${locale}/portfolio`}
                className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-300"
              >
                Voir nos projets
              </Link>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { icon: Sparkles, label: '50+', desc: 'Projets' },
                { icon: Award, label: '98%', desc: 'Satisfaction' },
                { icon: Zap, label: '7-14j', desc: 'Livraison' },
                { icon: Target, label: '24/7', desc: 'Support' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <stat.icon className="w-10 h-10 text-pink-400 mx-auto mb-3" />
                  <div className="text-3xl font-black text-white mb-1">{stat.label}</div>
                  <div className="text-sm text-purple-200 font-medium">{stat.desc}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
