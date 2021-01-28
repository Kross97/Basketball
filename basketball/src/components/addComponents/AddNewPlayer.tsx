import React from 'react';
import { useSelector } from 'react-redux';
import { AddNewEntity } from './AddNewEntity';
import { loadNewImage } from '../../store/async_actions/image';
import { useCustomActions } from '../../helpers/functions/useCustomActions';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import { getBirthdaty } from '../../helpers/functions/getBirthday';
import { addNewPlayer } from '../../store/async_actions/player';

const actionCreators = {
  loadNewImage,
  addNewPlayer,
};

export const AddNewPlayer = () => {
  const { token, srcImage } = useSelector((
    { authDataUser: { authData }, imageLoadData }: IStoreReducer,
  ) => (
    { token: authData.token, srcImage: imageLoadData.srcImage }
  ));
  const {
    loadNewImage: loadPlayerImage,
    addNewPlayer: addPlayer,
  } = useCustomActions(actionCreators);
  const addNewEntity = (data: any) => {
    const playerData = {
      ...data,
      team: Number(data.team),
      number: Number(data.number),
      width: Number(data.width),
      height: Number(data.height),
      birthday: getBirthdaty(data.birthday),
      avatarUrl: srcImage,
    };
    addPlayer({ player: playerData, token });
  };

  const loadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileImage = event.target.files[0];
      const formData = new FormData();
      formData.set('file', fileImage);
      loadPlayerImage({ file: formData, token });
    }
  };

  return (
    <>
      <AddNewEntity
        addNewEntity={addNewEntity}
        loadImage={loadImage}
        isTeam={false}
      />
    </>
  );
};
