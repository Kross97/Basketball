import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { AuthorizedUserLogo } from './AuthorizedUserLogo';
import menuIcon from '../static/icons/menu.svg';
import { mobileVersionLayout } from '../helpers/constants/mobileSize';
import { StoreReducer } from '../helpers/interfaces/StoreReducer';
import { useCustomActions } from '../helpers/functions/useCustomActions';
import { menuReducer } from '../store/reducers/sandwichAndChangeMenu';
import { routePaths } from '../helpers/constants/routePaths';

const actionCreators = {
  toggleStatusSandwichMenu: menuReducer.actions.toggleStatusSandwichMenu,
};

export const NavigationHeader = () => {
  const { name, avatarUrl } = useSelector(({ authDataUser: { authData } }: StoreReducer) => ({
    name: authData.name,
    avatarUrl: authData.avatarUrl,
  }));

  const history = useHistory();

  const {
    toggleStatusSandwichMenu,
  } = useCustomActions(actionCreators);

  const showUserChange = useCallback(() => {
    history.push(routePaths.changeUser);
  }, []);

  return (
    <ContainerNavigation>
      <ButtonSandwich onClick={toggleStatusSandwichMenu} />
      <BrandLogo />
      <AuthorizedUserLogo
        onClick={showUserChange}
        name={name}
        avatarUrl={avatarUrl}
      />
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

  @media (max-width: ${mobileVersionLayout}) {
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

  @media (max-width: ${mobileVersionLayout}) {
    justify-content: center;
    & div {
      display: none;
    }
  }
`;
