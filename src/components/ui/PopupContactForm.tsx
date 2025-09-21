'use client'

import React, { useState, useCallback, useEffect } from 'react'
import { X, Mail, CheckCircle, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import { type Locale } from '@/lib/i18n'
import { cardStyles } from '@/utils/styles'

interface ContactFormField {
  label?: string
  placeholder?: string
}

interface ContactForm {
  title?: string
  name?: ContactFormField
  email?: ContactFormField
  message?: ContactFormField
  submit?: string
  sending?: string
  success?: string
  success_description?: string
  error?: string
  error_description?: string
}

interface ContactDictionary {
  title?: string
  subtitle?: string
  form?: ContactForm
}

interface PopupContactFormProps {
  isOpen: boolean
  onClose: () => void
  dictionary?: ContactDictionary
  locale?: Locale
}

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

/**
 * Popup contact form component with the same functionality as Contact section
 */
const PopupContactForm = ({
  isOpen,
  onClose,
  dictionary,
  locale = 'fr',
}: PopupContactFormProps) => {
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

  // Reset form when popup opens
  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', email: '', message: '' })
      setSubmitStatus('idle')
    }
  }, [isOpen])

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

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
          source: 'popup', // Identifier for popup form
        }

        // Submit to backend API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...submitData,
            locale: locale || 'fr',
          }),
        })

        const result = await response.json()

        if (!response.ok) {
          throw new Error(result.error || "Erreur lors de l'envoi du message")
        }

        // Mark as successful and reset form
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })

        // Auto-close popup after success
        setTimeout(() => {
          onClose()
        }, 2000)
      } catch (error) {
        console.error('Form submission error:', error)
        setSubmitStatus('error')
      } finally {
        setIsSubmitting(false)
      }
    },
    [formData, locale, onClose]
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
    },
    []
  )

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='fixed inset-0 z-[200] flex items-center justify-center p-4'>
          {/* Backdrop */}
          <div className='absolute inset-0 bg-black/50 backdrop-blur-sm' onClick={onClose} />

          {/* Popup Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`relative w-full max-w-md max-h-[90vh] overflow-y-auto ${cardStyles.card} bg-white`}>
            {/* Header */}
            <div className='flex items-center justify-between p-6 border-b border-gray-200'>
              <div>
                <h2 className='text-2xl font-bold text-[#112D4E]'>
                  {dictionary?.title || 'Nouveau Projet'}
                </h2>
                <p className='text-sm text-gray-600 mt-1'>
                  {dictionary?.subtitle || 'Décrivez votre projet'}
                </p>
              </div>
              <button
                onClick={onClose}
                className='p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200'
                aria-label='Fermer'>
                <X className='w-5 h-5 text-gray-500' />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className='p-6 space-y-6'>
              {/* Name Field */}
              <div>
                <label
                  htmlFor='popup-name'
                  className='block text-sm font-semibold text-gray-900 mb-2'>
                  {dictionary?.form?.name?.label || 'Nom complet'} *
                </label>
                <input
                  type='text'
                  id='popup-name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={dictionary?.form?.name?.placeholder || 'Votre nom'}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500'
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor='popup-email'
                  className='block text-sm font-semibold text-gray-900 mb-2'>
                  {dictionary?.form?.email?.label || 'Adresse email'} *
                </label>
                <input
                  type='email'
                  id='popup-email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={dictionary?.form?.email?.placeholder || 'votre@email.com'}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500'
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor='popup-message'
                  className='block text-sm font-semibold text-gray-900 mb-2'>
                  {dictionary?.form?.message?.label || 'Votre projet'} *
                </label>
                <textarea
                  id='popup-message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={dictionary?.form?.message?.placeholder || 'Décrivez votre projet...'}
                  required
                  rows={4}
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 resize-none'
                />
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isSubmitting}
                className={`cursor-pointer w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[var(--accent)] hover:bg-[var(--accent-dark)] hover:scale-[1.02]'
                } text-white`}>
                {isSubmitting ? (
                  <>
                    <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                    <span>{dictionary?.form?.sending || 'Envoi...'}</span>
                  </>
                ) : (
                  <>
                    <Mail className='w-5 h-5' />
                    <span>{dictionary?.form?.submit || 'Envoyer la demande'}</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex items-center space-x-3 p-4 bg-green-50 border border-green-200 rounded-xl'>
                  <CheckCircle className='w-5 h-5 text-green-600 flex-shrink-0' />
                  <div>
                    <p className='text-sm font-semibold text-green-800'>
                      {dictionary?.form?.success || 'Message envoyé !'}
                    </p>
                    <p className='text-xs text-green-600'>
                      {dictionary?.form?.success_description ||
                        'Nous vous recontacterons rapidement.'}
                    </p>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex items-center space-x-3 p-4 bg-red-50 border border-red-200 rounded-xl'>
                  <AlertCircle className='w-5 h-5 text-red-600 flex-shrink-0' />
                  <div>
                    <p className='text-sm font-semibold text-red-800'>
                      {dictionary?.form?.error || "Erreur d'envoi"}
                    </p>
                    <p className='text-xs text-red-600'>
                      {dictionary?.form?.error_description ||
                        'Veuillez réessayer ou nous contacter directement.'}
                    </p>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PopupContactForm
