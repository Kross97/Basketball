import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
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
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const { token, srcImage } = useSelector((
    { authDataUser: { authData }, imageLoadData }: IStoreReducer,
  ) => (
    { token: authData.token, srcImage: imageLoadData.srcImage }
  ));
  const teamUpdate = useSelector(({ teamsDataReducer }: IStoreReducer) => (
    id ? teamsDataReducer.entities[id] : null));
  const { loadNewImage: loadTeamImage, addNewTeam: addTeam } = useCustomActions(actionCreators);

  const addNewEntity = (data: any) => {
    const team = {
      ...data,
      foundationYear: Number(data.foundationYear),
      imageUrl: srcImage,
    };
    addTeam({ team, token });
    history.push('/main/teams');
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
        entityUpdate={teamUpdate}
        imageEntity={teamUpdate ? teamUpdate.imageUrl : undefined}
      />
    </>
  );
};
