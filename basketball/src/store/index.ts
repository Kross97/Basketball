import { createReducer, combineReducers, createAction } from '@reduxjs/toolkit';

export const addAuthData = createAction('addAuthData');

export const authData = createReducer({
  auth: {},
}, {
  addAuthData: (state, { payload: { auth } }: any) => ({ ...state, ...auth }),
});

export default combineReducers({
  authData,
});
