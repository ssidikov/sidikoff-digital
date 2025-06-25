export const runtime = 'nodejs'

import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/utils/supabase/server'
import { 
  sendUserConfirmationAlternative, 
  sendAdminNotificationAlternative, 
  type ContactSubmission 
} from '@/lib/email-alternative'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message, projectType, budget, timeline } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 })
    }

    console.log('📧 [CONTACT ALT] Starting contact form submission with alternative email system...')

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

    // Send emails using alternative system
    console.log('📧 [CONTACT ALT] Sending emails via alternative system...')
    
    const emailPromise = Promise.all([
      sendUserConfirmationAlternative(emailData), 
      sendAdminNotificationAlternative(emailData)
    ])
      .then(([userResult, adminResult]) => {
        console.log('=== ALTERNATIVE EMAIL RESULTS ===')
        console.log('User confirmation email:', userResult.success ? '✅ SENT' : '❌ FAILED')
        console.log('User email method:', userResult.method)
        if (userResult.error) console.log('User email error:', userResult.error)
        
        console.log('Admin notification email:', adminResult.success ? '✅ SENT' : '❌ FAILED')
        console.log('Admin email method:', adminResult.method)
        if (adminResult.error) console.log('Admin email error:', adminResult.error)
        console.log('Admin email sent to: s.sidikoff@gmail.com')
        console.log('=== END ALTERNATIVE EMAIL RESULTS ===')
        return { userResult, adminResult }
      })
      .catch((emailError) => {
        console.error('Alternative email sending error:', emailError)
        return { error: emailError }
      })

    // Always wait for emails in this alternative approach
    console.log('📧 [CONTACT ALT] Waiting for alternative emails to complete...')
    const emailResults = await emailPromise
    console.log('📧 [CONTACT ALT] Alternative email results:', emailResults)

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully using alternative email system!',
      submission: submission,
      emailResults: emailResults,
    })
    
  } catch (error) {
    console.error('Contact form alternative error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
