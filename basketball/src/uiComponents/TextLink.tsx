import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TextSmall } from './Typography';

interface IProps {
  text: string;
  to: string;
  disabled: boolean;
}

export const TextLink: FC<IProps> = ({ text, to, disabled }) => (
  <CustomLink disabled={disabled} to={to}>
    <TextSmall>{text}</TextSmall>
  </CustomLink>
);

const CustomLink = styled(Link)<{ disabled: boolean }>`
  cursor: pointer;
  word-break: break-word;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  color: ${({ disabled, theme }) => (disabled ? theme.colors.lightGrey : theme.colors.red)}
`;
