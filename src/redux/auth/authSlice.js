import {
  loginUserOperation,
  registerUserOperation,
  logoutUserOperation,
} from './authOperations';
import { StatusForAll } from 'services/status';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(registerUserOperation.fulfilled, (state, { payload }) => {
      state.status = StatusForAll.success;
      state.token = payload.token;
      state.user = payload.user;
    });
    builder.addCase(loginUserOperation.fulfilled, (state, { payload }) => {
      state.status = StatusForAll.success;
      state.token = payload.token;
      state.user = payload.user;
    });
    builder.addCase(logoutUserOperation.fulfilled, state => {
      state.status = StatusForAll.success;
    });
  },
});

export default authSlice.reducer;
