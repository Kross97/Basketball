import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IAddAuth, ILocalUserData, IStateAuthData, IChangeDataUser, INotification,
} from '../../helpers/interfaces/storeInterfaces/Auth';

export const authDataUser = createSlice({
  name: 'authDataUser',
  initialState: {
    authData: {
      name: '',
      avatarUrl: '',
      token: '',
    },
    authNotificationMessageSignUp: {
      message: '',
      isError: false,
    },
    authErrorMessageSignIn: '',
    errorChangeMessage: '',
    localUserData: {
      login: '',
      password: '',
    },
  },
  reducers: {
    addAuthData: (state: IStateAuthData, action: PayloadAction<{ authData: IAddAuth }>) => (
      { ...state, authData: action.payload.authData }
    ),
    addAuthNotificationSignUp: (state: IStateAuthData,
      action: PayloadAction<{ notification: INotification }>) => (
      { ...state, authNotificationMessageSignUp: action.payload.notification }
    ),
    clearAuthNotificationSignUp: (state: IStateAuthData) => ({
      ...state,
      authNotificationMessageSignUp: { message: '', isError: false },
    }),
    addAuthErrorSignIn: (state: IStateAuthData, action: PayloadAction<{ errorSignIn: string }>) => (
      { ...state, authErrorMessageSignIn: action.payload.errorSignIn }
    ),
    addErrorChangeUser: (state: IStateAuthData, action: PayloadAction<{ errorChange: string }>) => (
      { ...state, errorChangeMessage: action.payload.errorChange }
    ),
    addLocalUserData: (state: IStateAuthData,
      action: PayloadAction<{ userData: ILocalUserData }>) => (
      { ...state, localUserData: action.payload.userData }
    ),
    changeAuthData: ({ authData }: IStateAuthData,
      action: PayloadAction<{ changeData: IChangeDataUser }>) => {
      const { changeData } = action.payload;
      authData.name = changeData.userName;
      authData.avatarUrl = changeData.avatarUrl;
    },
  },
});
