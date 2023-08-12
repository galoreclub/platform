import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const Root = (): React.ReactElement => {
  const [user, setUser] = useState(true)

  return (
    <>
      <Header />
      <main id="main" className="mb-auto flex flex-col justify-start">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Root
