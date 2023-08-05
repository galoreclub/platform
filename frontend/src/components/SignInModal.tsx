import { useState } from 'react'
import { SignInForm } from './SignInForm'

export const SignInModal = () => {
  const [modalOpen, setModalOpen] = useState(true)

  return (
    <div
      className={`${
        modalOpen ? '' : 'hidden'
      } duration-3000 fixed bottom-0 left-0 right-0 top-0 z-[100] flex h-screen w-screen items-center bg-subdued/40 transition-all`}
    >
      <div className="m-auto flex flex-col items-center justify-center gap-4 bg-white p-6 lg:w-6/12 lg:p-10 xl:w-4/12">
        <button
          onClick={() => setModalOpen(!modalOpen)}
          className="ml-auto h-4 w-4 flex-shrink-0 cursor-pointer text-xl"
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
        <SignInForm setModalOpen={() => setModalOpen(false)} />
      </div>
    </div>
  )
}
