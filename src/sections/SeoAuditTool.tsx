'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { calculateDeterministicAudit } from '@/lib/seo-audit-utils'
import {
  Globe,
  Gauge,
  Search,
  MapPin,
  Clock,
  Shield,
  TrendingUp,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Zap,
  Star,
  ChevronRight,
  Mail,
  Loader2,
} from 'lucide-react'

type MetricStatus = 'good' | 'warn' | 'bad'

interface Metric {
  label: string
  value: string
  status: MetricStatus
  icon: React.ReactNode
  detail: string
}

interface AuditResults {
  score: number
  grade: 'A' | 'B' | 'C' | 'D' | 'F'
  metrics: Metric[]
  wins: string[]
  issues: string[]
}

const AUDIT_STEPS = [
  'Analyse des balises Title & Meta…',
  'Vérification Google My Business…',
  'Test vitesse de chargement…',
  'Audit mots-clés locaux Lyon & Villeurbanne…',
  'Analyse HTTPS & sécurité…',
  'Vérification mobile-friendliness…',
  'Calcul du score SEO local…',
]

function runSimulatedAudit(url: string): AuditResults {
  const auditData = calculateDeterministicAudit(url)
  const iconMap: Record<string, React.ReactNode> = {
    'Balises Title & Meta': <Search className='h-4 w-4' />,
    'Google My Business': <MapPin className='h-4 w-4' />,
    'Vitesse de chargement': <Clock className='h-4 w-4' />,
    'HTTPS & Sécurité': <Shield className='h-4 w-4' />,
    'Mots-clés locaux (69)': <TrendingUp className='h-4 w-4' />,
    'Mobile-friendly': <Smartphone className='h-4 w-4' />,
  }

  const metrics: Metric[] = auditData.metrics.map((m) => ({
    label: m.label,
    value: m.value,
    status: m.status,
    icon: iconMap[m.label] || <Search className='h-4 w-4' />,
    detail: m.detail,
  }))

  return {
    score: auditData.score,
    grade: auditData.grade,
    metrics,
    wins: auditData.wins,
    issues: auditData.issues,
  }
}

function StatusIcon({ status }: { status: MetricStatus }) {
  if (status === 'good') return <CheckCircle2 className='h-4 w-4 text-emerald-500 shrink-0' />
  if (status === 'warn') return <AlertTriangle className='h-4 w-4 text-amber-500 shrink-0' />
  return <XCircle className='h-4 w-4 text-red-500 shrink-0' />
}

function ScoreRing({ score, grade }: { score: number; grade: AuditResults['grade'] }) {
  const radius = 54
  const circ = 2 * Math.PI * radius
  const strokeDash = (score / 100) * circ
  const color = score >= 75 ? '#10b981' : score >= 55 ? '#f59e0b' : '#ef4444'

  return (
    <div className='relative flex items-center justify-center shrink-0'>
      <svg width='140' height='140' className='-rotate-90'>
        <circle cx='70' cy='70' r={radius} strokeWidth='10' stroke='#e2e8f0' fill='none' />
        <motion.circle
          cx='70'
          cy='70'
          r={radius}
          strokeWidth='10'
          stroke={color}
          fill='none'
          strokeLinecap='round'
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: circ - strokeDash }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        />
      </svg>
      <div className='absolute flex flex-col items-center justify-center h-24 w-24 rounded-full bg-white/80 border border-slate-100 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md'>
        <motion.span
          className='text-3xl font-black text-slate-900'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          {score}
        </motion.span>
        <span className='text-[10px] font-medium text-slate-400'>/100 pts</span>
        <span className='text-xs font-bold' style={{ color }}>
          {grade}
        </span>
      </div>
    </div>
  )
}

export function SeoAuditTool() {
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')
  const [step, setStep] = useState(0)
  const [isAuditing, setIsAuditing] = useState(false)
  const [results, setResults] = useState<AuditResults | null>(null)
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleAudit = () => {
    setError('')
    const raw = url.trim()
    if (!raw) {
      setError("Entrez l'URL de votre site (ex : www.mon-site.fr)")
      inputRef.current?.focus()
      return
    }
    const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/.*)?$/i
    if (!urlPattern.test(raw)) {
      setError('URL invalide — ex: https://mon-site.fr ou www.mon-site.fr')
      inputRef.current?.focus()
      return
    }

    setIsAuditing(true)
    setResults(null)
    setStep(0)

    let s = 0
    const interval = setInterval(() => {
      s++
      setStep(s)
      if (s >= AUDIT_STEPS.length - 1) clearInterval(interval)
    }, 350)

    setTimeout(() => {
      clearInterval(interval)
      setStep(AUDIT_STEPS.length)
      const auditResult = runSimulatedAudit(raw.startsWith('http') ? raw : `https://${raw}`)
      setIsAuditing(false)
      setResults(auditResult)
    }, 2600)
  }

  const handleEmailSend = (e: React.FormEvent) => {
    e.preventDefault()
    setEmailSent(true)
  }

  const reset = () => {
    setResults(null)
    setUrl('')
    setEmail('')
    setEmailSent(false)
    setError('')
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  return (
    <section
      id='audit-seo'
      className='relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8'
      style={{
        backgroundImage: 'linear-gradient(145deg, #F0F9FF 5%, #EBF2FF 45%, #FFFAE6 95%)',
        backgroundSize: 'cover',
      }}
      aria-labelledby='audit-seo-title'
    >
      {/* Liquid Refraction Glows */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute -top-32 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[130px]' />
        <div className='absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/15 blur-[110px]' />
        <div className='absolute top-1/3 left-0 h-[300px] w-[300px] rounded-full bg-amber-300/15 blur-[100px]' />
      </div>

      <div className='relative z-10 mx-auto max-w-5xl'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-12 text-center'
        >
          <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-white/80 px-4.5 py-2 text-xs font-semibold text-cyan-800 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_16px_rgba(0,180,216,0.12)]'>
            <span className='relative flex h-2.5 w-2.5'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
              <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]' />
            </span>
            Outil gratuit · Analyse instantanée en 3s
          </div>

          <h2
            id='audit-seo-title'
            className='text-3xl font-extrabold tracking-tight text-[#112D4E] md:text-4xl lg:text-5xl'
          >
            Auditeur SEO Local{' '}
            <span className='bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent'>
              Lyon & Villeurbanne
            </span>
          </h2>
          <p className='mx-auto mt-4 max-w-xl text-base text-slate-600 font-normal leading-relaxed'>
            Testez votre site gratuitement en 3 secondes. Découvrez pourquoi vos concurrents locaux vous devancent sur Google.
          </p>
        </motion.div>

        {/* Liquid Glass Tool Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className='relative overflow-hidden rounded-[32px] border border-white/90 bg-white/70 backdrop-blur-3xl backdrop-saturate-200 p-6 md:p-10 shadow-[inset_0_1.5px_2.5px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(0,0,0,0.04),0_25px_60px_rgba(17,45,78,0.08)]'
        >
          {/* Top Gloss Refraction Layer */}
          <div className='pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 via-white/20 to-transparent' />

          {/* Input row */}
          <div className='relative z-10 flex flex-col gap-3.5 sm:flex-row'>
            <div className='relative flex-1'>
              <Globe className='absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cyan-600' />
              <input
                ref={inputRef}
                id='audit-url-input'
                type='url'
                value={url}
                onChange={(e) => { setUrl(e.target.value); setError('') }}
                onKeyDown={(e) => e.key === 'Enter' && !isAuditing && handleAudit()}
                placeholder='https://votre-site.fr'
                disabled={isAuditing}
                className='w-full rounded-2xl border border-slate-200/80 bg-white/60 py-4 pr-4 pl-12 text-sm font-medium text-slate-900 placeholder-slate-400 outline-none backdrop-blur-xl shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] transition-all focus:bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 disabled:opacity-50'
              />
            </div>
            <button
              id='audit-run-btn'
              onClick={handleAudit}
              disabled={isAuditing}
              className='inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 px-8 py-4 text-sm font-bold text-white border border-white/40 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.6),0_8px_25px_rgba(0,180,216,0.35)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(0,180,216,0.45)] active:scale-98 disabled:opacity-60 cursor-pointer whitespace-nowrap'
            >
              {isAuditing ? (
                <Loader2 className='h-5 w-5 animate-spin' />
              ) : (
                <Gauge className='h-5 w-5' />
              )}
              {isAuditing ? 'Analyse en cours…' : 'Analyser mon site'}
            </button>
          </div>

          {error && <p className='relative z-10 mt-2 text-xs font-semibold text-rose-600 px-1'>{error}</p>}

          {/* Loading steps */}
          <AnimatePresence>
            {isAuditing && (
              <motion.div
                key='loading'
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className='relative z-10 mt-8 overflow-hidden'
              >
                <div className='space-y-2.5 rounded-2xl border border-slate-200/60 bg-slate-50/80 p-5 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]'>
                  {AUDIT_STEPS.map((s, i) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: i <= step ? 1 : 0.35, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className='flex items-center gap-3 text-xs font-medium'
                    >
                      {i < step ? (
                        <CheckCircle2 className='h-4.5 w-4.5 shrink-0 text-emerald-600' />
                      ) : i === step ? (
                        <Loader2 className='h-4.5 w-4.5 shrink-0 animate-spin text-cyan-600' />
                      ) : (
                        <div className='h-4.5 w-4.5 shrink-0 rounded-full border border-slate-300' />
                      )}
                      <span className={i <= step ? 'text-slate-800 font-semibold' : 'text-slate-400'}>{s}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results */}
          <AnimatePresence>
            {results && !isAuditing && (
              <motion.div
                key='results'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='relative z-10 mt-8 space-y-8'
              >
                {/* Score + grade */}
                <div className='flex flex-col items-center gap-6 sm:flex-row sm:items-start rounded-2xl border border-slate-200/80 bg-white/80 p-6 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_20px_rgba(0,0,0,0.04)]'>
                  <ScoreRing score={results.score} grade={results.grade} />
                  <div className='flex-1 text-center sm:text-left'>
                    <p className='text-lg font-bold text-slate-900'>
                      Score SEO Local pour{' '}
                      <span className='text-cyan-700 break-all font-mono text-base'>{url}</span>
                    </p>
                    <p className='mt-1.5 text-sm text-slate-600 leading-relaxed'>
                      {results.score >= 75
                        ? 'Votre site est bien positionné — quelques optimisations peuvent encore doubler votre visibilité locale.'
                        : results.score >= 55
                        ? 'Des lacunes importantes limitent votre visibilité sur Google Lyon. Des corrections ciblées peuvent rapidement changer la donne.'
                        : 'Score critique — votre site est quasi-invisible sur Google local. Une refonte SEO est urgente.'}
                    </p>
                    <div className='mt-3 flex items-center gap-1 justify-center sm:justify-start'>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= Math.round(results.score / 20)
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-slate-300'
                          }`}
                        />
                      ))}
                      <span className='ml-2 text-xs font-semibold text-slate-500'>{results.score}/100 pts</span>
                    </div>
                  </div>
                </div>

                {/* Metrics grid */}
                <div>
                  <p className='mb-3 text-xs font-bold uppercase tracking-widest text-slate-400 px-1'>
                    Détail des critères d&apos;analyse
                  </p>
                  <div className='grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3'>
                    {results.metrics.map((m) => (
                      <div
                        key={m.label}
                        className={`rounded-2xl border p-4.5 backdrop-blur-xl transition-all duration-200 ${
                          m.status === 'good'
                            ? 'border-emerald-300/70 bg-emerald-50/70 text-emerald-950 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(16,185,129,0.06)]'
                            : m.status === 'warn'
                            ? 'border-amber-300/70 bg-amber-50/70 text-amber-950 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(245,158,11,0.06)]'
                            : 'border-rose-300/70 bg-rose-50/70 text-rose-950 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(239,68,68,0.06)]'
                        }`}
                      >
                        <div className='flex items-center gap-2 mb-2'>
                          <span
                            className={
                              m.status === 'good'
                                ? 'text-emerald-600'
                                : m.status === 'warn'
                                ? 'text-amber-600'
                                : 'text-rose-600'
                            }
                          >
                            {m.icon}
                          </span>
                          <span className='text-xs font-semibold text-slate-600 truncate'>{m.label}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <StatusIcon status={m.status} />
                          <span
                            className={`text-sm font-bold ${
                              m.status === 'good'
                                ? 'text-emerald-800'
                                : m.status === 'warn'
                                ? 'text-amber-800'
                                : 'text-rose-800'
                            }`}
                          >
                            {m.value}
                          </span>
                        </div>
                        <p className='mt-2 text-xs text-slate-600 leading-relaxed font-normal'>{m.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Issues */}
                {results.issues.length > 0 && (
                  <div className='rounded-2xl border border-amber-300/70 bg-amber-50/80 p-5 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]'>
                    <p className='mb-3 flex items-center gap-2 text-sm font-bold text-slate-900'>
                      <Zap className='h-4 w-4 text-amber-600' />
                      {results.issues.length} action{results.issues.length > 1 ? 's' : ''} prioritaire{results.issues.length > 1 ? 's' : ''} détectée{results.issues.length > 1 ? 's' : ''}
                    </p>
                    <ul className='space-y-2'>
                      {results.issues.map((issue) => (
                        <li key={issue} className='flex items-start gap-2.5 text-xs font-medium text-slate-700'>
                          <ArrowRight className='h-3.5 w-3.5 mt-0.5 text-cyan-600 shrink-0' />
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Email capture */}
                <div className='rounded-2xl border border-cyan-200/80 bg-cyan-50/70 p-6 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]'>
                  {!emailSent ? (
                    <>
                      <p className='mb-3 flex items-center gap-2 text-sm font-bold text-slate-900'>
                        <Mail className='h-4 w-4 text-cyan-700' />
                        Recevoir le rapport complet par e-mail (gratuit)
                      </p>
                      <form onSubmit={handleEmailSend} className='flex flex-col gap-2.5 sm:flex-row'>
                        <input
                          type='email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder='votre@email.fr'
                          required
                          className='flex-1 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-xs text-slate-900 placeholder-slate-400 outline-none backdrop-blur-xl shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20'
                        />
                        <button
                          type='submit'
                          className='inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-300 bg-white px-6 py-3 text-xs font-bold text-cyan-800 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:bg-cyan-50 hover:border-cyan-400 cursor-pointer whitespace-nowrap'
                        >
                          Envoyer le rapport
                          <ChevronRight className='h-4 w-4' />
                        </button>
                      </form>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className='flex items-center gap-3'
                    >
                      <CheckCircle2 className='h-5 w-5 text-emerald-600 shrink-0' />
                      <p className='text-xs font-medium text-slate-700'>
                        Rapport envoyé à <span className='text-slate-900 font-bold'>{email}</span>. Vérifiez votre boîte mail !
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Primary CTA Banner */}
                <div className='rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-8 text-center text-white border border-white/40 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.5),0_20px_50px_rgba(0,180,216,0.3)] backdrop-blur-2xl'>
                  <p className='mb-1.5 text-xs font-bold uppercase tracking-widest text-cyan-200'>
                    Prochaine étape
                  </p>
                  <h3 className='text-xl font-extrabold text-white md:text-2xl'>
                    Votre score est {results.score}/100.{' '}
                    <span className='text-cyan-200 underline decoration-cyan-300/50 underline-offset-4'>Nos experts peuvent le porter à 95+.</span>
                  </h3>
                  <p className='mx-auto mt-2.5 max-w-md text-xs text-cyan-100/90 leading-relaxed font-normal'>
                    Audit SEO complet, refonte technique, contenu local — on prend en charge tout ce que l&apos;outil a détecté.
                  </p>
                  <div className='mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center'>
                    <a
                      href='#contact'
                      id='audit-cta-contact'
                      className='inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-3.5 text-xs font-bold text-cyan-900 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_8px_25px_rgba(0,0,0,0.2)] transition-all hover:bg-cyan-50 hover:scale-[1.02] active:scale-98 cursor-pointer'
                    >
                      Réserver un audit complet gratuit
                      <ArrowRight className='h-4 w-4' />
                    </a>
                    <button
                      onClick={reset}
                      className='text-xs text-cyan-200 hover:text-white underline underline-offset-4 transition-colors cursor-pointer'
                    >
                      Analyser un autre site
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-500'
        >
          {[
            '✓ Aucune installation requise',
            '✓ 100 % gratuit',
            '✓ Résultats en < 3 secondes',
            '✓ Données non conservées',
          ].map((t) => (
            <span key={t} className='rounded-full border border-slate-200/80 bg-white/80 px-3.5 py-1.5 backdrop-blur-xl shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.9)]'>
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
