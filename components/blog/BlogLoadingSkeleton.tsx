export default function BlogLoadingSkeleton() {
  return (
    <div className='space-y-12'>
      {/* Featured Posts Skeleton */}
      <section>
        <div className='h-8 bg-gray-200 dark:bg-gray-700 rounded w-64 mx-auto mb-8 animate-pulse' />
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className='bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg'>
              <div className='h-48 bg-gray-200 dark:bg-gray-700 animate-pulse' />
              <div className='p-6 space-y-4'>
                <div className='h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse' />
                <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse' />
                <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse' />
                <div className='flex justify-between items-center'>
                  <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse' />
                  <div className='h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Search and Filter Skeleton */}
      <section className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg'>
        <div className='grid md:grid-cols-2 gap-4'>
          <div className='h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse' />
          <div className='h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse' />
        </div>
      </section>

      {/* Posts Grid Skeleton */}
      <section>
        <div className='h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-8 animate-pulse' />
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className='bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg'>
              <div className='h-48 bg-gray-200 dark:bg-gray-700 animate-pulse' />
              <div className='p-6 space-y-4'>
                <div className='flex gap-2'>
                  <div className='h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16 animate-pulse' />
                  <div className='h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-20 animate-pulse' />
                </div>
                <div className='h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse' />
                <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse' />
                <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse' />
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-4'>
                    <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse' />
                    <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse' />
                  </div>
                  <div className='h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
