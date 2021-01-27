import { createAsyncThunk } from '@reduxjs/toolkit';
import { addTeam } from '../../api/team';

export const addNewTeam = createAsyncThunk('addNewplayer',
  async (teamData: any) => {
    const result = await addTeam('Team/Add', teamData.team, teamData.token);
    console.log('RES', result);
  });
