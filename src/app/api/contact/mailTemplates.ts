// Types for template parameters
interface UserConfirmationParams {
  name: string
  locale?: 'fr' | 'en' | 'ru'
}

interface AdminNotificationParams {
  name: string
  email: string
  message: string
  locale?: 'fr' | 'en' | 'ru'
}

// Translations for email templates
const translations = {
  fr: {
    greeting: 'Bonjour',
    userSubject: 'Confirmation de votre demande',
    userMessage:
      'Nous avons bien reçu votre demande. Notre équipe vous contactera prochainement pour en discuter.',
    regards: "Cordialement,\nL'équipe Sidikoff",
    adminSubject: 'Nouvelle demande reçue',
    newRequest: 'Nouvelle demande reçue',
    nameLabel: 'Nom',
    emailLabel: 'Email',
    messageLabel: 'Message',
    autoNotification: 'Notification automatique Sidikoff',
    thankYou: 'Merci pour votre confiance',
    quickResponse: 'Réponse sous 24h garantie',
    professionalService: 'Service professionnel',
  },
  en: {
    greeting: 'Hello',
    userSubject: 'Confirmation of your request',
    userMessage: 'We have received your request. Our team will contact you shortly to discuss it.',
    regards: 'Best regards,\nThe SIDIKOFF DIGITALteam',
    adminSubject: 'New request received',
    newRequest: 'New request received',
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    autoNotification: 'SIDIKOFF DIGITALautomatic notification',
    thankYou: 'Thank you for your trust',
    quickResponse: '24h response guaranteed',
    professionalService: 'Professional service',
  },
  ru: {
    greeting: 'Здравствуйте',
    userSubject: 'Подтверждение вашего запроса',
    userMessage:
      'Мы получили ваш запрос. Наша команда свяжется с вами в ближайшее время для обсуждения.',
    regards: 'С уважением,\nКоманда Sidikoff',
    adminSubject: 'Получен новый запрос',
    newRequest: 'Получен новый запрос',
    nameLabel: 'Имя',
    emailLabel: 'Email',
    messageLabel: 'Сообщение',
    autoNotification: 'Автоматическое уведомление Sidikoff',
    thankYou: 'Благодарим за доверие',
    quickResponse: 'Ответ в течение 24ч',
    professionalService: 'Профессиональный сервис',
  },
}

// Clean and Professional email styles
const baseStyles = `
  <style>
    /* Modern reset and base styles */
    * { box-sizing: border-box; }
    body { 
      -webkit-text-size-adjust: none; 
      -ms-text-size-adjust: none; 
      margin: 0; 
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
    
    /* Professional card design */
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    
    .email-header {
      background: #f8fafc;
      padding: 32px 24px;
      text-align: center;
      border-bottom: 1px solid #e5e7eb;
      border-radius: 8px 8px 0 0;
    }
    
    .email-content {
      padding: 32px 24px;
      line-height: 1.6;
      color: #374151;
    }
    
    .email-footer {
      background: #f9fafb;
      padding: 24px;
      text-align: center;
      border-top: 1px solid #e5e7eb;
      border-radius: 0 0 8px 8px;
    }
    
    /* Typography */
    .email-title {
      color: #111827;
      font-size: 24px;
      font-weight: 600;
      margin: 0 0 8px 0;
      letter-spacing: -0.025em;
    }
    
    .email-subtitle {
      color: #6b7280;
      font-size: 16px;
      margin: 0;
      font-weight: 400;
    }
    
    .content-title {
      color: #111827;
      font-size: 20px;
      font-weight: 600;
      margin: 0 0 16px 0;
      text-align: center;
    }
    
    .content-text {
      color: #374151;
      font-size: 16px;
      line-height: 1.6;
      margin: 0 0 24px 0;
    }
    
    /* Professional buttons */
    .btn-primary {
      display: inline-block;
      background: #3b82f6;
      color: white;
      padding: 12px 24px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
      font-size: 16px;
      border: none;
      cursor: pointer;
    }
    
    .btn-secondary {
      display: inline-block;
      background: #f3f4f6;
      color: #374151;
      padding: 12px 24px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
      font-size: 16px;
      border: 1px solid #d1d5db;
    }
    
    /* Info boxes */
    .info-box {
      background: #f0f9ff;
      border: 1px solid #0ea5e9;
      border-left: 4px solid #0ea5e9;
      padding: 16px;
      border-radius: 6px;
      margin: 24px 0;
    }
    
    .success-box {
      background: #f0fdf4;
      border: 1px solid #22c55e;
      border-left: 4px solid #22c55e;
      padding: 16px;
      border-radius: 6px;
      margin: 24px 0;
    }
    
    /* Contact details */
    .contact-item {
      background: #f9fafb;
      padding: 16px;
      border-radius: 6px;
      margin: 12px 0;
      border: 1px solid #e5e7eb;
    }
    
    .contact-label {
      font-weight: 600;
      color: #374151;
      margin: 0 0 4px 0;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.025em;
    }
    
    .contact-value {
      color: #111827;
      font-size: 16px;
      margin: 0;
      word-break: break-word;
    }
    
    /* Logo styling */
    .logo {
      height: 40px;
      margin-bottom: 16px;
    }
    
    /* Responsive design */
    @media only screen and (max-width: 600px) {
      .email-container { 
        margin: 0 16px; 
        border-radius: 6px;
      }
      .email-header,
      .email-content,
      .email-footer { 
        padding: 24px 20px; 
      }
      .email-title { 
        font-size: 20px; 
      }
      .content-title { 
        font-size: 18px; 
      }
      .content-text { 
        font-size: 15px; 
      }
    }
    
    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      .email-container { 
        background: #1f2937;
        border-color: #374151;
      }
      .email-header { 
        background: #111827;
        border-color: #374151;
      }
      .email-footer { 
        background: #111827;
        border-color: #374151;
      }
      .email-title,
      .content-title,
      .contact-value { 
        color: #f9fafb;
      }
      .email-subtitle,
      .content-text { 
        color: #d1d5db;
      }
      .contact-label { 
        color: #9ca3af;
      }
      .contact-item {
        background: #374151;
        border-color: #4b5563;
      }
      .info-box {
        background: #1e293b;
        border-color: #0ea5e9;
      }
      .success-box {
        background: #14532d;
        border-color: #22c55e;
      }
    }
    
    /* Print styles */
    @media print {
      .email-container { 
        box-shadow: none;
        border: 1px solid #000;
      }
      .btn-primary,
      .btn-secondary {
        background: transparent !important;
        color: #000 !important;
        border: 1px solid #000 !important;
      }
    }
  </style>
`

export const userConfirmationFR = ({ name, locale = 'fr' }: UserConfirmationParams) => {
  const t = translations[locale]

  return `
    <!DOCTYPE html>
    <html lang="${locale}">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="color-scheme" content="light dark">
      <title>${t.userSubject}</title>
      ${baseStyles}
    </head>
    <body style="margin: 0; padding: 20px; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      
      <div class="email-container">
        <!-- Header -->
        <div class="email-header">
          <img src="https://sidikoff.com/logo-sidikoff.webp" alt="SIDIKOFF DIGITALDigital" class="logo">
          <h1 class="email-title">SIDIKOFF DIGITAL</h1>
          <p class="email-subtitle">Solutions Digitales Professionnelles</p>
        </div>

        <!-- Content -->
        <div class="email-content">
          <h2 class="content-title">${t.greeting} ${name}!</h2>
          
          <div class="success-box">
            <p style="margin: 0; color: #166534; font-weight: 500;">
              ✓ ${t.userMessage}
            </p>
          </div>

          <p class="content-text">
            Notre équipe vous recontactera dans les plus brefs délais pour discuter de votre projet et vous proposer les meilleures solutions adaptées à vos besoins.
          </p>

          <div class="info-box">
            <p style="margin: 0 0 8px 0; color: #0c4a6e; font-weight: 600;">
              Que se passe-t-il maintenant ?
            </p>
            <ul style="margin: 0; padding-left: 16px; color: #0c4a6e;">
              <li>Analyse de votre demande par notre équipe</li>
              <li>Préparation d'une proposition personnalisée</li>
              <li>Prise de contact sous 24h</li>
            </ul>
          </div>
        </div>

        <!-- Footer -->
        <div class="email-footer">
          <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px; white-space: pre-line;">
            ${t.regards}
          </p>
          <p style="margin: 0; color: #9ca3af; font-size: 12px;">
            ${t.autoNotification}
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}

export const adminNotificationFR = ({
  name,
  email,
  message,
  locale = 'fr',
}: AdminNotificationParams) => {
  const t = translations[locale]

  return `
    <!DOCTYPE html>
    <html lang="${locale}">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="color-scheme" content="light dark">
      <title>${t.adminSubject}</title>
      ${baseStyles}
    </head>
    <body style="margin: 0; padding: 20px; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      
      <div class="email-container">
        <!-- Header -->
        <div class="email-header">
          <img src="https://sidikoff.com/logo-sidikoff.webp" alt="SIDIKOFF DIGITALDigital" class="logo">
          <h1 class="email-title">📬 ${t.newRequest}</h1>
          <p class="email-subtitle">Nouvelle demande de contact reçue</p>
        </div>

        <!-- Content -->
        <div class="email-content">
          <h2 class="content-title">Détails du contact</h2>
          
          <div class="contact-item">
            <p class="contact-label">${t.nameLabel}</p>
            <p class="contact-value">${name}</p>
          </div>

          <div class="contact-item">
            <p class="contact-label">${t.emailLabel}</p>
            <p class="contact-value">
              <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
            </p>
          </div>

          <div class="contact-item">
            <p class="contact-label">${t.messageLabel}</p>
            <p class="contact-value" style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>

          <div style="margin-top: 32px; text-align: center;">
            <a href="mailto:${email}" class="btn-primary">
              Répondre par email
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div class="email-footer">
          <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
            ${t.autoNotification}
          </p>
          <p style="margin: 0; color: #9ca3af; font-size: 12px;">
            ${new Date().toLocaleDateString(locale === 'fr' ? 'fr-FR' : locale === 'ru' ? 'ru-RU' : 'en-US')} - 
            ${new Date().toLocaleTimeString(locale === 'fr' ? 'fr-FR' : locale === 'ru' ? 'ru-RU' : 'en-US')}
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Export specific language templates for backward compatibility
export const userConfirmationEN = (params: UserConfirmationParams) =>
  userConfirmationFR({ ...params, locale: 'en' })

export const userConfirmationRU = (params: UserConfirmationParams) =>
  userConfirmationFR({ ...params, locale: 'ru' })

export const adminNotificationEN = (params: AdminNotificationParams) =>
  adminNotificationFR({ ...params, locale: 'en' })

export const adminNotificationRU = (params: AdminNotificationParams) =>
  adminNotificationFR({ ...params, locale: 'ru' })
