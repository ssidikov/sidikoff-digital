export const runtime = 'nodejs'

import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/utils/supabase/server'
import { sendUserConfirmation, sendAdminNotification, type ContactSubmission } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message, projectType, budget, timeline } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 })
    }

    const supabase = createAdminClient()

    // Insert the submission into the database
    const { data: submission, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          phone: phone || null,
          company: company || null,
          message,
          project_type: projectType || null,
          budget: budget || null,
          timeline: timeline || null,
          status: 'new',
          priority: 'medium',
        },
      ])
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 })
    }

    // Prepare email data
    const emailData: ContactSubmission = {
      name,
      email,
      phone: phone || undefined,
      company: company || undefined,
      message,
      projectType: projectType || undefined,
      budget: budget || undefined,
      timeline: timeline || undefined,
      submittedAt: new Date().toISOString(),
    }

    // Send emails (don't block the response if emails fail)
    const emailPromise = Promise.all([sendUserConfirmation(emailData), sendAdminNotification(emailData)])
      .then(([userResult, adminResult]) => {
        console.log('=== EMAIL RESULTS ===')
        console.log('User confirmation email:', userResult.success ? '✅ SENT' : '❌ FAILED')
        if (userResult.error) console.log('User email error:', userResult.error)
        if (userResult.details) console.log('User email details:', userResult.details)
        console.log('Admin notification email:', adminResult.success ? '✅ SENT' : '❌ FAILED')
        if (adminResult.error) console.log('Admin email error:', adminResult.error)
        if (adminResult.details) console.log('Admin email details:', adminResult.details)
        console.log('Admin email sent to: s.sidikoff@gmail.com')
        console.log('=== END EMAIL RESULTS ===')
        return { userResult, adminResult }
      })
      .catch((emailError) => {
        console.error('Email sending error:', emailError)
        console.error('Email error stack:', emailError.stack)
        return { error: emailError }
      })

    // In development, wait for emails to complete for better debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('🔧 [DEV] Waiting for emails to complete...')
      const emailResults = await emailPromise
      console.log('🔧 [DEV] Email results:', emailResults)
    } else {
      // In production, don't wait but still log the promise
      emailPromise.then(results => {
        console.log('📧 [PROD] Email sending completed:', results)
      })
    }

    return NextResponse.json({
      success: true,
      message:
        'Your message has been sent successfully! You will receive a confirmation email shortly.',
      submission: submission,
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
