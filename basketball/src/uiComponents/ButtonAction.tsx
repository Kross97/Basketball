import React, { FC } from 'react';
import styled from 'styled-components';
import { TextStandart } from './Typography';
import { SizesButton, TypesButton } from '../helpers/types/types';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';

interface IProps {
  isNegativeStyle: boolean;
  isAdding: boolean;
  size: SizesButton;
  text: string;
  disabled: boolean;
  type: TypesButton;
  onClick?: () => void;
}

export const ButtonAction: FC<IProps> = ({
  type, isNegativeStyle, isAdding, size, text, disabled, onClick,
}) => (
  <ButtonStyled
    type={type}
    disabled={disabled}
    isNegativeStyle={isNegativeStyle}
    size={size}
    onClick={onClick}
  >
    <TextStandart>
      {text}
    </TextStandart>
    {isAdding && <TextAdd>+</TextAdd>}
  </ButtonStyled>
);

const ButtonStyled = styled.button<{ isNegativeStyle: boolean, size: string }>`
  cursor: pointer;
  outline: none;
  border: ${({ isNegativeStyle, theme }) => (isNegativeStyle ? `1px solid ${theme.colors.grey}` : 'none')};
  border-radius: 4px;
  padding: ${({ size, theme }) => theme.sizes.buttonsSizes[size]};
  background-color: ${({ isNegativeStyle, theme }) => (isNegativeStyle ? theme.colors.white : theme.colors.red)};
  color: ${({ isNegativeStyle, theme }) => (isNegativeStyle ? theme.colors.grey : theme.colors.white)};
  max-height: 40px;
  
  &:hover {
    background-color: ${({
    isNegativeStyle,
    theme,
  }) => (isNegativeStyle ? theme.colors.lightGrey : theme.colors.lightRed)};
  }

  &:active {
    background-color: ${({ isNegativeStyle, theme }) => (isNegativeStyle ? theme.colors.grey : theme.colors.darkRed)};
    border: ${({ isNegativeStyle, theme }) => (isNegativeStyle ? `1px solid ${theme.colors.middleGrey}` : 'none')};
    color: ${({ isNegativeStyle, theme }) => (isNegativeStyle ? theme.colors.middleGrey : theme.colors.white)};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightestGrey};
    color: ${({ theme }) => theme.colors.lightGrey};
    cursor: auto;
  }
  
  @media(max-width: ${mobileVersionLayout}) {
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;

const TextAdd = styled(TextStandart)`
  margin-left: 12px;
  font-size: 18px;
`;
