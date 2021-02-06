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
import { IPlayer, IPostionOption, ITeamOption } from '../../helpers/interfaces/storeInterfaces/Player';
import { routePaths } from '../../helpers/constants/routePaths';
import { IFormAddPlayer } from '../../helpers/interfaces/componentsInterfaces/StateAndEvents';
import { regExpName, regExpBirthDay } from '../../helpers/constants/regularExp';
import { validateBirthDayOld, validateBirthDayYoung } from '../../helpers/functions/validateBirthDay';
import { formAddPlayersErrors } from '../../helpers/constants/formErrors';
import { CalendarField } from '../../uiComponents/CalendarField';
import { mobliSizeCard, mobileSizeGridForm } from '../../helpers/constants/mobileSize';
import { formatDate } from '../../helpers/functions/formatingDate';

interface IProps {
  addNewPlayer: (data: IFormAddPlayer) => void;
  playerUpdate: IPlayer | undefined;
}

export const FormAddPlayer: FC<IProps> = ({
  addNewPlayer,
  playerUpdate,
}) => {
  const [position, setPosition] = useState<string>(() => (playerUpdate ? playerUpdate.position : ''));
  const [team, setTeam] = useState<string>(() => (playerUpdate ? `${playerUpdate.team}` : ''));

  const teamsOptions = useSelector(teamsForSelectPlayer);

  const { t } = useTranslation();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    errors,
    trigger,
  } = useForm();

  const cancelAddNewEntity = () => {
    history.replace(routePaths.players);
  };

  const changePosition = (targetPosition: IPostionOption) => {
    if (targetPosition) {
      delete errors.position;
      setPosition(targetPosition.value);
    } else {
      errors.position = true;
      setPosition('');
    }
  };

  const changeTeam = (targetTeam: ITeamOption) => {
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
      {playerUpdate && <input type="hidden" name="id" ref={register} value={playerUpdate.id} />}
      <input type="hidden" name="position" ref={register({ required: true })} value={position} />
      <input type="hidden" name="team" ref={register({ required: true })} value={team} />
      <FieldInputData
        text={t('player:name')}
        disabled={false}
        startType="text"
        type="text"
        isError={!!errors.name}
        errorMessage={formAddPlayersErrors[errors.name?.type]}
        name="name"
        onChange={() => trigger('name')}
        defaultValue={playerUpdate && playerUpdate.name}
        register={register({
          required: true,
          pattern: regExpName,
          minLength: 3,
          maxLength: 27,
        })}
      />
      <MultiSelectEntities
        onChange={changePosition}
        text={t('player:position')}
        isPlaceholder={t('player:select')}
        isMulti={false}
        isForm
        isError={!!errors.position}
        defaultValue={playerUpdate && {
          value: playerUpdate.position,
          label: playerUpdate.position,
        }}
        options={positions}
      />
      <MultiSelectEntities
        onChange={changeTeam}
        text={t('player:team')}
        isPlaceholder={t('player:select')}
        isMulti={false}
        isForm
        defaultValue={playerUpdate
                && teamsOptions.find((option) => option.value === playerUpdate.team)}
        isError={!!errors.team}
        options={teamsOptions}
      />
      <PlayerData>
        <FieldInputData
          text={t('player:heightForm')}
          disabled={false}
          startType="text"
          type="text"
          isError={!!errors.height}
          errorMessage={formAddPlayersErrors[errors.height?.type]}
          name="height"
          onChange={() => trigger('height')}
          defaultValue={playerUpdate && playerUpdate.height}
          register={register({
            required: true,
            pattern: /^([^\D_]{3})$/i,
            validate: {
              isNotVeryHeight: (value) => value < 250,
              isNotVeryLow: (value) => value > 150,
            },
          })}
        />
        <FieldInputData
          text={t('player:weightForm')}
          disabled={false}
          startType="text"
          type="text"
          isError={!!errors.weight}
          errorMessage={formAddPlayersErrors[errors.weight?.type]}
          name="weight"
          onChange={() => trigger('weight')}
          defaultValue={playerUpdate && playerUpdate.weight}
          register={register({
            required: true,
            pattern: /^([^\D_]{2,3})$/i,
            validate: {
              isNotHeavy: (value) => value <= 200,
              isNotEasy: (value) => value >= 50,
            },
          })}
        />
        <CalendarField
          trigger={trigger}
          isError={!!errors.birthday}
          errorMessage={formAddPlayersErrors[errors.birthday?.type]}
          register={register({
            required: true,
            pattern: regExpBirthDay,
            validate: {
              isCorrectDate: (value) => !isNaN(new Date(formatDate(value)).getFullYear()),
              isNotYoung: (value) => validateBirthDayYoung(formatDate(value)),
              isNotOld: (value) => validateBirthDayOld(formatDate(value)),
            },
          })}
        />
        <FieldInputData
          text={t('player:number')}
          disabled={false}
          startType="text"
          type="text"
          isError={!!errors.number}
          errorMessage={formAddPlayersErrors[errors.number?.type]}
          name="number"
          onChange={() => trigger('number')}
          defaultValue={playerUpdate && playerUpdate.number}
          register={register({ required: true, pattern: /^([^\D_]{1,2})$/i })}
        />
      </PlayerData>
      <BtnGroup>
        <ButtonAction
          onClick={cancelAddNewEntity}
          isNegativeStyle
          isAdding={false}
          size="middle"
          text={t('buttons:cancel')}
          disabled={false}
          type="button"
        />
        <ButtonAction
          isNegativeStyle={false}
          isAdding={false}
          size="middle"
          text={t('buttons:save')}
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

  @media (max-width: ${mobliSizeCard}) {
    & button {
      padding: 8px 40px;
    }
  }
`;

const PlayerData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 24px;

  @media ( max-width: 1500px) {
    grid-template-columns: repeat(2, 171px) ;
  }

  @media (max-width: ${mobileSizeGridForm}) {
    grid-template-columns: auto auto;
  }
`;
