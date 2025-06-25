import { Metadata } from 'next'
import PasswordChangeForm from '@/components/admin/PasswordChangeForm'
import NotificationSettings from '@/components/admin/NotificationSettings'
import { Settings, Shield, User, Bell } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Settings - SIDIKOFF Admin',
  description: 'Admin settings and account management',
}

export const dynamic = 'force-dynamic'

export default function AdminSettingsPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-8'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Page Header */}
        <div className='mb-8'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='p-2 bg-indigo-100 rounded-lg'>
              <Settings className='w-6 h-6 text-indigo-600' />
            </div>
            <h1 className='text-3xl font-bold text-gray-900'>Settings</h1>
          </div>
          <p className='text-gray-600'>Manage your account settings and security preferences.</p>
        </div>

        {/* Settings Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Sidebar Navigation */}
          <div className='lg:col-span-1'>
            <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
              <div className='p-4 bg-gradient-to-r from-indigo-500 to-purple-600'>
                <h3 className='text-lg font-semibold text-white'>Account Settings</h3>
              </div>
              <nav className='p-2'>
                <a
                  href='#security'
                  className='flex items-center gap-3 px-3 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg border border-indigo-200'>
                  <Shield className='w-4 h-4' />
                  Security
                </a>
                <a
                  href='#profile'
                  className='flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg mt-1 opacity-50 cursor-not-allowed'>
                  <User className='w-4 h-4' />
                  Profile (Coming Soon)
                </a>
                <a
                  href='#notifications'
                  className='flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg mt-1'>
                  <Bell className='w-4 h-4' />
                  Notifications
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className='lg:col-span-2'>
            <div id='security' className='space-y-6'>
              {/* Security Section */}
              <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
                <div className='p-6 border-b border-gray-200'>
                  <div className='flex items-center gap-3'>
                    <div className='p-2 bg-orange-100 rounded-lg'>
                      <Shield className='w-5 h-5 text-orange-600' />
                    </div>
                    <div>
                      <h2 className='text-xl font-semibold text-gray-900'>Security Settings</h2>
                      <p className='text-sm text-gray-600 mt-1'>
                        Manage your account security and password
                      </p>
                    </div>
                  </div>
                </div>
                <div className='p-6'>
                  <PasswordChangeForm />
                </div>
              </div>

              {/* Notifications Section */}
              <div
                id='notifications'
                className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
                <div className='p-6 border-b border-gray-200'>
                  <div className='flex items-center gap-3'>
                    <div className='p-2 bg-blue-100 rounded-lg'>
                      <Bell className='w-5 h-5 text-blue-600' />
                    </div>
                    <div>
                      <h2 className='text-xl font-semibold text-gray-900'>Notification Settings</h2>
                      <p className='text-sm text-gray-600 mt-1'>
                        Configure push notifications and PWA settings
                      </p>
                    </div>
                  </div>
                </div>
                <div className='p-6'>
                  <NotificationSettings />
                </div>
              </div>

              {/* Security Tips */}
              <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6'>
                <h3 className='text-lg font-semibold text-blue-900 mb-3'>Security Tips</h3>
                <ul className='space-y-2 text-sm text-blue-800'>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0'></div>
                    Use a unique password that is at least 8 characters long
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0'></div>
                    Include uppercase, lowercase, numbers, and special characters
                  </li>
                  <li className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0'></div>
                    Change your password regularly for better security
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
