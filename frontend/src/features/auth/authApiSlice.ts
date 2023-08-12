import { apiSlice } from '../app/api/apiSlice'

// Path: platform/frontend/src/features/auth/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  token: string | null
  isAuthenticated: boolean

  isLoading: boolean
  user: any
}
