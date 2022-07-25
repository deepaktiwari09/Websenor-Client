import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DocumentPickerResponse } from 'react-native-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type formdata = {
    name: string,
    email: string,
    phone: string,
    details: string,
    checkbox: string[],
    file: DocumentPickerResponse,
    createdAt: String
}

export const initRequestForm = createAsyncThunk('requestform/init', async () => {
    const form = await AsyncStorage.getItem('formdata');
    if (form) {
        // console.log(form);
        return JSON.parse(form);
    }
    else {
        console.log('no form data');
        return [];
    }
})

export const addRequestForm = createAsyncThunk(
    'requestform/add',
    async function add(formdata: formdata, thunkAPI) {
        const data = await AsyncStorage.getItem('formdata');
        if (data) {
            await AsyncStorage.setItem('formdata', JSON.stringify([...data, { ...formdata }]));
            return formdata;
        }
        else {
            await AsyncStorage.setItem('formdata', JSON.stringify([{ ...formdata }]));
            return formdata;
        }
    }
)

export const removeRequestForm = createAsyncThunk(
    'requestform/remove',
    async function remove(formdata: formdata, thunkAPI) {
        const data = await AsyncStorage.getItem('formdata');
        if (data) {
            await AsyncStorage.removeItem('formdata');
            return [];
        }
        else (
            console.log('data not found')
        )
        // return formdata;
    }
)

const formdata: formdata[] = []

const RequestFormSlice = createSlice({
    name: 'requestform',
    initialState: {
        data: formdata,
    },
    reducers: {},
    extraReducers: {
        [addRequestForm.fulfilled]: (state: { data: formdata[] }, action) => {
            state.data.push(action.payload)
        },
        [removeRequestForm.fulfilled]: (state: { data: formdata[] }, action) => {
            state.data.pop()
        },
        [initRequestForm.fulfilled]: (state: { data: formdata[] }, action) => {
            state.data = action.payload
            // console.log(state)
        }
    }
})

export const RequestFormManager = RequestFormSlice.reducer;