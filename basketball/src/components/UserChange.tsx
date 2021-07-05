import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, shallowEqual } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { ImageUpload } from '../uiComponents/ImageUpload';
import { FieldInputData } from '../uiComponents/FieldInputData';
import { ButtonAction } from '../uiComponents/ButtonAction';
import { StoreReducer } from '../helpers/interfaces/StoreReducer';
import { changeAuthData } from '../store/asyncActions/auth';
import { useCustomActions } from '../helpers/functions/useCustomActions';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';
import { NotificationMessage } from '../uiComponents/NotificationMessage';
import { IDataChangeUser } from '../helpers/interfaces/componentsInterfaces/StateAndEvents';
import { regExpName } from '../helpers/constants/regularExp';
import { routePaths } from '../helpers/constants/routePaths';
import { userChangeErrors } from '../helpers/constants/formErrors';

const actionCreators = {
  changeAuthData,
};

export default () => {
  const {
    avatarUrl,
    token,
    srcImage,
    errorMessage,
    userName,
  } = useSelector((state: StoreReducer) => (
    {
      srcImage: state.imageLoadData.srcImage,
      token: state.authDataUser.authData.token,
      avatarUrl: state.authDataUser.authData.avatarUrl,
      userName: state.authDataUser.authData.name,
      errorMessage: state.authDataUser.errorChangeMessage,
    }
  ), shallowEqual);

  const history = useHistory();

  const {
    changeAuthData: changeDataUser,
  } = useCustomActions(actionCreators);

  const {
    register,
    handleSubmit,
    errors,
    trigger,
  } = useForm();

  const changeUserData = async (data: IDataChangeUser) => {
    const { payload: isSuccessChanged } = await changeDataUser({
      change: {
        userName: data.userName,
        avatarUrl: srcImage,
      },
      token,
    });
    if (isSuccessChanged) {
      history.push(routePaths.teams);
    }
  };

  const returnForTeamsPage = useCallback(() => {
    history.push(routePaths.teams);
  }, []);

  const stopSurfacing = (event: React.MouseEvent<HTMLFormElement>) => {
    event.stopPropagation();
  };
  return (
    <ContainerUserChange>
      <ImageUpload defaultImage={avatarUrl} />
      <FormChange onClick={stopSurfacing} onSubmit={handleSubmit(changeUserData)}>
        <FieldInputData
          text="Name"
          disabled={false}
          startType="text"
          type="text"
          name="userName"
          defaultValue={userName}
          onChange={() => trigger('userName')}
          register={register({
            required: true,
            pattern: regExpName,
            minLength: 3,
            maxLength: 27,
          })}
          isError={!!errors.userName}
          errorMessage={userChangeErrors[errors.userName?.type]}
        />
        <BtnGroup>
          <ButtonAction
            isNegativeStyle
            isAdding={false}
            size="middle"
            text="Cancel"
            disabled={false}
            type="button"
            onClick={returnForTeamsPage}
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
        {errorMessage !== ''
                && (
                <NotificationContainer>
                  <NotificationMessage text={errorMessage} />
                </NotificationContainer>
                )}
      </FormChange>
    </ContainerUserChange>
  );
};

const ContainerUserChange = styled.div`
  display: flex;
  margin: auto;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;

  @media (max-width: ${mobileVersionLayout}) {
    flex-direction: column;

    & > label {
      margin-bottom: 25px;
      align-self: center;
    }
  }

  @media (max-width: 475px) {
    flex-grow: 1;
    margin: auto 0;
  }
`;

const FormChange = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.white};

  & > label {
    margin-bottom: 45px;
  }
`;

const BtnGroup = styled.div`
  display: flex;
  flex-direction: row;

  & > button:nth-child(1) {
    margin-right: 20px;
  }

  @media (max-width: 475px) {
    flex-direction: column;

    & > button:nth-child(1) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }

`;

const NotificationContainer = styled.div`
  position: fixed;
  top: 80px;
  right: 36px;
  width: 470px;
  display: flex;
  justify-content: center;

  @media (max-width: ${mobileVersionLayout}) {
    width: auto;
    top: 60px;
    right: 20%;
    left: 20%;
  }
`;
