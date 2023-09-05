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
          storeDomain={import.meta.env.VITE_STORE_DOMAIN}
          storefrontToken={import.meta.env.VITE_PUBLIC_STOREFRONT_TOKEN}
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
