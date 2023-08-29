import { createBrowserRouter } from 'react-router-dom'
import Root from '../components/Root.tsx'
import ErrorPage from '../pages/ErrorPage.tsx'
import { LandingPage } from '../pages/LandingPage.tsx'
import { HomePage } from '../pages/HomePage.tsx'
import { Account } from '../pages/Account.tsx'
import { ProductDetailPage } from '../features/catalog/ProductDetailPage.tsx'
import { ActivateForm } from '../features/auth/ActivateForm.tsx'
import { ResetForm } from '../features/auth/ResetForm.tsx'
import { CartPage } from '../features/cart/CartPage.tsx'
import { CatalogPage } from '../pages/CatalogPage.tsx'
import { Rent } from '../pages/Rent.tsx'
import { WhoWeAre } from '../pages/WhoWeAre.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/home',
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/account',
        element: <Account />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/account/activate/:customerid/:activationtoken',
            element: <ActivateForm />,
            errorElement: <ErrorPage />,
          },
          {
            path: '/account/recover',
            element: <ResetForm />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: '/catalog',
        element: <CatalogPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/catalog/:handle',
        element: <ProductDetailPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/rent',
        element: <Rent />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/who-we-are',
        element: <WhoWeAre />,
        errorElement: <ErrorPage />,
      },
    ],
  },
])
