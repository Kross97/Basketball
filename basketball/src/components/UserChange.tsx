import React, { useContext } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ImageUpload } from '../uiComponents/ImageUpload';
import { FieldInputData } from '../uiComponents/FieldInputData';
import { ButtonAction } from '../uiComponents/ButtonAction';
import { IStoreReducer } from '../helpers/interfaces/StoreReducer';
import { ContextMenuProvider } from './Baselayout';
import { changeAuthData } from '../store/async_actions/auth';
import { useCustomActions } from '../helpers/functions/useCustomActions';

const actionCreators = {
  changeAuthData,
};

export const UserChange = () => {
  const { toggleStateChangeMenu } = useContext(ContextMenuProvider);
  const { avatarUrl, srcImage } = useSelector((state: IStoreReducer) => (
    {
      srcImage: state.imageLoadData.srcImage,
      avatarUrl: state.authDataUser.authData.avatarUrl,
    }
  ));

  const { changeAuthData: changeDataUser } = useCustomActions(actionCreators);

  const {
    register,
    handleSubmit,
    errors,
  } = useForm();

  const changeUserData = (data: any) => {
    console.log('DATA_CHANGE', data, changeDataUser, srcImage);
  };

  const stopSurfacing = (event: React.MouseEvent<HTMLFormElement>) => {
    event.stopPropagation();
  };
  return (
    <ContainerUserChange onClick={toggleStateChangeMenu}>
      <FormChange onClick={stopSurfacing} onSubmit={handleSubmit(changeUserData)}>
        <ImageUpload defaultImage={avatarUrl} />
        <FieldInputData
          text="Name"
          disabled={false}
          startType="text"
          type="text"
          name="name"
          register={register}
          isError={!!errors.name}
          errorMessage="Required or incorrect enter"
        />
        <BtnGroup>
          <ButtonAction
            isNegativeStyle
            isAdding={false}
            size="middle"
            text="Cancel"
            disabled={false}
            type="button"
            onClick={toggleStateChangeMenu}
          />
          <ButtonAction
            isNegativeStyle={false}
            isAdding={false}
            size="middle"
            text="Change"
            disabled={Object.keys(errors).length > 0}
            type="submit"
          />
        </BtnGroup>
      </FormChange>
    </ContainerUserChange>
  );
};

const ContainerUserChange = styled.div`
  position: absolute;
  display: flex;
  cursor: pointer;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(1,1,1, 0.5);
`;

const FormChange = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto ;
  border-radius: 10px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  
  & > label:nth-child(2) {
    align-self: stretch;
    margin: 17px;
  }
`;

const BtnGroup = styled.div`
 display: flex;
 flex-direction: row; 
  
 & > button:nth-child(1) {
   margin-right: 20px;
 } 
`;
