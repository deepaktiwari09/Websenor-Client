import { configureStore } from '@reduxjs/toolkit';
import { apperienceManager } from './app/appApperienceManager';
import { locationManagerReducer } from './app/applocationManager';
import { RequestFormManager } from './app/requestformManager';


export const store = configureStore({
    reducer: {
        apperienceManager: apperienceManager,
        locationManager: locationManagerReducer,
        requestformManager: RequestFormManager
    }
});

export type RootState = ReturnType<typeof store.getState>;
