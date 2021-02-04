import { createAsyncThunk } from '@reduxjs/toolkit';
import { batch } from 'react-redux';
import { signIn, signUp, changeUserData } from '../../api/auth';
import { authDataUser } from '../reducers/auth';
import {
  RegisterUser, IResponseSignSucces, LoginUser, IChangedDataUser,
} from '../../helpers/interfaces/request_interfaces/Auth';
import { signRequestErrors } from '../../api/api_constants/signRequestErrors';

export const requestSignUp = createAsyncThunk(
  'signUp/request',
  async (newUserData: RegisterUser, { dispatch }) => {
    try {
      dispatch(authDataUser.actions.clearAuthNotificationSignUp());
      const response: IResponseSignSucces = await signUp('Auth/SignUp', newUserData);
      batch(() => {
        dispatch(authDataUser.actions.addAuthData({ authData: response }));
        dispatch(authDataUser.actions.addAuthNotificationSignUp({ notification: { message: 'Registration was successful', isError: false } }));
        dispatch(authDataUser.actions.addLocalUserData({
          userData: {
            login: newUserData.login,
            password: newUserData.password,
          },
        }));
      });
      localStorage.setItem('token_basketball', response.token);
      localStorage.setItem('name_basketball', response.name);
      localStorage.setItem('avatarUrl_basketball', response.avatarUrl);
      return true;
    } catch (error) {
      if (error.isCustomError) {
        dispatch(authDataUser.actions.addAuthNotificationSignUp({
          notification: { message: signRequestErrors[error.status], isError: true },
        }));
      }
    }
  },
);

export const requestSignIn = createAsyncThunk(
  'signIn/request',
  async (dataLogin: LoginUser, { dispatch }) => {
    dispatch(authDataUser.actions.addAuthErrorSignIn({ errorSignIn: '' }));
    try {
      const response: IResponseSignSucces = await signIn('Auth/SignIn', dataLogin);

      batch(() => {
        dispatch(authDataUser.actions.addAuthData({ authData: response }));
        dispatch(authDataUser.actions.addAuthErrorSignIn({ errorSignIn: '' }));
      });
      localStorage.setItem('token_basketball', response.token);
      localStorage.setItem('name_basketball', response.name);
      localStorage.setItem('avatarUrl_basketball', response.avatarUrl);
      return true;
    } catch (error) {
      if (error.isCustomError) {
        dispatch(authDataUser.actions.addAuthErrorSignIn({
          errorSignIn: signRequestErrors[error.status],
        }));
      }
    }
  },
);

export const changeAuthData = createAsyncThunk(
  'changeUser',
  async (changeData: IChangedDataUser, { dispatch }) => {
    dispatch(authDataUser.actions.addErrorChangeUser({ errorChange: '' }));
    try {
      await changeUserData('Auth/Change', changeData.change, changeData.token);
      batch(() => {
        dispatch(authDataUser.actions.changeAuthData({ changeData: changeData.change }));
        dispatch(authDataUser.actions.addErrorChangeUser({ errorChange: '' }));
      });
      localStorage.setItem('name_basketball', changeData.change.userName);
      localStorage.setItem('avatarUrl_basketball', changeData.change.avatarUrl);
      return true;
    } catch (error) {
      if (error.isCustomError) {
        dispatch(authDataUser.actions.addErrorChangeUser({
          errorChange: signRequestErrors[error.status],
        }));
      }
      return false;
    }
  },
);
