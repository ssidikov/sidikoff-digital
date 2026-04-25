import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

import { userConfirmationFR, adminNotificationFR } from './mailTemplates'

interface ContactFormData {
  name: string
  email: string
  message: string
  locale?: 'fr'
}

// Function to get the appropriate template based on locale
const getUserTemplate = () => {
  return userConfirmationFR
}

const getAdminTemplate = () => {
  return adminNotificationFR
}

// Function to get subject based on locale
const getEmailSubjects = () => {
  return {
    user: 'Confirmation de votre demande - Sidikoff Digital',
    admin: 'Nouvelle demande reçue - Sidikoff Digital',
  }
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()
    const { name, email, message } = data

    // Validation
    if (!name?.trim()) {
      return NextResponse.json({ success: false, error: 'Name is required' }, { status: 400 })
    }

    if (!email?.trim() || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Valid email is required' },
        { status: 400 },
      )
    }

    if (!message?.trim()) {
      return NextResponse.json({ success: false, error: 'Message is required' }, { status: 400 })
    }

    if (!process.env.ADMIN_EMAIL) {
      console.error('ADMIN_EMAIL environment variable is not set')
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 },
      )
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error('Gmail credentials are not set')
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 },
      )
    }

    // Create transporter with better error handling
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || process.env.GMAIL_USER,
        pass: process.env.SMTP_PASS || process.env.GMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // Verify transporter configuration
    try {
      await transporter.verify()
    } catch (verifyError) {
      console.error('SMTP configuration error:', verifyError)
      return NextResponse.json(
        { success: false, error: 'Email service configuration error' },
        { status: 500 },
      )
    }

    // Get templates and subjects
    const userTemplate = getUserTemplate()
    const adminTemplate = getAdminTemplate()
    const subjects = getEmailSubjects()

    // User confirmation email
    const userMail = {
      from: `"Sidikoff Digital" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: subjects.user,
      html: userTemplate({ name }),
      replyTo: process.env.ADMIN_EMAIL,
    }

    // Admin notification email
    const adminMail = {
      from: `"Contact Form - Sidikoff DigitalDigital" <${process.env.EMAIL_FROM || process.env.SMTP_USER || process.env.GMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.ADMIN_EMAIL || 's.sidikoff@gmail.com',
      subject: subjects.admin,
      html: adminTemplate({ name, email, message }),
      replyTo: email, // Admin can reply directly to the user
    }

    // Send emails
    try {
      const [userResult, adminResult] = await Promise.all([
        transporter.sendMail(userMail),
        transporter.sendMail(adminMail),
      ])

      console.log('Emails sent successfully:', {
        userMessageId: userResult.messageId,
        adminMessageId: adminResult.messageId,
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json({
        success: true,
        message: 'Emails sent successfully',
      })
    } catch (emailError) {
      console.error('Error sending emails:', emailError)
      return NextResponse.json({ success: false, error: 'Failed to send emails' }, { status: 500 })
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}
