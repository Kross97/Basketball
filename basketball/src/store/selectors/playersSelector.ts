import { createSelector } from '@reduxjs/toolkit';
import { StoreReducer } from '../../helpers/interfaces/StoreReducer';

const selectState = (state: StoreReducer) => state;

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

const selectPlayersTeam = (state: StoreReducer, idTeam: string) => ({
  state,
  idTeam: Number(idTeam),
});

export const playersCurrentTeam = createSelector(
  selectPlayersTeam,
  ({
    state: {
      playersDataReducer: {
        ids,
        entities,
      },
    },
    idTeam,
  }) => (
    ids.map((id) => (entities[id]?.team === idTeam && entities[id])).filter((entity) => entity)
  ),
);
