import { createSlice, combineReducers } from '@reduxjs/toolkit';

export const authData = createSlice({
  name: ' auth',
  initialState: {
    authData: {},
  },
  reducers: {
    addAuthData: (state, action: any) => ({ authData: action.payload.authData }),
  },
});

export default combineReducers({
  authData: authData.reducer,
});
