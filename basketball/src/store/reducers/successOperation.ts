import { createSlice } from '@reduxjs/toolkit';

export const successOperationReducer = createSlice({
  name: 'successOperation',
  initialState: {
    signIn: false,
    signOut: false,
  },
  reducers: {
    setSuccessSignIn: (state) => { state.signIn = true; },
    setErrorSignIn: (state) => { state.signIn = false; },
    setSuccessSignOut: (state) => { state.signOut = true; },
  },
});
