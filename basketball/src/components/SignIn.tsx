import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FieldInputData } from '../uiComponents/FieldInputData';
import { ButtonAction } from '../uiComponents/ButtonAction';
import { TextLink } from '../uiComponents/TextLink';
import { TextSmall, TextLabelSignUp } from '../uiComponents/Typography';
import signIn from '../static/images/sign_in.svg';
import * as actions from '../store/async_actions/auth';
import { useCustomActions } from '../helpers/functions/useCustomActions';
import { TypesInput } from '../helpers/types/types';
import { NotificationError } from '../uiComponents/NotificationError';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';
import { ISignInForm } from '../helpers/interfaces/sign_form_interfaces/SignForms';
import { IStoreReducer } from '../helpers/interfaces/StoreReducer';

const actionCreators = {
  requestSignIn: actions.requestSignIn,
};

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    setValue,
    errors,
  } = useForm();

  const [typePasswordInputs, setNewTypes] = useState<{ [key: string]: TypesInput }>({
    password: 'password',
  });

  const { requestSignIn } = useCustomActions(actionCreators);

  const { notificationErrorMessage, token, userData } = useSelector(({
    authDataUser: {
      authErrorMessageSignIn,
      authData,
      localUserData,
    },
  }: IStoreReducer) => ({
    notificationErrorMessage: authErrorMessageSignIn,
    token: authData.token,
    userData: localUserData,
  }));

  useEffect(() => {
    if (userData.login && userData.password) {
      setValue('login', userData.login);
      setValue('password', userData.password);
    }
  }, [token]);

  const changeTypeInput = () => {
    const newType = typePasswordInputs.password === 'password' ? 'text' : 'password';
    setNewTypes({ ...typePasswordInputs, password: newType });
  };

  const submitHandler = (data: ISignInForm) => {
    requestSignIn({
      login: data.login,
      password: data.password,
    });
  };

  return (
    <SignContainer>
      <FormContainer>
        <FormSignUp onSubmit={handleSubmit(submitHandler)}>
          <LabelForm>Sign In</LabelForm>
          <FieldInputData
            name="login"
            text="Login"
            disabled={false}
            type="text"
            startType="text"
            isError={!!errors.login}
            errorMessage="Required or incorrect enter"
            register={register({ required: true, pattern: /^([^\W\s]+)$/i })}
          />
          <FieldInputData
            name="password"
            text="Password"
            disabled={false}
            type={typePasswordInputs.password}
            startType="password"
            changeTypeInput={() => changeTypeInput()}
            isError={!!errors.password}
            errorMessage="Required or space exists"
            register={register({ required: true, pattern: /^([^\s]+)$/i })}
          />
          <ButtonAction
            type="submit"
            isNegativeStyle={false}
            isAdding={false}
            size="large"
            text="Sign In"
            disabled={Object.keys(errors).length > 0}
          />
          <TextContainer>
            <TextSignUp>
              Not a member yet?
            </TextSignUp>
            <TextLink text="Sign up" to="/" disabled={false} />
          </TextContainer>
          {notificationErrorMessage !== ''
    && <Notification><NotificationError text={notificationErrorMessage} /></Notification>}
        </FormSignUp>
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

const FormSignUp = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TextContainer = styled.div`
  align-self: center;
`;

const TextSignUp = styled(TextSmall)`
  color: ${({ theme }) => theme.colors.middleGrey};
  margin-right: 5px;
`;

const PosterSignUp = styled.div`
  width: 660px;
  height: 414px;
  background: url(${signIn}) no-repeat;
  background-size: contain;
  display: inline-block;
}
`;

const LabelForm = styled(TextLabelSignUp)`
  color: ${({ theme }) => theme.colors.blue};
  margin-bottom: 6px;
  
  @media(max-width: ${mobileVersionLayout}) {
    align-self: center;
  }
`;

const animationNotification = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  
  10% {
    opacity: 0.1;
    transform: scale(0.9);
  }
  
  25% {
    opacity: 0.3;
    transform: scale(1);
  }
  
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
  
  75% {
    opacity: 0.8;
    transform: scale(1.2);
  }
  
  100% {
    opacity: 1;
    transform: scale(1.3);
  }
`;

const Notification = styled.div`
  display: flex;
  justify-content: center;
  animation: ${animationNotification} 1s linear;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-iteration-count: 2;
`;
