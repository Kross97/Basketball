import { createAsyncThunk } from '@reduxjs/toolkit';
import { addEntityError } from '../reducers/addingError';
import { playerRequestErrors } from '../../api/api_constants/playerRequestErrors';
import { addPlayer } from '../../api/player';

export const addNewPlayer = createAsyncThunk(
  'addNewPlayer',
  async (playerData: any, { dispatch }) => {
    dispatch(addEntityError.actions.addErrorMessage({ errorMessage: '' }));
    try {
      const result = await addPlayer('Player/Add', playerData.player, playerData.token);
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
