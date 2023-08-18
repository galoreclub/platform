import { useQuery } from '@apollo/client'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { GET_PRODUCTS } from '../../app/graphql/queries'
import { useEffect, useState } from 'react'
import { loadProducts } from './catalogSlice'
import { flattenConnection } from '@shopify/hydrogen-react'
import { ProductList } from './ProductList'
import { CatalogMenu } from './CatalogMenu'

export const Catalog = () => {
  const [cursor, setCursor] = useState(null)
  const query = useAppSelector((state) => state.query.queryBuilder)
  const sortKey = useAppSelector((state) => state.query.sortKey)
  const reverse = useAppSelector((state) => state.query.reverse)
  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    variables: {
      query: query.join(' AND '),
      sortKey: sortKey,
      cursor: cursor,
      reverse: reverse,
    },
  })
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (data) {
      const products = flattenConnection(data.products)
      dispatch(loadProducts(products))
    }
  }, [data])

  if (loading) {
    return <>Loading...</>
  }

  if (error) {
    return <>{error.message}</>
  }

  return (
    <>
      <div className="m-auto flex w-full flex-col gap-4 p-4">
        <div className="mb-10 flex flex-row gap-1 self-start text-xs leading-4">
          <a href="/home">HOME</a>
          <span className="border-l-solid border-l-[1px] border-l-black pl-1">
            BUY
          </span>
        </div>
        <h2 className="font-seasons text-2xl md:text-4xl">
          Pre owned designer bags
        </h2>
        <p className="mt-2 text-xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio eaque
          hic vel nihil, fugit minima enim voluptate quo id dolor repellat natus
          eum cumque optio blanditiis fuga in obcaecati ex!
        </p>

        <CatalogMenu data={data} />
        <ProductList />
      </div>
    </>
  )
}
