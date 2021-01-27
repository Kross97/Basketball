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
  const token = useSelector(({ authDataUser: { authData } }: IStoreReducer) => authData.token);
  const { loadNewImage: loadTeamImage, addNewTeam: addTeam } = useCustomActions(actionCreators);

  const addNewEntity = (data: any) => {
    const team = {
      name: data.team,
      foundationYear: Number(data.foundation),
      division: data.division,
      conference: data.conference,
      imageUrl: '#',
    };
    console.log('TEAM', team);
    addTeam({ team, token });
  };

  const loadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileImage = event.target.files[0];
      const formData = new FormData();
      formData.set('imageLoad', fileImage);
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
