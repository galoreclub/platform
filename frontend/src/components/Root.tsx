import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'
import { CartProvider } from '@shopify/hydrogen-react'

const Root = () => {
  return (
    <div className="m-auto flex max-w-screen-2xl flex-col">
      <CartProvider
        onLineAdd={() => {
          console.log('a line is being added')
        }}
        onLineAddComplete={() => {
          console.log('a line has been added')
        }}
      >
        <Header />
        <main id="main" className="mb-auto flex w-full flex-col justify-start">
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </div>
  )
}

export default Root
