import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from 'features/auth/authSlice';
import { restApi } from './restApi';

export const rootReducer = combineReducers({
  auth: authReducer,
  [restApi.reducerPath]: restApi.reducer,
});
