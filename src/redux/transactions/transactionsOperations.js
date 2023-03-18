import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createTransactionsOperation = createAsyncThunk(
  'api/transactions/',
  async (e, thunkAPI) => {
    try {
      const { data } = await axios.post(
        'https://wallet.goit.ua/api/transactions',
        e
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTransactionsCategories = createAsyncThunk(
  '/api/transaction-categories',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        'https://wallet.goit.ua/api/transaction-categories'
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserTransactions = createAsyncThunk(
  '/api/user-transaction',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        'https://wallet.goit.ua/api/transactions'
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserTransactionsSummary = createAsyncThunk(
  '/api/transactions-summary',
  async (date, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://wallet.goit.ua/api/transactions-summary?month=${date.month}&year=${date.year}`,
        date
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deteteUserTransactions = createAsyncThunk(
  '/api/transactions-summary',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `https://wallet.goit.ua/api/transactions/${id}`,
        id
      );
      return { data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editUserTransactions = createAsyncThunk(
  '/api/transactions/edit',
  async (transaction, thunkAPI) => {
    try {
      const { data } = await axios.patch(
        `https://wallet.goit.ua/api/transactions/${transaction.id}`,
        transaction.request
      );
      return { data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
