'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { calculateDeterministicAudit } from '@/lib/seo-audit-utils'
import {
  Globe,
  Cpu,
  Sparkles,
  Zap,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Smartphone,
  Gauge,
  Search,
  Shield,
  MapPin,
  Clock,
  ExternalLink,
  TrendingUp,
  Sliders,
  Layers,
  Terminal,
} from 'lucide-react'

export function Yandex360Hero() {
  const [activeTab, setActiveTab] = useState<'web' | 'saas' | 'ai' | 'refonte' | 'seo'>('web')
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop')
  const [refontePos, setRefontePos] = useState<number>(50)
  const [isAuditing, setIsAuditing] = useState(false)
  const [auditUrl, setAuditUrl] = useState('')
  const [auditResults, setAuditResults] = useState<{
    score: number
    metrics: { label: string; value: string; status: 'good' | 'warn' | 'bad'; icon: React.ReactNode }[]
    tips: string[]
  } | null>(null)
  const [auditError, setAuditError] = useState('')
  const urlInputRef = useRef<HTMLInputElement>(null)

  const handleRunAudit = () => {
    setAuditError('')
    const url = auditUrl.trim()
    if (!url) {
      setAuditError('Veuillez entrer l\'URL de votre site')
      urlInputRef.current?.focus()
      return
    }
    // Basic URL validation
    const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/.*)?$/i
    if (!urlPattern.test(url)) {
      setAuditError('URL invalide — ex: www.mon-site.fr')
      urlInputRef.current?.focus()
      return
    }

    setIsAuditing(true)
    setAuditResults(null)

    setTimeout(() => {
      const data = calculateDeterministicAudit(url)
      const iconMap: Record<string, React.ReactNode> = {
        'Balises Title & Meta': <Search className='h-3.5 w-3.5' />,
        'Google My Business': <MapPin className='h-3.5 w-3.5' />,
        'Vitesse de chargement': <Clock className='h-3.5 w-3.5' />,
        'HTTPS & Sécurité': <Shield className='h-3.5 w-3.5' />,
        'Mots-clés locaux (69)': <TrendingUp className='h-3.5 w-3.5' />,
        'Mobile-friendly': <Smartphone className='h-3.5 w-3.5' />,
      }

      const metrics = data.metrics.map((m) => ({
        label: m.label,
        value: m.value,
        status: m.status,
        icon: iconMap[m.label] || <Search className='h-3.5 w-3.5' />,
      }))

      setIsAuditing(false)
      setAuditResults({ score: data.score, metrics, tips: data.issues })
    }, 2200)
  }

  return (
    <section className='relative min-h-screen overflow-hidden bg-[#060812] px-4 pt-32 pb-20 text-white md:pt-40 md:pb-28'>
      {/* Radial Gradient Aura Backgrounds */}
      <div className='pointer-events-none absolute top-10 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-radial from-[#00F0FF]/20 via-[#7000FF]/15 to-transparent blur-[120px]' />
      <div className='pointer-events-none absolute top-1/3 -right-40 h-[450px] w-[450px] rounded-full bg-radial from-[#FFB800]/15 via-[#FF2A6D]/10 to-transparent blur-[100px]' />

      <div className='relative z-10 mx-auto max-w-7xl'>
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mb-6 flex justify-center'
        >
          <div className='inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-2 text-xs font-medium text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.2)] backdrop-blur-xl md:text-sm'>
            <span className='relative flex h-2.5 w-2.5'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75' />
              <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400' />
            </span>
            <span className='tracking-wide uppercase'>Sidikoff 360° Ecosystem</span>
            <span className='h-3 w-px bg-cyan-500/40' />
            <span className='text-gray-300'>Studio Lyon & Villeurbanne (69)</span>
          </div>
        </motion.div>

        {/* Hero Title & Subtitle */}
        <div className='mx-auto max-w-4xl text-center'>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className='text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl'
          >
            Agence Web & Écosystème IA{' '}
            <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-300 bg-clip-text text-transparent'>
              à Lyon & Villeurbanne
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className='mx-auto mt-6 max-w-2xl text-lg font-light text-gray-300 md:text-xl'
          >
            Création de sites Next.js 16 sur-mesure, webapps SaaS, automatisation IA et SEO local 360°.
            Conçu à Villeurbanne pour les PME et entreprises ambitieuses de la métropole lyonnaise.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className='mt-8 flex flex-wrap items-center justify-center gap-4'
          >
            <a
              href='#contact'
              className='group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_45px_rgba(0,240,255,0.6)]'
            >
              <span>Lancer Votre Projet Lyon / Villeurbanne</span>
              <ArrowRight className='h-5 w-5 transition-transform group-hover:translate-x-1' />
            </a>

            <a
              href='#calculator'
              className='inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-base font-medium text-white backdrop-blur-lg transition-all hover:border-cyan-400/40 hover:bg-white/10'
            >
              <Sliders className='h-5 w-5 text-cyan-400' />
              <span>Estimer Votre Devis en 1 Min</span>
            </a>
          </motion.div>
        </div>

        {/* Product Hub Interactive Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mt-16 rounded-3xl border border-white/15 bg-slate-950/70 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl md:p-6'
        >
          {/* Ecosystem Tab Bar */}
          <div className='flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4'>
            <div className='flex flex-wrap items-center gap-2'>
              <button
                onClick={() => setActiveTab('web')}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all md:text-sm ${
                  activeTab === 'web'
                    ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(0,240,255,0.5)]'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Globe className='h-4 w-4' />
                <span>01. Sites Vitrines & Next.js 16</span>
              </button>

              <button
                onClick={() => setActiveTab('saas')}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all md:text-sm ${
                  activeTab === 'saas'
                    ? 'bg-purple-500 text-white shadow-[0_0_20px_rgba(112,0,255,0.5)]'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Layers className='h-4 w-4' />
                <span>02. WebApps & SaaS Lyon</span>
              </button>

              <button
                onClick={() => setActiveTab('ai')}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all md:text-sm ${
                  activeTab === 'ai'
                    ? 'bg-amber-400 text-black shadow-[0_0_20px_rgba(255,184,0,0.5)]'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Cpu className='h-4 w-4' />
                <span>03. Assistants & Workflows IA</span>
              </button>

              <button
                onClick={() => setActiveTab('refonte')}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all md:text-sm ${
                  activeTab === 'refonte'
                    ? 'bg-rose-500 text-white shadow-[0_0_20px_rgba(255,42,109,0.5)]'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Sparkles className='h-4 w-4' />
                <span>04. Refonte WordPress -&gt; Next.js</span>
              </button>

              <button
                onClick={() => setActiveTab('seo')}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all md:text-sm ${
                  activeTab === 'seo'
                    ? 'bg-emerald-400 text-black shadow-[0_0_20px_rgba(0,255,148,0.5)]'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <TrendingUp className='h-4 w-4' />
                <span>05. SEO Local Lyon & 69</span>
              </button>
            </div>

            {/* Device Toggle Mode */}
            {activeTab === 'web' && (
              <div className='hidden items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1 sm:flex'>
                <button
                  onClick={() => setDeviceMode('desktop')}
                  className={`rounded-lg p-1.5 transition-all ${
                    deviceMode === 'desktop' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'
                  }`}
                  title='Vue Ordinateur'
                >
                  <Monitor className='h-4 w-4' />
                </button>
                <button
                  onClick={() => setDeviceMode('mobile')}
                  className={`rounded-lg p-1.5 transition-all ${
                    deviceMode === 'mobile' ? 'bg-cyan-500 text-black' : 'text-gray-400 hover:text-white'
                  }`}
                  title='Vue Mobile'
                >
                  <Smartphone className='h-4 w-4' />
                </button>
              </div>
            )}
          </div>

          {/* Interactive Screen Content Area */}
          <div className='relative mt-4 min-h-[380px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-4 md:p-6'>
            <AnimatePresence mode='wait'>
              {/* TAB 1: STUDIO WEB */}
              {activeTab === 'web' && (
                <motion.div
                  key='web'
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className={`mx-auto transition-all ${
                    deviceMode === 'mobile' ? 'max-w-xs' : 'w-full'
                  }`}
                >
                  <div className='mb-4 flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/90 px-4 py-2 text-xs text-gray-400'>
                    <div className='flex items-center gap-2'>
                      <span className='h-3 w-3 rounded-full bg-red-500/80' />
                      <span className='h-3 w-3 rounded-full bg-yellow-500/80' />
                      <span className='h-3 w-3 rounded-full bg-green-500/80' />
                      <span className='ml-2 text-gray-300 font-mono text-[11px]'>https://www.sidikoff.com/services/agence-web-lyon-villeurbanne</span>
                    </div>
                    <span className='flex items-center gap-1 rounded bg-emerald-500/20 px-2 py-0.5 text-emerald-400 text-[10px] font-bold'>
                      <Zap className='h-3 w-3' /> 100/100 Google Vitals
                    </span>
                  </div>

                  <div className='rounded-xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 p-6'>
                    <div className='flex flex-wrap items-center justify-between gap-4'>
                      <div>
                        <span className='rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-semibold text-cyan-300'>
                          Next.js 16 + React 19 + Tailwind v4
                        </span>
                        <h3 className='mt-3 text-2xl font-bold text-white md:text-3xl'>
                          Sites Vitrines & E-Commerce Lyon & Villeurbanne
                        </h3>
                        <p className='mt-2 text-sm text-gray-300 max-w-lg'>
                          Livré en <span className='text-cyan-400 font-bold'>7 à 14 jours</span>. Optimisation SEO locale avancée pour capturer les clients de la métropole.
                        </p>
                      </div>

                      <div className='flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md'>
                        <div className='text-center'>
                          <div className='text-3xl font-black text-emerald-400'>100</div>
                          <div className='text-[10px] uppercase text-gray-400'>Vitesse</div>
                        </div>
                        <div className='text-center'>
                          <div className='text-3xl font-black text-cyan-400'>100</div>
                          <div className='text-[10px] uppercase text-gray-400'>SEO Lyon</div>
                        </div>
                        <div className='text-center'>
                          <div className='text-3xl font-black text-purple-400'>100</div>
                          <div className='text-[10px] uppercase text-gray-400'>UX Mobile</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: SAAS & CLOUD */}
              {activeTab === 'saas' && (
                <motion.div
                  key='saas'
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className='space-y-4'
                >
                  <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                    <div className='rounded-xl border border-purple-500/20 bg-purple-950/30 p-4'>
                      <div className='text-xs text-purple-300 font-medium'>Serveur Hôte Local</div>
                      <div className='mt-2 text-2xl font-bold text-white'>France / Europe</div>
                      <div className='mt-1 text-xs text-emerald-400'>100% Conforme RGPD</div>
                    </div>
                    <div className='rounded-xl border border-cyan-500/20 bg-cyan-950/30 p-4'>
                      <div className='text-xs text-cyan-300 font-medium'>Disponibilité API</div>
                      <div className='mt-2 text-2xl font-bold text-white'>99.99%</div>
                      <div className='mt-1 text-xs text-cyan-400'>Edge Cache Hit</div>
                    </div>
                    <div className='rounded-xl border border-amber-500/20 bg-amber-950/30 p-4'>
                      <div className='text-xs text-amber-300 font-medium'>Temps de réponse</div>
                      <div className='mt-2 text-2xl font-bold text-white'>&lt; 150ms</div>
                      <div className='mt-1 text-xs text-amber-400'>LCP Instantané</div>
                    </div>
                  </div>

                  <div className='rounded-xl border border-white/10 bg-slate-900/60 p-4 text-xs text-gray-300'>
                    Architecture WebApp sur-mesure pour PME à Lyon & Villeurbanne : dashboards de réservation, espace membres, paiements Stripe et gestion automatisée.
                  </div>
                </motion.div>
              )}

              {/* TAB 3: WORKFLOWS IA */}
              {activeTab === 'ai' && (
                <motion.div
                  key='ai'
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className='rounded-xl border border-amber-500/30 bg-slate-950 p-4 font-mono text-sm'
                >
                  <div className='flex items-center justify-between border-b border-white/10 pb-3 text-xs text-amber-400'>
                    <div className='flex items-center gap-2'>
                      <Terminal className='h-4 w-4' />
                      <span>Sidikoff Agentic AI Engine (Lyon-69)</span>
                    </div>
                    <span className='rounded bg-amber-400/20 px-2 py-0.5 text-[10px] text-amber-300'>LOCAL RAG</span>
                  </div>

                  <div className='mt-4 space-y-3 text-xs md:text-sm'>
                    <p className='text-gray-400'>
                      &gt; <span className='text-cyan-300'>prompt:</span> "Automatiser la prise de rendez-vous pour clients à Villeurbanne & Lyon"
                    </p>
                    <div className='rounded-lg bg-slate-900 p-3 border border-white/10 text-gray-200'>
                      <div className='flex items-center gap-2 text-emerald-400 font-bold mb-1'>
                        <CheckCircle2 className='h-4 w-4' /> Agent Chatbot IA déployé avec succès
                      </div>
                      <p className='text-gray-300 text-xs leading-relaxed'>
                        Réponse automatique 24/7 aux demandes de devis, synchronisation immédiate avec l'agenda et envoi de confirmation email.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 4: REFONTE BEFORE / AFTER */}
              {activeTab === 'refonte' && (
                <motion.div
                  key='refonte'
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className='relative h-[320px] w-full overflow-hidden rounded-xl border border-white/10 select-none'
                >
                  <div className='absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 p-6 flex flex-col justify-between'>
                    <div className='flex justify-between items-center'>
                      <span className='rounded-full bg-emerald-500/20 border border-emerald-400/40 px-3 py-1 text-xs font-bold text-emerald-300'>
                        ✨ APRÈS : Refonte Sidikoff 360°
                      </span>
                      <span className='text-xs text-cyan-300 font-bold'>Conversion +140%</span>
                    </div>

                    <div>
                      <h4 className='text-2xl font-black text-white'>Next.js 16 + SEO Local Lyon</h4>
                      <p className='text-xs text-gray-300 mt-1 max-w-sm'>
                        Chargement en 0.18s, design premium, responsive mobile parfait.
                      </p>
                    </div>

                    <div className='flex items-center gap-3'>
                      <div className='h-3 flex-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500' />
                      <span className='text-xs text-emerald-400 font-mono font-bold'>Score 100/100</span>
                    </div>
                  </div>

                  <div
                    className='absolute inset-0 bg-slate-900 p-6 flex flex-col justify-between border-r-2 border-white'
                    style={{ clipPath: `polygon(0 0, ${refontePos}% 0, ${refontePos}% 100%, 0 100%)` }}
                  >
                    <div className='flex justify-between items-center'>
                      <span className='rounded-full bg-red-500/20 border border-red-400/40 px-3 py-1 text-xs font-bold text-red-300'>
                        ❌ AVANT : Ancien Site Lourd (WordPress)
                      </span>
                      <span className='text-xs text-red-400 font-bold'>Vitesse : 4.8s</span>
                    </div>

                    <div>
                      <h4 className='text-xl font-bold text-gray-400 line-through'>Plugins Obsolètes & Lents</h4>
                      <p className='text-xs text-gray-500 mt-1 max-w-sm'>
                        Perte de clients sur mobile, mauvaise visibilité Google dans le 69.
                      </p>
                    </div>

                    <div className='flex items-center gap-3 opacity-40'>
                      <div className='h-3 flex-1 rounded-full bg-red-900' />
                      <span className='text-xs text-red-400 font-mono'>Score 28/100</span>
                    </div>
                  </div>

                  <input
                    type='range'
                    min='0'
                    max='100'
                    value={refontePos}
                    onChange={(e) => setRefontePos(Number(e.target.value))}
                    className='absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30'
                  />
                  <div
                    className='pointer-events-none absolute top-0 bottom-0 w-1 bg-white z-20 shadow-[0_0_15px_rgba(255,255,255,1)]'
                    style={{ left: `${refontePos}%` }}
                  >
                    <div className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs shadow-lg'>
                      ↔
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 5: AUDITEUR SEO LOCAL */}
              {activeTab === 'seo' && (
                <motion.div
                  key='seo'
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className='rounded-xl border border-emerald-500/30 bg-slate-950 p-6'
                >
                  <div className='text-center'>
                    <h4 className='text-lg font-bold text-white'>Auditeur SEO Local (Lyon & Villeurbanne)</h4>
                    <p className='text-xs text-gray-400 mt-1 max-w-md mx-auto'>
                      Entrez l&apos;URL de votre site pour une analyse SEO locale instantanée.
                    </p>
                  </div>

                  {/* URL Input + Button */}
                  <div className='mt-5 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto'>
                    <div className='relative flex-1'>
                      <Globe className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500' />
                      <input
                        ref={urlInputRef}
                        type='url'
                        value={auditUrl}
                        onChange={(e) => { setAuditUrl(e.target.value); setAuditError('') }}
                        onKeyDown={(e) => e.key === 'Enter' && handleRunAudit()}
                        placeholder='www.votre-site.fr'
                        className='w-full rounded-xl border border-white/10 bg-white/5 py-3 pr-4 pl-10 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/30'
                      />
                    </div>
                    <button
                      onClick={handleRunAudit}
                      disabled={isAuditing}
                      className='inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3 text-xs font-extrabold text-black transition-all hover:bg-emerald-300 disabled:opacity-50 whitespace-nowrap'
                    >
                      {isAuditing ? (
                        <span className='animate-spin'>⏳</span>
                      ) : (
                        <Gauge className='h-4 w-4' />
                      )}
                      <span>{isAuditing ? 'Analyse...' : 'Analyser'}</span>
                    </button>
                  </div>

                  {/* Error */}
                  {auditError && (
                    <p className='mt-2 text-center text-xs text-red-400'>{auditError}</p>
                  )}

                  {/* Loading animation */}
                  {isAuditing && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className='mt-6 space-y-2'
                    >
                      {['Analyse des balises meta...', 'Vérification Google My Business...', 'Test de vitesse...', 'Audit mots-clés locaux...'].map((step, i) => (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.5 }}
                          className='flex items-center gap-2 text-xs text-gray-400'
                        >
                          <motion.span
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                            className='h-1.5 w-1.5 rounded-full bg-emerald-400'
                          />
                          {step}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {/* Results */}
                  {auditResults && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className='mt-6 space-y-4'
                    >
                      {/* Score */}
                      <div className='text-center'>
                        <span className={`text-4xl font-black ${
                          auditResults.score >= 85 ? 'text-emerald-400' :
                          auditResults.score >= 70 ? 'text-amber-400' : 'text-red-400'
                        }`}>
                          {auditResults.score}/100
                        </span>
                        <p className='mt-1 text-xs text-gray-400'>
                          Score SEO local pour <span className='text-white font-medium'>{auditUrl}</span>
                        </p>
                      </div>

                      {/* Metrics Grid */}
                      <div className='grid grid-cols-2 gap-2 sm:grid-cols-3'>
                        {auditResults.metrics.map((m) => (
                          <div
                            key={m.label}
                            className={`rounded-lg border p-3 text-left text-xs ${
                              m.status === 'good' ? 'border-emerald-500/20 bg-emerald-950/30' :
                              m.status === 'warn' ? 'border-amber-500/20 bg-amber-950/30' :
                              'border-red-500/20 bg-red-950/30'
                            }`}
                          >
                            <div className='flex items-center gap-1.5 mb-1'>
                              <span className={`${
                                m.status === 'good' ? 'text-emerald-400' :
                                m.status === 'warn' ? 'text-amber-400' : 'text-red-400'
                              }`}>{m.icon}</span>
                              <span className='text-gray-400 truncate'>{m.label}</span>
                            </div>
                            <span className={`font-bold ${
                              m.status === 'good' ? 'text-emerald-300' :
                              m.status === 'warn' ? 'text-amber-300' : 'text-red-300'
                            }`}>{m.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tips */}
                      {auditResults.tips.length > 0 && (
                        <div className='rounded-lg border border-white/10 bg-white/5 p-4'>
                          <p className='text-xs font-bold text-white mb-2'>💡 Recommandations :</p>
                          <ul className='space-y-1'>
                            {auditResults.tips.map((tip) => (
                              <li key={tip} className='flex items-start gap-2 text-xs text-gray-300'>
                                <ArrowRight className='h-3 w-3 mt-0.5 text-emerald-400 shrink-0' />
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* CTA */}
                      <div className='text-center pt-2'>
                        <a
                          href='#contact'
                          className='inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors'
                        >
                          Besoin d&apos;un audit SEO complet ? Contactez-nous
                          <ExternalLink className='h-3 w-3' />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Real-Time Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className='mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:grid-cols-4'
        >
          <div className='border-r border-white/10 pr-4 text-center md:text-left'>
            <div className='text-3xl font-extrabold text-cyan-400 md:text-4xl'>50+</div>
            <div className='mt-1 text-xs text-gray-400'>Projets Lyon & Métropole</div>
          </div>
          <div className='border-r border-white/10 pr-4 text-center md:text-left'>
            <div className='text-3xl font-extrabold text-purple-400 md:text-4xl'>7 à 14 Jours</div>
            <div className='mt-1 text-xs text-gray-400'>Délai de Livraison Garanti</div>
          </div>
          <div className='border-r border-white/10 pr-4 text-center md:text-left'>
            <div className='text-3xl font-extrabold text-amber-400 md:text-4xl'>Dès 690€</div>
            <div className='mt-1 text-xs text-gray-400'>Tarif Accessible PME</div>
          </div>
          <div className='text-center md:text-left'>
            <div className='text-3xl font-extrabold text-emerald-400 md:text-4xl'>&lt;0.2s</div>
            <div className='mt-1 text-xs text-gray-400'>Score Web Vitals Google</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
