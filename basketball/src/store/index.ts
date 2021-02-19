import { combineReducers } from '@reduxjs/toolkit';
import { authDataUser } from './reducers/auth';
import { teamsDataReducer } from './reducers/team';
import { playersDataReducer } from './reducers/player';
import { imageLoadData } from './reducers/image';
import { addEntityError } from './reducers/addingError';
import { menuReducer } from './reducers/sandwichAndChangeMenu';
import { successOperationReducer } from './reducers/successOperation';

export const reducer = combineReducers({
  menuReducer: menuReducer.reducer,
  authDataUser: authDataUser.reducer,
  teamsDataReducer: teamsDataReducer.reducer,
  playersDataReducer: playersDataReducer.reducer,
  imageLoadData: imageLoadData.reducer,
  addEntityError: addEntityError.reducer,
  successOperationReducer: successOperationReducer.reducer,
});
