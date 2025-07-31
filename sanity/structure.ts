/* eslint-disable @typescript-eslint/no-explicit-any */

export const structure = (S: any) =>
  S.list()
    .title('SIDIKOFF DIGITAL Blog')
    .items([
      // Blog Posts with status filtering
      S.listItem()
        .title('📝 Blog Posts')
        .child(
          S.list()
            .title('Blog Posts')
            .items([
              S.listItem()
                .title('Published Posts')
                .icon(() => '✅')
                .child(
                  S.documentTypeList('blogPost')
                    .title('Published Posts')
                    .filter('_type == "blogPost" && status == "published"')
                    .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('Draft Posts')
                .icon(() => '📝')
                .child(
                  S.documentTypeList('blogPost')
                    .title('Draft Posts')
                    .filter('_type == "blogPost" && status == "draft"')
                    .defaultOrdering([{ field: '_updatedAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('Featured Posts')
                .icon(() => '⭐')
                .child(
                  S.documentTypeList('blogPost')
                    .title('Featured Posts')
                    .filter('_type == "blogPost" && featured == true')
                    .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('All Posts')
                .icon(() => '📚')
                .child(
                  S.documentTypeList('blogPost')
                    .title('All Posts')
                    .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
                ),
            ])
        ),

      // Divider
      S.divider(),

      // Categories
      S.listItem()
        .title('🏷️ Categories')
        .child(
          S.documentTypeList('blogCategory')
            .title('Blog Categories')
            .defaultOrdering([{ field: 'title', direction: 'asc' }])
        ),

      // Authors
      S.listItem()
        .title('👤 Authors')
        .child(
          S.documentTypeList('author')
            .title('Authors')
            .defaultOrdering([{ field: 'name', direction: 'asc' }])
        ),

      // Divider
      S.divider(),
    ])
