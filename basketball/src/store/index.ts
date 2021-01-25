import { createSlice, combineReducers } from '@reduxjs/toolkit';

export const authDataUser = createSlice({
  name: 'authDataUser',
  initialState: {
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
  },
});

export const reducer = combineReducers({
  authDataUser: authDataUser.reducer,
});
