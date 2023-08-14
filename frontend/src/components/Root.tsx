import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'

const Root = (): React.ReactElement => {
  const user = useAppSelector((state) => state.auth.user)

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
