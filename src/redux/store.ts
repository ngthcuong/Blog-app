import { configureStore } from '@reduxjs/toolkit';
import snackbarReducer from '../redux/slices/snackBarSlice';

export const store = configureStore({
  reducer: { snackbar: snackbarReducer },
});

// Bổ sung type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
