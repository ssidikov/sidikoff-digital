import { createAdminClient } from '@/utils/supabase/server'
import { requireAdminAuth } from '@/lib/admin-auth-server'
import { notFound } from 'next/navigation'
import BackButton from '@/components/admin/BackButton'

interface ViewSubmissionProps {
  params: Promise<{ id: string }>
}

export const dynamic = 'force-dynamic'

export default async function ViewSubmission({ params }: ViewSubmissionProps) {
  await requireAdminAuth()
  const { id } = await params
  const supabase = createAdminClient()

  const { data: submission, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !submission) {
    notFound()
  }

  return (
    <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'>
      {/* Back Button */}
      <div className='mb-6'>
        <BackButton href='/admin/submissions' />
      </div>

      <div className='bg-white rounded-lg shadow p-8'>
        <h1 className='text-2xl font-semibold mb-4 text-gray-900'>Submission Details</h1>
        <div className='space-y-4'>
          <div>
            <strong className='text-gray-700'>Name:</strong>{' '}
            <span className='text-gray-900'>{submission.name}</span>
          </div>
          <div>
            <strong className='text-gray-700'>Email:</strong>{' '}
            <span className='text-gray-900'>{submission.email}</span>
          </div>
          {submission.phone && (
            <div>
              <strong className='text-gray-700'>Phone:</strong>{' '}
              <span className='text-gray-900'>{submission.phone}</span>
            </div>
          )}
          {submission.company && (
            <div>
              <strong className='text-gray-700'>Company:</strong>{' '}
              <span className='text-gray-900'>{submission.company}</span>
            </div>
          )}
          <div>
            <strong className='text-gray-700'>Project Type:</strong>{' '}
            <span className='text-gray-900'>{submission.project_type || 'N/A'}</span>
          </div>
          <div>
            <strong className='text-gray-700'>Budget:</strong>{' '}
            <span className='text-gray-900'>{submission.budget || 'N/A'}</span>
          </div>
          <div>
            <strong className='text-gray-700'>Timeline:</strong>{' '}
            <span className='text-gray-900'>{submission.timeline || 'N/A'}</span>
          </div>
          <div>
            <strong className='text-gray-700'>Status:</strong>{' '}
            <span className='text-gray-900'>{submission.status}</span>
          </div>
          <div>
            <strong className='text-gray-700'>Priority:</strong>{' '}
            <span className='text-gray-900'>{submission.priority}</span>
          </div>
          <div>
            <strong className='text-gray-700'>Message:</strong>
            <p className='mt-1 text-gray-900'>{submission.message}</p>
          </div>
          {submission.notes && (
            <div>
              <strong className='text-gray-700'>Notes:</strong>
              <p className='mt-1 text-gray-900'>{submission.notes}</p>
            </div>
          )}
          <div className='text-sm text-gray-500'>
            Submitted: {new Date(submission.created_at).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  )
}
