export default function BlogPostSkeleton() {
  return (
    <article className='container mx-auto px-4 py-8'>
      {/* Breadcrumbs Skeleton */}
      <div className='flex items-center space-x-2 mb-8'>
        <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse' />
        <span className='text-gray-400'>/</span>
        <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-12 animate-pulse' />
        <span className='text-gray-400'>/</span>
        <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-32 animate-pulse' />
      </div>

      {/* Header Skeleton */}
      <header className='mb-12'>
        {/* Categories */}
        <div className='flex gap-2 mb-4'>
          <div className='h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-20 animate-pulse' />
          <div className='h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-24 animate-pulse' />
        </div>

        {/* Title */}
        <div className='space-y-3 mb-6'>
          <div className='h-8 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse' />
          <div className='h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse' />
        </div>

        {/* Excerpt */}
        <div className='space-y-2 mb-8'>
          <div className='h-6 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse' />
          <div className='h-6 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse' />
        </div>

        {/* Meta Information */}
        <div className='flex gap-6 mb-8'>
          <div className='h-5 bg-gray-200 dark:bg-gray-700 rounded w-32 animate-pulse' />
          <div className='h-5 bg-gray-200 dark:bg-gray-700 rounded w-28 animate-pulse' />
          <div className='h-5 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse' />
        </div>

        {/* Action Buttons */}
        <div className='flex gap-4 mb-8'>
          <div className='h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-24 animate-pulse' />
          <div className='h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-28 animate-pulse' />
        </div>

        {/* Featured Image */}
        <div className='h-64 md:h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse' />
      </header>

      <div className='grid lg:grid-cols-12 gap-12'>
        {/* Main Content */}
        <div className='lg:col-span-8'>
          <div className='space-y-6'>
            {/* Content blocks */}
            {[...Array(8)].map((_, i) => (
              <div key={i} className='space-y-3'>
                <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse' />
                <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-11/12 animate-pulse' />
                <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5 animate-pulse' />
              </div>
            ))}

            {/* Image placeholder */}
            <div className='h-64 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse my-8' />

            {/* More content */}
            {[...Array(4)].map((_, i) => (
              <div key={i + 8} className='space-y-3'>
                <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse' />
                <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-10/12 animate-pulse' />
              </div>
            ))}
          </div>

          {/* Author Bio Skeleton */}
          <div className='mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl'>
            <div className='flex items-start gap-4'>
              <div className='w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse' />
              <div className='flex-1 space-y-3'>
                <div className='h-6 bg-gray-200 dark:bg-gray-700 rounded w-32 animate-pulse' />
                <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse' />
                <div className='space-y-2'>
                  <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse' />
                  <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className='lg:col-span-4'>
          {/* Back to Blog */}
          <div className='h-6 bg-gray-200 dark:bg-gray-700 rounded w-32 animate-pulse mb-8' />

          {/* Related Posts */}
          <div className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg'>
            <div className='h-6 bg-gray-200 dark:bg-gray-700 rounded w-40 animate-pulse mb-6' />
            <div className='space-y-4'>
              {[...Array(3)].map((_, i) => (
                <div key={i} className='flex gap-3 p-3'>
                  <div className='w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse' />
                  <div className='flex-1 space-y-2'>
                    <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse' />
                    <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse' />
                    <div className='h-3 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
