import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/Counter/counterSlice'

export const Store = configureStore({
    reducer: {
        Counter : counterReducer
    }
})