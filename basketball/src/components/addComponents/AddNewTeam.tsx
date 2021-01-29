import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { AddNewEntity } from './AddNewEntity';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import { loadNewImage } from '../../store/async_actions/image';
import { useCustomActions } from '../../helpers/functions/useCustomActions';
import { addNewTeam, updateCurrentTeam } from '../../store/async_actions/team';
import { imageLoadData } from '../../store/reducers/image';

const actionCreators = {
  loadNewImage,
  addNewTeam,
  updateCurrentTeam,
  addSrcImageExisting: imageLoadData.actions.addSrcImageExisting,
};

export const AddNewTeam = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const { token, srcImage } = useSelector((state: IStoreReducer) => (
    {
      token: state.authDataUser.authData.token,
      srcImage: state.imageLoadData.srcImage,
    }
  ));
  const teamUpdate = useSelector(({ teamsDataReducer }: IStoreReducer) => (
    id ? teamsDataReducer.entities[id] : undefined));
  const {
    loadNewImage: loadTeamImage,
    addNewTeam: addTeam,
    updateCurrentTeam: updateTeam,
    addSrcImageExisting,
  } = useCustomActions(actionCreators);

  const addNewEntity = async (data: any) => {
    const team = {
      ...data,
      foundationYear: Number(data.foundationYear),
      imageUrl: srcImage,
    };

    if ('id' in team) {
      const {
        payload: isSuccesUpdate,
      } = updateTeam({ team: { ...team, id: Number(team.id) }, token });

      if (isSuccesUpdate) {
        history.replace('/main/teams');
      }
      return;
    }

    const { payload: isSuccesAdd } = await addTeam({ team, token });
    if (isSuccesAdd) {
      history.push('/main/teams');
    }
  };

  const loadImage = (imageData: React.ChangeEvent<HTMLInputElement> | string) => {
    if (typeof imageData !== 'string' && imageData.target.files) {
      const fileImage = imageData.target.files[0];
      const formData = new FormData();
      formData.set('file', fileImage);
      loadTeamImage({ file: formData, token });
    } else {
      addSrcImageExisting({ srcImage: imageData });
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
