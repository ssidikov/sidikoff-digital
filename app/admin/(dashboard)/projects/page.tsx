import { createAdminClient } from '@/utils/supabase/server'
import { requireAdminAuth } from '@/lib/admin-auth-server'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function AdminProjects() {
  await requireAdminAuth()
  const supabase = createAdminClient()

  // Get projects data
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching projects:', error)
    return <div>Error loading projects</div>
  }

  return (
    <div className="space-y-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-bold leading-6 text-gray-900">Projects</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage your portfolio projects including payment status and project details.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link
            href="/admin/projects/new"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add project
          </Link>
        </div>
      </div>

      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
        <div className="px-4 py-6 sm:p-8">
          <div className="flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                        Title
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Status
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Payment
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Featured
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Date
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {projects?.map((project) => (
                      <tr key={project.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                          <div className="font-medium text-gray-900">{project.title}</div>
                          <div className="text-gray-500">{project.description.substring(0, 100)}...</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                            project.status === 'published' 
                              ? 'bg-green-50 text-green-700 ring-green-600/20' 
                              : 'bg-yellow-50 text-yellow-800 ring-yellow-600/20'
                          }`}>
                            {project.status}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                            project.payment_status === 'completed' ? 'bg-green-50 text-green-700 ring-green-600/20' :
                            project.payment_status === 'pending' ? 'bg-yellow-50 text-yellow-800 ring-yellow-600/20' :
                            project.payment_status === 'partial' ? 'bg-blue-50 text-blue-700 ring-blue-600/20' :
                            project.payment_status === 'free' ? 'bg-purple-50 text-purple-700 ring-purple-600/20' :
                            project.payment_status === 'overdue' ? 'bg-red-50 text-red-700 ring-red-600/20' :
                            'bg-gray-50 text-gray-700 ring-gray-600/20'
                          }`}>
                            {project.payment_status}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {project.featured ? (
                            <span className="text-yellow-500">★</span>
                          ) : (
                            <span className="text-gray-300">☆</span>
                          )}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {new Date(project.created_at).toLocaleDateString()}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                          <Link
                            href={`/admin/projects/${project.id}/edit`}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit<span className="sr-only">, {project.title}</span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {(!projects || projects.length === 0) && (
                  <div className="text-center py-12">
                    <h3 className="mt-4 text-sm font-medium text-gray-900">No projects</h3>
                    <p className="mt-2 text-sm text-gray-500">Get started by creating a new project.</p>
                    <div className="mt-6">
                      <Link
                        href="/admin/projects/new"
                        className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Add project
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}