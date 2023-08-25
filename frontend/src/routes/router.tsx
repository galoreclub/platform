import { createBrowserRouter } from 'react-router-dom'
import Root from '../components/Root.tsx'
import ErrorPage from '../pages/ErrorPage.tsx'
import { Landing } from '../pages/Landing.tsx'
import { Home } from '../pages/Home.tsx'
import { Account } from '../pages/Account.tsx'
import { Catalog } from '../features/catalog/Catalog.tsx'
import { ProductDetailPage } from '../features/catalog/ProductDetailPage.tsx'
import { ActivateForm } from '../features/auth/ActivateForm.tsx'
import { ResetForm } from '../features/auth/ResetForm.tsx'
import BagList from '../pages/NewBagReview.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Landing />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/home',
        element: <Home />,
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
        element: <Catalog />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/catalog/:handle',
        element: <ProductDetailPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/bagsReview',
        element: <BagList />,
        errorElement: <ErrorPage />,
      },
    ],
  },
])
