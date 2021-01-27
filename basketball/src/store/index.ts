import { combineReducers } from '@reduxjs/toolkit';
import { authDataUser } from './reducers/auth';
import { teamsDataReducer } from './reducers/team';
import { playersDataReducer } from './reducers/player';

export const reducer = combineReducers({
  authDataUser: authDataUser.reducer,
  teamsDataReducer: teamsDataReducer.reducer,
  playersDataReducer: playersDataReducer.reducer,
});
