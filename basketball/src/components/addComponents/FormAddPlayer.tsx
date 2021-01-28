import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FieldInputData } from '../../uiComponents/FieldInputData';
import { ButtonAction } from '../../uiComponents/ButtonAction';
import { MultiSelectEntities } from '../../uiComponents/MultiSelectEntities';
import { positions } from '../../helpers/constants/playerPositions';
import { teamsForSelectPlayer } from '../../store/selectors/teamsSelector';

interface IProps {
  addNewPlayer: (data: any) => void;
}

export const FormAddPlayer: FC<IProps> = ({
  addNewPlayer,
}) => {
  const [position, setPosition] = useState<string>('');
  const [team, setTeam] = useState<string>('');

  const teamsOptions = useSelector(teamsForSelectPlayer);
  console.log('TEAMS-OPTIONS', teamsOptions);
  const { t } = useTranslation();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    errors,
  } = useForm();

  const cancelAddNewEntity = () => {
    history.replace('/main/players');
  };

  const changePosition = (targetPosition: any) => {
    if (targetPosition) {
      delete errors.position;
      setPosition(targetPosition.value);
    } else {
      errors.position = true;
      setPosition('');
    }
  };

  const changeTeam = (targetTeam: any) => {
    if (targetTeam) {
      delete errors.team;
      setTeam(targetTeam.value);
    } else {
      errors.team = true;
      setTeam('');
    }
  };

  return (
    <FormAdd onSubmit={handleSubmit(addNewPlayer)}>
      <input type="hidden" name="position" ref={register({ required: true })} value={position} />
      <input type="hidden" name="team" ref={register({ required: true })} value={team} />
      <FieldInputData
        text={t('player:name')}
        disabled={false}
        startType="text"
        type="text"
        isError={!!errors.player}
        errorMessage="Required or incorrect enter"
        name="player"
        register={register({ required: true, pattern: /^([^\W\d_]{4,})([\s\D])+([^\W\d_]+)$/i })}
      />
      <MultiSelectEntities
        onChange={changePosition}
        text="Position"
        isPlaceholder={false}
        isMulti={false}
        isError={!!errors.position}
        options={positions}
      />
      <MultiSelectEntities
        onChange={changeTeam}
        text="Team"
        isPlaceholder={false}
        isMulti={false}
        isError={!!errors.team}
        options={teamsOptions}
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
          register={register({ required: true, pattern: /^([^\D_]{3})$/i })}
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
          isError={!!errors.birthday}
          errorMessage="Required or incorrect enter"
          name="birthday"
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
