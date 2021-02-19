import { PayloadAction, createAction } from '@reduxjs/toolkit';
import { put } from 'redux-saga/effects';
import {
  ILoginUser, IResponseSignSuccess, IRegisterUser, IChangedDataUser,
} from '../../helpers/interfaces/requestInterfaces/Auth';
import { authDataUser } from '../reducers/auth';
import { changeUserData, signIn, signUp } from '../../api/auth';

import { signRequestErrors } from '../../api/apiСonstants/signRequestErrors';
import { successOperationReducer } from '../reducers/successOperation';

export const signInSaGaAction = createAction('SIGN_IN');
export const signOutSaGaAction = createAction('SIGN_OUT');
export const changeUserSagaAction = createAction('CHANGE_USER');

export function* signInSaga(data: PayloadAction<ILoginUser>) {
  try {
    yield put(authDataUser.actions.addAuthErrorSignIn({ errorSignIn: '' }));
    const response: IResponseSignSuccess = yield signIn('Auth/SignIn', data.payload);
    yield put(authDataUser.actions.addAuthData({ authData: response }));
    yield put(authDataUser.actions.addAuthErrorSignIn({ errorSignIn: '' }));
    yield put(successOperationReducer.actions.setSuccessSignIn());
    localStorage.setItem('token_basketball', response.token);
    localStorage.setItem('name_basketball', response.name);
    localStorage.setItem('avatarUrl_basketball', response.avatarUrl);
  } catch (error) {
    if (error.isCustomError) {
      yield put(authDataUser.actions.addAuthErrorSignIn({
        errorSignIn: signRequestErrors[error.status],
      }));
    }
  }
}

export function* signOutSaga({ payload: newUserData }: PayloadAction<IRegisterUser>) {
  try {
    yield put(authDataUser.actions.clearAuthNotificationSignUp());
    const response: IResponseSignSuccess = yield signUp('Auth/SignUp', newUserData);
    yield put(authDataUser.actions.addAuthData({ authData: response }));
    yield put(authDataUser.actions.addAuthNotificationSignUp({
      notification: {
        message: 'Registration was successful',
        isError: false,
      },
    }));
    yield put(authDataUser.actions.addLocalUserData({
      userData: {
        login: newUserData.login,
        password: newUserData.password,
      },
    }));
    localStorage.setItem('token_basketball', response.token);
    localStorage.setItem('name_basketball', response.name);
    localStorage.setItem('avatarUrl_basketball', response.avatarUrl);
    yield put(successOperationReducer.actions.setSuccessSignOut());
  } catch (error) {
    if (error.isCustomError) {
      yield put(authDataUser.actions.addAuthNotificationSignUp({
        notification: { message: signRequestErrors[error.status], isError: true },
      }));
    }
  }
}

export function* changeAuthDataSaga({ payload: changeData }: PayloadAction<IChangedDataUser>) {
  try {
    put(authDataUser.actions.addErrorChangeUser({ errorChange: '' }));
    yield changeUserData('Auth/Change', changeData.change, changeData.token);
    yield put(authDataUser.actions.changeAuthData({ changeData: changeData.change }));
    yield put(authDataUser.actions.addErrorChangeUser({ errorChange: '' }));
    localStorage.setItem('name_basketball', changeData.change.userName);
    localStorage.setItem('avatarUrl_basketball', changeData.change.avatarUrl);
    yield put(successOperationReducer.actions.setSuccessChangeUser());
  } catch (error) {
    if (error.isCustomError) {
      yield put(authDataUser.actions.addErrorChangeUser({
        errorChange: signRequestErrors[error.status],
      }));
      yield put(successOperationReducer.actions.setErrorChangeUser());
    }
  }
}
