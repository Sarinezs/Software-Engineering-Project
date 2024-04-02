import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cost: [],
}

export const current_cost = createSlice({
    name: 'cost',
    initialState,
    reducers: {
        total_cost: (state, action) => {
            state.cost = action.payload
        },
    },
})


export const { total_cost } = current_cost.actions
export default current_cost.reducer
