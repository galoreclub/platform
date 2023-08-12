import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from './authSlice'

export const RequireAuth = () => {
  const token = useSelector(selectCurrentToken)
  const location = useLocation()

  if (!token) {
    return <Navigate to="/home" state={{ from: location }} />
  }

  return <Outlet />
}
