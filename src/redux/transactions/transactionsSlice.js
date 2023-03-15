import { createTransactionsOperation } from './transactionsOperations';
import { StatusForAll } from 'services/status';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transaction: null,
  status: null,
};

const transactionsSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: builder => {
    builder.addCase(
      createTransactionsOperation.fulfilled,
      (state, { payload }) => {
        state.status = StatusForAll.success;
        state.transaction = payload;
      }
    );
  },
});

export default transactionsSlice.reducer;
