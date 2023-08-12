import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.tsx'
import { Landing } from './pages/Landing.tsx'
import { Home } from './pages/Home.tsx'
import { PasswordReset } from './pages/PasswordReset.tsx'
import { Catalog } from './pages/Catalog.tsx'
import { store } from './app/store.ts'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/resetpassword',
        element: <PasswordReset />,
      },
      {
        path: '/catalog',
        element: <Catalog />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
