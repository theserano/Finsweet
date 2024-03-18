import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { dataType } from "../../components/footer/Footer";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export interface subscribeType {
    email: string,
    message?: string,
    loading?: boolean,
    error?: boolean,
    done?: boolean
}

const initialState: subscribeType =  {
    email: "",
    loading: false,
    error: false,
    done: false,
}

export const subscribeWithEmail = createAsyncThunk('subscribe/email',
async (data: dataType) => {
    const response = await axios.post(`${API_BASE_URL}/api/subscribe/confirm`, data);
    return response.data;
}
)

export const subscribeSlice = createSlice({
    name: 'subscribe',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email =  action.payload
        },
        resetEmail: (state) => {
            state.email = ''
        }
    }, 
    extraReducers: builder => {
        builder.addCase(subscribeWithEmail.pending, (state) => {
            state.loading = true;
            state.done = false;
        });
        builder.addCase(subscribeWithEmail.fulfilled, (state, action: PayloadAction<string>) => {
            state.message=action.payload
            state.loading = false
            state.done = true
        })
        builder.addCase(subscribeWithEmail.rejected, (state) => {
            state.error = true
            state.done = false
        })
    }
})

export const {setEmail, resetEmail} = subscribeSlice.actions;

export default subscribeSlice.reducer