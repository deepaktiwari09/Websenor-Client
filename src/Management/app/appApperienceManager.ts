import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const colors = {
    Background: 'white',
    OnBackground: '',
    Surface: '#787A91',
    Primary: '#0077ED',
    OnPrimary: 'white',
    Secondry: '#CA2166',
    OnSecondry: 'white',
    Text: 'rgba(51,51,51,1)',
    Outline: '#CA2166'
}

const fonts = {
    Primary: 'roboto',
    Secondary: 'sen-serif',
    xxs: 0.02,
    xs: 0.03,
    sm: 0.04,
    md: 0.05,
    lg: 0.06,
    xl: 0.07,
    xxl: 0.08,
    xxxl: 0.09,
    xxxxl: 0.1,

}

export type Color = typeof colors
export type Font = typeof fonts

const ApperienceManager = createSlice({
    name: 'apperienceManager',
    initialState: {
        colors: colors,
        fonts: fonts
    },
    reducers: {

    },
    extraReducers: {

    }
})

export const apperienceManager = ApperienceManager.reducer;
