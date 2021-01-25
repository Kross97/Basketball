import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import signUp from '../../static/images/sign_up.svg';
import * as actions from '../../store/async_actions/auth';
import { useCustomActions } from '../../helpers/functions/useCustomActions';
import { mobileVersionLayout } from '../../helpers/constants/mobileSize';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import { BaseForm } from './BaseForm';

const actionCreators = {
  requestSignUp: actions.requestSignUp,
};

export const SignUp = () => {
  const { requestSignUp } = useCustomActions(actionCreators);

  const notificationErrorMessage = useSelector(
    ({ authDataUser: { authErrorMessage } }: IStoreReducer) => (authErrorMessage),
  );

  const submitHandler = (data: any) => {
    requestSignUp({
      userName: data.userName,
      login: data.login,
      password: data.password,
    });
  };

  return (
    <SignContainer>
      <FormContainer>
        <BaseForm
          typeForm="Sign Up"
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
