import React, { useContext } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { BrandLogo } from './BrandLogo';
import { AuthorizedUserLogo } from './AuthorizedUserLogo';
import menuIcon from '../static/icons/menu.svg';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';
import { ContextMenuProvider } from '../components/Baselayout';
import { IStoreReducer } from '../helpers/interfaces/StoreReducer';

export const NavigationHeader = () => {
  const { toggleStateMenu, toggleStateChangeMenu } = useContext(ContextMenuProvider);
  const { name, avatarUrl } = useSelector(({ authDataUser: { authData } }: IStoreReducer) => ({
    name: authData.name,
    avatarUrl: authData.avatarUrl,
  }));
  return (
    <ContainerNavigation>
      <ButtonSandwich onClick={toggleStateMenu} />
      <BrandLogo />
      <AuthorizedUserLogo onClick={toggleStateChangeMenu} name={name} avatarUrl={avatarUrl} />
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
    top: 21px;
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
