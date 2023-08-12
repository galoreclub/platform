import { useState } from 'react'
import { SignInForm } from './SignInForm'
import { RegisterForm } from './RegisterForm'

export const AuthModal = () => {
  const [open, toggle] = useState(true)
  const [newUser, setNewUser] = useState(false)

  return (
    <div
      className={`${
        open ? '' : 'hidden'
      } duration-3000 fixed bottom-0 left-0 right-0 top-0 z-[100] flex h-screen w-screen items-center bg-subdued/40 transition-all`}
    >
      {!newUser && (
        <SignInForm
          toggle={() => toggle(false)}
          setNewUser={() => setNewUser(true)}
        />
      )}
      {newUser && (
        <RegisterForm
          toggle={() => toggle(false)}
          setNewUser={() => setNewUser(false)}
        />
      )}
    </div>
  )
}
