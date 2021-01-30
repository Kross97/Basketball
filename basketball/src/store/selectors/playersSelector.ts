import { createSelector } from '@reduxjs/toolkit';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import { IPlayer } from '../../helpers/interfaces/store_interfaces/Player';

const selectState = (state: IStoreReducer) => state;

export const allPlayersSelector = createSelector(
  selectState,
  (({ playersDataReducer: { ids, entities } }) => ids.map((id) => entities[id])),
);

export const playersChunkSelector = createSelector(
  selectState,
  ({ playersDataReducer: { chunkData } }) => ({
    chunkEntities: chunkData.data,
    countEntities: chunkData.count,
    sizePageEntities: chunkData.size,
  }),
);

const selectPlayersTeam = (state:IStoreReducer, idTeam: string) => ({
  state,
  idTeam: Number(idTeam),
});

export const playerCurrentTeam = createSelector(
  selectPlayersTeam,
  ({
    state: {
      playersDataReducer: {
        ids,
        entities,
      },
    },
    idTeam,
  }) => ids.map((id) => ((entities[id] as IPlayer).team === idTeam && entities[id]))
    .filter((entity) => entity),
);
