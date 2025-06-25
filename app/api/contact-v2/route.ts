import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/utils/supabase/server'
import { sendUserConfirmation, sendAdminNotification, type ContactSubmission } from '@/lib/email'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  const requestStart = Date.now()
  console.log('📨 [CONTACT API] Starting contact form submission...')
  
  try {
    const body = await request.json()
    const { name, email, phone, company, message, projectType, budget, timeline } = body

    console.log('📨 [CONTACT API] Received submission from:', email)

    // Basic validation
    if (!name || !email || !message) {
      console.error('❌ [CONTACT API] Validation failed: missing required fields')
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 })
    }

    const supabase = createAdminClient()

    // Insert the submission into the database
    console.log('💾 [CONTACT API] Saving to database...')
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
      console.error('❌ [CONTACT API] Database error:', error)
      return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 })
    }

    console.log('✅ [CONTACT API] Saved to database successfully')

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

    // Send emails with better error handling
    console.log('📧 [CONTACT API] Starting email sending process...')
    
    try {
      // Send user confirmation first
      console.log('📧 [CONTACT API] Sending user confirmation email...')
      const userEmailPromise = sendUserConfirmation(emailData)
      
      // Send admin notification
      console.log('📧 [CONTACT API] Sending admin notification email...')
      const adminEmailPromise = sendAdminNotification(emailData)

      // Wait for both emails with a reasonable timeout
      const emailResults = await Promise.allSettled([
        Promise.race([
          userEmailPromise,
          new Promise((_, reject) => 
            setTimeout(() => reject(new Error('User email timeout')), 12000)
          )
        ]),
        Promise.race([
          adminEmailPromise, 
          new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Admin email timeout')), 12000)
          )
        ])
      ])

      // Log email results
      const [userResult, adminResult] = emailResults
      
      console.log('=== EMAIL RESULTS ===')
      if (userResult.status === 'fulfilled') {
        const result = userResult.value as { success: boolean; error?: string }
        console.log('User confirmation email:', result.success ? '✅ SENT' : '❌ FAILED')
        if (!result.success) console.log('User email error:', result.error)
      } else {
        console.log('User confirmation email: ❌ FAILED (Promise rejected)')
        console.log('User email error:', userResult.reason)
      }
      
      if (adminResult.status === 'fulfilled') {
        const result = adminResult.value as { success: boolean; error?: string }
        console.log('Admin notification email:', result.success ? '✅ SENT' : '❌ FAILED')
        if (!result.success) console.log('Admin email error:', result.error)
      } else {
        console.log('Admin notification email: ❌ FAILED (Promise rejected)')
        console.log('Admin email error:', adminResult.reason)
      }
      console.log('=== END EMAIL RESULTS ===')

    } catch (emailError) {
      console.error('❌ [CONTACT API] Email sending process failed:', emailError)
      // Don't fail the whole request just because emails failed
    }

    const totalDuration = Date.now() - requestStart
    console.log(`✅ [CONTACT API] Request completed in ${totalDuration}ms`)

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully! You will receive a confirmation email shortly.',
      submission: submission,
    })
    
  } catch (error) {
    const totalDuration = Date.now() - requestStart
    console.error(`❌ [CONTACT API] Request failed after ${totalDuration}ms:`, error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
