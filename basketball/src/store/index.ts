import { createSlice, combineReducers, PayloadAction } from '@reduxjs/toolkit';
import { IAddAuth, ILocalUserData } from '../helpers/interfaces/store_interfaces/Auth';

export const authDataUser = createSlice({
  name: 'authDataUser',
  initialState: {
    authData: {
      name: '',
      avatarUrl: '',
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
    addAuthData: (state: any, action: PayloadAction<{ authData: IAddAuth}>) => (
      { ...state, authData: action.payload.authData }
    ),
    addAuthErrorSignUp: (state: any, action: PayloadAction<{ errorSignUp: string}>) => (
      { ...state, authErrorMessageSignUp: action.payload.errorSignUp }
    ),
    addAuthErrorSignIn: (state: any, action: PayloadAction<{ errorSignIn: string}>) => (
      { ...state, authErrorMessageSignIn: action.payload.errorSignIn }
    ),
    addLocalUserData: (state: any, action: PayloadAction<{ userData: ILocalUserData}>) => (
      { ...state, localUserData: action.payload.userData }
    ),
  },
});

export const reducer = combineReducers({
  authDataUser: authDataUser.reducer,
});
