import React from 'react';
import styled from 'styled-components';
import { TextSmall } from './Typography';

interface IProps {
  text: string;
  disabled: boolean;
  type: 'text' | 'password';
  isError?: boolean;
  errorMessage?: string;
}

export const FieldInputData = ({
  text, disabled, type, isError = false, errorMessage = '',
}: IProps) => (
  <InputContainer>
    <TextInput>{text}</TextInput>
    <CustomInput type={type} disabled={disabled} isError={isError} />
    {isError && <TextInputError>{errorMessage}</TextInputError>}
  </InputContainer>
);

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const CustomInput = styled.input<{ isError: boolean }>`
  outline: none;
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
  }
`;

const TextInput = styled(TextSmall)`
  color: ${({ theme }) => theme.colors.middleGrey};
`;

const TextInputError = styled(TextSmall)`
  color: ${({ theme }) => theme.colors.lightestRed};
  font-size: 12px;
`;
