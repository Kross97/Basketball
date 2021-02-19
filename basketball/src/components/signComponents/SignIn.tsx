import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import signInImage from '../../static/images/sign_in.svg';
import { useCustomActions } from '../../helpers/functions/useCustomActions';
import { mobileVersionLayout } from '../../helpers/constants/mobileSize';
import { ISignInForm } from '../../helpers/interfaces/signFormInterfaces/SignForms';
import { StoreReducer } from '../../helpers/interfaces/StoreReducer';
import { BaseForm } from './BaseForm';
import { routePaths } from '../../helpers/constants/routePaths';
import { loadAllPlayers } from '../../store/asyncActions/player';
import { loadAllCommands } from '../../store/asyncActions/team';
import { signInSaGaAction } from '../../store/sagaActions/auth';

const actionCreators = {
  signInSaGaAction,
  loadAllCommands,
  loadAllPlayers,
};

export const SignIn = () => {
  const isSuccessRequest = useSelector(({
    successOperationReducer: { signIn },
  }: StoreReducer) => signIn);

  const {
    signInSaGaAction: signIn,
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
  }: StoreReducer) => ({
    notificationErrorMessage: authErrorMessageSignIn,
    userData: localUserData,
    token: authData.token,
  }));

  useEffect(() => {
    if (isSuccessRequest) {
      localStorage.setItem('authorized_basketball', 'success');
      getAllCommands(token);
      getAllPlayers(token);
      history.push(routePaths.teams);
    }
  }, [isSuccessRequest]);

  const submitHandler = useCallback((data: ISignInForm) => {
    signIn({
      login: data.login,
      password: data.password,
    });
  }, []);

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
  @media (max-width: ${mobileVersionLayout}) {
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
