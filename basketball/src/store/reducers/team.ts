import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { ITeam } from '../../helpers/interfaces/store_interfaces/Team';

const teamsAdapter = createEntityAdapter<ITeam>();

export const teamsDataReducer = createSlice({
  name: 'teamDataReducer',
  initialState: teamsAdapter.getInitialState(),
  reducers: {
    addOneTeam: teamsAdapter.addOne,
    addManyTeams: teamsAdapter.addMany,
    deleteOneTeam: teamsAdapter.removeOne,
    clearTeams: teamsAdapter.removeAll,
    updateTeam: teamsAdapter.updateOne,
    setAllTeams: teamsAdapter.setAll,
  },
});
