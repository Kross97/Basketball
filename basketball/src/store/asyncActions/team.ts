import { createAsyncThunk } from '@reduxjs/toolkit';
import { batch } from 'react-redux';
import {
  addTeam, getTeams, deleteTeam, updateTeam,
} from '../../api/team';
import {
  IDataAddTeam, IDataDeleteTeam, IDataUpdateTeam, IDataLoadChunkTeams,
} from '../../helpers/interfaces/requestInterfaces/Team';
import { addEntityError } from '../reducers/addingError';
import { teamRequestErrors } from '../../api/apiСonstants/teamRequestErrors';
import { teamsDataReducer } from '../reducers/team';
import { deletePlayer } from '../../api/player';
import { playersDataReducer } from '../reducers/player';
import { routePaths } from '../../helpers/constants/routePaths';

export const addNewTeam = createAsyncThunk('addNewplayer',
  async (teamData: IDataAddTeam, { dispatch }) => {
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
  async (removeData: IDataDeleteTeam, { dispatch }) => {
    dispatch(addEntityError.actions.clearErrorMessage());
    try {
      const idsPlayersTeam = removeData.playersCurrentTeam.map((player) => player.id);
      idsPlayersTeam.forEach((id) => {
        deletePlayer(`Player/Delete?id=${id}`, removeData.token);
      });
      const result = await deleteTeam(`Team/Delete?id=${removeData.id}`, removeData.token);
      removeData.history.replace(routePaths.teams);
      batch(() => {
        dispatch(playersDataReducer.actions.deleteManyPlayers(idsPlayersTeam));
        dispatch(teamsDataReducer.actions.deleteOneTeam(result.id));
        dispatch(addEntityError.actions.clearErrorMessage());
      });
    } catch (error) {
      if (error.isCustomError) {
        dispatch(addEntityError.actions.addErrorMessage({
          errorMessage: teamRequestErrors[error.status],
        }));
      }
    }
  },
);

export const updateCurrentTeam = createAsyncThunk(
  'updateTeam',
  async (updateData: IDataUpdateTeam, { dispatch }) => {
    dispatch(addEntityError.actions.clearErrorMessage());
    try {
      const result = await updateTeam('Team/Update', updateData.team, updateData.token);
      batch(() => {
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
  async ({ chunkData, token }: IDataLoadChunkTeams, { dispatch }) => {
    const result = await getTeams(`Team/GetTeams?Name=${chunkData.name}&Page=${chunkData.page}&PageSize=${chunkData.size}`, token);
    dispatch(teamsDataReducer.actions.loadChunkTeams({ chunkData: result }));
  },
);
