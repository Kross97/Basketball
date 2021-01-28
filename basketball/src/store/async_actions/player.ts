import { createAsyncThunk } from '@reduxjs/toolkit';
import { addEntityError } from '../reducers/addingError';
import { playerRequestErrors } from '../../api/api_constants/playerRequestErrors';
import { addPlayer, getPlayers } from '../../api/player';
import { playersDataReducer } from '../reducers/player';

export const addNewPlayer = createAsyncThunk(
  'addNewPlayer',
  async (playerData: any, { dispatch }) => {
    dispatch(addEntityError.actions.clearErrorMessage());
    try {
      const result = await addPlayer('Player/Add', playerData.player, playerData.token);
      dispatch(addEntityError.actions.clearErrorMessage());
      console.log('PLAYER_REQUEST =>', result);
    } catch (error) {
      if (error.isCustomError) {
        dispatch(addEntityError.actions.addErrorMessage({
          errorMessage: playerRequestErrors[error.status],
        }));
      }
    }
  },
);

export const loadAllPlayers = createAsyncThunk(
  'loadAllPlayers',
  async (token: string, { dispatch }) => {
    const result = await getPlayers('Player/GetPlayers', token);
    console.log('PLAYERS =>', result);
    dispatch(playersDataReducer.actions.setAllPlayers(result.data));
  },
);
