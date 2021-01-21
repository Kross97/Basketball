import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoImage } from '../static/icons/ball.svg';

export const BrandLogo = () => (
  <Logo />
);

const Logo = styled(LogoImage)`
  width: 191px;
  height: 48px;
`;
