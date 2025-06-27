import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/utils/supabase/server'
import { sendUserConfirmation, sendAdminNotification, type ContactSubmission } from '@/lib/email'
import { sendNotificationToAdmins } from '@/lib/push-notifications'
import fs from 'fs'
import path from 'path'

// Function to update submission counter for real-time monitoring
function updateSubmissionCounter() {
  try {
    const dataDir = path.join(process.cwd(), 'data')
    const counterFile = path.join(dataDir, 'submission-counter.json')
    
    // Ensure data directory exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }
    
    // Read current count or start at 0
    let currentCount = 0
    if (fs.existsSync(counterFile)) {
      try {
        const data = JSON.parse(fs.readFileSync(counterFile, 'utf-8'))
        currentCount = data.count || 0
      } catch {
        console.log('Counter file corrupted, resetting to 0')
      }
    }
    
    // Increment and save
    currentCount++
    fs.writeFileSync(counterFile, JSON.stringify({
      count: currentCount,
      lastUpdate: new Date().toISOString()
    }, null, 2))
    
    console.log(`📊 Submission counter updated: ${currentCount}`)
    return currentCount
  } catch (error) {
    console.error('Failed to update submission counter:', error)
    return 0
  }
}

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

    // Send emails (wait for completion to see full logs)
    console.log('📧 Starting email sending process...')
    try {
      const [userResult, adminResult] = await Promise.all([
        sendUserConfirmation(emailData),
        sendAdminNotification(emailData),
      ])

      console.log('=== EMAIL RESULTS ===')
      console.log('User confirmation email:', userResult.success ? '✅ SENT' : '❌ FAILED')
      if (userResult.error) console.log('User email error:', userResult.error)
      if (userResult.messageId) console.log('User email message ID:', userResult.messageId)

      console.log('Admin notification email:', adminResult.success ? '✅ SENT' : '❌ FAILED')
      if (adminResult.error) console.log('Admin email error:', adminResult.error)
      if (adminResult.messageId) console.log('Admin email message ID:', adminResult.messageId)

      console.log('Admin email sent to:', process.env.EMAIL_TO || 's.sidikoff@gmail.com')
      console.log('=== END EMAIL RESULTS ===')
    } catch (emailError) {
      console.error('❌ Email sending process failed:', emailError)
    }

    // Update submission counter for real-time monitoring
    const submissionNumber = updateSubmissionCounter()

    // Send push notification to admins immediately
    try {
      await sendNotificationToAdmins({
        title: '📨 New Contact Submission',
        body: `From ${name}: ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}`,
        type: 'new_submission',
        data: {
          submissionId: submission.id,
          submissionNumber,
          senderName: name,
          senderEmail: email,
          viewUrl: `/admin/submissions?highlight=${submission.id}`,
          timestamp: new Date().toISOString(),
          urgent: budget && budget.includes('urgent') ? true : false
        },
        requireInteraction: true, // Keep notification visible on Android
      })
      console.log(`✅ Push notification sent to admins for submission #${submissionNumber}`)
    } catch (notificationError) {
      console.error('❌ Failed to send push notification:', notificationError)
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
