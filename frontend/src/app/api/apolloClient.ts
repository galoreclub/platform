import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { createStorefrontClient } from '@shopify/hydrogen-react'

const shopifyClient = createStorefrontClient({
  publicStorefrontToken: '04830f22f361bcfd9b5a9ebec1deabe0',
  storeDomain: 'https://galore-theme-test.myshopify.com',
  storefrontApiVersion: '2023-07',
})

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: shopifyClient.getStorefrontApiUrl(),
    headers: shopifyClient.getPublicTokenHeaders(),
  }),
})
