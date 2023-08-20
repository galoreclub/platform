import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './routes/router.tsx'
import { RouterProvider } from 'react-router-dom'
import { store } from './app/store.ts'
import { Provider } from 'react-redux'
import { apolloClient } from './app/api/apolloClient.ts'
import { ApolloProvider } from '@apollo/client'
import { CartProvider } from '@shopify/hydrogen-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <CartProvider
          onLineAdd={() => {
            console.log('a line is being added')
          }}
          onLineAddComplete={() => {
            console.log('a line has been added')
          }}
        >
          <RouterProvider router={router} />
        </CartProvider>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
)
