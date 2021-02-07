import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TextSmall } from './Typography';
import { mobileLayout } from '../helpers/constants/mobileSize';

interface IProps {
  text: string;
  to: string;
  disabled: boolean;
}

export const TextLink: FC<IProps> = React.memo(({ text, to, disabled }) => (
  <CustomLink disabled={disabled} to={to}>
    <LinkText>{text}</LinkText>
  </CustomLink>
));

const CustomLink = styled(Link)<{ disabled: boolean }>`
  cursor: pointer;
  word-break: break-word;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  color: ${({ disabled, theme }) => (disabled ? theme.colors.lightGrey : theme.colors.red)}
`;

const LinkText = styled(TextSmall)`
 @media(max-width: ${mobileLayout}) {
   font-size: 13px;
   line-height: 18px;
 }
`;
