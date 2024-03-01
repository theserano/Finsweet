import { configureStore } from "@reduxjs/toolkit";
import subscribeReducer from "./subscribe/subscribeSlice";


const store = configureStore({
    reducer: {
        subscribe: subscribeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;