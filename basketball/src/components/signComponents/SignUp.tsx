import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import signUp from '../../static/images/sign_up.svg';
import * as actions from '../../store/async_actions/auth';
import { useCustomActions } from '../../helpers/functions/useCustomActions';
import { mobileVersionLayout } from '../../helpers/constants/mobileSize';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import { BaseForm } from './BaseForm';
import { routePaths } from '../../helpers/constants/routePaths';

const actionCreators = {
  requestSignUp: actions.requestSignUp,
};

export const SignUp = () => {
  const [isSuccesRequest, setTypeRequest] = useState<boolean>(false);
  const { requestSignUp } = useCustomActions(actionCreators);
  const history = useHistory();
  const { t } = useTranslation();

  const notificationErrorMessage = useSelector(
    ({ authDataUser: { authErrorMessageSignUp } }: IStoreReducer) => (authErrorMessageSignUp),
  );

  useEffect(() => {
    if (isSuccesRequest) {
      history.push(routePaths.signIn);
    }
  }, [isSuccesRequest]);

  const submitHandler = async (data: any) => {
    const isSucces = await requestSignUp({
      userName: data.userName,
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
          typeForm={t('signUp')}
          notificationErrorMessage={notificationErrorMessage}
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
`;

const FormContainer = styled.div`
  flex-grow: 1;
  padding: 226px 120px;
  background-color: ${({ theme }) => theme.colors.white};
  
  @media(max-width: ${mobileVersionLayout}) {
    padding: 110px 24px;
  }
`;

const PosterContainer = styled.div`
  flex-grow: 8;
  padding: 305px 0;
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
  background: url(${signUp}) no-repeat;
  background-size: contain;
  display: inline-block;
}
`;
