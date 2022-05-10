import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlise";


export const store = configureStore({
    reducer: {
        user: userReducer
    }
})