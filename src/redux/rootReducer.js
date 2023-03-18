import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import authReducer from '../redux/auth/authSlice';
import transactionsReducer from '../redux/transactions/transactionsSlice';

const persistRegistrConfig = {
  key: 'auth',
  storage,
  blacklist: ['status'],
};
const persistedRegistrReducer = persistReducer(
  persistRegistrConfig,
  authReducer,
  transactionsReducer
);

export const rootReducer = combineReducers({
  auth: persistedRegistrReducer,
  transactions: transactionsReducer,
});
