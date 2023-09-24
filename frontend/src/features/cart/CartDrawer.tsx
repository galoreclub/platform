import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode, useState } from 'react'
import { FC } from 'react'

type CartDrawerProps = {
  open: boolean
  onClose: () => void
  children: ReactNode
}

export const CartDrawer: FC<CartDrawerProps> = ({
  open,
  onClose,
  children,
}) => {
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <div className="fixed inset-0 bg-white/25" />
          <div className="fixed inset-0 overflow-y-auto pl-10">
            <div className="absolute right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="min-h-full max-w-lg transform bg-white text-left align-middle antialiased shadow-xl transition-all">
                  <header className="sticky top-0 flex h-20 items-center px-4 md:px-6">
                    <button
                      className="h-4 w-4 cursor-pointer text-3xl"
                      onClick={onClose}
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
                  </header>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export const useCartDrawer = (openDefault = false) => {
  const [isCartOpen, setIsCartOpen] = useState(openDefault)

  function openCartDrawer() {
    setIsCartOpen(true)
  }

  function closeCartDrawer() {
    setIsCartOpen(false)
  }

  return {
    isCartOpen,
    openCartDrawer,
    closeCartDrawer,
  }
}
