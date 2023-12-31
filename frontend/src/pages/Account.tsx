import { Outlet } from 'react-router-dom'

export const Account = () => {
  return (
    <>
      <div className="justfy-self-center m-auto flex h-full w-8/12 flex-col items-center justify-center py-10 lg:w-4/12 lg:py-20">
        <Outlet />
      </div>
    </>
  )
}
