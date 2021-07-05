import { createSlice, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit';
import { IPlayer, IChunkPlayers } from '../../helpers/interfaces/storeInterfaces/Player';

const playersAdapter = createEntityAdapter<IPlayer>();

export const playersDataReducer = createSlice({
  name: 'playerDataReducer',
  initialState: playersAdapter.getInitialState<{ chunkData: IChunkPlayers}>({
    chunkData: {
      data: [],
      count: 0,
      page: 0,
      size: 0,
    },
  }),
  reducers: {
    addOnePlayer: playersAdapter.addOne,
    addManyPlayers: playersAdapter.addMany,
    deleteOnePlayer: playersAdapter.removeOne,
    deleteManyPlayers: playersAdapter.removeMany,
    clearPlayers: playersAdapter.removeAll,
    updatePlayer: playersAdapter.updateOne,
    setAllPlayers: playersAdapter.setAll,
    loadChunkPlayers: (state, action: PayloadAction<{ chunkData: IChunkPlayers }>) => {
      const { chunkData } = action.payload;
      state.chunkData = chunkData;
    },
  },
});
