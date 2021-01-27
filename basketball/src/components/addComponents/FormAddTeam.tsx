import React, { FC } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { FieldInputData } from '../../uiComponents/FieldInputData';
import { ButtonAction } from '../../uiComponents/ButtonAction';

interface IProps {
  addNewTeam: (data: any) => void;
}

export const FormAddTeam: FC<IProps> = ({
  addNewTeam,
}) => {
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

  return (
    <FormAdd onSubmit={handleSubmit(addNewTeam)}>
      <FieldInputData
        text={t('team:name')}
        disabled={false}
        startType="text"
        type="text"
        isError={!!errors.team}
        errorMessage="Required or incorrect enter"
        name="team"
        register={register({ required: true, pattern: /^([^\W\d_]{5,})$/i })}
      />
      <FieldInputData
        text={t('team:division')}
        disabled={false}
        startType="text"
        type="text"
        isError={!!errors.division}
        errorMessage="Required or incorrect enter"
        name="division"
        register={register({ required: true, pattern: /^([^\W\d_]{5,22})$/i })}
      />
      <FieldInputData
        text={t('team:conference')}
        disabled={false}
        startType="text"
        type="text"
        isError={!!errors.conference}
        errorMessage="Required or incorrect enter"
        name="conference"
        register={register({ required: true, pattern: /^([^\W\d_]{5,})$/i })}
      />
      <FieldInputData
        text="Foundation"
        disabled={false}
        startType="text"
        type="text"
        isError={!!errors.foundation}
        errorMessage="Required or incorrect enter"
        name="foundation"
        register={register({ required: true, pattern: /^([^\D_]{4})$/i })}
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
