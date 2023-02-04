import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IForm } from '../../types'
import { RootState } from '..'

export const formsApi = createApi({
  reducerPath: 'formsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/forms/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      if (token) headers.set('authorization', `Bearer ${token}`)
      return headers
    },
  }),
  tagTypes: ['Form', 'Forms'],
  endpoints: (builder) => ({
    getFormById: builder.query<IForm, string>({
      query: (id) => `all/${id}`
    }),
    getFormDetailsById: builder.query<IForm, string>({
      query: (id) => `/details/${id}`
    }),
    getAllUserForms: builder.query<IForm[], void>({
      query: () => '/all',
      providesTags: ['Forms']
    }),
    submitForm: builder.mutation<IForm, IForm>({
      query: (body) => ({
        url: 'submit',
        method: 'POST',
        body
      })
    })
  }),
})

export const { useGetFormByIdQuery, useGetAllUserFormsQuery, useSubmitFormMutation, useGetFormDetailsByIdQuery } = formsApi