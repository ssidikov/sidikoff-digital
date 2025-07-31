import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

import {
  userConfirmationFR,
  adminNotificationFR,
  userConfirmationEN,
  adminNotificationEN,
  userConfirmationRU,
  adminNotificationRU,
} from './mailTemplates'

interface ContactFormData {
  name: string
  email: string
  message: string
  locale?: 'fr' | 'en' | 'ru'
}

// Function to get the appropriate template based on locale
const getUserTemplate = (locale: 'fr' | 'en' | 'ru' = 'fr') => {
  switch (locale) {
    case 'en':
      return userConfirmationEN
    case 'ru':
      return userConfirmationRU
    case 'fr':
    default:
      return userConfirmationFR
  }
}

const getAdminTemplate = (locale: 'fr' | 'en' | 'ru' = 'fr') => {
  switch (locale) {
    case 'en':
      return adminNotificationEN
    case 'ru':
      return adminNotificationRU
    case 'fr':
    default:
      return adminNotificationFR
  }
}

// Function to get subject based on locale
const getEmailSubjects = (locale: 'fr' | 'en' | 'ru' = 'fr') => {
  const subjects = {
    fr: {
      user: 'Confirmation de votre demande - SIDIKOFF DIGITALDigital',
      admin: 'Nouvelle demande reçue - SIDIKOFF DIGITALDigital',
    },
    en: {
      user: 'Confirmation of your request - SIDIKOFF DIGITALDigital',
      admin: 'New request received - SIDIKOFF DIGITALDigital',
    },
    ru: {
      user: 'Подтверждение вашего запроса - SIDIKOFF DIGITALDigital',
      admin: 'Получен новый запрос - SIDIKOFF DIGITALDigital',
    },
  }

  return subjects[locale]
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()
    const { name, email, message, locale = 'fr' } = data

    // Validation
    if (!name?.trim()) {
      return NextResponse.json({ success: false, error: 'Name is required' }, { status: 400 })
    }

    if (!email?.trim() || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Valid email is required' },
        { status: 400 }
      )
    }

    if (!message?.trim()) {
      return NextResponse.json({ success: false, error: 'Message is required' }, { status: 400 })
    }

    if (!process.env.ADMIN_EMAIL) {
      console.error('ADMIN_EMAIL environment variable is not set')
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      )
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error('Gmail credentials are not set')
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
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
        { status: 500 }
      )
    }

    // Get templates and subjects based on locale
    const userTemplate = getUserTemplate(locale)
    const adminTemplate = getAdminTemplate(locale)
    const subjects = getEmailSubjects(locale)

    // User confirmation email
    const userMail = {
      from: `"SIDIKOFF DIGITAL" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: subjects.user,
      html: userTemplate({ name, locale }),
      replyTo: process.env.ADMIN_EMAIL,
    }

    // Admin notification email
    const adminMail = {
      from: `"Contact Form - SIDIKOFF DIGITALDigital" <${process.env.EMAIL_FROM || process.env.SMTP_USER || process.env.GMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.ADMIN_EMAIL || 's.sidikoff@gmail.com',
      subject: subjects.admin,
      html: adminTemplate({ name, email, message, locale }),
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
        locale,
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json({
        success: true,
        message: 'Emails sent successfully',
        locale,
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
