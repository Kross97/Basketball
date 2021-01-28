import React from 'react';
import { useSelector } from 'react-redux';
import { AddNewEntity } from './AddNewEntity';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import { loadNewImage } from '../../store/async_actions/image';
import { useCustomActions } from '../../helpers/functions/useCustomActions';
import { addNewTeam } from '../../store/async_actions/team';

const actionCreators = {
  loadNewImage,
  addNewTeam,
};

export const AddNewTeam = () => {
  const { token, srcImage } = useSelector((
    { authDataUser: { authData }, imageLoadData }: IStoreReducer,
  ) => (
    { token: authData.token, srcImage: imageLoadData.srcImage }
  ));
  const { loadNewImage: loadTeamImage, addNewTeam: addTeam } = useCustomActions(actionCreators);

  const addNewEntity = (data: any) => {
    const team = {
      ...data,
      foundationYear: Number(data.foundationYear),
      imageUrl: srcImage,
    };
    addTeam({ team, token });
  };

  const loadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileImage = event.target.files[0];
      const formData = new FormData();
      formData.set('file', fileImage);
      loadTeamImage({ file: formData, token });
    }
  };

  return (
    <>
      <AddNewEntity
        isTeam
        loadImage={loadImage}
        addNewEntity={addNewEntity}
      />
    </>
  );
};
