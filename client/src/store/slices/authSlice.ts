import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import { authApi } from '../api/authApi'

type AuthState = {
  userId: string | null
  token: string | null
}

const initialState: AuthState = {
  userId: null,
  token: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token
        state.userId = payload.userId
      }
    )
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token
        state.userId = payload.userId
      }
    )
  },
})

export const { logout } = authSlice.actions

export const selectIsAuthenticated = (state: RootState) => !!state.auth.token;

export default authSlice.reducer