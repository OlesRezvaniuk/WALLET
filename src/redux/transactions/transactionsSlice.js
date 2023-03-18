import {
  createTransactionsOperation,
  getTransactionsCategories,
  getUserTransactions,
  getUserTransactionsSummary,
} from './transactionsOperations';
import { StatusForAll } from 'services/status';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transaction: null,
  status: null,
  getCategories: null,
  summaryForPeriod: null,
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
    builder.addCase(getUserTransactions.fulfilled, (state, { payload }) => {
      state.status = StatusForAll.success;
      state.transaction = payload;
    });
    builder.addCase(
      getUserTransactionsSummary.fulfilled,
      (state, { payload }) => {
        state.status = StatusForAll.success;
        state.summaryForPeriod = payload;
      }
    );
  },
});

export default transactionsSlice.reducer;
