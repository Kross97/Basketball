import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { IPlayer } from '../../helpers/interfaces/store_interfaces/Player';

const playersAdapter = createEntityAdapter<IPlayer>();

export const playersDataReducer = createSlice({
  name: 'playerDataReducer',
  initialState: playersAdapter.getInitialState(),
  reducers: {
    addOnePlayer: playersAdapter.addOne,
    addManyPlayers: playersAdapter.addMany,
    deleteOnePlayer: playersAdapter.removeOne,
    clearPlayers: playersAdapter.removeAll,
    updatePlayer: playersAdapter.updateOne,
    setAllPlayers: playersAdapter.setAll,
  },
});
