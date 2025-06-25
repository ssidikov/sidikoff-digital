'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Project {
  id: number
  title: string
  description?: string
  image_url?: string
  project_url?: string
  github_url?: string
  technologies?: string[]
  category: string
  status: string
  featured: boolean
  created_at: string
  updated_at: string
}

interface ProjectActionsProps {
  project: Project
}

export default function ProjectActions({ project }: ProjectActionsProps) {
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this project?')) {
      return
    }

    setIsDeleting(true)
    try {
      const response = await fetch(`/api/admin/projects/${project.id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        router.refresh()
      } else {
        alert('Failed to delete project')
      }
    } catch (error) {
      console.error('Delete error:', error)
      alert('Failed to delete project')
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Link
        href={`/admin/projects/${project.id}/edit`}
        className="text-indigo-600 hover:text-indigo-900"
      >
        Edit
      </Link>
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="text-red-600 hover:text-red-900 disabled:opacity-50"
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  )
}
