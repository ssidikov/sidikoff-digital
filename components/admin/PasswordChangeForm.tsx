'use client'

import { useState, useCallback, useMemo, memo } from 'react'
import { Eye, EyeOff, Lock, Shield, CheckCircle, AlertCircle, KeyRound } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FormData {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

// Optimized PasswordInput component to prevent focus loss
const PasswordInput = memo(({ 
  name, 
  value, 
  placeholder, 
  showPassword, 
  onToggleVisibility,
  onChange,
  icon
}: {
  name: string
  value: string
  placeholder: string
  showPassword: boolean
  onToggleVisibility: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  icon?: React.ReactNode
}) => (
  <div className="relative group">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
      {icon && <div className="text-gray-400 group-focus-within:text-indigo-500 transition-colors">
        {icon}
      </div>}
    </div>
    <input
      type={showPassword ? 'text' : 'password'}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className={`block w-full rounded-lg border-0 py-3 ${icon ? 'pl-10' : 'pl-4'} pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:border-transparent sm:text-sm transition-all duration-200 bg-white shadow-sm hover:shadow-md focus:shadow-md`}
    />
    <button
      type="button"
      onClick={onToggleVisibility}
      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 focus:text-indigo-600 transition-colors"
      tabIndex={-1}
    >
      {showPassword ? (
        <EyeOff className="h-5 w-5" />
      ) : (
        <Eye className="h-5 w-5" />
      )}
    </button>
  </div>
))

// Add display name for React dev tools
PasswordInput.displayName = 'PasswordInput'

export default function PasswordChangeForm() {
  const [formData, setFormData] = useState<FormData>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null)

  // Memoized password strength checker to prevent re-renders
  const getPasswordStrength = useCallback((password: string) => {
    if (password.length === 0) return null
    
    let score = 0
    const checks = {
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
    }

    score = Object.values(checks).filter(Boolean).length

    if (score < 2) return { 
      strength: 'weak', 
      color: 'text-red-600', 
      bgColor: 'bg-red-50 border-red-200',
      progress: 20,
      icon: <AlertCircle className="w-4 h-4" />
    }
    if (score < 4) return { 
      strength: 'medium', 
      color: 'text-amber-600', 
      bgColor: 'bg-amber-50 border-amber-200',
      progress: 60,
      icon: <Shield className="w-4 h-4" />
    }
    return { 
      strength: 'strong', 
      color: 'text-green-600', 
      bgColor: 'bg-green-50 border-green-200',
      progress: 100,
      icon: <CheckCircle className="w-4 h-4" />
    }
  }, [])

  const passwordMatch = useMemo(() => 
    formData.newPassword && formData.confirmPassword && formData.newPassword === formData.confirmPassword, 
    [formData.newPassword, formData.confirmPassword]
  )

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear message when user starts typing
    if (message) {
      setMessage(null)
    }
  }, [message])

  const togglePasswordVisibility = useCallback((field: keyof typeof showPasswords) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    // Validation
    if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
      setMessage({ type: 'error', text: 'All fields are required' })
      setIsLoading(false)
      return
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match' })
      setIsLoading(false)
      return
    }

    if (formData.newPassword.length < 6) {
      setMessage({ type: 'error', text: 'New password must be at least 6 characters long' })
      setIsLoading(false)
      return
    }

    if (formData.currentPassword === formData.newPassword) {
      setMessage({ type: 'error', text: 'New password must be different from current password' })
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/admin/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword
        })
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ type: 'success', text: 'Password changed successfully!' })
        setFormData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        })
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to change password' })
      }
    } catch (error) {
      console.error('Password change error:', error)
      setMessage({ type: 'error', text: 'An unexpected error occurred' })
    } finally {
      setIsLoading(false)
    }
  }

  const PasswordStrengthIndicator = ({ password }: { password: string }) => {
    const strength = getPasswordStrength(password)
    if (!strength) return null

    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={`mt-2 p-3 rounded-lg border ${strength.bgColor} transition-all duration-300`}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className={strength.color}>{strength.icon}</span>
            <span className={`text-sm font-medium ${strength.color}`}>
              Password {strength.strength}
            </span>
          </div>
          <span className={`text-xs ${strength.color}`}>
            {strength.progress}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <motion.div
            className={`h-2 rounded-full transition-all duration-500 ${
              strength.strength === 'weak' ? 'bg-red-500' :
              strength.strength === 'medium' ? 'bg-amber-500' : 'bg-green-500'
            }`}
            initial={{ width: 0 }}
            animate={{ width: `${strength.progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    )
  }

  return (
    <div className="max-w-lg mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <KeyRound className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Change Password</h3>
              <p className="text-indigo-100 text-sm">Update your account security</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Current Password */}
          <div className="space-y-2">
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
              Current Password
            </label>
            <PasswordInput
              name="currentPassword"
              value={formData.currentPassword}
              placeholder="Enter your current password"
              showPassword={showPasswords.current}
              onToggleVisibility={() => togglePasswordVisibility('current')}
              onChange={handleInputChange}
              icon={<Lock className="w-4 h-4" />}
            />
          </div>

          {/* New Password */}
          <div className="space-y-2">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <PasswordInput
              name="newPassword"
              value={formData.newPassword}
              placeholder="Enter your new password"
              showPassword={showPasswords.new}
              onToggleVisibility={() => togglePasswordVisibility('new')}
              onChange={handleInputChange}
              icon={<Shield className="w-4 h-4" />}
            />
            <AnimatePresence>
              {formData.newPassword && (
                <PasswordStrengthIndicator password={formData.newPassword} />
              )}
            </AnimatePresence>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <PasswordInput
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Confirm your new password"
              showPassword={showPasswords.confirm}
              onToggleVisibility={() => togglePasswordVisibility('confirm')}
              onChange={handleInputChange}
              icon={<CheckCircle className="w-4 h-4" />}
            />
            {formData.confirmPassword && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`flex items-center gap-2 text-sm ${
                  passwordMatch ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {passwordMatch ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <AlertCircle className="w-4 h-4" />
                )}
                {passwordMatch ? 'Passwords match' : 'Passwords do not match'}
              </motion.div>
            )}
          </div>

          {/* Message */}
          <AnimatePresence>
            {message && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`rounded-lg p-4 border ${
                  message.type === 'success' 
                    ? 'bg-green-50 text-green-700 border-green-200' 
                    : 'bg-red-50 text-red-700 border-red-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  {message.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  )}
                  <span className="font-medium">{message.text}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isLoading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                />
                Changing Password...
              </>
            ) : (
              <>
                <KeyRound className="w-4 h-4" />
                Change Password
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}
