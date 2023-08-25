import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'
import { CartProvider } from '@shopify/hydrogen-react'

const Root = () => {
  return (
    <>
      <CartProvider
        onLineAdd={() => {
          console.log('a line is being added')
        }}
        onLineAddComplete={() => {
          console.log('a line has been added')
        }}
      >
        <Header />
        <main id="main" className="mb-auto flex flex-col justify-start">
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </>
  )
}

export default Root
