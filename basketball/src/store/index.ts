import { createSlice, combineReducers } from '@reduxjs/toolkit';

export const authDataUser = createSlice({
  name: 'authDataUser',
  initialState: {
    authData: {},
    authErrorMessage: '',
  },
  reducers: {
    addAuthData: (state, action: any) => ({ ...state, authData: action.payload.authData }),
    addAuthError: (state, action:any) => ({ ...state, authErrorMessage: `${action.payload.authError[0]}` }),
  },
});

export default combineReducers({
  authDataUser: authDataUser.reducer,
});
