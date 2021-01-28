import { createAsyncThunk } from '@reduxjs/toolkit';
import { addTeam } from '../../api/team';
import { addEntityError } from '../reducers/addingError';
import { teamRequestErrors } from '../../api/api_constants/teamRequestErrors';

export const addNewTeam = createAsyncThunk('addNewplayer',
  async (teamData: any, { dispatch }) => {
    dispatch(addEntityError.actions.addErrorMessage({ errorMessage: '' }));
    try {
      const result = await addTeam('Team/Add', teamData.team, teamData.token);
      console.log('TEAM_REQUEST =>', result);
    } catch (error) {
      if (error.isCustomError) {
        dispatch(addEntityError.actions.addErrorMessage({
          errorMessage: teamRequestErrors[error.status],
        }));
      }
    }
  });
