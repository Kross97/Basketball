import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FieldInputData } from '../uiComponents/FieldInputData';
import { CheckboxСhoice } from '../uiComponents/CheckboxСhoice';
import { ButtonAction } from '../uiComponents/ButtonAction';
import { TextLink } from '../uiComponents/TextLink';
import { TextSmall, TextLabelSignUp } from '../uiComponents/Typography';
import signUp from '../static/images/sign_up.svg';
import * as actions from '../store/async_actions/auth';
import { useCustomActions } from '../helpers/functions/useCustomActions';
import { TypesInput } from '../helpers/types/types';
import { NotificationError } from '../uiComponents/NotificationError';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';
import { IStoreReducer } from '../helpers/interfaces/StoreReducer';

const actionCreators = {
  requestSignUp: actions.requestSignUp,
};

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    errors,
    getValues,
    watch,
  } = useForm();

  const watchAccept = watch('acceptAgreement', false);

  const [typePasswordInputs, setNewTypes] = useState<{ [key: string]: TypesInput }>({
    password: 'password',
    passwordRepeat: 'password',
  });

  const { requestSignUp } = useCustomActions(actionCreators);

  const notificationErrorMessage = useSelector(
    ({ authDataUser: { authErrorMessage } }: IStoreReducer) => (authErrorMessage),
  );

  const changeTypeInput = (name: string) => {
    const newType = typePasswordInputs[name] === 'password' ? 'text' : 'password';
    setNewTypes({ ...typePasswordInputs, [name]: newType });
  };

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
        <FormSignUp onSubmit={handleSubmit(submitHandler)}>
          <LabelForm>Sign Up</LabelForm>
          <FieldInputData
            name="userName"
            text="Name"
            disabled={false}
            type="text"
            startType="text"
            isError={!!errors.userName}
            errorMessage="Required or incorrect enter"
            register={register({ required: true, pattern: /^([^\W\d_]{5,})$/i })}
          />
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
            changeTypeInput={() => changeTypeInput('password')}
            isError={!!errors.password}
            errorMessage="Required or space exists"
            register={register({ required: true, pattern: /^([^\s]+)$/i })}
          />
          <FieldInputData
            name="passwordRepeat"
            text="Enter your password again"
            disabled={false}
            type={typePasswordInputs.passwordRepeat}
            startType="password"
            changeTypeInput={() => changeTypeInput('passwordRepeat')}
            isError={!!errors.passwordRepeat}
            errorMessage={errors.passwordRepeat?.type === 'validate' ? 'password and repeat password are not the same' : 'Required or space exists'}
            register={register({ required: true, pattern: /^([^\s]+)$/i, validate: (value) => getValues('password') === value })}
          />
          <CheckboxСhoice name="acceptAgreement" register={register} text="I accept the agreement" disabled={false} />
          <ButtonAction
            type="submit"
            isNegativeStyle={false}
            isAdding={false}
            size="large"
            text="Sign Up"
            disabled={Object.keys(errors).length > 0 || !watchAccept}
          />
          <TextContainer>
            <TextSignUp>
              Already a member?
            </TextSignUp>
            <TextLink text="Sign in" to="/signIn" disabled={false} />
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
  background: url(${signUp}) no-repeat;
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
