import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'tam korat555',
  user: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.value = 'tam login'
      state.user = 'hi suriya'
    },
    logout: (state) => {
      state.value = 'tam logout'
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, incrementByAmount } = userSlice.actions

export default userSlice.reducer