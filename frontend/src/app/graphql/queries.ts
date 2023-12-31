import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
  query (
    $cursor: String
    $query: String!
    $sortKey: ProductSortKeys
    $reverse: Boolean
  ) {
    products(
      first: 12
      after: $cursor
      query: $query
      sortKey: $sortKey
      reverse: $reverse
    ) {
      edges {
        node {
          id
          handle
          title
          vendor
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
      variants(first: 1) {
        edges {
          node {
            id
            title
            selectedOptions {
              name
              value
            }
            priceV2 {
              amount
              currencyCode
            }
          }
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

export const GET_BAGS = gql`
  query GetBags {
    bags {
      _id
      brand
      size
      condition
      serialNum
      material
      model
      images {
        data
        mimetype
      }
    }
  }
`;
