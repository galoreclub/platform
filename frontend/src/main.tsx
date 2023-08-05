import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.tsx'
import { Landing } from './pages/Landing.tsx'
import { Home } from './pages/Home.tsx'
import { SignInModal } from './components/SignInModal.tsx'

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
        children: [
          {
            path: '/home/signin',
            element: <SignInModal />,
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
