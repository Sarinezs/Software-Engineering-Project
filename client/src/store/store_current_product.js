import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
}

export const current_product = createSlice({
    name: 'product',
    initialState,
    reducers: {
        total_product: (state, action) => {
            state.product = action.payload

        },
    },
})


export const { total_product } = current_product.actions
export default current_product.reducer
