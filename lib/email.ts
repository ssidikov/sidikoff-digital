import nodemailer from 'nodemailer'

// Create transporter using the working Gmail configuration
const createTransporter = () => {
  // Check if environment variables are available
  const emailUser = process.env.EMAIL_USER
  const emailPass = process.env.EMAIL_PASS

  console.log('🔍 Environment check:')
  console.log('EMAIL_USER:', emailUser ? 'SET' : 'MISSING')
  console.log('EMAIL_PASS:', emailPass ? 'SET' : 'MISSING')

  if (!emailUser || !emailPass) {
    console.warn('⚠️ Email credentials not configured. Email notifications disabled.')
    console.warn('💡 Required: EMAIL_USER and EMAIL_PASS environment variables')
    console.warn('💡 Current EMAIL_USER:', emailUser || 'undefined')
    console.warn('💡 Current EMAIL_PASS:', emailPass ? '[HIDDEN]' : 'undefined')
    return null
  }

  console.log('📧 Creating Gmail transporter with service configuration')
  console.log('📧 Using EMAIL_USER:', emailUser.replace(/(.{3}).*(@.*)/, '$1***$2'))

  try {
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    })

    console.log('✅ Gmail transporter created successfully')
    return transporter
  } catch (error) {
    console.error('❌ Failed to create email transporter:', error)
    return null
  }
}

// Lazy initialization of transporter
let transporter: nodemailer.Transporter | null = null

const getTransporter = () => {
  if (!transporter) {
    transporter = createTransporter()
  }
  return transporter
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

// User confirmation email template
export const generateUserConfirmationEmail = (submission: ContactSubmission) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Your Request - SIDIKOFF Digital</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; line-height: 1.6;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">SIDIKOFF DIGITAL</h1>
          <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 16px;">Web Development & Digital Solutions</p>
        </div>

        <!-- Main Content -->
        <div style="padding: 40px 30px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="display: inline-block; background-color: #10b981; color: white; padding: 12px 24px; border-radius: 50px; font-weight: 600; margin-bottom: 20px;">
              ✓ Request Received
            </div>
            <h2 style="color: #1f2937; margin: 0; font-size: 24px; font-weight: 700;">Thank You, ${
              submission.name
            }!</h2>
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
            
            ${
              submission.phone
                ? `
            <div style="margin-bottom: 15px;">
              <span style="color: #6b7280; font-weight: 500; display: inline-block; width: 100px;">Phone:</span>
              <span style="color: #1f2937;">${submission.phone}</span>
            </div>
            `
                : ''
            }
            
            ${
              submission.company
                ? `
            <div style="margin-bottom: 15px;">
              <span style="color: #6b7280; font-weight: 500; display: inline-block; width: 100px;">Company:</span>
              <span style="color: #1f2937;">${submission.company}</span>
            </div>
            `
                : ''
            }
            
            ${
              submission.projectType
                ? `
            <div style="margin-bottom: 15px;">
              <span style="color: #6b7280; font-weight: 500; display: inline-block; width: 100px;">Project Type:</span>
              <span style="color: #1f2937; background-color: #ddd6fe; padding: 4px 8px; border-radius: 6px; font-size: 14px;">${submission.projectType}</span>
            </div>
            `
                : ''
            }
            
            <div style="margin-bottom: 0;">
              <span style="color: #6b7280; font-weight: 500; display: block; margin-bottom: 8px;">Message:</span>
              <div style="background-color: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
                <p style="color: #374151; margin: 0; white-space: pre-line;">${
                  submission.message
                }</p>
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
              <a href="mailto:s.sidikoff@gmail.com" style="color: #667eea; text-decoration: none; font-weight: 600;">📧 s.sidikoff@gmail.com</a>
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

  return {
    subject: '✓ Your Project Request - SIDIKOFF Digital',
    html,
    text: `
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
Email: s.sidikoff@gmail.com

Best regards,
SIDIKOFF Digital Team
    `,
  }
}

// Admin notification email template
export const generateAdminNotificationEmail = (submission: ContactSubmission) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission - SIDIKOFF Digital</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; line-height: 1.6;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        
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
                <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${
                  submission.name
                }</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 500; vertical-align: top;">Email:</td>
                <td style="padding: 8px 0;">
                  <a href="mailto:${
                    submission.email
                  }" style="color: #2563eb; text-decoration: none;">${submission.email}</a>
                </td>
              </tr>
              ${
                submission.phone
                  ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 500; vertical-align: top;">Phone:</td>
                <td style="padding: 8px 0;">
                  <a href="tel:${submission.phone}" style="color: #2563eb; text-decoration: none;">${submission.phone}</a>
                </td>
              </tr>
              `
                  : ''
              }
              ${
                submission.company
                  ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 500; vertical-align: top;">Company:</td>
                <td style="padding: 8px 0; color: #1f2937;">${submission.company}</td>
              </tr>
              `
                  : ''
              }
              ${
                submission.projectType
                  ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 500; vertical-align: top;">Project Type:</td>
                <td style="padding: 8px 0;">
                  <span style="background-color: #ddd6fe; color: #5b21b6; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">${submission.projectType}</span>
                </td>
              </tr>
              `
                  : ''
              }
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 500; vertical-align: top;">Submitted:</td>
                <td style="padding: 8px 0; color: #1f2937;">${new Date(
                  submission.submittedAt
                ).toLocaleString()}</td>
              </tr>
            </table>
          </div>

          <!-- Message -->
          <div style="background-color: #f0f9ff; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
            <h3 style="color: #374151; margin: 0 0 10px 0; font-size: 16px; font-weight: 600;">💬 Message</h3>
            <div style="background-color: white; padding: 15px; border-radius: 6px; border: 1px solid #e0f2fe;">
              <p style="color: #374151; margin: 0; white-space: pre-line; font-size: 14px; line-height: 1.5;">${
                submission.message
              }</p>
            </div>
          </div>

          <!-- Quick Actions -->
          <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border-radius: 8px; padding: 20px; text-align: center;">
            <h3 style="color: #065f46; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">🚀 Quick Actions</h3>
            <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
              <a href="mailto:${
                submission.email
              }" style="background-color: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; display: inline-block;">Reply by Email</a>
              <a href="tel:${
                submission.phone || ''
              }" style="background-color: #3b82f6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; display: inline-block;">Call Client</a>
              <a href="https://www.sidikoff.com/admin/submissions" style="background-color: #6366f1; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; display: inline-block;">View in Admin</a>
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

  return {
    subject: `🚨 New Contact Submission: ${submission.name} - ${
      submission.projectType || 'General Inquiry'
    }`,
    html,
    text: `
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
- Admin Panel: https://www.sidikoff.com/admin/submissions

---
SIDIKOFF Digital Admin Notification
    `,
  }
}

// Send email function with simplified approach (like the working restaurant project)
export const sendEmail = async (to: string, subject: string, html: string, text: string) => {
  console.log(`📧 Attempting to send email to: ${to}`)
  console.log(`📧 Subject: ${subject}`)

  const emailTransporter = getTransporter()

  if (!emailTransporter) {
    const error = 'Email transporter is not available. Please check email configuration.'
    console.error('❌ ' + error)
    return { success: false, error }
  }

  try {
    // Verify transporter before sending
    console.log('🔍 Verifying email transporter...')
    await emailTransporter.verify()
    console.log('✅ Email transporter verified successfully')

    const mailOptions = {
      from: `"SIDIKOFF DIGITAL" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
      to: to,
      subject: subject,
      html: html,
      text: text,
    }

    console.log('📧 Sending email with options:', {
      from: mailOptions.from?.replace(/(.{3}).*(@.*)/, '$1***$2') || 'undefined',
      to: to.replace(/(.{3}).*(@.*)/, '$1***$2'),
      subject: subject,
    })

    const result = await emailTransporter.sendMail(mailOptions)
    console.log('✅ Email sent successfully:', result.messageId)

    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error('❌ Email send error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      details: error,
    }
  }
}

// Send confirmation email to user (following working restaurant pattern)
export const sendUserConfirmation = async (submission: ContactSubmission) => {
  console.log('📧 Starting user confirmation email...')
  const emailContent = generateUserConfirmationEmail(submission)

  return await sendEmail(
    submission.email,
    emailContent.subject,
    emailContent.html,
    emailContent.text
  )
}

// Send notification email to admin (following working restaurant pattern)
export const sendAdminNotification = async (submission: ContactSubmission) => {
  const adminEmail = process.env.EMAIL_TO || 's.sidikoff@gmail.com'
  console.log('📧 Starting admin notification email to:', adminEmail)

  const emailContent = generateAdminNotificationEmail(submission)

  return await sendEmail(adminEmail, emailContent.subject, emailContent.html, emailContent.text)
}

// Test email configuration (like in restaurant project)
export const testEmailConfiguration = async (): Promise<boolean> => {
  const transporter = getTransporter()
  if (!transporter) {
    return false
  }

  try {
    await transporter.verify()
    console.log('✅ Email configuration is valid')
    return true
  } catch (error) {
    console.error('❌ Email configuration test failed:', error)
    return false
  }
}
