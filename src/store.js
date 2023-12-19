import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './features/sessionSlice.js';

export const store = configureStore({
  reducer: {
    session: sessionReducer
  }
});