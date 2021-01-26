import { createAsyncThunk } from '@reduxjs/toolkit';
import { batch } from 'react-redux';
import { signIn, signUp } from '../../api/auth';
import { authDataUser } from '../index';
import { RegisterUser, IResponseSignUpSucces, LoginUser } from '../../helpers/interfaces/request_interfaces/Auth';
import { signRequestErrors } from '../../api/api_constants/signRequestErrors';

export const requestSignUp = createAsyncThunk(
  'signUp/request',
  async (newUserData: RegisterUser, { dispatch }) => {
    dispatch(authDataUser.actions.addAuthErrorSignUp({ errorSignUp: '' }));
    try {
      const response: IResponseSignUpSucces = await signUp('Auth/SignUp', newUserData);
      batch(() => {
        dispatch(authDataUser.actions.addAuthData({ authData: response }));
        dispatch(authDataUser.actions.addAuthErrorSignUp({ errorSignUp: '' }));
      });
    } catch (error) {
      if (error.isCustomError) {
        dispatch(authDataUser.actions.addAuthErrorSignUp({
          errorSignUp: signRequestErrors[error.status],
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
      const response = await signIn('Auth/SignIn', dataLogin);

      batch(() => {
        dispatch(authDataUser.actions.addAuthData({ authData: response }));
        dispatch(authDataUser.actions.addAuthErrorSignIn({ errorSignIn: '' }));
      });
    } catch (error) {
      if (error.isCustomError) {
        dispatch(authDataUser.actions.addAuthErrorSignIn({
          errorSignIn: signRequestErrors[error.status],
        }));
      }
    }
  },
);
