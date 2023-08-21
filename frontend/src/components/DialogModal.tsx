import { Link } from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FC } from 'react'

type DialogProps = {
  open: boolean
  onClose: () => void
  message: string
}

export const DialogModal: FC<DialogProps> = ({ open, onClose, message }) => {
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <div className="fixed inset-0 bg-black/25" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto flex max-w-sm flex-col gap-6 bg-white p-6">
              <button
                onClick={onClose}
                className="ml-auto h-4 w-4 flex-shrink-0 cursor-pointer text-sm lg:text-xl"
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
              <div className="m-auto flex flex-col items-center justify-center gap-6">
                <h2 className="font-helvetica-bold text-sm uppercase">
                  {message}
                </h2>
                <div>
                  <svg
                    width="88"
                    height="88"
                    viewBox="0 0 88 88"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5332 45.1737L36.6665 61.6004L68.9332 26.4004"
                      stroke="black"
                      stroke-width="5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle
                      cx="44"
                      cy="44"
                      r="41.5"
                      stroke="black"
                      stroke-width="5"
                    />
                  </svg>
                </div>
                <Link
                  to="/home"
                  className="m-auto flex items-center justify-center bg-black px-10 py-2 text-sm uppercase text-white"
                  onClick={onClose}
                >
                  back to homepage
                </Link>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false)

  function openDialog() {
    setIsOpen(true)
  }

  function closeDialog() {
    setIsOpen(false)
  }

  return {
    isOpen,
    openDialog,
    closeDialog,
  }
}
