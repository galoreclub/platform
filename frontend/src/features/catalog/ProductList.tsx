import { Link } from 'react-router-dom'
import { ProductPrice, flattenConnection } from '@shopify/hydrogen-react'
import ProductImage from '../../components/ProductImage'
import { LoadingPage } from '../../components/Loading'

export const ProductList = ({ data }: { data: any }) => {
  const products = flattenConnection(data.products)

  if (!products) {
    return <LoadingPage />
  }

  return (
    <>
      <section className="m-auto flex min-w-full flex-col items-center justify-center sm:grid sm:w-10/12 sm:auto-cols-fr sm:grid-cols-2 sm:gap-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-20">
        {products.map((product: any) => (
          <Link
            className="flex w-full flex-col items-center justify-center gap-2"
            key={product.id}
            to={`/catalog/${product.handle}`}
          >
            <article className="mx-auto flex min-w-full flex-col gap-2 px-10">
              <ProductImage product={product} />
              <h3 className="font-helvetica-bold">{product.vendor}</h3>
              <p className="text-subdued md:text-sm">{product.title}</p>
              <ProductPrice
                data={product}
                valueType="unit"
                withoutTrailingZeros
                as="div"
                className="text-black md:text-sm"
              />
            </article>
          </Link>
        ))}
      </section>
    </>
  )
}
