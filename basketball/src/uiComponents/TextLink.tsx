import React from 'react';
import styled from 'styled-components';
import { TextSmall } from './Typography';

interface IProps {
  text: string;
  href: string;
  disabled: boolean;
}

export const TextLink = ({ text, href, disabled }: IProps) => (
  <CustomLink disabled={disabled} href={href}>
    <LinkText>{text}</LinkText>
  </CustomLink>
);

const LinkText = styled(TextSmall)`
  line-height: 19px;
`;

const CustomLink = styled.a<{ disabled: boolean }>`
  cursor: pointer;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  color: ${({ disabled, theme }) => (disabled ? theme.colors.lightGrey : theme.colors.red)}
`;
