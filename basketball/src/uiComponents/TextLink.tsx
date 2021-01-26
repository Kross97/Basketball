import React, { FC } from 'react';
import styled from 'styled-components';
import { TextSmall } from './Typography';
import { sizeMobile } from '../helpers/constants/mobileSize';

interface IProps {
  text: string;
  href: string;
  disabled: boolean;
}

export const TextLink: FC<IProps> = ({ text, href, disabled }) => (
  <CustomLink disabled={disabled} href={href}>
    <LinkText>{text}</LinkText>
  </CustomLink>
);

const LinkText = styled(TextSmall)`
  line-height: 19px;
  font-weight: 600;

  @media(max-width: ${sizeMobile}) {
    font-size: 12px;
  }
`;

const CustomLink = styled.a<{ disabled: boolean }>`
  cursor: pointer;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  color: ${({ disabled, theme }) => (disabled ? theme.colors.lightGrey : theme.colors.red)}
`;
