import { configureStore } from "@reduxjs/toolkit"
import basketReducer from "../slice/basketSlice"

// the global store setup

export const store = configureStore({
    reducer: {
        basket: basketReducer
    }
})