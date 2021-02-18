import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { FieldInputData } from '../../uiComponents/FieldInputData';
import { ButtonAction } from '../../uiComponents/ButtonAction';
import { ITeam } from '../../helpers/interfaces/storeInterfaces/Team';
import { routePaths } from '../../helpers/constants/routePaths';
import { IFormAddTeam } from '../../helpers/interfaces/componentsInterfaces/StateAndEvents';
import {
  regExpYear, regExpCommandName, regExpDivision, regExpConference,
} from '../../helpers/constants/regularExp';
import { formAddTeamsErrors } from '../../helpers/constants/formErrors';
import { validateYearFoundationOld, validateYearFoundationYoung } from '../../helpers/functions/validateYearFoundation';

interface IProps {
  addNewTeam: (data: IFormAddTeam) => void;
  teamUpdate: ITeam | undefined;
}

export const FormAddTeam: FC<IProps> = React.memo(({
  addNewTeam,
  teamUpdate,
}) => {
  const { t } = useTranslation();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    errors,
    trigger,
  } = useForm();

  const cancelAddNewEntity = useCallback(() => {
    history.replace(routePaths.teams);
  }, []);

  return (
    <FormAdd onSubmit={handleSubmit(addNewTeam)}>
      {teamUpdate && <input type="hidden" name="id" ref={register} value={teamUpdate.id} />}
      <FieldInputData
        text={t('team:name')}
        disabled={false}
        startType="text"
        type="text"
        isError={!!errors.teamName}
        errorMessage={formAddTeamsErrors[errors.teamName?.type]}
        onChange={() => trigger('teamName')}
        name="teamName"
        defaultValue={teamUpdate ? teamUpdate.name : ''}
        register={register({
          required: true,
          minLength: 3,
          maxLength: 25,
          pattern: regExpCommandName,
        })}
      />
      <FieldInputData
        text={t('team:division')}
        disabled={false}
        startType="text"
        type="text"
        isError={!!errors.division}
        errorMessage={formAddTeamsErrors[errors.division?.type]}
        name="division"
        onChange={() => trigger('division')}
        defaultValue={teamUpdate ? teamUpdate.division : ''}
        register={register({
          pattern: regExpDivision,
          minLength: 5,
          maxLength: 20,
        })}
      />
      <FieldInputData
        text={t('team:conference')}
        disabled={false}
        startType="text"
        type="text"
        isError={!!errors.conference}
        errorMessage={formAddTeamsErrors[errors.conference?.type]}
        name="conference"
        onChange={() => trigger('conference')}
        defaultValue={teamUpdate ? teamUpdate.conference : ''}
        register={register({
          pattern: regExpConference,
          minLength: 3,
          maxLength: 20,
        })}
      />
      <FieldInputData
        text={t('team:foundation')}
        disabled={false}
        startType="text"
        type="text"
        isError={!!errors.foundationYear}
        errorMessage={formAddTeamsErrors[errors.foundationYear?.type]}
        name="foundationYear"
        onChange={() => trigger('foundationYear')}
        defaultValue={teamUpdate ? teamUpdate.foundationYear : ''}
        register={register({
          required: true,
          pattern: regExpYear,
          validate: {
            isNotYoung: (value) => validateYearFoundationYoung(value),
            isNotOld: (value) => validateYearFoundationOld(value),
          },
        })}
      />

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
});

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
  
    & button > span {
      font-size: 15px;
    }
  
  @media(max-width: 445px) {
    display: flex;
    justify-content: space-between;
    & button {
      flex-basis: 46%;
      padding: 8px 30px;
    }
  }
`;
