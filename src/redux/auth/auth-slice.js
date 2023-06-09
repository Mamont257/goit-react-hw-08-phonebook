import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, logIn, logOut, register } from './auth-operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
  isRefresh: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [logOut.fulfilled](state, action) {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLogin = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isRefresh = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLogin = true;
      state.isRefresh = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isRefresh = false;
    },
  },
});

export default authSlice.reducer;
