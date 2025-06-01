# Environment Variables Setup

This document explains how to configure environment variables for the SIDIKOFF DIGITAL project both locally and on Vercel.

## Required Environment Variables

### Analytics & Tracking

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics 4 Measurement ID
- `NEXT_PUBLIC_GOOGLE_ADS_ID` - Google Ads Account ID (format: AW-XXXXXXXXXX)
- `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` - Google Ads Conversion Label for lead form tracking
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager Container ID (optional)

### Form Configuration

- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` - Formspree form endpoint URL

## Local Development Setup

1. Copy `.env.example` to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

2. Fill in your actual values in `.env.local`

3. The `.env.local` file is already added to `.gitignore` for security

## Vercel Deployment Setup

### Method 1: Vercel Dashboard

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Environment Variables
3. Add each variable with the following settings:
   - **Key**: Variable name (e.g., `NEXT_PUBLIC_GA_MEASUREMENT_ID`)
   - **Value**: Your actual value
   - **Environment**: Production, Preview, Development (select all)

### Method 2: Vercel CLI

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Set environment variables
vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID
vercel env add NEXT_PUBLIC_GOOGLE_ADS_ID
vercel env add NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL
vercel env add NEXT_PUBLIC_GTM_ID
vercel env add NEXT_PUBLIC_FORMSPREE_ENDPOINT
```

### Method 3: Import from .env file

```bash
# Pull existing environment variables (if any)
vercel env pull .env.vercel

# Edit the file and then push
vercel env add < .env.local
```

## Google Ads Conversion Setup

To get your actual Google Ads conversion label:

1. Go to Google Ads Dashboard
2. Navigate to Tools & Settings → Conversions
3. Create a new conversion action for "Website" → "Submit lead form"
4. Copy the conversion label from the tracking code
5. Replace `your-actual-conversion-label` with this value

## Security Notes

- All `NEXT_PUBLIC_*` variables are exposed to the client-side
- The `FORMSPREE_ENDPOINT` is server-side only but consider making it public with `NEXT_PUBLIC_` prefix if needed
- Never commit actual values to Git
- Use different values for development/staging/production environments if needed

## Testing

After setting up environment variables:

1. Locally: Restart your development server
2. Vercel: Redeploy your application

Check browser console for any analytics errors and verify conversion tracking in Google Ads.
