import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { TextSmall } from './Typography';
import closeEyeIcon from '../static/icons/close_eye.svg';
import eyeIcon from '../static/icons/eye.svg';
import { TypesInput } from '../helpers/types/types';
import calendarIcon from '../static/icons/calendar.svg';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';

interface IProps {
  text: string;
  disabled: boolean;
  startType: TypesInput;
  type: TypesInput;
  name: string;
  onChange?: () => void;
  defaultValue?: string | number;
  register?: (field: any) => void;
  changeTypeInput?: () => void;
  isError?: boolean;
  errorMessage?: string;
}

export const FieldInputData: FC<IProps> = ({
  text,
  disabled,
  startType,
  onChange,
  type,
  name,
  defaultValue,
  register,
  changeTypeInput,
  isError = false,
  errorMessage = '',

}) => {
  const [isDateChanged, setDateChange] = useState<boolean>(() => (
    typeof defaultValue === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(defaultValue)));
  return (
    <InputContainer htmlFor={name} onChange={() => setDateChange(true)}>
      <TextInput>{text}</TextInput>
      <CustomInput
        onChange={onChange}
        name={name}
        type={type}
        disabled={disabled}
        isError={isError}
        defaultValue={defaultValue}
        ref={register}
        isDateChanged={isDateChanged}
      />
      {isError && <TextInputError>{errorMessage}</TextInputError>}
      {startType === 'password'
    && <ButtonChangeType type="button" onClick={changeTypeInput} typeButton={type} startType={startType} />}
    </InputContainer>
  );
};

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  outline: none;
`;

const CustomInput = styled.input<{ type: string, isError: boolean, isDateChanged: boolean }>`
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
  color: ${({ isDateChanged, type, theme }) => (!isDateChanged && type === 'date' ? 'transparent' : theme.colors.darkGrey)};
  background: ${({ type, theme }) => type === 'date' && `${theme.colors.lightestGrey} url(${calendarIcon}) no-repeat right 14px center`};
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
    position: absolute;
    cursor: pointer;
    background: none;
    outline: none;
    top: 0;
    left: -30px;
    width: 100%;
    height: 100%;
  }
  
  @media(max-width: ${mobileVersionLayout}) {
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
  background: ${({ typeButton, startType }) => (typeButton === startType ? `url(${closeEyeIcon})` : `url(${eyeIcon})`)}  no-repeat;
  
  @media(max-width: ${mobileVersionLayout}) {
    top: 34px;
  }
`;
