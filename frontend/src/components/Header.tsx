import React, { useState } from 'react'
import logo from '../assets/logo.png'

export const Header = (): React.ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 bg-white p-2 lg:px-6">
      <section
        id="main-menu"
        className="mx-auto flex flex-row items-center justify-between p-2 lg:items-end"
      >
        <div className="mr-6 sm:flex-1 md:mr-0">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            id="main-hamburger-btn"
            className="relative h-6 w-6 cursor-pointer text-3xl lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              className={`${menuOpen ? 'hidden' : ''}`}
              fill="none"
              viewBox="0 0 18 16"
            >
              <path
                d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z"
                fill="currentColor"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              className={`${menuOpen ? '' : 'hidden'}`}
              fill="none"
              viewBox="0 0 18 17"
            >
              <path
                d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <nav className="hidden uppercase lg:block" aria-label="desktop-menu">
            <ul className="flex flex-grow flex-row pb-2 text-sm font-light lg:gap-6 xl:gap-10">
              <li className="text-center">
                <a
                  href="#"
                  className="text-white-200 mr-2 mt-4 block lg:mt-0 lg:inline-block"
                >
                  buy
                </a>
              </li>
              <li className="text-center">
                <a
                  href="#"
                  className="text-white-200 mr-2 mt-4 block lg:mt-0 lg:inline-block"
                >
                  rent
                </a>
              </li>
              <li className="text-center">
                <a
                  href="#"
                  className="text-white-200 mr-2 mt-4 block lg:mt-0 lg:inline-block"
                >
                  sell
                </a>
              </li>
              <li className="text-center">
                <a
                  href="#"
                  className="text-white-200 mr-2 mt-4 block lg:mt-0 lg:inline-block"
                >
                  who we are
                </a>
              </li>
              <li className="text-center">
                <a
                  href="#"
                  className="text-white-200 mr-2 mt-4 block lg:mt-0 lg:inline-block"
                >
                  how it works
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <h1 className="flex flex-shrink-0 items-start justify-center justify-self-center object-contain lg:pb-4">
          <a href="/home">
            <img
              className="max-w-[130px] md:max-w-[160px]"
              src={logo}
              alt="logo"
            />
          </a>
        </h1>
        <div className="flex flex-1 justify-end">
          <nav id="util-menu" className="w-full uppercase" aria-label="main">
            <ul className="flex flex-grow flex-row justify-end gap-6 text-sm font-light xl:gap-10">
              <li className="hidden text-center lg:block">
                <a
                  href="#"
                  className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
                >
                  digital passport
                </a>
              </li>
              <li className="hidden text-center lg:block">
                <a
                  href="#"
                  className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
                >
                  sustainability
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="material-symbols-outlined">search</span>
                </a>
              </li>
              <li className="hidden sm:block">
                <a href="#">
                  <span className="material-symbols-outlined">favorite</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="material-symbols-outlined">person</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        className={`top-68 absolute left-0 justify-center ${
          menuOpen ? 'block' : 'hidden'
        } animate-open-menu w-screen origin-top flex-col border-[0.2px] border-border bg-white uppercase`}
      >
        <nav
          className="flex min-h-screen flex-col p-6 text-left uppercase md:block"
          aria-label="mobile"
        >
          <ul className="m-0 flex flex-grow flex-col justify-start gap-4 p-0 text-lg font-light md:text-2xl">
            <li className="hover:bg-focused hover:text-white">
              <a
                href="#"
                className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
              >
                buy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
              >
                rent
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
              >
                sell
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
              >
                who we are
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
              >
                how it works
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
              >
                digital passport
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
              >
                sustainability
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  )
}
