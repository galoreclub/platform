import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
  query ($cursor: String, $query: String) {
    products(first: 12, after: $cursor, query: $query) {
      edges {
        node {
          id
          handle
          title
          vendor
          featuredImage {
            originalSrc
            altText
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
      pageInfo {
        startCursor
        hasNextPage
        hasPreviousPage
        endCursor
      }
    }
  }
`

export const GET_PRODUCT = gql`
  query ($handle: String!) {
    product(handle: $handle) {
      id
      handle
      title
      vendor
      descriptionHtml
      featuredImage {
        url
        altText
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
    }
  }
`
export const GET_VENDORS = gql`
  query {
    products(first: 200, query: "vendor:*") {
      edges {
        node {
          vendor
        }
      }
    }
  }
`
