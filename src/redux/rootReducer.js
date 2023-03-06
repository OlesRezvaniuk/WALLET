import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import authReducer from '../redux/auth/authSlice';

const persistRegistrConfig = {
  key: 'auth',
  storage,
  blacklist: ['status'],
};
const persistedRegistrReducer = persistReducer(
  persistRegistrConfig,
  authReducer
);

export const rootReducer = combineReducers({
  auth: persistedRegistrReducer,
});
