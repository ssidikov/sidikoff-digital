declare module '@sanity/image-url' {
  import { SanityClient } from 'next-sanity'

  export interface SanityImageSource {
    asset?: {
      _ref?: string
      _id?: string
    }
    _ref?: string
    _id?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }

  export interface ImageUrlBuilder {
    image: (source: SanityImageSource) => ImageUrlBuilder
    width: (width: number) => ImageUrlBuilder
    height: (height: number) => ImageUrlBuilder
    quality: (quality: number) => ImageUrlBuilder
    auto: (value: 'format') => ImageUrlBuilder
    fit: (value: string) => ImageUrlBuilder
    url: () => string
    toString: () => string
  }

  export default function imageUrlBuilder(client: SanityClient): {
    image: (source: SanityImageSource) => ImageUrlBuilder
  }
}
