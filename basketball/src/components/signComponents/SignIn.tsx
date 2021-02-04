import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import signInImage from '../../static/images/sign_in.svg';
import { requestSignIn } from '../../store/asyncActions/auth';
import { useCustomActions } from '../../helpers/functions/useCustomActions';
import { mobileVersionLayout } from '../../helpers/constants/mobileSize';
import { ISignInForm } from '../../helpers/interfaces/signFormInterfaces/SignForms';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import { BaseForm } from './BaseForm';
import { routePaths } from '../../helpers/constants/routePaths';
import { loadAllPlayers } from '../../store/asyncActions/player';
import { loadAllCommands } from '../../store/asyncActions/team';

const actionCreators = {
  requestSignIn,
  loadAllCommands,
  loadAllPlayers,
};

export const SignIn = () => {
  const [isSuccesRequest, setTypeRequest] = useState<boolean>(false);
  const {
    requestSignIn: signIn,
    loadAllCommands: getAllCommands,
    loadAllPlayers: getAllPlayers,
  } = useCustomActions(actionCreators);
  const history = useHistory();
  const { t } = useTranslation();
  const { notificationErrorMessage, userData, token } = useSelector(({
    authDataUser: {
      authErrorMessageSignIn,
      localUserData,
      authData,
    },
  }: IStoreReducer) => ({
    notificationErrorMessage: authErrorMessageSignIn,
    userData: localUserData,
    token: authData.token,
  }));

  useEffect(() => {
    if (isSuccesRequest) {
      localStorage.setItem('authorized_basketball', 'success');
      getAllCommands(token);
      getAllPlayers(token);
      history.push(routePaths.teams);
    }
  }, [isSuccesRequest]);

  const submitHandler = async (data: ISignInForm) => {
    const isSuccess = await signIn({
      login: data.login,
      password: data.password,
    });
    if (isSuccess.payload) {
      setTypeRequest(isSuccess.payload);
    }
  };

  return (
    <SignContainer>
      <FormContainer>
        <BaseForm
          typeForm={t('signIn')}
          notificationMessage={{ message: notificationErrorMessage, isError: true }}
          submitHandler={submitHandler}
          userData={userData}
        />
      </FormContainer>
      <PosterContainer>
        <PosterSignIn />
      </PosterContainer>
    </SignContainer>
  );
};

const SignContainer = styled.div`
 display: flex;
 height: 100vh; 
`;

const FormContainer = styled.div`
  flex-grow: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  
`;

const PosterContainer = styled.div`
  flex-grow: 8;
  justify-content: center;
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  padding: 0 40px;
  @media(max-width: ${mobileVersionLayout}) {
    display: none;
  }
`;

const PosterSignIn = styled.div`
  flex-basis: 660px;
  height: 414px;
  margin: auto;
  background: url(${signInImage}) no-repeat;
  background-size: contain;
  background-position: center;
  display: inline-block;
}
`;
