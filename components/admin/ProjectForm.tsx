'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface Project {
  id?: string
  title: string
  description: string
  project_url: string
  github_url: string
  technologies: string[]
  category: string
  status: string
  payment_status: string
  featured: boolean
}

interface ProjectFormProps {
  project?: Project
  isEditing?: boolean
}

export default function ProjectForm({ project, isEditing = false }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    title: project?.title || '',
    description: project?.description || '',
    project_url: project?.project_url || '',
    github_url: project?.github_url || '',
    technologies: project?.technologies?.join(', ') || '',
    category: project?.category || 'web-development',
    status: project?.status || 'completed',
    payment_status: project?.payment_status || 'pending',
    featured: project?.featured || false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [isDirty, setIsDirty] = useState(false)
  const [technologySuggestions] = useState([
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'CSS3', 'HTML5',
    'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'MySQL', 'Supabase', 'Firebase',
    'Vue.js', 'Angular', 'Svelte', 'Redux', 'Zustand', 'GraphQL', 'REST API',
    'Docker', 'AWS', 'Vercel', 'Netlify', 'Git', 'GitHub', 'Figma', 'Photoshop'
  ])
  const router = useRouter()

  // Auto-save draft functionality
  useEffect(() => {
    if (isDirty && !isEditing) {
      const draftKey = 'project-form-draft'
      const saveTimeout = setTimeout(() => {
        localStorage.setItem(draftKey, JSON.stringify(formData))
      }, 1000)
      return () => clearTimeout(saveTimeout)
    }
  }, [formData, isDirty, isEditing])

  // Load draft on mount for new projects
  useEffect(() => {
    if (!isEditing) {
      const draftKey = 'project-form-draft'
      const saved = localStorage.getItem(draftKey)
      if (saved) {
        try {
          const savedData = JSON.parse(saved)
          setFormData(savedData)
          setIsDirty(true)
        } catch (e) {
          console.error('Failed to load draft:', e)
        }
      }
    }
  }, [isEditing])

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.title.trim()) {
      errors.title = 'Project title is required'
    } else if (formData.title.length < 3) {
      errors.title = 'Title must be at least 3 characters long'
    }

    if (formData.description && formData.description.length > 1000) {
      errors.description = 'Description must be less than 1000 characters'
    }

    if (formData.project_url && !isValidUrl(formData.project_url)) {
      errors.project_url = 'Invalid project URL format'
    }

    if (formData.github_url && !isValidUrl(formData.github_url)) {
      errors.github_url = 'Invalid GitHub URL format'
    }

    if (formData.github_url && !formData.github_url.includes('github.com')) {
      errors.github_url = 'Must be a valid GitHub repository URL'
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const isValidUrl = (string: string) => {
    try {
      new URL(string)
      return true
    } catch {
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(fieldErrors)[0]
      const element = document.getElementById(firstErrorField)
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setIsSubmitting(true)
    setError('')
    setSuccess(false)

    try {
      const technologiesArray = formData.technologies
        .split(',')
        .map((tech: string) => tech.trim())
        .filter((tech: string) => tech.length > 0)

      const payload = {
        ...formData,
        technologies: technologiesArray,
      }

      const url = isEditing && project?.id ? `/api/admin/projects/${project.id}` : '/api/admin/projects'
      const method = isEditing ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setSuccess(true)
        setIsDirty(false)
        // Clear draft on successful submission
        if (!isEditing) {
          localStorage.removeItem('project-form-draft')
        }
        setTimeout(() => {
          router.push('/admin/projects')
          router.refresh()
        }, 1500)
      } else {
        const data = await response.json()
        setError(data.error || 'Failed to save project')
      }
    } catch (error) {
      console.error('Submit error:', error)
      setError('An error occurred while saving the project')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }))

    setIsDirty(true)

    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const addTechnologySuggestion = (tech: string) => {
    const currentTechs = formData.technologies.split(',').map((t: string) => t.trim()).filter(Boolean)
    if (!currentTechs.includes(tech)) {
      const newTechs = [...currentTechs, tech].join(', ')
      setFormData(prev => ({ ...prev, technologies: newTechs }))
      setIsDirty(true)
    }
  }

  const getCharacterCount = (text: string, limit: number) => {
    const isNearLimit = text.length > limit * 0.8
    const isAtLimit = text.length >= limit
    return (
      <span className={`text-xs ${isAtLimit ? 'text-red-500' : isNearLimit ? 'text-yellow-500' : 'text-gray-400'}`}>
        {text.length}/{limit}
      </span>
    )
  }

  return (
    <div className='max-w-none'>
      {/* Draft saved indicator */}
      {isDirty && !isEditing && (
        <div className='fixed top-4 right-4 z-50 bg-blue-50 border border-blue-200 rounded-lg p-3 shadow-lg'>
          <div className='flex items-center text-sm text-blue-700'>
            <svg className='w-4 h-4 mr-2 animate-pulse' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
            </svg>
            Draft auto-saved
          </div>
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className='rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-6 border border-green-200 mb-8'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center'>
                <svg className='h-6 w-6 text-green-600' viewBox='0 0 20 20' fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </div>
            <div className='ml-4'>
              <h3 className='text-lg font-semibold text-green-800'>
                {isEditing ? 'Project updated!' : 'Project created successfully!'}
              </h3>
              <p className='text-green-700'>Redirecting to projects list...</p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className='rounded-xl bg-gradient-to-r from-red-50 to-pink-50 p-6 border border-red-200 mb-8'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='w-10 h-10 bg-red-100 rounded-full flex items-center justify-center'>
                <svg className='h-6 w-6 text-red-600' viewBox='0 0 20 20' fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </div>
            <div className='ml-4'>
              <h3 className='text-lg font-semibold text-red-800'>Error</h3>
              <p className='text-red-700'>{error}</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className='space-y-8'>
        {/* Section 1: Basic Information */}
        <div className='bg-gray-50 rounded-xl p-6 border border-gray-200'>
          <div className='flex items-center mb-6'>
            <div className='w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3'>
              <svg
                className='w-5 h-5 text-indigo-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-gray-900'>Basic Information</h3>
          </div>

          <div className='space-y-6'>
            <div>
              <label htmlFor='title' className='block text-sm font-medium text-gray-700 mb-2'>
                Project Title *
              </label>
              <input
                type='text'
                name='title'
                id='title'
                required
                value={formData.title}
                onChange={handleChange}
                className={`bg-white border border-gray-300 text-gray-900 p-4 block w-full rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-colors ${
                  fieldErrors.title ? 'border-red-300 bg-red-50' : ''
                }`}
                placeholder='Enter your project name'
              />
              {fieldErrors.title && (
                <p className='mt-2 text-sm text-red-600 flex items-center'>
                  <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                  {fieldErrors.title}
                </p>
              )}
            </div>

            <div>
              <label htmlFor='description' className='flex justify-between items-center text-sm font-medium text-gray-700 mb-2'>
                <span>Project Description</span>
                {getCharacterCount(formData.description, 1000)}
              </label>
              <textarea
                name='description'
                id='description'
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className={`block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-gray-900 border p-4 transition-colors ${
                  fieldErrors.description ? 'border-red-300 bg-red-50' : ''
                }`}
                placeholder='Describe your project, its goals and main features...'
                maxLength={1000}
              />
              {fieldErrors.description && (
                <p className='mt-2 text-sm text-red-600 flex items-center'>
                  <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                  {fieldErrors.description}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Section 2: Links and URLs */}
        <div className='bg-gray-50 rounded-xl p-6 border border-gray-200'>
          <div className='flex items-center mb-6'>
            <div className='w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3'>
              <svg
                className='w-5 h-5 text-blue-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-gray-900'>Links and URLs</h3>
          </div>

          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            <div>
              <label htmlFor='project_url' className='block text-sm font-medium text-gray-700 mb-2'>
                Live Project URL
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <svg
                    className='h-5 w-5 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                    />
                  </svg>
                </div>
                <input
                  type='url'
                  name='project_url'
                  id='project_url'
                  value={formData.project_url}
                  onChange={handleChange}
                  className={`bg-white border border-gray-300 text-gray-900 pl-10 pr-4 py-4 block w-full rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-colors ${
                    fieldErrors.project_url ? 'border-red-300 bg-red-50' : ''
                  }`}
                  placeholder='https://myproject.com'
                />
              </div>
              {fieldErrors.project_url && (
                <p className='mt-2 text-sm text-red-600 flex items-center'>
                  <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                  {fieldErrors.project_url}
                </p>
              )}
            </div>

            <div>
              <label htmlFor='github_url' className='block text-sm font-medium text-gray-700 mb-2'>
                GitHub Repository URL
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <svg className='h-5 w-5 text-gray-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <input
                  type='url'
                  name='github_url'
                  id='github_url'
                  value={formData.github_url}
                  onChange={handleChange}
                  className={`bg-white border border-gray-300 text-gray-900 pl-10 pr-4 py-4 block w-full rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-colors ${
                    fieldErrors.github_url ? 'border-red-300 bg-red-50' : ''
                  }`}
                  placeholder='https://github.com/username/repository'
                />
              </div>
              {fieldErrors.github_url && (
                <p className='mt-2 text-sm text-red-600 flex items-center'>
                  <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                  {fieldErrors.github_url}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Section 3: Technologies */}
        <div className='bg-gray-50 rounded-xl p-6 border border-gray-200'>
          <div className='flex items-center mb-6'>
            <div className='w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3'>
              <svg
                className='w-5 h-5 text-purple-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-gray-900'>Technologies Used</h3>
          </div>

          <div>
            <label htmlFor='technologies' className='block text-sm font-medium text-gray-700 mb-2'>
              Technologies (comma separated)
            </label>
            <input
              type='text'
              name='technologies'
              id='technologies'
              value={formData.technologies}
              onChange={handleChange}
              placeholder='React, Next.js, TypeScript, Tailwind CSS, Supabase'
              className='block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-gray-900 border p-4 transition-colors'
            />
            <p className='mt-2 text-sm text-gray-500'>
              List all technologies, frameworks and tools used in this project
            </p>
            
            {/* Technology suggestions */}
            <div className='mt-4'>
              <p className='text-sm font-medium text-gray-700 mb-2'>Quick Add:</p>
              <div className='flex flex-wrap gap-2'>
                {technologySuggestions.slice(0, 12).map((tech) => (
                  <button
                    key={tech}
                    type='button'
                    onClick={() => addTechnologySuggestion(tech)}
                    className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors cursor-pointer'>
                    + {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Classification and Status */}
        <div className='bg-gray-50 rounded-xl p-6 border border-gray-200'>
          <div className='flex items-center mb-6'>
            <div className='w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3'>
              <svg
                className='w-5 h-5 text-green-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-gray-900'>Classification and Status</h3>
          </div>

          <div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
            <div>
              <label htmlFor='category' className='block text-sm font-medium text-gray-700 mb-2'>
                Category
              </label>
              <select
                name='category'
                id='category'
                value={formData.category}
                onChange={handleChange}
                className='block text-gray-900 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white border p-4 transition-colors cursor-pointer hover:bg-gray-50'>
                <option value='web-development' className='py-2'>💻 Web Development</option>
                <option value='e-commerce' className='py-2'>🛒 E-commerce</option>
                <option value='web-app' className='py-2'>⚡ Web Application</option>
                <option value='portfolio' className='py-2'>👤 Portfolio</option>
                <option value='landing-page' className='py-2'>📄 Landing Page</option>
                <option value='other' className='py-2'>🔧 Other</option>
              </select>
            </div>

            <div>
              <label htmlFor='status' className='block text-sm font-medium text-gray-700 mb-2'>
                Project Status
              </label>
              <select
                name='status'
                id='status'
                value={formData.status}
                onChange={handleChange}
                className='block text-gray-900 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white border p-4 transition-colors cursor-pointer hover:bg-gray-50'>
                <option value='completed' className='py-2'>✅ Completed</option>
                <option value='in-progress' className='py-2'>🚧 In Progress</option>
                <option value='archived' className='py-2'>📦 Archived</option>
              </select>
            </div>

            <div>
              <label
                htmlFor='payment_status'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Payment Status
              </label>
              <select
                name='payment_status'
                id='payment_status'
                value={formData.payment_status}
                onChange={handleChange}
                className='block text-gray-900 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white border p-4 transition-colors cursor-pointer hover:bg-gray-50'>
                <option value='pending' className='py-2'>⏳ Pending</option>
                <option value='partial' className='py-2'>💰 Partial Payment</option>
                <option value='completed' className='py-2'>💳 Completed</option>
                <option value='free' className='py-2'>🆓 Free Project</option>
                <option value='overdue' className='py-2'>⚠️ Overdue</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 5: Advanced Options */}
        <div className='bg-gray-50 rounded-xl p-6 border border-gray-200'>
          <div className='flex items-center mb-6'>
            <div className='w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3'>
              <svg
                className='w-5 h-5 text-yellow-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-gray-900'>Advanced Options</h3>
          </div>

          <div className='flex items-start space-x-3'>
            <div className='flex items-center h-5'>
              <input
                type='checkbox'
                name='featured'
                id='featured'
                checked={formData.featured}
                onChange={handleChange}
                className='w-5 h-5 bg-indigo-100 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded transition-colors'
              />
            </div>
            <div className='text-sm'>
              <label htmlFor='featured' className='font-medium text-gray-900 cursor-pointer'>
                Featured Project
              </label>
              <p className='text-gray-500'>
                This project will appear in the featured projects section on your portfolio
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className='flex justify-end space-x-4 pt-6 border-t border-gray-200'>
          <button
            type='button'
            onClick={() => router.back()}
            className='px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors'>
            Cancel
          </button>
          <button
            type='submit'
            disabled={isSubmitting}
            className='px-8 py-3 border border-transparent rounded-lg text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl'>
            {isSubmitting ? (
              <div className='flex items-center'>
                <svg
                  className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'>
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                </svg>
                Saving...
              </div>
            ) : (
              <div className='flex items-center'>
                <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                  />
                </svg>
                {isEditing ? 'Update Project' : 'Create Project'}
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
