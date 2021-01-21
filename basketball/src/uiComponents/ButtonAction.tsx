import React, { FC } from 'react';
import styled from 'styled-components';
import { TextStandart } from './Typography';
import { SizesButton } from '../helpers/types/types';

interface IProps {
  type: 'Sign' | 'Add' | 'Cancel';
  size: SizesButton;
  text: string;
  disabled: boolean;
}

export const ButtonAction: FC<IProps> = ({
  type, size, text, disabled,
}) => (
  <ButtonStyled disabled={disabled} typeButton={type} size={size}>
    <TextStandart>
      {text}
    </TextStandart>
    {type === 'Add' && <TextAdd>+</TextAdd>}
  </ButtonStyled>
);

const ButtonStyled = styled.button<{ typeButton: string, size: string }>`
  cursor: pointer;
  outline: none;
  border: ${({ typeButton, theme }) => (typeButton === 'Cancel' ? `1px solid ${theme.colors.grey}` : 'none')};
  border-radius: 4px;
  padding: ${({ size, theme }) => theme.sizes.buttonsSizes[size]};
  background-color: ${({ typeButton, theme }) => (typeButton === 'Cancel' ? theme.colors.white : theme.colors.red)};
  color: ${({ typeButton, theme }) => (typeButton === 'Cancel' ? theme.colors.grey : theme.colors.white)};

  &:hover {
    background-color: ${({
    typeButton,
    theme,
  }) => (typeButton === 'Cancel' ? theme.colors.lightGrey : theme.colors.lightRed)};
  }

  &:active {
    background-color: ${({ typeButton, theme }) => (typeButton === 'Cancel' ? theme.colors.grey : theme.colors.darkRed)};
    border: ${({ typeButton, theme }) => (typeButton === 'Cancel' ? `1px solid ${theme.colors.middleGrey}` : 'none')};
    color: ${({ typeButton, theme }) => (typeButton === 'Cancel' ? theme.colors.middleGrey : theme.colors.white)};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightestGrey};
    color: ${({ theme }) => theme.colors.lightGrey};
    cursor: auto;
  }
`;

const TextAdd = styled(TextStandart)`
  margin-left: 12px;
`;
