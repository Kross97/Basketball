import React, { FC } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { FieldInputData } from '../../uiComponents/FieldInputData';
import { ButtonAction } from '../../uiComponents/ButtonAction';
import { ITeam } from '../../helpers/interfaces/store_interfaces/Team';
import { routePaths } from '../../helpers/constants/routePaths';
import { IFormAddTeam } from '../../helpers/interfaces/components_interfaces/StateAndEvents';
import { regExpYear, regExpCommandName, regExpDivision } from '../../helpers/constants/regularExp';

interface IProps {
  addNewTeam: (data: IFormAddTeam) => void;
  teamUpdate: ITeam | undefined;
}

export const FormAddTeam: FC<IProps> = ({
  addNewTeam,
  teamUpdate,
}) => {
  const { t } = useTranslation();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    errors,
  } = useForm();

  const cancelAddNewEntity = () => {
    history.replace(routePaths.teams);
  };

  return (
    <FormAdd onSubmit={handleSubmit(addNewTeam)}>
      {teamUpdate && <input type="hidden" name="id" ref={register} value={teamUpdate.id} />}
      <FieldInputData
        text={t('team:name')}
        disabled={false}
        startType="text"
        type="text"
        isError={!!errors.name}
        errorMessage={t('errorsForm:required')}
        name="name"
        defaultValue={teamUpdate ? teamUpdate.name : ''}
        register={register({ required: true, pattern: regExpCommandName })}
      />
      <FieldInputData
        text={t('team:division')}
        disabled={false}
        startType="text"
        type="text"
        isError={!!errors.division}
        errorMessage={t('errorsForm:required')}
        name="division"
        defaultValue={teamUpdate ? teamUpdate.division : ''}
        register={register({ pattern: regExpDivision })}
      />
      <FieldInputData
        text={t('team:conference')}
        disabled={false}
        startType="text"
        type="text"
        isError={!!errors.conference}
        errorMessage={t('errorsForm:required')}
        name="conference"
        defaultValue={teamUpdate ? teamUpdate.conference : ''}
        register={register({ pattern: /^[^\W\d]{5,}$/ })}
      />
      <FieldInputData
        text={t('team:foundation')}
        disabled={false}
        startType="text"
        type="text"
        isError={!!errors.foundationYear}
        errorMessage={t('errorsForm:required')}
        name="foundationYear"
        defaultValue={teamUpdate ? teamUpdate.foundationYear : ''}
        register={register({
          required: true,
          pattern: regExpYear,
          validate: (value) => value <= (new Date()).getFullYear(),
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
