import { createSlice } from '@reduxjs/toolkit';

export const successOperationReducer = createSlice({
  name: 'successOperation',
  initialState: {
    signIn: false,
    signOut: false,
    changeUser: false,
  },
  reducers: {
    setSuccessSignIn: (state) => { state.signIn = true; },
    setErrorSignIn: (state) => { state.signIn = false; },
    setSuccessSignOut: (state) => { state.signOut = true; },
    setSuccessChangeUser: (state) => { state.changeUser = true; },
    setErrorChangeUser: (state) => { state.changeUser = false; },
  },
});
