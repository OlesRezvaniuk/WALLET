import {
  loginUserOperation,
  registerUserOperation,
  logoutUserOperation,
  currentUserOperation,
} from './authOperations';
import { StatusForAll } from 'services/status';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(registerUserOperation.fulfilled, (state, { payload }) => {
      state.status = StatusForAll.success;
      state.token = payload.token;
      state.user = payload.user;
      state.isLogin = true;
    });
    builder.addCase(loginUserOperation.fulfilled, (state, { payload }) => {
      state.status = StatusForAll.success;
      state.token = payload.token;
      state.user = payload.user;
      state.isLogin = true;
    });
    builder.addCase(logoutUserOperation.fulfilled, state => {
      state.status = StatusForAll.success;
      state.user = null;
      state.token = null;
      state.isLogin = false;
    });
    builder.addCase(currentUserOperation.fulfilled, state => {
      state.status = StatusForAll.success;
      state.isLogin = true;
    });
  },
});

export default authSlice.reducer;
