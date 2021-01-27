import React, { FC } from 'react';
import styled from 'styled-components';
import { TextSmall } from './Typography';
import closeEyeIcon from '../static/icons/close_eye.svg';
import eyeIcon from '../static/icons/eye.svg';
import { TypesInput } from '../helpers/types/types';

interface IProps {
  text: string;
  disabled: boolean;
  startType: TypesInput;
  type: TypesInput;
  name: string;
  defaultValue?: string;
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
  register,
  changeTypeInput,
  isError = false,
  errorMessage = '',
}) => (
  <InputContainer>
    <TextInput>{text}</TextInput>
    <CustomInput
      name={name}
      type={type}
      disabled={disabled}
      isError={isError}
      ref={register}
    />
    {isError && <TextInputError>{errorMessage}</TextInputError>}
    {startType === 'password' && <ButtonChangeType type="button" onClick={changeTypeInput} typeButton={type} startType={startType} />}
  </InputContainer>
);

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
`;

const CustomInput = styled.input<{ isError: boolean }>`
  outline: none;
  border: ${({ isError, theme }) => (isError ? `1px solid ${theme.colors.lightestRed}` : 'none')};
  border-radius: 4px;
  padding: 7px 12px;
  background-color: ${({ theme }) => theme.colors.lightestGrey};
  font-style: normal;
  font-weight: 600;
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
