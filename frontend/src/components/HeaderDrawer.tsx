import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

export const HeaderDrawer = ({
  open,
  toggleHeaderDrawer,
}: {
  open: boolean
  toggleHeaderDrawer: () => void
}) => {
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <section
            id="mobile-menu"
            className="w-fit-content fixed left-0 z-50 max-w-lg origin-top transform flex-col justify-center bg-white text-left align-middle uppercase antialiased shadow-xl transition-all"
          >
            <nav
              className="flex min-h-screen flex-col p-6 text-left uppercase md:block"
              aria-label="mobile"
            >
              <button
                className="relative h-4 w-4 cursor-pointer self-end text-3xl lg:hidden"
                onClick={toggleHeaderDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  fill="none"
                  viewBox="0 0 18 17"
                >
                  <path
                    d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <ul className="m-0 flex flex-grow flex-col justify-start gap-4 p-0 text-lg font-light md:text-2xl">
                <li>
                  <Link
                    to="/catalog"
                    className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
                    onClick={toggleHeaderDrawer}
                  >
                    buy
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
                    onClick={toggleHeaderDrawer}
                  >
                    rent
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
                    onClick={toggleHeaderDrawer}
                  >
                    sell
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
                    onClick={toggleHeaderDrawer}
                  >
                    who we are
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
                    onClick={toggleHeaderDrawer}
                  >
                    how it works
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
                    onClick={toggleHeaderDrawer}
                  >
                    digital passport
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block"
                    onClick={toggleHeaderDrawer}
                  >
                    sustainability
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
        </Transition.Child>
      </Transition.Root>
    </>
  )
}

export const useHeaderDrawer = (openDefault = false) => {
  const [isOpen, setIsOpen] = useState(openDefault)

  const toggleHeaderDrawer = () => {
    setIsOpen((isOpen) => !isOpen)
  }

  return {
    isOpen,
    toggleHeaderDrawer,
  }
}
