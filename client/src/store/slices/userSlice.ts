import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../'

interface UserState {
  value: number
}

const initialState: UserState = {
  value: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer