# 🚀 SIDIKOFF DIGITAL - Premium Web Agency

[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-green?style=for-the-badge&logo=supabase)](https://supabase.com/)

Modern, multi-language web agency website built with Next.js 15, featuring a comprehensive admin dashboard for project and client management.

## ✨ Features

### 🌐 Frontend

- **Multi-language Support** (French, English, Russian)
- **Responsive Design** with modern animations
- **Dark/Light Theme** switching
- **SEO Optimized** with structured data
- **Performance Focused** with Web Vitals tracking
- **Contact Form** with email notifications

### 🔧 Admin Dashboard

- **Project Management** - Create, edit, and manage client projects
- **Contact Submissions** - View and respond to client inquiries
- **Analytics Dashboard** - Track metrics and performance
- **Secure Authentication** with bcrypt
- **Real-time Updates** with Supabase

### 📧 Email System

- **User Confirmation** emails with beautiful HTML templates
- **Admin Notifications** for new submissions
- **SMTP Integration** with Gmail/custom providers

## 🛠 Tech Stack

- **Framework:** Next.js 15.3.4 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom animations
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Custom JWT with bcrypt
- **Email:** Nodemailer with SMTP
- **Deployment:** Vercel
- **Analytics:** Google Analytics, GTM, Vercel Analytics

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Gmail account (for SMTP)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/sidikoff-digital.git
   cd sidikoff-digital
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in your environment variables (see [Environment Setup](#environment-setup))

4. **Set up the database**

   - Create a new Supabase project
   - Run the SQL schema from `database/schema.sql`
   - Update your environment variables with Supabase credentials

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Setup

Create a `.env.local` file with the following variables:

```bash
# Analytics Configuration
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-google-analytics-id
NEXT_PUBLIC_GOOGLE_ADS_ID=your-google-ads-id
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=your-conversion-label

# GTM Configuration
NEXT_PUBLIC_GTM_ID=your-gtm-id

# Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
ADMIN_EMAIL=admin@yourdomain.com

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Admin Panel Configuration
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=your-secure-password
```

### 📧 Email Setup (Gmail)

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: Google Account → Security → App passwords
3. Use the generated password as `SMTP_PASSWORD`

### 🗄️ Database Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Go to SQL Editor and run the schema from `database/schema.sql`
3. Copy your project URL and service role key to `.env.local`

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── admin/             # Admin dashboard pages
│   ├── api/               # API routes
│   ├── [locale]/          # Internationalized pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── admin/             # Admin-specific components
│   └── ui/                # UI components
├── context/               # React contexts
├── hooks/                 # Custom hooks
├── lib/                   # Utility libraries
├── database/              # SQL schemas and migrations
├── public/                # Static assets
└── scripts/               # Utility scripts
```

## 🎨 Admin Dashboard

Access the admin dashboard at `/admin/login` with your configured credentials.

### Features:

- **Dashboard Overview** - Key metrics and recent activity
- **Projects Management** - Full CRUD operations for client projects
- **Contact Submissions** - Manage client inquiries with status tracking
- **Responsive Design** - Works on all devices

## 🌍 Internationalization

The site supports three languages:

- **French** (default) - `/` or `/fr`
- **English** - `/en`
- **Russian** - `/ru`

Language detection is automatic based on browser preferences, with manual switching available.

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**

   ```bash
   npm i -g vercel
   vercel
   ```

2. **Set environment variables** in Vercel dashboard

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Manual Deployment

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm run start
   ```

## 📊 Analytics & SEO

- **Google Analytics 4** integration
- **Google Tag Manager** support
- **Structured Data** for better SEO
- **Web Vitals** monitoring
- **Sitemap** and **robots.txt** generation
- **Open Graph** and **Twitter Cards**

## 🔒 Security

- **Environment variables** for sensitive data
- **bcrypt** password hashing
- **JWT** session management
- **Input validation** and sanitization
- **HTTPS** enforcement in production

## 🧪 Scripts

```bash
# Development
npm run dev          # Start development server

# Building
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint

# Database
npm run setup:admin  # Create admin user (script)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email s.sidikoff@gmail.com or create an issue in this repository.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Supabase](https://supabase.com/) for the backend infrastructure
- [Lucide React](https://lucide.dev/) for the beautiful icons
- [Framer Motion](https://www.framer.com/motion/) for smooth animations

---

**Made with ❤️ by SIDIKOFF DIGITAL**
