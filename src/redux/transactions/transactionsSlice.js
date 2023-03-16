import {
  createTransactionsOperation,
  getTransactionsCategories,
} from './transactionsOperations';
import { StatusForAll } from 'services/status';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transaction: null,
  status: null,
  getCategories: null,
};

const transactionsSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: builder => {
    builder.addCase(createTransactionsOperation.fulfilled, state => {
      state.status = StatusForAll.success;
    });
    builder.addCase(
      getTransactionsCategories.fulfilled,
      (state, { payload }) => {
        state.status = StatusForAll.success;
        state.getCategories = payload;
      }
    );
  },
});

export default transactionsSlice.reducer;
