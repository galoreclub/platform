import { useQuery } from '@apollo/client'
import { useAppSelector } from '../../app/hooks'
import { GET_PRODUCTS } from '../../app/graphql/queries'
import { ProductList } from './ProductList'
import { CatalogMenu } from './CatalogMenu'
import { LoadingPage } from '../../components/Loading'

export const Catalog = () => {
  const query = useAppSelector((state) => state.query.queryBuilder)
  const sortKey = useAppSelector((state) => state.query.sortKey)
  const reverse = useAppSelector((state) => state.query.reverse)
  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    variables: {
      query: query.join(' AND '),
      sortKey: sortKey,
      cursor: null,
      reverse: reverse,
    },
  })

  if (loading) {
    return <LoadingPage size={60} />
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
