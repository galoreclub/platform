import { Link } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { ProductPrice } from '@shopify/hydrogen-react'

export const ProductList = () => {
  const products = useAppSelector((state) => state.catalog.products)
  return (
    <>
      <section className=" m-auto flex auto-cols-fr grid-flow-col flex-col items-center gap-2 sm:grid sm:w-10/12 sm:grid-cols-3 sm:gap-10 md:gap-20">
        {products.map((product) => (
          <Link to={`/catalog/${product.handle}`}>
            <article key={product.id} className="m-auto flex flex-col gap-1">
              <img
                className="h-fit w-fit object-scale-down"
                src={product.featuredImage.originalSrc}
                alt={product.featuredImage.altText}
              />
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
