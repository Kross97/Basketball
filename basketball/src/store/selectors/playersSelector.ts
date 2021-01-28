import { createSelector } from '@reduxjs/toolkit';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';

const selectState = (state: IStoreReducer) => state;

export const playersSelector = createSelector(
  selectState,
  (({ playersDataReducer: { ids, entities } }) => ids.map((id) => entities[id])),
);
