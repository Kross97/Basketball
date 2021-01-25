import React, { FC } from 'react';
import styled from 'styled-components';
import { TextSmall } from './Typography';

interface IProps {
  text: string;
  disabled: boolean;
  name: string;
  register?: (ref: any) => void;
  isError?: boolean;
  errorMessage?: string;
}

export const CheckboxСhoice: FC<IProps> = ({
  text, disabled, name, register, isError = false, errorMessage = '',
}) => (
  <Container>
    <CheckboxContainer disabled={disabled}>
      <CheckboxNative name={name} ref={register} disabled={disabled} type="checkbox" />
      <CheckboxCustom isError={isError}>
        <Arrow />
      </CheckboxCustom>
      <TextCheckBox>{text}</TextCheckBox>
    </CheckboxContainer>
    {isError && <TextError>{errorMessage}</TextError>}
  </Container>
);

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const CheckboxContainer = styled.label<{ disabled: boolean }>`
  display: inline-flex;
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
`;

const TextCheckBox = styled(TextSmall)`
  line-height: normal;
  margin-left: 10px;
`;

const CheckboxCustom = styled.div<{ isError: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  position: relative;
  border: 1px solid ${({ isError, theme }) => (isError ? theme.colors.lightestRed : theme.colors.grey)};

  &:hover {
    ${({ isError, theme }) => !isError && `border: 1px solid ${theme.colors.red}`};
  }

  & ~ ${TextCheckBox} {
    color: ${({ isError, theme }) => (isError ? theme.colors.lightestRed : theme.colors.middleGrey)};
  }
`;

const TextError = styled(TextSmall)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.lightestRed};
`;

const Arrow = styled.div`
  position: absolute;
  top: 3px;
  left: 2px;
  border-radius: 1px;
  display: none;
  border: 2px solid ${({ theme }) => theme.colors.white};
  width: 7px;
  height: 3px;
  border-top: none;
  border-right: none;
  transform: rotate(-45deg);
`;

const CheckboxNative = styled.input`
  width: 0;
  height: 0;
  position: absolute;
  cursor: pointer;

  &:checked ~ ${CheckboxCustom} ${Arrow} {
    display: block;
  }

  &:checked ~ ${CheckboxCustom} {
    background-color: ${({ theme }) => theme.colors.red};
    border: 1px solid ${({ theme }) => theme.colors.red};
  }

  &:disabled ~ ${CheckboxCustom} {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border: 1px solid ${({ theme }) => theme.colors.grey};
  }

  &:disabled ~ ${TextCheckBox} {
    color: ${({ theme }) => theme.colors.grey};
  }
`;
