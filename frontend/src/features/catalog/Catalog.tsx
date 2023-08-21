import { useQuery } from '@apollo/client'
import { useAppSelector } from '../../app/hooks'
import { GET_PRODUCTS } from '../../app/graphql/queries'
import { useState } from 'react'
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

  if (loading) {
    return <>Loading...</>
  }

  if (error) {
    return <>{error.message}</>
  }

  return (
    <>
      <CatalogMenu data={data} />
      <ProductList data={data} />
    </>
  )
}
