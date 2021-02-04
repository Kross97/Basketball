import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FieldInputData } from '../../uiComponents/FieldInputData';
import { CheckboxСhoice } from '../../uiComponents/CheckboxСhoice';
import { ButtonAction } from '../../uiComponents/ButtonAction';
import { TextLink } from '../../uiComponents/TextLink';
import { NotificationMessage } from '../../uiComponents/NotificationMessage';
import { TextLabel, TextSmall } from '../../uiComponents/Typography';
import { mobileVersionLayout } from '../../helpers/constants/mobileSize';
import { TypesInput } from '../../helpers/types/types';
import { routePaths } from '../../helpers/constants/routePaths';
import { ISignInForm, IMessageNotification } from '../../helpers/interfaces/signFormInterfaces/SignForms';
import { regExpName, regExpLogin, regExpPassword } from '../../helpers/constants/regularExp';
import { formSignErrors } from '../../helpers/constants/formErrors';

interface IProps {
  typeForm: string;
  notificationMessage: IMessageNotification;
  submitHandler: (data: any) => void;
  userData?: ISignInForm,
}

export const BaseForm: FC<IProps> = ({
  typeForm,
  notificationMessage,
  submitHandler,
  userData = undefined,
}) => {
  const {
    register,
    handleSubmit,
    errors,
    getValues,
    setValue,
    trigger,
  } = useForm();
  const { t } = useTranslation();

  useEffect(() => {
    if (userData?.login && userData?.password) {
      setValue('login', userData.login);
      setValue('password', userData.password);
    }
  }, [userData?.login, userData?.password]);

  const [typePasswordInputs, setNewTypes] = useState<{ [key: string]: TypesInput }>({
    password: 'password',
    passwordRepeat: 'password',
  });

  const changeTypeInput = (name: string) => {
    const newType = typePasswordInputs[name] === 'password' ? 'text' : 'password';
    setNewTypes({ ...typePasswordInputs, [name]: newType });
  };

  console.log('NOTIFICATION', notificationMessage);
  return (
    <FormSign onSubmit={handleSubmit(submitHandler)}>
      <LabelForm>{typeForm}</LabelForm>
      {typeForm === 'Sign Up' && (
        <FieldInputData
          name="userName"
          text={t('name')}
          disabled={false}
          type="text"
          startType="text"
          onChange={() => trigger('userName')}
          isError={!!errors.userName}
          errorMessage={formSignErrors[errors.userName?.type]}
          register={register({ required: true, pattern: regExpName })}
        />
      )}
      <FieldInputData
        name="login"
        text={t('login')}
        disabled={false}
        type="text"
        startType="text"
        onChange={() => trigger('login')}
        isError={!!errors.login}
        errorMessage={formSignErrors[errors.login?.type]}
        register={register({ required: true, pattern: regExpLogin })}
      />
      <FieldInputData
        name="password"
        text={t('password')}
        disabled={false}
        type={typePasswordInputs.password}
        startType="password"
        onChange={() => trigger('password')}
        changeTypeInput={() => changeTypeInput('password')}
        isError={!!errors.password}
        errorMessage={formSignErrors[errors.password?.type]}
        register={register({ required: true, pattern: regExpPassword })}
      />
      {typeForm === 'Sign Up' && (
        <FieldInputData
          name="passwordRepeat"
          text={t('passwordRepeat')}
          disabled={false}
          type={typePasswordInputs.passwordRepeat}
          startType="password"
          onChange={() => trigger('passwordRepeat')}
          changeTypeInput={() => changeTypeInput('passwordRepeat')}
          isError={!!errors.passwordRepeat}
          errorMessage={formSignErrors[errors.passwordRepeat?.type]}
          register={register({
            required: true,
            pattern: regExpPassword,
            validate: (value) => getValues('password') === value,
          })}
        />
      )}
      {typeForm === 'Sign Up' && (
        <CheckboxСhoice
          name="acceptAgreement"
          register={register({ required: true })}
          text={t('signUpCheck')}
          disabled={false}
          onChange={() => trigger('acceptAgreement')}
          isError={!!errors.acceptAgreement}
          errorMessage="Required"
        />
      )}
      <ButtonAction
        type="submit"
        isNegativeStyle={false}
        isAdding={false}
        size="large"
        text={typeForm}
        disabled={Object.keys(errors).length > 0}
      />
      <TextContainer>
        <TextSign>
          {typeForm === 'Sign Up' ? t('signUpMember') : t('signInMember')}
        </TextSign>
        <TextLink
          text={typeForm === 'Sign Up' ? t('signIn') : t('signUp')}
          to={typeForm === 'Sign Up' ? `${routePaths.signIn}` : `${routePaths.signUp}`}
          disabled={false}
        />
      </TextContainer>
      {notificationMessage.message !== ''
            && (
            <Notification>
              <NotificationMessage
                isError={notificationMessage.isError}
                text={notificationMessage.message}
              />
            </Notification>
            )}
    </FormSign>
  );
};

const FormSign = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;

  & button > span {
    display: block;
    width: 65px;
  }

  & > label, & > button, & > div:nth-of-type(1) {
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

const LabelForm = styled(TextLabel)`
  color: ${({ theme }) => theme.colors.blue};
  margin-bottom: 30px;

  @media (max-width: ${mobileVersionLayout}) {
    align-self: center;
  }
`;

const Notification = styled.div`
  position: fixed;
  top: 30px;
  right: 80px;
  width: 400px;
  display: flex;
  justify-content: center;
`;
