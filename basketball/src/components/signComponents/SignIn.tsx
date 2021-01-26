import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import signIn from '../../static/images/sign_in.svg';
import * as actions from '../../store/async_actions/auth';
import { useCustomActions } from '../../helpers/functions/useCustomActions';
import { mobileVersionLayout } from '../../helpers/constants/mobileSize';
import { ISignInForm } from '../../helpers/interfaces/sign_form_interfaces/SignForms';
import { IStoreReducer } from '../../helpers/interfaces/StoreReducer';
import { BaseForm } from './BaseForm';

const actionCreators = {
  requestSignIn: actions.requestSignIn,
};

export const SignIn = () => {
  const { requestSignIn } = useCustomActions(actionCreators);

  const { notificationErrorMessage, userData } = useSelector(({
    authDataUser: {
      authErrorMessageSignIn,
      localUserData,
    },
  }: IStoreReducer) => ({
    notificationErrorMessage: authErrorMessageSignIn,
    userData: localUserData,
  }));

  const submitHandler = (data: ISignInForm) => {
    requestSignIn({
      login: data.login,
      password: data.password,
    });
  };

  return (
    <SignContainer>
      <FormContainer>
        <BaseForm
          typeForm="Sign In"
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
