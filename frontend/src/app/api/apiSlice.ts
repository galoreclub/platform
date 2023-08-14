import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import { authSuccess, authLogout } from '../../features/auth/authSlice'
import type { RootState } from '../store'

const basequery = fetchBaseQuery({
  baseUrl: 'http://localhost:8000/api/',
  credentials: 'include',
  prepareHeaders: (headers, { getState }: any) => {
    const token = getState().auth.token
    if (token) {
      headers.set('authorization', `Token ${token}`)
    }
    return headers
  },
})

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await basequery(args, api, extraOptions)
  if (result?.error?.status === 401) {
    const refreshResult = await basequery('auth/refresh/', api, extraOptions)
    if (refreshResult?.data) {
      const user = (api.getState() as RootState).auth.user
      api.dispatch(authSuccess({ ...refreshResult.data, user }))
      const retryResult = await basequery(args, api, extraOptions)
      return retryResult
    }
    api.dispatch(authLogout())
    return result
  }
  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (_builder) => ({}),
})
