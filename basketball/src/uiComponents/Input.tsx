import React from "react";
import styled from "styled-components";
import { TextSmall } from "./Typography";

interface IProps {
    text: string;
    disabled: boolean;
    type: "text" | "password";
    isError?: boolean;
    errorMessage?: string;
}

export const Input = ({ text, disabled, type, isError = false, errorMessage = '' }: IProps) => {
  return (
      <InputContainer>
          <TextInput>{text}</TextInput>
          <CustomInput type={type} disabled={disabled} isError={isError} />
          { isError && <TextInputError>{errorMessage}</TextInputError> }
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
  border: ${({ isError, theme }) => isError ? `1px solid ${theme.colors.lightestRed}` : 'none' };
  border-radius: 4px; 
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.lightestGrey };
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.darkGrey };
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey };
  }
  
  &:focus {
    box-shadow: 0px 0px 5px #D9D9D9;
    background-color: ${({ theme }) => theme.colors.lightestGrey };
  }

  &:disabled {
    cursor: auto;
    background-color: ${({ theme }) => theme.colors.lightestGrey };
  }
`;

const TextInput = styled(TextSmall)`
 color: ${({ theme }) => theme.colors.middleGrey };
`;

const TextInputError = styled(TextSmall)`
 color: ${({ theme }) => theme.colors.lightestRed };
  font-size: 12px;
`;