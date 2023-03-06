import { registerUserOperation } from './authOperations';
import { StatusForAll } from 'services/status';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  email: '',
  password: '',
  status: StatusForAll.init,
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
      state.username = action.payload.name;
      state.email = action.payload._id;
      state.password = action.payload.token;
    },
    [registerUserOperation.rejected](state) {
      state.status = StatusForAll.error;
      state.name = '';
      state._id = '';
      state.token = '';
    },
  },
});

export default authSlice.reducer;
