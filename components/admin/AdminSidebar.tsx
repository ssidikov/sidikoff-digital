'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect, createContext, useContext } from 'react'
import { AdminUser } from '@/lib/admin-types'

// Create a context for mobile menu state
const MobileMenuContext = createContext<{
  isOpen: boolean
  setIsOpen: (open: boolean) => void
} | null>(null)

export const MobileMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MobileMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobileMenuContext.Provider>
  )
}

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext)
  if (!context) {
    throw new Error('useMobileMenu must be used within MobileMenuProvider')
  }
  return context
}

export const MobileMenuButton = () => {
  const { isOpen, setIsOpen } = useMobileMenu()

  return (
    <button
      type='button'
      className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-gray-900 active:scale-95 transition-all duration-200 lg:hidden'
      onClick={() => setIsOpen(true)}>
      <span className='sr-only'>Open main menu</span>
      <div className='relative w-6 h-6'>
        <svg
          className={`h-6 w-6 transition-transform duration-300 ${
            isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
          }`}
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </div>
    </button>
  )
}

const navigation = [
  {
    name: 'Dashboard',
    href: '/admin/dashboard',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
        />
      </svg>
    ),
  },
  {
    name: 'Projects',
    href: '/admin/projects',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
        />
      </svg>
    ),
  },
  {
    name: 'Submissions',
    href: '/admin/submissions',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
        />
      </svg>
    ),
  },
  {
    name: 'Settings',
    href: '/admin/settings',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.240.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'
        />
        <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
      </svg>
    ),
  },
]

export default function AdminSidebar({ user }: { user?: AdminUser }) {
  const pathname = usePathname()
  const router = useRouter()
  const { isOpen: mobileMenuOpen, setIsOpen: setMobileMenuOpen } = useMobileMenu()

  // Handle logout
  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', {
        method: 'POST',
      })
      router.push('/admin/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname, setMobileMenuOpen])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen, setMobileMenuOpen])

  const SidebarContent = () => (
    <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-slate-900 px-6 pb-4 h-full'>
      <div className='flex h-16 shrink-0 items-center justify-between'>
        <div className='flex items-center space-x-3'>
          <div className='w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center'>
            <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 20 20'>
              <path d='M10 2L3 6v6c0 5.55 3.84 9.739 9 9.949 5.16-.21 9-4.399 9-9.949V6l-7-4z' />
            </svg>
          </div>
          <h1 className='text-xl font-bold text-white'>SIDIKOFF</h1>
        </div>
        {/* Mobile close button with enhanced animation */}
        <button
          className='lg:hidden text-gray-100 hover:text-white p-2 rounded-lg hover:bg-slate-700 transition-all duration-200 active:scale-95'
          onClick={() => setMobileMenuOpen(false)}>
          <span className='sr-only'>Close menu</span>
          <svg
            className='h-6 w-6 transition-transform duration-300 hover:rotate-90'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
      </div>
      <nav className='flex flex-1 flex-col'>
        <ul role='list' className='flex flex-1 flex-col gap-y-7'>
          <li>
            <ul role='list' className='-mx-2 space-y-2'>
              {navigation.map((item, index) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
                return (
                  <li
                    key={item.name}
                    className={`transform transition-all duration-300 ease-out lg:translate-x-0 lg:opacity-100 ${
                      mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}>
                    <Link
                      href={item.href}
                      className={`group flex gap-x-3 rounded-xl p-3 text-sm leading-6 font-semibold transition-all duration-200 relative overflow-hidden ${
                        isActive
                          ? 'bg-indigo-700 text-white shadow-lg'
                          : 'text-gray-100 hover:text-white hover:bg-slate-700 active:scale-95'
                      }`}>
                      {/* Ripple effect background */}
                      <div
                        className={`absolute inset-0 bg-white opacity-0 group-active:opacity-10 transition-opacity duration-150 rounded-xl`}
                      />

                      <item.icon
                        className={`h-6 w-6 shrink-0 transition-all duration-200 ${
                          isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                        }`}
                      />
                      <span className='relative z-10 text-current'>{item.name}</span>

                      {/* Active indicator */}
                      {isActive && (
                        <div className='absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse' />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </li>
        </ul>

        {/* Footer with user info and sign out */}
        <div className='mt-auto pt-4 border-t border-gray-600'>
          {user && (
            <div className='mb-4 px-3'>
              <div className='text-xs text-gray-300 mb-1'>Signed in as</div>
              <div className='text-sm font-medium text-gray-100 truncate'>{user.name}</div>
              <div className='text-xs text-gray-400 truncate'>{user.email}</div>
            </div>
          )}

          <button
            onClick={handleLogout}
            className='w-full flex items-center gap-x-3 rounded-xl p-3 text-sm font-semibold text-gray-100 hover:text-white hover:bg-red-600/20 transition-all duration-200 group mb-3 active:scale-95'>
            <svg
              className='h-5 w-5 text-gray-300 group-hover:text-red-400 transition-colors duration-200'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
              />
            </svg>
            <span className='group-hover:text-red-400 transition-colors duration-200'>
              Sign out
            </span>
          </button>

          <div className='text-xs text-gray-200 text-center'>Admin Panel v2.0</div>
        </div>
      </nav>
    </div>
  )

  return (
    <>
      {/* Mobile menu overlay with enhanced animations */}
      {mobileMenuOpen && (
        <div className='fixed inset-0 z-50 lg:hidden'>
          {/* Backdrop with fade-in animation */}
          <div
            className='fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300'
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar container with slide-in animation - Full width on mobile */}
          <div className='fixed inset-0 flex'>
            <div className='relative flex w-full'>
              <div
                className={`transform transition-transform duration-300 ease-out w-full ${
                  mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <SidebarContent />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
        <SidebarContent />
      </div>
    </>
  )
}
