import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoImage } from '../static/icons/ball.svg';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';

export const BrandLogo = () => (
  <Logo />
);

const Logo = styled(LogoImage)`
  width: 191px;
  height: 48px;
  
  @media(max-width: ${mobileVersionLayout}) {
    width: 137px;
    height: 34px;
  }
`;
