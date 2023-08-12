// create a slice of state for the auth state (authSlice.ts)
// Path: platform/frontend/src/features/auth/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  token: string | null
  user: any
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  user: null,
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

export const selectCurrentUser = (state: any) => state.auth.user
export const selectCurrentToken = (state: any) => state.auth.token
