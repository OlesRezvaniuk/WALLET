import { registerUserOperation } from './authOperations';
import { StatusForAll } from 'services/status';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUserOperation.pending](state) {
      state.status = StatusForAll.loading;
    },
    [registerUserOperation.fulfilled](state, action) {
      state.status = StatusForAll.success;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    [registerUserOperation.rejected](state) {
      state.status = StatusForAll.error;
      state.user = {};
    },
  },
});

export default authSlice.reducer;
