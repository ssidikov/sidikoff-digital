import nodemailer from 'nodemailer'

/**
 * SIDIKOFF Digital Email System
<<<<<<< Updated upstream
 * 
=======
 *
>>>>>>> Stashed changes
 * Completely rewritten email system optimized for Vercel serverless deployment.
 * Features:
 * - Stateless design (no persistent connections)
 * - Comprehensive error handling and logging
 * - Production-ready configuration
 * - All emails use s.sidikoff@gmail.com as admin address
 */

export interface ContactSubmission {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  projectType?: string
  budget?: string
  timeline?: string
  submittedAt: string
}

interface EmailResult {
  success: boolean
  messageId?: string
  error?: string
  details?: Record<string, unknown>
}

// Admin email address (as specified in requirements)
const ADMIN_EMAIL = 's.sidikoff@gmail.com'

/**
 * Send email with comprehensive error handling and logging
 */
export const sendEmail = async (
  to: string,
  subject: string,
  htmlContent: string,
  textContent: string
): Promise<EmailResult> => {
  const startTime = Date.now()
  const timestamp = new Date().toISOString()
<<<<<<< Updated upstream
  
=======

>>>>>>> Stashed changes
  console.log(`📧 [SEND EMAIL] ${timestamp} - Starting email send`)
  console.log(`📧 [SEND EMAIL] To: ${to}`)
  console.log(`📧 [SEND EMAIL] Subject: ${subject}`)

  let transporter: nodemailer.Transporter | null = null

  try {
    // Validate email config first
    const config = {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      password: process.env.SMTP_PASSWORD,
    }

    const missing = Object.entries(config)
      .filter(([, value]) => !value)
      .map(([key]) => key)

    if (missing.length > 0) {
      const errorMsg = `Missing email environment variables: ${missing.join(', ')}`
      console.error('❌ [SEND EMAIL]', errorMsg)
      return { success: false, error: errorMsg }
    }

    const port = parseInt(config.port!, 10)
    if (isNaN(port) || port <= 0) {
      const errorMsg = `Invalid SMTP_PORT: ${config.port}`
      console.error('❌ [SEND EMAIL]', errorMsg)
      return { success: false, error: errorMsg }
    }

    // Create fresh transporter for this request
    console.log('🔧 [SEND EMAIL] Creating transporter...')
<<<<<<< Updated upstream
    
=======

>>>>>>> Stashed changes
    // Ultra-aggressive Gmail configuration for Vercel (no hanging)
    transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use STARTTLS instead of SSL
      auth: {
        user: config.user!,
        pass: config.password!,
      },
      // ULTRA aggressive timeouts for Vercel (fail fast, no hanging)
      pool: false,
      maxConnections: 1,
      maxMessages: 1,
<<<<<<< Updated upstream
      connectionTimeout: 3000,   // 3 seconds max (reduced from 6)
      greetingTimeout: 2000,     // 2 seconds max (reduced from 3)
      socketTimeout: 3000,       // 3 seconds max (reduced from 6)
=======
      connectionTimeout: 3000, // 3 seconds max (reduced from 6)
      greetingTimeout: 2000, // 2 seconds max (reduced from 3)
      socketTimeout: 3000, // 3 seconds max (reduced from 6)
>>>>>>> Stashed changes
      // Force close connections aggressively
      opportunisticTLS: true,
      // Minimal TLS for compatibility
      tls: {
        rejectUnauthorized: false,
        ciphers: 'ALL',
      },
      // Force immediate connection close
      ignoreTLS: false,
      requireTLS: true,
      logger: false,
      debug: false,
    } as nodemailer.TransportOptions)

    // Prepare mail options
    const mailOptions = {
      from: `"SIDIKOFF Digital" <${config.user}>`,
      to: to,
      subject: subject,
      html: htmlContent,
      text: textContent,
      headers: {
        'X-Mailer': 'SIDIKOFF Digital Contact System v2.0',
        'X-Priority': '3',
        'Reply-To': ADMIN_EMAIL,
      },
    }

    console.log('📧 [SEND EMAIL] Sending email...')
    console.log('📧 [SEND EMAIL] Mail options prepared:', {
      from: mailOptions.from,
      to: mailOptions.to,
<<<<<<< Updated upstream
      subject: mailOptions.subject
=======
      subject: mailOptions.subject,
>>>>>>> Stashed changes
    })

    // Send with ultra-aggressive timeout protection (crucial for Vercel)
    console.log('📧 [SEND EMAIL] Starting sendMail operation...')
<<<<<<< Updated upstream
    
    let timeoutId: NodeJS.Timeout | null = null
    let isCompleted = false
    
=======

    let timeoutId: NodeJS.Timeout | null = null
    let isCompleted = false

>>>>>>> Stashed changes
    try {
      const result = await new Promise<nodemailer.SentMessageInfo>((resolve, reject) => {
        // Set up the timeout FIRST
        timeoutId = setTimeout(() => {
          if (!isCompleted) {
            isCompleted = true
            console.log('⏰ [SEND EMAIL] TIMEOUT: Force rejecting after 3 seconds')
            // Force close the transporter on timeout
            if (transporter) {
              try {
                transporter.close()
                console.log('🔧 [SEND EMAIL] Transporter force-closed on timeout')
              } catch (e) {
                console.warn('⚠️ [SEND EMAIL] Error force-closing transporter:', e)
              }
            }
            reject(new Error('Email send timeout after 3 seconds (forced)'))
          }
        }, 3000) // Reduced to 3 seconds

        console.log('📧 [SEND EMAIL] Waiting for email result...')
<<<<<<< Updated upstream
        
=======

>>>>>>> Stashed changes
        // Start the send operation
        if (!transporter) {
          reject(new Error('Transporter not initialized'))
          return
        }
<<<<<<< Updated upstream
        
        transporter.sendMail(mailOptions)
=======

        transporter
          .sendMail(mailOptions)
>>>>>>> Stashed changes
          .then((result) => {
            if (!isCompleted) {
              isCompleted = true
              if (timeoutId) clearTimeout(timeoutId)
              console.log('✅ [SEND EMAIL] Send operation completed before timeout')
              resolve(result)
            }
          })
          .catch((error) => {
            if (!isCompleted) {
              isCompleted = true
              if (timeoutId) clearTimeout(timeoutId)
              console.log('❌ [SEND EMAIL] Send operation failed before timeout')
              reject(error)
            }
          })
      })

      const duration = Date.now() - startTime
      console.log(`✅ [SEND EMAIL] Email sent successfully in ${duration}ms`)
      console.log('📧 [SEND EMAIL] Message ID:', result.messageId)
      console.log('📧 [SEND EMAIL] Response:', result.response)

      // Log delivery details
      if (result.accepted?.length > 0) {
        console.log('✅ [SEND EMAIL] Accepted recipients:', result.accepted)
      }
      if (result.rejected?.length > 0) {
        console.log('⚠️ [SEND EMAIL] Rejected recipients:', result.rejected)
      }
      if (result.envelope) {
        console.log('📧 [SEND EMAIL] Envelope:', result.envelope)
      }

      return {
        success: true,
        messageId: result.messageId,
        details: {
          accepted: result.accepted,
          rejected: result.rejected,
          envelope: result.envelope,
          response: result.response,
          duration,
        },
      }
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
    } finally {
      // Clean up timeout if it's still active
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  } catch (error) {
    const duration = Date.now() - startTime
    console.error(`❌ [SEND EMAIL] Failed after ${duration}ms`)
    console.error('❌ [SEND EMAIL] Error:', error)

    if (error instanceof Error) {
      console.error('❌ [SEND EMAIL] Error message:', error.message)
      console.error('❌ [SEND EMAIL] Error stack:', error.stack)
    }

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown email error',
      details: { duration, errorType: error?.constructor?.name || 'Unknown' },
    }
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  } finally {
    // Aggressively close the transporter to prevent hanging connections
    if (transporter) {
      try {
        // Force close with timeout
        const closePromise = new Promise<void>((resolve) => {
          transporter!.close()
          resolve()
        })
        const closeTimeout = new Promise<void>((resolve) => {
          setTimeout(() => {
            console.warn('⚠️ [SEND EMAIL] Transporter close timeout, forcing cleanup')
            resolve()
          }, 1000)
        })
<<<<<<< Updated upstream
        
=======

>>>>>>> Stashed changes
        await Promise.race([closePromise, closeTimeout])
        console.log('🔧 [SEND EMAIL] Transporter closed')
      } catch (closeError) {
        console.warn('⚠️ [SEND EMAIL] Error closing transporter:', closeError)
      }
    }
  }
}

// Generate user confirmation email content
const generateUserConfirmationEmail = (submission: ContactSubmission) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You - SIDIKOFF Digital</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; line-height: 1.6;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">SIDIKOFF DIGITAL</h1>
          <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 16px;">Web Development & Digital Solutions</p>
        </div>

        <!-- Main Content -->
        <div style="padding: 40px 30px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="display: inline-block; background-color: #10b981; color: white; padding: 12px 24px; border-radius: 25px; font-weight: 600; margin-bottom: 20px;">
              ✓ Request Received
            </div>
            <h2 style="color: #1f2937; margin: 0; font-size: 24px; font-weight: 700;">Thank You, ${submission.name}!</h2>
            <p style="color: #6b7280; margin: 15px 0 0 0; font-size: 16px;">Your project request has been successfully submitted.</p>
          </div>

          <!-- Request Summary -->
          <div style="background-color: #f9fafb; border-radius: 12px; padding: 25px; margin-bottom: 30px; border-left: 4px solid #667eea;">
            <h3 style="color: #374151; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">Request Summary</h3>
            
            <div style="margin-bottom: 15px;">
              <span style="color: #6b7280; font-weight: 500; display: inline-block; width: 100px;">Name:</span>
              <span style="color: #1f2937; font-weight: 600;">${submission.name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <span style="color: #6b7280; font-weight: 500; display: inline-block; width: 100px;">Email:</span>
              <span style="color: #1f2937;">${submission.email}</span>
            </div>
            
            ${submission.phone ? `
            <div style="margin-bottom: 15px;">
              <span style="color: #6b7280; font-weight: 500; display: inline-block; width: 100px;">Phone:</span>
              <span style="color: #1f2937;">${submission.phone}</span>
            </div>
            ` : ''}
            
            ${submission.company ? `
            <div style="margin-bottom: 15px;">
              <span style="color: #6b7280; font-weight: 500; display: inline-block; width: 100px;">Company:</span>
              <span style="color: #1f2937;">${submission.company}</span>
            </div>
            ` : ''}
            
            ${submission.projectType ? `
            <div style="margin-bottom: 15px;">
              <span style="color: #6b7280; font-weight: 500; display: inline-block; width: 100px;">Project Type:</span>
              <span style="color: #1f2937; background-color: #ddd6fe; padding: 4px 8px; border-radius: 6px; font-size: 14px;">${submission.projectType}</span>
            </div>
            ` : ''}
            
            <div style="margin-bottom: 0;">
              <span style="color: #6b7280; font-weight: 500; display: block; margin-bottom: 8px;">Message:</span>
              <div style="background-color: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
                <p style="color: #374151; margin: 0; white-space: pre-line;">${submission.message}</p>
              </div>
            </div>
          </div>

          <!-- Next Steps -->
          <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 12px; padding: 25px; margin-bottom: 30px;">
            <h3 style="color: #0f172a; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">📋 What Happens Next?</h3>
            
            <div style="margin-bottom: 15px;">
              <div style="display: flex; align-items: flex-start; margin-bottom: 10px;">
                <span style="background-color: #3b82f6; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 12px; flex-shrink: 0;">1</span>
                <span style="color: #374151; font-weight: 500;">We'll review your request within 24 hours</span>
              </div>
            </div>
            
            <div style="margin-bottom: 15px;">
              <div style="display: flex; align-items: flex-start; margin-bottom: 10px;">
                <span style="background-color: #3b82f6; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 12px; flex-shrink: 0;">2</span>
                <span style="color: #374151; font-weight: 500;">Schedule a free consultation call to discuss your project</span>
              </div>
            </div>
            
            <div style="margin-bottom: 0;">
              <div style="display: flex; align-items: flex-start;">
                <span style="background-color: #3b82f6; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 12px; flex-shrink: 0;">3</span>
                <span style="color: #374151; font-weight: 500;">Provide you with a detailed proposal and timeline</span>
              </div>
            </div>
          </div>

          <!-- Contact Info -->
          <div style="text-align: center; padding: 20px 0;">
            <p style="color: #6b7280; margin: 0 0 15px 0;">Need immediate assistance? Reach out to us:</p>
            <div style="margin-bottom: 10px;">
              <a href="mailto:${ADMIN_EMAIL}" style="color: #667eea; text-decoration: none; font-weight: 600;">📧 ${ADMIN_EMAIL}</a>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; margin: 0 0 10px 0; font-size: 14px;">
            This email was sent because you submitted a project request on our website.
          </p>
          <p style="color: #9ca3af; margin: 0; font-size: 12px;">
            SIDIKOFF Digital - Paris, France | 
            <a href="https://www.sidikoff.com" style="color: #667eea; text-decoration: none;">www.sidikoff.com</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `

  const text = `
Thank you for your project request, ${submission.name}!

Your request has been successfully submitted and we'll review it within 24 hours.

Request Summary:
- Name: ${submission.name}
- Email: ${submission.email}
${submission.phone ? `- Phone: ${submission.phone}` : ''}
${submission.company ? `- Company: ${submission.company}` : ''}
${submission.projectType ? `- Project Type: ${submission.projectType}` : ''}
- Message: ${submission.message}

What happens next:
1. We'll review your request within 24 hours
2. Schedule a free consultation call to discuss your project
3. Provide you with a detailed proposal and timeline

Need immediate assistance? Contact us:
Email: ${ADMIN_EMAIL}

Best regards,
SIDIKOFF Digital Team
  `

  return {
    subject: '✓ Your Project Request - SIDIKOFF Digital',
    html,
<<<<<<< Updated upstream
    text
=======
    text,
>>>>>>> Stashed changes
  }
}

// Generate admin notification email content
const generateAdminNotificationEmail = (submission: ContactSubmission) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Submission - SIDIKOFF Digital</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; line-height: 1.6;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); padding: 30px; text-align: center;">
          <div style="background-color: white; display: inline-block; padding: 12px; border-radius: 50%; margin-bottom: 15px;">
            <span style="font-size: 24px;">🚨</span>
          </div>
          <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 700;">New Contact Submission</h1>
          <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 14px;">SIDIKOFF Digital Admin Panel</p>
        </div>

        <!-- Main Content -->
        <div style="padding: 30px;">
          <div style="background-color: #fef2f2; border-left: 4px solid #dc2626; padding: 20px; margin-bottom: 25px; border-radius: 6px;">
            <h2 style="color: #dc2626; margin: 0 0 10px 0; font-size: 18px; font-weight: 600;">⚡ Action Required</h2>
            <p style="color: #7f1d1d; margin: 0; font-size: 14px;">A new contact form submission requires your attention.</p>
          </div>

          <!-- Submission Details -->
          <div style="background-color: #f9fafb; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
            <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">📋 Submission Details</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 500; width: 120px; vertical-align: top;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${submission.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 500; vertical-align: top;">Email:</td>
                <td style="padding: 8px 0;">
                  <a href="mailto:${submission.email}" style="color: #2563eb; text-decoration: none;">${submission.email}</a>
                </td>
              </tr>
              ${submission.phone ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 500; vertical-align: top;">Phone:</td>
                <td style="padding: 8px 0;">
                  <a href="tel:${submission.phone}" style="color: #2563eb; text-decoration: none;">${submission.phone}</a>
                </td>
              </tr>
              ` : ''}
              ${submission.company ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 500; vertical-align: top;">Company:</td>
                <td style="padding: 8px 0; color: #1f2937;">${submission.company}</td>
              </tr>
              ` : ''}
              ${submission.projectType ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 500; vertical-align: top;">Project Type:</td>
                <td style="padding: 8px 0;">
                  <span style="background-color: #ddd6fe; color: #5b21b6; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">${submission.projectType}</span>
                </td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 500; vertical-align: top;">Submitted:</td>
                <td style="padding: 8px 0; color: #1f2937;">${new Date(submission.submittedAt).toLocaleString()}</td>
              </tr>
            </table>
          </div>

          <!-- Message -->
          <div style="background-color: #f0f9ff; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
            <h3 style="color: #374151; margin: 0 0 10px 0; font-size: 16px; font-weight: 600;">💬 Message</h3>
            <div style="background-color: white; padding: 15px; border-radius: 6px; border: 1px solid #e0f2fe;">
              <p style="color: #374151; margin: 0; white-space: pre-line; font-size: 14px; line-height: 1.5;">${submission.message}</p>
            </div>
          </div>

          <!-- Quick Actions -->
          <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border-radius: 8px; padding: 20px; text-align: center;">
            <h3 style="color: #065f46; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">🚀 Quick Actions</h3>
            <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
<<<<<<< Updated upstream
              <a href="mailto:${submission.email}" style="background-color: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; display: inline-block;">Reply by Email</a>
              ${submission.phone ? `<a href="tel:${submission.phone}" style="background-color: #3b82f6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; display: inline-block;">Call Client</a>` : ''}
=======
              <a href="mailto:${
                submission.email
              }" style="background-color: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; display: inline-block;">Reply by Email</a>
              ${
                submission.phone
                  ? `<a href="tel:${submission.phone}" style="background-color: #3b82f6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; display: inline-block;">Call Client</a>`
                  : ''
              }
>>>>>>> Stashed changes
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; margin: 0; font-size: 12px;">
            This is an automated notification from SIDIKOFF Digital contact form.
          </p>
        </div>
      </div>
    </body>
    </html>
  `

  const text = `
NEW CONTACT FORM SUBMISSION

Client Details:
- Name: ${submission.name}
- Email: ${submission.email}
${submission.phone ? `- Phone: ${submission.phone}` : ''}
${submission.company ? `- Company: ${submission.company}` : ''}
${submission.projectType ? `- Project Type: ${submission.projectType}` : ''}
- Submitted: ${new Date(submission.submittedAt).toLocaleString()}

Message:
${submission.message}

Quick Actions:
- Reply: mailto:${submission.email}
${submission.phone ? `- Call: tel:${submission.phone}` : ''}

---
SIDIKOFF Digital Admin Notification
  `

  return {
<<<<<<< Updated upstream
    subject: `🚨 New Contact Submission: ${submission.name} - ${submission.projectType || 'General Inquiry'}`,
    html,
    text
=======
    subject: `🚨 New Contact Submission: ${submission.name} - ${
      submission.projectType || 'General Inquiry'
    }`,
    html,
    text,
>>>>>>> Stashed changes
  }
}

// Public functions for sending emails with fallback
export const sendUserConfirmation = async (submission: ContactSubmission) => {
  console.log('📧 [USER CONFIRMATION] Starting user confirmation email...')
  const emailContent = generateUserConfirmationEmail(submission)
<<<<<<< Updated upstream
  
=======

>>>>>>> Stashed changes
  const result = await sendEmailWithFallback(
    submission.email,
    emailContent.subject,
    emailContent.html,
    emailContent.text
  )
<<<<<<< Updated upstream
  
=======

>>>>>>> Stashed changes
  if (result.success) {
    console.log('✅ [USER CONFIRMATION] User confirmation email sent successfully')
  } else {
    console.error('❌ [USER CONFIRMATION] Failed to send user confirmation email:', result.error)
  }
<<<<<<< Updated upstream
  
  return result
}

export const sendAdminNotification = async (submission: ContactSubmission): Promise<EmailResult> => {
  console.log('📧 [ADMIN NOTIFICATION] Starting admin notification email...')
  console.log('📧 [ADMIN NOTIFICATION] Admin email:', ADMIN_EMAIL)
  
  const emailContent = generateAdminNotificationEmail(submission)
  
=======

  return result
}

export const sendAdminNotification = async (
  submission: ContactSubmission
): Promise<EmailResult> => {
  console.log('📧 [ADMIN NOTIFICATION] Starting admin notification email...')
  console.log('📧 [ADMIN NOTIFICATION] Admin email:', ADMIN_EMAIL)

  const emailContent = generateAdminNotificationEmail(submission)

>>>>>>> Stashed changes
  const result = await sendEmailWithFallback(
    ADMIN_EMAIL,
    emailContent.subject,
    emailContent.html,
    emailContent.text
  )
<<<<<<< Updated upstream
  
=======

>>>>>>> Stashed changes
  if (result.success) {
    console.log('✅ [ADMIN NOTIFICATION] Email sent successfully')
  } else {
    console.error('❌ [ADMIN NOTIFICATION] Failed to send email:', result.error)
  }
<<<<<<< Updated upstream
  
=======

>>>>>>> Stashed changes
  return result
}

/**
 * Test email configuration (for debugging)
 */
export const testEmailConfiguration = async (): Promise<EmailResult> => {
  console.log('🧪 [EMAIL TEST] Testing email configuration...')
<<<<<<< Updated upstream
  
=======

>>>>>>> Stashed changes
  try {
    const testSubmission: ContactSubmission = {
      name: 'Email System Test',
      email: ADMIN_EMAIL,
<<<<<<< Updated upstream
      message: 'This is a test email to verify the SIDIKOFF Digital email system is working correctly in production.',
      projectType: 'System Test',
      submittedAt: new Date().toISOString()
    }
    
    const result = await sendUserConfirmation(testSubmission)
    
=======
      message:
        'This is a test email to verify the SIDIKOFF Digital email system is working correctly in production.',
      projectType: 'System Test',
      submittedAt: new Date().toISOString(),
    }

    const result = await sendUserConfirmation(testSubmission)

>>>>>>> Stashed changes
    if (result.success) {
      console.log('✅ [EMAIL TEST] Email configuration test passed!')
      return { success: true, messageId: result.messageId, details: result.details }
    } else {
      console.error('❌ [EMAIL TEST] Email configuration test failed:', result.error)
      return { success: false, error: result.error }
    }
  } catch (error) {
    console.error('❌ [EMAIL TEST] Email test crashed:', error)
<<<<<<< Updated upstream
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown test error' 
=======
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown test error',
>>>>>>> Stashed changes
    }
  }
}

/**
 * Backup email function with alternative configuration
 * Uses different settings that might work better on Vercel
 */
export const sendEmailBackup = async (
  to: string,
  subject: string,
  htmlContent: string,
  textContent: string
): Promise<EmailResult> => {
  const startTime = Date.now()
  const timestamp = new Date().toISOString()
<<<<<<< Updated upstream
  
=======

>>>>>>> Stashed changes
  console.log(`🔄 [BACKUP EMAIL] ${timestamp} - Starting backup email send`)
  console.log(`🔄 [BACKUP EMAIL] To: ${to}`)
  console.log(`🔄 [BACKUP EMAIL] Subject: ${subject}`)

  let transporter: nodemailer.Transporter | null = null

  try {
    // Use alternative Gmail configuration optimized for serverless
    console.log('🔧 [BACKUP EMAIL] Creating alternative transporter...')
<<<<<<< Updated upstream
    
=======

>>>>>>> Stashed changes
    const config = {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      user: process.env.SMTP_USER,
      password: process.env.SMTP_PASSWORD,
    }

    if (!config.user || !config.password) {
      throw new Error('SMTP credentials not configured')
    }

    // Ultra-minimal configuration for Vercel compatibility
    transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: false,
      auth: {
        user: config.user,
        pass: config.password,
      },
      // Absolute minimal timeouts
      pool: false,
<<<<<<< Updated upstream
      connectionTimeout: 2000,   // 2 seconds
      greetingTimeout: 1500,     // 1.5 seconds  
      socketTimeout: 2000,       // 2 seconds
=======
      connectionTimeout: 2000, // 2 seconds
      greetingTimeout: 1500, // 1.5 seconds
      socketTimeout: 2000, // 2 seconds
>>>>>>> Stashed changes
      // Disable all extra features
      tls: {
        rejectUnauthorized: false,
      },
      dnsTimeout: 2000,
      logger: false,
      debug: false,
    } as nodemailer.TransportOptions)

    const mailOptions = {
      from: `"SIDIKOFF Digital" <${config.user}>`,
      to: to,
      subject: subject,
      html: htmlContent,
      text: textContent,
    }

    console.log('🔄 [BACKUP EMAIL] Sending with ultra-fast timeout...')

    let timeoutId: NodeJS.Timeout | null = null
    let isCompleted = false
<<<<<<< Updated upstream
    
=======

>>>>>>> Stashed changes
    try {
      const result = await new Promise<nodemailer.SentMessageInfo>((resolve, reject) => {
        // Set up the timeout FIRST (even more aggressive for backup)
        timeoutId = setTimeout(() => {
          if (!isCompleted) {
            isCompleted = true
            console.log('⏰ [BACKUP EMAIL] TIMEOUT: Force rejecting after 2 seconds')
            // Force close the transporter on timeout
            if (transporter) {
              try {
                transporter.close()
                console.log('🔧 [BACKUP EMAIL] Transporter force-closed on timeout')
              } catch (e) {
                console.warn('⚠️ [BACKUP EMAIL] Error force-closing transporter:', e)
              }
            }
            reject(new Error('Backup email timeout after 2 seconds (forced)'))
          }
        }, 2000) // Even more aggressive - 2 seconds

        // Start the send operation
        if (!transporter) {
          reject(new Error('Backup transporter not initialized'))
          return
        }
<<<<<<< Updated upstream
        
        transporter.sendMail(mailOptions)
=======

        transporter
          .sendMail(mailOptions)
>>>>>>> Stashed changes
          .then((result) => {
            if (!isCompleted) {
              isCompleted = true
              if (timeoutId) clearTimeout(timeoutId)
              console.log('✅ [BACKUP EMAIL] Send operation completed before timeout')
              resolve(result)
            }
          })
          .catch((error) => {
            if (!isCompleted) {
              isCompleted = true
              if (timeoutId) clearTimeout(timeoutId)
              console.log('❌ [BACKUP EMAIL] Send operation failed before timeout')
              reject(error)
            }
          })
      })

      const duration = Date.now() - startTime
      console.log(`✅ [BACKUP EMAIL] Email sent successfully in ${duration}ms`)
      console.log('🔄 [BACKUP EMAIL] Message ID:', result.messageId)

      return {
        success: true,
        messageId: result.messageId,
        details: { duration, method: 'backup' },
      }
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
    } finally {
      // Clean up timeout if it's still active
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  } catch (error) {
    const duration = Date.now() - startTime
    console.error(`❌ [BACKUP EMAIL] Failed after ${duration}ms`)
    console.error('❌ [BACKUP EMAIL] Error:', error)

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Backup email error',
      details: { duration, method: 'backup' },
    }
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  } finally {
    if (transporter) {
      try {
        transporter.close()
        console.log('🔧 [BACKUP EMAIL] Transporter closed')
      } catch (closeError) {
        console.warn('⚠️ [BACKUP EMAIL] Error closing transporter:', closeError)
      }
    }
  }
}

/**
 * Smart email sender that tries main method first, then backup
 */
export const sendEmailWithFallback = async (
  to: string,
  subject: string,
  htmlContent: string,
  textContent: string
): Promise<EmailResult> => {
  console.log('🔄 [SMART EMAIL] Attempting primary email send...')
<<<<<<< Updated upstream
  
  // Try primary method first
  const primaryResult = await sendEmail(to, subject, htmlContent, textContent)
  
=======

  // Try primary method first
  const primaryResult = await sendEmail(to, subject, htmlContent, textContent)

>>>>>>> Stashed changes
  if (primaryResult.success) {
    console.log('✅ [SMART EMAIL] Primary method succeeded')
    return primaryResult
  }

  console.log('⚠️ [SMART EMAIL] Primary method failed, trying backup...')
  console.log('⚠️ [SMART EMAIL] Primary error:', primaryResult.error)
<<<<<<< Updated upstream
  
  // Try backup method if primary fails
  const backupResult = await sendEmailBackup(to, subject, htmlContent, textContent)
  
=======

  // Try backup method if primary fails
  const backupResult = await sendEmailBackup(to, subject, htmlContent, textContent)

>>>>>>> Stashed changes
  if (backupResult.success) {
    console.log('✅ [SMART EMAIL] Backup method succeeded')
    return backupResult
  }

  console.log('❌ [SMART EMAIL] Both methods failed')
<<<<<<< Updated upstream
  
=======

>>>>>>> Stashed changes
  // Return combined error information
  return {
    success: false,
    error: `Both email methods failed. Primary: ${primaryResult.error}. Backup: ${backupResult.error}`,
    details: {
      primaryError: primaryResult.error,
      backupError: backupResult.error,
      primaryDetails: primaryResult.details,
      backupDetails: backupResult.details,
    },
  }
}
