import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TextSmall } from './Typography';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';

interface IProps {
  text: string;
  to: string;
  disabled: boolean;
}

export const TextLink: FC<IProps> = ({ text, to, disabled }) => (
  <CustomLink disabled={disabled} to={to}>
    <LinkText>{text}</LinkText>
  </CustomLink>
);

const LinkText = styled(TextSmall)`
  line-height: 19px;
  font-weight: 600;

  @media(max-width: ${mobileVersionLayout}) {
    font-size: 12px;
  }
`;

const CustomLink = styled(Link)<{ disabled: boolean }>`
  cursor: pointer;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  color: ${({ disabled, theme }) => (disabled ? theme.colors.lightGrey : theme.colors.red)}
`;
