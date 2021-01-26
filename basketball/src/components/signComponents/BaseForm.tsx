import React, { FC, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FieldInputData } from '../../uiComponents/FieldInputData';
import { CheckboxСhoice } from '../../uiComponents/CheckboxСhoice';
import { ButtonAction } from '../../uiComponents/ButtonAction';
import { TextLink } from '../../uiComponents/TextLink';
import { NotificationError } from '../../uiComponents/NotificationError';
import { TextLabelSignUp, TextSmall } from '../../uiComponents/Typography';
import { mobileVersionLayout } from '../../helpers/constants/mobileSize';
import { TypesInput } from '../../helpers/types/types';
import { routePaths } from '../../helpers/constants/routePaths';
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
  const { t } = useTranslation();

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
    <FormSign onSubmit={handleSubmit(submitHandler)}>
      <LabelForm>{typeForm}</LabelForm>
      { typeForm === 'Sign Up' && (
      <FieldInputData
        name="userName"
        text={t('name')}
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
        text={t('login')}
        disabled={false}
        type="text"
        startType="text"
        isError={!!errors.login}
        errorMessage="Required or incorrect enter"
        register={register({ required: true, pattern: /^([^\W\s]+)$/i })}
      />
      <FieldInputData
        name="password"
        text={t('password')}
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
        text={t('passwordRepeat')}
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
        text={t('signUpCheck')}
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
        <TextSign>
          {typeForm === 'Sign Up' ? t('signUpMember') : t('signInMember') }
        </TextSign>
        <TextLink
          text={typeForm === 'Sign Up' ? t('signIn') : t('signUp')}
          to={typeForm === 'Sign Up' ? `${routePaths.signIn}` : `${routePaths.signUp}`}
          disabled={false}
        />
      </TextContainer>
      {notificationErrorMessage !== ''
            && <Notification><NotificationError text={notificationErrorMessage} /></Notification>}
    </FormSign>
  );
};

const FormSign = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  & label, & button {
    margin-bottom: 24px;
  }
`;

const TextContainer = styled.div`
  align-self: center;
`;

const TextSign = styled(TextSmall)`
  color: ${({ theme }) => theme.colors.middleGrey};
  margin-right: 5px;
`;

const LabelForm = styled(TextLabelSignUp)`
  color: ${({ theme }) => theme.colors.blue};
  margin-bottom: 30px;
  
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
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: -80px;
  right: 10%;
  left: 10%;
  animation: ${animationNotification} 1s linear;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-iteration-count: 2;
`;
