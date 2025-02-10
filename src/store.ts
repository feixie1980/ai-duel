import { configureStore } from '@reduxjs/toolkit';
import apiKeysReducer from './API/apiKeysSlice';

export const store = configureStore({
  reducer: {
    apiKeys: apiKeysReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
