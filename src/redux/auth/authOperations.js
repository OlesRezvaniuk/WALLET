import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUserOperation = createAsyncThunk(
  'api/auth/sign-up/',
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://wallet.goit.ua/api/auth/sign-up',
        body
      );
      token.set(response.data.token);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
