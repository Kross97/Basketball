import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { FieldInputData } from '../../uiComponents/FieldInputData';
import { ButtonAction } from '../../uiComponents/ButtonAction';
import { AddTeamContext } from './AddNewTeam';
import { AddPlayerContext } from './AddNewPlayer';

interface IProps {
  isTeamContext: boolean;
}

export const FormAddEntity: FC<IProps> = ({
  isTeamContext,
}) => {
  const { t } = useTranslation();
  const {
    isTeamForm,
    addNewEntity,
  } = useContext(isTeamContext ? AddTeamContext : AddPlayerContext);
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
    <FormAdd onSubmit={handleSubmit(addNewEntity)}>
      <FieldInputData
        text={isTeamForm ? t('team:name') : t('player:name')}
        disabled={false}
        startType="text"
        type="text"
        isError={!!errors[isTeamForm ? 'team' : 'player']}
        errorMessage="Required or incorrect enter"
        name={isTeamForm ? 'team' : 'player'}
        register={register({ required: true, pattern: /^([^\W\d_]{5,})$/i })}
      />
      <FieldInputData
        text={isTeamForm ? t('team:division') : t('player:position')}
        disabled={false}
        startType="text"
        type="text"
        isError={!!errors[isTeamForm ? 'division' : 'position']}
        errorMessage="Required or incorrect enter"
        name={isTeamForm ? 'division' : 'position'}
        register={register({ required: true, pattern: (isTeamForm ? /^([^\W\d_]{5,22})$/i : /^([^\W\d_]{5,13})$/i) })}
      />
      <FieldInputData
        text={isTeamForm ? t('team:conference') : t('player:team')}
        disabled={false}
        startType="text"
        type="text"
        isError={!!errors[isTeamForm ? 'conference' : 'team']}
        errorMessage="Required or incorrect enter"
        name={isTeamForm ? 'conference' : 'team'}
        register={register({ required: true, pattern: /^([^\W\d_]{5,})$/i })}
      />
      {isTeamForm && (
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
      )}
      {!isTeamForm && (
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
      )}
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
          disabled={false}
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
