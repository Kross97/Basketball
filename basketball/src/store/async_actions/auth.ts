import { createAsyncThunk } from '@reduxjs/toolkit';
import { batch } from 'react-redux';
import { signUp } from '../../api/auth';
import { authDataUser } from '../index';
import { RegisterUser } from '../../helpers/interfaces/request_interfaces/Auth';

export const requestSignUp = createAsyncThunk(
  'signUp/request',
  async (newUserData: RegisterUser, { dispatch }) => {
    dispatch(authDataUser.actions.addAuthError({ authError: [''] }));
    try {
      const response = await signUp('Auth/SignUp', newUserData);
      if (/AK_Users_Login/.test(response)) {
        dispatch(authDataUser.actions.addAuthError({ authError: ['This username is already registered'] }));
      } else if ('errors' in response) {
        const messageError = Object.values(response.errors)[0];
        dispatch(authDataUser.actions.addAuthError({ authError: [messageError] }));
      } else {
        batch(() => {
          dispatch(authDataUser.actions.addAuthData({ authData: response }));
          dispatch(authDataUser.actions.addAuthError({ authError: [''] }));
        });
      }
    } catch (err) {
      console.log('ERROR', err);
    }
  },
);
