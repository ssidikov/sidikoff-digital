# SIDIKOFF DIGITAL - Agency Website

A modern, multilingual web agency website built with Next.js 15, featuring an admin panel for content management and contact form submissions.

![SIDIKOFF DIGITAL](public/images/contact.png)

## ✨ Features

- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Multilingual**: French, English, Russian support
- **Admin Panel**: Full-featured admin dashboard for content management
- **Contact Management**: Contact form with email notifications
- **Portfolio Management**: Dynamic project showcase
- **SEO Optimized**: Complete SEO setup with metadata, sitemap, robots.txt
- **Analytics**: Google Analytics and GTM integration
- **Performance**: Optimized images, fonts, and loading
- **Accessibility**: WCAG compliant design
- **Responsive**: Mobile-first responsive design
- **Dark Mode**: Built-in dark/light theme toggle

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Email**: Nodemailer with SMTP
- **Analytics**: Google Analytics, GTM
- **Deployment**: Vercel
- **Icons**: Heroicons

## 📁 Project Structure

```
sidikoff-digital/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   ├── admin/             # Admin panel routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── admin/            # Admin-specific components
│   └── ui/               # Reusable UI components
├── context/              # React contexts
├── data/                 # Static data files
├── database/             # Database schema and migrations
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── utils/                # Additional utilities
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- SMTP email provider (Gmail recommended)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/sidikoff-digital.git
cd sidikoff-digital
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the example environment file:

```bash
cp .env.example .env.local
```

Fill in your environment variables in `.env.local`:

```env
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-google-analytics-id
NEXT_PUBLIC_GTM_ID=your-gtm-id

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
ADMIN_EMAIL=s.sidikoff@gmail.com

# Admin Panel
ADMIN_PASSWORD=your-secure-password
```

### 4. Database Setup

1. Create a new Supabase project
2. Run the SQL scripts in `database/schema.sql` to set up tables
3. Create your admin user:

```sql
INSERT INTO admin_users (email, password_hash, name, role)
VALUES ('s.sidikoff@gmail.com', 'your-hashed-password', 'Your Name', 'admin');
```

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the website.

## 📊 Admin Panel

Access the admin panel at `/admin/login` with your configured credentials.

**Features:**

- **Dashboard**: Overview of submissions and projects
- **Projects**: Manage portfolio projects with images
- **Submissions**: View and manage contact form submissions
- **Authentication**: Secure login system

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The project is compatible with any Node.js hosting platform:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Configuration

### Adding Projects

Projects can be added through the admin panel or by editing `data/portfolio-data.ts`:

```typescript
{
  id: 'project-slug',
  title: 'Project Title',
  description: 'Project description',
  image: '/projects/project-image.webp',
  technologies: ['Next.js', 'TypeScript'],
  category: 'web-app',
  status: 'completed',
  featured: true
}
```

### Customizing Content

1. **Translations**: Edit `context/LanguageContext.tsx`
2. **SEO**: Update `lib/seo.ts`
3. **Styling**: Modify Tailwind classes in components
4. **Images**: Add to `public/` directory

## 🎨 Customization

### Brand Colors

Update `tailwind.config.ts` to change the color scheme:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#3b82f6',
    900: '#1e3a8a'
  }
}
```

### Fonts

The project uses Inter font. To change it, update `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({
  subsets: ['latin'],
  display: 'swap',
})
```

## 📧 Email Configuration

The contact form supports various SMTP providers:

### Gmail Setup

1. Enable 2-factor authentication
2. Generate an app password
3. Use these settings:
   - SMTP_HOST: smtp.gmail.com
   - SMTP_PORT: 587
   - SMTP_USER: your-email@gmail.com
   - SMTP_PASSWORD: your-app-password

### Other Providers

- **Outlook**: smtp-mail.outlook.com:587
- **Yahoo**: smtp.mail.yahoo.com:587
- **SendGrid**: smtp.sendgrid.net:587

## 🔒 Security

- Environment variables are properly configured
- Admin authentication with bcrypt password hashing
- Supabase RLS (Row Level Security) policies
- Input validation and sanitization
- CSRF protection with form tokens

## 📱 SEO & Performance

- **Core Web Vitals**: Optimized for performance
- **Meta Tags**: Dynamic SEO metadata
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine directives
- **Image Optimization**: Next.js Image component

## 🧪 Testing

```bash
# Run linter
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support or questions:

- 📧 Email: s.sidikoff@gmail.com
- 💬 Create an issue in this repository
- 🌐 Website: [sidikoff.com](https://sidikoff.com)

## 🎯 Roadmap

- [ ] Multi-tenant admin panel
- [ ] Advanced analytics dashboard
- [ ] Blog system integration
- [ ] E-commerce capabilities
- [ ] API documentation
- [ ] Mobile app companion

---

Made with ❤️ by SIDIKOFF DIGITAL
