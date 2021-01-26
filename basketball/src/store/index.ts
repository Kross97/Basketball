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
    authData: {
      name: '',
      token: '',
    },
    authErrorMessageSignUp: '',
    authErrorMessageSignIn: '',
    localUserData: {
      login: '',
      password: '',
    },
  },
  reducers: {
    addAuthData: (state, action: any) => ({ ...state, authData: action.payload.authData }),
    addAuthErrorSignUp: (state, action:any) => (
      { ...state, authErrorMessageSignUp: action.payload.errorSignUp }
    ),
    addAuthErrorSignIn: (state, action:any) => (
      { ...state, authErrorMessageSignIn: action.payload.errorSignIn }
    ),
    addLocalUserData: (state, action: any) => (
      { ...state, localUserData: action.payload.userData }
    ),
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
