import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  token: string | null
  user: User | null
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  user: null,
}

export interface User {
  id: number
  email: string
  phone?: string
  firstName?: string
  lastName?: string
  acceptsMarketing?: boolean
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authSuccess: (state, action: PayloadAction<any>) => {
      localStorage.setItem('token', action.payload.token)
      state.user = action.payload.user
      state.token = action.payload.token
    },
    authFail: (state) => {
      localStorage.removeItem('token')
      state.token = null
      state.user = null
    },
    authLogout: (state) => {
      localStorage.removeItem('token')
      state.token = null
      state.user = null
    },
  },
})

export const { authSuccess, authFail, authLogout } = authSlice.actions

export default authSlice.reducer
