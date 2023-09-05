import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { createStorefrontClient } from '@shopify/hydrogen-react'

const shopifyClient = createStorefrontClient({
  publicStorefrontToken: import.meta.env.VITE_PUBLIC_STOREFRONT_TOKEN,
  storeDomain: import.meta.env.VITE_STORE_DOMAIN,
  storefrontApiVersion: '2023-07',
})

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: shopifyClient.getStorefrontApiUrl(),
    headers: shopifyClient.getPublicTokenHeaders(),
  }),
})
