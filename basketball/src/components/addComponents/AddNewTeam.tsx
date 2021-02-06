import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { AddNewEntity } from './AddNewEntity';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import { loadNewImage } from '../../store/asyncActions/image';
import { useCustomActions } from '../../helpers/functions/useCustomActions';
import { addNewTeam, updateCurrentTeam } from '../../store/asyncActions/team';
import { imageLoadData } from '../../store/reducers/image';
import { routePaths } from '../../helpers/constants/routePaths';
import { IFormAddTeam } from '../../helpers/interfaces/componentsInterfaces/StateAndEvents';
import { FormAddTeam } from './FormAddTeam';

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
    addNewTeam: addTeam,
    updateCurrentTeam: updateTeam,
  } = useCustomActions(actionCreators);

  const addNewEntity = async (data: IFormAddTeam) => {
    const team = {
      ...data,
      name: data.teamName,
      foundationYear: Number(data.foundationYear),
      imageUrl: srcImage,
    };

    if ('id' in team) {
      const {
        payload: isSuccesUpdate,
      } = await updateTeam({ team: { ...team, id: Number(team.id) }, token });

      if (isSuccesUpdate) {
        history.replace(routePaths.teams);
      }
      return;
    }

    const { payload: isSuccesAdd } = await addTeam({ team, token });
    if (isSuccesAdd) {
      history.push(routePaths.teams);
    }
  };

  return (
    <AddNewEntity
      isTeam
      imageEntity={teamUpdate ? teamUpdate.imageUrl : undefined}
    >
      <FormAddTeam teamUpdate={teamUpdate} addNewTeam={addNewEntity} />
    </AddNewEntity>
  );
};
