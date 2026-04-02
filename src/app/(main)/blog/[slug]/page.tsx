import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { BlogPostContent } from '@/components/BlogPostContent'
import { getBlogPostBySlug, urlFor } from '@/lib/sanity'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Article non trouvé',
      description: "Cet article de blog n'existe pas.",
    }
  }

  const canonicalUrl = createCanonicalUrl(`blog/${slug}`, 'fr')
  const imageUrl = post.mainImage ? urlFor(post.mainImage).url() : '/images/opengraph-fr.png'

  // Use SEO override fields from Sanity if available, otherwise fall back to post fields
  const finalTitle = post.seo?.metaTitle || post.title
  const finalDescription = post.seo?.metaDescription || post.excerpt || post.title

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: post.seo?.keywords,
    authors: post.author ? [{ name: post.author.name }] : undefined,
    robots: post.seo?.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl,
      languages: generateAlternateUrls(`blog/${slug}`),
    },
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: canonicalUrl,
      siteName: 'SIDIKOFF DIGITAL',
      locale: 'fr_FR',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author.name] : undefined,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
      images: [imageUrl],
      creator: '@sidikoffdigital',
    },
  }
}

export async function generateStaticParams() {
  return []
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Build FAQPage schema from Sanity FAQ items (managed via CMS → FAQ Schema tab)
  const faqSchema =
    post.faq && post.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null

  return (
    <div className='min-h-screen bg-gray-50'>
      {faqSchema && (
        <script
          id={`faq-schema-${slug}`}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <BlogPostContent post={post} />
    </div>
  )
}
