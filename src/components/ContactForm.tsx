'use client'

import React, { useState, useCallback, useEffect } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'

import common from '@/locales/fr/common.json'

interface FormData {
  name: string
  email: string
  message: string
}

type SubmitStatus = 'idle' | 'success' | 'error'

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Status reset timeout in milliseconds
const STATUS_RESET_TIMEOUT = 5000

export function ContactForm() {
  const dictionary = common.contact
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')

  // Reset submit status after timeout
  useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle')
      }, STATUS_RESET_TIMEOUT)
      return () => clearTimeout(timer)
    }

    return undefined
  }, [submitStatus])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
      setSubmitStatus('idle')

      try {
        // Validate form data
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
          throw new Error('Tous les champs sont requis')
        }

        // Email validation
        if (!EMAIL_REGEX.test(formData.email)) {
          throw new Error('Adresse email invalide')
        }

        // Create form data for submission
        const submitData = {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
        }

        // Submit to backend API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...submitData,
            locale: 'fr',
          }),
        })

        const result = await response.json()

        if (!response.ok) {
          throw new Error(result.error || "Erreur lors de l'envoi du message")
        }

        // Mark as successful and reset form
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } catch (error) {
        console.error('Form submission error:', error)
        setSubmitStatus('error')
      } finally {
        setIsSubmitting(false)
      }
    },
    [formData]
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
    },
    []
  )

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div>
        <input
          id='name'
          name='name'
          type='text'
          required
          value={formData.name || ''}
          onChange={handleChange}
          className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-gray-400 focus:bg-white focus:outline-none transition-all duration-200 text-gray-900 placeholder-gray-500'
          placeholder={dictionary?.form?.name?.placeholder || 'Entrez votre nom complet'}
        />
      </div>

      <div>
        <input
          id='email'
          name='email'
          type='email'
          required
          value={formData.email}
          onChange={handleChange}
          className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-gray-400 focus:bg-white focus:outline-none transition-all duration-200 text-gray-900 placeholder-gray-500'
          placeholder={dictionary?.form?.email?.placeholder || 'votre@email.com'}
        />
      </div>

      <div>
        <textarea
          id='message'
          name='message'
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className='w-full px-4 py-3 resize-none bg-gray-50 border border-gray-200 rounded-lg focus:border-gray-400 focus:bg-white focus:outline-none transition-all duration-200 text-gray-900 placeholder-gray-500'
          placeholder={
            dictionary?.form?.message?.placeholder || 'Parlez-nous de votre projet...'
          }
        />
      </div>
      <button
        type='submit'
        disabled={isSubmitting}
        className='w-full bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base cursor-pointer'>
        {isSubmitting ? (
          <span className='flex items-center justify-center'>
            <div className='animate-spin mr-2 h-4 w-4 border-2 border-white/30 border-t-white rounded-full'></div>
            {dictionary?.form?.sending || 'Envoi en cours...'}
          </span>
        ) : submitStatus === 'success' ? (
          <span className='flex items-center justify-center'>
            <CheckCircle className='w-4 h-4 mr-2' />
            {dictionary?.form?.success || 'Message envoyé !'}
          </span>
        ) : submitStatus === 'error' ? (
          <span className='flex items-center justify-center'>
            <AlertCircle className='w-4 h-4 mr-2' />
            Réessayer
          </span>
        ) : (
          dictionary?.form?.submit || 'Envoyer le Message'
        )}
      </button>
    </form>
  )
}
