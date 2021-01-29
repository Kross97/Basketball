import { createSelector } from '@reduxjs/toolkit';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import { IPlayer } from '../../helpers/interfaces/store_interfaces/Player';

const selectState = (state: IStoreReducer) => state;

export const playersSelector = createSelector(
  selectState,
  (({ playersDataReducer: { ids, entities } }) => ids.map((id) => entities[id])),
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
