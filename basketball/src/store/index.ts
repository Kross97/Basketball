import { createSlice, combineReducers, PayloadAction } from '@reduxjs/toolkit';
import { IAddAuth } from '../helpers/interfaces/store_interfaces/Auth';

export const authDataUser = createSlice({
  name: 'authDataUser',
  initialState: {
    authData: {
      name: '',
      avatarUrl: '',
      token: '',
    },
    authErrorMessage: '',
  },
  reducers: {
    addAuthData: (state, action: PayloadAction<{ authData: IAddAuth}>) => (
      { ...state, authData: action.payload.authData }
    ),
    addAuthError: (state, action: PayloadAction<{ authError: string}>) => (
      { ...state, authErrorMessage: action.payload.authError }
    ),
  },
});

export const reducer = combineReducers({
  authDataUser: authDataUser.reducer,
});
