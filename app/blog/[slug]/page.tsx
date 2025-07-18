import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import BlogPost from '@/components/blog/BlogPost'
import BlogPostSkeleton from '@/components/blog/BlogPostSkeleton'
import { getPostBySlug, getRelatedPosts, getAllPosts } from '@/lib/blog-api'
import { getLocalizedContent } from '@/lib/blog-api'
import { urlFor } from '@/lib/sanity'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const { posts } = await getAllPosts()

  const paths = posts.flatMap((post) => [
    { slug: post.slug.fr.current },
    { slug: post.slug.en.current },
  ])

  return paths
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Article non trouvé - SIDIKOFF DIGITAL',
      description: "L'article que vous recherchez n'existe pas ou a été supprimé.",
    }
  }

  const locale = post.slug.fr.current === slug ? 'fr' : 'en'
  const title = getLocalizedContent(post.title, locale)
  const excerpt = getLocalizedContent(post.excerpt, locale)
  const metaTitle = post.seo?.metaTitle ? getLocalizedContent(post.seo.metaTitle, locale) : title
  const metaDescription = post.seo?.metaDescription
    ? getLocalizedContent(post.seo.metaDescription, locale)
    : excerpt

  const ogImage = post.mainImage
    ? urlFor(post.mainImage.asset).width(1200).height(630).url()
    : '/opengraph-image.jpg'

  return {
    title: `${metaTitle} - SIDIKOFF DIGITAL Blog`,
    description: metaDescription,
    keywords: post.seo?.keywords || [],
    authors: [{ name: post.author.name }],
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'article',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.mainImage?.alt ? getLocalizedContent(post.mainImage.alt, locale) : title,
        },
      ],
      authors: [post.author.name],
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [ogImage],
    },
    alternates: {
      canonical: `/blog/${slug}`,
      languages: {
        fr: `/blog/${post.slug.fr.current}`,
        en: `/en/blog/${post.slug.en.current}`,
      },
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const categoryIds = post.categories?.map((cat) => cat._id) || []
  const relatedPosts = await getRelatedPosts(post._id, categoryIds)

  // Determine locale based on slug
  const locale = post.slug.fr.current === slug ? 'fr' : 'en'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: getLocalizedContent(post.title, locale),
    description: getLocalizedContent(post.excerpt, locale),
    image: post.mainImage ? urlFor(post.mainImage.asset).width(1200).height(630).url() : undefined,
    author: {
      '@type': 'Person',
      name: post.author.name,
      image: post.author.image ? urlFor(post.author.image.asset).url() : undefined,
    },
    publisher: {
      '@type': 'Organization',
      name: 'SIDIKOFF DIGITAL',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.sidikoff.com/logo-sidikoff.svg',
      },
    },
    datePublished: post.publishedAt,
    dateModified: post._updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.sidikoff.com/blog/${slug}`,
    },
    articleSection: post.categories?.[0]
      ? getLocalizedContent(post.categories[0].title, locale)
      : undefined,
    keywords: post.seo?.keywords?.join(', '),
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className='min-h-screen pt-20'>
        <Suspense fallback={<BlogPostSkeleton />}>
          <BlogPost post={post} relatedPosts={relatedPosts} locale={locale} />
        </Suspense>
      </main>
    </>
  )
}
