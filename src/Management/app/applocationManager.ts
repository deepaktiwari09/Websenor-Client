import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLocation = createAsyncThunk('locationManager/setLocation', async (location: string) => {
    await AsyncStorage.setItem('location', location);

    return location;
})

export const getLocation = createAsyncThunk('locationManager/getLocation', async () => {
    const location = await AsyncStorage.getItem('location');
    if (location) {
        return location;
    }
    else {
        return 'Udaipur, India';
    }
})


const locationManager = createSlice({
    name: 'locationManager',
    initialState: {
        location: '',
    },
    reducers: {

    },
    extraReducers: {
        [setLocation.fulfilled]: (state, action) => {
            state.location = action.payload;
        },
        [getLocation.fulfilled]: (state, action) => {
            state.location = action.payload;
        }
    }

})

export const locationManagerReducer = locationManager.reducer;

