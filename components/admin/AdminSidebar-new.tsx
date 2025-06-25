'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

const navigation = [
  {
    name: 'Dashboard',
    href: '/admin/dashboard',
    icon: (props: any) => (
      <svg {...props} fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
        />
      </svg>
    ),
    description: 'Overview & Analytics',
  },
  {
    name: 'Projects',
    href: '/admin/projects',
    icon: (props: any) => (
      <svg {...props} fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
        />
      </svg>
    ),
    description: 'Manage Portfolio',
  },
  {
    name: 'Submissions',
    href: '/admin/submissions',
    icon: (props: any) => (
      <svg {...props} fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
        />
      </svg>
    ),
    description: 'Contact Inquiries',
  },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
      <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-6 pb-4 border-r border-slate-700/50'>
        {/* Logo Section */}
        <motion.div
          className='flex h-20 shrink-0 items-center'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <div className='flex items-center space-x-3'>
            <div className='w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center'>
              <svg
                className='w-6 h-6 text-white'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.001 3.001 0 01-.621-1.72c0-.694.194-1.344.534-1.901.34-.557.827-1.002 1.413-1.295'
                />
              </svg>
            </div>
            <div>
              <h1 className='text-white text-lg font-bold'>SIDIKOFF</h1>
              <p className='text-slate-400 text-xs'>Admin Panel</p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <nav className='flex flex-1 flex-col'>
          <ul role='list' className='flex flex-1 flex-col gap-y-2'>
            <li>
              <div className='text-xs font-semibold leading-6 text-slate-400 mb-3'>NAVIGATION</div>
              <ul role='list' className='space-y-1'>
                {navigation.map((item, index) => {
                  const isActive = pathname.startsWith(item.href)
                  return (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}>
                      <Link
                        href={item.href}
                        className={clsx(
                          'group flex gap-x-3 rounded-lg p-3 text-sm leading-6 font-medium transition-all duration-200 relative',
                          isActive
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                        )}>
                        {isActive && (
                          <motion.div
                            className='absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg'
                            layoutId='activeTab'
                            initial={false}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                          />
                        )}
                        <div className='relative flex items-center gap-x-3'>
                          <item.icon className='h-5 w-5 shrink-0' aria-hidden='true' />
                          <div>
                            <div className='font-medium'>{item.name}</div>
                            <div
                              className={clsx(
                                'text-xs transition-colors',
                                isActive
                                  ? 'text-white/80'
                                  : 'text-slate-400 group-hover:text-slate-300'
                              )}>
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </li>

            {/* Footer */}
            <li className='mt-auto'>
              <div className='bg-slate-800/50 rounded-lg p-4 border border-slate-700/50'>
                <div className='flex items-center space-x-3'>
                  <div className='w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center'>
                    <span className='text-white text-sm font-bold'>S</span>
                  </div>
                  <div>
                    <p className='text-white text-sm font-medium'>Sardorbek SIDIKOV</p>
                    <p className='text-slate-400 text-xs'>Admin</p>
                  </div>
                </div>
                <Link
                  href='/api/admin/logout'
                  className='mt-3 w-full flex items-center justify-center gap-x-2 rounded-md bg-slate-700/50 px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors'>
                  <svg
                    className='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
                    />
                  </svg>
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
