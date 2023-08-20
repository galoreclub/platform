import React from 'react'
import { Image } from '@shopify/hydrogen-react'
import type { Product } from '@shopify/hydrogen-react/storefront-api-types'

export default function ProductImage({ product }: { product: Product }) {
  if (!product.featuredImage) {
    return null
  }

  return (
    <Image
      data={product.featuredImage}
      sizes="(min-width: 45em) 50vw, 100vw"
      aspectRatio="4/5"
      className="object-contain"
    />
  )
}
