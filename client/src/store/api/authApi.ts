import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '..'

type UserResponse = {
  userId: string
  token: string
}

type LoginRequest = {
  email: string
  password: string
}

type RegisterRequest = {
  name: string,
  email: string
  password: string
}

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/auth/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      if (token) headers.set('authorization', `Bearer ${token}`)
      console.log(typeof headers);
      return headers
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<UserResponse, RegisterRequest>({
      query: (registerData) => ({
        url: 'register',
        method: 'POST',
        body: registerData,
      }),
    })
  }),
})

export const { useLoginMutation, useRegisterMutation } = authApi
