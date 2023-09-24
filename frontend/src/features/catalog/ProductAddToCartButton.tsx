import { AddToCartButton } from '@shopify/hydrogen-react'

export default function ProductAddToCartButton({
  variantId,
  children,
  openDialog,
}: {
  variantId: string
  children: React.ReactNode
  openDialog: () => void
}) {
  if (!variantId) {
    return null
  }

  return (
    <AddToCartButton
      onClick={openDialog}
      variantId={variantId}
      children={children}
      className="mx-auto mt-2 flex w-6/12 cursor-pointer items-center justify-center bg-black px-10 py-2 text-xs uppercase text-white hover:bg-focused sm:w-full"
    ></AddToCartButton>
  )
}
