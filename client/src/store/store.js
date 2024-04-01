import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import current_user from './store_current_user'

export const store = configureStore({
  reducer: {
    users:current_user,
  },
})