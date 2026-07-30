'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageSquare,
  X,
  Send,
  ArrowLeft,
  Sparkles,
  Zap,
  CheckCircle2,
  Globe,
  ShoppingBag,
  Code2,
  RefreshCw,
  TrendingUp,
  RotateCcw,
  Clock,
  ChevronRight,
  ShieldCheck,
  Search,
} from 'lucide-react'

// ── Types ─────────────────────────────────────────────────────────────────────

type Step = 'welcome' | 'services' | 'budget' | 'description' | 'contact' | 'sending' | 'done'

interface ChatMessage {
  id: number
  from: 'bot' | 'user'
  text: string
  timestamp?: string
}

interface BookingData {
  service: string
  budget: string
  description: string
  name: string
  email: string
  phone?: string
}

interface ServiceOption {
  label: string
  value: string
  desc: string
  icon: React.ComponentType<{ className?: string }>
}

interface BudgetOption {
  label: string
  value: string
  badge: string
}

// ── Constants ─────────────────────────────────────────────────────────────────

const SERVICES: ServiceOption[] = [
  {
    label: 'Site Vitrine Next.js',
    value: 'Site Vitrine Next.js',
    desc: 'Sur-mesure, ultrarapide & SEO optimized',
    icon: Globe,
  },
  {
    label: 'E-Commerce High-Perf',
    value: 'E-Commerce High-Perf',
    desc: 'Boutique performante & conversion boosted',
    icon: ShoppingBag,
  },
  {
    label: 'WebApp / SaaS',
    value: 'WebApp / SaaS',
    desc: 'Application web scalable React / Next.js',
    icon: Code2,
  },
  {
    label: 'Refonte WordPress → Next.js',
    value: 'Refonte WordPress → Next.js',
    desc: 'Gain de vitesse x10 & sécurité maximale',
    icon: RefreshCw,
  },
  {
    label: 'SEO Local Lyon & Visibilité',
    value: 'SEO Local Lyon & Visibilité',
    desc: 'Positionnement 1ère page Google & Top Google Maps',
    icon: TrendingUp,
  },
  {
    label: 'Autre Projet Sur-Mesure',
    value: 'Autre Projet Sur-Mesure',
    desc: 'Accompagnement tech & design personnalisé',
    icon: Sparkles,
  },
]

const BUDGETS: BudgetOption[] = [
  { label: '< 1 000 €', value: '< 1000€', badge: 'Starter' },
  { label: '1 000 – 3 000 €', value: '1000–3000€', badge: 'Populaire' },
  { label: '3 000 – 5 000 €', value: '3000–5000€', badge: 'Business' },
  { label: '5 000 € +', value: '5000€+', badge: 'Enterprise' },
]

const FAQ_ITEMS = [
  {
    question: 'Quels sont vos délais de réalisation ?',
    answer:
      'En général, un site vitrine ultra-performant est livré en 7 à 14 jours. Un projet e-commerce ou SaaS prend 3 à 6 semaines.',
    icon: Clock,
  },
  {
    question: 'Quelles technologies utilisez-vous ?',
    answer:
      'Stack moderne : Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion et infrastructure Vercel Edge.',
    icon: Code2,
  },
  {
    question: 'Où êtes-vous situés ?',
    answer:
      'Basés à Villeurbanne / Lyon (69). Nous accompagnons des clients dans toute la région lyonnaise et partout en France à distance.',
    icon: ShieldCheck,
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<Step>('welcome')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [booking, setBooking] = useState<Partial<BookingData>>({})

  // Form states for multi-input contact
  const [descriptionInput, setDescriptionInput] = useState('')
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [contactError, setContactError] = useState('')

  const [activeFaq, setActiveFaq] = useState<string | null>(null)
  const [msgId, setMsgId] = useState(0)

  const scrollRef = useRef<HTMLDivElement>(null)
  const descInputRef = useRef<HTMLTextAreaElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
  }

  const nextId = useCallback(() => {
    setMsgId((prev) => prev + 1)
    return msgId + 1
  }, [msgId])

  const addBot = useCallback(
    (text: string) => {
      const id = nextId()
      setMessages((prev) => [...prev, { id, from: 'bot', text, timestamp: getCurrentTime() }])
    },
    [nextId],
  )

  const addUser = useCallback(
    (text: string) => {
      const id = nextId()
      setMessages((prev) => [...prev, { id, from: 'user', text, timestamp: getCurrentTime() }])
    },
    [nextId],
  )

  // Auto-scroll on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [messages, step, activeFaq])

  // Focus management
  useEffect(() => {
    if (step === 'description' && descInputRef.current) {
      descInputRef.current.focus()
    } else if (step === 'contact' && nameInputRef.current) {
      nameInputRef.current.focus()
    }
  }, [step])

  // Init welcome message on first open
  const handleOpen = () => {
    setIsOpen(true)
    if (messages.length === 0) {
      setStep('welcome')
      setMessages([
        {
          id: 0,
          from: 'bot',
          text: 'Bonjour ! 👋 Bienvenue chez Sidikoff Digital. Comment puis-je vous accompagner dans votre projet web ou SEO ?',
          timestamp: getCurrentTime(),
        },
      ])
    }
  }

  const handleReset = () => {
    setStep('welcome')
    setBooking({})
    setDescriptionInput('')
    setContactName('')
    setContactEmail('')
    setContactPhone('')
    setContactError('')
    setActiveFaq(null)
    setMsgId(0)
    setMessages([
      {
        id: 0,
        from: 'bot',
        text: 'Bonjour ! 👋 Comment puis-je vous aider aujourd’hui ?',
        timestamp: getCurrentTime(),
      },
    ])
  }

  // ── Flow Step Handlers ───────────────────────────────────────────────────────

  const startBooking = () => {
    addUser('Je souhaite demander un devis gratuit')
    setTimeout(() => {
      addBot('Excellent choix ! Quel type de projet souhaitez-vous concrétiser ?')
      setStep('services')
    }, 350)
  }

  const startAuditRequest = () => {
    addUser('Je veux un audit SEO gratuit pour mon site à Lyon')
    setBooking((prev) => ({ ...prev, service: 'Audit SEO Local Lyon' }))
    setTimeout(() => {
      addBot('Parfait ! Quel est votre budget estimé pour booster votre visibilité ?')
      setStep('budget')
    }, 350)
  }

  const selectService = (service: string) => {
    addUser(service)
    setBooking((prev) => ({ ...prev, service }))
    setTimeout(() => {
      addBot('Super ! Quel est l’investissement budgétaire envisagé ?')
      setStep('budget')
    }, 350)
  }

  const selectBudget = (budget: string) => {
    addUser(budget)
    setBooking((prev) => ({ ...prev, budget }))
    setTimeout(() => {
      addBot('Merci ! Pouvez-vous décrire brièvement votre projet ou vos objectifs principaux ?')
      setStep('description')
    }, 350)
  }

  const submitDescription = () => {
    const desc = descriptionInput.trim()
    if (!desc) return
    addUser(desc)
    setBooking((prev) => ({ ...prev, description: desc }))
    setDescriptionInput('')
    setTimeout(() => {
      addBot('Dernière étape ! Indiquez vos coordonnées pour recevoir votre devis et étude personnalisée :')
      setStep('contact')
    }, 350)
  }

  const submitContact = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    setContactError('')

    const name = contactName.trim()
    const email = contactEmail.trim()
    const phone = contactPhone.trim()

    if (!name) {
      setContactError('Veuillez renseigner votre nom.')
      return
    }
    if (!email || !email.includes('@') || !email.includes('.')) {
      setContactError('Veuillez entrer une adresse email valide.')
      return
    }

    addUser(`${name} (${email}${phone ? ` • ${phone}` : ''})`)
    setStep('sending')

    const fullBooking = { ...booking, name, email, phone }
    const messageText = `
[DEMANDE CHATBOT 360°]
- Service sélectionné : ${fullBooking.service || 'Non spécifié'}
- Budget estimé : ${fullBooking.budget || 'Non spécifié'}
- Description du projet : ${fullBooking.description || 'Non spécifiée'}
- Téléphone : ${fullBooking.phone || 'Non renseigné'}
    `.trim()

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullBooking.name,
          email: fullBooking.email,
          message: messageText,
        }),
      })

      if (res.ok) {
        setTimeout(() => {
          addBot(
            '🎉 Merci beaucoup ! Votre demande a été transmise directement à notre équipe tech. Nous revenons vers vous sous 24 heures avec votre proposition sur-mesure.',
          )
          setStep('done')
        }, 500)
      } else {
        addBot('❌ Une erreur est survenue lors de l’envoi. Veuillez réessayer ou utiliser notre formulaire de contact.')
        setStep('welcome')
      }
    } catch {
      addBot('❌ Erreur de réseau. Merci de vérifier votre connexion.')
      setStep('welcome')
    }
  }

  const toggleFaq = (question: string, answer: string) => {
    if (activeFaq === question) {
      setActiveFaq(null)
    } else {
      setActiveFaq(question)
      addUser(question)
      setTimeout(() => {
        addBot(answer)
      }, 300)
    }
  }

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── Floating Liquid Glass Launcher Button (Light Theme) ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 380, damping: 24 }}
            className='fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6'
          >
            {/* Soft Ambient Cyan Glow */}
            <div className='absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-300/50 via-blue-400/40 to-sky-300/50 opacity-80 blur-xl transition duration-700 animate-pulse' />

            <button
              onClick={handleOpen}
              className='group relative flex h-16 w-16 items-center justify-center rounded-full bg-white/80 backdrop-blur-2xl backdrop-saturate-200 border border-white text-cyan-600 shadow-[inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-1.5px_2px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:bg-white hover:text-cyan-700 hover:shadow-[inset_0_1.5px_2px_rgba(255,255,255,1),0_16px_40px_rgba(0,180,216,0.25)] active:scale-95'
              aria-label='Ouvrir l’assistant Sidikoff'
            >
              {/* Glossy Refraction Highlight */}
              <div className='pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/70 via-white/20 to-transparent' />

              <MessageSquare className='relative z-10 h-6 w-6 transition-transform duration-300 group-hover:scale-110' />

              {/* Status Dot */}
              <span className='absolute top-1 right-1 flex h-4 w-4'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
                <span className='relative inline-flex h-4 w-4 rounded-full bg-emerald-500 border-2 border-white shadow-[0_0_8px_rgba(16,185,129,0.6)]' />
              </span>

              {/* Hover Liquid Glass Tooltip */}
              <span className='pointer-events-none absolute right-full mr-3.5 hidden whitespace-nowrap rounded-full border border-white/80 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-800 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_10px_25px_rgba(0,0,0,0.08)] backdrop-blur-xl backdrop-saturate-180 transition-all group-hover:block'>
                💬 Devis sur-mesure en 30s
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Liquid Glass Light Chat Modal Panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 35, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 360, damping: 26 }}
            className='fixed right-3 bottom-3 left-3 z-50 flex max-h-[min(650px,calc(100vh-1.5rem))] flex-col overflow-hidden rounded-[28px] border border-white/80 bg-white/75 backdrop-blur-3xl backdrop-saturate-200 shadow-[inset_0_1.5px_2.5px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(0,0,0,0.05),0_25px_60px_rgba(0,0,0,0.15)] sm:left-auto sm:right-6 sm:bottom-6 sm:w-[420px]'
          >
            {/* Top Gloss Refraction Layer */}
            <div className='pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/60 via-cyan-100/20 to-transparent' />
            <div className='pointer-events-none absolute -top-16 left-1/2 h-44 w-80 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl' />

            {/* ── Liquid Glass Header (Light) ── */}
            <div className='relative z-10 flex items-center justify-between border-b border-slate-200/60 bg-white/50 px-4.5 py-4 backdrop-blur-2xl'>
              <div className='flex items-center gap-3'>
                {/* Agent Liquid Glass Icon Badge */}
                <div className='relative flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/50 bg-gradient-to-br from-cyan-400/20 to-blue-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_16px_rgba(0,180,216,0.15)] backdrop-blur-md'>
                  <Zap className='h-5 w-5 text-cyan-600' />
                  <span className='absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white shadow-[0_0_6px_rgba(16,185,129,0.8)]' />
                </div>

                <div>
                  <div className='flex items-center gap-2'>
                    <h3 className='font-grotesk text-sm font-bold tracking-tight text-slate-900'>
                      Sidikoff Assistant AI
                    </h3>
                    <span className='rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 backdrop-blur-md shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.8)]'>
                      En ligne
                    </span>
                  </div>
                  <p className='text-[11px] text-slate-500'>Devis express & conseil sur-mesure</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className='flex items-center gap-1.5'>
                {step !== 'welcome' && step !== 'done' && (
                  <button
                    onClick={handleReset}
                    className='flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 bg-slate-100/70 text-slate-600 shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.9)] backdrop-blur-xl transition-all hover:border-slate-300 hover:bg-white hover:text-slate-900 active:scale-95'
                    title='Recommencer'
                    aria-label='Recommencer la conversation'
                  >
                    <RotateCcw className='h-3.5 w-3.5' />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className='flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 bg-slate-100/70 text-slate-600 shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.9)] backdrop-blur-xl transition-all hover:border-slate-300 hover:bg-white hover:text-slate-900 active:scale-95'
                  aria-label='Fermer le chat'
                >
                  <X className='h-4 w-4' />
                </button>
              </div>
            </div>

            {/* ── Chat Messages Body ── */}
            <div
              ref={scrollRef}
              className='relative z-10 flex-1 space-y-3.5 overflow-y-auto p-4 text-xs scrollbar-thin scrollbar-thumb-slate-300/60'
            >
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    layout
                    initial={{ opacity: 0, y: 12, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                    className={`flex flex-col ${msg.from === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div className='flex items-end gap-2 max-w-[88%]'>
                      {msg.from === 'bot' && (
                        <div className='flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700 text-[10px] font-bold shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-lg'>
                          AI
                        </div>
                      )}
                      <div
                        className={`rounded-3xl px-4.5 py-3 text-sm leading-relaxed ${
                          msg.from === 'user'
                            ? 'rounded-tr-xs bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-700 border border-cyan-400/30 font-medium text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_6px_20px_rgba(0,180,216,0.3)] backdrop-blur-xl'
                            : 'rounded-tl-xs border border-slate-200/80 bg-slate-100/90 text-slate-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-2xl'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                    {msg.timestamp && (
                      <span className='mt-1 px-2 text-[10px] font-medium text-slate-400'>{msg.timestamp}</span>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Liquid Thinking Indicator */}
              {step === 'sending' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className='flex items-center gap-2 text-cyan-600'
                >
                  <div className='flex h-6.5 w-6.5 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-[10px] font-bold shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-lg'>
                    AI
                  </div>
                  <div className='flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-100/90 px-4 py-2.5 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]'>
                    <span className='h-2 w-2 animate-bounce rounded-full bg-cyan-600 [animation-delay:0ms]' />
                    <span className='h-2 w-2 animate-bounce rounded-full bg-cyan-600 [animation-delay:150ms]' />
                    <span className='h-2 w-2 animate-bounce rounded-full bg-cyan-600 [animation-delay:300ms]' />
                  </div>
                </motion.div>
              )}
            </div>

            {/* ── Liquid Glass Footer Container (Light) ── */}
            <div className='relative z-10 border-t border-slate-200/60 bg-white/60 p-4 backdrop-blur-2xl'>
              {/* ── Step 1: Welcome Quick Options ── */}
              {step === 'welcome' && (
                <motion.div layout className='space-y-3'>
                  <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
                    <button
                      onClick={startBooking}
                      className='group relative flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 px-4 py-3 text-xs font-bold text-white border border-cyan-300/40 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.5),0_8px_25px_rgba(0,180,216,0.35)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-cyan-200 active:scale-98'
                    >
                      <Zap className='h-4 w-4 text-white transition-transform group-hover:scale-110' />
                      <span>Demander un devis</span>
                    </button>

                    <button
                      onClick={startAuditRequest}
                      className='flex items-center justify-center gap-2 rounded-2xl border border-slate-200/80 bg-slate-100/80 px-4 py-3 text-xs font-semibold text-cyan-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_6px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-50/80 hover:text-cyan-900 active:scale-98'
                    >
                      <Search className='h-4 w-4 text-cyan-600' />
                      <span>Audit SEO Lyon</span>
                    </button>
                  </div>

                  {/* FAQ Quick Buttons */}
                  <div className='space-y-1.5 pt-1'>
                    <div className='px-1 text-[11px] font-semibold text-slate-500'>
                      Questions fréquentes :
                    </div>
                    {FAQ_ITEMS.map((item) => {
                      const IconComp = item.icon
                      return (
                        <button
                          key={item.question}
                          onClick={() => toggleFaq(item.question, item.answer)}
                          className='flex w-full items-center justify-between rounded-2xl border border-slate-200/70 bg-slate-100/70 px-3.5 py-2.5 text-left text-xs text-slate-800 shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.9)] backdrop-blur-xl transition-all duration-200 hover:border-cyan-400/40 hover:bg-white hover:text-slate-900 active:scale-[0.99]'
                        >
                          <span className='flex items-center gap-2.5'>
                            <IconComp className='h-3.5 w-3.5 text-cyan-600' />
                            <span className='font-medium'>{item.question}</span>
                          </span>
                          <ChevronRight className='h-3.5 w-3.5 text-slate-400' />
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {/* ── Step 2: Service Selection ── */}
              {step === 'services' && (
                <motion.div layout className='space-y-2.5'>
                  <div className='flex items-center justify-between text-xs text-slate-500 px-1'>
                    <span className='font-semibold text-slate-900'>1. Choisissez votre prestation :</span>
                    <button
                      onClick={() => setStep('welcome')}
                      className='flex items-center gap-1 text-[11px] font-semibold text-cyan-600 hover:text-cyan-800 hover:underline'
                    >
                      <ArrowLeft className='h-3 w-3' /> Retour
                    </button>
                  </div>

                  <div className='grid grid-cols-1 gap-2 max-h-60 overflow-y-auto pr-1 scrollbar-thin'>
                    {SERVICES.map((s) => {
                      const IconComponent = s.icon
                      return (
                        <button
                          key={s.value}
                          onClick={() => selectService(s.value)}
                          className='group flex items-center justify-between rounded-2xl border border-slate-200/70 bg-slate-100/70 p-3 text-left text-xs shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.9)] backdrop-blur-xl transition-all duration-200 hover:border-cyan-400/50 hover:bg-white active:scale-[0.99]'
                        >
                          <div className='flex items-center gap-3'>
                            <div className='flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-200 bg-cyan-50 text-cyan-600 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] group-hover:border-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors'>
                              <IconComponent className='h-4.5 w-4.5' />
                            </div>
                            <div>
                              <div className='font-semibold text-slate-900 group-hover:text-cyan-800'>
                                {s.label}
                              </div>
                              <div className='text-[10px] text-slate-500'>{s.desc}</div>
                            </div>
                          </div>
                          <ChevronRight className='h-4 w-4 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-0.5 transition-all' />
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {/* ── Step 3: Budget Selection ── */}
              {step === 'budget' && (
                <motion.div layout className='space-y-2.5'>
                  <div className='flex items-center justify-between text-xs text-slate-500 px-1'>
                    <span className='font-semibold text-slate-900'>2. Budget prévisionnel :</span>
                    <button
                      onClick={() => setStep('services')}
                      className='flex items-center gap-1 text-[11px] font-semibold text-cyan-600 hover:text-cyan-800 hover:underline'
                    >
                      <ArrowLeft className='h-3 w-3' /> Retour
                    </button>
                  </div>

                  <div className='grid grid-cols-2 gap-2.5'>
                    {BUDGETS.map((b) => (
                      <button
                        key={b.value}
                        onClick={() => selectBudget(b.value)}
                        className='group flex flex-col justify-between rounded-2xl border border-slate-200/70 bg-slate-100/70 p-3.5 text-left shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.9)] backdrop-blur-xl transition-all duration-200 hover:border-amber-400/60 hover:bg-amber-50/80 active:scale-[0.98]'
                      >
                        <span className='rounded-full border border-amber-300 bg-amber-100/80 px-2.5 py-0.5 text-[9px] font-bold text-amber-800 backdrop-blur-md self-start mb-1.5 shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.8)]'>
                          {b.badge}
                        </span>
                        <span className='font-bold text-xs text-slate-900 group-hover:text-amber-900'>
                          {b.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── Step 4: Project Description ── */}
              {step === 'description' && (
                <motion.div layout className='space-y-2.5'>
                  <div className='flex items-center justify-between text-xs text-slate-500 px-1'>
                    <span className='font-semibold text-slate-900'>3. Présentez votre projet :</span>
                    <button
                      onClick={() => setStep('budget')}
                      className='flex items-center gap-1 text-[11px] font-semibold text-cyan-600 hover:text-cyan-800 hover:underline'
                    >
                      <ArrowLeft className='h-3 w-3' /> Retour
                    </button>
                  </div>

                  <div className='flex flex-col gap-2.5'>
                    <textarea
                      ref={descInputRef}
                      rows={3}
                      value={descriptionInput}
                      onChange={(e) => setDescriptionInput(e.target.value)}
                      placeholder='Ex: Nous souhaitons créer un nouveau site vitrine rapide pour notre agence avec optimisation SEO locale...'
                      className='w-full resize-none rounded-2xl border border-slate-200/80 bg-slate-100/70 p-3.5 text-xs text-slate-900 placeholder-slate-400 outline-none backdrop-blur-xl shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] transition-all focus:bg-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30'
                    />

                    <button
                      onClick={submitDescription}
                      disabled={!descriptionInput.trim()}
                      className='flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 py-3 text-xs font-bold text-white border border-cyan-300/40 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.5),0_8px_25px_rgba(0,180,216,0.35)] backdrop-blur-xl transition-all duration-200 hover:scale-[1.01] active:scale-98 disabled:opacity-40 disabled:pointer-events-none'
                    >
                      <span>Continuer</span>
                      <Send className='h-3.5 w-3.5' />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ── Step 5: Clean Contact Form ── */}
              {step === 'contact' && (
                <motion.form layout onSubmit={submitContact} className='space-y-2.5'>
                  <div className='flex items-center justify-between text-xs text-slate-500 px-1'>
                    <span className='font-semibold text-slate-900'>4. Vos coordonnées :</span>
                    <button
                      type='button'
                      onClick={() => setStep('description')}
                      className='flex items-center gap-1 text-[11px] font-semibold text-cyan-600 hover:text-cyan-800 hover:underline'
                    >
                      <ArrowLeft className='h-3 w-3' /> Retour
                    </button>
                  </div>

                  {contactError && (
                    <div className='rounded-xl border border-rose-300/60 bg-rose-50/90 px-3 py-2 text-[11px] text-rose-700 backdrop-blur-md'>
                      {contactError}
                    </div>
                  )}

                  <div className='space-y-2'>
                    <input
                      ref={nameInputRef}
                      type='text'
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder='Votre prénom & nom *'
                      required
                      className='w-full rounded-2xl border border-slate-200/80 bg-slate-100/70 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none backdrop-blur-xl shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] transition-all focus:bg-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30'
                    />

                    <input
                      type='email'
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder='Votre adresse email *'
                      required
                      className='w-full rounded-2xl border border-slate-200/80 bg-slate-100/70 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none backdrop-blur-xl shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] transition-all focus:bg-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30'
                    />

                    <input
                      type='tel'
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder='Numéro de téléphone (optionnel)'
                      className='w-full rounded-2xl border border-slate-200/80 bg-slate-100/70 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none backdrop-blur-xl shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] transition-all focus:bg-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30'
                    />
                  </div>

                  <button
                    type='submit'
                    className='flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 py-3 text-xs font-bold text-white border border-cyan-300/40 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.5),0_8px_25px_rgba(0,180,216,0.35)] backdrop-blur-xl transition-all duration-200 hover:scale-[1.01] active:scale-98'
                  >
                    <span>Envoyer la demande</span>
                    <Send className='h-3.5 w-3.5' />
                  </button>
                </motion.form>
              )}

              {/* ── Step 6: Confirmation Done ── */}
              {step === 'done' && (
                <motion.div layout className='space-y-3.5 text-center py-2'>
                  <div className='flex justify-center'>
                    <div className='flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-300/80 bg-emerald-50 text-emerald-600 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_16px_rgba(16,185,129,0.2)] backdrop-blur-xl'>
                      <CheckCircle2 className='h-8 w-8' />
                    </div>
                  </div>

                  <p className='text-xs text-slate-700 leading-relaxed px-2'>
                    Notre équipe étudie votre demande et revient vers vous très rapidement.
                  </p>

                  <button
                    onClick={handleReset}
                    className='w-full rounded-2xl border border-slate-200/80 bg-slate-100/80 py-3 text-xs font-semibold text-slate-800 shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.9)] backdrop-blur-xl transition-all duration-200 hover:border-slate-300 hover:bg-white active:scale-98'
                  >
                    🔄 Démarrer une nouvelle demande
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
