import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { TextSmall } from './Typography';
import closeEyeIcon from '../static/icons/close_eye.svg';
import eyeIcon from '../static/icons/eye.svg';
import { TypesInput } from '../helpers/types/types';
import calendarIcon from '../static/icons/calendar.svg';

interface IProps {
  text: string;
  disabled: boolean;
  startType: TypesInput;
  type: TypesInput;
  name: string;
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
    <InputContainer onChange={() => setDateChange(true)}>
      <TextInput>{text}</TextInput>
      <CustomInput
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
  border: ${({ isError, theme }) => (isError ? `1px solid ${theme.colors.lightestRed}` : 'none')};
  border-radius: 4px;
  padding: 7px 12px;
  background-color: ${({ theme }) => theme.colors.lightestGrey};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: ${({ isDateChanged, type, theme }) => (!isDateChanged && type === 'date' ? 'transparent' : theme.colors.darkGrey)};
  background: ${({ type }) => type === 'date' && `url(${calendarIcon}) no-repeat right 14px center`};
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
  
`;

const TextInput = styled(TextSmall)`
  color: ${({ theme }) => theme.colors.middleGrey};
`;

const TextInputError = styled(TextSmall)`
  color: ${({ theme }) => theme.colors.lightestRed};
  font-size: 12px;
`;

const ButtonChangeType = styled.button<{ typeButton: string; startType: string; }>`
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  right: 13px;
  top: 38px;
  width: 16px;
  height: 16px;
  background: ${({ typeButton, startType }) => (typeButton === startType ? `url(${closeEyeIcon})` : `url(${eyeIcon})`)}  no-repeat;
`;
