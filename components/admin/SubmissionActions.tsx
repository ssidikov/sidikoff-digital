'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Submission {
  id: number
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  project_type?: string
  budget?: string
  timeline?: string
  status: string
  priority: string
  notes?: string
  created_at: string
  updated_at: string
}

interface SubmissionActionsProps {
  submission: Submission
}

export default function SubmissionActions({ submission }: SubmissionActionsProps) {
  const [isUpdating, setIsUpdating] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const router = useRouter()

  const updateStatus = async (newStatus: string) => {
    setIsUpdating(true)
    try {
      const response = await fetch(`/api/admin/submissions/${submission.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      })

      if (response.ok) {
        router.refresh()
      } else {
        alert('Failed to update status')
      }
    } catch (error) {
      console.error('Update error:', error)
      alert('Failed to update status')
    } finally {
      setIsUpdating(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this submission?')) {
      return
    }

    try {
      const response = await fetch(`/api/admin/submissions/${submission.id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        router.refresh()
      } else {
        alert('Failed to delete submission')
      }
    } catch (error) {
      console.error('Delete error:', error)
      alert('Failed to delete submission')
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="text-indigo-600 hover:text-indigo-900"
      >
        {showDetails ? 'Hide' : 'View'}
      </button>
      
      <select
        value={submission.status}
        onChange={(e) => updateStatus(e.target.value)}
        disabled={isUpdating}
        className="text-sm border-gray-300 rounded-md"
      >
        <option value="new">New</option>
        <option value="contacted">Contacted</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
        <option value="archived">Archived</option>
      </select>

      <button
        onClick={handleDelete}
        className="text-red-600 hover:text-red-900"
      >
        Delete
      </button>

      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium">Submission Details</h3>
              <button
                onClick={() => setShowDetails(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <strong>Name:</strong> {submission.name}
              </div>
              <div>
                <strong>Email:</strong> {submission.email}
              </div>
              {submission.phone && (
                <div>
                  <strong>Phone:</strong> {submission.phone}
                </div>
              )}
              {submission.company && (
                <div>
                  <strong>Company:</strong> {submission.company}
                </div>
              )}
              <div>
                <strong>Project Type:</strong> {submission.project_type || 'N/A'}
              </div>
              <div>
                <strong>Budget:</strong> {submission.budget || 'N/A'}
              </div>
              <div>
                <strong>Timeline:</strong> {submission.timeline || 'N/A'}
              </div>
              <div>
                <strong>Message:</strong>
                <p className="mt-1 text-gray-700">{submission.message}</p>
              </div>
              {submission.notes && (
                <div>
                  <strong>Notes:</strong>
                  <p className="mt-1 text-gray-700">{submission.notes}</p>
                </div>
              )}
              <div className="text-sm text-gray-500">
                Submitted: {new Date(submission.created_at).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
