import { configureStore } from '@reduxjs/toolkit';
import { apperienceManager } from './app/appApperienceManager';
import { locationManagerReducer } from './app/applocationManager';

export const store = configureStore({
    reducer: {
        apperienceManager: apperienceManager,
        locationManager: locationManagerReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
