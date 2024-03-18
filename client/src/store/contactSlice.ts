import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'

export interface contactDataType {
    firstName: string,
    lastName: string,
    email: string,
    subject: string,
    message: string
}


export interface stateType {
    loading: boolean,
    error: boolean,
    done: boolean,
    data: contactDataType
}

export const initialState: stateType = {
    loading: false,
    error: false,
    done: false,
    data: {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    }
}

export const submitContactForm = createAsyncThunk('contact/form', async (data: contactDataType) => {
    const response = await axios.post(`${API_BASE_URL}/api/contact/reach-out`, data);
    return response.data;
})


export const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        setFirstName: (state, action: PayloadAction<string>) => {
            state.data.firstName = action.payload
        },
        setLastName: (state, action: PayloadAction<string>) => {
            state.data.lastName = action.payload
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.data.email = action.payload
        },
        setSubject:(state, action: PayloadAction<string>) => {
            state.data.subject=action.payload;
        },
        setMessage: (state, action: PayloadAction<string>) => {
            state.data.message = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(submitContactForm.pending, (state) => {
            state.loading = true;
            state.done = false
        });
        builder.addCase(submitContactForm.fulfilled, (state) => {
            state.done = true;
            state.loading = false;
        })
        builder.addCase(submitContactForm.rejected, (state) => {
            state.error = true;
            state.loading = false;
            state.done = false;
        })
    }
})


export const {setEmail, setFirstName, setLastName, setMessage, setSubject} = contactSlice.actions;

export default contactSlice.reducer;