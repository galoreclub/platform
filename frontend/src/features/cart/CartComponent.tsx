import {
  CartCost,
  CartLineProvider,
  useCart,
  CartCheckoutButton,
} from '@shopify/hydrogen-react'
import { CartLineItem } from './CartLineItem'
import { Link } from 'react-router-dom'

type CartComponentProps = {
  inDialog: boolean
  onClose?: () => void
}

export const CartComponent = ({ inDialog, onClose }: CartComponentProps) => {
  const { lines, totalQuantity } = useCart()

  if (lines?.length === 0) {
    return (
      <>
        <div className="m-auto flex min-h-fit w-full flex-col gap-4 p-4">
          <h2 className="m-auto font-seasons text-2xl">Your Cart Is Empty</h2>
          <Link
            to="/catalog"
            className="mx-auto mt-2 flex cursor-pointer items-center justify-center bg-black px-12 py-3 text-xs uppercase text-white hover:bg-focused"
          >
            Continue Shopping
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="m-auto flex min-h-fit w-full flex-col gap-4 p-4">
        <h2 className="font-seasons text-2xl">Your Cart</h2>
        <div className="flex w-full flex-col gap-10 overflow-y-scroll">
          <div className="flex flex-row justify-between border-b border-border/50">
            <span>ITEM</span>
            <span>TOTAL</span>
          </div>
          <div className="flex min-h-fit flex-col gap-4">
            {lines?.map((line: any) => {
              return (
                <CartLineProvider key={line.id} line={line}>
                  <CartLineItem inDialog={inDialog} />
                </CartLineProvider>
              )
            })}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <span
                className={`${inDialog ? 'text-sm' : ''} flex justify-between`}
              >
                Total Items
              </span>
              <span className="font-helvetica-bold">{totalQuantity}</span>
            </div>
            <div
              className={`${inDialog ? 'text-sm' : ''} flex justify-between`}
            >
              <span>Delivery</span>
              <span className="text-sm text-subdued/80">
                Calculated at checkout
              </span>
            </div>
            <div
              className={`${inDialog ? 'text-sm' : ''} flex justify-between`}
            >
              <span>Subtotal</span>
              <CartCost amountType="subtotal" className="font-helvetica-bold" />
            </div>
          </div>
          {inDialog ? (
            <Link
              to="/cart"
              className="mx-auto mt-2 flex cursor-pointer items-center justify-center bg-black px-12 py-3 text-xs uppercase text-white hover:bg-focused"
              onClick={onClose}
            >
              GO TO CART
            </Link>
          ) : (
            <CartCheckoutButton
              as="button"
              className="mx-auto mt-2 flex cursor-pointer items-center justify-center bg-black px-12 py-3 text-xs uppercase text-white hover:bg-focused"
            >
              CHECKOUT
            </CartCheckoutButton>
          )}
        </div>
      </div>
    </>
  )
}
