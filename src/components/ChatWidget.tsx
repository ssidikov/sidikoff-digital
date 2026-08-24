'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Zap, RotateCcw, Sparkles } from 'lucide-react'

// ── Types ─────────────────────────────────────────────────────────────────────

interface ChatMessage {
  id: number
  role: 'user' | 'model'
  text: string
  timestamp: string
}

// ── Quick suggestion chips ─────────────────────────────────────────────────────

const SUGGESTIONS = [
  'Quels sont vos tarifs ?',
  'Délais de réalisation ?',
  'Audit SEO gratuit',
  'Refonte WordPress → Next.js',
  'Je veux un devis',
]

// ── Component ─────────────────────────────────────────────────────────────────

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const msgId = useRef(1)

  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const getTime = () =>
    new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })

  const nextId = useCallback(() => {
    return msgId.current++
  }, [])

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, isLoading])

  // Focus input on open
  useEffect(() => {
    if (isOpen && messages.length > 0) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen, messages.length])

  const handleOpen = () => {
    setIsOpen(true)
    if (messages.length === 0) {
      setMessages([
        {
          id: 0,
          role: 'model',
          text: "Bonjour ! 👋 Je suis l'assistant de **Sidikoff Digital**. Je peux vous aider à choisir la bonne prestation, vous donner les tarifs, ou préparer votre demande de devis. Que puis-je faire pour vous ?",
          timestamp: getTime(),
        },
      ])
    }
  }

  const handleReset = () => {
    setMessages([
      {
        id: 0,
        role: 'model',
        text: "Bonjour ! 👋 Comment puis-je vous aider aujourd'hui ?",
        timestamp: getTime(),
      },
    ])
    setInput('')
    setShowSuggestions(true)
    msgId.current = 1
  }

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || isLoading) return

      setShowSuggestions(false)
      setInput('')

      const userMsg: ChatMessage = {
        id: nextId(),
        role: 'user',
        text: trimmed,
        timestamp: getTime(),
      }
      setMessages((prev) => [...prev, userMsg])
      setIsLoading(true)

      // Build history for Gemini (exclude the initial greeting for cleaner context)
      const history = [...messages, userMsg]
        .filter((m) => !(m.id === 0 && m.role === 'model')) // skip initial bot greeting
        .map((m) => ({
          role: m.role,
          parts: [{ text: m.text }],
        }))

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: history }),
        })

        const data = await res.json()

        if (!res.ok || data.error) {
          throw new Error(data.error ?? 'Erreur réseau')
        }

        setMessages((prev) => [
          ...prev,
          {
            id: nextId(),
            role: 'model',
            text: data.reply,
            timestamp: getTime(),
          },
        ])
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: nextId(),
            role: 'model',
            text: "❌ Désolé, une erreur s'est produite. Veuillez réessayer ou nous contacter directement à s.sidikoff@gmail.com",
            timestamp: getTime(),
          },
        ])
      } finally {
        setIsLoading(false)
        setTimeout(() => inputRef.current?.focus(), 50)
      }
    },
    [isLoading, messages, nextId],
  )

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  // Render simple markdown (bold + line breaks)
  const renderText = (text: string) => {
    return text.split('\n').map((line, i) => {
      const parts = line.split(/\*\*(.*?)\*\*/g)
      return (
        <span key={i}>
          {parts.map((part, j) => (j % 2 === 1 ? <strong key={j}>{part}</strong> : part))}
          {i < text.split('\n').length - 1 && <br />}
        </span>
      )
    })
  }

  return (
    <>
      {/* ── Floating Launcher Button ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 380, damping: 24 }}
            className='fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6'>
            <div className='absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-300/50 via-blue-400/40 to-sky-300/50 opacity-80 blur-xl transition duration-700 animate-pulse' />

            <button
              onClick={handleOpen}
              className='group relative flex h-16 w-16 items-center justify-center rounded-full bg-white/80 backdrop-blur-2xl backdrop-saturate-200 border border-white text-cyan-600 shadow-[inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-1.5px_2px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:bg-white hover:text-cyan-700 hover:shadow-[inset_0_1.5px_2px_rgba(255,255,255,1),0_16px_40px_rgba(0,180,216,0.25)] active:scale-95'
              aria-label="Ouvrir l'assistant Sidikoff">
              <div className='pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/70 via-white/20 to-transparent' />
              <MessageSquare className='relative z-10 h-6 w-6 transition-transform duration-300 group-hover:scale-110' />
              <span className='absolute top-1 right-1 flex h-4 w-4'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
                <span className='relative inline-flex h-4 w-4 rounded-full bg-emerald-500 border-2 border-white shadow-[0_0_8px_rgba(16,185,129,0.6)]' />
              </span>
              <span className='pointer-events-none absolute right-full mr-3.5 hidden whitespace-nowrap rounded-full border border-white/80 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-800 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_10px_25px_rgba(0,0,0,0.08)] backdrop-blur-xl backdrop-saturate-180 transition-all group-hover:block'>
                💬 Assistant IA
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Chat Panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 35, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 360, damping: 26 }}
            className='fixed right-3 bottom-3 left-3 z-50 flex max-h-[min(650px,calc(100vh-1.5rem))] flex-col overflow-hidden rounded-[28px] border border-white/80 bg-white/75 backdrop-blur-3xl backdrop-saturate-200 shadow-[inset_0_1.5px_2.5px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(0,0,0,0.05),0_25px_60px_rgba(0,0,0,0.15)] sm:left-auto sm:right-6 sm:bottom-6 sm:w-[420px]'>
            {/* Gloss layers */}
            <div className='pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/60 via-cyan-100/20 to-transparent' />
            <div className='pointer-events-none absolute -top-16 left-1/2 h-44 w-80 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl' />

            {/* ── Header ── */}
            <div className='relative z-10 flex items-center justify-between border-b border-slate-200/60 bg-white/50 px-4 py-3.5 backdrop-blur-2xl'>
              <div className='flex items-center gap-3'>
                <div className='relative flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/50 bg-gradient-to-br from-cyan-400/20 to-blue-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_16px_rgba(0,180,216,0.15)] backdrop-blur-md'>
                  <Sparkles className='h-5 w-5 text-cyan-600' />
                  <span className='absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white shadow-[0_0_6px_rgba(16,185,129,0.8)]' />
                </div>
                <div>
                  <div className='flex items-center gap-2'>
                    <h3 className='text-sm font-bold tracking-tight text-slate-900'>
                      Assistant Sidikoff AI
                    </h3>
                    <span className='rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-700'>
                      En ligne
                    </span>
                  </div>
                </div>
              </div>

              <div className='flex items-center gap-1.5'>
                <button
                  onClick={handleReset}
                  className='flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 bg-slate-100/70 text-slate-600 shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.9)] backdrop-blur-xl transition-all hover:border-slate-300 hover:bg-white hover:text-slate-900 active:scale-95'
                  title='Réinitialiser'
                  aria-label='Réinitialiser la conversation'>
                  <RotateCcw className='h-3.5 w-3.5' />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className='flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 bg-slate-100/70 text-slate-600 shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.9)] backdrop-blur-xl transition-all hover:border-slate-300 hover:bg-white hover:text-slate-900 active:scale-95'
                  aria-label='Fermer'>
                  <X className='h-4 w-4' />
                </button>
              </div>
            </div>

            {/* ── Messages ── */}
            <div
              ref={scrollRef}
              className='relative z-10 flex-1 space-y-3.5 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-slate-300/60'>
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    layout
                    initial={{ opacity: 0, y: 12, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                    className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className='flex items-end gap-2 max-w-[88%]'>
                      {msg.role === 'model' && (
                        <div className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700 text-[9px] font-bold shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]'>
                          AI
                        </div>
                      )}
                      <div
                        className={`rounded-3xl px-4 py-2.5 text-sm leading-relaxed ${
                          msg.role === 'user'
                            ? 'rounded-tr-sm bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-700 font-medium text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_6px_20px_rgba(0,180,216,0.3)]'
                            : 'rounded-tl-sm border border-slate-200/80 bg-slate-100/90 text-slate-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.04)]'
                        }`}>
                        {renderText(msg.text)}
                      </div>
                    </div>
                    <span className='mt-1 px-2 text-[10px] font-medium text-slate-400'>
                      {msg.timestamp}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex items-end gap-2'>
                  <div className='flex h-6 w-6 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-[9px] font-bold text-cyan-700'>
                    AI
                  </div>
                  <div className='flex items-center gap-1.5 rounded-3xl rounded-tl-sm border border-slate-200/80 bg-slate-100/90 px-4 py-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]'>
                    <span className='h-2 w-2 animate-bounce rounded-full bg-cyan-500 [animation-delay:0ms]' />
                    <span className='h-2 w-2 animate-bounce rounded-full bg-cyan-500 [animation-delay:150ms]' />
                    <span className='h-2 w-2 animate-bounce rounded-full bg-cyan-500 [animation-delay:300ms]' />
                  </div>
                </motion.div>
              )}

              {/* Quick suggestions (shown initially) */}
              {showSuggestions && !isLoading && messages.length <= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className='flex flex-wrap gap-2 pt-1'>
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className='rounded-full border border-cyan-200/80 bg-cyan-50/80 px-3 py-1.5 text-[11px] font-semibold text-cyan-700 shadow-[inset_0_0.5px_0.5px_rgba(255,255,255,0.9)] backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-white hover:text-cyan-900 active:scale-95'>
                      {s}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* ── Input Footer ── */}
            <div className='relative z-10 border-t border-slate-200/60 bg-white/60 p-3.5 backdrop-blur-2xl'>
              {/* Devis CTA (shown after first exchange) */}
              {messages.length >= 3 && !isLoading && (
                <motion.a
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  href='/contact'
                  className='mb-3 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 py-2.5 text-xs font-bold text-white border border-cyan-300/40 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.5),0_6px_20px_rgba(0,180,216,0.3)] transition-all hover:scale-[1.01] active:scale-[0.99]'>
                  <Zap className='h-3.5 w-3.5' />
                  Demander un devis gratuit →
                </motion.a>
              )}

              <div className='flex items-end gap-2'>
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value)
                    // Auto-resize
                    e.target.style.height = 'auto'
                    e.target.style.height = Math.min(e.target.scrollHeight, 96) + 'px'
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder='Posez votre question…'
                  disabled={isLoading}
                  className='flex-1 resize-none overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100/70 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none backdrop-blur-xl shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] transition-all focus:bg-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 disabled:opacity-50'
                  style={{ minHeight: '40px', maxHeight: '96px' }}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || isLoading}
                  className='flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_14px_rgba(0,180,216,0.35)] transition-all hover:scale-105 active:scale-95 disabled:opacity-40 disabled:pointer-events-none'
                  aria-label='Envoyer'>
                  <Send className='h-4 w-4' />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
