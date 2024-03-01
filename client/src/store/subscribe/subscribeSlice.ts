import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export interface subscribeType {
    email: string,
    message?: string,
    loading?: boolean,
    error?: boolean
}

const initialState: subscribeType =  {
    email: "",
    loading: false,
    error: false
}

export const subscribeWithEmail = createAsyncThunk('subscribe/email',
async (data) => {
    const response = await axios.post('/api/subscribe', data);
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
        });
        builder.addCase(subscribeWithEmail.fulfilled, (state, action: PayloadAction<string>) => {
            state.message=action.payload
            state.loading = false
        })
        builder.addCase(subscribeWithEmail.rejected, (state) => {
            state.error = true
        })
    }
})

export const {setEmail, resetEmail} = subscribeSlice.actions;

export default subscribeSlice.reducer