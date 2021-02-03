import { createSelector } from '@reduxjs/toolkit';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import imageUnknow from '../../static/images/item_not_image.png';
import { regExpImageTeam } from '../../helpers/constants/regularExp';
import { ITeam } from '../../helpers/interfaces/store_interfaces/Team';

const selectState = (state: IStoreReducer) => state;

export const teamsChunkSelector = createSelector(
  selectState,
  ({ teamsDataReducer: { chunkData } }) => ({
    chunkEntities: chunkData.data,
    countEntities: chunkData.count,
    sizePageEntities: chunkData.size,
  }),
);

export const allTeamsSelector = createSelector(
  selectState,
  ({ teamsDataReducer: { ids, entities } }) => ids.map((id) => <ITeam>entities[id]),
);

export const teamsForSelectPlayer = createSelector(
  allTeamsSelector,
  (teams: ITeam[]) => teams.map((team, index) => {
    const teamOption = {
      value: team.id,
      label: team.name,
      imageSrc: team.imageUrl,
      isLast: (index + 1) === teams.length,
    };

    if (!regExpImageTeam.test(team.imageUrl)) {
      teamOption.imageSrc = imageUnknow;
    }
    return teamOption;
  }),
);
