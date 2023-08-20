import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'

export const RequireAuth = () => {
  const token = useAppSelector((state) => state.auth.token)
  const location = useLocation()

  if (!token) {
    return <Navigate to="/home" state={{ from: location }} />
  }

  return <Outlet />
}
