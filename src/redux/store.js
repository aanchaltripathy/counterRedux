// In store.js, change the import to:
import counterReducer from './slices/counterSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});