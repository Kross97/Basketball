import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddAuth, ILocalUserData, IStateAuthData } from '../../helpers/interfaces/store_interfaces/Auth';

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
    addAuthData: (state: IStateAuthData, action: PayloadAction<{ authData: IAddAuth}>) => (
      { ...state, authData: action.payload.authData }
    ),
    addAuthErrorSignUp: (state: IStateAuthData, action: PayloadAction<{ errorSignUp: string}>) => (
      { ...state, authErrorMessageSignUp: action.payload.errorSignUp }
    ),
    addAuthErrorSignIn: (state: IStateAuthData, action: PayloadAction<{ errorSignIn: string}>) => (
      { ...state, authErrorMessageSignIn: action.payload.errorSignIn }
    ),
    addLocalUserData: (state: IStateAuthData,
      action: PayloadAction<{ userData: ILocalUserData}>) => (
      { ...state, localUserData: action.payload.userData }
    ),
    changeAuthData: ({ authData }: IStateAuthData,
      action: PayloadAction<{ changeData: any}>) => {
      const { changeData } = action.payload;
      authData.name = changeData.userName;
      authData.avatarUrl = changeData.avatarUrl;
    },
  },
});
