import nodemailer from 'nodemailer'

/**
 * Ultra-aggressive email system with connection-level timeouts
 * This version times out at the connection level, not just the send level
 */

export interface EmailResult {
  success: boolean
  messageId?: string
  error?: string
  details?: Record<string, unknown>
}

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

const ADMIN_EMAIL = 's.sidikoff@gmail.com'

/**
 * Create transporter with connection timeout
 */
const createTransporterWithTimeout = async (timeoutMs: number = 2000): Promise<nodemailer.Transporter> => {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error(`Transporter creation timeout after ${timeoutMs}ms`))
    }, timeoutMs)

    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER!,
          pass: process.env.SMTP_PASSWORD!,
        },
        // Ultra minimal settings
        pool: false,
        connectionTimeout: 1000,
        greetingTimeout: 1000,
        socketTimeout: 1000,
        tls: { rejectUnauthorized: false },
        logger: false,
        debug: false,
      } as nodemailer.TransportOptions)

      clearTimeout(timeout)
      resolve(transporter)
    } catch (error) {
      clearTimeout(timeout)
      reject(error)
    }
  })
}

/**
 * Nuclear email send with aggressive timeouts at every level
 */
export const sendEmailNuclear = async (
  to: string,
  subject: string,
  htmlContent: string,
  textContent: string
): Promise<EmailResult> => {
  const startTime = Date.now()
  const timestamp = new Date().toISOString()
  
  console.log(`💥 [NUCLEAR EMAIL] ${timestamp} - Starting nuclear email send`)
  console.log(`💥 [NUCLEAR EMAIL] To: ${to}`)
  console.log(`💥 [NUCLEAR EMAIL] Subject: ${subject}`)

  let transporter: nodemailer.Transporter | null = null

  try {
    // Validate config
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      throw new Error('SMTP credentials not configured')
    }

    // Step 1: Create transporter with timeout
    console.log('💥 [NUCLEAR EMAIL] Creating transporter with 2s timeout...')
    transporter = await createTransporterWithTimeout(2000)
    console.log('✅ [NUCLEAR EMAIL] Transporter created successfully')

    // Step 2: Prepare mail
    const mailOptions = {
      from: `"SIDIKOFF Digital" <${process.env.SMTP_USER}>`,
      to: to,
      subject: subject,
      html: htmlContent,
      text: textContent,
    }

    console.log('💥 [NUCLEAR EMAIL] Sending with 2s total timeout...')

    // Step 3: Send with aggressive timeout
    const result = await new Promise<nodemailer.SentMessageInfo>((resolve, reject) => {
      const timeout = setTimeout(() => {
        console.log('💥 [NUCLEAR EMAIL] TIMEOUT: Rejecting after 2 seconds')
        if (transporter) {
          try {
            transporter.close()
          } catch (e) {
            console.warn('⚠️ [NUCLEAR EMAIL] Error closing on timeout:', e)
          }
        }
        reject(new Error('Nuclear timeout after 2 seconds'))
      }, 2000)

      transporter!.sendMail(mailOptions)
        .then((result) => {
          clearTimeout(timeout)
          resolve(result)
        })
        .catch((error) => {
          clearTimeout(timeout)
          reject(error)
        })
    })

    const duration = Date.now() - startTime
    console.log(`✅ [NUCLEAR EMAIL] Success in ${duration}ms`)
    console.log('💥 [NUCLEAR EMAIL] Message ID:', result.messageId)

    return {
      success: true,
      messageId: result.messageId,
      details: { duration, method: 'nuclear' },
    }

  } catch (error) {
    const duration = Date.now() - startTime
    console.error(`❌ [NUCLEAR EMAIL] Failed after ${duration}ms:`, error)

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Nuclear email error',
      details: { duration, method: 'nuclear' },
    }

  } finally {
    if (transporter) {
      try {
        transporter.close()
        console.log('💥 [NUCLEAR EMAIL] Transporter closed')
      } catch (closeError) {
        console.warn('⚠️ [NUCLEAR EMAIL] Error closing transporter:', closeError)
      }
    }
  }
}

/**
 * User confirmation with nuclear approach
 */
export const sendUserConfirmationNuclear = async (submission: ContactSubmission): Promise<EmailResult> => {
  console.log('💥 [NUCLEAR USER] Starting nuclear user confirmation...')
  
  const subject = '✓ Your Project Request - SIDIKOFF Digital'
  const htmlContent = `
    <h1>Thank You, ${submission.name}!</h1>
    <p>Your project request has been received.</p>
    <p>We'll get back to you within 24 hours.</p>
    <p>Best regards,<br>SIDIKOFF Digital Team</p>
  `
  const textContent = `Thank You, ${submission.name}!\n\nYour project request has been received.\nWe'll get back to you within 24 hours.\n\nBest regards,\nSIDIKOFF Digital Team`
  
  return await sendEmailNuclear(submission.email, subject, htmlContent, textContent)
}

/**
 * Admin notification with nuclear approach
 */
export const sendAdminNotificationNuclear = async (submission: ContactSubmission): Promise<EmailResult> => {
  console.log('💥 [NUCLEAR ADMIN] Starting nuclear admin notification...')
  
  const subject = `🚨 New Contact: ${submission.name}`
  const htmlContent = `
    <h1>New Contact Submission</h1>
    <p><strong>Name:</strong> ${submission.name}</p>
    <p><strong>Email:</strong> ${submission.email}</p>
    <p><strong>Message:</strong> ${submission.message}</p>
  `
  const textContent = `New Contact Submission\n\nName: ${submission.name}\nEmail: ${submission.email}\nMessage: ${submission.message}`
  
  return await sendEmailNuclear(ADMIN_EMAIL, subject, htmlContent, textContent)
}
