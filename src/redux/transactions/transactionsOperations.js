import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createTransactionsOperation = createAsyncThunk(
  'api/transactions/',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://wallet.goit.ua/api/transactions',
        data
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTransactionsCategories = createAsyncThunk(
  '/api/transaction-categories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://wallet.goit.ua/api/transaction-categories'
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserTransactions = createAsyncThunk(
  '/api/user-transaction',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://wallet.goit.ua/api/transactions'
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
