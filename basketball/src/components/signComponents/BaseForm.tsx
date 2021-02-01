import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FieldInputData } from '../../uiComponents/FieldInputData';
import { CheckboxСhoice } from '../../uiComponents/CheckboxСhoice';
import { ButtonAction } from '../../uiComponents/ButtonAction';
import { TextLink } from '../../uiComponents/TextLink';
import { NotificationError } from '../../uiComponents/NotificationError';
import { TextLabel, TextSmall } from '../../uiComponents/Typography';
import { mobileVersionLayout } from '../../helpers/constants/mobileSize';
import { TypesInput } from '../../helpers/types/types';
import { routePaths } from '../../helpers/constants/routePaths';
import { ISignInForm } from '../../helpers/interfaces/sign_form_interfaces/SignForms';
import { regExpName, regExpLogin, regExpPassword } from '../../helpers/constants/regularExp';

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
        register={register({ required: true, pattern: regExpName })}
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
        register={register({ required: true, pattern: regExpLogin })}
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
        register={register({ required: true, pattern: regExpPassword })}
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
          pattern: regExpPassword,
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
  
  & button > span {
    display: block;
    width: 65px;
  }
  
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

const LabelForm = styled(TextLabel)`
  color: ${({ theme }) => theme.colors.blue};
  margin-bottom: 30px;
  
  @media(max-width: ${mobileVersionLayout}) {
    align-self: center;
  }
`;

const Notification = styled.div`
  position: absolute;
  bottom: -80px;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;
