import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { AddNewEntity } from './AddNewEntity';
import { loadNewImage } from '../../store/async_actions/image';
import { useCustomActions } from '../../helpers/functions/useCustomActions';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import { getBirthdaty } from '../../helpers/functions/getBirthday';
import { addNewPlayer, updateSelectedPlayer } from '../../store/async_actions/player';
import { imageLoadData } from '../../store/reducers/image';

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

  const addNewEntity = async (data: any) => {
    const player = {
      ...data,
      team: Number(data.team),
      number: Number(data.number),
      weight: Number(data.weight),
      height: Number(data.height),
      birthday: getBirthdaty(data.birthday),
      avatarUrl: srcImage,
    };

    if ('id' in player) {
      const {
        payload: isSuccessUpdate,
      } = await updatePlayer({ player: { ...player, id: Number(player.id) }, token });

      if (isSuccessUpdate) {
        history.replace('/main/players');
      }
      return;
    }
    const {
      payload: isSuccessAdding,
    } = await addPlayer({ player, token });
    if (isSuccessAdding) {
      history.push('/main/players');
    }
  };

  return (
    <>
      <AddNewEntity
        addNewEntity={addNewEntity}
        isTeam={false}
        entityUpdate={playerUpdate}
        imageEntity={playerUpdate ? playerUpdate.avatarUrl : undefined}
      />
    </>
  );
};
