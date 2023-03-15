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
