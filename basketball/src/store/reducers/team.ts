import { createSlice, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit';
import { ITeam, IChunkDataTeams } from '../../helpers/interfaces/storeInterfaces/Team';

const teamsAdapter = createEntityAdapter<ITeam>();

export const teamsDataReducer = createSlice({
  name: 'teamDataReducer',
  initialState: teamsAdapter.getInitialState({
    chunkData: {
      data: [] as ITeam[],
      count: 0,
      size: 0,
    },
  }),
  reducers: {
    addOneTeam: teamsAdapter.addOne,
    addManyTeams: teamsAdapter.addMany,
    deleteOneTeam: teamsAdapter.removeOne,
    clearTeams: teamsAdapter.removeAll,
    updateTeam: teamsAdapter.updateOne,
    setAllTeams: teamsAdapter.setAll,
    loadChunkTeams: (state, action: PayloadAction<{ chunkData: IChunkDataTeams}>) => {
      const { chunkData } = action.payload;
      state.chunkData = chunkData;
    },
  },
});
