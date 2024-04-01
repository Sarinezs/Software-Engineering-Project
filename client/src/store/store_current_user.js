import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    // user_firstname: "",
    // user_lastname: "",
    // user_phone: "",
    // user_email: "",
    // user_role: "",
    // user_address: "",
}

export const current_user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        keep_user_id: (state, action) => {
            // state.user_firstname = list_data.firstname
            // state.user_lastname = list_data.lastname
            // state.user_phone = list_data.phone
            // state.user_email = list_data.email
            // state.user_role = list_data.role
            // state.user_address = list_data.address
            state.user = action.payload
        },
    },
})


export const { keep_user_id } = current_user.actions
export default current_user.reducer
