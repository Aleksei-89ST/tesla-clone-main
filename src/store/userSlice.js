import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    authError: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        },
        errorHandler: (state, action) => {
            state.authError = action.payload
        }
    }
})

export const { login, logout, errorHandler } = userSlice.actions

export const selectUser = (state) => state.user.user
export const selectError = (state) => state.user.authError

export default userSlice.reducer