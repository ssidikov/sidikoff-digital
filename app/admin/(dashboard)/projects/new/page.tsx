import { requireAdminAuth } from '@/lib/admin-auth-server'
import ProjectForm from '@/components/admin/ProjectForm'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function NewProject() {
  await requireAdminAuth()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto">
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <div>
                  <Link 
                    href="/admin/dashboard" 
                    className="text-gray-400 hover:text-gray-500 transition-colors"
                  >
                    <svg 
                      className="h-5 w-5" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <span className="sr-only">Dashboard</span>
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg 
                    className="h-5 w-5 text-gray-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link 
                    href="/admin/projects" 
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Projects
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg 
                    className="h-5 w-5 text-gray-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-4 text-sm font-medium text-gray-900">
                    New Project
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
              <svg 
                className="w-8 h-8 text-indigo-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Create New Project
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Add a new project to your portfolio with all the necessary details
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className="px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600">
              <h2 className="text-2xl font-semibold text-white">
                Project Information
              </h2>
              <p className="text-indigo-100 mt-1">
                Fill in all fields to create your project
              </p>
            </div>
            <div className="p-8">
              <ProjectForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
