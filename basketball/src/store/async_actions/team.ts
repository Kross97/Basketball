import { createAsyncThunk } from '@reduxjs/toolkit';
import { addTeam, getTeams } from '../../api/team';
import { addEntityError } from '../reducers/addingError';
import { teamRequestErrors } from '../../api/api_constants/teamRequestErrors';
import { teamsDataReducer } from '../reducers/team';

export const addNewTeam = createAsyncThunk('addNewplayer',
  async (teamData: any, { dispatch }) => {
    dispatch(addEntityError.actions.clearErrorMessage());
    try {
      const result = await addTeam('Team/Add', teamData.team, teamData.token);
      dispatch(addEntityError.actions.clearErrorMessage());
      console.log('TEAM_REQUEST =>', result);
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
    console.log('TEAMS =>', result);
    dispatch(teamsDataReducer.actions.setAllTeams(result.data));
  },
);
