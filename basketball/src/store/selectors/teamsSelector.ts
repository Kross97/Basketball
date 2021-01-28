import { createSelector } from '@reduxjs/toolkit';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import imageUknow from '../../static/images/item_not_image.png';
import { regExpImageTeam } from '../../helpers/constants/regularExp';

const selectState = (state: IStoreReducer) => state;

export const teamsSelector = createSelector(
  selectState,
  ({ teamsDataReducer: { ids, entities } }) => ids.map((id) => {
    const entity = entities[id];
    if (entity && !regExpImageTeam.test(entity.imageUrl)) {
      return {
        ...entity,
        imageUrl: imageUknow,
      };
    }
    return entity;
  }),
);

export const teamsForSelectPlayer = createSelector(
  teamsSelector,
  (teams: any) => teams.map((team: any) => ({
    value: team.id,
    label: team.name,
    imageSrc: team.imageUrl,
  })),
);
