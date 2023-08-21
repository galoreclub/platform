import { useCart } from '@shopify/hydrogen-react'

export const CartBadge = () => {
  const { totalQuantity } = useCart()

  if (!totalQuantity || totalQuantity < 1) return null

  return (
    <div className="absolute right-0 top-0 flex h-3 w-auto min-w-[0.75rem] items-center justify-center rounded-full bg-black px-[0.125rem] py-[0.125rem] text-center text-[0.625rem] font-medium leading-none text-white subpixel-antialiased">
      {totalQuantity}
    </div>
  )
}
