import { configureStore } from '@reduxjs/toolkit';
import { apperienceManager } from './app/appApperienceManager';


export const store = configureStore({
    reducer: {
        apperienceManager: apperienceManager
    }
});

export type RootState = ReturnType<typeof store.getState>;
