import { createAsyncThunk } from '@reduxjs/toolkit';
import { batch } from 'react-redux';
import { signUp } from '../../api/auth';
import { authDataUser } from '../index';
import { RegisterUser } from '../../helpers/interfaces/request_interfaces/Auth';
import { signRequestErrors } from '../../helpers/constants/signRequestErrors';

export const requestSignUp = createAsyncThunk(
  'signUp/request',
  async (newUserData: RegisterUser, { dispatch }) => {
    dispatch(authDataUser.actions.addAuthError({ authError: '' }));
    try {
      const response = await signUp('Auth/SignUp', newUserData);
      if (response.isError) {
        dispatch(authDataUser.actions.addAuthError({
          authError: signRequestErrors[response.status],
        }));
      } else {
        batch(() => {
          dispatch(authDataUser.actions.addAuthData({ authData: response }));
          dispatch(authDataUser.actions.addAuthError({ authError: '' }));
        });
      }
    } catch (err) {
      console.log('ERROR', err);
    }
  },
);
