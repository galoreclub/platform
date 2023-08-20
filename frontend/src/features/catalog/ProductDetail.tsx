import {
  ProductPrice,
  ProductProvider,
  flattenConnection,
} from '@shopify/hydrogen-react'
import type { Product } from '@shopify/hydrogen-react/storefront-api-types'
import ProductImage from '../../components/ProductImage'
import ProductAddToCartButton from '../../components/ProductAddToCartButton'
import { Link } from 'react-router-dom'

export function ProductDetail({
  product,
  description,
}: {
  product: Product
  description: string
}) {
  const variantId = flattenConnection(product.variants)[0].id
  return (
    // Usage: Unable to implement useProduct() hook due to mismatched types (Product and PartialDeep<Product>)
    // ProductProvider necssary for AddToCartButton to work
    // Resort to prop drilling for now
    <ProductProvider data={product} initialVariantId={variantId}>
      <UsingProduct
        product={product}
        description={description}
        variantId={variantId}
      />
    </ProductProvider>
  )
}

const UsingProduct = ({
  product,
  description,
  variantId,
}: {
  product: Product
  description: string
  variantId: string
}) => {
  return (
    <>
      <div className="m-auto flex w-full flex-col gap-4 p-4">
        <div className="mb-10 flex flex-row gap-1 self-start text-xs leading-4">
          <Link to="/home">HOME</Link>
          <span className="border-l-[1px] border-solid border-black pl-1">
            <Link to="/catalog">BUY</Link>
          </span>
          <span className="border-l-[1px] border-solid border-black pl-1 uppercase">
            {product?.vendor}
          </span>
          <span className="border-l-[1px] border-solid border-black pl-1 font-helvetica-bold uppercase">
            {product?.title}
          </span>
        </div>
        <section className="flex flex-col-reverse justify-between gap-4 sm:flex-row">
          <div className="flex flex-1 flex-col gap-2">
            <div>
              <h3 className="font-helvetica-bold uppercase">
                {product?.vendor}
              </h3>
              <p>{product?.title}</p>
            </div>
            {description && (
              <div
                className="flex flex-col gap-2 text-sm [&>ul]:list-disc [&>ul]:pl-6"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>

          <div className="my-6 flex-1">
            {product && (
              <ProductPrice
                data={product}
                valueType="unit"
                withoutTrailingZeros
                as="div"
                className="mx-auto flex items-start justify-center font-helvetica-bold text-black md:text-sm"
              />
            )}
            <div className="flex flex-col">
              <ProductAddToCartButton variantId={variantId}>
                ADD TO CART
              </ProductAddToCartButton>
              {/* TODO: Implement wish list functionality */}
              <button
                type="button"
                className="mx-auto mt-2 flex w-6/12 cursor-pointer items-center justify-center bg-border py-2 text-xs uppercase text-white hover:bg-focused"
              >
                ADD TO WISHLIST
              </button>
            </div>
          </div>
          <ProductImage product={product} />
        </section>
      </div>
    </>
  )
}
