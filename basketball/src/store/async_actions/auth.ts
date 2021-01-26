import { createAsyncThunk } from '@reduxjs/toolkit';
import { batch } from 'react-redux';
import { signIn, signUp } from '../../api/auth';
import { authDataUser } from '../index';
import { signRequestErrors } from '../../helpers/constants/signRequestErrors';
import { RegisterUser, LoginUser } from '../../helpers/interfaces/request_interfaces/Auth';

export const requestSignUp = createAsyncThunk(
  'signUp/request',
  async (newUserData: RegisterUser, { dispatch }) => {
    dispatch(authDataUser.actions.addAuthErrorSignUp({ errorSignUp: '' }));
    try {
      const response = await signUp('Auth/SignUp', newUserData);
      if (response.isError) {
        dispatch(authDataUser.actions.addAuthErrorSignUp({
          errorSignUp: signRequestErrors[response.status],
        }));
        return false;
      }
      batch(() => {
        dispatch(authDataUser.actions.addAuthData({ authData: response }));
        dispatch(authDataUser.actions.addAuthErrorSignUp({ errorSignUp: '' }));
        dispatch(authDataUser.actions.addLocalUserData({
          userData: {
            login: newUserData.login,
            password: newUserData.password,
          },
        }));
      });
      return true;
    } catch (err) {
      console.log('ERROR', err);
    }
  },
);

export const requestSignIn = createAsyncThunk(
  'signIn/request',
  async (dataLogin: LoginUser, { dispatch }) => {
    dispatch(authDataUser.actions.addAuthErrorSignIn({ errorSignIn: '' }));
    try {
      const response = await signIn('Auth/SignIn', dataLogin);
      if (response.isError) {
        dispatch(authDataUser.actions.addAuthErrorSignIn({
          errorSignIn: [signRequestErrors[response.status]],
        }));
        return;
      }
      batch(() => {
        dispatch(authDataUser.actions.addAuthData({ authData: response }));
        dispatch(authDataUser.actions.addAuthErrorSignIn({ errorSignIn: '' }));
      });
    } catch (error) {
      console.log('ERROR => ', error);
    }
  },
);
