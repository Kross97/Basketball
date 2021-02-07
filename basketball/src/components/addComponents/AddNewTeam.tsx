import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { AddNewEntity } from './AddNewEntity';
import { StoreReducer } from '../../helpers/interfaces/StoreReducer';
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

export default () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const { token, srcImage } = useSelector((state: StoreReducer) => (
    {
      token: state.authDataUser.authData.token,
      srcImage: state.imageLoadData.srcImage,
    }
  ));
  const teamUpdate = useSelector(({ teamsDataReducer }: StoreReducer) => (
    id ? teamsDataReducer.entities[id] : undefined));
  const {
    addNewTeam: addTeam,
    updateCurrentTeam: updateTeam,
  } = useCustomActions(actionCreators);

  const addNewEntity = useCallback(async (data: IFormAddTeam) => {
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
  }, [srcImage]);

  return (
    <AddNewEntity
      isTeam
      imageEntity={teamUpdate ? teamUpdate.imageUrl : undefined}
    >
      <FormAddTeam teamUpdate={teamUpdate} addNewTeam={addNewEntity} />
    </AddNewEntity>
  );
};
