import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import signUpImage from '../../static/images/sign_up.svg';
import { requestSignUp } from '../../store/async_actions/auth';
import { authDataUser } from '../../store/reducers/auth';
import { useCustomActions } from '../../helpers/functions/useCustomActions';
import { mobileVersionLayout } from '../../helpers/constants/mobileSize';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import { BaseForm } from './BaseForm';
import { routePaths } from '../../helpers/constants/routePaths';

const actionCreators = {
  requestSignUp,
  clearSignUpNotification: authDataUser.actions.clearAuthNotificationSignUp,
};

export const SignUp = () => {
  const [isSuccesRequest, setTypeRequest] = useState<boolean>(false);
  const {
    requestSignUp: signUp,
    clearSignUpNotification,
  } = useCustomActions(actionCreators);
  const history = useHistory();
  const { t } = useTranslation();

  const notificationMessage = useSelector(
    ({
      authDataUser: {
        authNotificationMessageSignUp,
      },
    }: IStoreReducer) => (authNotificationMessageSignUp),
  );

  useEffect(() => {
    if (isSuccesRequest) {
      localStorage.setItem('authorized_basketball', 'success');
      setTimeout(() => {
        history.push(routePaths.teams);
        clearSignUpNotification();
      }, 1800);
    }
  }, [isSuccesRequest]);

  const submitHandler = async (data: any) => {
    const isSuccess = await signUp({
      userName: data.userName,
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
          typeForm={t('signUp')}
          notificationMessage={notificationMessage}
          submitHandler={submitHandler}
        />
      </FormContainer>
      <PosterContainer>
        <PosterSignUp />
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

const PosterSignUp = styled.div`
  flex-basis: 660px;
  height: 414px;
  margin: auto;
  background: url(${signUpImage}) no-repeat;
  background-size: contain;
  background-position: center;
  display: inline-block;
}
`;
