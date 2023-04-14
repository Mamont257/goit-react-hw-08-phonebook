import { createSlice } from '@reduxjs/toolkit';
import { register } from './auth-operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      //   console.log(action.payload.taken);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
  },
});

export default authSlice.reducer;
