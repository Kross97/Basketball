import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TextSmall } from './Typography';
import { mobileLayout } from '../helpers/constants/mobileSize';

interface IProps {
  to: string;
  disabled: boolean;
  text?: string;
  onClick?: () => void;
}

export const TextLink: FC<IProps> = React.memo(({
  text, onClick, to, disabled, children,
}) => (
  <CustomLink disabled={disabled} to={to} onClick={onClick}>
    {text && <LinkText>{text}</LinkText>}
    {children}
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
