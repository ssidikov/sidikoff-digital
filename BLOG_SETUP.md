# Blog Setup Instructions

## Prerequisites

Before setting up the blog, make sure you have:

1. A Sanity account (https://sanity.io)
2. A new Sanity project created

## Setup Steps

### 1. Install Dependencies

The required dependencies have been added to package.json:

- `@sanity/client` - Sanity client for fetching data
- `@sanity/image-url` - Image URL builder for Sanity
- `@portabletext/react` - For rendering rich text content
- `@sanity/vision` - Sanity Studio plugin for GROQ queries
- `sanity` - Sanity CLI and Studio
- `next-sanity` - Next.js integration for Sanity

### 2. Environment Variables

Add these variables to your `.env.local` file:

```bash
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here

# Studio Security (Basic Auth)
STUDIO_AUTH_USERNAME=admin
STUDIO_AUTH_PASSWORD=your_secure_password_here
```

To get these values:

1. Go to your Sanity project dashboard
2. `NEXT_PUBLIC_SANITY_PROJECT_ID` is in your project settings
3. `NEXT_PUBLIC_SANITY_DATASET` is usually "production"
4. `SANITY_API_TOKEN` can be created in API settings with read/write permissions
5. Set secure credentials for Studio access protection

### 3. Initialize Sanity Studio

```bash
cd sanity
sanity install
```

### 4. Start the Development Environment

Run both Next.js and Sanity Studio:

```bash
# Terminal 1: Start Next.js
npm run dev

# Terminal 2: Start Sanity Studio
npm run sanity:dev
```

### 5. Access Sanity Studio

Visit: http://localhost:3000/studio

### 6. Create Initial Content

In Sanity Studio, create:

1. At least one Author
2. Some Categories
3. Your first Blog Post

### 7. Deploy Sanity Studio (Optional)

```bash
npm run sanity:deploy
```

## Blog Features

### Multilingual Support

- French (primary) and English content
- Localized slugs for SEO
- Language-specific metadata

### SEO Optimized

- Custom meta titles and descriptions
- Open Graph images
- Structured data (JSON-LD)
- Sitemap integration
- Canonical URLs

### Content Types

#### Post

- Multilingual title and content
- Featured image with alt text
- Author and categories
- SEO metadata
- Reading time
- Featured post option

#### Author

- Name and bio (multilingual)
- Profile image
- Social media links
- Position/title

#### Category

- Multilingual titles
- Color coding
- Descriptions

### Rich Content

- Portable Text with custom components
- Images with captions
- Code blocks with syntax highlighting
- Callout boxes (info, warning, error, success)
- Custom links

### Performance

- Optimized images with Next.js Image
- Lazy loading
- Resource preloading
- Eco-mode compatibility

## File Structure

```
app/
  blog/
    page.tsx              # Blog index page
    [slug]/
      page.tsx            # Individual blog post
  studio/
    [[...index]]/
      page.tsx            # Sanity Studio

components/
  blog/
    BlogIndex.tsx         # Blog listing component
    BlogPost.tsx          # Blog post component
    BlogLoadingSkeleton.tsx
    BlogPostSkeleton.tsx

lib/
  blog-api.ts            # API functions for blog data
  sanity.ts              # Sanity client configuration
  sanity-queries.ts      # GROQ queries
  types/
    blog.ts              # TypeScript types

sanity/
  sanity.config.ts       # Sanity configuration
  schemas/
    index.ts             # Schema exports
    post.ts              # Post schema
    author.ts            # Author schema
    category.ts          # Category schema
    blockContent.ts      # Rich text schema
```

## Deployment

1. Build the project: `npm run build`
2. Deploy to your hosting platform
3. Make sure environment variables are set in production
4. Deploy Sanity Studio: `npm run sanity:deploy`

## Troubleshooting

### Common Issues

1. **Sanity client errors**: Check your environment variables
2. **CORS issues**: Add your domain to CORS origins in Sanity settings
3. **Image loading**: Ensure Sanity domain is added to Next.js image domains
4. **Build errors**: Make sure all dependencies are installed

### Support

- Sanity Documentation: https://www.sanity.io/docs
- Next.js Documentation: https://nextjs.org/docs

## Next Steps

1. Customize the blog design to match your brand
2. Add more content types (tags, series, etc.)
3. Implement blog search functionality
4. Add newsletter signup
5. Set up analytics for blog posts
6. Create RSS feed
7. Add comment system (optional)
