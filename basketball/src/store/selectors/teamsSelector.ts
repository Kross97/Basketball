import { createSelector } from '@reduxjs/toolkit';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import imageUknow from '../../static/images/item_not_image.png';
import { regExpImageTeam } from '../../helpers/constants/regularExp';
import { ITeam } from '../../helpers/interfaces/store_interfaces/Team';

const selectState = (state: IStoreReducer) => state;

export const teamsSelector = createSelector(
  selectState,
  ({ teamsDataReducer: { ids, entities } }) => ids.map((id) => <ITeam>entities[id]),
);

export const teamsForSelectPlayer = createSelector(
  teamsSelector,
  (teams: ITeam[]) => teams.map((team) => {
    const teamOption = {
      value: team.id,
      label: team.name,
      imageSrc: team.imageUrl,
    };

    if (!regExpImageTeam.test(team.imageUrl)) {
      teamOption.imageSrc = imageUknow;
    }
    return teamOption;
  }),
);
