import React, { FC, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useForm } from 'react-hook-form';
import { FieldInputData } from '../../uiComponents/FieldInputData';
import { CheckboxСhoice } from '../../uiComponents/CheckboxСhoice';
import { ButtonAction } from '../../uiComponents/ButtonAction';
import { TextLink } from '../../uiComponents/TextLink';
import { NotificationError } from '../../uiComponents/NotificationError';
import { TextLabelSignUp, TextSmall } from '../../uiComponents/Typography';
import { mobileVersionLayout } from '../../helpers/constants/mobileSize';
import { TypesInput } from '../../helpers/types/types';
import { ISignInForm } from '../../helpers/interfaces/sign_form_interfaces/SignForms';

interface IProps {
  typeForm: string;
  notificationErrorMessage: string;
  submitHandler: (data: any) => void;
  userData?: ISignInForm,
}

export const BaseForm: FC<IProps> = ({
  typeForm,
  notificationErrorMessage,
  submitHandler,
  userData = undefined,
}) => {
  const {
    register,
    handleSubmit,
    errors,
    getValues,
    setValue,
    watch,
  } = useForm();

  useEffect(() => {
    if (userData?.login && userData?.password) {
      setValue('login', userData.login);
      setValue('password', userData.password);
    }
  }, [userData?.login, userData?.password]);

  const watchAccept = watch('acceptAgreement', false);

  const [typePasswordInputs, setNewTypes] = useState<{ [key: string]: TypesInput }>({
    password: 'password',
    passwordRepeat: 'password',
  });

  const changeTypeInput = (name: string) => {
    const newType = typePasswordInputs[name] === 'password' ? 'text' : 'password';
    setNewTypes({ ...typePasswordInputs, [name]: newType });
  };
  return (
    <FormSignUp onSubmit={handleSubmit(submitHandler)}>
      <LabelForm>{typeForm}</LabelForm>
      { typeForm === 'Sign Up' && (
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
      ) }
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
      { typeForm === 'Sign Up' && (
      <FieldInputData
        name="passwordRepeat"
        text="Enter your password again"
        disabled={false}
        type={typePasswordInputs.passwordRepeat}
        startType="password"
        changeTypeInput={() => changeTypeInput('passwordRepeat')}
        isError={!!errors.passwordRepeat}
        errorMessage={errors.passwordRepeat?.type === 'validate'
          ? 'password and repeat password are not the same'
          : 'Required or space exists'}
        register={register({
          required: true,
          pattern: /^([^\s]+)$/i,
          validate: (value) => getValues('password') === value,
        })}
      />
      ) }
      { typeForm === 'Sign Up' && (
      <CheckboxСhoice
        name="acceptAgreement"
        register={register}
        text="I accept the agreement"
        disabled={false}
      />
      )}
      <ButtonAction
        type="submit"
        isNegativeStyle={false}
        isAdding={false}
        size="large"
        text={typeForm}
        disabled={Object.keys(errors).length > 0 || (typeForm === 'Sign Up' && !watchAccept)}
      />
      <TextContainer>
        <TextSignUp>
          {typeForm === 'Sign Up' ? 'Already a member?' : 'Not a member yet?' }
        </TextSignUp>
        <TextLink
          text={typeForm === 'Sign Up' ? 'Sign up' : 'Sign in'}
          to={typeForm === 'Sign Up' ? '/signIn' : '/'}
          disabled={false}
        />
      </TextContainer>
      {notificationErrorMessage !== ''
            && <Notification><NotificationError text={notificationErrorMessage} /></Notification>}
    </FormSignUp>
  );
};

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
