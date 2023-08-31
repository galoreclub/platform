import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink, split } from '@apollo/client'
import { createStorefrontClient } from '@shopify/hydrogen-react'
import { createUploadLink } from 'apollo-upload-client';

const shopifyClient = createStorefrontClient({
  publicStorefrontToken: '04830f22f361bcfd9b5a9ebec1deabe0',
  storeDomain: 'https://galore-theme-test.myshopify.com',
  storefrontApiVersion: '2023-07',
})

const customServerLink = createUploadLink({
  uri: 'https://galore-bag-and-story.fly.dev/graphql',
})

const customServerMiddlewareLink = new ApolloLink((operation, forward) => {
  // Here, you can add any headers you want to the request.
  operation.setContext({
    headers: {
      "x-apollo-operation-name": operation.operationName
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const shopifyLink = createHttpLink({
  uri: shopifyClient.getStorefrontApiUrl(),
  headers: shopifyClient.getPublicTokenHeaders(),
})

const CUSTOM_SERVER_OPERATIONS = new Set(['AddBag', 'UpdateBag', 'DeleteBag', 'FetchBags', 'GetBags', 'TriggerPipedreamEvent']);

const link = ApolloLink.from([
  split(
    // Define a test function to decide which link to route to
    (operation) => {
      // You'll need to customize this logic to decide which requests go to which server
      return CUSTOM_SERVER_OPERATIONS.has(operation.operationName);
    },
    customServerMiddlewareLink.concat(customServerLink), // First, apply middleware, then direct to the custom server link
    shopifyLink // The link to use for Shopify operations
  )
]);

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})
