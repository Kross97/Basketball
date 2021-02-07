import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { capitalize } from 'lodash';
import { TextSmall } from './Typography';
import closeEyeIcon from '../static/icons/close_eye.svg';
import eyeIcon from '../static/icons/eye.svg';
import { TypesInput } from '../helpers/types/types';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';
import { valueForCapitalize } from '../helpers/constants/formatingNames';

interface IProps {
  text: string;
  disabled: boolean;
  startType: TypesInput;
  type: TypesInput;
  name: string;
  onChange?: () => void;
  onBlur?: () => void;
  defaultValue?: string | number;
  register?: (field: any) => void;
  changeTypeInput?: () => void;
  isError?: boolean;
  errorMessage?: string;
}

export const FieldInputData: FC<IProps> = React.memo(({
  text,
  disabled,
  startType,
  onChange,
  onBlur,
  type,
  name,
  defaultValue,
  register,
  changeTypeInput,
  isError = false,
  errorMessage = '',

}) => {
  const [value, setValue] = useState<string>((defaultValue && `${defaultValue}`) || '');
  const changeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (valueForCapitalize.has(name)) {
      setValue(capitalize(target.value));
    } else {
      setValue(target.value);
    }

    if (onChange) {
      onChange();
    }
  };

  return (
    <InputContainer htmlFor={name}>
      <TextInput>{text}</TextInput>
      <CustomInput
        onChange={changeHandler}
        onBlur={onBlur}
        name={name}
        type={type}
        disabled={disabled}
        isError={isError}
        defaultValue={defaultValue}
        ref={register}
        value={value}
      />
      {isError && <TextInputError>{errorMessage}</TextInputError>}
      {startType === 'password'
            && <ButtonChangeType type="button" onClick={changeTypeInput} typeButton={type} startType={startType} />}
    </InputContainer>
  );
});

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  outline: none;
`;

const CustomInput = styled.input<{ type: string, isError: boolean }>`
  outline: none;
  box-sizing: border-box;
  border: ${({ isError, theme }) => (isError ? `1px solid ${theme.colors.lightestRed}` : 'none')};
  border-radius: 4px;
  padding: 7px 12px;
  background-color: ${({ theme }) => theme.colors.lightestGrey};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.darkGrey};

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }

  &:focus {
    box-shadow: 0 0 5px #D9D9D9;
    background-color: ${({ theme }) => theme.colors.lightestGrey};
  }

  &:disabled {
    cursor: auto;
    background-color: ${({ theme }) => theme.colors.lightestGrey};
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  @media (max-width: ${mobileVersionLayout}) {
    padding: 4px 12px;
  }

`;

const TextInput = styled(TextSmall)`
  color: ${({ theme }) => theme.colors.middleGrey};
`;

const TextInputError = styled(TextSmall)`
  color: ${({ theme }) => theme.colors.lightestRed};
  font-size: 12px;
  position: absolute;
  bottom: -23px;
`;

const ButtonChangeType = styled.button<{ typeButton: string; startType: string; }>`
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  right: 13px;
  top: 37px;
  width: 16px;
  height: 16px;
  background: ${({
    typeButton,
    startType,
  }) => (typeButton === startType ? `url(${closeEyeIcon})` : `url(${eyeIcon})`)} no-repeat;

  @media (max-width: ${mobileVersionLayout}) {
    top: 34px;
  }
`;
