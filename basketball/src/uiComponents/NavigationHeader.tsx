import React, { useContext } from 'react';
import styled from 'styled-components';
import { BrandLogo } from './BrandLogo';
import { AuthorizedUserLogo } from './AuthorizedUserLogo';
import menuIcon from '../static/icons/menu.svg';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';
import { ContextMenuProvider } from '../components/Baselayout';

export const NavigationHeader = () => {
  const { toggleStateMenu } = useContext(ContextMenuProvider);

  return (
    <ContainerNavigation>
      <ButtonSandwich onClick={toggleStateMenu} />
      <BrandLogo />
      <AuthorizedUserLogo name="Test test" />
    </ContainerNavigation>
  );
};

const ButtonSandwich = styled.button`
  display: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  background: url(${menuIcon}) no-repeat;
  width: 24px;
  height: 24px;
  
  @media(max-width: ${mobileVersionLayout}) {
    display: block;
    position: absolute;
    top: 30px;
    left: 20px;
  }
`;

const ContainerNavigation = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 16px 53px;
  box-shadow: 0 1px 10px rgba(209, 209, 209, 0.5);

  @media(max-width: ${mobileVersionLayout}) {
    justify-content: center;
    & div  {
      display: none;
    }
  }
`;
