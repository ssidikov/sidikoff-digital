'use client'

import { usePathname } from 'next/navigation'
import { MobileMenuButton } from './AdminSidebar'

const getPageTitle = (pathname: string) => {
  if (pathname.includes('/dashboard')) return 'Dashboard'
  if (pathname.includes('/projects')) return 'Projects'
  if (pathname.includes('/submissions')) return 'Contact Submissions'
  return 'Admin Panel'
}

export default function AdminHeader() {
  const pathname = usePathname()

  return (
    <div className='sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white/95 backdrop-blur-sm px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8'>
      {/* Mobile menu button */}
      <MobileMenuButton />

      <div className='flex flex-1 gap-x-4 self-stretch lg:gap-x-6'>
        <div className='flex flex-1 items-center'>
          <h1 className='text-lg sm:text-xl font-semibold text-gray-900 truncate'>
            {getPageTitle(pathname)}
          </h1>
        </div>

        <div className='flex items-center gap-x-4 lg:gap-x-6'>
          {/* Mobile Search Button */}
          <button className='lg:hidden p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-200 active:scale-95'>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>

          {/* Mobile Notifications Button */}
          <button className='lg:hidden p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-200 active:scale-95 relative'>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 17h5l-5 5v-5zM10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 2.485 4.426a.75.75 0 1 0-1.06 1.06L6.417 10.477.908 15.986a2.25 2.25 0 0 0 3.18 3.18l5.509-5.509 4.99 4.99a.75.75 0 1 0 1.06-1.06L10.657 12.587 15.58 7.664c.07-.07.15-.094.022-.022L15.5 7.5l.08-.08c.65-.65 1.02-1.54 1.02-2.47a3.5 3.5 0 0 0-7 0c0 .93.37 1.82 1.02 2.47L15.5 7.5z'
              />
            </svg>
            {/* Notification badge */}
            <div className='absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center'>
              3
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
