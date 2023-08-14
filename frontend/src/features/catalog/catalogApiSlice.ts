import { shopifyApiSlice } from '../../app/api/shopifyApiSlice'
import { gql } from 'graphql-request'

const GRAPHQL_QUERY = `
  query getProducts($first: Int) {
    products(first: $first) {
      edges {
        cursor
        node {
          title
        }
      }
    }
  }
`
export const catalogApiSlice = shopifyApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        document: gql`
          ${GRAPHQL_QUERY}
        `,
      }),
    }),
    // getProduct: builder.query({
    //   query: () => ({
    //     url: '',
    //     method: 'POST',
    //   }),
    // }),
    // getProductsByCategory: builder.query({
    //   query: (category) => ({
    //     url: `catalog/products/?category=${category}`,
    //     method: 'GET',
    //   }),
    // }),
  }),
})

export const {
  useGetProductsQuery,
  // useGetProductQuery,
  // useGetProductsByCategoryQuery,
} = catalogApiSlice
