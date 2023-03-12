import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { uncorrect, initial } from 'components/LoginForm/LoginFormValidation';

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
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://wallet.goit.ua/api/auth/sign-up',
        data.user
      );
      token.set(response.data.token);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      if (error.response.status === 409) {
        data.setEmail({
          ...data.email,
          message: 'User with this email already exists',
        });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUserOperation = createAsyncThunk(
  '/api/auth/sign-in',
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://wallet.goit.ua/api/auth/sign-in',
        body.userData
      );
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      body.setShowMessage(true);
      uncorrect();
      setTimeout(() => {
        initial();
        body.setShowMessage(false);
      }, 3000);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUserOperation = createAsyncThunk(
  '/api/auth/sign-out',
  async (_, thunkAPI) => {
    try {
      const response = await axios.delete(
        'https://wallet.goit.ua/api/auth/sign-out'
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentUserOperation = createAsyncThunk(
  '/api/users/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    try {
      token.set(persistedToken);
      const response = await axios.get(
        'https://wallet.goit.ua/api/users/current'
      );
      return response.data;
    } catch (error) {
      token.unset();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurs = createAsyncThunk('/curs', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(`https://api.monobank.ua/bank/currency`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
