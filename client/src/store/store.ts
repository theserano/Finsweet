import { configureStore } from "@reduxjs/toolkit";
import subscribeReducer from "./subscribe/subscribeSlice";
import contactSlice from "./contactSlice";



const store = configureStore({
    reducer: {
        subscribe: subscribeReducer,
        contact: contactSlice
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;