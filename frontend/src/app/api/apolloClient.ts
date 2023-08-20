import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { createStorefrontClient } from '@shopify/hydrogen-react'
import { ApolloLink, split } from '@apollo/client'

const shopifyClient = createStorefrontClient({
  publicStorefrontToken: '04830f22f361bcfd9b5a9ebec1deabe0',
  storeDomain: 'https://galore-theme-test.myshopify.com',
  storefrontApiVersion: '2023-07',
})

const customServerLink = createHttpLink({
  uri: 'https://galore-bag-and-story.fly.dev/graphql',
})

const link = split(
  // Define a test function to decide which link to route to
  (operation) => {
    // You'll need to customize this logic to decide which requests go to which server
    // return operation.operationName.startsWith('Bag');
    return operation.operationName === 'AddBag';
  },
  customServerLink, // The link to use for custom server operations
  createHttpLink({
    uri: shopifyClient.getStorefrontApiUrl(),
    headers: shopifyClient.getPublicTokenHeaders(),
  }) // The link to use for Shopify operations
)

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})
