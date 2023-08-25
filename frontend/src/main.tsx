import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './routes/router.tsx'
import { RouterProvider } from 'react-router-dom'
import { store } from './app/store.ts'
import { Provider } from 'react-redux'
import { apolloClient } from './app/api/apolloClient.ts'
import { ApolloProvider } from '@apollo/client'
import { ShopifyProvider } from '@shopify/hydrogen-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <ShopifyProvider
          storeDomain="https://galore-theme-test.myshopify.com"
          storefrontToken="04830f22f361bcfd9b5a9ebec1deabe0"
          storefrontApiVersion="2023-07"
          countryIsoCode="GB"
          languageIsoCode="EN"
        >
          <RouterProvider router={router} />
        </ShopifyProvider>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
)
