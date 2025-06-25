# Email Configuration Guide

This document explains how to set up email functionality for the SIDIKOFF Digital contact form.

## Overview

When a user submits the contact form, the system now:

1. **Sends a confirmation email to the user** with their request details
2. **Sends a notification email to the admin** about the new submission
3. **Saves the submission to the database** (as before)

## Environment Variables Required

Add these variables to your `.env.local` file:

```env
# Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
ADMIN_EMAIL=s.sidikoff@gmail.com
```

## Gmail Setup (Recommended)

### 1. Enable 2-Factor Authentication

- Go to your Google Account settings
- Enable 2-factor authentication if not already enabled

### 2. Generate App Password

- Go to Google Account > Security > 2-Step Verification > App passwords
- Generate a new app password for "Mail"
- Use this password as `SMTP_PASSWORD` (not your regular Gmail password)

### 3. Configuration

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASSWORD=your-16-character-app-password
ADMIN_EMAIL=your-admin-email@gmail.com
```

## Other SMTP Providers

### Outlook/Hotmail

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

### Yahoo

```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

### Custom SMTP

```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-username
SMTP_PASSWORD=your-password
```

## Email Templates

The system includes two professional email templates:

### User Confirmation Email

- **Subject**: "✓ Your Project Request - SIDIKOFF Digital"
- **Content**: Beautiful HTML template with request summary, next steps, and contact info
- **Features**: Responsive design, branded colors, clear call-to-actions

### Admin Notification Email

- **Subject**: "🚨 New Contact Submission: [Name] - [Project Type]"
- **Content**: Urgent-style notification with submission details and quick actions
- **Features**: Quick reply, call client, and admin panel links

## Features

### User Experience

- Immediate confirmation popup
- Professional confirmation email with project details
- Clear next steps and timeline expectations
- Contact information for urgent needs

### Admin Experience

- Instant email notifications for new submissions
- All submission details in readable format
- Quick action buttons (reply, call, view in admin)
- Professional formatting with priority indicators

### Technical Features

- Non-blocking email sending (doesn't delay form response)
- Error handling and logging
- Professional HTML templates
- Plain text fallbacks
- Responsive email design

## Testing

### 1. Check Environment Variables

```bash
# Test that environment variables are loaded
node -e "console.log(process.env.SMTP_USER)"
```

### 2. Submit Test Form

- Fill out the contact form on your website
- Check that you receive both emails
- Verify all details are correctly formatted

### 3. Monitor Logs

- Check server logs for email sending status
- Look for success/error messages in console

## Troubleshooting

### Common Issues

1. **Authentication Error**

   - Ensure you're using an app password, not your regular password
   - Verify 2FA is enabled on your Gmail account

2. **Connection Timeout**

   - Check SMTP host and port settings
   - Verify firewall isn't blocking SMTP ports

3. **Emails Not Sending**

   - Check environment variables are properly set
   - Look at server logs for error messages
   - Verify SMTP credentials are correct

4. **Emails in Spam**
   - Add your domain to SPF records
   - Consider using a professional email service
   - Send from a verified domain email

### Debug Mode

To enable detailed email debugging, add this to your environment:

```env
DEBUG=nodemailer:*
```

## Security Notes

- Never commit email credentials to version control
- Use app passwords instead of regular passwords
- Consider using environment variable encryption
- Regularly rotate SMTP passwords
- Monitor email sending logs for suspicious activity

## Customization

### Email Templates

Templates are in `/lib/email.ts` and can be customized:

- Colors and branding
- Content and messaging
- Layout and structure
- Additional fields

### Languages

The popup messages support multiple languages and are defined in `/context/LanguageContext.tsx`

## Production Considerations

1. **Email Service**: Consider using professional services like SendGrid, Mailgun, or AWS SES for production
2. **Rate Limiting**: Implement rate limiting for form submissions
3. **Monitoring**: Set up email delivery monitoring
4. **Backup**: Have fallback notification methods (Slack, Discord, etc.)
