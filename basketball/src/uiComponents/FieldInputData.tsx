import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { TextSmall } from './Typography';

interface IProps {
  text: string;
  disabled: boolean;
  type: 'text' | 'password';
  isError?: boolean;
  errorMessage?: string;
}

export const FieldInputData: FC<IProps> = ({
  text, disabled, type, isError = false, errorMessage = '',
}) => {
  const [data, setData] = useState<string>('');

  const changeHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setData(value);
  };

  return (
    <InputContainer>
      <TextInput>{text}</TextInput>
      <CustomInput
        onInput={changeHandler}
        type={type}
        disabled={disabled}
        isError={isError}
        value={data}
      />
      {isError && <TextInputError>{errorMessage}</TextInputError>}
    </InputContainer>
  );
};

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
