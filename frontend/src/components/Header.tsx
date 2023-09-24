import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { CartDrawer } from '../features/cart/CartDrawer'
import { useCartDrawer } from '../features/cart/CartDrawer'
import { CartComponent } from '../features/cart/CartComponent'
import { CartBadge } from '../features/cart/CartBadge'
import { HeaderDrawer } from './HeaderDrawer'
import { useHeaderDrawer } from './HeaderDrawer'

export const Header = () => {
  const { isOpen, toggleHeaderDrawer } = useHeaderDrawer()
  const { isCartOpen, openCartDrawer, closeCartDrawer } = useCartDrawer()

  return (
    <>
      <HeaderDrawer open={isOpen} toggleHeaderDrawer={toggleHeaderDrawer} />
      <CartDrawer open={isCartOpen} onClose={closeCartDrawer}>
        <CartComponent onClose={closeCartDrawer} inDialog={true} />
      </CartDrawer>
      <header className="sticky top-0 z-10 bg-white p-2 lg:px-6">
        <section
          id="main-menu"
          className="mx-auto flex flex-row items-center justify-between p-2 lg:items-end"
        >
          <div className="mr-6 sm:flex-1 md:mr-0">
            <button
              onClick={toggleHeaderDrawer}
              id="main-hamburger-btn"
              className="relative h-6 w-6 cursor-pointer text-3xl lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <nav
              className="hidden uppercase lg:block"
              aria-label="desktop-menu"
            >
              <ul className="flex flex-grow flex-row pb-2 text-sm font-light lg:gap-6 xl:gap-10">
                <li className="text-center">
                  <Link
                    to="/catalog"
                    className="text-white-200 mr-2 mt-4 block lg:mt-0 lg:inline-block"
                  >
                    buy
                  </Link>
                </li>
                <li className="text-center">
                  <Link
                    to="/rent"
                    className="text-white-200 mr-2 mt-4 block lg:mt-0 lg:inline-block"
                  >
                    rent
                  </Link>
                </li>
                <li className="text-center">
                  <Link
                    to="#"
                    className="text-white-200 mr-2 mt-4 block lg:mt-0 lg:inline-block"
                  >
                    sell
                  </Link>
                </li>
                <li className="text-center">
                  <Link
                    to="/who-we-are"
                    className="text-white-200 mr-2 mt-4 block lg:mt-0 lg:inline-block"
                  >
                    who we are
                  </Link>
                </li>
                <li className="text-center">
                  <Link
                    to="#"
                    className="text-white-200 mr-2 mt-4 block lg:mt-0 lg:inline-block"
                  >
                    how it works
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <h1 className="flex flex-shrink-0 items-start justify-center justify-self-center object-contain lg:pb-4">
            <Link to="/home">
              <img
                className="max-w-[130px] md:max-w-[160px]"
                src={logo}
                alt="logo"
              />
            </Link>
          </h1>
          <div className="flex flex-1 justify-end">
            <nav id="util-menu" className="w-full uppercase" aria-label="main">
              <ul className="flex flex-grow flex-row justify-end gap-6 text-sm font-light xl:gap-10">
                <li className="hidden text-center lg:block">
                  <Link
                    to="#"
                    className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
                  >
                    digital passport
                  </Link>
                </li>
                <li className="hidden text-center lg:block">
                  <Link
                    to="#"
                    className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
                  >
                    sustainability
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="material-symbols-outlined">search</span>
                  </Link>
                </li>
                <li className="hidden sm:block">
                  <Link to="#">
                    <span className="material-symbols-outlined">favorite</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="material-symbols-outlined">person</span>
                  </Link>
                </li>
                <li>
                  <button
                    className="relative flex items-center justify-center"
                    onClick={openCartDrawer}
                  >
                    <span className="material-symbols-outlined">
                      shopping_cart
                    </span>
                    <CartBadge />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </header>
    </>
  )
}
