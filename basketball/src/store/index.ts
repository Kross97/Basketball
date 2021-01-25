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
      login: null,
      password: null,
    },
  },
  reducers: {
    addAuthData: (state, action: any) => ({ ...state, authData: action.payload.authData }),
    addAuthErrorSignUp: (state, action:any) => ({ ...state, authErrorMessageSignUp: `${action.payload.authError[0]}` }),
    addAuthErrorSignIn: (state, action:any) => ({ ...state, authErrorMessageSignIn: `${action.payload.authError[0]}` }),
    addLocalUserData: (state, action: any) => (
      { ...state, localUserData: action.payload.userData }
    ),
  },
});

export default combineReducers({
  authDataUser: authDataUser.reducer,
});
