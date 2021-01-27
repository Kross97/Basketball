import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { FieldInputData } from '../../uiComponents/FieldInputData';
import { ButtonAction } from '../../uiComponents/ButtonAction';
import { MultiSelectEntities } from '../../uiComponents/MultiSelectEntities';
import { positions } from '../../helpers/constants/playerPositions';

interface IProps {
  addNewPlayer: (data: any) => void;
}

export const FormAddPlayer: FC<IProps> = ({
  addNewPlayer,
}) => {
  const [position, setPosition] = useState<string>('');
  const [team, setTeam] = useState<number>(0);
  const [positionError, setPositionError] = useState<boolean>(false);
  const [teamError, setTeamError] = useState<boolean>(false);

  const { t } = useTranslation();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    errors,
  } = useForm();

  const cancelAddNewEntity = () => {
    history.goBack();
  };

  const changePosition = (targetPosition: any) => {
    console.log('VAl', targetPosition, setTeam, setPosition);
    setPositionError(!targetPosition);
    setPosition(targetPosition ? targetPosition.value : '');
  };

  const changeTeam = (targetTeam: any) => {
    console.log('VAl-2', targetTeam);
    setTeamError(!targetTeam);
    setTeam(targetTeam ? targetTeam.value : 0);
  };

  const addPositionAndTeam = (data: any) => {
    if (!position && !team) {
      setPositionError(true);
      setTeamError(true);
      return;
    }
    if (!team) {
      setTeamError(true);
      return;
    }
    if (!position) {
      setPositionError(true);
      return;
    }
    setPositionError(false);
    setTeamError(false);
    data = {
      ...data,
      position,
      team,
    };
    addNewPlayer(data);
  };

  return (
    <FormAdd onSubmit={handleSubmit(addPositionAndTeam)}>
      <FieldInputData
        text={t('player:name')}
        disabled={false}
        startType="text"
        type="text"
        isError={!!errors.player}
        errorMessage="Required or incorrect enter"
        name="player"
        register={register({ required: true, pattern: /^([^\W\d_]{5,})$/i })}
      />
      <MultiSelectEntities
        onChange={changePosition}
        text="Position"
        isDefault
        isPlaceholder={false}
        isMulti={false}
        isError={positionError}
        options={positions}
      />
      <MultiSelectEntities
        onChange={changeTeam}
        text="Team"
        isDefault
        isPlaceholder={false}
        isMulti={false}
        isError={teamError}
        options={positions}
      />
      <PlayerData>
        <FieldInputData
          text="Height"
          disabled={false}
          startType="text"
          type="text"
          isError={!!errors.height}
          errorMessage="Required or incorrect enter"
          name="height"
          register={register({ required: true, pattern: /^([^\D_]{2,3})$/i })}
        />
        <FieldInputData
          text="Width"
          disabled={false}
          startType="text"
          type="text"
          isError={!!errors.width}
          errorMessage="Required or incorrect enter"
          name="width"
          register={register({ required: true, pattern: /^([^\D_]{2,3})$/i })}
        />
        <FieldInputData
          text="Age"
          disabled={false}
          startType="text"
          type="text"
          isError={!!errors.age}
          errorMessage="Required or incorrect enter"
          name="age"
          register={register({ required: true, pattern: /^([^\D_]{2})$/i })}
        />
        <FieldInputData
          text="Number"
          disabled={false}
          startType="text"
          type="text"
          isError={!!errors.number}
          errorMessage="Required or incorrect enter"
          name="number"
          register={register({ required: true, pattern: /^([^\D_]{1,2})$/i })}
        />
      </PlayerData>
      <BtnGroup>
        <ButtonAction
          onClick={cancelAddNewEntity}
          isNegativeStyle
          isAdding={false}
          size="middle"
          text="Cancel"
          disabled={false}
          type="button"
        />
        <ButtonAction
          isNegativeStyle={false}
          isAdding={false}
          size="middle"
          text="Save"
          disabled={Object.keys(errors).length > 0}
          type="submit"
        />
      </BtnGroup>
    </FormAdd>
  );
};

const FormAdd = styled.form`
  display: flex;
  flex-direction: column;

  & label {
    margin-bottom: 24px;
  }
`;

const BtnGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 24px;
`;

const PlayerData = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr ;
 grid-template-rows: 1fr 1fr;
 grid-column-gap: 24px;

 @media( max-width: 1500px) {
   grid-template-columns: repeat(2, 171px) ;
 }
 `;
