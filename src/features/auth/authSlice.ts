import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthState = { token: string | null };

const initialState: AuthState = {
  token: localStorage.getItem('token') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    clearToken: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    },
  },
});

export const authReducer = authSlice.reducer;
export const { setToken, clearToken } = authSlice.actions;

const selectState = (state: { auth: AuthState }) => state.auth;
export const selectCurrentToken = createSelector([selectState], (state) => state.token);
