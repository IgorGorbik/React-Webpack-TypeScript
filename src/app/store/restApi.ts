import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthState } from 'features/auth/authSlice';

export const restApi = createApi({
  reducerPath: 'restApi',
  baseQuery: fetchBaseQuery({
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as { auth: AuthState }).auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
}).enhanceEndpoints({
  addTagTypes: [],
});
