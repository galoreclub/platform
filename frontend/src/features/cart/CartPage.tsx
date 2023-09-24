import { CartComponent } from './CartComponent'

export const CartPage = () => {
  return (
    <>
      <div className="m-auto lg:w-8/12">
        <CartComponent inDialog={false} />
      </div>
    </>
  )
}
