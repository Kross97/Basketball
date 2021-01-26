import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import signIn from '../../static/images/sign_in.svg';
import * as actions from '../../store/async_actions/auth';
import { useCustomActions } from '../../helpers/functions/useCustomActions';
import { mobileVersionLayout } from '../../helpers/constants/mobileSize';
import { ISignInForm } from '../../helpers/interfaces/sign_form_interfaces/SignForms';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import { BaseForm } from './BaseForm';
import { routePaths } from '../../helpers/constants/routePaths';

const actionCreators = {
  requestSignIn: actions.requestSignIn,
};

export const SignIn = () => {
  const [isSuccesRequest, setTypeRequest] = useState<boolean>(false);
  const { requestSignIn } = useCustomActions(actionCreators);
  const history = useHistory();
  const { t } = useTranslation();
  const { notificationErrorMessage, userData } = useSelector(({
    authDataUser: {
      authErrorMessageSignIn,
      localUserData,
    },
  }: IStoreReducer) => ({
    notificationErrorMessage: authErrorMessageSignIn,
    userData: localUserData,
  }));

  useEffect(() => {
    if (isSuccesRequest) {
      history.push(routePaths.main);
    }
  }, [isSuccesRequest]);

  const submitHandler = async (data: ISignInForm) => {
    const isSucces = await requestSignIn({
      login: data.login,
      password: data.password,
    });
    if (isSucces.payload) {
      setTypeRequest(isSucces.payload);
    }
  };

  return (
    <SignContainer>
      <FormContainer>
        <BaseForm
          typeForm={t('signIn')}
          notificationErrorMessage={notificationErrorMessage}
          submitHandler={submitHandler}
          userData={userData}
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
`;

const FormContainer = styled.div`
  flex-grow: 1;
  padding: 340px 120px 338px;
  background-color: ${({ theme }) => theme.colors.white};
  
  @media(max-width: ${mobileVersionLayout}) {
    padding: 174px 24px 172px;
  }
`;

const PosterContainer = styled.div`
  flex-grow: 8;
  padding: 306px 0;
  justify-content: center;
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  
  @media(max-width: ${mobileVersionLayout}) {
    display: none;
  }
`;

const PosterSignUp = styled.div`
  width: 660px;
  height: 414px;
  background: url(${signIn}) no-repeat;
  background-size: contain;
  display: inline-block;
}
`;
