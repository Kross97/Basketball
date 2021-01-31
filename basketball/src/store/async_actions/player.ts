import { createAsyncThunk } from '@reduxjs/toolkit';
import { batch } from 'react-redux';
import { addEntityError } from '../reducers/addingError';
import { playerRequestErrors } from '../../api/api_constants/playerRequestErrors';
import {
  addPlayer, getPlayers, deletePlayer, updatePlayer,
} from '../../api/player';
import {
  IAddDataPlayer, IRemoveDataPlayer, IUpdateDataPlayer, IDataLoadChunk,
} from '../../helpers/interfaces/request_interfaces/Player';
import { playersDataReducer } from '../reducers/player';
import { IOption } from '../../helpers/interfaces/components_interfaces/StateAndEvents';

export const addNewPlayer = createAsyncThunk(
  'addNewPlayer',
  async (playerData: IAddDataPlayer, { dispatch }) => {
    dispatch(addEntityError.actions.clearErrorMessage());
    try {
      const result = await addPlayer('Player/Add', playerData.player, playerData.token);
      batch(() => {
        dispatch(playersDataReducer.actions.addOnePlayer(result));
        dispatch(addEntityError.actions.clearErrorMessage());
      });
      return true;
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
    dispatch(playersDataReducer.actions.setAllPlayers(result.data));
  },
);

export const removeSelectedPlayer = createAsyncThunk(
  'deletePlayer',
  async (removeData: IRemoveDataPlayer, { dispatch }) => {
    dispatch(addEntityError.actions.clearErrorMessage());
    try {
      const result = await deletePlayer(`Player/Delete?id=${removeData.id}`, removeData.token);
      removeData.history.replace('/main/players');
      dispatch(playersDataReducer.actions.deleteOnePlayer(result.id));
    } catch (error) {
      if (error.isCustomError) {
        dispatch(addEntityError.actions.addErrorMessage({
          errorMessage: playerRequestErrors[error.status],
        }));
      }
    }
  },
);

export const updateSelectedPlayer = createAsyncThunk(
  'updatePlayer',
  async ({ player, token }: IUpdateDataPlayer, { dispatch }) => {
    dispatch(addEntityError.actions.clearErrorMessage());
    try {
      const result = await updatePlayer('Player/Update', player, token);
      dispatch(playersDataReducer.actions.updatePlayer({
        // eslint-disable-next-line max-len
        id: player.id, changes: { ...result, team: player.team }, // 'team: player.team' временно пока сервер не будет кидать id команды, сейчас он кидает team: 0
      }));
      return true;
    } catch (error) {
      if (error.isCustomError) {
        dispatch(addEntityError.actions.addErrorMessage({
          errorMessage: playerRequestErrors[error.status],
        }));
      }
    }
  },
);

export const loadChunkPlayers = createAsyncThunk(
  'loadChunkPlayers',
  async ({ chunkData, token }: IDataLoadChunk, { dispatch }) => {
    const teamsIdsQuery = chunkData.teams.map((team: IOption) => `&TeamIds=${team.value}`).join('');
    const result = await getPlayers(`Player/GetPlayers?Name=${chunkData.name}${teamsIdsQuery}&Page=${chunkData.page}&PageSize=${chunkData.size}`, token);
    dispatch(playersDataReducer.actions.loadChunkPlayers({ chunkData: result }));
  },
);
