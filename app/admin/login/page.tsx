'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Lock, Mail, Shield, CheckCircle, AlertCircle, Sparkles } from 'lucide-react'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const currentYear = new Date().getFullYear()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        router.push('/admin/dashboard')
        router.refresh()
      } else {
        setError(data.error || 'Invalid credentials')
      }
    } catch {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(2deg);
          }
          50% {
            transform: translateY(0px) rotate(0deg);
          }
          75% {
            transform: translateY(-10px) rotate(-2deg);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 1s linear infinite;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%);
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .glass-morphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .input-focus {
          transition: all 0.3s ease;
        }

        .input-focus:focus {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .button-hover {
          transition: all 0.3s ease;
        }

        .button-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
        }

        .error-slide {
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className='min-h-screen flex relative overflow-hidden'>
        {/* Animated Background */}
        <div className='absolute inset-0 gradient-bg'></div>

        {/* Left Side - Branding */}
        <div className='hidden lg:flex lg:w-1/2 relative overflow-hidden'>
          {/* Background Pattern */}
          <div className='absolute inset-0 opacity-20'>
            <div className='absolute top-0 left-0 w-full h-full'>
              <svg
                className='absolute inset-0 w-full h-full'
                viewBox='0 0 400 400'
                xmlns='http://www.w3.org/2000/svg'>
                <defs>
                  <pattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'>
                    <path
                      d='M 40 0 L 0 0 0 40'
                      fill='none'
                      stroke='white'
                      strokeWidth='1'
                      opacity='0.3'
                    />
                  </pattern>
                </defs>
                <rect width='100%' height='100%' fill='url(#grid)' />
              </svg>
            </div>
          </div>

          {/* Floating Elements */}
          <div className='absolute top-20 left-20 w-32 h-32 glass-morphism rounded-2xl animate-float'></div>
          <div className='absolute bottom-32 right-20 w-24 h-24 glass-morphism rounded-full animate-float-delayed'></div>
          <div
            className='absolute top-1/2 left-10 w-16 h-16 glass-morphism rounded-xl animate-float'
            style={{ animationDelay: '2s' }}></div>

          {/* Content */}
          <div className='relative z-10 flex flex-col justify-center items-center text-center p-12 text-white'>
            <div className='animate-fadeInLeft mb-8'>
              <div className='w-20 h-20 glass-morphism rounded-2xl flex items-center justify-center mb-6 animate-pulse-slow'>
                <Shield className='w-10 h-10 text-white' />
              </div>
              <h1 className='text-4xl font-bold mb-4'>SIDIKOFF DIGITAL</h1>
              <p className='text-xl text-white/90 mb-8'>Admin Dashboard</p>
            </div>

            <div
              className='animate-fadeInLeft space-y-4 text-white/80'
              style={{ animationDelay: '0.2s' }}>
              <div className='flex items-center space-x-3 transform hover:scale-105 transition-transform'>
                <CheckCircle className='w-5 h-5 animate-pulse-slow' />
                <span>Secure authentication</span>
              </div>
              <div className='flex items-center space-x-3 transform hover:scale-105 transition-transform'>
                <CheckCircle
                  className='w-5 h-5 animate-pulse-slow'
                  style={{ animationDelay: '0.5s' }}
                />
                <span>Project management</span>
              </div>
              <div className='flex items-center space-x-3 transform hover:scale-105 transition-transform'>
                <CheckCircle
                  className='w-5 h-5 animate-pulse-slow'
                  style={{ animationDelay: '1s' }}
                />
                <span>Client communications</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className='flex-1 flex items-center justify-center p-8 bg-gray-50/95 backdrop-blur-sm relative'>
          <div className='max-w-md w-full animate-fadeInRight'>
            {/* Mobile Logo */}
            <div className='lg:hidden text-center mb-8 animate-fadeInUp'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-4 animate-pulse-slow'>
                <Shield className='w-8 h-8 text-white' />
              </div>
              <h1 className='text-2xl font-bold text-gray-900'>SIDIKOFF DIGITAL</h1>
              <p className='text-gray-600'>Admin Dashboard</p>
            </div>

            {/* Login Card */}
            <div
              className='bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 transform hover:scale-[1.02] transition-all duration-300 animate-fadeInUp'
              style={{ animationDelay: '0.3s' }}>
              <div className='text-center mb-8'>
                <div className='flex items-center justify-center mb-4'>
                  <Sparkles className='w-6 h-6 text-indigo-600 mr-2 animate-pulse-slow' />
                  <h2 className='text-2xl font-bold text-gray-900'>Welcome Back</h2>
                  <Sparkles
                    className='w-6 h-6 text-purple-600 ml-2 animate-pulse-slow'
                    style={{ animationDelay: '1s' }}
                  />
                </div>
                <p className='text-gray-600'>Please sign in to your admin account</p>
              </div>

              <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Email Field */}
                <div className='animate-fadeInUp' style={{ animationDelay: '0.4s' }}>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                    Email Address
                  </label>
                  <div className='relative group'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none group-hover:text-indigo-500 transition-colors'>
                      <Mail className='h-5 w-5 text-gray-400' />
                    </div>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      required
                      className='block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent input-focus bg-white/50 backdrop-blur-sm'
                      placeholder='Enter your email address'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className='animate-fadeInUp' style={{ animationDelay: '0.5s' }}>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium text-gray-700 mb-2'>
                    Password
                  </label>
                  <div className='relative group'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none group-hover:text-indigo-500 transition-colors'>
                      <Lock className='h-5 w-5 text-gray-400' />
                    </div>
                    <input
                      id='password'
                      name='password'
                      type={showPassword ? 'text' : 'password'}
                      autoComplete='current-password'
                      required
                      className='block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent input-focus bg-white/50 backdrop-blur-sm'
                      placeholder='Enter your password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type='button'
                      className='absolute inset-y-0 right-0 pr-3 flex items-center hover:scale-110 transition-transform'
                      onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <EyeOff className='h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors' />
                      ) : (
                        <Eye className='h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors' />
                      )}
                    </button>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className='flex items-center space-x-2 p-4 bg-red-50/80 backdrop-blur-sm border border-red-200 rounded-lg error-slide'>
                    <AlertCircle className='w-5 h-5 text-red-500 flex-shrink-0 animate-pulse-slow' />
                    <p className='text-sm text-red-700'>{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <div className='animate-fadeInUp' style={{ animationDelay: '0.6s' }}>
                  <button
                    type='submit'
                    disabled={isLoading}
                    className='group relative w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed button-hover overflow-hidden'>
                    {isLoading && <div className='absolute inset-0 animate-shimmer'></div>}
                    {isLoading ? (
                      <>
                        <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2 animate-spin-slow'></div>
                        Signing in...
                      </>
                    ) : (
                      <>
                        <Shield className='w-5 h-5 mr-2 group-hover:rotate-12 transition-transform' />
                        Sign in to Dashboard
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Security Note */}
              <div className='mt-6 text-center animate-fadeInUp' style={{ animationDelay: '0.7s' }}>
                <p className='text-xs text-gray-500 flex items-center justify-center'>
                  <Lock className='w-3 h-3 mr-1' />
                  This is a secure admin area. Unauthorized access is prohibited.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div
              className='mt-8 text-center text-sm text-gray-500 animate-fadeInUp'
              style={{ animationDelay: '0.8s' }}>
              <p>© {currentYear} SIDIKOFF DIGITAL. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
