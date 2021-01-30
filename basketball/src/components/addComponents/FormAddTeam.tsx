import React, { FC } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { FieldInputData } from '../../uiComponents/FieldInputData';
import { ButtonAction } from '../../uiComponents/ButtonAction';
import { ITeam } from '../../helpers/interfaces/store_interfaces/Team';

interface IProps {
  addNewTeam: (data: any) => void;
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
    history.replace('/main/teams');
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
        errorMessage="Required or incorrect enter"
        name="name"
        defaultValue={teamUpdate ? teamUpdate.name : ''}
        register={register({ required: true, pattern: /^([^\W\d_]{5,})([\s\D])+([^\W\d_]+)$/i })}
      />
      <FieldInputData
        text={t('team:division')}
        disabled={false}
        startType="text"
        type="text"
        isError={!!errors.division}
        errorMessage="Required or incorrect enter"
        name="division"
        defaultValue={teamUpdate ? teamUpdate.division : ''}
        register={register}
      />
      <FieldInputData
        text={t('team:conference')}
        disabled={false}
        startType="text"
        type="text"
        isError={!!errors.conference}
        errorMessage="Required or incorrect enter"
        name="conference"
        defaultValue={teamUpdate ? teamUpdate.conference : ''}
        register={register}
      />
      <FieldInputData
        text="Foundation"
        disabled={false}
        startType="text"
        type="text"
        isError={!!errors.foundationYear}
        errorMessage="Required or incorrect enter"
        name="foundationYear"
        defaultValue={teamUpdate ? teamUpdate.foundationYear : ''}
        register={register({
          required: true,
          pattern: /^([^\D_]{4})$/i,
          validate: (value) => value <= (new Date()).getFullYear(),
        })}
      />

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
