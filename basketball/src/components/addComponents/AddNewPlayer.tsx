import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { AddNewEntity } from './AddNewEntity';
import { loadNewImage } from '../../store/asyncActions/image';
import { useCustomActions } from '../../helpers/functions/useCustomActions';
import { StoreReducer } from '../../helpers/interfaces/StoreReducer';
import { addNewPlayer, updateSelectedPlayer } from '../../store/asyncActions/player';
import { imageLoadData } from '../../store/reducers/image';
import { routePaths } from '../../helpers/constants/routePaths';
import { IFormAddPlayer } from '../../helpers/interfaces/componentsInterfaces/StateAndEvents';
import { FormAddPlayer } from './FormAddPlayer';
import { formatDateForServer } from '../../helpers/functions/formatingDate';

const actionCreators = {
  loadNewImage,
  addNewPlayer,
  updateSelectedPlayer,
  addSrcImageExisting: imageLoadData.actions.addSrcImageExisting,
};

export default () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const playerUpdate = useSelector(({ playersDataReducer }: StoreReducer) => (
    id ? playersDataReducer.entities[id] : undefined));

  const { token, srcImage } = useSelector((state: StoreReducer) => (
    {
      token: state.authDataUser.authData.token,
      srcImage: state.imageLoadData.srcImage,
    }
  ));
  const {
    addNewPlayer: addPlayer,
    updateSelectedPlayer: updatePlayer,
  } = useCustomActions(actionCreators);

  const addNewEntity = useCallback(async (data: IFormAddPlayer) => {
    const player = {
      ...data,
      birthday: formatDateForServer(data.birthday),
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
  }, [srcImage]);

  return (
    <AddNewEntity
      isTeam={false}
      imageEntity={playerUpdate ? playerUpdate.avatarUrl : undefined}
    >
      <FormAddPlayer playerUpdate={playerUpdate} addNewPlayer={addNewEntity} />
    </AddNewEntity>
  );
};
