import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  token: Token | null
  user?: User | null
}

export interface Token {
  token: string
  expiresAt: string
}

export interface User {
  id: number
  email: string
  phone?: string
  firstName?: string
  lastName?: string
  acceptsMarketing?: boolean
}

const galoreToken = localStorage.getItem('galoreToken')
const token = galoreToken ? JSON.parse(galoreToken) : null

const initialState: AuthState = {
  token: token,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authSuccess: (state, action: PayloadAction<any>) => {
      const galoreToken = { ...action.payload }
      localStorage.setItem('galoreToken', JSON.stringify(galoreToken))
      state.token = galoreToken
    },
    authLogout: (state) => {
      localStorage.removeItem('token')
      state.token = null
    },
  },
})

export const { authSuccess, authLogout } = authSlice.actions

export default authSlice.reducer
