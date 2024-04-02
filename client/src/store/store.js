import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import current_user from './store_current_user'
import current_cost from './store_current_cost'
import current_product from './store_current_product'

export const store = configureStore({
  reducer: {
    users:current_user,
    cost:current_cost,
    product:current_product,
  },
})