import { createAsyncThunk } from '@reduxjs/toolkit';
import { batch } from 'react-redux';
import {
  addTeam, getTeams, deleteTeam, updateTeam,
} from '../../api/team';
import { addEntityError } from '../reducers/addingError';
import { teamRequestErrors } from '../../api/api_constants/teamRequestErrors';
import { teamsDataReducer } from '../reducers/team';

export const addNewTeam = createAsyncThunk('addNewplayer',
  async (teamData: any, { dispatch }) => {
    dispatch(addEntityError.actions.clearErrorMessage());
    try {
      const result = await addTeam('Team/Add', teamData.team, teamData.token);
      batch(() => {
        dispatch(teamsDataReducer.actions.addOneTeam(result));
        dispatch(addEntityError.actions.clearErrorMessage());
      });
      return true;
    } catch (error) {
      if (error.isCustomError) {
        dispatch(addEntityError.actions.addErrorMessage({
          errorMessage: teamRequestErrors[error.status],
        }));
      }
    }
  });

export const loadAllCommands = createAsyncThunk(
  'loadAllCommands',
  async (token: string, { dispatch }) => {
    const result = await getTeams('Team/GetTeams', token);
    dispatch(teamsDataReducer.actions.setAllTeams(result.data));
  },
);

export const removeTeam = createAsyncThunk(
  'removeTeam',
  async (removeData: any, { dispatch }) => {
    try {
      const result = await deleteTeam(`Team/Delete?id=${removeData.id}`, removeData.token);
      dispatch(teamsDataReducer.actions.deleteOneTeam(result.id));
    } catch (error) {
      console.log('ERROR', error);
    }
  },
);

export const updateCurrentTeam = createAsyncThunk(
  'updateTeam',
  async (updateData: any, { dispatch }) => {
    dispatch(addEntityError.actions.clearErrorMessage());
    try {
      const result = await updateTeam('Team/Update', updateData.team, updateData.token);
      batch(() => {
        console.log('UPDATE =>', result);
        dispatch(teamsDataReducer.actions.updateTeam({ id: result.id, changes: { ...result } }));
        dispatch(addEntityError.actions.clearErrorMessage());
      });
      return true;
    } catch (error) {
      if (error.isCustomError) {
        dispatch(addEntityError.actions.addErrorMessage({
          errorMessage: teamRequestErrors[error.status],
        }));
      }
    }
  },
);

export const loadChunkTeams = createAsyncThunk(
  'loadChunkTeams',
  async ({ chunkData, token }: any, { dispatch }) => {
    console.log('CHUNK_DATA_FETCH =>', chunkData);
    const result = await getTeams(`Team/GetTeams?Name=${chunkData.name}&Page=${chunkData.page}&PageSize=${chunkData.size}`, token);
    dispatch(teamsDataReducer.actions.loadChunkTeams({ chunkData: result }));
  },
);
