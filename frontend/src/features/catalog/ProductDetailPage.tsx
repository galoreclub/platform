import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_PRODUCT } from '../../app/graphql/queries'
import { useEffect, useState } from 'react'
import DOMPurify from 'dompurify'
import React from 'react'
import { ProductDetail } from './ProductDetail'
import { ProductProvider, flattenConnection } from '@shopify/hydrogen-react'
import { ProductVariantConnection } from '@shopify/hydrogen-react/storefront-api-types'

export const ProductDetailPage = () => {
  const { handle } = useParams()
  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: { handle },
  })
  const [description, setDescription] = useState<string | null>()

  let content: React.JSX.Element | undefined

  useEffect(() => {
    if (data) {
      const sanitizedHtml = DOMPurify.sanitize(data.product.descriptionHtml)
      setDescription(sanitizedHtml)
    }
  }, [data])

  if (loading && !description) {
    content = <>Loading...</>
  } else if (error) {
    content = <>{error.message}</>
  } else if (data && description) {
    const variantId = flattenConnection<ProductVariantConnection>(
      data.product.variants
    )[0].id

    content = (
      <>
        <ProductProvider data={data.product} initialVariantId={variantId}>
          <ProductDetail
            product={data.product}
            description={description}
            variantId={variantId}
          />
        </ProductProvider>
      </>
    )
  }

  return content
}
