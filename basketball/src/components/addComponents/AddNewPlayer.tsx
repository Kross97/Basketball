import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { AddNewEntity } from './AddNewEntity';
import { loadNewImage } from '../../store/async_actions/image';
import { useCustomActions } from '../../helpers/functions/useCustomActions';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import { addNewPlayer, updateSelectedPlayer } from '../../store/async_actions/player';
import { imageLoadData } from '../../store/reducers/image';
import { routePaths } from '../../helpers/constants/routePaths';
import { IFormAddPlayer } from '../../helpers/interfaces/components_interfaces/StateAndEvents';
import { FormAddPlayer } from './FormAddPlayer';

const actionCreators = {
  loadNewImage,
  addNewPlayer,
  updateSelectedPlayer,
  addSrcImageExisting: imageLoadData.actions.addSrcImageExisting,
};

export const AddNewPlayer = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const playerUpdate = useSelector(({ playersDataReducer }: IStoreReducer) => (
    id ? playersDataReducer.entities[id] : undefined));

  const { token, srcImage } = useSelector((state: IStoreReducer) => (
    {
      token: state.authDataUser.authData.token,
      srcImage: state.imageLoadData.srcImage,
    }
  ));
  const {
    addNewPlayer: addPlayer,
    updateSelectedPlayer: updatePlayer,
  } = useCustomActions(actionCreators);

  const addNewEntity = async (data: IFormAddPlayer) => {
    const player = {
      ...data,
      team: Number(data.team),
      number: Number(data.number),
      weight: Number(data.weight),
      height: Number(data.height),
      avatarUrl: srcImage,
    };

    if ('id' in player) {
      const {
        payload: isSuccessUpdate,
      } = await updatePlayer({
        player: {
          ...player,
          id: Number(player.id),
        },
        token,
      });

      if (isSuccessUpdate) {
        history.replace(routePaths.players);
      }
      return;
    }
    const {
      payload: isSuccessAdding,
    } = await addPlayer({ player, token });
    if (isSuccessAdding) {
      history.push(routePaths.players);
    }
  };

  return (
    <AddNewEntity
      isTeam={false}
      imageEntity={playerUpdate ? playerUpdate.avatarUrl : undefined}
    >
      <FormAddPlayer playerUpdate={playerUpdate} addNewPlayer={addNewEntity} />
    </AddNewEntity>
  );
};
