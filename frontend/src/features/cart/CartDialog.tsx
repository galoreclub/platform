import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode, useState } from 'react'
import { FC } from 'react'

type CartDialogProps = {
  open: boolean
  onClose: () => void
  children: ReactNode
}

export const CartDialog: FC<CartDialogProps> = ({
  open,
  onClose,
  children,
}) => {
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <div className="fixed inset-0 bg-white/25" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4 opacity-90">
            <Dialog.Panel className="mx-auto max-w-sm bg-white">
              <header className="sticky top-0 flex w-full flex-col items-center justify-between gap-10 p-4">
                <div className="flex w-full flex-row justify-between">
                  <h3 className="font-helvetica-bold">
                    ITEM ADDED TO YOUR CART
                  </h3>
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
                </div>
                <div className="flex w-full flex-row justify-between">
                  <span>ITEM</span>
                  <span>TOTAL</span>
                </div>
              </header>
              {children}
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export const useCartDialog = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openCartDialog = () => setIsOpen(true)
  const closeCartDialog = () => setIsOpen(false)

  return { isOpen, openCartDialog, closeCartDialog }
}
