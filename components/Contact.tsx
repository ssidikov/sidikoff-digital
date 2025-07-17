'use client'

import type React from 'react'
import {
  useState,
  useRef,
  useEffect,
  useCallback,
  memo,
  MouseEvent as ReactMouseEvent,
} from 'react'
import { Mail, Phone, ChevronDown, MapPin, CheckCircle, Send } from 'lucide-react'
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion'
import Popup from './Popup'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'
import { useTariff } from '@/context/TariffContext'
import { trackFormSubmission } from './Analytics'

interface FormErrors {
  name?: string
  email?: string
  tariff?: string
  message?: string
}

// ContactCard component with mouse tracking - moved outside to prevent re-renders
interface ContactCardProps {
  children: React.ReactNode
  className?: string
}

function ContactCard({ children, className = '' }: ContactCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      className={`relative group bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 ${className}`}
      onMouseMove={handleMouseMove}>
      {/* Gradient overlay */}
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100'
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.08), transparent 60%)`,
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <div className='relative z-10'>{children}</div>
    </motion.div>
  )
}

// Мемоизированный компонент для input полей
interface FormInputProps {
  id: string
  name: string
  type: string
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  error?: string
  autoComplete?: string
  rows?: number
  isTextarea?: boolean
}

const FormInput = memo(
  ({
    id,
    name,
    type,
    label,
    placeholder,
    value,
    onChange,
    error,
    autoComplete,
    rows,
    isTextarea = false,
  }: FormInputProps) => {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange(e.target.value)
      },
      [onChange]
    )

    const inputClassName = `block w-full rounded-xl border-0 bg-gray-50 dark:bg-gray-700/50 px-4 py-3 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset transition-all duration-200 ${
      isTextarea ? 'resize-none' : ''
    } ${
      error
        ? 'ring-red-300 focus:ring-red-500 dark:ring-red-500'
        : 'ring-gray-200 dark:ring-gray-600 focus:ring-indigo-600 dark:focus:ring-indigo-400'
    }`

    return (
      <div>
        <label
          htmlFor={id}
          className='block text-sm font-semibold leading-6 text-gray-900 dark:text-white mb-2'>
          {label}
        </label>
        {isTextarea ? (
          <textarea
            placeholder={placeholder}
            id={id}
            name={name}
            rows={rows}
            value={value}
            onChange={handleChange}
            className={inputClassName}
          />
        ) : (
          <input
            placeholder={placeholder}
            id={id}
            name={name}
            type={type}
            autoComplete={autoComplete}
            value={value}
            onChange={handleChange}
            className={inputClassName}
          />
        )}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className='mt-2 text-sm text-red-500 dark:text-red-400'>
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    )
  }
)

FormInput.displayName = 'FormInput'

export default function Contact() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [tariff, setTariff] = useState('') // Локальное состояние для select
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const formRef = useRef<HTMLFormElement>(null)
  const { t } = useLanguage()
  const { selectedTariff, setSelectedTariff } = useTariff()

  // Синхронизация выбранного тарифа с локальным состоянием
  useEffect(() => {
    if (selectedTariff && selectedTariff !== tariff) {
      setTariff(selectedTariff)
    }
  }, [selectedTariff, tariff])

  // Обработчик изменения тарифа
  const handleTariffChange = useCallback(
    (newTariff: string) => {
      setTariff(newTariff)
      setSelectedTariff(newTariff) // Обновляем глобальный контекст
    },
    [setSelectedTariff]
  )

  // Обработчик изменения полей формы
  const handleInputChange = useCallback(
    (field: keyof typeof formData, value: string) => {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }))
      // Очищаем ошибку поля при изменении
      if (formErrors[field as keyof FormErrors]) {
        setFormErrors((prev) => ({
          ...prev,
          [field]: undefined,
        }))
      }
    },
    [formErrors]
  )

  // Мемоизированные обработчики для каждого поля
  const handleNameChange = useCallback(
    (value: string) => {
      handleInputChange('name', value)
    },
    [handleInputChange]
  )

  const handleEmailChange = useCallback(
    (value: string) => {
      handleInputChange('email', value)
    },
    [handleInputChange]
  )

  const handleMessageChange = useCallback(
    (value: string) => {
      handleInputChange('message', value)
    },
    [handleInputChange]
  )

  // Validation functions
  const validateEmail = useCallback((email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }, [])

  // const validatePhone = (phone: string): boolean => {
  //   const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  //   return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
  // }

  const validateForm = useCallback(
    (formData: FormData): FormErrors => {
      const errors: FormErrors = {}

      const name = formData.get('name') as string
      // const lastName = formData.get('last-name') as string // Not used in validation
      const email = formData.get('email') as string
      // const phone = formData.get('phone-number') as string // Not used in validation
      // const selectedTariff = formData.get('selected-tariff') as string // Not used in validation
      // const message = formData.get('message') as string // Not used in validation

      // Name validation
      if (!name || name.trim().length === 0) {
        errors.name = t('validation.firstName.required')
      } else if (name.trim().length < 2) {
        errors.name = t('validation.firstName.minLength')
      }

      // // Last name validation
      // if (!lastName || lastName.trim().length === 0) {
      //   errors.lastName = t('validation.lastName.required')
      // } else if (lastName.trim().length < 2) {
      //   errors.lastName = t('validation.lastName.minLength')
      // }

      // Email validation
      if (!email || email.trim().length === 0) {
        errors.email = t('validation.email.required')
      } else if (!validateEmail(email)) {
        errors.email = t('validation.email.invalid')
      }

      // // Phone validation
      // if (!phone || phone.trim().length === 0) {
      //   errors.phone = t('validation.phone.required')
      // } else if (!validatePhone(phone)) {
      //   errors.phone = t('validation.phone.invalid')
      // }

      // // Tariff validation
      // if (!selectedTariff || selectedTariff.trim().length === 0) {
      //   errors.tariff = t('validation.tariff.required')
      // }

      // // Message validation
      // if (!message || message.trim().length === 0) {
      //   errors.message = t('validation.message.required')
      // } else if (message.trim().length < 10) {
      //   errors.message = t('validation.message.minLength')
      // }

      return errors
    },
    [t, validateEmail]
  )

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setIsLoading(true)
      setError(null)
      setFormErrors({})

      // Создаем FormData из состояния для валидации
      const formDataForValidation = new FormData()
      formDataForValidation.append('name', formData.name)
      formDataForValidation.append('email', formData.email)
      formDataForValidation.append('selected-tariff', tariff)
      formDataForValidation.append('message', formData.message)

      // Validate form
      const errors = validateForm(formDataForValidation)

      if (Object.keys(errors).length > 0) {
        setFormErrors(errors)
        setIsLoading(false)
        return
      }

      try {
        // Send to our API using state data
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            projectType: tariff,
            budget: null, // Can be added later if needed
            timeline: null, // Can be added later if needed
          }),
        })

        const result = await response.json()

        if (response.ok) {
          // Track Google Ads conversion
          trackFormSubmission({
            firstName: formData.name,
            email: formData.email,
          })

          setIsPopupOpen(true)
          // Сбрасываем все состояния формы
          setFormData({
            name: '',
            email: '',
            message: '',
          })
          setTariff('')
          setSelectedTariff('') // Сбрасываем глобальный контекст
          setFormErrors({})
          setTimeout(() => setIsPopupOpen(false), 5000)
        } else {
          throw new Error(result.error || 'Failed to send message')
        }
      } catch (err) {
        console.error('Contact form error:', err)
        setError('An error occurred while sending the message. Please try again.')
      } finally {
        setIsLoading(false)
      }
    },
    [formData, tariff, setSelectedTariff, validateForm]
  )

  return (
    <section
      id='contact'
      className='relative isolate bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950'>
      {/* Background decoration */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-70' />
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-70' />
      </div>

      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8'>
        {/* Header */}
        <AnimatedSection className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl'>
            {t('contact.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            {t('contact.subtitle')}
          </motion.p>
        </AnimatedSection>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20'>
          {/* Contact Information */}
          <AnimatedSection className='space-y-8'>
            {/* Quick Contact Methods */}
            <ContactCard>
              <h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-6'>
                {t('contact.description').split('\n')[0].replace('• ', '')}
              </h3>

              {/* Contact Methods Grid */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/+33626932734`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center p-4 rounded-xl bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors group'>
                  <div className='w-8 h-8 flex items-center justify-center'>
                    <svg
                      viewBox='0 0 24 24'
                      className='w-8 h-8 fill-current text-green-600 dark:text-green-400'>
                      <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.566' />
                    </svg>
                  </div>
                  <div className='ml-4'>
                    <p className='text-sm font-medium text-gray-900 dark:text-white'>
                      {t('contact.socialMedia.whatsapp')}
                    </p>
                    <p className='text-sm text-gray-600 dark:text-gray-300'>
                      {t('contact.phone.value')}
                    </p>
                  </div>
                </a>

                {/* Telegram */}
                <a
                  href='https://t.me/sardorbek_sidikov'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors group'>
                  <div className='w-8 h-8 flex items-center justify-center'>
                    <svg
                      viewBox='0 0 24 24'
                      className='w-8 h-8 fill-current text-blue-600 dark:text-blue-400'>
                      <path d='m9.417 15.181-.397-.131-.964-2.946 7.966-4.729-.84 3.976-5.765 3.83Z' />
                      <path d='M20.693 3.831 2.529 11.342c-.49.199-.49.656-.49.656s.13.32.524.474l4.631 1.714 1.748 5.656c.173.547.527.547.527.547s.271.062.546-.235l2.053-2.053 4.274 3.156c.395.235.77.131.77.131s.31-.135.411-.621L20.693 3.831Z' />
                    </svg>
                  </div>
                  <div className='ml-4'>
                    <p className='text-sm font-medium text-gray-900 dark:text-white'>
                      {t('contact.socialMedia.telegram')}
                    </p>
                    <p className='text-sm text-gray-600 dark:text-gray-300'>@sardorbek_sidikov</p>
                  </div>
                </a>
              </div>

              {/* Contact Details */}
              <div className='space-y-4'>
                <div className='flex items-center text-gray-600 dark:text-gray-300'>
                  <Mail className='h-5 w-5 text-indigo-500 mr-3 flex-shrink-0' />
                  <div>
                    <p className='text-sm font-medium text-gray-900 dark:text-white'>
                      {t('contact.email.label')}
                    </p>
                    <a
                      href={`mailto:${t('contact.email.value')}`}
                      className='text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'>
                      {t('contact.email.value')}
                    </a>
                  </div>
                </div>

                <div className='flex items-center text-gray-600 dark:text-gray-300'>
                  <Phone className='h-5 w-5 text-indigo-500 mr-3 flex-shrink-0' />
                  <div>
                    <p className='text-sm font-medium text-gray-900 dark:text-white'>
                      {t('contact.phone.label')}
                    </p>
                    <a
                      href={`tel:+33626932734`}
                      className='text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'>
                      +33 {t('contact.phone.value')}
                    </a>
                  </div>
                </div>

                <div className='flex items-center text-gray-600 dark:text-gray-300'>
                  <MapPin className='h-5 w-5 text-indigo-500 mr-3 flex-shrink-0' />
                  <div>
                    <p className='text-sm font-medium text-gray-900 dark:text-white'>
                      {t('contact.location.label')}
                    </p>
                    <p className='text-sm'>{t('contact.location.value')}</p>
                  </div>
                </div>
              </div>
            </ContactCard>

            {/* Benefits */}
            <ContactCard>
              <h4 className='text-xl font-semibold text-gray-900 dark:text-white mb-6'>
                {t('contact.benefits.title')}
              </h4>
              <div className='space-y-4'>
                <div className='flex items-center'>
                  <CheckCircle className='h-5 w-5 text-green-500 mr-3 flex-shrink-0' />
                  <span className='text-gray-600 dark:text-gray-300'>
                    {t('contact.subdescription2')}
                  </span>
                </div>
                <div className='flex items-center'>
                  <CheckCircle className='h-5 w-5 text-green-500 mr-3 flex-shrink-0' />
                  <span className='text-gray-600 dark:text-gray-300'>
                    {t('contact.subdescription3')}
                  </span>
                </div>
                <div className='flex items-center'>
                  <CheckCircle className='h-5 w-5 text-green-500 mr-3 flex-shrink-0' />
                  <span className='text-gray-600 dark:text-gray-300'>
                    {t('contact.benefits.1')}
                  </span>
                </div>
                <div className='flex items-center'>
                  <CheckCircle className='h-5 w-5 text-green-500 mr-3 flex-shrink-0' />
                  <span className='text-gray-600 dark:text-gray-300'>
                    {t('contact.benefits.2')}
                  </span>
                </div>
              </div>
            </ContactCard>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection>
            <ContactCard>
              <div className='mb-8'>
                <h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-2'>
                  {t('contact.form.title')}
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>{t('contact.form.subtitle')}</p>
              </div>

              <form id='contact-form' ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
                {/* Name Field - Full Width */}
                <FormInput
                  id='name'
                  name='name'
                  type='text'
                  label={t('contact.firstName')}
                  placeholder={t('contact.placeholder.firstName')}
                  value={formData.name}
                  onChange={handleNameChange}
                  error={formErrors.name}
                  autoComplete='name'
                />

                {/* Email */}
                <FormInput
                  id='email'
                  name='email'
                  type='email'
                  label={t('contact.email')}
                  placeholder={t('contact.placeholder.email')}
                  value={formData.email}
                  onChange={handleEmailChange}
                  error={formErrors.email}
                  autoComplete='email'
                />

                {/* Tariff Selection */}
                <div>
                  <label
                    htmlFor='selected-tariff'
                    className='block text-sm font-semibold leading-6 text-gray-900 dark:text-white mb-2'>
                    {t('prices.title')}{' '}
                    <span className='text-xs text-gray-400 font-normal'>
                      ({t('prices.subtitle')})
                    </span>
                  </label>
                  <div className='relative'>
                    <select
                      id='selected-tariff'
                      name='selected-tariff'
                      value={tariff}
                      onChange={(e) => handleTariffChange(e.target.value)}
                      className={`block w-full rounded-xl border-0 bg-gray-50 dark:bg-gray-700/50 px-4 py-3 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset transition-all duration-200 appearance-none pr-10 ${
                        formErrors.tariff
                          ? 'ring-red-300 focus:ring-red-500 dark:ring-red-500'
                          : 'ring-gray-200 dark:ring-gray-600 focus:ring-indigo-600 dark:focus:ring-indigo-400'
                      }`}>
                      <option value='' disabled hidden className='text-gray-400'>
                        -- {t('prices.title')} --
                      </option>
                      <option value={t('prices.tier1.name')} className='bg-white dark:bg-gray-800'>
                        {t('prices.tier1.name')}
                      </option>
                      <option value={t('prices.tier2.name')} className='bg-white dark:bg-gray-800'>
                        {t('prices.tier2.name')}
                      </option>
                      <option value={t('prices.tier3.name')} className='bg-white dark:bg-gray-800'>
                        {t('prices.tier3.name')}
                      </option>
                      <option
                        value={t('prices.customDescription')}
                        className='bg-white dark:bg-gray-800'>
                        {t('prices.customDescription')}
                      </option>
                      <option
                        value={t('prices.maintenanceSupport.title')}
                        className='bg-white dark:bg-gray-800'>
                        {t('prices.maintenanceSupport.title')}
                      </option>
                    </select>
                    <ChevronDown className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
                  </div>
                  {formErrors.tariff && (
                    <p className='mt-2 text-sm text-red-500 dark:text-red-400'>
                      {formErrors.tariff}
                    </p>
                  )}
                  <p className='mt-1 text-xs text-gray-500 dark:text-gray-400'>
                    {t('prices.description')}
                  </p>
                </div>

                {/* Message */}
                <FormInput
                  id='message'
                  name='message'
                  type='text'
                  label={t('contact.message')}
                  placeholder={t('contact.placeholder.message')}
                  value={formData.message}
                  onChange={handleMessageChange}
                  error={formErrors.message}
                  isTextarea={true}
                  rows={4}
                />

                {/* Submit Button */}
                <div className='pt-4'>
                  <motion.button
                    type='submit'
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className='w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 text-base font-semibold text-white shadow-lg hover:from-indigo-700 hover:to-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200 flex items-center justify-center'>
                    {isLoading ? (
                      <>
                        <div className='animate-spin -ml-1 mr-3 h-5 w-5 border-2 border-white border-t-transparent rounded-full'></div>
                        {t('contact.sending')}
                      </>
                    ) : (
                      <>
                        <Send className='w-5 h-5 mr-2' />
                        {t('contact.send')}
                      </>
                    )}
                  </motion.button>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'>
                    <p className='text-sm text-red-600 dark:text-red-400'>{error}</p>
                  </motion.div>
                )}
              </form>
            </ContactCard>
          </AnimatedSection>
        </div>
      </div>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  )
}
