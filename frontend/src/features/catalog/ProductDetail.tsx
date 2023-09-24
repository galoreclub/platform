import {
  ProductPrice,
  // useProduct,
} from '@shopify/hydrogen-react'
import type { Product } from '@shopify/hydrogen-react/storefront-api-types'
import ProductImage from '../../components/ProductImage'
import ProductAddToCartButton from './ProductAddToCartButton'
import { Link } from 'react-router-dom'
import { CartDialog, useCartDialog } from '../cart/CartDialog'

export function ProductDetail({
  product,
  description,
  variantId,
}: {
  product: Product
  description: string
  variantId: string
}) {
  const { isOpen, openCartDialog, closeCartDialog } = useCartDialog()
  // const { product, variants, selectedVariantId } = useProduct()
  // Unable to implement useProduct() hook due to Type Error (two different PartialDeep<Product> types, unsure how to fix)
  // ProductProvider necssary for AddToCartButton to work
  // Resort to minor prop drilling for now

  return (
    <>
      <CartDialog open={isOpen} onClose={closeCartDialog}>
        <div className="grid auto-cols-fr grid-cols-3 items-center justify-between border-t border-border/50 p-4">
          <img
            className="h-20 w-auto max-w-full object-contain sm:h-40"
            src={product?.featuredImage?.url}
            alt=""
          />
          <span className="text-center">{product?.title}</span>
          {product && (
            <ProductPrice
              data={product}
              valueType="unit"
              withoutTrailingZeros
              as="div"
              className="mx-auto flex items-end justify-center font-helvetica-bold text-black md:text-lg"
            />
          )}
        </div>
        <Link
          to="/cart"
          className="mx-auto mb-4 flex w-fit cursor-pointer items-center bg-black px-12 py-3 text-xs uppercase text-white hover:bg-focused"
        >
          GO TO CART
        </Link>
      </CartDialog>
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
        <section className="m-auto flex flex-col-reverse items-center justify-between gap-4 sm:grid sm:grid-cols-3 sm:gap-10 sm:px-10 md:w-10/12 md:gap-20">
          <div className="flex flex-1 flex-col gap-6 md:flex-auto">
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
          <div className="my-6 flex w-full flex-1 flex-col items-center justify-center sm:order-3">
            {product && (
              <ProductPrice
                data={product}
                valueType="unit"
                withoutTrailingZeros
                as="div"
                className="mx-auto flex items-start justify-center font-helvetica-bold text-black md:text-lg"
              />
            )}
            <div className="flex w-full flex-col">
              <ProductAddToCartButton
                openDialog={openCartDialog}
                variantId={variantId}
              >
                ADD TO CART
              </ProductAddToCartButton>
              {/* TODO: Implement wish list functionality */}
              <button
                type="button"
                className="mx-auto mt-2 flex w-6/12 cursor-pointer items-center justify-center bg-border py-2 text-xs uppercase text-white hover:bg-focused sm:w-full"
              >
                ADD TO WISHLIST
              </button>
            </div>
          </div>
          <div className="w-full flex-1 md:flex-auto">
            <ProductImage product={product} />
          </div>
        </section>
      </div>
    </>
  )
}
