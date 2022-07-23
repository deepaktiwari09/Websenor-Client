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
    xxs1: 0.021,
    xxs2: 0.022,
    xxs3: 0.023,
    xxs4: 0.024,
    xxs5: 0.025,
    xxs6: 0.026,
    xxs7: 0.027,
    xxs8: 0.028,
    xxs9: 0.029,
    xs: 0.03,
    xs1: 0.031,
    xs2: 0.032,
    xs3: 0.033,
    xs4: 0.034,
    xs5: 0.035,
    xs6: 0.036,
    xs7: 0.037,
    xs8: 0.038,
    xs9: 0.039,
    sm: 0.04,
    sm1: 0.041,
    sm2: 0.042,
    sm3: 0.043,
    sm4: 0.044,
    sm5: 0.045,
    sm6: 0.046,
    sm7: 0.047,
    sm8: 0.048,
    sm9: 0.049,
    md: 0.05,
    md1: 0.051,
    md2: 0.052,
    md3: 0.053,
    md4: 0.054,
    md5: 0.055,
    md6: 0.056,
    md7: 0.057,
    md8: 0.058,
    md9: 0.059,
    lg: 0.06,
    lg1: 0.061,
    lg2: 0.062,
    lg3: 0.063,
    lg4: 0.064,
    lg5: 0.065,
    lg6: 0.066,
    lg7: 0.067,
    lg8: 0.068,
    lg9: 0.069,
    xl: 0.07,
    xl1: 0.071,
    xl2: 0.072,
    xl3: 0.073,
    xl4: 0.074,
    xl5: 0.075,
    xl6: 0.076,
    xl7: 0.077,
    xl8: 0.078,
    xl9: 0.079,
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



