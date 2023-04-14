import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import authSlice from './auth/auth-slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    contacts: tasksReducer,
    filter: filterReducer,
  },
});
