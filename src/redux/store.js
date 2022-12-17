import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from "./Slices/counterSlice";
import {authSlice} from "./Slices/authSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    },
})