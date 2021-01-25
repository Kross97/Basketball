import { createAsyncThunk } from '@reduxjs/toolkit';
import { batch } from 'react-redux';
import { signIn, signUp } from '../../api/auth';
import { authDataUser } from '../index';
import { RegisterUser, LoginUser } from '../../helpers/interfaces/request_interfaces/Auth';

export const requestSignUp = createAsyncThunk(
  'signUp/request',
  async (newUserData: RegisterUser, { dispatch }) => {
    dispatch(authDataUser.actions.addAuthErrorSignUp({ authError: [''] }));
    try {
      const response = await signUp('Auth/SignUp', newUserData);
      if (/AK_Users_Login/.test(response)) {
        dispatch(authDataUser.actions.addAuthErrorSignUp({ authError: ['This username is already registered'] }));
        return false;
      } if ('errors' in response) {
        const messageError = Object.values(response.errors)[0];
        dispatch(authDataUser.actions.addAuthErrorSignUp({ authError: [messageError] }));
        return false;
      }
      batch(() => {
        dispatch(authDataUser.actions.addLocalUserData({
          userData: {
            login: newUserData.login,
            password: newUserData.password,
          },
        }));
        dispatch(authDataUser.actions.addAuthData({ authData: response }));
        dispatch(authDataUser.actions.addAuthErrorSignUp({ authError: [''] }));
      });

      return true;
    } catch (error) {
      console.log('ERROR =>', error);
    }
  },
);

export const requestSignIn = createAsyncThunk(
  'signIn/request',
  async (dataLogin: LoginUser, { dispatch }) => {
    dispatch(authDataUser.actions.addAuthErrorSignIn({ authError: [''] }));
    try {
      const response = await signIn('Auth/SignIn', dataLogin);
      if ('errors' in response) {
        const messageError = Object.values(response.errors)[0];
        dispatch(authDataUser.actions.addAuthErrorSignIn({ authError: [messageError] }));
        return false;
      }
      batch(() => {
        dispatch(authDataUser.actions.addLocalUserData({
          userData: {
            login: dataLogin.login,
            password: dataLogin.password,
          },
        }));
        dispatch(authDataUser.actions.addAuthData({ authData: response }));
        dispatch(authDataUser.actions.addAuthErrorSignIn({ authError: [''] }));
      });
    } catch (error) {
      console.log('ERROR => ', error);
    }
  },
);
